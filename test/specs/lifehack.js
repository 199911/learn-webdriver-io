var assert = require('assert');

browser.addCommand("scrollToBottom", function (customVar) {
    var height = this.getViewportSize('height');
    return this.execute(
        function(height){
            var x = window.scrollX;
            var y = window.scrollY;
            do {
                y += height;
                window.scrollTo(x, y)
            } while(y === window.scrollY);
            return window.scrollY;
        },
        height
    );
});

describe('lifehack home page', function() {
    this.timeout(60000);
    it('should have SiteTop728x90_0 ad', function () {
        browser.url('http://sunday.lifehack.org');
        browser.waitForVisible('#google_ads_iframe_/1040155/SiteTop728x90_0',5000);
        assert.ok(
            browser.isVisible('#google_ads_iframe_/1040155/SiteTop728x90_0')
        );
    });
    it('should have Lifehack_Feed_300x250 ads', function () {
        // first ad
        browser.scrollToBottom();
        browser.waitForVisible('#google_ads_iframe_/1040155/Lifehack_Feed_300x250_0',5000);
        assert.ok(
            browser.isVisible('#google_ads_iframe_/1040155/Lifehack_Feed_300x250_0')
        );
        // second ad
        browser.scrollToBottom();
        browser.waitForVisible('#google_ads_iframe_/1040155/Lifehack_Feed_300x250_1',5000);
        assert.ok(
            browser.isVisible('#google_ads_iframe_/1040155/Lifehack_Feed_300x250_1')
        );
        // third ad
        browser.scrollToBottom();
        browser.waitForVisible('#google_ads_iframe_/1040155/Lifehack_Feed_300x250_2',5000);
        assert.ok(
            browser.isVisible('#google_ads_iframe_/1040155/Lifehack_Feed_300x250_2')
        );
    });
});
