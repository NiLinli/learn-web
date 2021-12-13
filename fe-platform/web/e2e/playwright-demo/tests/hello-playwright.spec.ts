import { test, expect, Page, Browser, BrowserContext } from '@playwright/test';

type Fixtures = {
  page: Page;
  context: BrowserContext;
  browser: Browser;
  browserName: 'chromium' | 'firefox' | 'webkit';
};

test('basic test', async ({ page }: Fixtures) => {
  await page.goto('https://playwright.dev/');
  const title = page.locator('.navbar__inner .navbar__title');

  // jestjs expect library 作为断言库
  await expect(title).toHaveText('Playwright');
});

// test hooks
test.describe('feature foo', () => {
  test.beforeEach(async ({ page }: Fixtures) => {
    await page.goto('https://playwright.dev/');
  });

  test('my test', async ({ page }: Fixtures) => {
    await expect(page).toHaveURL('https://playwright.dev/');
  });
});

