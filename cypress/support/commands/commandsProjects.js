import { detailMenuPanel, tableRow, sideRowInfo, recordSelectInput, itemIDValue, detailsSchedule, detailsAgreement } from "../variables/generalVariables"
import { registrationMAH, scheduleComment, agreementSupply, agreementReconcile, agreementEou } from "../variables/projectsVariables"

Cypress.Commands.add("setProjectState", (id) => {
    cy.setProjectInfo(id)
    cy.setProjectSchedule(id)
    cy.setProjectAgreement(id)
    cy.setProjectFinance(id)
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
