Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

describe('Assertions Demo', function () {

    beforeEach(() => {
        cy.visit('https://demoqa.com/radio-button')
    })

    it('TDD Assertions', function () {
        cy.get('input[type="radio"]').should('have.length', 3)
        cy.get('input[type="radio"]').eq(2).should('have.class', 'disabled')
        cy.get('.mt-3').should('not.exist')
        cy.get('input[type="radio"]').eq(0).click({force: true})
        cy.get('.mt-3').should('contain.text', 'You have selected Yes')
            .and('include.text', 'Yes')
            .and('not.contain', 'NO')
        cy.get('.text-success').should('have.css', 'color', 'rgb(40, 167, 69)')

    });

    it.only('BDD Assertions', function () {
        cy.get('input[type="radio"]').should($inputs => {
            expect($inputs).to.have.lengthOf(3)
            expect($inputs[2]).to.have.class('disabled')
        })
        cy.get('input[type="radio"]').eq(1).click({force: true});
        cy.get('.mt-3').should($element => {
            expect($element).to.have.text('You have selected Impressive')
            expect($element).to.include.text('Impressive')
            expect($element).to.not.include.text('NO')
        })
    });
});