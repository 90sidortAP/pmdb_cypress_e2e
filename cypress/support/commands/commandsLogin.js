import {
    loginSite,
    contactButton,
    loginURL,
    signInButton,
    inputUserName,
    inputPassword,
} from '../variables/loginVariables'

import {
    titleSite,
    buttonSaveEdit
} from '../variables/generalVariables'

Cypress.Commands.add("openLoginPage", () => {
    cy.visit(loginSite)
    cy.title().should('eq', titleSite)
    cy.get(contactButton)
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
    cy.get(buttonSaveEdit).contains('Log in').should('exist')
    cy.get(buttonSaveEdit).contains('Log in').click()
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

Cypress.Commands.add("loginUI1", (user, login) => {
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
        })
    })
})

