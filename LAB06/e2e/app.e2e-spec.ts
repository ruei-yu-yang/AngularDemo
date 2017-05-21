import { LAB06Page } from './app.po';

describe('lab06 App', () => {
  let page: LAB06Page;

  beforeEach(() => {
    page = new LAB06Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
