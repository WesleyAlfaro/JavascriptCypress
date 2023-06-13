import homeSaucePage from '../../pages/demos/homeSaucePage'
import inventoryPage from '../../pages/demos/inventoryPage'

describe('POM Implementation', () => {

    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/v1/index.html');
        homeSaucePage.verifyOnPage();
    });

    const testCases = [
        {description: 'should login to inventory page', username: 'standard_user', password: 'secret_sauce', message: 'Products', isInventory: true},
        {description: 'should display locked out message', username: 'locked_out_user', password: 'secret_sauce', message: 'Epic sadface: Sorry, this user has been locked out.'},
        {description: 'should display incorrect username', username: 'problem_userw', password: 'secret_sauce', message: 'Epic sadface: Username and password do not match any user in this service'},
        {description: 'should display incorrect password', username: 'problem_user', password: 'secret', message: 'Epic sadface: Username and password do not match any user in this service'}
    ];

    testCases.forEach(({description, username, password, message, isInventory}) => {
        it(description, () => {
            homeSaucePage.typeUsername(username)
            homeSaucePage.typePassword(password)
            homeSaucePage.clickLogin();

            if(isInventory) {
                inventoryPage.elements.titleSpan().should('have.text', message)
            } else {
                homeSaucePage.elements.errorMessage().should('have.text', message)
            }
        });
    });
});