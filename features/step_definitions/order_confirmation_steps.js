const { Then } = require('@cucumber/cucumber');
const { expect } = require('chai');
const OrderConfirmationPage = require('../../pages/OrderConfirmationPage');

Then('I should see the order confirmation', async function () {
  const orderConfirmationPage = new OrderConfirmationPage(this.page);

  const isConfirmed = await orderConfirmationPage.isOrderConfirmed();
  expect(isConfirmed).to.be.true;

  // const orderTotal = await orderConfirmationPage.getOrderTotalAmount();
  // console.log(`Order Total Amount: ${orderTotal}`);
});