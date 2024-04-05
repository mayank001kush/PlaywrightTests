const { expect } = require("@playwright/test");
class LoginPage
{

    constructor(page)
    {
        this.page=page
        this.username="#email1"
        this.password="//input[@placeholder='Enter Password']"
        this.loginbutton="//button[text()='Sign in']"
        this.header="//h2[normalize-space()='Sign In']"
    }
    

    async loginToApplication( )
    {

        await this.page.fill(this.username,"admin@email.com")
        await this.page.fill(this.password,"admin@123")
        await this.page.click(this.loginbutton)
        

    }
    async verifySignin(){
        await expect(this.page.locator(this.header)).toBeVisible();
    }
}

module.exports=LoginPage;