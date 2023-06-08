/// <reference types="cypress" />
class Cart {
    cartPageLink() {
        cy.visit('/cart/')
    }

    get pageTitle() {
        return cy.get('.page-title')
    }

    get emptyCartMessage() {
        return cy.get('.cart-empty')
    }

    get backwardCartButton() {
        return cy.get('.wc-backward')
    }

    get cartNameAndTotal() {
        return cy.get('.cart-name-and-total')
    }

    get mainContent() {
        return cy.get('#main')
    }

    get cartThead() {
        return cy.get('thead')
    }

    get deleteProductFromCartButton() {
        return cy.get('.icon_close_alt2')
    }

    get clearCart() {
        return cy.get('.empty-cart')
    }

    get undoDeleteProductFromCart() {
        return cy.get('.restore-item')
    }

    get productPictureThumbnail() {
        return cy.get('.product-thumbnail > a > .attachment-woocommerce_thumbnail')
    }

    get productName() {
        return cy.get('.product-name > a')
    }

    get quantityInputField() {
        return cy.get('.qty')
    }

    get quantityMinusButton() {
        return cy.get('.qty-decrease')
    }

    get quantityPlusButton() {
        return cy.get('.qty-increase')
    }

    get updateCartButton() {
        return cy.get('[name="update_cart"]')
    }

    get discountCodeBlock() {
        return cy.get('.noocart-coupon')
    }
    
    get discountCodeInputField() {
        return cy.get('#noo_coupon_code')
    }

    get discountCodeApplyButton() {
        return cy.get('.noo-apply-coupon')
    }
    
}
export default new Cart()