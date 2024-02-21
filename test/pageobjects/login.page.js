import { $ , expect } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get fieldUsername () {return $('#user-name');}

    get fieldPassword () {return $('#password');}

    get btnLogin () {return $('#login-button');}

    get errorLockedOutUser () {return $('//*[text()="Epic sadface: Sorry, this user has been locked out."]');}


    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    // async login (username, password) {
    //     await this.fieldUsername.setValue(username);
    //     await this.fieldPassword.setValue(password);
    //     await this.btnLogin.click();
    // }

    async login () {
        await this.fieldUsername.waitForDisplayed({timeout: 2500})
        await this.fieldUsername.setValue(process.env.USERNAME_STANDARD_USER);
        await this.fieldPassword.setValue(process.env.PASSWORD_SAUCEDEMO);
        await this.btnLogin.click();
    }

    async login2 () {
        await this.fieldUsername.waitForDisplayed({timeout: 2500})
        await this.fieldUsername.setValue(process.env.USERNAME_LOCKED_OUT_USER);
        await this.fieldPassword.setValue(process.env.PASSWORD_SAUCEDEMO);
        await this.btnLogin.click();
    }


    async validateLockedOutUserError (){
        expect(this.errorLockedOutUser).toBeDisplayed()
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('/'); //Will Open https://www.saucedemo.com/
    }
}

export default new LoginPage();
