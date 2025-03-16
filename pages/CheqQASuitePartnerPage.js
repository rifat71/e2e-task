// pages/CheqQASuitePartnerPage.js
class CheqQASuitePartnerPage {
  constructor(page) {
    this.page = page;
    this.cheqQASuitePartnerHeader = page.locator("//h4[text()='CHEQ QA Suite Partner']");
    this.preOrderText = page.locator("//p[contains(text(), 'Pre-Order for: Suite (North)')]");
    this.arrowRightIcon = page.locator("//*[@data-testid='KeyboardArrowRightIcon']");
  }

  async verifyCheqQASuitePartnerHeader() {
    await this.cheqQASuitePartnerHeader.waitFor({ state: 'visible' });
    return await this.cheqQASuitePartnerHeader.isVisible();
  }

  async verifyPreOrderText() {
    await this.preOrderText.waitFor({ state: 'visible' });
    return await this.preOrderText.isVisible();
  }

  async clickArrowRightIcon() {
    await this.arrowRightIcon.click();
  }
}

module.exports = CheqQASuitePartnerPage;