const { $ , expect } = require ('@wdio/globals')
const Page = require ('./page.js');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ItemPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inventoryDetail () { return $('#item_4_title_link'); }

    get backtoHome () { return $('.left_component'); }


    async validateItem(){
        await this.inventoryDetail.click();
        expect(browser).toHaveUrlContaining('/inventory-item.html')
        expect(this.inventoryDetail).toBeDisplayed()
        await this.backtoHome.click();
    }

    async open(){
        return super.open('/inventory-item.html');
    }
}

module.exports = new ItemPage();
