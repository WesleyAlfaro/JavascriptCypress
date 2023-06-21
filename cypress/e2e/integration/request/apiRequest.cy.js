const endPoint = 'http://localhost:3000/todos'

const todoObject = {
    "title": "NewTodoObjectFromPost",
    "completed": false,
    "id": "3"
}

const patchObject = {
    "title": "NewTodoObjectFromPost",
    "completed": true,
    "id": "3"
}

const addTodo = todoObject => {
    cy.request('POST', endPoint, todoObject)
}

const updateTodo = patchObject => {
    cy.request('PATCH', `${endPoint}/${patchObject.id}`, patchObject)
}

const deleteTodo = deleteObject => {
    cy.request('DELETE', `${endPoint}/${deleteObject.id}`)
}

describe('API testing demo', () => {
    it('should add a todo', () => {
        addTodo(todoObject)

        cy.request('GET', `${endPoint}/${todoObject.id}`)
            .its('body')
            .should('deep.eq', todoObject)
    });

    it('should update todo', function () {
        updateTodo(patchObject)

        cy.request('GET', `${endPoint}/${todoObject.id}`)
            .its('body')
            .should('deep.eq', patchObject)
    });

    it('should deleted a todo', function () {
        deleteTodo(patchObject)

        cy.request('GET', endPoint)
            .its('body')
            .should('have.length', 2)
    });
});