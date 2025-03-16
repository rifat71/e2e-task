const BasePage = require("./BasePage");

class PopupPage extends BasePage {
  constructor(page) {
    super(page);
    this.existingOrderPopup = page.locator('//h6[contains(text(), "You have existing order(s)")]');
    this.createNewOrderButton = page.locator("//span[text()='Create new order']");
    this.placeOrderButton = page.locator("//h6[text()='Place an order?']/../button");
  }

  async clickPlaceOrderButton() {
    const isPopupVisible = await this.existingOrderPopup.waitFor({ state: 'visible', timeout: 3000 }).catch(() => false);

    if (isPopupVisible) {
      await this.createNewOrderButton.click();
    } else {
      await this.placeOrderButton.click();
    }
  }
}

module.exports = PopupPage;
