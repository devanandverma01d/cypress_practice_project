import { MyContactsPage } from '../../pages/MyContactsPage'
import myContactJsonData from '../../fixtures/myContactJsonData.json'

const myContactObj = new MyContactsPage()


describe("DashBoard-Menu- My Contacts",()=>{
    beforeEach(()=>{
        cy.visit(myContactJsonData.url)
        cy.login(myContactJsonData.login.email , myContactJsonData.login.password)
        cy.navigateTo('My Contacts');
    })
    it('TC1- Verify all Columns of Search Home',()=>{
        myContactObj.verifyAllColoumnsofHomeSearch(
            myContactJsonData.c_id,
            myContactJsonData.f_name,
            myContactJsonData.l_name,  
            myContactJsonData.email,
            myContactJsonData.role,
            myContactJsonData.pin,
            myContactJsonData.p_phone,
            myContactJsonData.status,
            myContactJsonData.d_created,
            myContactJsonData.action,
        )
    })
    it("TC2- Verify Search and Filter at Search Home",()=>{
        myContactObj.verifySearchAndFilterAtHomeSearch()
    })

    it("TC3- Verify Pagination Dropdown at Search Home",()=>{
        myContactObj.verifyPaginationDropdown(
            myContactJsonData.pagination_10,
            myContactJsonData.pagination_25,
            myContactJsonData.pagination_50,
            myContactJsonData.pagination_100,
        )
    })

    it("TC4- Verify Action at Search Home",()=>{
        myContactObj.verifyActionAtSearchHome()        
    })

    it("TC5- Verify action button in Contact Address",()=>{
        myContactObj.verifyActionAtContactAddresses()
    })

    it('TC5- Verify- My Contacts',()=>{
        myContactObj.verifyURL(myContactJsonData.contact_url)
        myContactObj.verfyTitle(myContactJsonData.title)
        myContactObj.clickAddContactButton()
        myContactObj.enterSelectContact()
        myContactObj.enterAddressType()
        myContactObj.enterAddressOne(myContactJsonData.address1)
        myContactObj.enterAddressTwo(myContactJsonData.address2)
        myContactObj.enterCityName(myContactJsonData.city)
        myContactObj.enterStateName()
        myContactObj.enterZipCode(myContactJsonData.zip)
        myContactObj.selectCheckBox()
        myContactObj.clickAddAddress()
    })
})