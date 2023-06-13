describe('Intercept Demo', () => {
    const baseUrl = 'http://localhost:3000/';
  
    const validateTodoList = () => {
      cy.get('#todo-list li')
        .should('have.length', 2)
        .and('contain', 'test')
        .and('contain', 'data');
    };
  
    const validateMockedApiResponse = () => {
      cy.intercept('GET', '/todos', {
        fixture: 'intercept/interceptFixture.json',
      }).as('getTodos-Fixture');
  
      cy.visit(baseUrl);
  
      cy.get('#todo-list li')
        .should('have.length', 3)
        .and('contain', 'Cypress Assertions')
        .and('contain', 'Validation email to case')
        .and('contain', 'dummy');
    };

    const validateReadyTodoItem = () => {
        const stubExample = [{
            "title": "Mock API Response",
            "completed": true,
            "id": 1
        }]
        cy.intercept('GET', '/todos', {
            body: stubExample
        })
        cy.visit(baseUrl);

        cy.get('div label').should('have.css', 'text-decoration', 'line-through solid rgb(217, 217, 217)');
    }
  
    beforeEach(() => {
      cy.visit(baseUrl);
    });
  
    it('Initial validation', () => {
      validateTodoList();
    });
  
    it('Mocked API Response', () => {
      validateMockedApiResponse();
    });

    it('Mocker a ready todo item', () => {
        validateReadyTodoItem();
    });
  });