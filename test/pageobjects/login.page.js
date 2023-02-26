import Page from './page'

class LoginPage extends Page {

    get userName () { 
        return $("#user-name")
    }

    get password () { 
        return $("#password") 
    }

    get loginButton () { 
        return $("#login-button") 
    }

    get errorMessageContainer () { 
        return $(".error-message-container") 
    }

    async open () {
        await super.open("https://www.saucedemo.com/")
    }

    async login () {
        await this.loginButton.click()
    }

}

export default new LoginPage()