'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('ajs-demo App', function() {

  it('should redirect index.html to index.html#/home', function() {
    browser.get('app');
    browser.getLocationAbsUrl().then(function(url) {
        expect(url.split('#')[1]).toBe('/view1');
      });
  });

  it('should hava a title',function(){
    browser.get('app/index.html');
    expect(browser.getTitle()).toEqual('Angular Chat-Room App');
  })
});
