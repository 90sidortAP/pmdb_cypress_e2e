import {
    formCreamy,
    formHerbal,
    nameBifi,
    nameMagnesium,
    molecouleChromium,
    molecouleZinc,
    nonExistentText1,
    nonExistentText2,
    templatePNHeader1,
    templatePNHeader2,
    templatePSHeader1,
    templatePSHeader2,
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
    detailChangeLog,
    noChangeMess,
    fullViewIcon,
    iconInfoFull,
    tableFullRow,
    iconScheduleFull,
    iconAgreeFull,
    iconFinFull,
    iconFileFull,
    iconOtherFull,
    tableSchedule,
    detailTable,
    iconFullClose,
    buttonSaveEdit,
    buttonEditFull,
    timeWait,
    editInput,
    editNewCreated,
    richTextEditor,
    ckeChangeTest,
    editInputApi,
    editPM,
    editPMBApp,
    editNewDate,
    editDossReady,
    editEOU,
    editAgreeSign,
    managerMaciej,
    sideRowInfo,
    editPBudget,
    shortTime,
    editRegBudget,
    editOtherPM,
    tablePages
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
    fullIdRow,
    scheduleTable,
    agreementTable,
    projectsEditIcon,
    projectsCreateNew,
    projectTemplateName,
    projectsMarket,
    projectsTemplate,
    projectsCreate,
    newProjectAnna,
    projectsConfTemplate,
    projectsChangeInfo,
    projectsApproval,
    projectsDossiers,
    projectsSign,
    projectsEON,
    projectsBudget,
    projectsRegistration,
    projectsUpload,
    projectProductMan
} from "../../support/variables/projectsVariables"

import { projectMockURL1 } from '../../support/testMock'

context('PMDB: Projects Basic tests', () => {
    beforeEach(() => {
        cy.loginUI(correctUser, correctPass, projectSite)
      })
      it('Should be possible to change number of displayed records', () => {
        cy.changeRecordNum('50', 52)
        cy.changeRecordNum('100', 97)
        cy.changeRecordNum('25', 27)
        cy.changeRecordNum('All', 97)
    })
    it('Should display only projects for currently selected subcategory', () => {
        cy.visit(projectsLicenseURL)
        cy.changeRecordNum('All', 53)
        cy.visit(projectsRdURL)
        cy.changeRecordNum('All', 46)
    })
    it('Should be able to change projects page', () => {
        cy.get(tablePages).should('have.length', '4')
        cy.changePage(1)
        cy.changePage(2)
        cy.changePage(3)
        cy.changePage(0)
    })
    it('Should be able to filter projects by all columns', () => {
        cy.server()
        cy.route('GET', projectMockURL1).as('firstDraw')
        cy.wait('@firstDraw').then(() => {
            cy.filterRecords(managerMarcinF, 6)
            cy.filterRecords(managerAleksN, 7)
            cy.filterRecords(formCreamy, 8)
            cy.filterRecords(formHerbal, 4)
            cy.filterRecords(nameBifi, 3)
            cy.filterRecords(nameMagnesium, 8)
            cy.filterRecords(molecouleChromium, 4)
            cy.filterRecords(molecouleZinc, 17)
            cy.filterRecords(prescriptionOTC, 15)
            cy.filterRecords(prescriptionFSMP, 19)
            cy.filterRecords(marketPoland, 8)
            cy.filterRecords(marketRussia, 10)
        })
    })
    it('Should show message when no records match search query', ()=> {
        cy.server()
        cy.route('GET', projectMockURL1).as('firstDraw')
        cy.wait('@firstDraw').then(() => {
            cy.filterRecords(nonExistentText1, 0)
            cy.filterRecords(nonExistentText2, 0)
        })
    })
    it('Should be possible to select an deselect projects on different pages', ()=> {
        cy.selectRecord(89)
        cy.deselectRow(89)
        cy.changePage(1)
        cy.selectRecord(70)
        cy.deselectRow(70)
        cy.changePage(3)
        cy.selectRecord(13)
        cy.deselectRow(13)
    })
    it('Should be possible to sort projects by all columns', () => {
        cy.sortColumn(templatePNHeader1, templatePNHeader2, projectsSort1, projectsSort2)
        cy.sortColumn(projectsPFHeader1, projectsPFHeader2, projectSort5, projectSort6)
        cy.sortColumn(projectsPCHeader1, projectsPCHeader2, projectSort7, projectSort8)
        cy.sortColumn(templatePSHeader1, templatePSHeader2, projectSort9, projectSort10)
        cy.sortColumn(projectsMarHeader1, projectsMarHeader2, projectSort11, projectSort12)
    })
    it('Should open and close project details', () => {
        cy.viewport(1920, 1080)
        cy.setProjectState(94).then(() => {
            cy.openProjectDetails(94)
            cy.checkProjectInfo(94)
            cy.checkProjectSchedule(94)
            cy.checkProjectAgree(94)
            cy.checkProjectFinance(94)
            cy.checkProjectFile(94)
            cy.checkProjectOthers(94)
            cy.closeProjectDetails()
        })
    })
    it("Should change project in read mode after clicking another one", () => {
        cy.viewport(1920, 1080)
        cy.openProjectDetails(99)
        cy.wait(500)
        cy.openProjectDetails(85)
    })
    it('Should show message when no changes in changelog', () => {
        cy.viewport(1920, 1080)
        cy.openProjectDetails(85)
        cy.get(detailChangeLog).click()
        cy.get('div').contains(noChangeMess).should('exist')
        cy.get(iconFullClose).click()
        cy.openProjectDetails(84)
    })
    it('Should be able to open and close fullscreen project view', () => {
        cy.viewport(1920, 1080)
        cy.openProjectDetails(94)
        cy.get(fullViewIcon).click()
        cy.get(iconInfoFull).click()
        cy.get(tableFullRow).eq(0).should('have.text', fullIdRow)
        cy.get(iconScheduleFull).click()
        cy.get(tableSchedule).should('have.text', scheduleTable)
        cy.get(iconAgreeFull).click()
        cy.get(detailTable).eq(1).should('have.text', agreementTable)
        cy.get(iconFinFull).click()
        cy.get(iconFileFull).click()
        cy.get(iconOtherFull).click()
        cy.get(iconFullClose).click()
        cy.get(iconFullClose).should('not.be.visible')
    })
    it('Should be able to open project edit mode', () => {
        cy.viewport(1920, 1080)
        cy.openProjectDetails(94)
        cy.get(projectsEditIcon).eq(0).click()
        cy.get(buttonSaveEdit).contains('Save').should('exist')
    })
    it('Should be able to open template edit mode in full view', () => {
        cy.viewport(1920, 1080)
        cy.openProjectDetails(94)
        cy.get(fullViewIcon).click()
        cy.get(buttonEditFull, { timeout: 30000 }).eq(1).click()
        cy.get(buttonSaveEdit, { timeout: timeWait }).contains('Save').should('exist')
    })
    it('Should be able to create new project with mandatory data', () => {
        cy.viewport(1920, 1080)
        cy.get(projectsCreateNew).click()
        cy.get(projectsTemplate).click()
        cy.get(editInput).type(projectTemplateName)
        cy.get('li').contains(projectTemplateName).click()
        cy.get(projectsMarket).click()
        cy.get(editInput).type(marketPoland)
        cy.get('li').contains(marketPoland).click()
        cy.get(projectsCreate).click()
        cy.get(editNewCreated).should('exist')
        cy.wait(1000)
        cy.get(tableRow).eq(2).should('have.text', newProjectAnna)
    })
    it('Should be able to create new project with all data', () => {
        cy.viewport(1920, 1080)
        cy.get(projectsCreateNew).click()
        cy.get(projectsTemplate).click()
        cy.get(editInput).type(projectTemplateName)
        cy.get('li').contains(projectTemplateName).click()
        cy.get(projectsMarket).click()
        cy.get(editInput).type(marketPoland)
        cy.get('li').contains(marketPoland).click()
        cy.window().then((win) => {
            win.document.querySelector(richTextEditor).textContent=ckeChangeTest
        })
        cy.get(projectsCreate).click()
        cy.get(editNewCreated).should('exist')
        cy.wait(1000)
        cy.get(tableRow).eq(2).should('have.text', newProjectAnna)
    })
    it('Should be possible to make changes to projects Info section', () => {
        cy.setProjectState(94).then(() => {
            cy.openProjectDetails(94)
            cy.get(projectsEditIcon).eq(0).click()
            cy.get(buttonSaveEdit).contains('Save').should('exist')
            cy.get(editInputApi).type(ckeChangeTest)
            cy.get(editPM).click()
            cy.get(editInput).type(managerMarcinF)
            cy.get('li').contains(managerMarcinF).click()
            cy.get(buttonSaveEdit).contains('Save').click()
            cy.get(editNewCreated).should('exist')
            cy.wait(1000)
            cy.get(tableRow).eq(7).should('have.text', projectsChangeInfo)
        })
    })
    it('Should be possible to make changes to projects Schedule section', () => {
        cy.setProjectState(94).then(() => {
            cy.openProjectDetails(94)
            cy.checkProjectSchedule(94)
            cy.get(projectsEditIcon).eq(0).click()
            cy.get(buttonSaveEdit).contains('Save').should('exist')
            cy.get(editPMBApp).type(editNewDate, { delay : 50 })
            cy.get(editDossReady).type(editNewDate, { delay : 50 })
            cy.get(buttonSaveEdit).eq(1).click({force: true})
            cy.get(editNewCreated).should('exist')
            cy.wait(1000)
            cy.get('td').contains("PMB approval Date").parents('tr').should('have.text', projectsApproval)
            cy.get('td').contains("Dossier ready").parents('tr').should('have.text', projectsDossiers)
            cy.setProjectState(94)
        })
    })
    it('Should be possible to make changes to projects Agreements section', () => {
        cy.setProjectState(94).then(() => {
            cy.openProjectDetails(94)
            cy.checkProjectAgree(94)
            cy.get(projectsEditIcon).eq(0).click()
            cy.get(buttonSaveEdit).contains('Save').should('exist')
            cy.get(editAgreeSign).type(editNewDate, { delay : 50 })
            cy.get(editEOU).clear().type(managerMaciej, { delay : 50 })
            cy.get(buttonSaveEdit).eq(2).click({force: true})
            cy.get(editNewCreated).should('exist')
            cy.wait(1000)
            cy.get(sideRowInfo).eq(22).should('have.text', projectsSign)
            cy.get(sideRowInfo).eq(41).should('have.text', projectsEON)
            cy.setProjectState(94)
        })
    })
    it('Should be possible to make changes to projects Finance section', () => {
        cy.setProjectState(94).then(() => {
            cy.openProjectDetails(94)
            cy.checkProjectFinance(94)
            cy.get(projectsEditIcon).eq(0).click()
            cy.get(buttonSaveEdit).contains('Save').should('exist')
            cy.get(editPBudget).clear().type(shortTime, { delay : 50 })
            cy.get(editRegBudget).clear().type(timeWait, { delay : 50 })
            cy.get(buttonSaveEdit).eq(3).click({force: true})
            cy.get(editNewCreated).should('exist')
            cy.wait(1000)
            cy.get(sideRowInfo).eq(44).should('have.text', projectsBudget)
            cy.get(sideRowInfo).eq(48).should('have.text', projectsRegistration)
            cy.setProjectState(94)
        })
    })
    it('Should be possible to make changes to projects Others section', () => {
        cy.setProjectState(94).then(() => {
            cy.openProjectDetails(94)
            cy.checkProjectOthers(94)
            cy.get(projectsEditIcon).eq(0).click()
            cy.get(buttonSaveEdit).contains('Save').should('exist')
            cy.get(editOtherPM).click()
            cy.get(editInput).type(managerMarcinF)
            cy.get('li').contains(managerMarcinF).click()
            cy.get(buttonSaveEdit).eq(4).click({force: true})
            cy.wait(1000)
            cy.get(sideRowInfo).eq(55).should('have.text', projectProductMan)
        })
    })
    // it('Should be possible to upload files to Files section', () => {
    //     cy.setProjectState(94).then(() => {
    //         cy.openProjectDetails(94)
    //         cy.checkProjectFile(94)
    //         cy.get(projectsEditIcon).eq(0).click()
    //         cy.get(projectsUpload).should('exist')
    //         cy.wait(1000)
    //     })
    // })
})
