const { After, Before, AfterAll, Status } = require('@cucumber/cucumber');
var reporter = require('cucumber-html-reporter');
const sanitize = require('sanitize-filename');
const { chromium } = require('playwright');
const _ = require('lodash');
const Report = require('../utils/generate-report');

Before(async function () {
  if (process.env.HEADLESS === `false`) {
    this.browser = await chromium.launch({ headless: false, args: [`--window-position=0,0`] });
  } else {
    this.browser = await chromium.launch({ args: [`-width=1500`, `-height=500`] });
  }
  this.context = await this.browser.newContext();
  this.page = await this.context.newPage();
});

After(async function (scenario) {
  console.log("status: " + scenario.result.status);
  if (scenario.result.status === Status.FAILED) {
    try {
      if (this.debug) console.log('After Hook: ' + scenario.result.status);
      await this.screenshot.create(sanitize(_.toLower(scenario.pickle.name) + ".png").replace(/ /g, "_"));
    } catch (e) {
      console.error(e);
    }
  }

  if (this.browser) {
    await this.browser.close();
  }
  await this.sleep(700);
});

AfterAll(async function () {
  console.log("Execute after all hook.");

  setTimeout(() => {
    try {
      Report.generate();
    } catch (error) {
      console.error("Failed to generate HTML report:", error);
    }
  }, 2000);
});
