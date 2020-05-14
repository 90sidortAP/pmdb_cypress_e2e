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
    signupButton,
    newUserMenu,
    inputPassNew,
    newPassword,
    inputPassConfNew
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
    it('Should be able to create new account', () => {
        cy.get(signupButton)
            .should('exist')
            .click()
        cy.get(newUserMenu).should('exist')
        cy.get(inputPassNew).eq(1)
            .should('exist')
            .type(newPassword)
        cy.get(inputPassConfNew)
            .should('exist')
            .type(newPassword)
    })
    it('Should be able to add account with Sign up', () => {
        cy.loginAttempt(' ', ' ')
        cy.get(addProject).should('not.exist')
        cy.url().should('eq', loginURL)
        cy.get(loginError).should('exist')
    })
    // it('test', ()=>{
    //     cy.loginUI('dabro', 'dupa123')
    // })
})