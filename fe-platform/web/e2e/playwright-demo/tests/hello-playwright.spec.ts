import { test, expect } from '@playwright/test';


test.skip('basic test', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  const title = page.locator('.navbar__inner .navbar__title');

  // jestjs expect library 作为断言库
  await expect(title).toHaveText('Playwright');
});

// test hooks
test.skip('feature foo', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://playwright.dev/');
  });

  test('my test', async ({ page }) => {
    await expect(page).toHaveURL('https://playwright.dev/');
  });
});

