import { AppPage } from './app.po';

describe('project-x App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should contains current year in the copyright', () => {
    page.navigateTo();
    expect(page.getCopyright()).toContain((new Date).getFullYear());
    expect(true).toBeTruthy();
  });
});
