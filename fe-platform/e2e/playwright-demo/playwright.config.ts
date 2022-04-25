import { PlaywrightTestConfig, devices } from '@playwright/test';

const config: PlaywrightTestConfig = {
  // forbidOnly: !!process.env.CI,
  // retries: process.env.CI ? 2 : 0,
  // globalSetup: require.resolve('./global-setup.ts'),
  timeout: 0,
  use: {
    headless: false,
    // trace: 'on-first-retry',
    // trace: {
    //   mode: 'on',
    //   screenshots: true,   // 和调试工具 Performance 一样记录每个时间点的快照
    //   snapshots: true      // 记录每个点击事件前后的快照
    // },
    // 通用的 API request config
    baseURL: 'https://api.github.com',
    extraHTTPHeaders: {
      // We set this header per GitHub guidelines.
      'Accept': 'application/vnd.github.v3+json',
      // Add authorization token to all requests.
      // Assuming personal access token available in the environment.
      'Authorization': `token ${process.env.API_TOKEN}`,
    },
  },
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        // channel: 'chrome',  // 'msedge' or 'chrome'
      },
    },
    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },
    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },
  ],
};

export default config;