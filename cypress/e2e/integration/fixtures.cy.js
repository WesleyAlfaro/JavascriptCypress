describe('Fixtures demo', () => {
    beforeEach(() => {
        cy.get('https://www.saucedemo.com/v1/index.html');

        cy.fixture('fixtures')
    });
});