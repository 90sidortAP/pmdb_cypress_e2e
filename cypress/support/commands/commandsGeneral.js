import {
    recordSelectInput,
    tableOddRow,
    tableRow,
    tableSelectedColor,
    timeWait,
    tableFilter,
    tableEmptySearch,
    emptySearchMessage,
    tablePages,
    managerMarcinF,
    managerMaciej,
    managerAleksN,
    managerPiwo,
    pageColor2,
    pageColor1,
    selectDisplayNum,
    recordsSelectAll
} from "../variables/generalVariables"

Cypress.Commands.add("changeRecordNum", (displayNum, countExpect) => {
    cy.get(selectDisplayNum, { timeout: timeWait }).select(displayNum).then(() => {
        if (displayNum === '50') {
            cy.get(tableRow).should('have.length', countExpect)
        } else if (displayNum === '100') {
            cy.get(tableRow).should('have.length', countExpect)
        } else if (displayNum === 'All') {
            cy.get(tableRow).should('have.length', countExpect)
        } else {
            cy.get(tableRow).should('have.length', countExpect)
        }
    })
})

Cypress.Commands.add("changePage", (pageNum) => {
    cy.get(tablePages, { timeout: timeWait }).eq(pageNum).should('not.have.css', 'background-color', pageColor1)
    cy.wait(500)
    cy.get(tablePages, { timeout: timeWait }).eq(pageNum).click()
    cy.wait(500)
    cy.get(tablePages, { timeout: timeWait }).eq(pageNum).should('have.css', 'background-color', pageColor2)
    if (pageNum === 0) {
        cy.get(tableRow).eq(2).contains(managerMarcinF).should('exist')
    } else if (pageNum === 1) {
        cy.get(tableRow).eq(2).contains(managerMaciej).should('exist')
    } else if (pageNum === 2) {
        cy.get(tableRow).eq(2).contains(managerAleksN).should('exist')
    } else {
        cy.get(tableRow).eq(2).contains(managerPiwo).should('exist')
    }
})

Cypress.Commands.add('sortColumn', (header1, header2, match1, match2) => {
    cy.get(header1).eq(0).click()
    cy.wait(1000)
    cy.get(tableOddRow).eq(0).should('have.text', match1)
    cy.get(header2).eq(0).click()
    cy.wait(1000)
    cy.get(tableOddRow).eq(0).should('have.text', match2)
})

Cypress.Commands.add("selectRecord", (numValue) => {
    cy.get(recordSelectInput(numValue)).should('exist').click()
    cy.get(recordSelectInput(numValue)).parents(tableRow).should('have.css', 'background-color', tableSelectedColor)
})

Cypress.Commands.add("deselectRow", (numValue) => {
    cy.get(recordSelectInput(numValue)).should('exist').click()
    cy.get(recordSelectInput(numValue)).parents(tableRow).should('not.have.css', 'background-color', tableSelectedColor)
})

Cypress.Commands.add("filterRecords", (searchQuery, desLength) => {
    cy.get(tableFilter, {timeout: timeWait}).type(searchQuery)
    if (desLength === 0) {
        cy.get(tableRow).should('have.length', 2)
        cy.get(tableEmptySearch).should('have.text', emptySearchMessage)
        cy.get(tableFilter, {timeout: timeWait}).clear()
    } else {
        cy.get(tableRow, {timeout: timeWait}).should('have.length', desLength).then(() => {
            cy.get(tableFilter, {timeout: timeWait}).clear()
            cy.get(tableRow).should('have.length', 27)
        })
    }
})

Cypress.Commands.add("selectAll", (pageNum) => {
    cy.get(recordsSelectAll).eq(0).click()
    cy.wait(1000)
    if (pageNum === 1) {
        for(let i = 99; i > 73; i --) {
            if (i !== 80) {
                cy.get(recordSelectInput(i)).parents(tableRow).should('have.css', 'background-color', tableSelectedColor)
            }        
        }
    } else if (pageNum === 2) {
        for(let i = 73; i > 47; i --) {
            if (i !== 60) {
                cy.get(recordSelectInput(i)).parents(tableRow).should('have.css', 'background-color', tableSelectedColor)
            }
        }
    } else if (pageNum === 3) {
        for(let i = 49; i > 24; i --) {
            cy.get(recordSelectInput(i)).parents(tableRow).should('have.css', 'background-color', tableSelectedColor)        
        }
    } else {
        for(let i = 24; i > 0; i --) {
            cy.get(recordSelectInput(i)).parents(tableRow).should('have.css', 'background-color', tableSelectedColor)        
        }
    }
})

Cypress.Commands.add("deselectAll", (pageNum) => {
    cy.get(recordsSelectAll).eq(0).click()
    cy.wait(1000)
    if (pageNum === 1) {
        for(let i = 99; i > 73; i --) {
            if (i !== 80) {
                cy.get(recordSelectInput(i)).parents(tableRow).should('not.have.css', 'background-color', tableSelectedColor)
            }        
        }
    } else if (pageNum === 2) {
        for(let i = 73; i > 47; i --) {
            if (i !== 60) {
                cy.get(recordSelectInput(i)).parents(tableRow).should('not.have.css', 'background-color', tableSelectedColor)        
            }
        }
    } else if (pageNum === 3) {
        for(let i = 49; i > 24; i --) {
            cy.get(recordSelectInput(i)).parents(tableRow).should('not.have.css', 'background-color', tableSelectedColor)        
        }
    } else {
        for(let i = 24; i > 0; i --) {
            cy.get(recordSelectInput(i)).parents(tableRow).should('not.have.css', 'background-color', tableSelectedColor)        
        }
    }
})