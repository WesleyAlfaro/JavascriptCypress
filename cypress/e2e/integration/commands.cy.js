
describe('Commands example', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/v1/index.html');
    });
    
    it('Success login test', () => {
        cy.TypeLogin('standard_user', 'secret_sauce')
        cy.get('.product_label').should('contain.text', 'Products');
        cy.LogOut();
        cy.url().should('eq', 'https://www.saucedemo.com/v1/index.html')
    });

    it('Failde login test', () => {
        cy.TypeLogin('standard_user', 'dummy')
        cy.get("[data-test='error']").should('contain.text','Epic sadface: Username and password do not match any user in this service');
    });
});