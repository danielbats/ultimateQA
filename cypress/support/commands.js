import '@testing-library/cypress/add-commands';

Cypress.Commands.add("accessUltimate", () => {
	cy.visit("https://courses.ultimateqa.com/")
})
