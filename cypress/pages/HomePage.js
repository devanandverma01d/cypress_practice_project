import {webLocatorsHomePage} from '../locators/homePageLocators'
import homePageJsonData from '../fixtures/homePageJsonData.json'


export class Home{
    verifySignInButton(){
        cy.contains(webLocatorsHomePage.sign_in_menu, webLocatorsHomePage.sign_in_val).click();
    }
    verifyHomeURL(){
        cy.url().should('eq',homePageJsonData.url)
    }
    verifyHomeTitle(){
        cy.title().should('eq',homePageJsonData.title)
    }
    verifyConsumerInfo(){
        cy.get(webLocatorsHomePage.consumer_uuid).should('exist')
        cy.get(webLocatorsHomePage.consumer_id).should('exist')
        cy.get(webLocatorsHomePage.status).should('exist')
        cy.get(webLocatorsHomePage.created_at).should('exist')
        cy.get(webLocatorsHomePage.last_updated).should('exist')
        cy.get(webLocatorsHomePage.time_zone).should('exist')
    }
    verifyCommunicationInfo(){
        cy.get(webLocatorsHomePage.email).should('exist')
        cy.get(webLocatorsHomePage.phone).should('exist')
        cy.get(webLocatorsHomePage.address_1).should('exist')
        cy.get(webLocatorsHomePage.address_2).should('exist')
        cy.get(webLocatorsHomePage.city_state_zip).should('exist')
        cy.get(webLocatorsHomePage.preferred_communication).should('exist')
    }
}