class BasePage {
  constructor(page) {
    this.page = page;
  }

  getButtonLocator(buttonText) {
    return this.page.locator(`//button[text()='${buttonText}']`);
  }

  getLinkLocator(linkText) {
    return this.page.locator(`//*[text()='${linkText}']`);
  }

  getHeaderLocator(headerText) {
    return this.page.locator(`//h4[text()='${headerText}']`);
  }

  getDivLocator(divText) {
    return this.page.locator(`//div[text()='${divText}']`);
  }

  getPTagNormalizeSpaceLocatorByText(text) {
    return this.page.locator(`//p[normalize-space()='${text}']`);
  }

  getLocatorByDataTestId(id) {
    return this.page.locator(`//*[@data-testid='${id}']`);
  }

  getLocatorById(id) {
    return this.page.locator(`//*[@id='${id}']`);
  }

  getButtonByDataTestId(id) {
    return this.page.locator(`//button[@data-test-id='${id}']`);
  }

  // click
  async clickById(id) {
    const buttonLocator = this.getLocatorById(id);
    await buttonLocator.waitFor({ state: 'visible' });
    await buttonLocator.click();
  }

  async clickButton(buttonText) {
    const buttonLocator = this.getButtonLocator(buttonText);
    await buttonLocator.waitFor({ state: 'visible' });
    await buttonLocator.click();
  }

  async clickButtonByDataTestId(id) {
    const buttonLocator = this.getButtonByDataTestId(id);
    await buttonLocator.waitFor({ state: 'visible' });
    await buttonLocator.click();
  }

  // verify
  async verifyHeader(headerText) {
    const headerLocator = this.getHeaderLocator(headerText);
    await headerLocator.waitFor({ state: 'visible' });
    const actualText = await headerLocator.textContent();
    return actualText === headerText;
  }

  async verifyDivText(divText) {
    const divLocator = this.getDivLocator(divText);
    await divLocator.waitFor({ state: 'visible' });
    const actualText = await divLocator.textContent();
    return actualText === divText;
  }

  async verifyPTagNormalizeSpaceText(divText) {
    const divLocator = this.getPTagNormalizeSpaceLocatorByText(divText);
    await divLocator.waitFor({ state: 'visible' });
    const actualText = await divLocator.textContent();
    return actualText === divText;
  }

  // getText
  async getTextOfLocatorByDataTestId(id){
    const locator = this.getLocatorByDataTestId(id);
    await locator.waitFor({ state: 'visible' });
    return await locator.textContent();
  }
}

module.exports = BasePage;
