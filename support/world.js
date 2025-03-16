const { setWorldConstructor } = require('@cucumber/cucumber');
const Promise = require('bluebird');
const Screenshot = require('../utils/Screenshot');
const { chromium } = require('playwright');

class World {
  constructor({ attach }) {
    this.attach = attach;
    this.screenshot = new Screenshot(this);
    this.browser = null;
    this.context = null;
    this.page = null;
  }

  async launchBrowser() {
    this.browser = await chromium.launch({
      headless: process.env.HEADLESS == 'false',
    });

    this.context = await this.browser.newContext();
    this.page = await this.context.newPage();
  }

  sleep(milliseconds) {
    return Promise.delay(milliseconds);
  }
}

setWorldConstructor(World);
