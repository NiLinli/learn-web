import { chromium, FullConfig } from '@playwright/test';
import path from 'path';
import os from 'os';

export const DIR = path.join(os.tmpdir(), 'test-file');

async function globalSetup(config: FullConfig) {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  await page.goto('https://github.com/login');
  await page.fill('input[name="login"]', 'nilinli1994@gmail.com');
  await page.fill('input[name="password"]', '*****');
  await page.click('input:has-text("Sign in")');


  await page.context().storageState({ path: path.join(DIR, 'githubStorageState.json') });
  await browser.close();

  // etc 可以开启多个浏览器保存多个页面状态
}

export default globalSetup;