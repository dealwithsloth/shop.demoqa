/// <reference types="cypress" />
class Checkout {
    checkoutPageLink() {
        cy.visit('/checkout/')
    }

    get emptyCheckoutInfo() {
        return cy.get('div.woocommerce-info')
    }

    get showCouponInputField() {
        return cy.get('.showcoupon')
    }

    get couponBlock() {
        return cy.get('.checkout_coupon')
    }

    get couponInputField() {
        return cy.get('#coupon_code')
    }

    get applyCouponButton() {
        return cy.get("[name='apply_coupon']")
    }

    get billingFields() {
        return cy.get('.woocommerce-billing-fields')
    }

    get placeOrderButton() {
        return cy.get('#place_order')
    }

    get additionalInformationsBlock() {
        return cy.get('.woocommerce-additional-fields')
    }

    get orderCommentInputField() {
        return cy.get('#order_comments')
    }

    get termsCheckbox() {
        return cy.get('#terms')
    }

    get receivedOrderSummary() {
        return cy.get('.entry-content')
    }
}
export default new Checkout()