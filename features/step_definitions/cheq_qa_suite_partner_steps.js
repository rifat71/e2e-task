const { Given, Then, When } = require('@cucumber/cucumber');
const { expect } = require('chai');
const CheqQASuitePartnerPage = require('../../pages/CheqQASuitePartnerPage');

let cheqQASuitePartnerPage;

Given('I am on the CHEQ QA Suite Partner page', async function () {
  cheqQASuitePartnerPage = new CheqQASuitePartnerPage(this.page);
  await cheqQASuitePartnerPage.navigateToCheqQASuitePartnerPage();
});

When('I click the {string} icon', async function (iconText) {
  await cheqQASuitePartnerPage.clickArrowRightIcon();
});