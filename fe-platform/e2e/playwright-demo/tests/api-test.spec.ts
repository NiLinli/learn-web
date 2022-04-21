import { test, expect } from '@playwright/test';

const REPO = 'pw-test';
const USER = 'NiLinli';

test.describe('create github issues', () => {

  test.beforeAll(async ({ request }) => {
    // Create a new repository
    const response = await request.post('/user/repos', {
      data: {
        name: REPO
      }
    });
    expect(response.ok()).toBeTruthy();
  });

  test('should create a bug report', async ({ request }) => {
    const newIssue = await request.post(`/repos/${USER}/${REPO}/issues`, {
      data: {
        title: '[Bug] report 1 by playwright',
        body: 'Bug description',
      }
    });
    expect(newIssue.ok()).toBeTruthy();

    const issues = await request.get(`/repos/${USER}/${REPO}/issues`);
    expect(issues.ok()).toBeTruthy();
    expect(await issues.json()).toContainEqual(expect.objectContaining({
      title: '[Bug] report 1 by playwright',
      body: 'Bug description'
    }));
  });

  test('should create a feature request', async ({ request }) => {
    const newIssue = await request.post(`/repos/${USER}/${REPO}/issues`, {
      data: {
        title: '[Feature] request 1 by playwright',
        body: 'Feature description',
      }
    });
    expect(newIssue.ok()).toBeTruthy();

    const issues = await request.get(`/repos/${USER}/${REPO}/issues`);
    expect(issues.ok()).toBeTruthy();
    expect(await issues.json()).toContainEqual(expect.objectContaining({
      title: '[Feature] request 1 by playwright',
      body: 'Feature description'
    }));
  });

  test.afterAll(async ({ request }) => {
    // Delete the repository
    const response = await request.delete(`/repos/${USER}/${REPO}`);
    expect(response.ok()).toBeTruthy();
  });
});

