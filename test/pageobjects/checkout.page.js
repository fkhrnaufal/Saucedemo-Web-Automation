import Page from './page'

class CheckOutPage extends Page {

    get cartButton () { 
        return $("#shopping_cart_container")
    }

    get checkOutButton () { 
        return $("#checkout") 
    }

    get firstName () {
        return $("#first-name")
    }

    get lastName () {
        return $("#last-name")
    }

    get postalCode () {
        return $("#postal-code")
    }

    get continueButton () {
        return $("#continue")
    }

    get finishButton () {
        return $("#finish")
    }

    get titleCheckOutComplete () {
        return $(".title")
    }

    get ponyExpress () {
        return $(".pony_express")
    }

    async open () {
        await super.open("https://www.saucedemo.com/inventory.html")
    }

    async openCart () {
        await this.cartButton.click()
    }

    async confirmCheckout () {
        await this.checkOutButton.click()
    }

    async continueProcess () {
        await this.continueButton.click()
    }

    async finishOverview () {
        await this.finishButton.click()
    }

    screenshotDate () {
        const d = new Date()
        return d.getFullYear()  + "-" + (d.getMonth()+1) + "-" + d.getDate() + "-" +d.getHours() + "-" + d.getMinutes()
    }
 
    screenshotFileName () {
        return "./test/Screenshots/orderComplete_" + this.screenshotDate() + ".png"
    }

    async takeScreenShot () {
        await browser.saveScreenshot(this.screenshotFileName())
    }
}

export default new CheckOutPage()