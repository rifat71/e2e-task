const BasePage = require("./BasePage");
const { expect } = require('chai');

class MyOrderPage extends BasePage {
  constructor(page) {
    super(page);
    this.subtotalText = page.locator("//span[text()='Subtotal']/../../following-sibling::div");
    this.finalPrice = page.locator("//span[text()='Order Total']/../../following-sibling::div");
  }

  async verifyAppBarTitle() {
    return await this.getTextOfLocatorByDataTestId('app-bar-title');
  }

  async verifySubtotal(expectedSubtotal) {
    const subtotal = await this.subtotalText.innerText();
    const subtotalValue = parseFloat(subtotal.replace(/[^0-9.]/g, ''));
    expect(subtotalValue).to.equal(expectedSubtotal);
  }

  async clickSavePreOrderButton(text, world) {
    const finalPrice = await this.finalPrice.innerText();
    world.finalPriceText = finalPrice;
    await this.clickButton(text);
  }
}

module.exports = MyOrderPage;
