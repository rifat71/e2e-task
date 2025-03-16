const BasePage = require("./BasePage");

class ItemDetailsPage extends BasePage{
  constructor(page) {
    super(page);
    this.addToOrderButton = page.locator("//button[@data-testid='add-to-order-button']");
    this.backButton = page.locator("//*[@data-testid='ArrowBackIcon']");
  }

  async addItemToOrder() {
    await this.addToOrderButton.click();
  }

  async goBackToCategories() {
    await this.backButton.click();
  }
}

module.exports = ItemDetailsPage;
