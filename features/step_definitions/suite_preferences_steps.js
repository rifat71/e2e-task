const { Then, When } = require('@cucumber/cucumber');
const { expect } = require('chai');
const SuitePreferencesPage = require('../../pages/SuitePreferencesPage');

let suitePreferencesPage;

Then('I should see the {string} header on suite-preference page', async function (headerText) {
  if (!this.existingOrder) {
    suitePreferencesPage = new SuitePreferencesPage(this.page);
    const actualText = await suitePreferencesPage.verifySuitePreferencesHeader();
    expect(actualText).to.equal('Suite Preferences');
  }
});

When('I click the {string} button on suite-preferance page', async function (buttonText) {
  if (!this.existingOrder) {
    suitePreferencesPage = new SuitePreferencesPage(this.page);
    await suitePreferencesPage.clickSaveButton(buttonText);
  }
});
