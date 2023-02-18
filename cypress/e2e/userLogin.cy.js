/// <reference types="cypress" />
import login from "../../pageObjects/login"
import myAccount from "../../pageObjects/myAccount"
import register from "../../pageObjects/register"
import userTestData from "../fixtures/userTestData.json"
import { generateRandomEmailAddress } from "../../utility/stringGenerator"

describe('User login test', () => {
    beforeEach(() => {
        myAccount.myAccountPage()
        login.loginColumn.should('be.visible').contains('Login')
    })

    it('Login - empty username / email field', () => {
        login.passwordInputField.should('be.visible')
        login.passwordInputField.clear().type(userTestData.userCorrect.password, { sensitive: true })
        login.loginButton.should('exist')
        login.loginButton.click()
        register.errorMessage.should('exist').contains('Error: Username is required.')
    })

    it('Login - empty password field', () => {
        login.usernameInputField.should('be.visible')
        login.usernameInputField.clear().type(userTestData.userCorrect.mailAddress)
        login.loginButton.should('exist')
        login.loginButton.click()
        register.errorMessage.should('exist').contains('Error: The password field is empty.')
    })

    it('Login - show password option', () => {
        login.passwordInputField.should('be.visible')
        login.passwordInputField.type(userTestData.userCorrect.password)
        login.passwordInputField.should('not.eql', userTestData.userCorrect.password)
        login.showPasswordInput.should('exist')
        login.showPasswordInput.click()
        login.passwordInputField.should('have.value', userTestData.userCorrect.password)
    })

    it('Login - lost password - empty login field', () => {
        login.usernameInputField.should('be.visible')
        login.passwordInputField.should('be.visible')
        login.lostPasswordLink.should('be.visible')
        login.lostPasswordLink.click()
        cy.url().should('include', '/my-account/lost-password/')
        login.lostPasswordUsernameInputField.should('be.visible')
        login.resetPasswordButton.should('be.visible')
        login.resetPasswordButton.click()
        login.resetPasswordErrorMessage.should('be.visible').contains('Enter a username or email address.')
    })

    it('Login - lost password - success', () => {
        login.usernameInputField.should('be.visible')
        login.passwordInputField.should('be.visible')
        login.lostPasswordLink.should('be.visible')
        login.lostPasswordLink.click()
        cy.url().should('include', '/my-account/lost-password/')
        login.lostPasswordUsernameInputField.should('be.visible')
        login.lostPasswordUsernameInputField.type(generateRandomEmailAddress())
        login.resetPasswordButton.should('be.visible')
        login.resetPasswordButton.click()
        login.resetPasswordSuccessMessage.should('be.visible').contains('Password reset email has been sent.')
    })

    it('Login - success', () => {
        login.usernameInputField.should('be.visible')
        login.usernameInputField.clear().type(userTestData.userCorrect.mailAddress)
        login.passwordInputField.should('be.visible')
        login.passwordInputField.type(userTestData.userCorrect.password)
        login.loginButton.should('exist')
        login.loginButton.click()
        myAccount.myAccountHelloContent.should('be.visible').contains('From your account dashboard you can view your recent orders, manage your shipping and billing addresses, and edit your password and account details.')
    })
})