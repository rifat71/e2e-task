const { When, Then } = require('@cucumber/cucumber');
const { expect } = require('chai');
const PaymentPage = require('../../pages/PaymentPage');

let paymentPage;

When('I select the Credit Card payment method', async function () {
  paymentPage = new PaymentPage(this.page);
  await paymentPage.clickCreditCardButton();
});

When('I enter the payment details:', async function (dataTable) {
  paymentPage = new PaymentPage(this.page);
  const paymentDetails = dataTable.rowsHash();
  await paymentPage.fillPaymentForm(
    paymentDetails['Card Number'],
    paymentDetails['Expiry Date'],
    paymentDetails['Security Code'],
    paymentDetails['Cardholder Name']
  );
});

// Validate the payment form is filled correctly
Then('the payment form should be filled with:', async function (dataTable) {
  const paymentDetails = dataTable.rowsHash();

  // Validate card number
  const cardNumber = await paymentPage.cardNumberInput.inputValue();
  expect(cardNumber).toBe(paymentDetails['Card Number']);

  // Validate expiry date
  const expiryDate = await paymentPage.expiryDateInput.inputValue();
  expect(expiryDate).toBe(paymentDetails['Expiry Date']);

  // Validate security code
  const securityCode = await paymentPage.securityCodeInput.inputValue();
  expect(securityCode).toBe(paymentDetails['Security Code']);

  // Validate cardholder name
  const cardHolderName = await paymentPage.cardHolderNameInput.inputValue();
  expect(cardHolderName).toBe(paymentDetails['Cardholder Name']);
});
