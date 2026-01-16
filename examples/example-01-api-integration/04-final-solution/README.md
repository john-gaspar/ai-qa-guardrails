# Final Solution: Payment API Test Plan & Pseudo-code

Scenario: `POST /accounts/{accountId}/payments` creates a payment, forwards to ledger, and honors idempotency.

## Test scenarios
1) Happy path (card): 201, response includes `confirmationCode` (non-empty), `postedAt` ISO8601, echoes request fields, `Idempotency-Key` header echoed. Ledger called once.
2) Invalid currency: 400 with validation error.
3) Missing `Idempotency-Key`: 400 with validation error.
4) Duplicate idempotency key: second call returns 409 with original body; no extra ledger call.
5) Ledger unavailable: 502 with `errorCode: "LEDGER_UNAVAILABLE"`.
6) Unauthorized: 401 when `Authorization` missing/invalid.
7) Zero amount: 400 validation.
8) Missing `metadata.invoiceId`: 400 validation.

## Pseudo-code snippets (TypeScript-style with APIRequestContext; adapt to your harness)

```ts
import { request, expect, test } from '@playwright/test';

const baseURL = '<BASE_URL>';
const authToken = '<TOKEN>';

const paymentBody = {
  amount: 12050, // cents
  currency: 'USD',
  source: { type: 'card', token: '<TOKEN_PLACEHOLDER>' },
  metadata: { invoiceId: 'inv-1001' },
};

test.beforeAll(async ({ request }) => {
  globalThis.api = await request.newContext({
    baseURL,
    extraHTTPHeaders: { Authorization: `Bearer ${authToken}` },
  });
});

test('happy path creates payment and maps ledger fields', async () => {
  const idemKey = 'idem-happy-1';
  const res = await api.post(`/accounts/${'acct-123'}/payments`, {
    data: paymentBody,
    headers: { 'Idempotency-Key': idemKey },
  });
  expect(res.status()).toBe(201);
  const body = await res.json();
  expect(body.amount).toBe(paymentBody.amount);
  expect(body.currency).toBe(paymentBody.currency);
  expect(body.source.type).toBe('card');
  expect(body.metadata.invoiceId).toBe(paymentBody.metadata.invoiceId);
  expect(body.confirmationCode).toMatch(/^[A-Z0-9]{8,}$/);
  expect(new Date(body.postedAt).toISOString()).toBe(body.postedAt);
  expect(res.headers()['idempotency-key']).toBe(idemKey);
  // assert ledger event/log stub or metric increment (if available)
});

test('duplicate idempotency returns original payment', async () => {
  const idemKey = 'idem-dup-1';
  const first = await api.post(`/accounts/${'acct-123'}/payments`, {
    data: paymentBody,
    headers: { 'Idempotency-Key': idemKey },
  });
  expect(first.status()).toBe(201);
  const firstBody = await first.json();

  const second = await api.post(`/accounts/${'acct-123'}/payments`, {
    data: paymentBody,
    headers: { 'Idempotency-Key': idemKey },
  });
  expect(second.status()).toBe(409);
  const secondBody = await second.json();
  expect(secondBody).toMatchObject(firstBody);
  // verify ledger not called twice (mock/spies or metric count remains 1)
});

test('ledger unavailable returns 502', async () => {
  // using stubbed ledger to force timeout/failure
  const res = await api.post(`/accounts/${'acct-123'}/payments`, {
    data: paymentBody,
    headers: { 'Idempotency-Key': 'idem-ledger-fail' },
  });
  expect(res.status()).toBe(502);
  expect(await res.json()).toMatchObject({ errorCode: 'LEDGER_UNAVAILABLE' });
});

test('missing auth is rejected', async () => {
  const ctx = await request.newContext({ baseURL }); // no auth header
  const res = await ctx.post(`/accounts/${'acct-123'}/payments`, { data: paymentBody });
  expect(res.status()).toBe(401);
});
```

Notes:
- Replace `<BASE_URL>` and `<TOKEN>` with env-provided values outside of source control.
- Use synthetic IDs (`acct-123`) and tokens only.
- Stub ledger calls where deterministic outcomes are needed; assert call count for idempotency.
