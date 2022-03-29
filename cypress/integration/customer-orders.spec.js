describe('Customer', () => {
    beforeEach(() => {
        // load the starbucks page
        cy.visitSBWebsite()
        // cy.getCookies()
        
    })

    it.only('can add a new item to their cart', () => {
        // go to menu
        cy.uiGoToMenu()

        // click 'hot drinks'
        cy.uiClickHotDrinks()

        // pick Caffe Latte
        cy.uiPickALatte("Caffè Latte")

        // add to order
        cy.uiAddToOrder()
    })

    it('can remove an item from their cart', () => {
        // cy.reload()
    })

    after(() => {
        
    })
})
