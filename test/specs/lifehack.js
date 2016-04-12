var assert = require('assert');

describe('lifehack home page', function() {
    it('should have google ads iframe', function () {
        this.timeout(30000);
        browser
            .url('http://sunday.lifehack.org')
            .pause(1000);

        try {
            console.log('Try frame with id');
            console.log('before: ' + browser.isVisible('#google_ads_iframe_/1040155/SiteTop728x90_0'))
            browser
                .frame('google_ads_iframe_/1040155/SiteTop728x90_0')
            console.log('after: ' + browser.isVisible('#google_ads_iframe_/1040155/SiteTop728x90_0'))
        } catch (ex) {
            console.log(ex);
        }
        
    });
});
