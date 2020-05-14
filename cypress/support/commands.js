import {
    loginSite,
    titleSite,
    contactButton,
    loginURL,
    projectSite,
    signInButton,
    inputUserName,
    inputPassword,
    signupButton,
    newUserMenu,
    shortTime,
    newUserName,
    newUserLast,
    newUserEmail,
    inputPassNew,
    inputPassConfNew
} from './loginVariables'

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

Cypress.Commands.add("loginUI", (user, login) => {
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
            cy.visit(projectSite)
        })
    })
})
