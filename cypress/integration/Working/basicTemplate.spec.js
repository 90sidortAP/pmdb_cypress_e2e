import {
    correctUser,
    correctPass,
} from '../../support/variables/loginVariables'

import {
    timeWait,
    managerMarcinF,
    managerAleksN,
    managerPiwo,
    managerWm,
    managerJR,
    managerBG,
    managerBLG,
    managerBg,
    managerWM,
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
    templateRows,
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
    templateTCell,
    templateCloseFull,
    templateOddRow
} from '../../support/variables/templatesVariables'

context('PMDB: Template Basic tests', () => {
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
    //     cy.filterTemplates(managerMarcinF, 6)
    //     cy.filterTemplates(managerAleksN, 7)
    //     cy.filterTemplates(formCreamy, 8)
    //     cy.filterTemplates(formHerbal, 4)
    //     cy.filterTemplates(nameBifi, 3)
    //     cy.filterTemplates(nameMagnesium, 8)
    //     cy.filterTemplates(molecouleChromium, 4)
    //     cy.filterTemplates(molecouleZinc, 17)
    //     cy.filterTemplates(strength05, 7)
    //     cy.filterTemplates(strength10, 3)
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
    //     cy.changePage(3)
    //     cy.selectTemplate(13)
    //     cy.deselectTemplate(13)
    // })
    // it('Should be possible to select and deselect all templates on different pages', ()=> {
    //     cy.selectAll(1)
    //     cy.deselectAll(1)
    //     cy.changePage(1)
    //     cy.selectAll(2)
    //     cy.deselectAll(2)
    // })
    // it('Should be possible to sort templates by all columns', () => {
    //     cy.get(templatePNHeader1).eq(0).click()
    //     cy.wait(1000)
    //     cy.get(templateOddRow).eq(0).should('have.text', '\n    \n    \n    \n            Acetic Acid/Cal ...\n            Oral Drops Solution\n            Acetic Acid/Calcium/Gelatin/Magnesium/Potassium/SodiumJustyna Rogowska1mg; 2mg')
    //     cy.get(templatePNHeader2).eq(0).click()
    //     cy.wait(1000)
    //     cy.get(templateOddRow).eq(0).should('have.text', '\n    \n    \n    \n            Vorinostat\n            Solution For Injection And Infusion\n            VorinostatBartlomiej Grzywaczyk250mg/20ml')
    //     cy.get(templateMHeader1).eq(0).click()
    //     cy.wait(1000)
    //     cy.get(templateOddRow).eq(0).should('have.text', '\n    \n    \n    \n            Acetic Acid/Cal ...\n            Oral Drops Solution\n            Acetic Acid/Calcium/Gelatin/Magnesium/Potassium/SodiumJustyna Rogowska1mg; 2mg')
    //     cy.get(templateMHeader2).eq(0).click()
    //     cy.wait(1000)
    //     cy.get(templateOddRow).eq(0).should('have.text', '\n    \n    \n    \n            Vorinostat\n            Solution For Injection And Infusion\n            VorinostatBartlomiej Grzywaczyk250mg/20ml')
    //     cy.get(templatePMHeader1).eq(0).click()
    //     cy.wait(1000)
    //     cy.get(templateOddRow).eq(0).should('have.text', '\n    \n    \n    \n            Althaea Officin ...\n            Nebuliser Suspension\n            Althaea Officinalis/Ascorbic Acid/Matricaria Chamomilla/Rubus Idaeus/Salvia Officinalis/Sambucus Nig ...Bartłomiej grzywaczyk20mg')
    //     cy.get(templatePMHeader2).eq(0).click()
    //     cy.wait(1000)
    //     cy.get(templateOddRow).eq(0).should('have.text', '\n    \n    \n    \n            Conium Maculatu ...\n            Dispersible Tablet\n            Conium Maculatum/Iodine/Iron Ferric/Populus Tremuloides/Serenoa RepensWojciech Maszewski10ml/ml')
    //     cy.get(templatePSHeader1).eq(0).click()
    //     cy.wait(1000)
    //     cy.get(templateOddRow).eq(0).should('have.text', '\n    \n    \n    \n            Body Cream\n            Powder For Solution For Injection\n            Body CreamWojciech maszewski0,001 mg/ml')
    //     cy.get(templatePSHeader2).eq(0).click()
    //     cy.wait(1000)
    //     cy.get(templateOddRow).eq(0).should('have.text', '\n    \n    \n    \n            Ascorbic Acid/A ...\n            Effervescent Powder\n            Ascorbic Acid/Astaxanthin/Betacarotene/Camellia Sinensis/Copper/Cysteine/Hyaluronic Acid/Lycopene/Ma ...Bartlomiej Grzywaczyk7,5mg/10ml')
    // })
    // it('Should open and close template details', ()=> {
    //     cy.openTemplateDetails(99)
    //     cy.checkTemplateInfo(99)
    //     cy.checkTemplateSchedule(99)
    //     cy.checkTemplateAgree(99)
    //     cy.checkTemplateFinance(99)
    //     cy.checkTemplateOther(99)
    //     cy.closeTemplateDetails(99)
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
    //         win.document.querySelector('div[aria-label="Rich Text Editor, main"] p').textContent='changeTest'
    //     })
    //     cy.wait(500)
    //     cy.get(templateIPCX).contains('changeTest')
    //     cy.get('button[type="Submit"]').eq(1).click({ force: true })
    //     cy.get(templateNewSuccess, { timeout: timeWait }).should('have.text',templateSuccessUpd)
    //     cy.get('td').contains('PMB approval Date').parents('tr').should('have.text', '\n      PMB approval Date\n      \n        \n        2020-05-30\n        \n      \n      \n        \n        2020-06-17\n        \n      \n    ')
    //     cy.get('p').contains('changeTest')
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
    //     cy.get('button[type="Submit"]').eq(2).click({ force: true })
    //     cy.get(templateNewSuccess, { timeout: timeWait }).should('have.text',templateSuccessUpd)
    //     cy.get(tepmateSpanField).eq(25).should('have.text', '\n      2016\n    ')
    //     cy.get(tepmateSpanField).eq(30).should('have.text', '\n      10.0\n    ')
    //     cy.setTemplateAgreement()
    // })
    // it('Should be possible to save changest made to template Finance section', () => {
    //     cy.setTemplateFinance()
    //     cy.openTemplateDetails(97)
    //     cy.get(templateFinance).eq(0).click({ force: true })
    //     cy.get(templateEditDetail).eq(0).click()
    //     cy.get(templateSaveEdit).contains('Save').should('exist')
    //     cy.get(templatePBudget, {timeout: timeWait }).clear().type(templateValueId)
    //     cy.get('button[type="Submit"]').eq(3).click({ force: true })
    //     cy.get(templateNewSuccess, { timeout: timeWait }).should('have.text',templateSuccessUpd)
    //     cy.get(tepmateSpanField).eq(47).should('have.text', '\n      99,00\n    ')
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
    //         win.document.querySelectorAll('div[aria-label="Rich Text Editor, main"] p')[5].textContent = 'changeTest'
    //     })
    //     cy.get('button[type="Submit"]').eq(4).click({ force: true })
    //     cy.get(templateNewSuccess, { timeout: timeWait }).should('have.text',templateSuccessUpd)
    //     cy.get(tepmateSpanField).eq(50).should('have.text', '\n      99\n    ')
    //     cy.get(tepmateSpanField).eq(79).should('have.text', '\n      changeTest\n    ')
    //     cy.setTemplateOthers()
    // })
})
