import { SuperDuperAppPage } from './app.po';

describe('super-duper-app App', () => {
  let page: SuperDuperAppPage;

  beforeEach(() => {
    page = new SuperDuperAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
