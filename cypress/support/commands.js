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
        login.passwordInputField.type(userTestData.userCorrect.password)
        login.loginButton.should('exist')
        login.loginButton.click()
    })
})