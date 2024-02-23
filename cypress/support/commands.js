// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


/// <reference types="Cypress" />
/// <reference types="cypress-xpath" />


//This is Login Command
Cypress.Commands.add('login', (email, password) => {
    cy.visit('')
    cy.get('#mat-input-0').type(email);  // Enter Email
    cy.get('#mat-input-1').type(password);  // Enter Password
    cy.get("button[type='submit'] span[class='mdc-button__label']").click();  // Click on login button
  });
//This is Sidebar Menus Command
Cypress.Commands.add('navigateTo', (menu) => {
  cy.get('.material-icons-outlined').click({ force: true });  // Click on Hamburger menu
  cy.xpath(`//span[normalize-space()='${menu}']`).click({force:true});  // Click on specified menu
  cy.wait(2000);
});

//This is Custom Wait Command.
Cypress.Commands.add('customWait', () => {
  cy.wait(3000);
});