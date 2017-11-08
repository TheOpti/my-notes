import { MyNotesPage } from './app.po';

describe('my-notes App', () => {
  let page: MyNotesPage;

  beforeEach(() => {
    page = new MyNotesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
