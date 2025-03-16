const { Given, Then, When } = require('@cucumber/cucumber');
const { expect } = require('chai');
const CheqQASuitePartnerPage = require('../../pages/CheqQASuitePartnerPage');

let cheqQASuitePartnerPage;

Then('I should see the header on cheqQASuitePartnerPage page', async function () {
  cheqQASuitePartnerPage = new CheqQASuitePartnerPage(this.page);
  const isHeaderVisible = await cheqQASuitePartnerPage.verifyCheqQASuitePartnerHeader();
  expect(isHeaderVisible).to.be.true;
});

Then('I should see the {string} text on cheqQASuitePartnerPage page', async function (text) {
  cheqQASuitePartnerPage = new CheqQASuitePartnerPage(this.page);
  const isTextVisible = await cheqQASuitePartnerPage.verifyPreOrderText(text);
  expect(isTextVisible).to.be.true;
});

When('I add 1 item from each category to the cart', async function (dataTable) {
  cheqQASuitePartnerPage = new CheqQASuitePartnerPage(this.page);
  const items = dataTable.hashes();

  for (const item of items) {
    const { Category, 'Item Name': itemName } = item;
    await cheqQASuitePartnerPage.addItemToCart(Category, itemName);
  }
});
