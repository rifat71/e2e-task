const BasePage = require("./BasePage");

// pages/PopupPage.js
class PopupPage extends BasePage{
  constructor(page) {
    super(page);
    this.placeOrderButton = page.locator("//h6[text()='Place an order?']/../button");
  }

  async clickPlaceOrderButton() {
    await this.placeOrderButton.click();
  }
}

module.exports = PopupPage;
