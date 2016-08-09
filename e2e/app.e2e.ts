import { BaFirebaseDemoPage } from './app.po';

describe('ba-firebase-demo App', function() {
  let page: BaFirebaseDemoPage;

  beforeEach(() => {
    page = new BaFirebaseDemoPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('ba-firebase-demo works!');
  });
});
