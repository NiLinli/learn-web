import { test, expect } from '@playwright/test';

const REPO = 'learn-web';
const USER = 'NiLinli';


let apiContext;

test.beforeAll(async ({ playwright }) => {
  apiContext = await playwright.request.newContext({
    baseURL: 'https://api.github.com',
    extraHTTPHeaders: {
      'Accept': 'application/vnd.github.v3+json',
      'Authorization': `token ${process.env.API_TOKEN}`,
    },
  });
});

test.afterAll(async ({ }) => {
  await apiContext.dispose();
});


test.beforeEach(async ({ playwright, page }) => {
  await page.goto('https://github.com/login');
  await page.fill('input[name="login"]', 'nilinli1994@gmail.com');
  await page.fill('input[name="password"]', '****');
  await page.click('input:has-text("Sign in")');
});

test.skip('last created issue should be first in the list', async ({ page }) => {

  const now = Date.now();

  const newIssue = await apiContext.post(`/repos/${USER}/${REPO}/issues`, {
    data: {
      title: `[Feature] pw api & ui test ${now}`,
    }
  });
  expect(newIssue.ok()).toBeTruthy();

  await page.goto(`https://github.com/${USER}/${REPO}/issues`);

  const firstIssue = page.locator(`a[data-hovercard-type='issue']`).first();
  await expect(firstIssue).toHaveText(`[Feature] pw api & ui test ${now}`);
});

test('last created issue should be on the server', async ({ page, request }) => {

  const now = Date.now();

  await page.goto(`https://github.com/${USER}/${REPO}/issues`);
  await page.click('text=New Issue');
  await page.fill('[aria-label="Title"]', `Bug report 1 ${now}`);
  await page.fill('[aria-label="Comment body"]', 'Bug description');
  await page.click('text=Submit new issue');
  const issueId = page.url().slice(page.url().lastIndexOf('/') + 1);

  const newIssue = await request.get(`https://api.github.com/repos/${USER}/${REPO}/issues/${issueId}`);
  expect(newIssue.ok()).toBeTruthy();
  expect(await newIssue.json()).toEqual(expect.objectContaining({
    title: `Bug report 1 ${now}`
  }));
});
