import { test, expect, Page, Browser, BrowserContext } from '@playwright/test';

// 只测试这个
// test.only('focus this test', async ({ page }) => {
//   // Run only focused tests in the entire project.
// });

// skip / skip condition
// test.skip(title, testFunction) 标记一个 test 
// test.skip() 跳出测试
// test.skip(condition, description)
// test.skip(callback, description)
test('skip this test', async ({ page, browserName }) => {
  test.skip(browserName === 'firefox', 'Still working on it');
});

// group test
test.describe('two tests', () => {

  // test.skip();
  test.skip(({ browserName }) => browserName !== 'firefox', 'FireFox only');

  test('one', async ({ page }) => {
    // ...
  });

  test('two', async ({ page }) => {
    // ...
  });
});

// tag test
test('Test login page @fast', async ({ page }) => {
  // ...
});

test('Test dashboard page @fast', async ({ page }) => {
  // ...
});

test('Test full report @slow', async ({ page }) => {
  // ...
});


// test.fail
// test.fixme
// test.slow