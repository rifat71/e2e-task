const BasePage = require("./BasePage");

// pages/SuitePreferencesPage.js
class SuitePreferencesPage extends BasePage{
  constructor(page) {
    super(page);
    this.page = page;
  }

  async verifySuitePreferencesHeader() {
    return await this.getTextOfLocatorByDataTestId('app-bar-title');
  }

  async clickSaveButton(text) {
    await this.clickButton(text);
  }
}

module.exports = SuitePreferencesPage;