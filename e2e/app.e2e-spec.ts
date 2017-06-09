import { PlazaSurSpaPage } from './app.po';

describe('plaza-sur-spa App', () => {
  let page: PlazaSurSpaPage;

  beforeEach(() => {
    page = new PlazaSurSpaPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
