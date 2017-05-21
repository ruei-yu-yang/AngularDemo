import { LAB07Page } from './app.po';

describe('lab07 App', () => {
  let page: LAB07Page;

  beforeEach(() => {
    page = new LAB07Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
