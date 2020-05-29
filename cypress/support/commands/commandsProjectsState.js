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
            }). then(() => {
                cy.wait(1000)
            })
        }
    })
})
