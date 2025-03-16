const BasePage = require("./BasePage");

class OrderConfirmationPage extends BasePage {
  constructor(page) {
    super(page);
    this.orderConfirmationMessage = page.locator(`//h6[starts-with(normalize-space(), 'Pre-Order') and contains(normalize-space(), 'has been received!')]`);
    this.orderTotalAmount = page.locator("//p[text()='Order Total']/following-sibling::p");
  }

  async isOrderConfirmed() {
    try {
      await this.orderConfirmationMessage.waitFor({ state: 'visible', timeout: 5000 });
      return true;
    } catch (error) {
      return false;
    }
  }

  async getOrderTotalAmount() {
    const orderTotal = await this.orderTotalAmount.innerText();
    return orderTotal.trim();
  }
}

module.exports = OrderConfirmationPage;