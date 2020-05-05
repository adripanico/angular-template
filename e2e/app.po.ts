import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getCopyright() {
    return element(by.css('.copyright')).getText();
  }
}
