import signUpPage from '../pages/signUpPage'
import signInPage from '../pages/signInPage'
import homePage from '../pages/homePage'

const faker = require('faker')
const email = faker.internet.email()

let name = 'Daniel'
let surname = 'Batista'

describe('Scenario: Create a new account', () => {

    beforeEach(() => {
        cy.accessUltimate()
        homePage.accessSignInPage()
    })

    it('Creating a valid user account', () => {
        signInPage.accessSignUpPage()
        signUpPage.fillOutNewAccountFields(name,surname,email,Cypress.env('password'))
        signUpPage.agreeWithTerms()
        signUpPage.signUp()
        homePage.validateHomePage()
        homePage.validateLoggedUser(name)

    })

    it('Login with valid credentials', () => {
        signInPage.fillOutValidUsernameAndPassword()
        signInPage.doLogin()
        homePage.validateHomePage()
        homePage.validateLoggedUser(name)
    })
    
})