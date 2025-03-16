const BasePage = require("./BasePage");

class PaymentPage extends BasePage {
  constructor(page) {
    super(page);
    this.page = page;
    this.creditCardButton = page.locator(`//button[@aria-label='Credit Card']`);
    this.cardHolderNameInput = page.locator(`//input[@name='holderName']`);
  }

  async clickCreditCardButton() {
    await this.page.waitForLoadState('domcontentloaded', { timeout: 90000 });
    await this.creditCardButton.click();
  }

  async fillInputInIframe(iframeTitle, inputSelector, value) {
    const iframe = this.page.frameLocator(`iframe[title="${iframeTitle}"]`);
    const inputField = iframe.locator(inputSelector);

    await inputField.fill(value);
  }

  async fillPaymentForm(cardNumber, expiryDate, securityCode, cardHolderName) {
    await this.fillInputInIframe("Iframe for secured card number", '//input[@aria-label="Card number"]', cardNumber);
    await this.fillInputInIframe("Iframe for secured card expiry date", '//input[@aria-label="Expiry date"]', expiryDate);
    await this.fillInputInIframe("Iframe for secured card security code", '//input[@aria-label="Security code"]', securityCode);
    await this.cardHolderNameInput.fill(cardHolderName);
  }
}

module.exports = PaymentPage;
