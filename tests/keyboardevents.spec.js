const { test, expect } = require('@playwright/test');

test("Key Board Events in Playwright", async ({ page }) => {


await page.goto("https://www.google.com/")

//await page.locator("textarea[name='q']").type("Mayank kushwaha")

await page.locator("textarea[name='q']").focus()
await page.keyboard.type("Mayank kushwaha!")
await page.keyboard.press("ArrowLeft")
await page.keyboard.down("Shift")
 
for (let i=0; i<8; i++)
//(let i=0; i<'kushwaha'.length; i++)
{
    await page.keyboard.press("ArrowLeft")
}

await page.keyboard.up("Shift")
await page.keyboard.press("Backspace")
/* //await page.keyboard.press("Meta+A", "Backspace")

await page.keyboard.press("Meta+A")
await page.keyboard.press("Backspace")

//await page.keyboard.press("Enter")
*/

})