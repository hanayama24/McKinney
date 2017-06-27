import { McKinneyPage } from './app.po';

describe('mc-kinney App', () => {
  let page: McKinneyPage;

  beforeEach(() => {
    page = new McKinneyPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
