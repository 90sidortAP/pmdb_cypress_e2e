import {
    documentButton,
    correctUser,
    correctPass,
    addProject,
    logoutIcon,
    loginSite,
} from '../../support/variables/loginVariables'

import {
    timeWait,
    projectSite,
} from '../../support/variables/generalVariables'

context('PMDB: Login Page Smoke tests', () => {
    beforeEach(() => {
        cy.openLoginPage()
      })
    it('Should be able to login with correct login and password', () => {
        cy.loginAttempt(correctUser, correctPass)
        cy.get(addProject).should('exist')
        cy.url().should('eq', projectSite)
    })
    it('Should be able to logout', () => {
        cy.loginUI(correctUser, correctPass, projectSite)
        cy.get(addProject, { timeout: timeWait }).should('exist')
        cy.url().should('eq', projectSite)
        cy.get(logoutIcon, { timeout: timeWait }).click()
        cy.get(documentButton).should('exist')
        cy.url().should('eq', loginSite)
    })
})