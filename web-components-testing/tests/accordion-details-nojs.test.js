const { test, expect } = require('@playwright/test');

test.use({ javaScriptEnabled: false });

test('Accordion without JavaScript, not enhanced', async ({ page }) => {
  // TODO start the server here
  await page.goto('http://localhost:30303/accordion.html');

  await expect(page).toHaveTitle(/Accordion Web Components Example/i);

  const texts = [
    page.locator('text=description of item one'),
    page.locator('text=description of item two'),
    page.locator('text= suite of different technologies'),
  ];
  await expect

  // Assert multiple visibilities in one call
  const assertVisibilty = async (info, ...expected) => {
    for(let i in texts) {
      const text = texts[i];
      if(expected[i]) {
        await expect(text, `${info}: expecting ${text} to be visible`).toBeVisible();
      } else {
        await expect(text, `${info}: expecting ${text} to be hidden`).not.toBeVisible();
      }
    }
  }

  const first = page.locator('text=the first item');
  const second = page.locator('text=the second item');
  const third = page.locator('text=the third, longer item');

  await assertVisibilty("Initial visibility", false, true, false);
  await first.click();
  await assertVisibilty("After clicking first", true, true, false);
  await second.click();
  await assertVisibilty("After clicking second", true, false, false);
  await third.click();
  await assertVisibilty("After clicking third", true, false, true);
});
