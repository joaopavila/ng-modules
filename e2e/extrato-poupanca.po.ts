import { browser, element, by } from 'protractor';

export class ExtratoPoupancaPage {
  navigateTo() {
    return browser.get('/extrato-poupanca');
  }

  getExtratoListLengt() {
    return element.all(by.css('app-extrato-poupanca ul li')).count();
  }
}
