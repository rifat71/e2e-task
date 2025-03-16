// pages/CategoriesPage.js
class CategoriesPage {
  constructor(page) {
    this.page = page;
    this.coke6Pack = page.locator("//p[text()='Coke (6 Pack)']");
    this.sprite6Pack = page.locator("//p[text()='Sprite (6 Pack)']");
    this.biryani = page.locator("//p[text()='Biryani']");
    this.margarita = page.locator("//p[text()='Margarita']");
    this.chickenTeriyaki = page.locator("//p[text()='Chicken Teriyaki']");
    this.farmHouseBurger = page.locator("//p[text()='Farm house burger']");
    this.addToOrderButton = page.locator("//button[@data-testid='add-to-order-button']");
    this.backButton = page.locator("//*[@data-testid='ArrowBackIcon']");
    this.viewCartButton = page.locator("//button[@data-test-id='view-cart-btn']");
  }

  async selectItem(itemName) {
    const itemLocator = this.page.locator(`//p[text()='${itemName}']`);
    await itemLocator.click();
  }

  async getItemPrice(itemName) {
    const priceLocator = this.page.locator(`//p[text()='${itemName}']/../following-sibling::p`);
    return await priceLocator.textContent();
  }

  async clickAddToOrderButton() {
    await this.addToOrderButton.click();
  }

  async clickBackButton() {
    await this.backButton.click();
  }

  async verifyCartItemCount(expectedCount) {
    const cartCount = await this.viewCartButton.locator("div > span").textContent();
    expect(cartCount).toBe(expectedCount);
  }

  async clickViewCartButton() {
    await this.viewCartButton.click();
  }
}

module.exports = CategoriesPage;