const { When, Then } = require('@cucumber/cucumber');
const { expect } = require('chai');
const MySuitesPage = require('../../pages/MySuitesPage');

let mySuitesPage;

Then('I should see the {string} header on my-suites page', async function (text) {
  mySuitesPage = new MySuitesPage(this.page);
  const isTextVisible = await mySuitesPage.verifyMySuitesHeader(text);
  expect(isTextVisible).to.be.true;
});

When('I select the {string} radio button on my-suites page', async function (radioButtonText) {
  mySuitesPage = new MySuitesPage(this.page);
  this.selectedSuite = radioButtonText;
  await mySuitesPage.selectSuiteNorth(radioButtonText);
});

When('I click the {string} button on my-suites page', async function (buttonText) {
  mySuitesPage = new MySuitesPage(this.page);
  await mySuitesPage.clickContinueButton(buttonText);
});
