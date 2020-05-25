import {
    correctUser,
    correctPass,
} from '../../support/variables/loginVariables'

import {
    timeWait,
    managerAnnaS,
    managerBartG
} from '../../support/variables/generalVariables'

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
    templateSelectInput,
    templateShowChange
} from '../../support/variables/templatesVariables'

import {
    mockURL1,
    mockData1
} from '../../support/testMock'

context('PMDB: Templates Page Full tests', () => {
    // beforeEach(() => {
    //     cy.loginUI(correctUser, correctPass, allTemplatesSite)
    // })
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
    it('Should show message when no changes in changelog', () => {
        cy.loginUI1(correctUser, correctPass)
        cy.server()
        cy.route('GET', 'http://127.0.0.1:8000/api/template/datatable/?draw=1&columns[0][data]=0&columns[0][name]=id&columns[0][searchable]=true&columns[0][orderable]=false&columns[0][search][value]=&columns[0][search][regex]=false&columns[1][data]=1&columns[1][name]=project_name&columns[1][searchable]=true&columns[1][orderable]=true&columns[1][search][value]=&columns[1][search][regex]=false&columns[2][data]=2&columns[2][name]=molecule&columns[2][searchable]=true&columns[2][orderable]=true&columns[2][search][value]=&columns[2][search][regex]=false&columns[3][data]=3&columns[3][name]=project_manager&columns[3][searchable]=true&columns[3][orderable]=true&columns[3][search][value]=&columns[3][search][regex]=false&columns[4][data]=4&columns[4][name]=strength&columns[4][searchable]=true&columns[4][orderable]=true&columns[4][search][value]=&columns[4][search][regex]=false&start=0&length=25&search[value]=&search[regex]=false', mockData1)
        cy.visit(allTemplatesSite)
        cy.wait(500000)
    })
})