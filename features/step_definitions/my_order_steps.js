const { Then, When } = require('@cucumber/cucumber');
const { expect } = require('chai');
const MyOrderPage = require('../../pages/MyOrderPage');

let myOrderPage;

Then('I should see the {string} title on my-order page', async function (title) {
  myOrderPage = new MyOrderPage(this.page);
  const actualValue = await myOrderPage.verifyAppBarTitle();
  expect(title).to.equal(actualValue);
});

Then('I should see the correct subtotal', async function () {
  myOrderPage = new MyOrderPage(this.page);
  const subtotal = await myOrderPage.verifySubtotal();
  expect(subtotal).toContain('$');
});

When('I click the {string} button on my-order page', async function (buttonText) {
  myOrderPage = new MyOrderPage(this.page);
  await myOrderPage.clickSavePreOrderButton(buttonText);
});
