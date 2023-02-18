class MyAccount {
    myAccountPage() {
        cy.visit('https://shop.demoqa.com/my-account/')
    }
    
    get myAccountHelloContent() {
        return cy.get('.woocommerce-MyAccount-content')
    }
}

export default new MyAccount()