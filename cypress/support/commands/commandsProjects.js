import { detailMenuPanel, tableRow, sideRowInfo, recordSelectInput, itemIDValue, detailsSchedule } from "../variables/generalVariables"
import { registrationMAH, scheduleComment } from "../variables/projectsVariables"

Cypress.Commands.add("setProjectState", (id) => {
    cy.setProjectInfo(94)
    cy.setProjectSchedule(94)
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
    cy.get(sideRowInfo).eq(19).should('have.text', scheduleComment)
    if (id === 94) {
        cy.get(sideRowInfo).eq(18).should('have.text', registrationMAH)
    }
})