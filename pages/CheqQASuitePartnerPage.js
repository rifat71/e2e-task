const BasePage = require("./BasePage");
const ItemDetailsPage = require('./ItemDetailsPage');

class CheqQASuitePartnerPage extends BasePage {
  constructor(page) {
    super(page);
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
    this.numberOfItemOnCart = page.locator(`//button[@data-test-id='view-cart-btn']/div/span`);
  }

  async verifyCheqQASuitePartnerHeader() {
    await this.headerTitle.waitFor({ state: 'visible' });
    return await this.headerTitle.isVisible();
  }

  async verifyItemNumberOnCart() {
    await this.numberOfItemOnCart.waitFor({ state: 'visible' });
    await this.numberOfItemOnCart.isVisible();
    return this.numberOfItemOnCart.textContent();
  }

  async verifyPreOrderText(text) {
    return await this.verifyPTagNormalizeSpaceText(text);
  }

  async addItemToCart(category, itemName) {
    const itemId = this.categoryToItemMap[category]?.[itemName];
    if (!itemId) {
      throw new Error(`Item "${itemName}" not found in category "${category}".`);
    }

    const itemPrice = await this.page.locator(`//h2[text()='${category}']/following-sibling::div/a[@id='${itemId}']/div/p`).innerText();
    const priceValue = parseFloat(itemPrice.replace(/[^0-9.]/g, ''));

    if (!this.totalPrice) {
      this.totalPrice = 0;
    }
    this.totalPrice += priceValue;

    console.log(`Added ${itemName} ($${priceValue}) to cart. Current total: $${this.totalPrice}`);

    await this.clickById(itemId);
    const itemDetailsPage = new ItemDetailsPage(this.page);
    await itemDetailsPage.addItemToOrder();
  }

  async clickViewCart() {
    return await this.clickButtonByDataTestId('view-cart-btn');
  }
}

module.exports = CheqQASuitePartnerPage;
