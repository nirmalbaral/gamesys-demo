var pageElement = require("../helpers/pageElement"),
    Page = require("./page");

var loginPage = Object.create(Page, {
    username:       pageElement.pageElement("#field-username"),
    password:       pageElement.pageElement("#field-password"),
    loginMenu:      pageElement.pageElement("a[title=Login]"),
    loginButton:    pageElement.pageElement("button[type=submit]"),
    errorMessage:   pageElement.pageElement(".error-message > .output"),

    open: {
        value: function() {
            Page.open.call(this, "/");
        }
    },

    login: {
        value: function(username, password) {
            this.username.setValue(username);
            this.password.setValue(password);
            this.loginButton.click();
        }
    }

}); 

module.exports = loginPage;