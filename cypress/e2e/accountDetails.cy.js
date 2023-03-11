/// <reference types="cypress" />
import login from "../../pageObjects/login"
import myAccount from "../../pageObjects/myAccount"
import register from "../../pageObjects/register"
import userTestData from "../fixtures/userTestData.json"

describe('Account details tests', () => {
    beforeEach(() => {
        cy.login()
        myAccount.myAccountDetailsPage()
        cy.url().should('include', '/my-account/edit-account/')
    })

    it('Name change empty fields', () => {
        myAccount.myAccountFirstNameInputField.should('exist')
        myAccount.myAccountFirstNameInputField.clear()
        myAccount.myAccountLastNameInputField.should('exist')
        myAccount.myAccountLastNameInputField.clear()
        myAccount.myAccountCurrentPasswordInputField.clear().type(userTestData.userCorrect.password, { sensitive: true })
        myAccount.saveChangesButton.should('exist')
        myAccount.saveChangesButton.click()
        register.errorMessage.should('exist').and('contain.text', 'First name is a required field.')
            .and('contain.text', 'Last name is a required field.')
            .and('contain.text', 'Please fill out all password fields.')
    })

    it('Name change - success', () => {
        myAccount.myAccountFirstNameInputField.should('exist')
        myAccount.myAccountFirstNameInputField.clear().type(userTestData.userCorrect.firstName)
        myAccount.myAccountLastNameInputField.should('exist')
        myAccount.myAccountLastNameInputField.clear().type(userTestData.userCorrect.lastName)
        myAccount.myAccountDisplayNameInputField.should('exist')
        myAccount.myAccountDisplayNameInputField.clear().type(userTestData.userCorrect.companyName)
        myAccount.saveChangesButton.should('exist')
        myAccount.saveChangesButton.click()
        login.resetPasswordSuccessMessage.should('exist').contains('Account details changed successfully.')
    })

    it('Password change - empty fields', () => {
        myAccount.myAccountPageTitle.should('exist').and('have.text', 'Password change')
        myAccount.myAccountCurrentPasswordInputField.clear().type(userTestData.userCorrect.password, { sensitive: true })
        myAccount.newPasswordInputField.should('exist')
        myAccount.newPasswordInputField.clear()
        myAccount.confirmNewPasswordInputField.should('exist').clear()
        myAccount.saveChangesButton.should('exist')
        myAccount.saveChangesButton.click()
        register.errorMessage.should('exist').and('contain.text', 'Please fill out all password fields.')
    })

    it('Password change - lack of confirm password', () => {
        myAccount.myAccountPageTitle.should('exist').and('have.text', 'Password change')
        myAccount.myAccountCurrentPasswordInputField.clear().type(userTestData.userCorrect.password, { sensitive: true })
        myAccount.newPasswordInputField.should('exist')
        myAccount.newPasswordInputField.clear().type(userTestData.userIncorrect.strongPassword, { sensitive: true })
        myAccount.confirmNewPasswordInputField.should('exist')
        myAccount.confirmNewPasswordInputField.clear()
        myAccount.saveChangesButton.should('exist')
        myAccount.saveChangesButton.click()
        register.errorMessage.should('exist').and('contain.text', 'Please re-enter your password.')
    })

    it('Password change - complete data and go back to old password', () => {
        myAccount.myAccountPageTitle.should('exist').and('have.text', 'Password change')
        myAccount.myAccountCurrentPasswordInputField.clear().type(userTestData.userCorrect.password, { sensitive: true })
        myAccount.newPasswordInputField.should('exist')
        myAccount.newPasswordInputField.clear().type(userTestData.userIncorrect.strongPassword, { sensitive: true })
        myAccount.confirmNewPasswordInputField.should('exist')
        myAccount.confirmNewPasswordInputField.clear().type(userTestData.userIncorrect.strongPassword, { sensitive: true })
        myAccount.saveChangesButton.should('exist')
        myAccount.saveChangesButton.click()
        login.resetPasswordSuccessMessage.should('exist').contains('Account details changed successfully.')
        cy.url().should('include', '/my-account/edit-account/')
        myAccount.myAccountPageTitle.should('exist').and('have.text', 'Password change')
        myAccount.myAccountCurrentPasswordInputField.clear().type(userTestData.userIncorrect.strongPassword, { sensitive: true })
        myAccount.newPasswordInputField.should('exist')
        myAccount.newPasswordInputField.clear().type(userTestData.userCorrect.password, { sensitive: true })
        myAccount.confirmNewPasswordInputField.should('exist')
        myAccount.confirmNewPasswordInputField.clear().type(userTestData.userCorrect.password, { sensitive: true })
        myAccount.saveChangesButton.should('exist')
        myAccount.saveChangesButton.click()
        login.resetPasswordSuccessMessage.should('exist').contains('Account details changed successfully.')
    })
})