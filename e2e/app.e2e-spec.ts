import { LabObservablesPage } from './app.po';

describe('lab-observables App', () => {
  let page: LabObservablesPage;

  beforeEach(() => {
    page = new LabObservablesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
