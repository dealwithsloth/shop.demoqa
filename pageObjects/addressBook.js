class AddressBook {
    addressBookPage() {
        cy.visit('/my-account/edit-address/')
    }

    get addressBookPageTitle() {
        return cy.get('h3')
    }

    get addNewBillingAddressButton() {
        return cy.get('.u-column1 > .woocommerce-Address-title > .edit')
    }

    get addNewShippingAddressButton() {
        return cy.get('.u-column2 > .woocommerce-Address-title > .edit')
    }

    get billingAddressFirstNameInputField() {
        return cy.get('#billing_first_name')
    }

    get billingAddressLastNameInputField() {
        return cy.get('#billing_last_name')
    }

    get billingAddressCompanyNameInputField() {
        return cy.get('#billing_company')
    }

    get billingAddressContryRegionSelect() {
        return cy.get('#select2-billing_country-container')
    }

    get billingAddressStreetFirstLineInputField() {
        return cy.get('#billing_address_1')
    }

    get billingAddressStreetSecondLineInputField() {
        return cy.get('#billing_address_2')
    }

    get billingAddressCityInputField() {
        return cy.get('#billing_city')
    }

    get billingAddressStateSelect() {
        return cy.get('#select2-billing_state-container')
    }

    get billingAddressPostCodeInputField() {
        return cy.get('#billing_postcode')
    }

    get billingAddressPhoneNumberInputField() {
        return cy.get('#billing_phone')
    }

    get billingAddressEmailInputField() {
        return cy.get('#billing_email')
    }

    get saveAddressButton() {
        return cy.get("[name='save_address']")
    }

    get shippingFirstNameInputField() {
        return cy.get('#shipping_first_name')
    }

    get shippingLastNameInputField() {
        return cy.get('#shipping_last_name')
    }

    get shippingCompanyNameInputField() {
        return cy.get('#shipping_company')
    }

    get shippingAddressFirstLineInputField() {
        return cy.get('#shipping_address_1')
    }

    get shippingAddressSecondLineInputField() {
        return cy.get('#shipping_address_2')
    }

    get shippingAddressCityInputField() {
        return cy.get('#shipping_city')
    }

    get shippingAddressStateSelect() {
        return cy.get("[aria-label='State'] > .select2-selection__rendered")
    }

    get shippingAddressCountrySelect() {
        return cy.get("[aria-label='Country / Region'] > .select2-selection__rendered")
    }

    get shippingPostCodeInputField() {
        return cy.get('#shipping_postcode')
    }
}

export default new AddressBook()