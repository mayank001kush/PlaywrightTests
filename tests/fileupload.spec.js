const { test, expect } = require('@playwright/test');

test("Verify File Upload", async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/upload");

    // Set the file input field with the specified file
    await page.locator("#file-upload").setInputFiles("/Users/mayankkushwaha/Downloads/MainAfter.webp");

    // Click the submit button
    await page.locator("#file-submit").click();

    // Expectation: Check if the uploaded file confirmation message is displayed
    await expect(page.locator("h3")).toHaveText("File Uploaded!");
});
