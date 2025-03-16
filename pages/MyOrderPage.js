const BasePage = require("./BasePage");

class MyOrderPage extends BasePage{
  constructor(page) {
    super(page);
    this.page = page;
    this.subtotalText = page.locator("//span[text()='Subtotal']/../../following-sibling::div");
  }

  async verifyAppBarTitle() {
    return await this.getTextOfLocatorByDataTestId('app-bar-title');
  }

  async verifySubtotal(expectedSubtotal) {
    const subtotal = await this.subtotalText.textContent();
    expect(subtotal).toContain(expectedSubtotal);
  }

  async clickSavePreOrderButton(text) {
    await this.clickButton(text);
  }
}

module.exports = MyOrderPage;
