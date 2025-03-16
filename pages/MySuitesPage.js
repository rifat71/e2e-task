const BasePage = require("./BasePage");

class MySuitesPage extends BasePage{
  constructor(page) {
    super(page);
    this.page = page;
    this.mySuitesHeader = page.locator("//h4[text()='My Suites']");
    this.suiteNorthRadio = page.locator("//input[@type='radio' and @value='1992']");
  }

  async verifyMySuitesHeader(headerText) {
    return await this.verifyHeader(headerText);
  }

  async selectSuiteNorth() {
    await this.suiteNorthRadio.click();
  }

  async clickContinueButton(text) {
    await this.clickButton(text);
  }
}

module.exports = MySuitesPage;
