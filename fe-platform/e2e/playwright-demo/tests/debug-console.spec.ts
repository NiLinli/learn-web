import { test } from '@playwright/test';

test('debug console test', async ({ page }) => {
  await page.goto('https://www.baidu.com/');
  await page.pause();
});
