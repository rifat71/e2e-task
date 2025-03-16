// pages/BasePage.js
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

  getLocatorByDataTestId(id) {
    return this.page.locator(`//*[@data-testid='${id}']`);
  }

  async clickButton(buttonText) {
    const buttonLocator = this.getButtonLocator(buttonText);
    await buttonLocator.click();
  }

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

  // getText
  async getTextOfLocatorByDataTestId(id){
    const locator = this.getLocatorByDataTestId(id);
    await locator.waitFor({ state: 'visible' });
    return await locator.textContent();
  }
}

module.exports = BasePage;