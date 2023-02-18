class MyAccount {
    get myAccountHelloContent() {
        return cy.get('.woocommerce-MyAccount-content')
    }

}

export default new MyAccount()