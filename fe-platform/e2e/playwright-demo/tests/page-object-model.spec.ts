import { test, Page, Locator } from '@playwright/test';

test('search page wrap', async ({ page }) => {
  const searchPage = new SearchPage(page);
  await searchPage.navigate();
  await searchPage.search('O M G');
});

// Page Object Model Pattern
class SearchPage {
  page: Page;
  searchTermInput: Locator;

  constructor(page: Page) {
    this.page = page;
    this.searchTermInput = page.locator('input[type=text] >> nth=0');
  }

  async navigate() {
    await this.page.goto('https://google.com');
  }

  async search(text) {
    await this.searchTermInput.fill(text);
    await this.searchTermInput.press('Enter');
  }
}
