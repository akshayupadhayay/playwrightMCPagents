import { test, expect } from '@playwright/test';

test('seed browser environment is ready', async ({ page }) => {
  await page.setContent('<main><h1>Playwright seed environment</h1></main>');

  await expect(page.getByRole('heading', { name: 'Playwright seed environment' })).toBeVisible();
});
