const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('chai');
const CategoriesPage = require('../../pages/CategoriesPage');

let categoriesPage;

Given('I am on the Categories page', async function () {
  categoriesPage = new CategoriesPage(this.page);
  await categoriesPage.navigateToCategoriesPage();
});

When('I select the {string} item', async function (itemName) {
  await categoriesPage.selectItem(itemName);
});

When('I add the item to the order', async function () {
  await categoriesPage.clickAddToOrderButton();
});

When('I go back to the Categories page', async function () {
  await categoriesPage.clickBackButton();
});

Then('I should see {string} items in the cart', async function (expectedCount) {
  await categoriesPage.verifyCartItemCount(expectedCount);
});

When('I click the {string} button', async function (buttonText) {
  await categoriesPage.clickViewCartButton();
});