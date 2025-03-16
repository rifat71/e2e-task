const BasePage = require("./BasePage");

class SuitePreferencesPage extends BasePage{
  constructor(page) {
    super(page);
  }

  async verifySuitePreferencesHeader() {
    return await this.getTextOfLocatorByDataTestId('app-bar-title');
  }

  async clickSaveButton(text) {
    await this.clickButton(text);
  }
}

module.exports = SuitePreferencesPage;
