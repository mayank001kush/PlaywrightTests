const { test, expect } = require('@playwright/test');

test("Handle Alert", async ({ page }) => {

await page.goto("https://the-internet.herokuapp.com/javascript_alerts")
page.on('dialog',async(d)=>{
    expect(d.type()).toContain("alert")
    expect(d.message()).toContain("I am a JS Alert")
    await d.accept()
})

await page.locator("//button[contains(text(),'Click for JS Alert')]").click()


});


test("Handle Confirm Box", async ({ page }) => {

    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")
     
    page.on('dialog',async(dialogWindow)=>{
       
        expect(dialogWindow.type()).toContain("confirm")
       
        expect(dialogWindow.message()).toContain("I am a JS Confirm")
        
        await dialogWindow.dismiss()
    })
    
    await page.locator("//button[contains(text(),'Click for JS Confirm')]").click()
    
    
    });


    test("Handle Prompt Box", async ({ page }) => {

        await page.goto("https://the-internet.herokuapp.com/javascript_alerts")
         
        page.on('dialog',async(dialogWindow)=>{
           
            expect(dialogWindow.type()).toContain("prompt")
           
            expect(dialogWindow.message()).toContain("I am a JS prompt")
            
            await dialogWindow.accept("Mayank")
            //await dialogWindow.dismiss()
        })
        
        await page.locator("//button[contains(text(),'Click for JS Prompt')]").click()
        
        await page.waitForTimeout(5000)
        });