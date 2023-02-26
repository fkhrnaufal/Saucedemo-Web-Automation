import Page from './page'

class InventoryPage extends Page {

    get activeOption () {
        return $(".active_option")
    }

    get sortSelector () {
        return $('.product_sort_container')
    }

    get priceBar () {
        return browser.$$(".pricebar")
    }

    get addToCartButton () {
        return this.priceBar[0].$("button")
    }

    async open () {
        await super.open("https://www.saucedemo.com/inventory.html")
    }

}

export default new InventoryPage()