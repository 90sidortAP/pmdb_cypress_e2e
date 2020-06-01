import {
    correctUser,
    correctPass,
} from '../../support/variables/loginVariables'

import {
    timeWait,
    managerMarcinF,
    managerAleksN,
    managerPiwo
} from '../../support/variables/generalVariables'

import {
    allTemplatesSite,
    templatePages,
    formCreamy,
    formHerbal,
    nameBifi,
    nameMagnesium,
    molecouleZinc,
    molecouleChromium,
    strength05,
    strength10,
    nonExistentText1,
    nonExistentText2,
    templateChangelog,
    templateNoChange,
    templateFull,
    templateFullView,
    templateEditDetail,
    templateSaveEdit,
    templateEditFull,
    templateAddNew,
    templateDetailMenu,
    templateSelSource,
    templateSelPro,
    templateSelMol,
    templateSelStr,
    templateValueId,
    templateSelPF,
    templateCreate,
    templateInput,
    template1Prop,
    templateNewSuccess,
    templateSuccessNfo,
    templateFirst,
    templateNeurology,
    templateSelTA,
    templateSelATC,
    templateAntimeta,
    templateInputApi,
    templateSuccessUpd,
    tepmateSpanField,
    templateSchedule,
    templatePMBApp,
    templateIPCX,
    templateAgreement,
    templateSuppPeriod,
    templateAgreeNote,
    templateFinance,
    templatePBudget,
    templateRefInput,
    templateOther,
    templatePNHeader1,
    templatePNHeader2,
    templateMHeader1,
    templateMHeader2,
    templatePMHeader1,
    templatePMHeader2,
    templatePSHeader1,
    templatePSHeader2,
    templateCloseFull,
    templateOddRow,
    templateSort1,
    templateSort2,
    templateSort3,
    templateSort4,
    templateSort5,
    templateSort6,
    templateTextApproval,
    templateChangeTest,
    templateAgreeData1,
    templateAgreeData2,
    templateIdValue,
    templateFinanceData1,
    templateOthersData1,
    templateCKEditorPar,
    licenseTemplatesSite,
    rdTemplatesSite
} from '../../support/variables/templatesVariables'

import {
    templateMockURL1,
    templateMockResp1
} from '../../support/testMock'

context('PMDB: Template Basic tests', () => {
    beforeEach(() => {
        cy.loginUI(correctUser, correctPass, allTemplatesSite)
      })
    //   it('Should be possible to change number of displayed records', () => {
    //     cy.changeRecordNum('50', 52)
    //     cy.changeRecordNum('100', 97)
    //     cy.changeRecordNum('25', 27)
    //     cy.changeRecordNum('All', 97)
    // })
    //   it('Should display only templates for currently selected subcategory', () => {
    //     cy.visit(licenseTemplatesSite)
    //     cy.changeRecordNum('All', 53)
    //     cy.visit(rdTemplatesSite)
    //     cy.changeRecordNum('All', 46)
    // })
    // it('Should be able to change template page', () => {
    //     cy.get(templatePages).should('have.length', '4')
    //     cy.changePage(1)
    //     cy.changePage(2)
    //     cy.changePage(3)
    //     cy.changePage(0)
    // })
    // it('Should be able to filter templates by all columns', () => {
    //     cy.filterRecords(managerMarcinF, 6)
    //     cy.filterRecords(managerAleksN, 7)
    //     cy.filterRecords(formCreamy, 8)
    //     cy.filterRecords(formHerbal, 4)
    //     cy.filterRecords(nameBifi, 3)
    //     cy.filterRecords(nameMagnesium, 8)
    //     cy.filterRecords(molecouleChromium, 4)
    //     cy.filterRecords(molecouleZinc, 17)
    //     cy.filterRecords(strength05, 7)
    //     cy.filterRecords(strength10, 3)
    // })
    // it('Should show message when no records match search query', ()=> {
    //     cy.filterRecords(nonExistentText1, 0)
    //     cy.filterRecords(nonExistentText2, 0)
    // })
    // it('Should be possible to select and deselect templates on different pages', ()=> {
    //     cy.selectRecord(89)
    //     cy.deselectRow(89)
    //     cy.changePage(3)
    //     cy.selectRecord(13)
    //     cy.deselectRow(13)
    // })
    it('Should be possible to sort templates by all columns', () => {
        cy.sortColumn(templatePNHeader1, templatePNHeader2, templateSort1, templateSort2)
        cy.sortColumn(templateMHeader1, templateMHeader2, templateSort1, templateSort2)


        // cy.get(templateOddRow).eq(0).should('have.text', templateSort2)
        // cy.get(templatePMHeader1).eq(0).click()
        // cy.wait(1000)
        // cy.get(templateOddRow).eq(0).should('have.text', templateSort3)
        // cy.get(templatePMHeader2).eq(0).click()
        // cy.wait(1000)
        // cy.get(templateOddRow).eq(0).should('have.text', templateSort4)
        // cy.get(templatePSHeader1).eq(0).click()
        // cy.wait(1000)
        // cy.get(templateOddRow).eq(0).should('have.text', templateSort5)
        // cy.get(templatePSHeader2).eq(0).click()
        // cy.wait(1000)
        // cy.get(templateOddRow).eq(0).should('have.text', templateSort6)
    })
    // it('Should open and close template details', () => {
    //     cy.openTemplateDetails(99)
    //     cy.checkTemplateInfo(99)
    //     cy.checkTemplateSchedule(99)
    //     cy.checkTemplateAgree(99)
    //     cy.checkTemplateFinance(99)
    //     cy.checkTemplateOther(99)
    //     cy.closeTemplateDetails(99)
    // })
    // it("Should change template in read mode after clicking another one", () => {
    //     cy.viewport(1920, 1080)
    //     cy.openTemplateDetails(99)
    //     cy.wait(500)
    //     cy.openTemplateDetails(85)
    // })
    // it('Should show message when no changes in changelog', () => {
    //     cy.openTemplateDetails(98)
    //     cy.get(templateChangelog).click()
    //     cy.get('div').contains(templateNoChange).should('exist')
    // }) 
    // it('Should be able to open and close fullscreen template view', () => {
    //     cy.openTemplateDetails(99)
    //     cy.get(templateFullView).click()
    //     cy.get(templateCloseFull, { timeout: timeWait })
    //     cy.get('span').contains(templateFull)
    //     cy.checkTemplateFullInfo(99)
    //     cy.checkTemplateFullSchedule(99)
    //     cy.checkTemplateFullAgree(99)
    //     cy.checkTemplateFullFin(99)
    //     cy.checkTemplateFullFile(99)
    // })
    // it('Should be able to open template edit mode', () => {
    //     cy.openTemplateDetails(99)
    //     cy.get(templateEditDetail).eq(0).click()
    //     cy.get(templateSaveEdit).contains('Save').should('exist')
    // })
    // it('Should be able to open template edit mode in full view', () => {
    //     cy.openTemplateDetails(99)
    //     cy.get(templateFullView).click()
    //     cy.get(templateEditFull).eq(1).click()
    //     cy.get(templateSaveEdit, { timeout: timeWait }).contains('Save').should('exist')
    // })
    // it('Should be possible to create new template with mandatory data', () => {
    //     cy.get(templateAddNew).click()
    //     cy.get(templateDetailMenu).should('exist')
    //     cy.get(templateSelSource).eq(0).select("License-in")
    //     cy.get(templateSelPro).click()
    //     cy.get(templateInput).type(managerPiwo)
    //     cy.get('li').contains(managerPiwo).click()
    //     cy.wait(500)
    //     cy.get(templateSelMol).click()
    //     cy.get(templateInput).type(template1Prop)
    //     cy.get('li').contains(template1Prop).click()
    //     cy.get(templateSelStr).type(templateValueId)
    //     cy.get(templateSelPF).click()
    //     cy.get(templateInput).type(formHerbal)
    //     cy.get('li').contains(formHerbal).click()
    //     cy.get(templateCreate).click()
    //     cy.get(templateNewSuccess).should('have.text', templateSuccessNfo)
    //     cy.wait(1000)
    //     cy.get(templateFirst).eq(0).contains(template1Prop).should('exist')
    // })
    // it('Should be possible to create new template with all data', () => {
    //     cy.get(templateAddNew).click()
    //     cy.get(templateDetailMenu).should('exist')
    //     cy.get(templateSelSource).eq(0).select("License-in")
    //     cy.get(templateSelPro).click()
    //     cy.get(templateInput).type(managerPiwo)
    //     cy.get('li').contains(managerPiwo).click()
    //     cy.wait(500)
    //     cy.get(templateSelMol).click()
    //     cy.get(templateInput).type(template1Prop)
    //     cy.get('li').contains(template1Prop).click()
    //     cy.get(templateSelStr).type(templateValueId)
    //     cy.get(templateSelPF).click()
    //     cy.get(templateInput).type(formHerbal)
    //     cy.get('li').contains(formHerbal).click()
    //     cy.get(templateSelTA).click()
    //     cy.get(templateInput).type(templateNeurology)
    //     cy.get('li').contains(templateNeurology).click()
    //     cy.get(templateSelATC).click()
    //     cy.get(templateInput).type(templateAntimeta)
    //     cy.get('li').contains(templateAntimeta).click()
    //     cy.get(templateCreate).click()
    //     cy.get(templateNewSuccess).should('have.text', templateSuccessNfo)
    //     cy.wait(1000)
    //     cy.get(templateFirst).eq(0).contains(template1Prop).should('exist')
    // })
    // it('Should be possible to make changes to an existing template', () => {
    //     cy.setTemplateEdit()
    //     cy.openTemplateDetails(97)
    //     cy.get(templateEditDetail).eq(0).click()
    //     cy.get(templateSaveEdit).contains('Save').should('exist')
    //     cy.get(templateInputApi).clear()
    //     cy.get(templateInputApi).type(templateValueId)
    //     cy.get(templateSaveEdit).contains('Save').click()
    //     cy.get(templateNewSuccess).should('have.text',templateSuccessUpd)
    //     cy.get(tepmateSpanField).eq(4).contains(templateValueId)
    //     cy.wait(1000)
    //     cy.setTemplateEdit()
    // })
    // it('Should be impossible to create new template without mandatory data', () => {
    //     cy.get(templateAddNew).click()
    //     cy.get(templateDetailMenu).should('exist')
    //     cy.get(templateCreate).click()
    //     cy.get(templateSelSource).eq(0)
    //         .should('exist')
    //         .select("License-in")
    //     cy.get(templateCreate).click()
    //     cy.get(templateSelPro).should('exist').click()   
    //     cy.get(templateInput).type(managerPiwo)
    //     cy.get('li').contains(managerPiwo).click()
    //     cy.wait(500)
    //     cy.get(templateCreate).click()
    //     cy.get(templateSelMol).should('exist').click()
    //     cy.get(templateInput).type(template1Prop)
    //     cy.get('li').contains(template1Prop).click()
    //     cy.get(templateCreate).click()
    //     cy.get(templateSelStr).should('exist').type(templateValueId)
    //     cy.get(templateCreate).click()
    //     cy.get(templateSelPF).should('exist').click()
    // })
    // it('Should be impossible to save edited template with deleted mandatory fields', () => {
    //     cy.openTemplateDetails(97)
    //     cy.get(templateEditDetail).eq(0).click()
    //     cy.get(templateSaveEdit).contains('Save').should('exist')
    //     cy.get(templateSelStr).clear({ force: true })
    //     cy.get(templateSaveEdit).contains('Save').click()
    //     cy.wait(1000)
    //     cy.get(templateSelStr).should('exist')
    // })
    // it('Should be possible to save changest made to template Schedule section', () => {
    //     cy.setTemplateSchedule()
    //     cy.openTemplateDetails(97)
    //     cy.get(templateSchedule).eq(0).click({ force: true })
    //     cy.get(templateEditDetail).eq(0).click()
    //     cy.get(templateSaveEdit).contains('Save').should('exist')
    //     cy.get(templatePMBApp, { timeout : timeWait }).clear().type('2020-05-30')
    //     cy.wait(500)
    //     cy.window().then((win) => {
    //         win.document.querySelector(templateCKEditorPar).textContent=templateChangeTest
    //     })
    //     cy.wait(500)
    //     cy.get(templateIPCX).contains(templateChangeTest)
    //     cy.get(templateSaveEdit).eq(1).click({ force: true })
    //     cy.get(templateNewSuccess, { timeout: timeWait }).should('have.text',templateSuccessUpd)
    //     cy.get('td').contains('PMB approval Date').parents('tr').should('have.text', templateTextApproval)
    //     cy.get('p').contains(templateChangeTest)
    //     cy.setTemplateSchedule()
    // })
    // it('Should be possible to save changest made to template Agreement section', () => {
    //     cy.setTemplateAgreement()
    //     cy.openTemplateDetails(97)
    //     cy.get(templateAgreement).eq(0).click({ force: true })
    //     cy.get(templateEditDetail).eq(0).click()
    //     cy.get(templateSaveEdit).contains('Save').should('exist')
    //     cy.get(templateAgreeNote).type(10)
    //     cy.get(templateSuppPeriod).type(2016)
    //     cy.get(templateSaveEdit).eq(2).click({ force: true })
    //     cy.get(templateNewSuccess, { timeout: timeWait }).should('have.text',templateSuccessUpd)
    //     cy.get(tepmateSpanField).eq(25).should('have.text', templateAgreeData1)
    //     cy.get(tepmateSpanField).eq(30).should('have.text', templateAgreeData2)
    //     cy.setTemplateAgreement()
    // })
    // it('Should be possible to save changest made to template Finance section', () => {
    //     cy.setTemplateFinance()
    //     cy.openTemplateDetails(97)
    //     cy.get(templateFinance).eq(0).click({ force: true })
    //     cy.get(templateEditDetail).eq(0).click()
    //     cy.get(templateSaveEdit).contains('Save').should('exist')
    //     cy.get(templatePBudget, {timeout: timeWait }).clear().type(templateValueId)
    //     cy.get(templateSaveEdit).eq(3).click({ force: true })
    //     cy.get(templateNewSuccess, { timeout: timeWait }).should('have.text',templateSuccessUpd)
    //     cy.get(tepmateSpanField).eq(47).should('have.text', templateFinanceData1)
    //     cy.setTemplateFinance()
    // })
    // it('Should be possible to save changest made to template Others section', () => {
    //     cy.setTemplateOthers()
    //     cy.openTemplateDetails(97)
    //     cy.get(templateOther).eq(0).click({ force: true })
    //     cy.get(templateEditDetail).eq(0).click()
    //     cy.get(templateSaveEdit).contains('Save').should('exist')
    //     cy.get(templateRefInput, {timeout: timeWait }).clear().type(templateValueId)
    //     cy.window().then((win) => {
    //         win.document.querySelectorAll(templateCKEditorPar)[5].textContent = templateChangeTest
    //     })
    //     cy.get(templateSaveEdit).eq(4).click({ force: true })
    //     cy.get(templateNewSuccess, { timeout: timeWait }).should('have.text',templateSuccessUpd)
    //     cy.get(tepmateSpanField, { timeout: timeWait }).eq(50).should('have.text', templateIdValue)
    //     cy.get(tepmateSpanField, { timeout: timeWait }).eq(79).should('have.text', templateOthersData1).then(() => {
    //         cy.setTemplateOthers()
    //     })
    // })
    // it('Should be possible to select and deselect all templates on different pages', ()=> {
    //     cy.server()
    //     cy.route('GET', templateMockURL1, templateMockResp1)
    //     cy.changePage(1)
    //     cy.selectAll(2)
    //     cy.deselectAll(2)
    // })
})
