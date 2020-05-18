import {
    loginSite,
    contactButton,
    loginURL,
    signInButton,
    inputUserName,
    inputPassword,
    signupButton,
    newUserMenu,
    newUserName,
    newUserLast,
    newUserEmail,
    inputPassNew,
    inputPassConfNew
} from './loginVariables'

import {
    titleSite,
    shortTime,
    managerAnnaS,
    managerBartG,
    managerAdamT,
    timeWait
} from './generalVariables'

import {
    templatePages,
    templateRows,
    selectRecordDisplay,
    templateSearchFilter,
    templateEmptySearch,
    emptySearchText,
    templateSelectInput,
    templateSelectAll
} from './templatesVariables'

Cypress.Commands.add("openLoginPage", () => {
    cy.visit(loginSite)
    cy.title().should('eq', titleSite)
    cy.get(contactButton)
})

Cypress.Commands.add("createNewUser", (userFirstName, userLastName, userEmail, userPassword, userConfirm) =>{
    cy.get(signupButton)
    .should('exist')
    .click()
    cy.get(newUserMenu, { timeout: shortTime }).should('exist')
    if (userFirstName !== undefined) {
        cy.get(newUserName).type(userFirstName)
        cy.wait(500)
    }
    if (userLastName !== undefined) {
        cy.get(newUserLast).type(userLastName)
        cy.wait(500)
    }
    if (userEmail !== undefined) {
        cy.get(newUserEmail).type(userEmail)
        cy.wait(500)
    }
    if (userPassword !== undefined) {
        cy.get(inputPassNew).eq(1).type(userPassword)
        cy.wait(500)
    }
    if (userConfirm !== undefined) {
        cy.get(inputPassConfNew).type(userConfirm)
        cy.wait(500)
    }
    cy.get('button').contains('Sign up').click()
})

Cypress.Commands.add("loginAttempt", (user, password) => {
    cy.get(signInButton).should('exist')
    cy.get(signInButton).click()
    cy.get(inputUserName).should('exist')
    if (user !== undefined) {
        cy.get(inputUserName).type(user)
    }
    cy.get(inputPassword).should('exist')
    if (password !== undefined) {
        cy.get(inputPassword).type(password)
    }
    cy.get('button[type="submit"]').contains('Log in').should('exist')
    cy.get('button[type="submit"]').contains('Log in').click()
})

Cypress.Commands.add("loginUI", (user, login, site) => {
    cy.visit('http://127.0.0.1:8000/')
    cy.getCookie('csrftoken').then((csrftoken) => {
        cy.request({
            method: 'POST',
            form: true,
            url: loginURL,
            body: {
                csrfmiddlewaretoken: csrftoken.value,
                username: user,
                password: login
            }            
        }).then((result) => {
            cy.setCookie('sessionid', (result.allRequestResponses[0]['Response Headers']['set-cookie'][1]).substring(10,42))
            cy.setCookie('csrftoken', (result.allRequestResponses[0]['Response Headers']['set-cookie'][0]).substring(10,74))
        }).then(() => {
            cy.visit(site)
        })
    })
})

Cypress.Commands.add("changePage", (pageNum) => {
    cy.get(templatePages).eq(pageNum).should('not.have.css', 'background-color', '#37474f')
    cy.wait(500)
    cy.get(templatePages).eq(pageNum).click()
    cy.wait(500)
    cy.get(templatePages).eq(pageNum).should('have.css', 'background-color', 'rgb(55, 71, 79)')
    if (pageNum === 0) {
        cy.get(templateRows).eq(2).contains(managerAnnaS).should('exist')
    } else if (pageNum === 1) {
        cy.get(templateRows).eq(2).contains(managerBartG).should('exist')
    } else if (pageNum === 2) {
        cy.get(templateRows).eq(2).contains(managerAnnaS).should('exist')
    } else {
        cy.get(templateRows).eq(2).contains(managerAdamT).should('exist')
    }
})

Cypress.Commands.add("changeRowNum", (displayNum) => {
    cy.get(selectRecordDisplay, { timeout: timeWait }).select(displayNum).then(() => {
        if (displayNum === '50') {
            cy.get(templateRows).should('have.length', 52)
        } else if (displayNum === '100') {
            cy.get(templateRows).should('have.length', 101)
        } else if (displayNum === 'All') {
            cy.get(templateRows).should('have.length', 101)
        } else {
            cy.get(templateRows).should('have.length', 27)
        }
    })
})

Cypress.Commands.add("filterTemplates", (searchQuery, desLength) => {
    cy.get(templateSearchFilter, {timeout: timeWait}).type(searchQuery)
    if (desLength === 0) {
        cy.get(templateRows).should('have.length', 2)
        cy.get(templateEmptySearch).should('have.text', emptySearchText)
        cy.get(templateSearchFilter, {timeout: timeWait}).clear()
    } else {
        cy.get(templateRows).should('have.length', desLength).then(() => {
            cy.get(templateSearchFilter, {timeout: timeWait}).clear()
            cy.get(templateRows).should('have.length', 27)
        })
    }
})

Cypress.Commands.add("selectTemplate", (numValue) => {
    cy.get(templateSelectInput(numValue)).should('exist').click()
    cy.get(templateSelectInput(numValue)).parents(templateRows).should('have.css', 'background-color', 'rgba(73, 196, 161, 0.5)')
})

Cypress.Commands.add("deselectTemplate", (numValue) => {
    cy.get(templateSelectInput(numValue)).should('exist').click()
    cy.get(templateSelectInput(numValue)).parents(templateRows).should('not.have.css', 'background-color', 'rgba(73, 196, 161, 0.5)')
})

Cypress.Commands.add("selectAll", (pageNum) => {
    cy.get(templateSelectAll).eq(0).click()
    cy.wait(1000)
    if (pageNum === 1) {
        for(let i = 99; i > 74; i --) {
            cy.get(templateSelectInput(i)).parents(templateRows).should('have.css', 'background-color', 'rgba(73, 196, 161, 0.5)')        
        }
    } else if (pageNum === 2) {
        for(let i = 74; i > 49; i --) {
            cy.get(templateSelectInput(i)).parents(templateRows).should('have.css', 'background-color', 'rgba(73, 196, 161, 0.5)')        
        }
    } else if (pageNum === 3) {
        for(let i = 49; i > 24; i --) {
            cy.get(templateSelectInput(i)).parents(templateRows).should('have.css', 'background-color', 'rgba(73, 196, 161, 0.5)')        
        }
    } else {
        for(let i = 24; i > 0; i --) {
            cy.get(templateSelectInput(i)).parents(templateRows).should('have.css', 'background-color', 'rgba(73, 196, 161, 0.5)')        
        }
    }
})

Cypress.Commands.add("deselectAll", (pageNum) => {
    cy.get(templateSelectAll).eq(0).click()
    cy.wait(1000)
    if (pageNum === 1) {
        for(let i = 99; i > 74; i --) {
            cy.get(templateSelectInput(i)).parents(templateRows).should('not.have.css', 'background-color', 'rgba(73, 196, 161, 0.5)')        
        }
    } else if (pageNum === 2) {
        for(let i = 74; i > 49; i --) {
            cy.get(templateSelectInput(i)).parents(templateRows).should('not.have.css', 'background-color', 'rgba(73, 196, 161, 0.5)')        
        }
    } else if (pageNum === 3) {
        for(let i = 49; i > 24; i --) {
            cy.get(templateSelectInput(i)).parents(templateRows).should('not.have.css', 'background-color', 'rgba(73, 196, 161, 0.5)')        
        }
    } else {
        for(let i = 24; i > 0; i --) {
            cy.get(templateSelectInput(i)).parents(templateRows).should('not.have.css', 'background-color', 'rgba(73, 196, 161, 0.5)')        
        }
    }
})