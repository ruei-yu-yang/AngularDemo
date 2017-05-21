import { LAB05Page } from './app.po';

describe('lab05 App', () => {
  let page: LAB05Page;

  beforeEach(() => {
    page = new LAB05Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
