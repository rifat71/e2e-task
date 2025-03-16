// pages/MyEventsPage.js
const BasePage = require('./BasePage');

class MyEventsPage extends BasePage {
  constructor(page) {
    super(page);
    this.page = page;
  }

  async navigateToMyEventsPage() {
    await this.page.goto('https://suites.uat.cheqplease.com/my-events');
  }

  async verifyMyEventsHeader(headerText) {
    return await this.verifyHeader(headerText);
  }

  async verifyMarch2025Text(text) {
    return await this.verifyDivText(text);
  }

  async clickDay17Button(text) {
    await this.clickButton(text);
  }

  async clickAutomationHorizonLink(text) {
    const linkLocator = this.getLinkLocator(text);
    await linkLocator.click();
  }

  async clickContinueButton(text) {
    await this.clickButton(text);
  }
}

module.exports = MyEventsPage;