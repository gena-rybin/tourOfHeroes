import { ProjectMPage } from './app.po';

describe('project-m App', function() {
  let page: ProjectMPage;

  beforeEach(() => {
    page = new ProjectMPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
