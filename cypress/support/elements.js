
module.exports = {
    signIn:{
        createAccountLink: '.sign-in__sign-up > a:contains("Create a new account")',
        emailField: '#user\\[email\\]',
        passwordField: '#user\\[password\\]',
        signInButton: '.form__button-group > .button',

    },
    signUp:{
        firstNameField: "#user\\[first_name\\]",
        lastNameField: '#user\\[last_name\\]',
        passwordField: '#user\\[password\\]',
        emailField: '#user\\[email\\]',
        termsCheckbox: '#user\\[terms\\]',
        signUpButton: '.form__button-group > .button',
    },
    home:{
        username: '.dropdown__toggle-button',
        allCoursesSection: '.collections__content',
        signInLink: '.header__user-menu > ul > .header__nav-item > a'
    }
};