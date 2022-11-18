import elements from '../support/elements.js';

class signInPage {

	accessSignUpPage(){
		cy.get(elements.signIn.createAccountLink).click()
	}

	fillOutValidUsernameAndPassword() {
		cy.get(elements.signIn.emailField).clear().type(Cypress.env('username'))
		cy.get(elements.signIn.passwordField).clear().type(Cypress.env('password'))
	}

	doLogin() {
		cy.get(elements.signIn.signInButton).click()
	}

}

export default new signInPage()