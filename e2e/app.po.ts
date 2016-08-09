export class BaFirebaseDemoPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ba-firebase-demo-app h1')).getText();
  }
}
