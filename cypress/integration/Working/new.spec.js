import { allTemplatesSite, licenseTemplatesSite, rdTemplatesSite } from "../../support/variables/templatesVariables"
import { correctUser, correctPass } from "../../support/variables/loginVariables"


context('PMDB: Template Basic tests', () => {
    beforeEach(() => {
        cy.loginUI(correctUser, correctPass, allTemplatesSite)
      })
      it('Should be possible to change number of displayed records', () => {
        cy.changeRowQ('50', 52)
        cy.changeRowQ('100', 97)
        cy.changeRowQ('25', 27)
        cy.changeRowQ('All', 97)
    })
      it('Should display only templates for currently selected subcategory', () => {
        cy.visit(licenseTemplatesSite)
        cy.changeRowQ('All', 53)
        cy.visit(rdTemplatesSite)
        cy.changeRowQ('All', 46)
    })
})