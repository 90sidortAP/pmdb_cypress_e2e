import {
    templatePages,
    selectRecordDisplay,
    emptySearchText,
    templateSelectAll,
    templateSpanDetail,
    tepmateSpanField,
    templateIdField,
    templateIdValue,
    templateAtcOtcValue,
    templateNLicenseValue,
    templateAtcOtcField,
    templateNLicenseField,
    templateInfo,
    templateAgreeValue,
    templateDsvValue,
    templateMexValue,
    templateAgreeField,
    templateDsvField,
    templateMexField,
    templateMaqField,
    templateDeliveryField,
    templateVarField,
    templateMaqValue,
    templateDeliveryValue,
    templateVarValue,
    templateFinance,
    templateCogsField,
    templateLBudgetField,
    templateCogsValue,
    templateLBudgetValue,
    templateLRefProField,
    templateLRefProValue,
    templateLContactField,
    templateLContactValue,
    templateOther,
    templateTableCell,
    templateTextId,
    templateValueId,
    templateTextSource,
    templateValueSource,
    templateTextPrior,
    templateValuePrior,
    templateTextMApp,
    templateValueMApp,
    templateTextDex,
    templateTScheduleFull,
    templateValueDex,
    templateTextRC,
    templateValueRC,
    templateTextCPD,
    templateValueCPD,
    templateTextCogs,
    templateVelueCogs,
    templateTextPBC,
    templateValuePBC,
    templateTextFile,
    checkTemplateId,
    templateSelectedColor,
    templatedClickColor
} from '../variables/templatesVariables'

import {
    recordSelectInput,
    tableRow,
    detailMenuPanel,
    detailsSchedule,
    detailsAgreement,
    detailsFinance,
    detailsOthers,
    detailCloseIcon,
    iconInfoFull,
    iconScheduleFull,
    iconAgreeFull,
    iconFinFull,
    iconFileFull
} from '../variables/generalVariables'

Cypress.Commands.add("openTemplateDetails", (templateNum) => {
    cy.get(recordSelectInput(templateNum)).parents(tableRow).click({ force: true })
    cy.get(recordSelectInput(templateNum)).parents(tableRow).should('have.css', 'background-color', templatedClickColor)
    cy.get(detailMenuPanel).should('exist')
    cy.get(templateTScheduleFull).eq(0).should('have.text', checkTemplateId(templateNum))
})

Cypress.Commands.add("checkTemplateInfo", (templateNum) => {
    if (templateNum === 99) {
        cy.get(templateInfo).eq(0).click({ force: true })
        cy.get(templateSpanDetail).eq(0).should('have.text', templateIdField)
        cy.get(tepmateSpanField).eq(0).should('have.text', templateIdValue)
        cy.get(templateSpanDetail).eq(11).should('have.text', templateAtcOtcField)
        cy.get(tepmateSpanField).eq(11).should('have.text', templateAtcOtcValue)
        cy.get(templateSpanDetail).eq(13).should('have.text', templateNLicenseField)
        cy.get(tepmateSpanField).eq(13).should('have.text', templateNLicenseValue)
    }
})

Cypress.Commands.add("checkTemplateSchedule", (templateNum) => {
    if (templateNum === 99) {
        cy.get(detailsSchedule).eq(0).click({ force: true })
        cy.get('td').contains(templateAgreeField).parents('tr').should('have.text', templateAgreeValue)
        cy.get('td').contains(templateDsvField).parents('tr').should('have.text', templateDsvValue)        
        cy.get(templateSpanDetail).eq(16).should('have.text', templateMexField)
        cy.get(tepmateSpanField).eq(16).should('have.text', templateMexValue)
    }
})

Cypress.Commands.add("checkTemplateAgree", (templateNum) => {
    if (templateNum === 99) {
        cy.get(detailsAgreement).eq(0).click({ force: true })
        cy.get(templateSpanDetail).eq(21).should('have.text', templateMaqField)
        cy.get(tepmateSpanField).eq(21).should('have.text', templateMaqValue)
        cy.get(templateSpanDetail).eq(31).should('have.text', templateDeliveryField)
        cy.get(tepmateSpanField).eq(31).should('have.text', templateDeliveryValue)
        cy.get(templateSpanDetail).eq(40).should('have.text', templateVarField)
        cy.get(tepmateSpanField).eq(40).should('have.text', templateVarValue)
    }
})

Cypress.Commands.add("checkTemplateFinance", (templateNum) => {
    if (templateNum === 99) {
        cy.get(detailsFinance).eq(0).click({ force: true })
        cy.get(templateSpanDetail).eq(46).should('have.text', templateCogsField)
        cy.get(tepmateSpanField).eq(46).should('have.text', templateCogsValue)
        cy.get(templateSpanDetail).eq(49).should('have.text', templateLBudgetField)
        cy.get(tepmateSpanField).eq(49).should('have.text', templateLBudgetValue)
    }
})

Cypress.Commands.add("checkTemplateOther", (templateNum) => {
    if (templateNum === 99) {
        cy.get(detailsOthers).eq(0).click({ force: true })
        cy.get(templateSpanDetail).eq(50).should('have.text', templateLRefProField)
        cy.get(tepmateSpanField).eq(50).should('have.text', templateLRefProValue)
        cy.get(templateSpanDetail).eq(78).should('have.text', templateLContactField)
        cy.get(tepmateSpanField).eq(78).should('have.text', templateLContactValue)
    }
})

Cypress.Commands.add("closeTemplateDetails", (templateNum) => {
    cy.get(detailMenuPanel).should('exist')
    cy.get(detailCloseIcon).click()
    cy.get(detailMenuPanel).should('exist')
    cy.get(recordSelectInput(templateNum)).parents(tableRow).should('not.have.css', 'background-color', templatedClickColor)
})

Cypress.Commands.add("checkTemplateFullInfo", (templateNum) => {
    if (templateNum === 99) {
        cy.get(iconInfoFull).eq(0).click({ force: true })
        cy.get(templateTableCell).eq(0).should("have.text", templateTextId)
        cy.get(templateTableCell).eq(1).should("have.text", templateValueId)
        cy.get(templateTableCell).eq(14).should("have.text", templateTextSource)
        cy.get(templateTableCell).eq(15).should("have.text", templateValueSource)
        cy.get(templateTableCell).eq(20).should("have.text", templateTextPrior)
        cy.get(templateTableCell).eq(21).should("have.text", templateValuePrior)
    }
})

Cypress.Commands.add("checkTemplateFullSchedule", (templateNum) => {
    if (templateNum === 99) {
        cy.get(iconScheduleFull).eq(0).click({ force: true })
        cy.get('td').contains(templateTextMApp).parents('tr').should('have.text', templateValueMApp)
        cy.get('span').contains(templateTextDex).parents(templateTScheduleFull).should('have.text', templateValueDex)
    }
})

Cypress.Commands.add("checkTemplateFullAgree", (templateNum) => {
    if (templateNum === 99) {
        cy.get(iconAgreeFull).eq(0).click({ force: true })
        cy.get(templateTableCell).eq(38).should("have.text", templateTextRC)
        cy.get(templateTableCell).eq(39).should("have.text", templateValueRC)
        cy.get(templateTableCell).eq(80).should("have.text", templateTextCPD)
        cy.get(templateTableCell).eq(81).should("have.text", templateValueCPD)
    }
})

Cypress.Commands.add("checkTemplateFullFin", (templateNum) => {
    if (templateNum === 99) {
        cy.get(iconFinFull).eq(0).click({ force: true })
        cy.get(templateTableCell).eq(84).should("have.text", templateTextCogs)
        cy.get(templateTableCell).eq(85).should("have.text", templateVelueCogs)
        cy.get(templateTableCell).eq(88).should("have.text", templateTextPBC)
        cy.get(templateTableCell).eq(89).should("have.text", templateValuePBC)
    }
})

Cypress.Commands.add("checkTemplateFullFile", (templateNum) => {
    if (templateNum === 99) {
        cy.get(iconFileFull).eq(0).click({ force: true })
        cy.get('span').contains(templateTextFile)
    }
})