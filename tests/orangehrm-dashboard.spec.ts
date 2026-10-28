// spec: specs/orangehrm-dashboard.plan.md
// seed: tests/seed.spec.ts

import { expect, test } from '@playwright/test';

test.describe('OrangeHRM Dashboard', () => {
  test('Log in and verify the dashboard is displayed', async ({ page }) => {
    // 1. Open the OrangeHRM demo login page and confirm the login form is visible.
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await expect(page.getByRole('heading', { name: 'Login' })).toBeVisible();
    await expect(page.getByRole('textbox', { name: 'Username' })).toBeVisible();
    await expect(page.getByRole('textbox', { name: 'Password' })).toBeVisible();

    // 2. Enter the demo credentials displayed on the login page.
    await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
    await page.getByRole('textbox', { name: 'Password' }).fill('admin123');

    // 3. Log in and verify the dashboard route and heading.
    await page.getByRole('button', { name: 'Login', exact: true }).click();
    await expect(page).toHaveURL(/\/web\/index\.php\/dashboard\/index$/);
    await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();

    // 4. Verify the stable dashboard widget headings.
    for (const widget of [
      'Time at Work',
      'My Actions',
      'Quick Launch',
      'Buzz Latest Posts',
      'Employees on Leave Today',
    ]) {
      await expect(page.getByText(widget, { exact: true })).toBeVisible();
    }

    // 5. Verify both employee distribution sections.
    await expect(page.getByText('Employee Distribution by Sub Unit', { exact: true })).toBeVisible();
    await expect(page.getByText('Employee Distribution by Location', { exact: true })).toBeVisible();

    // 6. Verify the available Quick Launch actions.
    for (const action of [
      'Assign Leave',
      'Leave List',
      'Timesheets',
      'Apply Leave',
      'My Leave',
      'My Timesheet',
    ]) {
      await expect(page.getByText(action, { exact: true })).toBeVisible();
    }
  });
});
