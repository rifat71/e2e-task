const { Given, Then, When } = require('@cucumber/cucumber');
const { expect } = require('chai');
const MyEventsPage = require('../../pages/MyEventsPage');

let myEventsPage;

Given('I am on the My Events page', async function () {
  myEventsPage = new MyEventsPage(this.page);
  await myEventsPage.navigateToMyEventsPage();
});

Then('I should see the {string} header', async function (headerText) {
  myEventsPage = new MyEventsPage(this.page);
  const isHeaderVisible = await myEventsPage.verifyMyEventsHeader(headerText);
  expect(isHeaderVisible).to.be.true;
});

Then('I should see the {string} text on my-event page', async function (text) {
  myEventsPage = new MyEventsPage(this.page);
  const isTextVisible = await myEventsPage.verifyDivText(text);
  expect(isTextVisible).to.be.true;
});

When('I click the {string} button on my-event page', async function (buttonText) {
  myEventsPage = new MyEventsPage(this.page);
  await myEventsPage.clickContinueButton(buttonText);
});

When('I click the {string} link on my-event page', async function (linkText) {
  myEventsPage = new MyEventsPage(this.page);
  await myEventsPage.clickAutomationHorizonLink(linkText);
});
