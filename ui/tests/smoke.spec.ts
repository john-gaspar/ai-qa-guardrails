import { test, expect } from '@playwright/test';

test.describe('Smoke', () => {
  test('home page loads', async ({ page }) => {
    await page.goto('/');

    await expect(page).toHaveTitle(/Example Domain/i);
    await expect(page.getByRole('heading', { name: 'Example Domain' })).toBeVisible();
  });
});
