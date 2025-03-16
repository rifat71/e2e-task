const BasePage = require("./BasePage");

class PopupPage extends BasePage {
  constructor(page) {
    super(page);
    this.existingOrderPopup = page.locator(`//h6[text()="You have exisiting order(s), What action would you like to take?"]`);
    this.createNewOrderButton = page.locator(`//input[@value='create']`);
    this.placeOrderButton = page.locator(`//h6[text()='Place an order?']/../button`);
    this.continueButoon = page.locator(`(//button[text()='Continue'])[2]`);
  }

  async clickPlaceOrderButton() {
    // const isPopupVisible = await this.createNewOrderButton.waitFor({ state: 'visible', timeout: 5000 }).catch(() => false);
    const isPopupVisible = await this.createNewOrderButton.isVisible({ timeout: 2000 });
    console.log("isPopupVisible : "+ isPopupVisible);
    if (isPopupVisible) {
      // await this.createNewOrderButton.waitFor({ state: 'visible' });
      await this.createNewOrderButton.click();
      await this.continueButoon.waitFor({ state: 'visible' });
      await this.continueButoon.click();
      return isPopupVisible;
    } else {
      await this.placeOrderButton.click();
      // await this.createNewOrderButton.click();
      // await this.continueButoon.waitFor({ state: 'visible' });
      // await this.continueButoon.click();
      return isPopupVisible;
    }
  }
}

module.exports = PopupPage;
