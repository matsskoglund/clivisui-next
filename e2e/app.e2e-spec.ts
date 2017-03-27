import { ClivisuiNextPage } from './app.po';

describe('clivisui-next App', () => {
  let page: ClivisuiNextPage;

  beforeEach(() => {
    page = new ClivisuiNextPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
