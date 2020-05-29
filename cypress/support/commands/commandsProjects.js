import { detailMenuPanel, tableRow, sideRowInfo, recordSelectInput, itemIDValue } from "../variables/generalVariables"
import { registrationMAH } from "../variables/projectsVariables"

Cypress.Commands.add("setProjectState", (id) => {
    cy.setProjectInfo(94)
    cy.setProjectSchedule(94)
})

Cypress.Commands.add('checkProjectInfo', (id) => {
    cy.get(recordSelectInput(id)).parents(tableRow).click()
    cy.get(detailMenuPanel).should('exist')
    cy.get(sideRowInfo).eq(0).should('have.text', itemIDValue(id))
    if (id === 94) {
        cy.get(sideRowInfo).eq(18).should('have.text', registrationMAH)
    }
})