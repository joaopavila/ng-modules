import { ExtratoPoupancaPage } from './extrato-poupanca.po';

describe('Extrato Poupanca', function() {
  let page: ExtratoPoupancaPage;

  beforeEach(() => {
    page = new ExtratoPoupancaPage();
  });

  fit('should display extrato', () => {
    page.navigateTo();
    expect(page.getExtratoListLengt()).toBe(3);
  });
});
