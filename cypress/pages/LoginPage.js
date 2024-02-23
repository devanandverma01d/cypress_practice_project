import {webLocatorsloginPage} from '../locators/loginPageLocators'
import loginPageJsonData from '../fixtures/loginPageJsonData.json'
export class Login{

    // Verify URL and Title.
    verifyURL(url){
        cy.url().should('eq',url)
        .and('include',"home/signin")
        cy.customWait()
    }
    verifyTitle(title){
        cy.title().should('eq',title)
        .and('include',"GeoToll")
        cy.customWait()
    }

    // Header Section's Methods and actions.
    verifyLogo(){
        cy.get(webLocatorsloginPage.logo).should("exist")
    }
    verifyLogoClickableAndNavigateToSignInPage(url){
        cy.get(webLocatorsloginPage.logo).click()
        cy.customWait()
        cy.url().should('eq',url)
    }
    verifyFAQMenu(){
        cy.get(webLocatorsloginPage.menus).should(($labels) => {
            const labelTexts = $labels.map((index, label) => Cypress.$(label).text()).get();
            expect(labelTexts).to.include('FAQs');
        });
    }
    verifyFAQMenuClickable(){
        cy.contains(webLocatorsloginPage.menus, 'FAQs').click();
    }
    verifyAndClickOnGeneralQuestions(){
        cy.contains(webLocatorsloginPage.menus, 'FAQs').click();
        cy.get(webLocatorsloginPage.charge_program).click()
        cy.customWait()
        cy.get(webLocatorsloginPage.charge_program).click()
        cy.get(webLocatorsloginPage.fee_program).click()
        cy.customWait()
        cy.get(webLocatorsloginPage.fee_program).click()
        cy.get(webLocatorsloginPage.volunteer).click()
        cy.customWait()
        cy.get(webLocatorsloginPage.volunteer).click()
        cy.get(webLocatorsloginPage.register).click()
        cy.customWait()
        cy.get(webLocatorsloginPage.register).click()
        cy.get(webLocatorsloginPage.participation).click()
        cy.customWait()
        cy.get(webLocatorsloginPage.participation).click()
        cy.get(webLocatorsloginPage.account).click()
        cy.customWait()
        cy.get(webLocatorsloginPage.account).click()
        cy.get(webLocatorsloginPage.vin).click()
        cy.customWait()
        cy.get(webLocatorsloginPage.vin).click()
        cy.get(webLocatorsloginPage.data_protected).click()
        cy.customWait()
        cy.get(webLocatorsloginPage.data_protected).click()
    }
    verifyContactUsMenu(){
        cy.get(webLocatorsloginPage.menus).should(($labels) => {
            const labelTexts = $labels.map((index, label) => Cypress.$(label).text()).get();
            expect(labelTexts).to.include('Contact Us');
        });
    }

    verifyContactUsIsClickable() {
        cy.contains(webLocatorsloginPage.menus, 'Contact Us').click();
    }
    verifyFirstNameInputFieldOfContactUs(first_name){
        cy.get(webLocatorsloginPage.gn_first_name).type(first_name)

    }
    verifyLastNameInputFieldOfContactUs(last_name){
        cy.get(webLocatorsloginPage.gn_last_name).type(last_name)
    }
    verifyEmailInputFieldOfContactUs(email){
        cy.get(webLocatorsloginPage.gn_email).type(email)
    }
    verifyPhoneInputFieldOfContactUs(phone){
        cy.get(webLocatorsloginPage.gn_phone).type(phone)
    }
    verifyQuestionInputFieldOfContactUs(question){
        cy.get(webLocatorsloginPage.gn_questions).type(question)
    }
    verifyAllFieldsOfContactUs(first_name,last_name,email,phone,question){
        cy.contains(webLocatorsloginPage.menus, 'Contact Us').click();
        cy.get(webLocatorsloginPage.gn_first_name).type(first_name)
        cy.get(webLocatorsloginPage.gn_last_name).type(last_name)
        cy.get(webLocatorsloginPage.gn_email).type(email)
        cy.get(webLocatorsloginPage.gn_phone).type(phone)
        cy.get(webLocatorsloginPage.gn_questions).type(question)
    }
    verifyResetButton(){
        cy.get(webLocatorsloginPage.reset_button).click()
    }
    verifySubmitButton(){
        cy.get(webLocatorsloginPage.submit_button).click()
    }
    verifySignInMenu(){
        cy.get(webLocatorsloginPage.menus).should(($labels) => {
            const labelTexts = $labels.map((index, label) => Cypress.$(label).text()).get();
            expect(labelTexts).to.include('Sign In');
        });
    }

    // Main Section's Methods and actions.
    verifySignInButtonOnClick() {
        cy.contains(webLocatorsloginPage.menus, 'Sign In').click();
    }

    verifyLoginWithCredentials(email, password, my_account_url) {
    if (email === loginPageJsonData.email && password === loginPageJsonData.password) {
        // If valid credentials, wait for navigation and check URL
        cy.get(webLocatorsloginPage.email).type(email);
        cy.get(webLocatorsloginPage.password).type(password);
        cy.get(webLocatorsloginPage.login_button).click();
        cy.customWait();
        cy.url().should('eq', my_account_url);
    } else {
        // If invalid credentials, check for error message
        cy.get('.alert.alert-danger.mt-1.ng-star-inserted').should('be.visible');
    }
    }
    verifyLoginWithInvalidEmail(invalid_email,password){
        cy.get(webLocatorsloginPage.email).type(invalid_email)
        cy.get(webLocatorsloginPage.password).type(password)
        cy.get(webLocatorsloginPage.login_button).click()
        cy.customWait()
        cy.get(webLocatorsloginPage.invalid_email_message).should('have.text','Invalid Email or password')  // get error message while enter wrong email
    }
    verifyLoginWithInvalidPassword(email,invalid_password){
        cy.get(webLocatorsloginPage.email).type(email)
        cy.get(webLocatorsloginPage.password).type(invalid_password)
        cy.get(webLocatorsloginPage.login_button).click()
        cy.customWait()
        cy.get(webLocatorsloginPage.invalid_password_message).should('have.text','Invalid Email or Password')  // get error message while enter wrong password
    }
    verifyLoginWithEmptyEmailPasswordInputField() {
        cy.get(webLocatorsloginPage.email).click()
        cy.get(webLocatorsloginPage.password).click()
        cy.get(webLocatorsloginPage.login_button).click({ force: true });
        cy.customWait()
        cy.get(webLocatorsloginPage.empty_email, { timeout: 10000 }).should('be.visible')
        .and('have.text', ' Email is required ');
        cy.get(webLocatorsloginPage.empty_password, { timeout: 10000 }).should('be.visible')
        .and('have.text', ' Password is required ');
    }
    verifyForgetPasswordButton(){
        cy.get(webLocatorsloginPage.forget_password_button).should('exist')
    }
    verifyForgetPassword(email){
        cy.get(webLocatorsloginPage.forget_password_button).click()
        cy.get(webLocatorsloginPage.forget_password_email).type(email)
        cy.get(webLocatorsloginPage.forget_password_submit_button).click()
        cy.customWait()
    }
    verifyInviteCodeOnClick(invite_code_email,invite_code_password){
        cy.get(webLocatorsloginPage.invite_code_button).click() //Click on invite code button
        cy.get(webLocatorsloginPage.invite_code_email).type(invite_code_email) // Enter Email
        cy.get(webLocatorsloginPage.invite_code_code).type(invite_code_password) // Enter invite code
        cy.get(webLocatorsloginPage.invite_code_inside_button).click() //Click on submit button
        cy.customWait()
        cy.get(webLocatorsloginPage.non_integer_invite_code_message).should('have.text','The Invite Code must be an integer. ') // get error when inter non-integer invite_code
        cy.customWait()
        cy.get(webLocatorsloginPage.invite_code_code).clear();  // Reset the invite code input field
        cy.get(webLocatorsloginPage.invite_code_code).type("123456"); // Enter wrong invite code.
        cy.get(webLocatorsloginPage.invite_code_inside_button).click() //Again click on submit button
        cy.customWait()
        cy.get(webLocatorsloginPage.wrong_invite_code_message).should("have.text",'Invalid Inputs or Validation Code')  // get error when invalid invite_code
    }

// Footer Section' Methods and actions.
    verifyFooterTile(footer_title,terms_condition,privacy_policy,vol_agreement){
        cy.get(webLocatorsloginPage.footer_title).should('have.text', footer_title);
        cy.get(webLocatorsloginPage.footer_terms_condition).should('have.text', terms_condition);
        cy.get(webLocatorsloginPage.footer_privacy_policy).should('contain.text', privacy_policy);
        cy.get(webLocatorsloginPage.footer_volunteer_agreement).should('contain.text', vol_agreement);
    }
    verifyFooterLogoAndInfo(){
        cy.get(webLocatorsloginPage.footer_logo_info).should("exist")
    }
}