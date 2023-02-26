import InventoryPage from '../pageobjects/inventory.page'

describe('Main inventory page', function () {
    it('Sort the Products', async function (){
        await InventoryPage.open()
        await InventoryPage.sortSelector.selectByAttribute("value", "hilo")
        await InventoryPage.delayForViewing()
        await expect(InventoryPage.activeOption).toHaveText("PRICE (HIGH TO LOW)")
    })

    it('Find and Add most expensive product to Cart', async function () {
        await InventoryPage.addToCartButton.click()
        await InventoryPage.delayForViewing()
        await expect(InventoryPage.addToCartButton).toHaveText("REMOVE")
    })
})