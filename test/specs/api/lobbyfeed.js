var lobbyfeedPage = require('../../pageobjects/lobbyfeed.page');

describe("Virgin Games - Bingo Back End Automation", function () {

    it("validate 'defaultGameFrequency' should always be '300000' or 'startTime' should always be future timestamp", function (done) {
        lobbyfeedPage.open();
        lobbyfeedPage.wordWrap.waitForVisible();

        expect(lobbyfeedPage.parseToJson()).to.have.a.property('bingoLobbyInfoResource');
        expect(lobbyfeedPage.checkDefaultGameFrequencyOrstartTime()).to.be.true;
    });
});
