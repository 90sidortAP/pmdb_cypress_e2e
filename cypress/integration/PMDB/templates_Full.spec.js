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
    templateInputSelect,
    nonExistentText1,
    nonExistentText2,
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
    strength125,
    templateSelectAll,
    templateSelectInput
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
    // it('Should be able to filter templates by all columns', () => {
    //     cy.filterTemplates(managerAnnaS, 12)
    //     cy.filterTemplates(managerBartG, 5)
    //     cy.filterTemplates(formHerbalTea, 4)
    //     cy.filterTemplates(formCreamy, 3)
    //     cy.filterTemplates(nameBifi, 4)
    //     cy.filterTemplates(nameMagnesium, 10)
    //     cy.filterTemplates(molecouleChromium, 3)
    //     cy.filterTemplates(molecouleZinc, 7)
    //     cy.filterTemplates(strength03, 10)
    //     cy.filterTemplates(strength125, 5)
    // })
    // it('Should show message when no records match search query', ()=> {
    //     cy.filterTemplates(nonExistentText1, 0)
    //     cy.filterTemplates(nonExistentText2, 0)
    // })
    // it('Should be possible to select an deselect templates on different pages', ()=> {
    //     cy.selectTemplate(89)
    //     cy.deselectTemplate(89)
    //     cy.changePage(1)
    //     cy.selectTemplate(70)
    //     cy.deselectTemplate(70)
    // })
    // it('Should be possible to select and deselect all templates on different pages', ()=> {
    //     cy.selectAll(1)
    //     cy.deselectAll(1)
    //     cy.changePage(1)
    //     cy.selectAll(2)
    //     cy.deselectAll(2)
    // })
    // it('Should open and close template details', ()=> {
    //     cy.openTemplateDetails(99)
    //     cy.closeTemplateDetails(99)
    // })
    it('Should display Information in template details correctly', ()=> {
        cy.changePage(1)
        cy.openTemplateDetails(74)
        cy.details74check()
    })
})