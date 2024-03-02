import { expect, test } from '@playwright/test';

test('index page has expected content', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByText('Unlock hidden insights to empower the next generation of discovery.')).toBeDefined();
});
