class MyAccount {
    myAccountPage() {
        cy.visit('/my-account/')
    }

    myAccountDetailsPage() {
        cy.visit('/my-account/edit-account/')
    }

    get myAccountHelloContent() {
        return cy.get('.woocommerce-MyAccount-content')
    }

    get myAccountFirstNameInputField() {
        return cy.get('#account_first_name')
    }

    get myAccountLastNameInputField() {
        return cy.get('#account_last_name')
    }

    get myAccountDisplayNameInputField() {
        return cy.get('#account_display_name')
    }

    get myAccountPageTitle() {
        return cy.get('legend')
    }

    get myAccountCurrentPasswordInputField() {
        return cy.get('#password_current')
    }

    get newPasswordInputField() {
        return cy.get('#password_1')
    }

    get confirmNewPasswordInputField() {
        return cy.get('#password_2')
    }

    get saveChangesButton() {
        return cy.get("[name='save_account_details']")
    }
}

export default new MyAccount()