var pageElement = require("../helpers/pageElement"),
    Page = require("./page"),
    stream, expectation;

var lobbyfeedPage = Object.create(Page, {
    wordWrap:       pageElement.pageElement('body pre'),

    open: {
        value: function() {
            Page.open.call(this, "/bingo/GetBingoLobbyFeed.do");
        }
    },

    checkDefaultGameFrequencyOrstartTime: {
        value: function() {
            stream = this.parseToJson().bingoLobbyInfoResource.streams;
            for (var i=0; i<stream.length; i++) {
                expectation =  (stream[i].startTime > Date.now() && stream[i].defaultGameFrequency === 300000)  ? true : false;
            }
            return expectation;
        }
    },

    parseToJson: {
        value: function() {
            return JSON.parse(this.wordWrap.getText());
        }
    }

}); 

module.exports = lobbyfeedPage;
