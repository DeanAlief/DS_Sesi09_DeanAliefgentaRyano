
import LoginPage from '../pageobjects/login.page.js'
import loginPage from '../pageobjects/login.page.js'
import homePage from '../pageobjects/home.page.js'

// describe('My Login application', () => {
//     it('should login with valid credentials', async () => {
//         await LoginPage.open()

//         await LoginPage.login('tomsmith', 'SuperSecretPassword!')
//         await expect(SecurePage.flashAlert).toBeExisting()
//         await expect(SecurePage.flashAlert).toHaveTextContaining(
//             'You logged into a secure area!')
//     })
// })

describe ("Swag Labs Testing", () => {
    it('should login with standard_user credentials', async () =>{
        await LoginPage.open()
        await loginPage.login()
        await homePage.validateHomePage()
    })

    it('should get login error message with locked_out_user credentials', async () =>{
        await LoginPage.open()
        await loginPage.login2()
        await loginPage.validateLockedOutUserError()
    })
})

