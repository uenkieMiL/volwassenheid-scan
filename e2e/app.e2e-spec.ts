import { VolwassenheidScanPage } from './app.po';

describe('volwassenheid-scan App', function() {
  let page: VolwassenheidScanPage;

  beforeEach(() => {
    page = new VolwassenheidScanPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
