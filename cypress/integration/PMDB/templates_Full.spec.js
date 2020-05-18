import {
    correctUser,
    correctPass,
} from '../../support/loginVariables'

import {
    timeWait,
    managerAnnaS,
    managerBartG
} from '../../support/generalVariables'

import {
    allTemplatesSite,
    templatePages,
    templateSearchFilter,
    templateRows,
    formCreamy,
    formHerbalTea,
    nameBifi,
    nameMagnesium,
    molecouleChromium,
    molecouleZinc,
    strength03,
    strength125
} from '../../support/templatesVariables'

context('PMDB: Templates Page Full tests', () => {
    beforeEach(() => {
        cy.loginUI(correctUser, correctPass, allTemplatesSite)
    })
    // it('Should be possible to change number of displayed records', () => {
    //     cy.changeRowNum('50')
    //     cy.changeRowNum('100')
    //     cy.changeRowNum('25')
    //     cy.changeRowNum('All')
    // })
    // it('Should be able to change template page', () => {
    //     cy.get(templatePages).should('have.length', '4')
    //     cy.changePage(1)
    //     cy.changePage(2)
    //     cy.changePage(3)
    //     cy.changePage(0)
    // })
    it('Should be able to filter templates by all columns', () => {
        cy.filterTemplates(managerAnnaS, 12)
        cy.filterTemplates(managerBartG, 5)
        cy.filterTemplates(formHerbalTea, 4)
        cy.filterTemplates(formCreamy, 3)
        cy.filterTemplates(nameBifi, 4)
        cy.filterTemplates(nameMagnesium, 10)
        cy.filterTemplates(molecouleChromium, 3)
        cy.filterTemplates(molecouleZinc, 7)
        cy.filterTemplates(strength03, 10)
        cy.filterTemplates(strength125, 5)
    })
})