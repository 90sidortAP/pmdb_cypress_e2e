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
} from '../variables/loginVariables'

import {
    titleSite,
    shortTime,
    managerMarcinF,
    managerMaciej,
    managerAdamT,
    managerAleksN,
    managerPiwo,
    timeWait
} from '../variables/generalVariables'

import {
    templatePages,
    templateRows,
    selectRecordDisplay,
    templateSearchFilter,
    templateEmptySearch,
    emptySearchText,
    templateSelectInput,
    templateSelectAll,
    templateDetailMenu,
    templateDetailClose,
    templateSpanDetail,
    tepmateSpanField,
    templateIdField,
    templateIdValue,
    templateAtcOtcValue,
    templateNLicenseValue,
    templateAtcOtcField,
    templateNLicenseField,
    templateInfo,
    templateSchedule,
    templateAgreeValue,
    templateDsvValue,
    templateMexValue,
    templateAgreeField,
    templateDsvField,
    templateMexField,
    templateAgreement,
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
    templateInfoF,
    templateTextId,
    templateValueId,
    templateTextSource,
    templateValueSource,
    templateTextPrior,
    templateValuePrior,
    templateScheduleF,
    templateTextMApp,
    templateValueMApp,
    templateTextDex,
    templateTScheduleFull,
    templateValueDex,
    templateTextRC,
    templateValueRC,
    templateTextCPD,
    templateValueCPD,
    templateAgreeF
} from '../variables/templatesVariables'

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

Cypress.Commands.add("changePage", (pageNum) => {
    cy.get(templatePages).eq(pageNum).should('not.have.css', 'background-color', '#37474f')
    cy.wait(500)
    cy.get(templatePages).eq(pageNum).click()
    cy.wait(500)
    cy.get(templatePages).eq(pageNum).should('have.css', 'background-color', 'rgb(55, 71, 79)')
    if (pageNum === 0) {
        cy.get(templateRows).eq(2).contains(managerMarcinF).should('exist')
    } else if (pageNum === 1) {
        cy.get(templateRows).eq(2).contains(managerMaciej).should('exist')
    } else if (pageNum === 2) {
        cy.get(templateRows).eq(2).contains(managerAleksN).should('exist')
    } else {
        cy.get(templateRows).eq(2).contains(managerPiwo).should('exist')
    }
})

Cypress.Commands.add("changeRowNum", (displayNum) => {
    cy.get(selectRecordDisplay, { timeout: timeWait }).select(displayNum).then(() => {
        if (displayNum === '50') {
            cy.get(templateRows).should('have.length', 52)
        } else if (displayNum === '100') {
            cy.get(templateRows).should('have.length', 97)
        } else if (displayNum === 'All') {
            cy.get(templateRows).should('have.length', 97)
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
        for(let i = 99; i > 73; i --) {
            if (i !== 80) {
                cy.get(templateSelectInput(i)).parents(templateRows).should('have.css', 'background-color', 'rgba(73, 196, 161, 0.5)')
            }        
        }
    } else if (pageNum === 2) {
        for(let i = 73; i > 47; i --) {
            if (i !== 60) {
                cy.get(templateSelectInput(i)).parents(templateRows).should('have.css', 'background-color', 'rgba(73, 196, 161, 0.5)')
            }
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
        for(let i = 99; i > 73; i --) {
            if (i !== 80) {
                cy.get(templateSelectInput(i)).parents(templateRows).should('not.have.css', 'background-color', 'rgba(73, 196, 161, 0.5)')
            }        
        }
    } else if (pageNum === 2) {
        for(let i = 73; i > 47; i --) {
            if (i !== 60) {
                cy.get(templateSelectInput(i)).parents(templateRows).should('not.have.css', 'background-color', 'rgba(73, 196, 161, 0.5)')        
            }
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

Cypress.Commands.add("openTemplateDetails", (templateNum) => {
    cy.get(templateSelectInput(templateNum)).parents(templateRows).click()
    cy.get(templateSelectInput(templateNum)).parents(templateRows).should('have.css', 'background-color', 'rgba(236, 225, 72, 0.5)')
    cy.get(templateDetailMenu).should('exist')
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
        cy.get(templateSchedule).eq(0).click({ force: true })
        cy.get('td').contains(templateAgreeField).parents('tr').should('have.text', templateAgreeValue)
        cy.get('td').contains(templateDsvField).parents('tr').should('have.text', templateDsvValue)        
        cy.get(templateSpanDetail).eq(16).should('have.text', templateMexField)
        cy.get(tepmateSpanField).eq(16).should('have.text', templateMexValue)
    }
})

Cypress.Commands.add("checkTemplateAgree", (templateNum) => {
    if (templateNum === 99) {
        cy.get(templateAgreement).eq(0).click({ force: true })
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
        cy.get(templateFinance).eq(0).click({ force: true })
        cy.get(templateSpanDetail).eq(46).should('have.text', templateCogsField)
        cy.get(tepmateSpanField).eq(46).should('have.text', templateCogsValue)
        cy.get(templateSpanDetail).eq(49).should('have.text', templateLBudgetField)
        cy.get(tepmateSpanField).eq(49).should('have.text', templateLBudgetValue)
    }
})

Cypress.Commands.add("checkTemplateOther", (templateNum) => {
    if (templateNum === 99) {
        cy.get(templateOther).eq(0).click({ force: true })
        cy.get(templateSpanDetail).eq(50).should('have.text', templateLRefProField)
        cy.get(tepmateSpanField).eq(50).should('have.text', templateLRefProValue)
        cy.get(templateSpanDetail).eq(78).should('have.text', templateLContactField)
        cy.get(tepmateSpanField).eq(78).should('have.text', templateLContactValue)
    }
})

Cypress.Commands.add("closeTemplateDetails", (templateNum) => {
    cy.get(templateDetailMenu).should('exist')
    cy.get(templateDetailClose).click()
    cy.get(templateDetailMenu).should('exist')
    cy.get(templateSelectInput(templateNum)).parents(templateRows).should('not.have.css', 'background-color', 'rgba(236, 225, 72, 0.5)')
})

Cypress.Commands.add("checkTemplateFullInfo", (templateNum) => {
    if (templateNum === 99) {
        cy.get(templateInfoF).eq(0).click({ force: true })
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
        cy.get(templateScheduleF).eq(0).click({ force: true })
        cy.get('td').contains(templateTextMApp).parents('tr').should('have.text', templateValueMApp)
        cy.get('span').contains(templateTextDex).parents(templateTScheduleFull).should('have.text', templateValueDex)
    }
})
Cypress.Commands.add("checkTemplateFullInfo", (templateNum) => {
    if (templateNum === 99) {
        cy.get(templateAgreeF).eq(0).click({ force: true })
        cy.get(templateTableCell).eq(38).should("have.text", templateTextRC)
        cy.get(templateTableCell).eq(39).should("have.text", templateValueRC)
        cy.get(templateTableCell).eq(80).should("have.text", templateTextCPD)
        cy.get(templateTableCell).eq(81).should("have.text", templateValueCPD)
    }
})