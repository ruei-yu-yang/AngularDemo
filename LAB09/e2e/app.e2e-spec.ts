import { LAB09Page } from './app.po';

describe('lab09 App', () => {
  let page: LAB09Page;

  beforeEach(() => {
    page = new LAB09Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
