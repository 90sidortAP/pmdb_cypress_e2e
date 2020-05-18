import {
    correctUser,
    correctPass,
} from '../../support/loginVariables'
import {
    timeWait,
} from '../../support/generalVariables'
import {
    allTemplatesSite,
    selectRecordDisplay,
    templateRows
} from '../../support/templatesVariables'
context('PMDB: Templates Page Full tests', () => {
    beforeEach(() => {
        cy.loginUI(correctUser, correctPass, allTemplatesSite)
    })
    it('Should be possible to change number of displayed records', () => {
        cy.get(templateRows).should('have.length', 27).then(() => {
            cy.get(selectRecordDisplay, { timeout: timeWait }).select('50').then(() => {
                cy.get(templateRows).should('have.length', 52)
            })
        }).then(() =>{
            cy.get(selectRecordDisplay, { timeout: timeWait }).select('100').then(() => {
                cy.get(templateRows).should('have.length', 101)
            })
        }).then(() => {
            cy.get(selectRecordDisplay, { timeout: timeWait }).select('25').then(() => {
                cy.get(templateRows).should('have.length', 27)
            })
        }).then(() => {
            cy.get(selectRecordDisplay, { timeout: timeWait }).select('All').then(() => {
                cy.get(templateRows).should('have.length', 101)
            })
        })
    })
})