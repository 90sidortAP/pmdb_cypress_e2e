import {
    contactButton,
    documentButton,
    correctUser,
    correctPass,
    addProject,
    projectSite,
    loginURL,
    loginError,
    incorrectUser,
    incorrectPass,
    messageError,
    newPassword,
    timeWait,
    logoutIcon,
    loginSite,
    newFirstName,
    newLastName,
    newEmail
} from '../../support/variables'
context('PMDB: Login Page Smoke tests', () => {
    beforeEach(() => {
        cy.openLoginPage()
      })
    it('Clicking "Contact" button should redirect to documentation', () => {
        cy.get(contactButton).should('exist')
        cy.get(contactButton).click()
    })
    it('Clicking "Documentation" button should redirect to documentation', () => {
        cy.get(documentButton).should('exist')
        cy.get(documentButton).click()
    })
    it('Should be able to login with correct login and password', () => {
        cy.loginAttempt(correctUser, correctPass)
        cy.get(addProject).should('exist')
        cy.url().should('eq', projectSite)
    })
    it('Should not be able to login without login and password', () => {
        cy.loginAttempt(' ', ' ')
        cy.get(addProject).should('not.exist')
        cy.url().should('eq', loginURL)
        cy.get(loginError).should('exist')
    })
    it('Should not be able to login with invalid login and incorrect password', () => {
        cy.loginAttempt(incorrectUser, incorrectPass)
        cy.get(addProject).should('not.exist')
        cy.url().should('eq', loginURL)
        cy.get(loginError)
            .should('exist')
            .should('have.text', messageError)
    })
    it('Should be able to add account with Sign up', () => {
        cy.createNewUser(newFirstName, newLastName, newEmail, newPassword)
    })
    it('Should be able to logout', () => {
        cy.loginUI(correctUser, correctPass)
        cy.get(addProject, { timeout: timeWait }).should('exist')
        cy.url().should('eq', projectSite)
        cy.get(logoutIcon, { timeout: timeWait }).click()
        cy.get(documentButton).should('exist')
        cy.url().should('eq', loginSite)
    })
})