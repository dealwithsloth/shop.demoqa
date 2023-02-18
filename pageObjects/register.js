class Register {
    get registerColumn() {
        return cy.get('.u-column2')
    }

    get usernameInputField() {
        return cy.get('#reg_username')
    }

    get emailAddressInputField() {
        return cy.get('#reg_email')
    }

    get passwordInputField() {
        return cy.get('#reg_password')
    }

    get showPasswordInput() {
        return cy.get('.woocommerce-form-register .show-password-input')
    }

    get errorMessage() {
        return cy.get('.woocommerce-error')
    }

    get registerButton() {
        return cy.get("[name='register']")
    }

    get passwordStrengthMeter() {
        return cy.get('.woocommerce-password-strength')
    }

    get passwordHint() {
        return cy.get('.woocommerce-password-hint')
    }
}

export default new Register()