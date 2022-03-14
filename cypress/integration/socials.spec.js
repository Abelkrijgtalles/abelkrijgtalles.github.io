/// <reference types="cypress"/>

context("Socials", () => {
    beforeEach(() => {
        cy.visit("http://abelkrijgtalles.nl/socials")
    })

    it("should find all h1, h2, p and a and check if they contain text", () => {
        cy.get("h1").should("have.length.greaterThan", 0)
        cy.get("h2").should("have.length.greaterThan", 0)
        cy.get("p").should("have.length.greaterThan", 0)
        cy.get("a").should("have.length.greaterThan", 0)
    })
})