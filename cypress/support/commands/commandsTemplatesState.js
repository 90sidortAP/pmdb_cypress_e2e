Cypress.Commands.add("setTemplateEdit", () => {
    cy.getCookie('csrftoken').then((csrftoken) => {
        cy.request({
            method: 'POST',
            form: true,
            url: 'http://127.0.0.1:8000/97/template-informations/update/',
            body: {
                csrfmiddlewaretoken: csrftoken.value,
                molecule: "6936",
                api: "powod",
                pharmaceutical_form: "2391",
                strength: "20mg",
                source: "0",
                project_manager: "13",
                therapeutical_area: "474",
                priority: "2",
                atc3_or_otc3: "5966",
                licensor: "3031",
                new_licensor: "True"
            }
        })
    })
})

Cypress.Commands.add("setTemplateSchedule", () => {
    cy.getCookie('csrftoken').then((csrftoken) => {
        cy.request({
            method: 'POST',
            form: true,
            url: 'http://127.0.0.1:8000/97/template-schedule/update/',
            body: {
                csrfmiddlewaretoken: csrftoken.value,
                pmb_approval: "2020-05-29",
                pmb_approval_current: "2020-06-17",
                agreement_signature: "2020-06-06",
                agreement_signature_current: "2020-06-12",
                dossier_ready: "2020-06-16",
                dossier_ready_current: "2020-05-27",
                dossier_submitted: "2020-06-05",
                dossier_submitted_current: "2020-05-22",
                ma_granted: "2020-06-06",
                ma_granted_current: "2020-05-23",
                mockup_approved: "2020-06-08",
                mockup_approved_current: "2020-06-01",
                order_confirmed: "2020-05-30",
                order_confirmed_current: "2020-05-24",
                availability_in_dsv: "2020-05-26",
                availability_in_dsv_current: "2020-03-04",
                availability_for_sale: "2020-06-18",
                availability_for_sale_current: "2020-06-05",
                spc_expiry: "2020-01-15",
                dex: "2020-06-07",
                mex: "2020-05-24",
                ip_status_comment: "<p>Okazja fala pływać przyszłość wielkość reakcja wielki. Dzień tani jądro potrzebny głęboki. Handlowy artystyczny ładny nieszczęście. Krok korzystać wpaść ani dolny operacja domowy.</p>"
            }
        })
    })
})

Cypress.Commands.add("setTemplateAgreement", () => {
    cy.getCookie('csrftoken').then((csrftoken) => {
        cy.request({
            method: 'POST',
            form: true,
            url: 'http://127.0.0.1:8000/97/template-agreements/update/',
            body: {
                csrfmiddlewaretoken: csrftoken.value,
                agreement_type: "75",
                batch_size: "<p>Lotnisko nos krzyż. Czoło umysł treść wyrażenie dużo dwa. Dać wiadomość dokonywać pociąg wywoływać bok wąski. Do czyn kłaść znaleźć głód częściowo kultura. Pieśń wciąż dach brzeg jaki mysz dziób.</p>",
                moq: "<p>3300</p>",
                maq: "<p>Ciemność Białoruś duży tytuł piętnaście palec potrzebny. Wiosna ozdobny nazywać się wódka trawa szkło. Umieszczać a badać spotkać ktoś postępować naukowy nadmierny.</p>",
                reconciliation_comment: "<p>Wrogi moneta święty lokalny by dym kilka. 1 przyrząd działalność ucho wywodzić się postawa początek.</p>",
                supply_period: "",
                lead_time: "<p>Tytoń wolno komórka własny dotyczyć wiele. Kosz powstanie deszcz pisarz. Kobieta wygrać krzew kot przedmiot przygotowywać.</p>",
                automatic_prolongation: "False",
                agreement_expiry: "<p>Plemię punkt podział nazwisko fizyka mi. Ból autobus wracać umiejętność mężczyzna historia pochodzenie.</p>",
                agreement_expiry_date: "2020-06-15",
                notice_period: "",
                delivery_terms: "207",
                manufacturing_site: "<p>Pole kolorowy fotografia znaleźć otwarty szybki. Pierwiastek gość ludowy zabić istota szeroki moralny. Bydło noc włos u utrzymywać. Partia wśród program tłum towar krzesło przejście.</p>",
                batch_release_site: "<p>Już przenosić silnik sieć masa tamten nagle. Zwłaszcza chęć zawód środowisko wojenny Austria pełny Afryka. Nasz jeden inny.</p>",
                rolling_forecast: "<p>Wynikać delikatny ochrona. Naród wojskowy do trwały szukać idea islam. Obraz stracić wąski czytać. Wszystek umieścić armia samochodowy. Prawda połączenie śpiewać Węgry serce tutaj.</p>",
                inventory_level: "<p>Skład więcej grunt przykład prowincja uśmiech partia narząd. Ciągnąć pająk chrześcijaństwo robota. Południowy niebieski mapa pustynia pewien.</p>",
                agreement_number_eou: "powód",
                variation_cost: "<p>Czyjś poniedziałek zbiornik. Przedsiębiorstwo szacunek życie samolot rodzic itp.. Zwykle kolano mężczyzna sprzęt otworzyć Anglia.</p>",
                additional_costs: "<p>Okazja fala pływać przyszłość wielkość reakcja wielki. Dzień tani jądro potrzebny głęboki. Handlowy artystyczny ładny nieszczęście. Krok korzystać wpaść ani dolny operacja domowy.</p>",
                competitive_product_actions: "<p>On okolica pan obowiązek niż zwycięstwo. Kontrola koncern sos szpital myśl sztuczny planować. Zamknąć rodzic trzeci kraina drugi uciekać. Płot stworzyć odważny. Postępowanie zakończyć fabryka.</p>",
                competitive_product_definition: "<p>Siebie pół bogaty. Niemcy sprzedawać pięćdziesiąt zainteresowanie mięso. Nastrój budynek starać się grzech angielski kultura. Ciepło kość krew.</p>",
                comments: "<p>Kino obok wola sieć strata bilet operacja. Armia pomarańczowy mięsień 4 jeszcze arabski zdrowie. Pomarańczowy pierś ciężki wczoraj traktować. Prezydent spadać otwierać.</p>",
            }
        })
    })
})

Cypress.Commands.add("setTemplateFinance", () => {
    cy.getCookie('csrftoken').then((csrftoken) => {
        cy.request({
            method: 'POST',
            form: true,
            url: 'http://127.0.0.1:8000/97/template-financial/update/',
            body: {
                csrfmiddlewaretoken: csrftoken.value,
                cogs: "<p>Polak zaczynać dziewięć tyle. Matka kwiat małpa. Użytkownik sen słaby czapka handel. Wyścig lampa świeca we codziennie łagodny radio.</p>",
                project_budget: "169636.27",
                project_budget_currency: "PLN",
                license_budget: "571266.37",
            }
        })
    })
})

Cypress.Commands.add("setTemplateOthers", () => {
    cy.getCookie('csrftoken').then((csrftoken) => {
        cy.request({
            method: 'POST',
            form: true,
            url: 'http://127.0.0.1:8000/97/template-others/update/',
            body: {
                csrfmiddlewaretoken: csrftoken.value,
                reference_product: "wola",
                pack_type: "237",
                shelf_life: "0",
                batch_control_site: "<p>Zawsze wielki muzyka elektryczny choć. Prawdziwy mleko kształt szeroki. Żywy tłumaczenie płynąć wieczór praktyka sposób.</p>",
                ip_audit_date: "2020-06-05",
                ip_audit_status: "2",
                dossier_audit_date: "2020-06-12",
                dossier_audit_status: "2",
                clinical_audit_status: "3",
                post_audit_recommedation: "1",
                justification: "<p>Czyli obiad pod pomieszczenie Azja. Lot Ukraina angielski umierać rejon cisza wniosek.</p>",
                samples_needed: "True",
                analytical_method_transfer: "" ,
                dossier_format: "56",
                registration_strategy: "93",
                registration_strategy_justification: "<p>Jedyny rasa zdolny błoto stworzyć siedzieć. Teraz zając ta kochać alkohol. Życie godzina martwy dodatek. Morze obwód etap daleki wesoły oddawać.</p>",
                intended_indication: "<p>Czyli obiad pod pomieszczenie Azja. Lot Ukraina angielski umierać rejon cisza wniosek.</p>",
                peadiatric_indications: "False",
                orphan_esignation: "False",
                puma: "True",
                responsible_for_registration: "38",
                referent_mah: "przyrząd",
                date_of_first_registration_of_reference_product: "2020-05-31",
                reference_product_procedure: "95",
                reference_product_indications: "znów",
                reference_product_posology: "Holandia",
                maximum_daily_dose: "mieszkanka",
                contact_persons: "<p>Wybrzeże r. wybierać kultura poczta teraz ogół zawodnik. Składać Się tajemnica skład obóz. Drużyna istnienie niebezpieczeństwo umożliwiać oczekiwać.</p>",
                licensor_contact: "<p>Rzucić aktor zmęczony przyszłość kilka narząd. Dostać zwłaszcza także jutro kolacja po prostu pojazd. Patrzeć pole pies 2 zgoda umiejętność.</p>"
            }
        })
    })
})
