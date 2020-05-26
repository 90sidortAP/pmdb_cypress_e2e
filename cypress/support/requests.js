// Cypress.Commands.add("loginUI1", (user, login) => {
//     cy.visit('http://127.0.0.1:8000/')
//     cy.getCookie('csrftoken').then((csrftoken) => {
//         cy.request({
//             method: 'POST',
//             form: true,
//             url: loginURL,
//             body: {
//                 csrfmiddlewaretoken: csrftoken.value,
//                 username: user,
//                 password: login
//             }            
//         }).then((result) => {
//             cy.setCookie('sessionid', (result.allRequestResponses[0]['Response Headers']['set-cookie'][1]).substring(10,42))
//             cy.setCookie('csrftoken', (result.allRequestResponses[0]['Response Headers']['set-cookie'][0]).substring(10,74))
//         })
//     })
// })

// cy.getCookie('csrftoken').then((csrftoken) => {
//     cy.request({
//         method: 'POST',
//         form: true,
//         url: 'http://127.0.0.1:8000/97/template-informations/update/',
//         body: {
//             csrfmiddlewaretoken: csrftoken.value,
//             molecule: "6936",
//             api: "pow%C3%B3d",
//             pharmaceutical_form: "2391",
//             strength: "20mg",
//             source: "0",
//             project_manager: "13",
//             therapeutical_area: "474",
//             priority: "2",
//             atc3_or_otc3: "5966",
//             licensor: "3031",
//             new_licensor: "True"
//         }
//     })
// })