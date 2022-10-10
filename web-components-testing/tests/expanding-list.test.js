const { test, expect } = require('@playwright/test');

test('homepage expanding UK list', async ({ page }) => {
  // TODO start the server here
  await page.goto('http://localhost:30303/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/web components example/i);

  // Click the UK item to expand it
  const uk = page.locator('text=uk');
  const yorkshire = page.locator('#yorkshire');
  await expect(yorkshire).not.toBeVisible();
  await uk.click();
  await expect(yorkshire).toBeVisible();
  await uk.click();
  await expect(yorkshire).not.toBeVisible();
});
