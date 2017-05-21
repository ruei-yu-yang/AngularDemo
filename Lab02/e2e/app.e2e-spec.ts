import { Lab02Page } from './app.po';

describe('lab02 App', () => {
  let page: Lab02Page;

  beforeEach(() => {
    page = new Lab02Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
