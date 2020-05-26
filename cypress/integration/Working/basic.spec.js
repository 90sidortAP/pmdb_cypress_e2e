import {
    contactButton,
    documentButton,
    correctUser,
    correctPass,
    addProject,
    loginURL,
    loginError,
    incorrectUser,
    incorrectPass,
    messageError,
    newPassword,
    logoutIcon,
    loginSite,
    newFirstName,
    newLastName,
    newEmail
} from '../../support/variables/loginVariables'
import {
    timeWait,
    projectSite,
    managerMarcinF,
    managerAleksN,
    managerPiwo,
    managerWm,
    managerJR,
    managerBG,
    managerBg,
    managerWM,
} from '../../support/variables/generalVariables'
import {
    allTemplatesSite,
    templatePages,
    formCreamy,
    formHerbal,
    nameBifi,
    nameMagnesium,
    molecouleZinc,
    molecouleChromium,
    strength05,
    strength10,
    nonExistentText1,
    nonExistentText2,
    templateChangelog,
    templateNoChange,
    templateFull,
    templateFullView,
    templateEditDetail,
    templateSaveEdit,
    templateEditFull,
    templateAddNew,
    templateDetailMenu,
    templateSelSource,
    templateSelPro,
    templateSelMol,
    templateSelStr,
    templateValueId,
    templateSelPF,
    templateCreate,
    templateInput,
    template1Prop,
    templateNewSuccess,
    templateRows,
    templateSuccessNfo,
    templateFirst,
    templateNeurology,
    templateSelTA,
    templateSelPrio,
    templateSelATC,
    templateAntimeta,
    templateInputApi,
    templateSuccessUpd,
    tepmateSpanField,
    templateSchedule,
    templatePMBApp,
    templateIPCom,
    templateIPCX,
    templateAgreement,
    templateSuppPeriod,
    templateAgreeNote,
    templateTScheduleFull,
    templateFinance,
    templatePBudget,
    templateRefInput,
    templateOther,
    templatePNHeader,
    templateMHeader,
    templatePMHeader,
    templatePSHeader,
    templateTCell
} from '../../support/variables/templatesVariables'

context('PMDB: Login Page Smoke tests', () => {
    beforeEach(() => {
        cy.openLoginPage()
      })
    // it('Should be able to login with correct login and password', () => {
    //     cy.loginAttempt(correctUser, correctPass)
    //     cy.get(addProject).should('exist')
    //     cy.url().should('eq', projectSite)
    // })
    // it('Should be able to logout', () => {
    //     cy.loginUI(correctUser, correctPass, projectSite)
    //     cy.get(addProject, { timeout: timeWait }).should('exist')
    //     cy.url().should('eq', projectSite)
    //     cy.get(logoutIcon, { timeout: timeWait }).click()
    //     cy.get(documentButton).should('exist')
    //     cy.url().should('eq', loginSite)
    // })
    // it('Should be possible to change number of displayed records', () => {
    //     cy.loginUI(correctUser, correctPass, allTemplatesSite)
    //     cy.changeRowNum('50')
    //     cy.changeRowNum('100')
    //     cy.changeRowNum('25')
    //     cy.changeRowNum('All')
    // })
    // it('Should be able to change template page', () => {
    //     cy.loginUI(correctUser, correctPass, allTemplatesSite)
    //     cy.get(templatePages).should('have.length', '4')
    //     cy.changePage(1)
    //     cy.changePage(2)
    //     cy.changePage(3)
    //     cy.changePage(0)
    // })
    // it('Should be able to filter templates by all columns', () => {
    //     cy.loginUI(correctUser, correctPass, allTemplatesSite)
    //     cy.filterTemplates(managerMarcinF, 6)
    //     cy.filterTemplates(managerAleksN, 7)
    //     cy.filterTemplates(formCreamy, 8)
    //     cy.filterTemplates(formHerbal, 4)
    //     cy.filterTemplates(nameBifi, 3)
    //     cy.filterTemplates(nameMagnesium, 8)
    //     cy.filterTemplates(molecouleChromium, 4)
    //     cy.filterTemplates(molecouleZinc, 17)
    //     cy.filterTemplates(strength05, 7)
    //     cy.filterTemplates(strength10, 3)
    // })
    // it('Should show message when no records match search query', ()=> {
    //     cy.loginUI(correctUser, correctPass, allTemplatesSite)
    //     cy.filterTemplates(nonExistentText1, 0)
    //     cy.filterTemplates(nonExistentText2, 0)
    // })
    // it('Should be possible to select an deselect templates on different pages', ()=> {
    //     cy.loginUI(correctUser, correctPass, allTemplatesSite)
    //     cy.selectTemplate(89)
    //     cy.deselectTemplate(89)
    //     cy.changePage(1)
    //     cy.selectTemplate(70)
    //     cy.deselectTemplate(70)
    //     cy.changePage(3)
    //     cy.selectTemplate(13)
    //     cy.deselectTemplate(13)
    // })
    // it('Should be possible to select and deselect all templates on different pages', ()=> {
    //     cy.loginUI(correctUser, correctPass, allTemplatesSite)
    //     cy.selectAll(1)
    //     cy.deselectAll(1)
    //     cy.changePage(1)
    //     cy.selectAll(2)
    //     cy.deselectAll(2)
    // })
    // it('Should open and close template details', ()=> {
    //     cy.loginUI(correctUser, correctPass, allTemplatesSite)
    //     cy.openTemplateDetails(99)
    //     cy.checkTemplateInfo(99)
    //     cy.checkTemplateSchedule(99)
    //     cy.checkTemplateAgree(99)
    //     cy.checkTemplateFinance(99)
    //     cy.checkTemplateOther(99)
    //     cy.closeTemplateDetails(99)
    // })
    // it('Should show message when no changes in changelog', () => {
    //     cy.loginUI(correctUser, correctPass, allTemplatesSite)
    //     cy.openTemplateDetails(98)
    //     cy.get(templateChangelog).click()
    //     cy.get('div').contains(templateNoChange).should('exist')
    // }) 
    // it('Should be able to open and close fullscreen template view', () => {
    //     cy.loginUI(correctUser, correctPass, allTemplatesSite)
    //     cy.openTemplateDetails(99)
    //     cy.get(templateFullView).click()
    //     cy.get('span').contains(templateFull)
    //     cy.checkTemplateFullInfo(99)
    //     cy.checkTemplateFullSchedule(99)
    //     cy.checkTemplateFullAgree(99)
    //     cy.checkTemplateFullFin(99)
    //     cy.checkTemplateFullFile(99)
    // })
    // it('Should be able to open template edit mode', () => {
    //     cy.loginUI(correctUser, correctPass, allTemplatesSite)
    //     cy.openTemplateDetails(99)
    //     cy.get(templateEditDetail).eq(0).click()
    //     cy.get(templateSaveEdit).contains('Save').should('exist')
    // })
    // it('Should be able to open template edit mode in full view', () => {
    //     cy.loginUI(correctUser, correctPass, allTemplatesSite)
    //     cy.openTemplateDetails(99)
    //     cy.get(templateFullView).click()
    //     cy.get(templateEditFull).eq(1).click()
    //     cy.get(templateSaveEdit, { timeout: timeWait }).contains('Save').should('exist')
    // })
    // it('Should be possible to create new template with mandatory data', () => {
    //     cy.loginUI(correctUser, correctPass, allTemplatesSite)
    //     cy.get(templateAddNew).click()
    //     cy.get(templateDetailMenu).should('exist')
    //     cy.get(templateSelSource).eq(0).select("License-in")
    //     cy.get(templateSelPro).click()
    //     cy.get(templateInput).type(managerPiwo)
    //     cy.get('li').contains(managerPiwo).click()
    //     cy.wait(500)
    //     cy.get(templateSelMol).click()
    //     cy.get(templateInput).type(template1Prop)
    //     cy.get('li').contains(template1Prop).click()
    //     cy.get(templateSelStr).type(templateValueId)
    //     cy.get(templateSelPF).click()
    //     cy.get(templateInput).type(formHerbal)
    //     cy.get('li').contains(formHerbal).click()
    //     cy.get(templateCreate).click()
    //     cy.get(templateNewSuccess).should('have.text', templateSuccessNfo)
    //     cy.wait(1000)
    //     cy.get(templateFirst).eq(0).contains(template1Prop).should('exist')
    // })
    // it('Should be possible to create new template with all data', () => {
    //     cy.loginUI(correctUser, correctPass, allTemplatesSite)
    //     cy.get(templateAddNew).click()
    //     cy.get(templateDetailMenu).should('exist')
    //     cy.get(templateSelSource).eq(0).select("License-in")

    //     cy.get(templateSelPro).click()
    //     cy.get(templateInput).type(managerPiwo)
    //     cy.get('li').contains(managerPiwo).click()
    //     cy.wait(500)
    //     cy.get(templateSelMol).click()
    //     cy.get(templateInput).type(template1Prop)
    //     cy.get('li').contains(template1Prop).click()

    //     cy.get(templateSelStr).type(templateValueId)

    //     cy.get(templateSelPF).click()
    //     cy.get(templateInput).type(formHerbal)
    //     cy.get('li').contains(formHerbal).click()

    //     cy.get(templateSelTA).click()
    //     cy.get(templateInput).type(templateNeurology)
    //     cy.get('li').contains(templateNeurology).click()

    //     cy.get(templateSelATC).click()
    //     cy.get(templateInput).type(templateAntimeta)
    //     cy.get('li').contains(templateAntimeta).click()


    //     cy.get(templateCreate).click()
    //     cy.get(templateNewSuccess).should('have.text', templateSuccessNfo)
    //     cy.wait(1000)
    //     cy.get(templateFirst).eq(0).contains(template1Prop).should('exist')
    // })
    // it('Should be possible to make changes to an existing template', () => {
    //     cy.loginUI(correctUser, correctPass, allTemplatesSite)
    //     cy.openTemplateDetails(97)
    //     cy.get(templateEditDetail).eq(0).click()
    //     cy.get(templateSaveEdit).contains('Save').should('exist')
    //     cy.get(templateInputApi).clear()
    //     cy.get(templateInputApi).type(templateValueId)
    //     cy.get(templateSaveEdit).contains('Save').click()
    //     cy.get(templateNewSuccess).should('have.text',templateSuccessUpd)
    //     cy.get(tepmateSpanField).eq(4).contains(templateValueId)
    //     cy.wait(1000)
    //     cy.getCookie('csrftoken').then((csrftoken) => {
    //         cy.request({
    //             method: 'POST',
    //             form: true,
    //             url: 'http://127.0.0.1:8000/97/template-informations/update/',
    //             body: {
    //                 csrfmiddlewaretoken: csrftoken.value,
    //                 molecule: "6936",
    //                 api: "powod",
    //                 pharmaceutical_form: "2391",
    //                 strength: "20mg",
    //                 source: "0",
    //                 project_manager: "13",
    //                 therapeutical_area: "474",
    //                 priority: "2",
    //                 atc3_or_otc3: "5966",
    //                 licensor: "3031",
    //                 new_licensor: "True"
    //             }
    //         })
    //     })
    // })
    // it('Should be impossible to create new template without mandatory data', () => {
    //     cy.loginUI(correctUser, correctPass, allTemplatesSite)
    //     cy.get(templateAddNew).click()
    //     cy.get(templateDetailMenu).should('exist')
    //     cy.get(templateCreate).click()
    //     cy.get(templateSelSource).eq(0)
    //         .should('exist')
    //         .select("License-in")
    //     cy.get(templateCreate).click()
    //     cy.get(templateSelPro).should('exist').click()   
    //     cy.get(templateInput).type(managerPiwo)
    //     cy.get('li').contains(managerPiwo).click()
    //     cy.wait(500)
    //     cy.get(templateCreate).click()
    //     cy.get(templateSelMol).should('exist').click()
    //     cy.get(templateInput).type(template1Prop)
    //     cy.get('li').contains(template1Prop).click()
    //     cy.get(templateCreate).click()
    //     cy.get(templateSelStr).should('exist').type(templateValueId)
    //     cy.get(templateCreate).click()
    //     cy.get(templateSelPF).should('exist').click()
    // })
    // it('Should be impossible to save edited template with deleted mandatory fields', () => {
    //     cy.loginUI(correctUser, correctPass, allTemplatesSite)
    //     cy.openTemplateDetails(97)
    //     cy.get(templateEditDetail).eq(0).click()
    //     cy.get(templateSaveEdit).contains('Save').should('exist')
    //     cy.get(templateSelStr).clear({ force: true })
    //     cy.get(templateSaveEdit).contains('Save').click()
    //     cy.wait(1000)
    //     cy.get(templateSelStr).should('exist')
    // })
    // it('Should be possible to save changest made to template Schedule section', () => {
    //     cy.loginUI(correctUser, correctPass, allTemplatesSite)
    //     cy.getCookie('csrftoken').then((csrftoken) => {
    //         cy.request({
    //             method: 'POST',
    //             form: true,
    //             url: 'http://127.0.0.1:8000/97/template-schedule/update/',
    //             body: {
    //                 csrfmiddlewaretoken: csrftoken.value,
    //                 pmb_approval: "2020-05-29",
    //                 pmb_approval_current: "2020-06-17",
    //                 agreement_signature: "2020-06-06",
    //                 agreement_signature_current: "2020-06-12",
    //                 dossier_ready: "2020-06-16",
    //                 dossier_ready_current: "2020-05-27",
    //                 dossier_submitted: "2020-06-05",
    //                 dossier_submitted_current: "2020-05-22",
    //                 ma_granted: "2020-06-06",
    //                 ma_granted_current: "2020-05-23",
    //                 mockup_approved: "2020-06-08",
    //                 mockup_approved_current: "2020-06-01",
    //                 order_confirmed: "2020-05-30",
    //                 order_confirmed_current: "2020-05-24",
    //                 availability_in_dsv: "2020-05-26",
    //                 availability_in_dsv_current: "2020-03-04",
    //                 availability_for_sale: "2020-06-18",
    //                 availability_for_sale_current: "2020-06-05",
    //                 spc_expiry: "2020-01-15",
    //                 dex: "2020-06-07",
    //                 mex: "2020-05-24",
    //                 ip_status_comment: "<p>Okazja fala pływać przyszłość wielkość reakcja wielki. Dzień tani jądro potrzebny głęboki. Handlowy artystyczny ładny nieszczęście. Krok korzystać wpaść ani dolny operacja domowy.</p>"
    //             }
    //         })
    //     })
    //     cy.openTemplateDetails(97)
    //     cy.get(templateSchedule).eq(0).click({ force: true })
    //     cy.get(templateEditDetail).eq(0).click()
    //     cy.get(templateSaveEdit).contains('Save').should('exist')
    //     cy.get(templatePMBApp, { timeout : timeWait }).clear().type('2020-05-30')
    //     cy.wait(500)
    //     cy.window().then((win) => {
    //         win.document.querySelector('div[aria-label="Rich Text Editor, main"] p').textContent='changeTest'
    //     })
    //     cy.wait(500)
    //     cy.get(templateIPCX).contains('changeTest')
    //     cy.get('button[type="Submit"]').eq(1).click({ force: true })
    //     cy.get(templateNewSuccess, { timeout: timeWait }).should('have.text',templateSuccessUpd)
    //     cy.get('td').contains('PMB approval Date').parents('tr').should('have.text', '\n      PMB approval Date\n      \n        \n        2020-05-30\n        \n      \n      \n        \n        2020-06-17\n        \n      \n    ')
    //     cy.get('p').contains('changeTest')
    // })
    // it('Should be possible to save changest made to template Agreement section', () => {
    //     cy.loginUI(correctUser, correctPass, allTemplatesSite)
    //     cy.getCookie('csrftoken').then((csrftoken) => {
    //         cy.request({
    //             method: 'POST',
    //             form: true,
    //             url: 'http://127.0.0.1:8000/97/template-agreements/update/',
    //             body: {
    //                 csrfmiddlewaretoken: csrftoken.value,
    //                 agreement_type: "75",
    //                 batch_size: "<p>Lotnisko nos krzyż. Czoło umysł treść wyrażenie dużo dwa. Dać wiadomość dokonywać pociąg wywoływać bok wąski. Do czyn kłaść znaleźć głód częściowo kultura. Pieśń wciąż dach brzeg jaki mysz dziób.</p>",
    //                 moq: "<p>3300</p>",
    //                 maq: "<p>Ciemność Białoruś duży tytuł piętnaście palec potrzebny. Wiosna ozdobny nazywać się wódka trawa szkło. Umieszczać a badać spotkać ktoś postępować naukowy nadmierny.</p>",
    //                 reconciliation_comment: "<p>Wrogi moneta święty lokalny by dym kilka. 1 przyrząd działalność ucho wywodzić się postawa początek.</p>",
    //                 supply_period: "",
    //                 lead_time: "<p>Tytoń wolno komórka własny dotyczyć wiele. Kosz powstanie deszcz pisarz. Kobieta wygrać krzew kot przedmiot przygotowywać.</p>",
    //                 automatic_prolongation: "False",
    //                 agreement_expiry: "<p>Plemię punkt podział nazwisko fizyka mi. Ból autobus wracać umiejętność mężczyzna historia pochodzenie.</p>",
    //                 agreement_expiry_date: "2020-06-15",
    //                 notice_period: "",
    //                 delivery_terms: "207",
    //                 manufacturing_site: "<p>Pole kolorowy fotografia znaleźć otwarty szybki. Pierwiastek gość ludowy zabić istota szeroki moralny. Bydło noc włos u utrzymywać. Partia wśród program tłum towar krzesło przejście.</p>",
    //                 batch_release_site: "<p>Już przenosić silnik sieć masa tamten nagle. Zwłaszcza chęć zawód środowisko wojenny Austria pełny Afryka. Nasz jeden inny.</p>",
    //                 rolling_forecast: "<p>Wynikać delikatny ochrona. Naród wojskowy do trwały szukać idea islam. Obraz stracić wąski czytać. Wszystek umieścić armia samochodowy. Prawda połączenie śpiewać Węgry serce tutaj.</p>",
    //                 inventory_level: "<p>Skład więcej grunt przykład prowincja uśmiech partia narząd. Ciągnąć pająk chrześcijaństwo robota. Południowy niebieski mapa pustynia pewien.</p>",
    //                 agreement_number_eou: "powód",
    //                 variation_cost: "<p>Czyjś poniedziałek zbiornik. Przedsiębiorstwo szacunek życie samolot rodzic itp.. Zwykle kolano mężczyzna sprzęt otworzyć Anglia.</p>",
    //                 additional_costs: "<p>Okazja fala pływać przyszłość wielkość reakcja wielki. Dzień tani jądro potrzebny głęboki. Handlowy artystyczny ładny nieszczęście. Krok korzystać wpaść ani dolny operacja domowy.</p>",
    //                 competitive_product_actions: "<p>On okolica pan obowiązek niż zwycięstwo. Kontrola koncern sos szpital myśl sztuczny planować. Zamknąć rodzic trzeci kraina drugi uciekać. Płot stworzyć odważny. Postępowanie zakończyć fabryka.</p>",
    //                 competitive_product_definition: "<p>Siebie pół bogaty. Niemcy sprzedawać pięćdziesiąt zainteresowanie mięso. Nastrój budynek starać się grzech angielski kultura. Ciepło kość krew.</p>",
    //                 comments: "<p>Kino obok wola sieć strata bilet operacja. Armia pomarańczowy mięsień 4 jeszcze arabski zdrowie. Pomarańczowy pierś ciężki wczoraj traktować. Prezydent spadać otwierać.</p>",
    //             }
    //         })
    //     })
    //     cy.openTemplateDetails(97)
    //     cy.get(templateAgreement).eq(0).click({ force: true })
    //     cy.get(templateEditDetail).eq(0).click()
    //     cy.get(templateSaveEdit).contains('Save').should('exist')
    //     cy.get(templateAgreeNote).type(10)
    //     cy.get(templateSuppPeriod).type(2016)
    //     cy.get('button[type="Submit"]').eq(2).click({ force: true })
    //     cy.get(templateNewSuccess, { timeout: timeWait }).should('have.text',templateSuccessUpd)
    //     cy.get(tepmateSpanField).eq(25).should('have.text', '\n      2016\n    ')
    //     cy.get(tepmateSpanField).eq(30).should('have.text', '\n      10.0\n    ')
    // })
    // it('Should be possible to save changest made to template Finance section', () => {
    //     cy.loginUI(correctUser, correctPass, allTemplatesSite)
    //     cy.getCookie('csrftoken').then((csrftoken) => {
    //         cy.request({
    //             method: 'POST',
    //             form: true,
    //             url: 'http://127.0.0.1:8000/97/template-financial/update/',
    //             body: {
    //                 csrfmiddlewaretoken: csrftoken.value,
    //                 cogs: "<p>Polak zaczynać dziewięć tyle. Matka kwiat małpa. Użytkownik sen słaby czapka handel. Wyścig lampa świeca we codziennie łagodny radio.</p>",
    //                 project_budget: "169636.27",
    //                 project_budget_currency: "PLN",
    //                 license_budget: "571266.37",
    //             }
    //         })
    //     })
    //     cy.openTemplateDetails(97)
    //     cy.get(templateFinance).eq(0).click({ force: true })
    //     cy.get(templateEditDetail).eq(0).click()
    //     cy.get(templateSaveEdit).contains('Save').should('exist')
    //     cy.get(templatePBudget, {timeout: timeWait }).clear().type(templateValueId)
    //     cy.get('button[type="Submit"]').eq(3).click({ force: true })
    //     cy.get(templateNewSuccess, { timeout: timeWait }).should('have.text',templateSuccessUpd)
    //     cy.get(tepmateSpanField).eq(47).should('have.text', '\n      99,00\n    ')
    // })
    // it('Should be possible to save changest made to template Others section', () => {
    //     cy.loginUI(correctUser, correctPass, allTemplatesSite)
    //     cy.getCookie('csrftoken').then((csrftoken) => {
    //         cy.request({
    //             method: 'POST',
    //             form: true,
    //             url: 'http://127.0.0.1:8000/97/template-others/update/',
    //             body: {
    //                 csrfmiddlewaretoken: csrftoken.value,
    //                 reference_product: "wola",
    //                 pack_type: "237",
    //                 shelf_life: "0",
    //                 batch_control_site: "<p>Zawsze wielki muzyka elektryczny choć. Prawdziwy mleko kształt szeroki. Żywy tłumaczenie płynąć wieczór praktyka sposób.</p>",
    //                 ip_audit_date: "2020-06-05",
    //                 ip_audit_status: "2",
    //                 dossier_audit_date: "2020-06-12",
    //                 dossier_audit_status: "2",
    //                 clinical_audit_status: "3",
    //                 post_audit_recommedation: "1",
    //                 justification: "<p>Czyli obiad pod pomieszczenie Azja. Lot Ukraina angielski umierać rejon cisza wniosek.</p>",
    //                 samples_needed: "True",
    //                 analytical_method_transfer: "" ,
    //                 dossier_format: "56",
    //                 registration_strategy: "93",
    //                 registration_strategy_justification: "<p>Jedyny rasa zdolny błoto stworzyć siedzieć. Teraz zając ta kochać alkohol. Życie godzina martwy dodatek. Morze obwód etap daleki wesoły oddawać.</p>",
    //                 intended_indication: "<p>Czyli obiad pod pomieszczenie Azja. Lot Ukraina angielski umierać rejon cisza wniosek.</p>",
    //                 peadiatric_indications: "False",
    //                 orphan_esignation: "False",
    //                 puma: "True",
    //                 responsible_for_registration: "38",
    //                 referent_mah: "przyrząd",
    //                 date_of_first_registration_of_reference_product: "2020-05-31",
    //                 reference_product_procedure: "95",
    //                 reference_product_indications: "znów",
    //                 reference_product_posology: "Holandia",
    //                 maximum_daily_dose: "mieszkanka",
    //                 contact_persons: "<p>Wybrzeże r. wybierać kultura poczta teraz ogół zawodnik. Składać Się tajemnica skład obóz. Drużyna istnienie niebezpieczeństwo umożliwiać oczekiwać.</p>",
    //                 licensor_contact: "<p>Rzucić aktor zmęczony przyszłość kilka narząd. Dostać zwłaszcza także jutro kolacja po prostu pojazd. Patrzeć pole pies 2 zgoda umiejętność.</p>"
    //             }
    //         })
    //     })
    //     cy.openTemplateDetails(97)
    //     cy.get(templateOther).eq(0).click({ force: true })
    //     cy.get(templateEditDetail).eq(0).click()
    //     cy.get(templateSaveEdit).contains('Save').should('exist')
    //     cy.get(templateRefInput, {timeout: timeWait }).clear().type(templateValueId)
    //     cy.window().then((win) => {
    //         win.document.querySelectorAll('div[aria-label="Rich Text Editor, main"] p')[5].textContent = 'changeTest'
    //     })
    //     cy.get('button[type="Submit"]').eq(4).click({ force: true })
    //     cy.get(templateNewSuccess, { timeout: timeWait }).should('have.text',templateSuccessUpd)
    //     cy.get(tepmateSpanField).eq(50).should('have.text', '\n      99\n    ')
    //     cy.get(tepmateSpanField).eq(79).should('have.text', '\n      changeTest\n    ')
    // })
    it('Should be possible to sort templates by all columns', () => {
        cy.loginUI(correctUser, correctPass, allTemplatesSite)
        cy.get(templatePNHeader).eq(0).click()
        cy.wait(1000)
        cy.get(templateTCell).eq(2).should('have.text', managerJR).should('exist')
        cy.get(templatePNHeader).eq(0).click()
        cy.wait(1000)
        cy.get(templateTCell).eq(2).should('have.text', managerBG).should('exist')

        cy.get(templateMHeader).eq(0).click()
        cy.get(templateRows).eq(2).contains(managerJR).should('exist')
        cy.get(templateMHeader).eq(0).click()
        cy.get(templateRows).eq(2).contains(managerBG).should('exist')

        cy.get(templatePMHeader).eq(0).click()
        cy.get(templateRows).eq(2).contains(managerBg).should('exist')
        cy.get(templatePMHeader).eq(0).click()
        cy.get(templateRows).eq(2).contains(managerWM).should('exist')

        cy.get(templatePSHeader).eq(0).click()
        cy.get(templateRows).eq(2).contains(managerWm).should('exist')
        cy.get(templatePSHeader).eq(0).click()
        cy.get(templateRows).eq(2).contains(managerBG).should('exist')
    })
})
