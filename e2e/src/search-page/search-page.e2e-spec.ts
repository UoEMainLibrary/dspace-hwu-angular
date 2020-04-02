import { ProtractorPage } from './search-page.po';
import { browser } from 'protractor';
import { promise } from 'selenium-webdriver';

describe('protractor SearchPage', () => {
  let page: ProtractorPage;

  beforeEach(() => {
    page = new ProtractorPage();
  });

  it('should contain query value when navigating to page with query parameter', () => {
    const queryString = 'Interesting query string';
    page.navigateToSearchWithQueryParameter(queryString)
      .then(() => page.getCurrentQuery())
      .then((query: string) => {
        expect<string>(query).toEqual(queryString);
      });
  });

  it('should have right scope selected when navigating to page with scope parameter', () => {
    page.navigateToSearch()
      .then(() => page.getRandomScopeOption())
      .then((scopeString: string) => {
        page.navigateToSearchWithScopeParameter(scopeString)
          .then(() => page.getCurrentScope())
          .then((s: string) => {
            expect<string>(s).toEqual(scopeString);
          })
      });
  });

  it('should redirect to the correct url when scope was set and submit button was triggered', () => {
    page.navigateToSearch()
      .then(() => page.getRandomScopeOption())
      .then((scopeString: string) => {
        page.setCurrentScope(scopeString)
          .then(() => page.submitSearchForm())
          .then(() => () => {
            browser.wait(() => {
              return browser.getCurrentUrl().then((url: string) => {
                return url.indexOf('scope=' + encodeURI(scopeString)) !== -1;
              })
            })
          })
      });
  });

  it('should redirect to the correct url when query was set and submit button was triggered', () => {
    const queryString = 'Another interesting query string';
    page.setCurrentQuery(queryString);
    page.submitSearchForm();
    browser.wait(() => {
      return browser.getCurrentUrl().then((url: string) => {
        return url.indexOf('query=' + encodeURI(queryString)) !== -1;
      });
    });
  });
});
