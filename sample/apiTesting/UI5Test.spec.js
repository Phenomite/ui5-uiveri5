/*global request*/
describe('UI5Test', function() {
  it('Step 1 - Should check page title', function() {
    expect(element(by.id('page1-title')).getText()).toBe('Hello World');
  });

  it('Step 2 - Should go to second page', function() {
    element(by.id('__button0')).click();
    expect(element(by.id('page2-title')).getText()).toBe('Hello Page 2');
  });

  it('Step 3 - Should make api call and check response body', function() {
    request.get(browser.testrunner.config.params.apiURL+ '/HelloWorldServlet').do()
      .catch(function(responseError) {
        expect(responseError.status).toBe(401);
        expect(responseError.message).toBe('Unauthorized');
      });
  });

  it('Step 4 - Should make api call with auth and check response body', function() {
    var res = request.get(browser.testrunner.config.params.apiURL + '/HelloWorldServlet')
      .auth(browser.testrunner.config.params.user, browser.testrunner.config.params.pass).do();
    expect(res).toHaveHTTPBody({'user':'Hello, ' + browser.testrunner.config.params.user });
  });
});
