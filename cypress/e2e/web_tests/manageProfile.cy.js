import { ManageProfile } from '../../pages/ManageProfilePage';
import manageProfileJsonData from "../../fixtures/manageProfileJsonData.json"

const manageProfileObj= new ManageProfile()

describe('DashBoard-Menu- Manage Profile',()=>{
    beforeEach(()=>{
        cy.visit(manageProfileJsonData.url)
        cy.login(manageProfileJsonData.login.email , manageProfileJsonData.login.password);
        cy.customWait()
        cy.navigateTo('Manage Profile')
    })
    it("TC1- Verify- URL of Manage Profile",()=>{
        manageProfileObj.verifyURL(manageProfileJsonData.manage_profile_url)
    })
    it("TC2- Verify- Title of Manage Profile",()=>{
        manageProfileObj.verfyTitle(manageProfileJsonData.title)
    })
    it('TC3-Verify- My Cases Menu in Sidebar',()=>{
        manageProfileObj.enterCurrentPassword(manageProfileJsonData.cPass)
        manageProfileObj.enterNewPassword(manageProfileJsonData.newPass)
        manageProfileObj.reEnterNewPassword(manageProfileJsonData.re_newPass)
    })
})

