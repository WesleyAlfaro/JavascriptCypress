Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});
describe('Variables y Aliases', () => {
    beforeEach(() => {
        cy.visit('https://demoqa.com/modal-dialogs')
    })

    it.skip('Funcionamiento de variables al retornar un valor', function () {
        
    });

    it('Closures and variables',  () => {
        cy.get('#showSmallModal').then($modalButton => {
            const smallModalText = $modalButton.text()
            $modalButton.trigger('click');

            cy.get('#example-modal-sizes-title-sm').contains(smallModalText, {matchCase: false})
        })
    });

    it('Aliases', function () {
        cy.get('#showSmallModal').invoke('text').as('InvokeText')
    });

    it('Share context', function () {
        cy.get('@InvokeText').then((text) => {
            cy.log(text);
        });
    });
});