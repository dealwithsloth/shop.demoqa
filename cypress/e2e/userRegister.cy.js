/// <reference types="cypress" />
import register from "../../pageObjects/register"
import userTestData from "../fixtures/userTestData.json"
import { generateRandomEmailAddress } from "../../utility/stringGenerator"
import { generateRandomUsername } from "../../utility/stringGenerator"
import myAccount from "../../pageObjects/myAccount"

describe('New user register test', () => {
    beforeEach(() => {
        myAccount.myAccountPage()
        register.registerColumn.should('be.visible').contains('Register')
    })

    it('Register - empty email field', () => {
        register.usernameInputField.should('be.visible')
        register.usernameInputField.clear().type(userTestData.userCorrect.firstName)
        register.registerButton.should('be.visible')
        register.registerButton.click()
        register.errorMessage.should('exist').contains('Error: Please provide a valid email address.')
    })

    it('Register - empty username field', () => {
        register.emailAddressInputField.should('be.visible')
        register.emailAddressInputField.clear().type(generateRandomEmailAddress())
        register.registerButton.should('be.visible')
        register.registerButton.click()
        register.errorMessage.should('exist').contains('Error: Please enter a valid account username.')
    })

    it('Register - empty password field', () => {
        register.usernameInputField.should('be.visible')
        register.usernameInputField.clear().type(generateRandomUsername())
        register.emailAddressInputField.should('be.visible')
        register.emailAddressInputField.clear().type(generateRandomEmailAddress())
        register.registerButton.should('be.visible')
        register.registerButton.click()
        register.errorMessage.should('exist').contains('Error: Please enter an account password.')
    })

    it('Register - show password option', () => {
        register.passwordInputField.should('be.visible')
        register.passwordInputField.type(userTestData.userIncorrect.veryWeakPassword)
        register.passwordInputField.should('not.eql', userTestData.userIncorrect.veryWeakPassword)
        register.showPasswordInput.should('exist')
        register.showPasswordInput.click()
        register.passwordInputField.should('have.value', userTestData.userIncorrect.veryWeakPassword)
    })

    it('Register - password strength meter - very weak', () => {
        register.usernameInputField.should('be.visible')
        register.usernameInputField.clear().type(userTestData.userCorrect.firstName)
        register.emailAddressInputField.should('be.visible')
        register.emailAddressInputField.clear().type(userTestData.userCorrect.mailAddress)
        register.passwordInputField.should('be.visible')
        register.passwordInputField.type(userTestData.userIncorrect.veryWeakPassword, { sensitive: true })
        register.passwordStrengthMeter.should('have.css', 'background-color', 'rgb(241, 173, 173)').contains('Very weak - Please enter a stronger password.')
    })

    it('Register - password strength meter - weak', () => {
        register.usernameInputField.should('be.visible')
        register.usernameInputField.clear().type(userTestData.userCorrect.firstName)
        register.emailAddressInputField.should('be.visible')
        register.emailAddressInputField.clear().type(userTestData.userCorrect.mailAddress)
        register.passwordInputField.should('be.visible')
        register.passwordInputField.type(userTestData.userIncorrect.weakPassword, { sensitive: true })
        register.passwordStrengthMeter.should('have.css', 'background-color', 'rgb(251, 197, 169)').contains('Weak - Please enter a stronger password.')
    })

    it('Register - password strength meter - medium', () => {
        register.usernameInputField.should('be.visible')
        register.usernameInputField.clear().type(userTestData.userCorrect.firstName)
        register.emailAddressInputField.should('be.visible')
        register.emailAddressInputField.clear().type(userTestData.userCorrect.mailAddress)
        register.passwordInputField.should('be.visible')
        register.passwordInputField.type(userTestData.userIncorrect.mediumPassword, { sensitive: true })
        register.passwordStrengthMeter.should('have.css', 'background-color', 'rgb(255, 227, 153)').contains('Medium')
    })

    it('Register - password strength meter - strong', () => {
        register.usernameInputField.should('be.visible')
        register.usernameInputField.clear().type(userTestData.userCorrect.firstName)
        register.emailAddressInputField.should('be.visible')
        register.emailAddressInputField.clear().type(userTestData.userCorrect.mailAddress)
        register.passwordInputField.should('be.visible')
        register.passwordInputField.type(userTestData.userIncorrect.strongPassword, { sensitive: true })
        register.passwordStrengthMeter.should('have.css', 'background-color', 'rgb(193, 225, 185)').contains('Strong')
    })

    it('Register - success', () => {
        register.usernameInputField.should('be.visible')
        register.usernameInputField.clear().type(generateRandomUsername())
        register.emailAddressInputField.should('be.visible')
        register.emailAddressInputField.clear().type(generateRandomEmailAddress())
        register.passwordInputField.should('be.visible')
        register.passwordInputField.clear().type(userTestData.userCorrect.password, { sensitive: true })
        register.registerButton.should('exist')
        register.registerButton.click()
        myAccount.myAccountHelloContent.should('be.visible').contains('From your account dashboard you can view your recent orders, manage your shipping and billing addresses, and edit your password and account details.')
    })
})