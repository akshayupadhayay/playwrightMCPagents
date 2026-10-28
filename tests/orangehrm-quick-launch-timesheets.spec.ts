// spec: specs/orangehrm-dashboard.plan.md
// seed: tests/seed.spec.ts

import { expect, test } from '@playwright/test';

test.describe('OrangeHRM Dashboard', () => {
  test('Open Timesheets from Quick Launch', async ({ page }) => {
    // 1. Log in to the OrangeHRM public demo and verify the Dashboard is displayed.
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
    await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page).toHaveURL(/\/web\/index\.php\/dashboard\/index$/);
    await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();

    // 2. Open Timesheets from Quick Launch and verify its destination.
    await page.getByRole('button', { name: 'Timesheets' }).click();
    await expect(page).toHaveURL(/\/web\/index\.php\/time\/viewEmployeeTimesheet$/);
    await expect(page.getByRole('heading', { name: 'Time', exact: true })).toBeVisible();
    await expect(page.getByRole('heading', { name: '/ Timesheets', exact: true })).toBeVisible();
  });
});
