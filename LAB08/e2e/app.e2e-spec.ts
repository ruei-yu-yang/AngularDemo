import { LAB08Page } from './app.po';

describe('lab08 App', () => {
  let page: LAB08Page;

  beforeEach(() => {
    page = new LAB08Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
