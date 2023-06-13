/// <reference types="Cypress" />
class inventoryPage{
    elements = {
        titleSpan: () => cy.get('.product_label')
    }
}

export default new inventoryPage();