const { test, expect } = require('@playwright/test');
const LoginPage = require("../pages/loginpage");
const HomePage = require('../pages/homepage');



test('Login To Application',async({page}) =>
{

    await page.goto('https://freelance-learn-automation.vercel.app/login')

    const loginPage= new LoginPage(page)
    
    await loginPage.loginToApplication()

    const homepage=new HomePage(page)

    await homepage.verifyManageOption()

    await homepage.logoutFromApplication()
    await loginPage.verifySignin()



}
);

