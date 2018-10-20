function Page () {
    this.title = 'Welcome';
    this.env = process.env.SERVER;
}

Page.prototype.open = function (path) {
    browser.url(path);
};



module.exports = new Page();