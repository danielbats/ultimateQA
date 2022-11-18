
import elements from '../support/elements.js';

class signUpPage {

	fillOutNewAccountFields(firstName,lastName,email,pass){
        cy.get(elements.signUp.firstNameField).clear().type(firstName)
        cy.get(elements.signUp.lastNameField).clear().type(lastName)
        cy.get(elements.signUp.emailField).clear().type(email)
        cy.get(elements.signUp.passwordField).clear().type(pass)
	}

    agreeWithTerms(){
        cy.get(elements.signUp.termsCheckbox).click()
    }

    signUp(){
        cy.get(elements.signUp.signUpButton).click()
    }
}

export default new signUpPage()