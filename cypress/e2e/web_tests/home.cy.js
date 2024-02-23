import sideBarJsonData from '../../fixtures/sideBarJsonData.json'
import { Home } from '../../pages/HomePage'

const homeObj = new Home()


describe("DashBoard-Menu- Home",()=>{
    beforeEach(()=>{
        cy.visit(sideBarJsonData.url)
        homeObj.verifySignInButton()
        cy.login(sideBarJsonData.login.email , sideBarJsonData.login.password)
        cy.customWait()
        cy.navigateTo('Home');
    })
    it('TC1- Verify- URL of Home',()=>{
        homeObj.verifyHomeURL()
        cy.customWait()
    })
    it('TC2- Verify- Title of Home',()=>{
        homeObj.verifyHomeTitle()
        cy.customWait()
    })
    it('TC3- Verify- Consumer Info',()=>{
        homeObj.verifyConsumerInfo()
        cy.customWait()
    })
    it('TC4- Verify- Communication Info',()=>{
        homeObj.verifyCommunicationInfo()
        cy.customWait()
    })
    
})