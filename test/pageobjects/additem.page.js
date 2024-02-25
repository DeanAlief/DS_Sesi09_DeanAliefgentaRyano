const { $ , expect } = require ('@wdio/globals')
const Page = require ('./page.js');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class AddItemPage extends Page {
    /**
     * define selectors using getter methods
     */
    get additembtn () { return $('#add-to-cart-sauce-labs-backpack'); }

    get iconCart () { return $('.shopping_cart_link'); }

    get checkoutbtn () { return $('#checkout'); }

    get fieldfirstname () {return $('#first-name');}

    get fieldlastname () {return $('#last-name');}

    get fieldpostalcode () {return $('#postal-code');}

    get continuebtn () { return $('#continue'); }

    get finishbtn () { return $('#finish'); }

    get backhomebtn () { return $('#back-to-products'); }

    get errorEmptfirstname () {return $('//*[text()="Error: First Name is required"]');}

    get errorEmptlastname () {return $('//*[text()="Error: Last Name is required"]');}

    get errorEmptpostalcode () {return $('//*[text()="Error: Postal Code is required"]');}


    async addItem(){
        await this.additembtn.click();
        await this.iconCart.click();
        expect(browser).toHaveUrlContaining('/cart.html')
        expect(this.checkoutbtn).toBeDisplayed()
    }

    async enterinfo(firstname,lastname,postalcode){
        await this.checkoutbtn.click();
        await this.fieldfirstname.waitForDisplayed({timeout: 25000});
        await this.fieldfirstname.setValue(firstname);
        await this.fieldlastname.setValue(lastname);
        await this.fieldpostalcode.setValue(postalcode);
        await this.continuebtn.click();
        expect(browser).toHaveUrlContaining('/checkout-step-two.html')
        expect(this.finishbtn).toBeDisplayed()
    }

    async finishcheckout(){
        await this.finishbtn.click();
        expect(browser).toHaveUrlContaining('/checkout-complete.html')
        expect(this.backhomebtn).toBeDisplayed

    }

    async emptyfieldError (){
        expect(this.errorEmptfirstname).toBeDisplayed()
    }
    

    

    async open(){
        return super.open('/cart.html');
    }
}

module.exports = new AddItemPage();