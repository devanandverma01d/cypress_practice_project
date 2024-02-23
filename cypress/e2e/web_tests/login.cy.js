import { Login } from "../../pages/LoginPage" 
import loginPageJsonData from '../../fixtures/loginPageJsonData.json'

const loginObj = new Login()

describe("Login Page- Header Section",()=>{
    beforeEach(()=>{
        cy.visit(loginPageJsonData.url)
    })
    it("TC-1 Verify URL",()=>{
        loginObj.verifyURL(loginPageJsonData.url)
    })
    it("TC-2 Verify Title",()=>{
        loginObj.verifyTitle(loginPageJsonData.title)
    })
    it("TC3- Verify Logo",()=>{
        loginObj.verifyLogo()
    })
    it("TC4- Verify- Is Logo clickable and Navigate to SignIn page?",()=>{
        loginObj.verifyLogoClickableAndNavigateToSignInPage(loginPageJsonData.url)
    })
    it("TC5- Verify FAQs-Menu",()=>{
        loginObj.verifyFAQMenu()
    })
    it("TC6- Verify Is FAQs-Menu Clickable?",()=>{
        loginObj.verifyFAQMenuClickable()
    })
    it("TC7 Verify and Click on General Questions",()=>{
        loginObj.verifyAndClickOnGeneralQuestions()
    })

    it("TC8- Verify Contact Us-Menu",()=>{
        loginObj.verifyContactUsMenu()
    })
    it("TC9- Verify- Is Contact Us Menu Clickable?",()=>{
        loginObj.verifyContactUsIsClickable()
    })
    it("TC10- Verify First Name input Field of Contact Us",()=>{
        loginObj.verifyContactUsIsClickable()
        loginObj.verifyFirstNameInputFieldOfContactUs(loginPageJsonData.first_name)
        cy.customWait()
    })
    it("TC11- Verify Last Name input Field of Contact Us",()=>{
        loginObj.verifyContactUsIsClickable()
        loginObj.verifyLastNameInputFieldOfContactUs(loginPageJsonData.last_name)
        cy.customWait()
    })
    it("TC12- Verify Email input Field of Contact Us",()=>{
        loginObj.verifyContactUsIsClickable()
        loginObj.verifyEmailInputFieldOfContactUs(loginPageJsonData.email)
        cy.customWait()
    })
    it("TC13- Verify Phone input Field of Contact Us",()=>{
        loginObj.verifyContactUsIsClickable()
        loginObj.verifyPhoneInputFieldOfContactUs(loginPageJsonData.phone)
        cy.customWait()
    })
    it("TC14- Verify Question/issue Textarea Field of Contact Us",()=>{
        loginObj.verifyContactUsIsClickable()
        loginObj.verifyQuestionInputFieldOfContactUs(loginPageJsonData.question)
        cy.customWait()       
    })
    it("TC15- Verify All Field of Contact Us",()=>{
        loginObj.verifyAllFieldsOfContactUs(
            loginPageJsonData.first_name,
            loginPageJsonData.last_name,
            loginPageJsonData.email,
            loginPageJsonData.phone,
            loginPageJsonData.question
        )
        cy.customWait()    
        loginObj.verifyResetButton() 
        cy.customWait() 
        loginObj.verifyAllFieldsOfContactUs(
            loginPageJsonData.first_name,
            loginPageJsonData.last_name,
            loginPageJsonData.email,
            loginPageJsonData.phone,
            loginPageJsonData.question
        )
        cy.customWait()
        loginObj.verifySubmitButton()
    })
    it("TC16- Sign In-Menu Test",()=>{   
        loginObj.verifySignInMenu()
    })
    it("TC17- SignIn Menu onClick Test",()=>{
        loginObj.verifySignInButtonOnClick()
    })

})
// Login Page Main Section
describe("Login Page- Main Section",()=>{
    beforeEach(()=>{
        cy.visit(loginPageJsonData.url)
    })
    it("TC1- Login with Valid Credentials",()=>{
        loginObj.verifyLoginWithCredentials(
            loginPageJsonData.email,
            loginPageJsonData.password,
            loginPageJsonData.my_account_url
        )
    })
    it("TC2- Login with Invalid Email",()=>{
        loginObj.verifyLoginWithInvalidEmail(
            loginPageJsonData.invalid_email,
            loginPageJsonData.password
        )
    })
    it("TC3- Login with Invalid Password",()=>{
        loginObj.verifyLoginWithInvalidPassword(
            loginPageJsonData.email,
            loginPageJsonData.invalid_password
        )
    })
    it("TC4- Login with Empty- Email and Password",()=>{
        loginObj.verifyLoginWithEmptyEmailPasswordInputField()
        cy.customWait()
        cy.log("All fields are required")
    })
    it("TC5- Verify Forget Password Button Existence",()=>{
        loginObj.verifyForgetPasswordButton()
    })
    it("TC6- Verify Forget Password",()=>{
        loginObj.verifyForgetPassword(loginPageJsonData.email_for_forget_password)
    })
    it("TC7-Verify Invite code",()=>{
        loginObj.verifyInviteCodeOnClick(
            loginPageJsonData.invite_code_email,
            loginPageJsonData.invite_code_password
        )
    })
})
//Login Page Footer Section
describe("Login Page- Footer Section", () => {
    beforeEach(() => {
        cy.visit(loginPageJsonData.url);
    });

    it("TC1- Verify Footer Title", () => {
        loginObj.verifyFooterTile(
            loginPageJsonData.footer_title,
            loginPageJsonData.terms_condition,
            loginPageJsonData.privacy_policy,
            loginPageJsonData.vol_agreement
        )
    });
    it("TC2- Verify Footer Logo and info",()=>{
        loginObj.verifyFooterLogoAndInfo()
    })
});
