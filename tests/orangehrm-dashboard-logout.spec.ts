// spec: specs/orangehrm-dashboard.plan.md
// seed: tests/seed.spec.ts

import { expect, test } from '@playwright/test';

test.describe('OrangeHRM Dashboard', () => {
  test('Log out from the dashboard', async ({ page }) => {
    // 1. Log in to the OrangeHRM public demo and verify the Dashboard is displayed.
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
    await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page).toHaveURL(/\/web\/index\.php\/dashboard\/index$/);
    await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();

    // 2. Open the profile menu and confirm the Logout option is available.
    await page.locator('.oxd-userdropdown-tab').click();
    await expect(page.getByRole('menuitem', { name: 'Logout' })).toBeVisible();

    // 3. Log out and verify the login page is displayed.
    await page.getByRole('menuitem', { name: 'Logout' }).click();
    await expect(page).toHaveURL(/\/web\/index\.php\/auth\/login$/);
    await expect(page.getByRole('heading', { name: 'Login' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Login' })).toBeVisible();
  });
});
