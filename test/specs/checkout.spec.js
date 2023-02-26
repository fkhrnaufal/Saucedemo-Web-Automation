import CheckOutPage from '../pageobjects/checkout.page'

describe('Checkout & Order Confirm page', function(){
   
    it('Check the Product in Cart', async function () {
        await CheckOutPage.open()
        await CheckOutPage.openCart()
        await CheckOutPage.delayForViewing()
        await CheckOutPage.confirmCheckout()
        await CheckOutPage.delayForViewing()
    })
 
    it('Fill Payment Information', async function () {
        //Fill Information 
        await CheckOutPage.firstName.addValue("Fakhri Naufal")
        await CheckOutPage.lastName.addValue("Zuhdi")
        await CheckOutPage.postalCode.addValue("15810")
        expect(CheckOutPage.firstName).toHaveText('Fakhri Naufal')
        expect(CheckOutPage.lastName).toHaveText('Zuhdi')
        expect(CheckOutPage.postalCode).toHaveText('15810')
        await CheckOutPage.delayForViewing()
        await CheckOutPage.continueProcess()
    })
 
    it('Confirm Payment and Order', async function () {
        //Confirm Payment
        await CheckOutPage.delayForViewing()
        await CheckOutPage.finishOverview()
        await CheckOutPage.ponyExpress.waitForDisplayed(this.timeout, 1000)
        await expect(CheckOutPage.titleCheckOutComplete).toHaveText('CHECKOUT: COMPLETE!') 
        await CheckOutPage.takeScreenShot()
    })
})