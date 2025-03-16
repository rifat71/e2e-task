// pages/MyOrderPage.js
class MyOrderPage {
  constructor(page) {
    this.page = page;
    this.appBarTitle = page.locator("//*[@data-testid='app-bar-title']");
    this.subtotalText = page.locator("//span[text()='Subtotal']/../../following-sibling::div");
    this.savePreOrderButton = page.locator("//button[text()='Save Pre-Order']");
  }

  async verifyAppBarTitle(expectedTitle) {
    const title = await this.appBarTitle.textContent();
    expect(title).toBe(expectedTitle);
  }

  async verifySubtotal(expectedSubtotal) {
    const subtotal = await this.subtotalText.textContent();
    expect(subtotal).toContain(expectedSubtotal);
  }

  async clickSavePreOrderButton() {
    await this.savePreOrderButton.click();
  }
}

module.exports = MyOrderPage;