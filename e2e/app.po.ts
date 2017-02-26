import { browser, element, by } from 'protractor';

export class ProjectMPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root hero')).getText();
  }
}
