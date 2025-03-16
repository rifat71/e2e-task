const path = require('path');
const fs = require('fs');
const Promise = require('bluebird');
const mkdirp = require('mkdirp');
const writeFile = Promise.promisify(fs.writeFile);

class Screenshot {

    /**
     * Page Object
     * @param {World} world - world object instance
     */
    constructor(world) {
        this.world = world;
        this.screenshotPath = path.join("reports", "screenshots");

        if (this.world.debug) console.log('Screenshot:constructor');

        this.ensureDirectoryExists();
    }

    /**
     * Check and create directory if not exists
     */
    ensureDirectoryExists() {
        try {
            if (!fs.existsSync(this.screenshotPath)) {
                mkdirp.sync(this.screenshotPath);
            }
        } catch (err) {
            console.error(err);
        }

        if (this.world.debug) console.log('Screenshot:ensureDirectoryExists: ' + this.screenshotPath);
    }

    /**
     * Take screenshot if test fails
     * @param {String} fileName - File name
     */
    async create(fileName) {
        try {
            const data = await this.world.page.screenshot({
                // path: './reports/failTest.png',  // we can also define path in this way
            });
            await this.world.attach(data, 'image/png');
            const filePath = path.join(this.screenshotPath, fileName);
            await writeFile(filePath, data, "base64");
        } catch (err) {
            console.error(err);
        }

        if (this.world.debug) console.log('Screenshot:create: ' + this.screenshotPath);
    }
};

module.exports = Screenshot;