import { test } from '@playwright/test';

test.skip('text selector', async ({ page }) => {
  await page.goto('https://playwright.dev/docs/intro');
  await page.waitForTimeout(2000);

  // 完整写法 text=
  await page.locator('text=Inspector').first().click();
  await page.waitForTimeout(2000);

  // 简写 ""
  await page.locator('"Trace Viewer"').first().click();
  await page.waitForTimeout(2000);

  // 支持 regexp-like
  await page.locator('text=/Browser\\w+/').first().click();
  await page.waitForTimeout(2000);
});

test.skip('css selector', async ({ page }) => {
  await page.goto('https://playwright.dev/docs/intro');
  await page.waitForTimeout(2000);

  await page.locator('.menu__link:has-text("API")').click();
  await page.waitForTimeout(2000);
});

test('XPath selector', async ({ page }) => {
  await page.goto('https://playwright.dev/docs/intro');
  await page.waitForTimeout(2000);

  const a1 = page.locator('//*[@id="__docusaurus"]/div[2]/div/aside/div/nav/ul/li[1]/ul/li[4]/a');
  const a2 = page.locator('//*[@id="__docusaurus"]/div[2]/div/aside/div/nav/ul/li[1]/ul/li[4]/a >> ../../li[3]/a');

  await a1.click();
  await page.waitForTimeout(2000);

  await a2.click();
  await page.waitForTimeout(2000);
});

// not success
// test('layout position selector', async ({ page }) => {
//   await page.goto('https://playwright.dev/docs/intro');
//   await page.waitForTimeout(2000);
//   await page.locator('ul.menu__list:left-of(:text("Guides")) .menu__link >> nth=-1').click();
//   await page.waitForTimeout(2000);
// });

test.skip('chaining selectors', async ({ page }) => {
  await page.goto('https://playwright.dev/docs/intro');
  await page.waitForTimeout(2000);

  // css selector union Nth selector
  await page.locator('ul.menu__list .menu__link >> nth=-1').click();
  await page.waitForTimeout(2000);
});
