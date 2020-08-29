import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getTitleText(): Promise<string> {
    return element(by.xpath('//h1[contains(text(),"Browse Jobs")]')).getText() as Promise<string>;
  }


  getJobLinkText_SrSoftwareDevGurgaon(): Promise<string> {
    return element(by.xpath('//li[1]//a[1]//span[1]')).getText() as Promise<string>;
  }

  getJobLinkText_SrSoftwareDevLondon(): Promise<string> {
    return element(by.xpath('//li[2]//a[1]//span[1]')).getText() as Promise<string>;
  }

  getJobLinkText_TestingEngGurgaon(): Promise<string> {
    return element(by.xpath('//li[3]//a[1]//span[1]')).getText() as Promise<string>;
  }

  getJobLinkText_TestingEngLondon(): Promise<string> {
    return element(by.xpath('//li[4]//a[1]//span[1]')).getText() as Promise<string>;
  }

  getJobLinkText_SrWebDesignerGurgaon(): Promise<string> {
    return element(by.xpath('//li[5]//a[1]//span[1]')).getText() as Promise<string>;
  }

  getJobLinkText_SrWebDesignerLondon(): Promise<string> {
    return element(by.xpath('//li[6]//a[1]//span[1]')).getText() as Promise<string>;
  }

  click_SrSoftwareDevGurgaon(): Promise<void>{
    return element(by.xpath('//li[1]//a[1]//span[1]')).click() as Promise<void>;
  }

  click_SrSoftwareDevLondon(): Promise<void>{
    return element(by.xpath('//li[2]//a[1]//span[1]')).click() as Promise<void>;
  }

  getJobDescription_SrSoftwareDevGurgaon(): Promise<string> {
    return element(by.xpath('//p[contains(text(),"Gurgaon, India")]')).getText() as Promise<string>;

  }

  getJobDescription_SrSoftwareDevLondon(): Promise<string> {
    return element(by.xpath('//p[contains(text(),"London, UK")]')).getText() as Promise<string>;
  }

  click_TestingEngineerGurgaon(): Promise<void>{
    return element(by.xpath('//li[3]//a[1]//span[1]')).click() as Promise<void>;
  }

  getJobDescription_TestingEngGurgaon(): Promise<string> {
    return element(by.xpath('//p[contains(text(),"Gurgaon, India")]')).getText() as Promise<string>;
  }



  click_TestingEngineerLondon(): Promise<void>{
    return element(by.xpath('//li[4]//a[1]//span[1]')).click() as Promise<void>;
  }

  getJobDescription_TestingEngLondon(): Promise<string> {
    return element(by.xpath('//p[contains(text(),"London, UK")]')).getText() as Promise<string>;
  }

  click_WebDesignerGurgaon(): Promise<void>{
    return element(by.xpath('//li[6]//a[1]//span[1]')).click() as Promise<void>;
  }

  getJobDescription_WebDesignerLondon(): Promise<string> {
    return element(by.xpath('//p[contains(text(),"London, UK")]')).getText() as Promise<string>;
  }

  click_WebDesignerLondon(): Promise<void>{
    return element(by.xpath('//li[5]//a[1]//span[1]')).click() as Promise<void>;
  }

  getJobDescription_WebDesignerGurgaon(): Promise<string> {
    return element(by.xpath('//p[contains(text(),"Gurgaon, India")]')).getText() as Promise<string>;
  }

  click_ApplyNowButton(): Promise<void>{
    return element(by.xpath('//button[contains(text(),"APPLY NOW")]')).click() as Promise<void>;
  }

  verifyAttachResumePopUp(): Promise<string> {
    return element(by.xpath('//label[contains(text(),"Attach Resume")]')).getText() as Promise<string>;
  }

}

