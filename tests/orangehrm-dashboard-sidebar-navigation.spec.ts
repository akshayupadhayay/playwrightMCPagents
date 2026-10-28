// spec: specs/orangehrm-dashboard.plan.md
// seed: tests/seed.spec.ts

import { expect, test } from '@playwright/test';

test.describe('OrangeHRM Dashboard', () => {
  test('Return to the dashboard from the Time module', async ({ page }) => {
    // 1. Log in to the OrangeHRM public demo and verify the Dashboard is displayed.
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
    await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page).toHaveURL(/\/web\/index\.php\/dashboard\/index$/);
    await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();

    // 2. Open the Time module from the sidebar.
    await page.getByRole('link', { name: 'Time', exact: true }).click();
    await expect(page).toHaveURL(/\/web\/index\.php\/time\/viewEmployeeTimesheet$/);

    // 3. Use the sidebar to return to the Dashboard.
    await page.getByRole('link', { name: 'Dashboard', exact: true }).click();
    await expect(page).toHaveURL(/\/web\/index\.php\/dashboard\/index$/);
    await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
  });
});
