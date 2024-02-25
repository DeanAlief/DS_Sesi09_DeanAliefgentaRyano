
const loginPage = require ('../pageobjects/login.page.js');
const homePage = require ('../pageobjects/home.page.js');
const itemPage = require ('../pageobjects/item.page.js');
const additemPage = require ('../pageobjects/additem.page.js');


describe ("I. Swag Labs login Testing", () => {
    it('01. should login with standard_user credentials', async () =>{
        await loginPage.open()
        await loginPage.login(process.env.USERNAME_STANDARD_USER)
        await homePage.validateHomePage()
    })

    it('02. should get login error message with locked_out_user credentials', async () =>{
        await loginPage.open()
        await loginPage.login(process.env.USERNAME_LOCKED_OUT_USER)
        await loginPage.validateLockedOutUserError()
    })
}),
describe ("II. Swag Labs Item Checkout Testing", () => {

    it('01. should open item details and back to home page', async () =>{
        await loginPage.open()
        await loginPage.login(process.env.USERNAME_STANDARD_USER)
        await homePage.validateHomePage()
        await itemPage.validateItem()
        await homePage.validateHomePage()

    })


    it('02. should add item "Sauce Labs Backpack" and then enter customer data for checkout finalization', async () =>{
        await loginPage.open()
        await loginPage.login(process.env.USERNAME_STANDARD_USER)
        await homePage.validateHomePage()
        await additemPage.addItem()
        await additemPage.enterinfo(process.env.FIRST_NAME, process.env.LAST_NAME, process.env.POSTAL_CODE)
        await additemPage.finishcheckout()

    })

    it('03. should get error message because first name is missing', async () =>{
        await loginPage.open()
        await loginPage.login(process.env.USERNAME_STANDARD_USER)
        await homePage.validateHomePage()
        await additemPage.addItem()
        await additemPage.enterinfo(process.env.EMPTY, process.env.LAST_NAME, process.env.POSTAL_CODE)
        await additemPage.emptyfieldError()

    })

})

