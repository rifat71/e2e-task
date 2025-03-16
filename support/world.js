const { setWorldConstructor } = require('@cucumber/cucumber');
const Promise = require(`bluebird`);
const Screenshot = require('../utils/Screenshot');

class World {

  constructor({ attach }) {
    this.attach = attach;
    this.screenshot = new Screenshot(this);
    this.browser = null;
    this.context = null;
    this.page = null;
  }

  sleep(milliseconds) {
    return Promise.delay(milliseconds);
  }
}

setWorldConstructor(World);
