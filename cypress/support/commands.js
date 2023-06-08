// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --

import login from "../../pageObjects/login"
import userTestData from "../fixtures/userTestData.json"
import cart from "../../pageObjects/cart" 
import productPage from "../../pageObjects/productPage"

// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.overwrite('type', (originalFn, element, text, options) => {
    if (options && options.sensitive) {
        options.log = false
        Cypress.log({
            $el: element,
            name: 'type',
            message: '*'.repeat(text.length)
        })
    }
    return originalFn(element, text, options)
})

Cypress.Commands.add('login', () => {
    cy.session('loginSession', () => {
        cy.visit('/my-account/')
        login.usernameInputField.should('be.visible')
        login.usernameInputField.clear().type(userTestData.userCorrect.mailAddress)
        login.passwordInputField.should('be.visible')
        login.passwordInputField.type(userTestData.userCorrect.password, { sensitive: true })
        login.loginButton.should('exist')
        login.loginButton.click()
    })
})

Cypress.Commands.add('addToCart', () => {
    productPage.productPageLink()
        cy.url().should('include', '/product/black-lux-graphic-t-shirt/')
        cart.pageTitle.should('be.visible').and('contain.text', 't-shirt')
        productPage.pageBreadCrumbs.should('exist').and('contain.text', 't-shirt')
        productPage.productColorSelect.should('exist')
        productPage.productColorSelect.select(1)
        productPage.productSizeSelect.should('exist')
        productPage.productSizeSelect.select(1)
        productPage.addToCartButton.should('exist').and('contain.text', 'Add to cart')
        productPage.addToCartButton.click()
})