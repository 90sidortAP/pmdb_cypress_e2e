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
    newEmail,
    signInButton
} from '../../support/loginVariables'

context('PMDB: Login Page Full tests', () => {
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
        cy.loginAttempt(undefined, ' ')
        cy.get(addProject).should('not.exist')
        cy.url().should('eq', loginURL)
        cy.get(loginError).should('exist')
    })
    it('Should not be able to login with ivalid login and correct password', () => {
        cy.loginAttempt(incorrectUser, correctPass)
        cy.get(addProject).should('not.exist')
        cy.url().should('eq', loginURL)
        cy.get(loginError).should('exist')
    })
    it('Should not be able to login with valid login and incorrect password', () => {
        cy.loginAttempt(correctUser, incorrectPass)
        cy.get(addProject).should('not.exist')
        cy.url().should('eq', loginURL)
        cy.get(loginError).should('exist')
    })
    it('Should not be able to login with password only', () => {
        cy.loginAttempt(undefined, incorrectPass)
        cy.get(addProject).should('not.exist')
        cy.url().should('eq', loginURL)
        cy.get(loginError).should('exist')
    })
    it('Should not be able to login with login only', () => {
        cy.loginAttempt(correctUser, ' ')
        cy.get(addProject).should('not.exist')
        cy.url().should('eq', loginURL)
        cy.get(loginError).should('exist')
    })
    it('Should not be able to login with invalid login and invalid password', () => {
        cy.loginAttempt(incorrectUser, incorrectPass)
        cy.get(addProject).should('not.exist')
        cy.url().should('eq', loginURL)
        cy.get(loginError).should('exist')
    })
    it('Should be able to add account with Create an account in Sign in', () => {
        cy.get(signInButton, { timeout: timeWait }).click()
        cy.get('a').contains('Create an account').click()
        // Feature currently not available
    })
    it('Should be able to add account with Create an account in Sign in', () => {
        cy.get(signInButton, { timeout: timeWait }).click()
        cy.get('a').contains('Create an account').click()
        // Feature currently not available
    })
    it('Should be impossible to create new account with no First Name', () => {
        cy.createNewUser(undefined, newLastName, newEmail, newPassword, newPassword)
        // Feature currently not available
    })
    it('Should be impossible to create new account with no Last Name', () => {
        cy.createNewUser(newFirstName, undefined, newEmail, newPassword, newPassword)
        // Feature currently not available
    })
    it('Should be impossible to create new account with no Email', () => {
        cy.createNewUser(newFirstName, newLastName, undefined, newPassword, newPassword)
        // Feature currently not available
    })
    it('Should be impossible to create new account with no Password', () => {
        cy.createNewUser(newFirstName, newLastName, newEmail, undefined, newPassword)
        // Feature currently not available
    })
    it('Should be impossible to create new account with no Password Confirmation', () => {
        cy.createNewUser(newFirstName, newLastName, newEmail, newPassword, undefined)
        // Feature currently not available
    })
    it('Should be impossible to create new account with different passwords', () => {
        cy.createNewUser(newFirstName, newLastName, newEmail, newPassword, incorrectPass)
        // Feature currently not available
    })
    it('Should be impossible to create new account with invalid email', () => {
        cy.createNewUser(newFirstName, newLastName, newFirstName, newPassword, incorrectPass)
        // Feature currently not available
    })
    it('Should be impossible to create new account with whitespaces', () => {
        cy.createNewUser(' ', ' ', newEmail, ' ', ' ')
        // Feature currently not available
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
        cy.createNewUser(newFirstName, newLastName, newEmail, newPassword, newPassword)
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