/// <reference types="cypress" />
class ProductPage {
    productPageLink() {
        cy.visit('/product/black-lux-graphic-t-shirt/')
    }

    secondProductPageLink() {
        cy.visit('/product/black-cross-back-maxi-dress/')
    }

    thirdProductPageLink() {
        cy.visit('/product/red-satin-round-neck-backless-maxi-dress/')
    }

    get pageBreadCrumbs() {
        return cy.get('.noo-page-breadcrumb')
    }

    get addToCartButton() {
        return cy.get('.single_add_to_cart_button')
    }

    get productColorSelect() {
        return cy.get('#pa_color')
    }

    get productSizeSelect() {
        return cy.get('#pa_size')
    }

    get viewCartButton() {
        return cy.get('.wc-forward')
    }
}
export default new ProductPage()