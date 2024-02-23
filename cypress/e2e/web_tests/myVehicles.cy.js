import { MyVehiclesPage } from '../../pages/MyVehiclePage'
import myVehicleJsonData from '../../fixtures/myVehicleJsonData.json'

const myVehilcesObj = new MyVehiclesPage()
describe("DashBoard-Menu- My Vehicles",()=>{
    beforeEach(()=>{
        cy.visit(myVehicleJsonData.url)
        cy.contains(".mdc-button__label", 'Sign In').click();
        cy.login(myVehicleJsonData.login.email , myVehicleJsonData.login.password)
        cy.navigateTo('My Vehicles');
    })
    
    it('TC1- Verify- URL of My Vehicles  ',()=>{
        myVehilcesObj.verifyURL(myVehicleJsonData.vehicle_route)
        cy.customWait()
    })
    it('TC2- Verify- Title of My Vehicles  ',()=>{
        myVehilcesObj.verfyTitle(myVehicleJsonData.title)
        cy.customWait()
    })
    it('TC3- Verify- All Columns of My Vehicles  ',()=>{
        myVehilcesObj.verifyQADODGE(myVehicleJsonData.qa_dodge)
        myVehilcesObj.verifyGEOTOLL(myVehicleJsonData.geotoll)
        myVehilcesObj.verifyAvailable(myVehicleJsonData.available)
        myVehilcesObj.verifyPending(myVehicleJsonData.pending)
        myVehilcesObj.verifySmartApp(myVehicleJsonData.smartapp)
        cy.customWait()
    })
    it('TC4- Verify- My Vehicles, Search using Vehicle Id',()=>{
        myVehilcesObj.verifySearch(myVehicleJsonData.vehiclesId)
        cy.customWait()
    })
    it('TC5- Verify-Sorting Table of Vehicle',()=>{
        myVehilcesObj.verifySortingTable()
        cy.customWait()
    })
    it('TC6- Verify- My Vehicles Pagination',()=>{
        myVehilcesObj.verifypagination(
            myVehicleJsonData.pagination_0,
            myVehicleJsonData.pagination_1,
            myVehicleJsonData.pagination_2,
            myVehicleJsonData.pagination_3,
        )
        cy.customWait()  
    })
    it('TC7- Verify- My Vehicles Pagination',()=>{
        cy.get("input[placeholder='Search']").type("998100145")
        cy.get("input[placeholder='Search']").should('have.value','998100145')
        cy.customWait()
    })

    
})