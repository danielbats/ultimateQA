import elements from '../support/elements.js';

class homePage {

	accessSignInPage(){
		cy.get(elements.home.signInLink).click()
	}

	validateUserLogged(){
		cy.get(elements.home.homeTitle).should('be.visible')
	}

	doLogout(){
		cy.get(elements.home.optionsButton).should('be.visible').click()
		cy.get(elements.home.logoutButton).click()
	}

	validateHomePage(){	
		cy.get(elements.home.allCoursesSection).should('be.visible')
	}

	validateLoggedUser(username){
		cy.get(elements.home.username).should('be.visible').and('contain',username)
	}
}

export default new homePage()