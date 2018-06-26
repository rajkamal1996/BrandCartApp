import { StoreLocatorPage } from './app.po';

describe('store-locator App', function() {
  let page: StoreLocatorPage;

  beforeEach(() => {
    page = new StoreLocatorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
