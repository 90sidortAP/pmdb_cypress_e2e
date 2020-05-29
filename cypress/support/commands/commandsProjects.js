import { detailMenuPanel, tableRow, sideRowInfo, recordSelectInput, itemIDValue, detailsSchedule, detailsAgreement, detailsFinance, detailsFiles, noFilesMess, detailsOthers, detailCloseIcon } from "../variables/generalVariables"
import { registrationMAH, scheduleComment, agreementSupply, agreementReconcile, agreementEou, financeCurrency, financeBudget, othersRisks, othersPM } from "../variables/projectsVariables"

Cypress.Commands.add("setProjectState", (id) => {
    cy.setProjectInfo(id)
    cy.setProjectSchedule(id)
    cy.setProjectAgreement(id)
    cy.setProjectFinance(id)
    cy.setProjectOthers(id)
})

Cypress.Commands.add("openProjectDetails", (id) => {
    cy.get(recordSelectInput(id)).parents(tableRow).click()
    cy.get(detailMenuPanel).should('exist')
})

Cypress.Commands.add('checkProjectInfo', (id) => {
    cy.get(sideRowInfo).eq(0).should('have.text', itemIDValue(id))
    if (id === 94) {
        cy.get(sideRowInfo).eq(18).should('have.text', registrationMAH)
    }
})

Cypress.Commands.add('checkProjectSchedule', (id) => {
    cy.get(detailsSchedule).eq(0).click()
    if (id === 94) {
        cy.get(sideRowInfo).eq(19).should('have.text', scheduleComment)
        cy.get(sideRowInfo).eq(18).should('have.text', registrationMAH)
    }
})

Cypress.Commands.add('checkProjectAgree', (id) => {
    cy.get(detailsAgreement).eq(0).click()
    if (id === 94) {
        cy.get(sideRowInfo).eq(21).should('have.text', agreementSupply)
        cy.get(sideRowInfo).eq(24).should('have.text', agreementReconcile)
        cy.get(sideRowInfo).eq(41).should('have.text', agreementEou)
    }
})

Cypress.Commands.add('checkProjectFinance', (id) => {
    cy.get(detailsFinance).eq(0).click()
    if (id === 94) {
        cy.get(sideRowInfo).eq(45).should('have.text', financeCurrency)
        cy.get(sideRowInfo).eq(47).should('have.text', financeBudget)
    }
})

Cypress.Commands.add('checkProjectFile', (id) => {
    cy.get(detailsFiles).eq(0).click()
    if (id === 94) {
        cy.get('span').contains(noFilesMess)
    }
})

Cypress.Commands.add('checkProjectOthers', (id) => {
    cy.get(detailsOthers).eq(0).click()
    if (id === 94) {
        cy.get(sideRowInfo).eq(50).should('have.text', othersRisks)
        cy.get(sideRowInfo).eq(55).should('have.text', othersPM)
    }
})

Cypress.Commands.add("closeProjectDetails", () => {
    cy.get(detailMenuPanel).should('exist')
    cy.get(detailCloseIcon).click()
})