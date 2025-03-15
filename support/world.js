// support/world.js
const { setWorldConstructor } = require('@cucumber/cucumber');
const { chromium } = require('playwright');

function World() {
  this.browser = null;
  this.context = null;
  this.page = null;
}

setWorldConstructor(World);
