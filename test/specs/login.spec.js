import LoginPage from '../pageobjects/login.page'

describe('Saucedemo Login Function', () => {
    it('Login with invalid credential', async () => {
        await LoginPage.open()
        await LoginPage.userName.setValue('standard_user')
        await LoginPage.password.setValue('123')
        await LoginPage.delayForViewing();
        await LoginPage.login()
        await LoginPage.delayForViewing();
        await expect(LoginPage.errorMessageContainer).toHaveElementClass('error')
    })

    it('Login with valid credential', async () => {
        await LoginPage.open()
        await LoginPage.userName.setValue('standard_user')
        await LoginPage.password.setValue('secret_sauce')
        await LoginPage.delayForViewing();
        await LoginPage.login()
        await LoginPage.delayForViewing();
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
    })
})