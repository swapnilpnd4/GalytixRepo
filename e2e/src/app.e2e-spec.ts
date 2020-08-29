import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('TC_001: Verify that user is at Browse Jobs page', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('BROWSE JOBS');
  });

  it('TC_002: Verify all the six jobs link are available on the browse jobs page', () => {

    expect(page.getJobLinkText_SrSoftwareDevGurgaon()).toEqual('Sr. Software Developer');
    expect(page.getJobLinkText_SrSoftwareDevLondon()).toEqual('Sr. Software Developer');

    expect(page.getJobLinkText_TestingEngGurgaon()).toEqual('Testing Engineer');
    expect(page.getJobLinkText_TestingEngLondon()).toEqual('Testing Engineer');

    expect(page.getJobLinkText_SrWebDesignerGurgaon()).toEqual('Sr. Web Designer');
    expect(page.getJobLinkText_SrWebDesignerLondon()).toEqual('Sr. Web Designer');
  });

  it('TC_003: Verify that user should able to apply for Sr Software developer for Gurgaon Location', () => {
    page.click_SrSoftwareDevGurgaon();
    expect(page.getJobDescription_SrSoftwareDevGurgaon()).toEqual('Gurgaon, India');
    page.click_ApplyNowButton();
    browser.sleep(2000);
    expect(page.verifyAttachResumePopUp()).toEqual('Attach Resume');
  });

  it('TC_004: Verify that user should able to apply for Sr Software developer for London Location', () => {
    page.navigateTo();
    browser.sleep(2000);
    page.click_SrSoftwareDevLondon();
    browser.sleep(2000);
    expect(page.getJobDescription_SrSoftwareDevLondon()).toEqual('London, UK');
    page.click_ApplyNowButton();
    browser.sleep(2000);
    expect(page.verifyAttachResumePopUp()).toEqual('Attach Resume');
  });

  it('TC_005: Verify that user should able to apply for Testing Engineer for Gurgaon Location', () => {
    page.navigateTo();
    browser.sleep(2000);
    page.click_TestingEngineerGurgaon();
    browser.sleep(2000);
    expect(page.getJobDescription_TestingEngGurgaon()).toEqual('Gurgaon, India');
    page.click_ApplyNowButton();
    browser.sleep(2000);
    expect(page.verifyAttachResumePopUp()).toEqual('Attach Resume');
  });

  it('TC_006: Verify that user should able to apply for Testing Engineer for London Location', () => {
    page.navigateTo();
    browser.sleep(2000);
    page.click_TestingEngineerLondon();
    browser.sleep(2000);
    expect(page.getJobDescription_TestingEngLondon()).toEqual('London, UK');
    page.click_ApplyNowButton();
    browser.sleep(2000);
    expect(page.verifyAttachResumePopUp()).toEqual('Attach Resume');
  });

  it('TC_007: Verify that user should able to apply forSenior Web Designer for London Location', () => {
    page.navigateTo();
    browser.sleep(2000);
    page.click_WebDesignerLondon();
    browser.sleep(2000);
    expect(page.getJobDescription_WebDesignerLondon()).toEqual('London, UK');
    page.click_ApplyNowButton();
    browser.sleep(2000);
    expect(page.verifyAttachResumePopUp()).toEqual('Attach Resume');
  });

  it('TC_008: Verify that user should able to apply for Senior Web Designer for Gurgaon Location', () => {
    page.navigateTo();
    browser.sleep(2000);
    page.click_WebDesignerGurgaon();
    browser.sleep(2000);
    expect(page.getJobDescription_WebDesignerGurgaon()).toEqual('Gurgaon, India');
    page.click_ApplyNowButton();
    browser.sleep(2000);
    expect(page.verifyAttachResumePopUp()).toEqual('Attach Resume');

  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});

