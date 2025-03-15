// support/hooks.js
const { After, Before } = require('@cucumber/cucumber');
const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

Before(async function () {
  this.browser = await chromium.launch({ headless: false });
  this.context = await this.browser.newContext();
  this.page = await this.context.newPage();
});

After(async function (scenario) {
  if (scenario.result.status === 'failed') {
    const screenshot = await this.page.screenshot({ path: `reports/screenshots/${scenario.pickle.name}.png` });
  }
  await this.page.close();
  await this.context.close();
  await this.browser.close();
});