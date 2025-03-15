// features/step_definitions/loginSteps.js
const { Given, When, Then, setDefaultTimeout } = require('@cucumber/cucumber');
const { expect } = require('chai');
const LoginPage = require('../../pages/LoginPage');

setDefaultTimeout(60 * 1000);

let loginPage;

Given('I am on the login page', async function () {
  loginPage = new LoginPage(this.page);
  await loginPage.navigateToLoginPage();
});

When('I enter invalid email {string} and password {string}', async function (email, password) {
  await loginPage.enterEmail(email);
  await loginPage.enterPassword(password);
  await loginPage.clickSubmitButton();
});

Then('I should see an error message {string}', async function (expectedErrorMessage) {
  const errorMessage = await loginPage.getErrorMessage();
  expect(errorMessage).to.equal(expectedErrorMessage);
});