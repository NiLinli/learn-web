import { test, expect } from '@playwright/test';

test('js function test', async ({ page }) => {
  await page.goto('https://playwright.dev/docs/intro');

  // JSHandle
  const windowHandle = await page.evaluateHandle(() => window);
  const origin = windowHandle.evaluate((window) => window.origin);
  expect(await origin).toBe('https://playwright.dev');

  // waitForFunction
  const watchDog = page.waitForFunction(() => window.scrollY > 2000);
  await watchDog;
});
