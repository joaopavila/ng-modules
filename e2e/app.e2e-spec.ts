import { NgaotPage } from './app.po';

describe('ngaot App', function() {
  let page: NgaotPage;

  beforeEach(() => {
    page = new NgaotPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
