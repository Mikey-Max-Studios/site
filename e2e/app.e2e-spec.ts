import { MikeyMaxStudiosPage } from './app.po';

describe('mikey-max-studios App', function() {
  let page: MikeyMaxStudiosPage;

  beforeEach(() => {
    page = new MikeyMaxStudiosPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
