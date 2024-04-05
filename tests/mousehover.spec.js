

const { test, expect } = require('@playwright/test');

test("Mouse Hover", async ({ page }) => {
    await page.goto("https://freelance-learn-automation.vercel.app/login");

    await page.fill('[placeholder="Enter Email"]', "admin@email.com");
    await page.fill('[placeholder="Enter Password"]', "admin@123");
    await page.click('button:has-text("Sign in")');

    await page.waitForTimeout(5000);

    // Instead of directly hovering over the locator, we'll find the element first
    const manageElement = await page.waitForSelector('span:text("Manage")');
    await manageElement.hover({ force: true });

    await page.click('a:has-text("Manage Courses")');
});
