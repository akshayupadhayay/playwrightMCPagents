# OrangeHRM Dashboard Test Plan

## Application Overview

Validate the OrangeHRM demo login and dashboard, including its Quick Launch navigation, dashboard return navigation, and logout flow. Each scenario starts from a fresh browser state and avoids dynamic dashboard data.

## Test Scenarios

### 1. OrangeHRM Dashboard

**Seed:** `tests/seed.spec.ts`

#### 1.1. Log in and verify the dashboard is displayed

**File:** `tests/orangehrm-dashboard.spec.ts`

**Steps:**
  1. Open the OrangeHRM public demo login page at https://opensource-demo.orangehrmlive.com/web/index.php/auth/login.
    - expect: The Login heading and Username and Password fields are visible.
  2. Enter the publicly displayed demo credentials into the Username and Password fields.
  3. Click Login.
    - expect: The browser navigates to the dashboard route ending in /web/index.php/dashboard/index.
    - expect: The Dashboard heading is visible.
  4. Inspect the primary dashboard widgets without relying on their dynamic contents.
    - expect: Time at Work, My Actions, Quick Launch, Buzz Latest Posts, and Employees on Leave Today are visible.
  5. Verify the dashboard includes the Employee Distribution by Sub Unit and Employee Distribution by Location sections.
    - expect: Both employee distribution section headings are visible.
  6. Verify the Quick Launch area offers the common dashboard actions.
    - expect: Assign Leave, Leave List, Timesheets, Apply Leave, My Leave, and My Timesheet are visible.

#### 1.2. Open Timesheets from Quick Launch

**File:** `tests/orangehrm-quick-launch-timesheets.spec.ts`

**Steps:**
  1. Log in to the OrangeHRM public demo using the credentials displayed on the login page.
    - expect: The Dashboard heading is visible.
  2. Click the Timesheets button in the Quick Launch widget.
    - expect: The browser navigates to /web/index.php/time/viewEmployeeTimesheet.
    - expect: The Time / Timesheets page heading is visible.

#### 1.3. Return to the dashboard from the Time module

**File:** `tests/orangehrm-dashboard-sidebar-navigation.spec.ts`

**Steps:**
  1. Log in to the OrangeHRM public demo and verify the Dashboard is displayed.
    - expect: The browser is on /web/index.php/dashboard/index.
  2. Click the Time item in the sidebar.
    - expect: The browser navigates to the Time module.
  3. Click Dashboard in the sidebar.
    - expect: The browser navigates to /web/index.php/dashboard/index.
    - expect: The Dashboard heading is visible.

#### 1.4. Log out from the dashboard

**File:** `tests/orangehrm-dashboard-logout.spec.ts`

**Steps:**
  1. Log in to the OrangeHRM public demo and verify the Dashboard is displayed.
    - expect: The Dashboard heading is visible.
  2. Open the profile menu in the top navigation.
    - expect: The menu contains a Logout option.
  3. Select Logout.
    - expect: The browser returns to the login page.
    - expect: The Login heading and login form are visible.
