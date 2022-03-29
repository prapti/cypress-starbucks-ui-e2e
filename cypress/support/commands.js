import '@testing-library/cypress/add-commands';
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

Cypress.Commands.add('visitSBWebsite', () => {
    cy.visit('https://www.starbucks.com/')
})

Cypress.Commands.add('uiGoToMenu', () => {
    cy.findByRole('navigation', {name: 'Global'}).should('be.visible').within(() => {
        cy.get('.sb-globalNav__desktopLink').contains('Menu').click()
    })
})

Cypress.Commands.add('uiClickHotDrinks', () => {
    // get hot drinks
    cy.get('#drinks').within(() => {
        cy.get('[data-e2e="Hot Coffees"]')
            .within(() => {
                cy.findByRole('link').click()
            })
    })
})

Cypress.Commands.add('uiPickALatte', (drinkPick) => {
    cy.get('#lattes').should('exist').scrollIntoView()
    cy.get('#lattes').within(() => {
        cy.get(`[data-e2e="${drinkPick}"]`).click()
    })
})

Cypress.Commands.add('uiAddToOrder', () => {
    cy.get('[data-e2e=add-to-order-button]').click()
})

Cypress.Commands.add('goToCart', () => {
    cy.visit('https://www.starbucks.com/menu/cart')
})