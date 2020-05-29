import {
    allTemplatesSite,
    licenseTemplatesSite,
    rdTemplatesSite,
    templatePages,
    formCreamy,
    formHerbal,
    nameBifi,
    nameMagnesium,
    molecouleChromium,
    molecouleZinc,
    strength05,
    strength10,
    nonExistentText1,
    nonExistentText2,
    templatePNHeader1,
    templateOddRow,
    templatePNHeader2,
    templateMHeader1,
    templateMHeader2,
    templatePMHeader1,
    templatePMHeader2,
    templatePSHeader1,
    templatePSHeader2,
    templateSort1,
    templateSort2,
    templateSort3,
    templateSort4,
    templateSort5,
    templateSort6,
} from "../../support/variables/templatesVariables"

import {
    correctUser,
    correctPass
} from "../../support/variables/loginVariables"

import {
    projectSite,
    managerMarcinF,
    managerAleksN,
    tableRow,
    recordSelectInput,
    detailMenuPanel,
    sideRowInfo,
    itemIDValue,
    detailsSchedule
} from "../../support/variables/generalVariables"

import {
    projectsLicenseURL,
    projectsRdURL,
    marketPoland,
    marketRussia,
    prescriptionFSMP,
    prescriptionOTC,
    projectsSort1,
    projectsSort2,
    projectSort7,
    projectSort8,
    projectsPFHeader1,
    projectsPFHeader2,
    projectSort5,
    projectSort6,
    projectsPCHeader1,
    projectsPCHeader2,
    projectSort9,
    projectSort10,
    projectsMarHeader1,
    projectsMarHeader2,
    projectSort11,
    projectSort12,
    registration94
} from "../../support/variables/projectsVariables"

import { projectMockURL1 } from '../../support/testMock'

context('PMDB: Projects Basic tests', () => {
    beforeEach(() => {
        cy.loginUI(correctUser, correctPass, projectSite)
      })
    //   it('Should be possible to change number of displayed records', () => {
    //     cy.changeRecordNum('50', 52)
    //     cy.changeRecordNum('100', 97)
    //     cy.changeRecordNum('25', 27)
    //     cy.changeRecordNum('All', 97)
    // })
    // it('Should display only projects for currently selected subcategory', () => {
    //     cy.visit(projectsLicenseURL)
    //     cy.changeRecordNum('All', 53)
    //     cy.visit(projectsRdURL)
    //     cy.changeRecordNum('All', 46)
    // })
    // it('Should be able to change projects page', () => {
    //     cy.get(templatePages).should('have.length', '4')
    //     cy.changePage(1)
    //     cy.changePage(2)
    //     cy.changePage(3)
    //     cy.changePage(0)
    // })
    // it('Should be able to filter projects by all columns', () => {
    //     cy.server()
    //     cy.route('GET', projectMockURL1).as('firstDraw')
    //     cy.wait('@firstDraw').then(() => {
    //         cy.filterRecords(managerMarcinF, 6)
    //         cy.filterRecords(managerAleksN, 7)
    //         cy.filterRecords(formCreamy, 8)
    //         cy.filterRecords(formHerbal, 4)
    //         cy.filterRecords(nameBifi, 3)
    //         cy.filterRecords(nameMagnesium, 8)
    //         cy.filterRecords(molecouleChromium, 4)
    //         cy.filterRecords(molecouleZinc, 17)
    //         cy.filterRecords(prescriptionOTC, 15)
    //         cy.filterRecords(prescriptionFSMP, 19)
    //         cy.filterRecords(marketPoland, 8)
    //         cy.filterRecords(marketRussia, 10)
    //     })
    // })
    // it('Should show message when no records match search query', ()=> {
    //     cy.server()
    //     cy.route('GET', projectMockURL1).as('firstDraw')
    //     cy.wait('@firstDraw').then(() => {
    //         cy.filterRecords(nonExistentText1, 0)
    //         cy.filterRecords(nonExistentText2, 0)
    //     })
    // })
    // it('Should be possible to select an deselect projects on different pages', ()=> {
    //     cy.selectRecord(89)
    //     cy.deselectRow(89)
    //     cy.changePage(1)
    //     cy.selectRecord(70)
    //     cy.deselectRow(70)
    //     cy.changePage(3)
    //     cy.selectRecord(13)
    //     cy.deselectRow(13)
    // })
    // it('Should be possible to sort projects by all columns', () => {
    //     cy.sortColumn(templatePNHeader1, templatePNHeader2, projectsSort1, projectsSort2)
    //     cy.sortColumn(projectsPFHeader1, projectsPFHeader2, projectSort5, projectSort6)
    //     cy.sortColumn(projectsPCHeader1, projectsPCHeader2, projectSort7, projectSort8)
    //     cy.sortColumn(templatePSHeader1, templatePSHeader2, projectSort9, projectSort10)
    //     cy.sortColumn(projectsMarHeader1, projectsMarHeader2, projectSort11, projectSort12)
    // })
    it('Should open and close project details', () => {
        cy.viewport(1920, 1080)
        cy.setProjectState(94).then(() => {
            cy.checkProjectInfo(94)
        })
    })
})
