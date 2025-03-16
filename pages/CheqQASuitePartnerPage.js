const BasePage = require("./BasePage");
const ItemDetailsPage = require('./ItemDetailsPage');

// pages/CheqQASuitePartnerPage.js
class CheqQASuitePartnerPage extends BasePage {
  constructor(page) {
    super(page);
    this.page = page;
    this.categoryToItemMap = {
      'Soft Drinks - Pantry 4 West': {
        'Coke (6 Pack)': 'item-363887',
      },
      'Soft Drinks - Pantry 10 East': {
        'Sprite (6 Pack)': 'item-308067',
      },
      'Desserts - Pantry 4 West': {
        'Biryani': 'item-340055',
      },
      'Desserts - Pantry 10 East': {
        'Margarita': 'item-308064',
      },
      'Beer - East': {
        'Chicken Teriyaki': 'item-363981',
      },
      'Burgers': {
        'Farm house burger': 'item-363982',
      },
    };
    this.headerTitle = page.locator(`//h1[text()='CHEQ QA Suite Partner']`);
  }

  async verifyCheqQASuitePartnerHeader() {
    await this.headerTitle.waitFor({ state: 'visible' });
    return await this.headerTitle.isVisible();
  }

  async verifyPreOrderText(text) {
    return await this.verifyPTagNormalizeSpaceText(text);
  }

  async addItemToCart(category, itemName) {
    const itemId = this.categoryToItemMap[category]?.[itemName];
    if (!itemId) {
      throw new Error(`Item "${itemName}" not found in category "${category}".`);
    }

    await this.clickById(itemId);

    const itemDetailsPage = new ItemDetailsPage(this.page);
    await itemDetailsPage.addItemToOrder();
    // await itemDetailsPage.goBackToCategories();
  }
}

module.exports = CheqQASuitePartnerPage;