
var loginPage = require('../../pageobjects/login.page');


describe('virgingames.com Front End Automation', function () {

    it('should display virgingames.com home page', function () {
        loginPage.open();
        loginPage.loginMenu.waitForVisible();

        expect(loginPage.loginMenu.getText()).to.equal('Login');
    });

    it('should deny access with incorrect credential', function () {
        loginPage.loginMenu.click();
        loginPage.login('foo', 'bar');
        loginPage.errorMessage.waitForVisible();

        expect(loginPage.errorMessage.getText()).to.contain('Your password must be 6 to 16 characters long');
    });

});
