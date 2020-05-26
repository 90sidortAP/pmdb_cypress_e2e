import {
    contactButton,
    documentButton,
    correctUser,
    correctPass,
    addProject,
    loginURL,
    loginError,
    incorrectUser,
    incorrectPass,
    messageError,
    newPassword,
    logoutIcon,
    loginSite,
    newFirstName,
    newLastName,
    newEmail
} from '../../support/variables/loginVariables'
import {
    timeWait,
    projectSite,
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
    templateRows,
    templateSuccessNfo,
    templateFirst,
    templateNeurology,
    templateSelTA,
    templateSelPrio,
    templateSelATC,
    templateAntimeta,
    templateInputApi,
    templateSuccessUpd,
    tepmateSpanField
} from '../../support/variables/templatesVariables'

context('PMDB: Login Page Smoke tests', () => {
    beforeEach(() => {
        cy.openLoginPage()
      })
    // it('Should be able to login with correct login and password', () => {
    //     cy.loginAttempt(correctUser, correctPass)
    //     cy.get(addProject).should('exist')
    //     cy.url().should('eq', projectSite)
    // })
    // it('Should be able to logout', () => {
    //     cy.loginUI(correctUser, correctPass, projectSite)
    //     cy.get(addProject, { timeout: timeWait }).should('exist')
    //     cy.url().should('eq', projectSite)
    //     cy.get(logoutIcon, { timeout: timeWait }).click()
    //     cy.get(documentButton).should('exist')
    //     cy.url().should('eq', loginSite)
    // })
    // it('Should be possible to change number of displayed records', () => {
    //     cy.loginUI(correctUser, correctPass, allTemplatesSite)
    //     cy.changeRowNum('50')
    //     cy.changeRowNum('100')
    //     cy.changeRowNum('25')
    //     cy.changeRowNum('All')
    // })
    // it('Should be able to change template page', () => {
    //     cy.loginUI(correctUser, correctPass, allTemplatesSite)
    //     cy.get(templatePages).should('have.length', '4')
    //     cy.changePage(1)
    //     cy.changePage(2)
    //     cy.changePage(3)
    //     cy.changePage(0)
    // })
    // it('Should be able to filter templates by all columns', () => {
    //     cy.loginUI(correctUser, correctPass, allTemplatesSite)
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
    //     cy.loginUI(correctUser, correctPass, allTemplatesSite)
    //     cy.filterTemplates(nonExistentText1, 0)
    //     cy.filterTemplates(nonExistentText2, 0)
    // })
    // it('Should be possible to select an deselect templates on different pages', ()=> {
    //     cy.loginUI(correctUser, correctPass, allTemplatesSite)
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
    //     cy.loginUI(correctUser, correctPass, allTemplatesSite)
    //     cy.selectAll(1)
    //     cy.deselectAll(1)
    //     cy.changePage(1)
    //     cy.selectAll(2)
    //     cy.deselectAll(2)
    // })
    // it('Should open and close template details', ()=> {
    //     cy.loginUI(correctUser, correctPass, allTemplatesSite)
    //     cy.openTemplateDetails(99)
    //     cy.checkTemplateInfo(99)
    //     cy.checkTemplateSchedule(99)
    //     cy.checkTemplateAgree(99)
    //     cy.checkTemplateFinance(99)
    //     cy.checkTemplateOther(99)
    //     cy.closeTemplateDetails(99)
    // })
    // it('Should show message when no changes in changelog', () => {
    //     cy.loginUI(correctUser, correctPass, allTemplatesSite)
    //     cy.openTemplateDetails(98)
    //     cy.get(templateChangelog).click()
    //     cy.get('div').contains(templateNoChange).should('exist')
    // }) 
    // it('Should be able to open and close fullscreen template view', () => {
    //     cy.loginUI(correctUser, correctPass, allTemplatesSite)
    //     cy.openTemplateDetails(99)
    //     cy.get(templateFullView).click()
    //     cy.get('span').contains(templateFull)
    //     cy.checkTemplateFullInfo(99)
    //     cy.checkTemplateFullSchedule(99)
    //     cy.checkTemplateFullAgree(99)
    //     cy.checkTemplateFullFin(99)
    //     cy.checkTemplateFullFile(99)
    // })
    // it('Should be able to open template edit mode', () => {
    //     cy.loginUI(correctUser, correctPass, allTemplatesSite)
    //     cy.openTemplateDetails(99)
    //     cy.get(templateEditDetail).eq(0).click()
    //     cy.get(templateSaveEdit).contains('Save').should('exist')
    // })
    // it('Should be able to open template edit mode in full view', () => {
    //     cy.loginUI(correctUser, correctPass, allTemplatesSite)
    //     cy.openTemplateDetails(99)
    //     cy.get(templateFullView).click()
    //     cy.get(templateEditFull).eq(1).click()
    //     cy.get(templateSaveEdit, { timeout: timeWait }).contains('Save').should('exist')
    // })
    // it('Should be possible to create new template with mandatory data', () => {
    //     cy.loginUI(correctUser, correctPass, allTemplatesSite)
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
    //     cy.loginUI(correctUser, correctPass, allTemplatesSite)
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
    //     cy.loginUI(correctUser, correctPass, allTemplatesSite)
    //     cy.openTemplateDetails(97)
    //     cy.get(templateEditDetail).eq(0).click()
    //     cy.get(templateSaveEdit).contains('Save').should('exist')
    //     cy.get(templateInputApi).clear()
    //     cy.get(templateInputApi).type(templateValueId)
    //     cy.get(templateSaveEdit).contains('Save').click()
    //     cy.get(templateNewSuccess).should('have.text',templateSuccessUpd)
    //     cy.get(tepmateSpanField).eq(4).contains(templateValueId)
    //     cy.wait(1000)
    //     cy.getCookie('csrftoken').then((csrftoken) => {
    //         cy.request({
    //             method: 'POST',
    //             form: true,
    //             url: 'http://127.0.0.1:8000/97/template-informations/update/',
    //             body: {
    //                 csrfmiddlewaretoken: csrftoken.value,
    //                 molecule: "6936",
    //                 api: "powod",
    //                 pharmaceutical_form: "2391",
    //                 strength: "20mg",
    //                 source: "0",
    //                 project_manager: "13",
    //                 therapeutical_area: "474",
    //                 priority: "2",
    //                 atc3_or_otc3: "5966",
    //                 licensor: "3031",
    //                 new_licensor: "True"
    //             }
    //         })
    //     })
    // })
    it('Should be impossible to create new template without mandatory data', () => {
        cy.loginUI(correctUser, correctPass, allTemplatesSite)
        cy.get(templateAddNew).click()
        cy.get(templateDetailMenu).should('exist')
        cy.get(templateCreate).click()
        cy.get(templateSelSource).eq(0)
            .should('exist')
            .select("License-in")
        cy.get(templateCreate).click()
        cy.get(templateSelPro).should('exist').click()   
        cy.get(templateInput).type(managerPiwo)
        cy.get('li').contains(managerPiwo).click()
        cy.wait(500)
        cy.get(templateCreate).click()
        cy.get(templateSelMol).should('exist').click()
        cy.get(templateInput).type(template1Prop)
        cy.get('li').contains(template1Prop).click()
        cy.get(templateCreate).click()
        cy.get(templateSelStr).should('exist').type(templateValueId)
        cy.get(templateCreate).click()
        cy.get(templateSelPF).should('exist').click()
    })
})