var assert = require('assert');


describe('lifehack home page', function() {
    it('should have Site Top 728 x 90 ad', function () {
        browser
            .url('http://sunday.lifehack.org')
            .waitForVisible('#google_ads_iframe_/1040155/SiteTop728x90_0',5000);
        var res = browser.isVisible('#google_ads_iframe_/1040155/SiteTop728x90_0');
        assert.ok(res);
    });
});
