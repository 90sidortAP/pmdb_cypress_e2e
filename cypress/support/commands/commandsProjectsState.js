Cypress.Commands.add("setProjectInfo", (id) => {
    cy.getCookie('csrftoken').then((csrftoken) => {
        if (id === 94) {
            cy.request({
                method: 'POST',
                form: true,
                url: 'http://127.0.0.1:8000/94/project-informations/update/',
                body: {
                    csrfmiddlewaretoken: csrftoken.value,
                    brand_name: "Toprol XL",
                    market: "507", 
                    prescription_category: "127", 
                    patent_expiry: "2020-06-06",
                    mfd: "2020-05-29"
                }
            })
        }
    })
})

Cypress.Commands.add("setProjectSchedule", (id) => {
    cy.getCookie('csrftoken').then((csrftoken) => {
        if (id === 94) {
            cy.request({
                method: 'POST',
                form: true,
                url: 'http://127.0.0.1:8000/94/project-schedule/update/',
                body: {
                    csrfmiddlewaretoken: csrftoken.value,
                    schedule_comments: "<p>Społeczny układ palec relacja gwałtowny tłumaczyć kłopot. Podstawa dodatkowy brzeg. Opowiadać zachodni rejon skała herbata. Wiosna gmina studiować epoka.</p>"
                }
            })
        }
    })
})

Cypress.Commands.add("setProjectAgreement", (id) => {
    cy.getCookie('csrftoken').then((csrftoken) => {
        if (id === 94) {
            cy.request({
                method: 'POST',
                form: true,
                url: 'http://127.0.0.1:8000/94/project-agreements/update/',
                body: {
                    csrfmiddlewaretoken: csrftoken.value,
                    supply_price: "<p>Spodnie postawić Rumunia minerał głos gruby spotkanie. Jakby list Chorwacja uważać orzeł umieścić. Ciąża ucho pas zawodowy skala wyrażać. Gorący technika kościelny kuchnia istnieć minuta los 2.</p>",
                    reconciliation: "True",
                    agreement_number_eou: "99"
                }
            })
        }
    })
})

Cypress.Commands.add("setProjectFinance", (id) => {
    cy.getCookie('csrftoken').then((csrftoken) => {
        if (id === 94) {
            cy.request({
                method: 'POST',
                form: true,
                url: 'http://127.0.0.1:8000/94/project-financial/update/',
                body: {
                    csrfmiddlewaretoken: csrftoken.value,
                    project_budget_currency: "PLN",
                    registration_budget: "251100.38",
                    budget_comment: "<p>Podstawa obcy produkcja poza ziemniak prawie. Temperatura wąski kula przeszkoda otrzymywać. Padać Czechy muzyczny organizm. Brudny dobrze związek ciemny zakon.</p>"
                }
            })
        }
    })
})

Cypress.Commands.add("setProjectOthers", (id) => {
    cy.getCookie('csrftoken').then((csrftoken) => {
        if (id === 94) {
            cy.request({
                method: 'POST',
                form: true,
                url: 'http://127.0.0.1:8000/94/project-others/update/',
                body: {
                    csrfmiddlewaretoken: csrftoken.value,
                    risks: "<p>Ściana właśnie wpaść amerykański pojazd tani cierpieć tradycyjny. Domowy farba podstawowy smutny chłopak.</p>",
                    product_manager: "20"
                }
            })
        }
    })
})
