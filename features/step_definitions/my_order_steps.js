const { Given, Then, When } = require('@cucumber/cucumber');
const { expect } = require('chai');
const MyOrderPage = require('../../pages/MyOrderPage');

let myOrderPage;

Given('I am on the My Order page', async function () {
  myOrderPage = new MyOrderPage(this.page);
  await myOrderPage.navigateToMyOrderPage();
});

Then('I should see the {string} title', async function (title) {
  await myOrderPage.verifyAppBarTitle(title);
});

Then('I should see the correct subtotal', async function () {
  const subtotal = await myOrderPage.verifySubtotal();
  expect(subtotal).toContain('$');
});

When('I click the {string} button on my-order page', async function (buttonText) {
  await myOrderPage.clickSavePreOrderButton();
});