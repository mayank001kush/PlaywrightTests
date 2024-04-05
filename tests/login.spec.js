/*const { test, expect } = require("@playwright/test");

//test.use({viewport:{width:1138,height:595}})

test("Valid login", async ({ page }) => {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");


    //console.log (await page.viewportSize().width)
    //console.log (await page.viewportSize().height)
    // Typing username
    await page.locator('input[placeholder="Username"]').type("Admin",{delay:200});

    // Typing password
    await page.locator('input[placeholder="Password"]').type("admin123",{delay:200});

    // Clicking the login button
    await page.locator('button[type="submit"]').click();
   // await page.waitForTimeout(5000)

    // Verifying if the URL after login contains '/dashboard'
    await expect(page).toHaveURL(/dashboard/);

    await page.getByAltText("Profile picture").first().click()
    await page.getByText("Logout").click()
    //await page.waitForTimeout(5000)

    await expect(page).toHaveURL(/login/)

});

*/


const { test, expect } = require('@playwright/test');
const testdata = JSON.parse(JSON.stringify(require("../testlogin.json")))

test.describe("Data Driven Login Test",function(){
    
    for( const data of testdata)
    {
test.describe(`Login with users ${data.id}`, function(){

    test("Login To Applications", async ({ page }) => {

        await page.goto("https://freelance-learn-automation.vercel.app/login")
        await page.locator("//input[@id='email1']").fill(data.username)
        
        await page.locator("//input[@id='password1']").fill(data.password)
        await page.pause()
        //await page.locator("//button[normalize-space()='Sign in']").click()
        //await page.waitForTimeout(3000)
    
    
    
    });
})
    }

})

/*test("Login To Applications", async ({ page }) => {

    await page.goto("https://freelance-learn-automation.vercel.app/login")
    await page.locator("//input[@id='email1']").fill(testdata.username)
    
    await page.locator("//input[@id='password1']").fill(testdata.password)
    await page.pause()
    //await page.locator("//button[normalize-space()='Sign in']").click()
    //await page.waitForTimeout(3000)



}); */