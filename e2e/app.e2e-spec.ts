import { WBUIPage } from './app.po';

describe('wbui App', () => {
  let page: WBUIPage;

  beforeEach(() => {
    page = new WBUIPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
