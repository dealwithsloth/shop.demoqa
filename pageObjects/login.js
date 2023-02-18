class Login {
    get loginColumn() {
        return cy.get('.u-column1')
    }

    get usernameInputField() {
        return cy.get('#username')
    }

    get passwordInputField() {
        return cy.get('#password')
    }

    get loginButton() {
        return cy.get("[name='login']")
    }

    get rememberMeButton() {
        return cy.get('#rememberme')
    }

    get showPasswordInput() {
        return cy.get('.woocommerce-form-login .show-password-input')
    }

    get lostPasswordLink() {
        return cy.get('.woocommerce-LostPassword > a')
    }

    get lostPasswordUsernameInputField() {
        return cy.get('#user_login')
    }

    get resetPasswordButton() {
        return cy.get('.woocommerce-Button')
    }

    get resetPasswordErrorMessage() {
        return cy.get('.woocommerce-error')
    }

    get resetPasswordSuccessMessage() {
        return cy.get('.woocommerce-message')
    }
}

export default new Login()