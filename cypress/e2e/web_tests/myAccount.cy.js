import sideBarJsonData from '../../fixtures/sideBarJsonData.json'
import { MyAccount } from '../../pages/MyAccountPage';
const myAccountObj = new MyAccount()
//My Account's Header Section
describe("My Account's Header Section",()=>{
    beforeEach(()=>{
        cy.visit(sideBarJsonData.url)
        cy.login(sideBarJsonData.login.email , sideBarJsonData.login.password);
    })
    it("TC1- Verify MyAccount URL",()=>{
        cy.url().should('eq','https://consumer.staging.geotoll.com/myaccount')
        .and('contain','/myaccount')
    })
    it("TC2- Verify, Is QAFirstLast exist",()=>{
        myAccountObj.verifyQAFirstExistence()
    })
    it("TC3- Verify, Is QAFirstLast Clickable",()=>{
        myAccountObj.verifyQAFirstClickable()
    })
    it("TC4- Verify, Is QAFirstLast Clickable and Logging-out ",()=>{
        myAccountObj.verifyQAFirstClickableAndLogout()
    })

})


describe("Hamburger Menus",()=>{
    beforeEach(()=>{
        cy.visit(sideBarJsonData.url)
        cy.login(sideBarJsonData.login.email , sideBarJsonData.login.password);
    })

    it("TC1- Verify, Is Hamburger Menu Clickable",()=>{
        myAccountObj.verifyHamburgerMenu()
        cy.wait(1000)
        myAccountObj.verifyHamburgerMenu()
    })
    it("TC2- Verify- All Menus of Sidebar",()=>{
        myAccountObj.verifyAllMenuOfSidebar()
    })
    it("TC3- Verify- Is Home Menu Clickable?",()=>{
        myAccountObj.verifyHomeMenu()
    })
    it("TC4- Verify- Is My Vehicle Menu Clickable?",()=>{
        myAccountObj.verifyMyVehicleMenu()
    })
    it("TC5- Verify- Is My Contacts Menu Clickable?",()=>{
        myAccountObj.verifyMyContactsMenu()
    })
    it("TC6- Verify- Is My Statements Menu Clickable?",()=>{
        myAccountObj.verifyMyStatements()
    })
    it("TC7- Verify- Is My RUC Transactions Menu Clickable?",()=>{
        myAccountObj.verifyMyRUCTransactionsMenu()
    })
    it("TC8- Verify- Is My Cases Menu Clickable?",()=>{
        myAccountObj.verifyMyCases()
    })
    it("TC9- Verify- Is Customer Support Menu Clickable?",()=>{
        myAccountObj.verifyCustomerSupportMenu()
    })
    it("TC10- Verify- Is Customer Support Menu Clickable?",()=>{
        myAccountObj.verifyManageProfileMenu()
    })
    it("TC11- Verify- Is User able to Logout?",()=>{
        myAccountObj.verifyLogoutMenu()
    })    
})

describe("Setting Panel at Header Top Right Corner",()=>{
    beforeEach(()=>{
        cy.visit(sideBarJsonData.url)
        cy.login(sideBarJsonData.login.email , sideBarJsonData.login.password);
    })
    it("TC1- Verify, Is Setting Icon exist on Top Right Corner",()=>{
        myAccountObj.verifySettingIcon()
    })
    it("TC2- Verify, Is Setting Icon Clickable",()=>{
        myAccountObj.verifySettingIconClickable()
    })
    it("TC3- Verify, Dark theme Layout",()=>{
        myAccountObj.verifyDarkThemeLayout()
    })
    it("TC4- Verify, Light theme Layout",()=>{
        myAccountObj.verifyLightThemeLayout()
    })
    it("TC5- Verify, Dark theme Sidebar",()=>{
        myAccountObj.verifyDarkThemeSidebar()
    })
    it("TC6- Verify, Light theme Sidebar",()=>{
        myAccountObj.verifyLightThemeSidebar()
    })
    it("TC7- Verify, Color Theme",()=>{
        myAccountObj.verifyColorTheme()
    })
    it("TC8- Verify, RTL Layout",()=>{
        myAccountObj.verifyRTLLayout()
    })
})