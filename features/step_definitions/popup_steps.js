const { Given, When } = require('@cucumber/cucumber');
const PopupPage = require('../../pages/PopupPage');

let popupPage;

When('I click the {string} button on popup', async function (buttonText) {
  popupPage = new PopupPage(this.page);
  this.existingOrder = await popupPage.clickPlaceOrderButton();
});
