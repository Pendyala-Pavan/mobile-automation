import { browser } from '@wdio/globals'

export default class Page {

    /**
     * Wait for an element to be displayed
     * @param {WebdriverIO.Element} element
     */
    async waitForElement(element) {
        await element.waitForDisplayed({timeout: 10000});
    }

    /**
     * Click an element
     * @param {WebdriverIO.Element} element
     */
    async click(element) {
        await this.waitForElement(element);
        await element.waitForEnabled({timeout: 10000});
        await element.click();
    }

    /**
     * Enter text into a text field
     * (Flutter apps require the field to be focused before typing)
     * @param {WebdriverIO.Element} element
     * @param {String} value
     */
    async setText(element, value) {
        await this.waitForElement(element);
        await element.waitForEnabled({timeout: 10000});

       
        await element.click();
        for (const character of value) {
            await browser.keys(character);
            await browser.pause(150);
        }
    }

    /**
     * Clear a text field by backspacing out its existing characters.
     * Avoids element.clearValue()/setValue(), which crash this app (see setText).
     * @param {WebdriverIO.Element} element
     */
    async clearText(element) {
        await this.waitForElement(element);
        await element.waitForEnabled({ timeout: 10000 });
        await element.click();

        const currentValue = await element.getText();
        for (let i = 0; i < currentValue.length; i++) {
            await browser.keys('');
            await browser.pause(150);
        }
    }

    /**
     * Get text from an element
     * @param {WebdriverIO.Element} element
     */
    async getText(element) {
        await this.waitForElement(element);
        return await element.getText();
    }

    /**
     * Wait until an element's text matches the value that was typed into it.
     * @param {WebdriverIO.Element} element
     * @param {String} expectedValue
     */
    async verifyTextEntered(element, expectedValue) {
        await browser.waitUntil(
            async () => (await element.getText()) === expectedValue,
            {
                timeout: 5000,
                timeoutMsg: `expected field to contain "${expectedValue}"`
            }
        );
    }

    /**
     * Wait until a password field has the expected number of characters.
     * Android masks password field text as bullet characters, so the real
     * value is never readable - only the length can be verified.
     * @param {WebdriverIO.Element} element
     * @param {Number} expectedLength
     */
    async waitForPasswordEntered(element, expectedLength) {
        await browser.waitUntil(
            async () => (await element.getText()).length === expectedLength,
            {
                timeout: 5000,
                timeoutMsg: `expected password field to contain ${expectedLength} characters`
            }
        );
    }

    /**
     * Check whether an element is displayed
     * @param {WebdriverIO.Element} element
     */
    async isDisplayed(element) {
        await this.waitForElement(element);
        return await element.isDisplayed();
    }

    /**
     * Scroll in the requested direction
     * @param {'up'|'down'|'left'|'right'} direction
     * @param {Number} percent
     */
    async scroll(direction = 'down', percent = 0.75) {
        await driver.execute('mobile: scrollGesture', {
            left: 100,
            top: 500,
            width: 800,
            height: 1200,
            direction,
            percent
        });
    }

    /**
     * Scroll until the requested element is visible.
     * @param {WebdriverIO.Element} element
     * @param {'up'|'down'} direction
     * @param {Number} maxScrolls
     */
    async scrollUntilDisplayed(element, direction = 'down', maxScrolls = 10) {
        for (let attempt = 0; attempt <= maxScrolls; attempt++) {
            if (await element.isDisplayed().catch(() => false)) {
                return;
            }

            if (attempt < maxScrolls) {
                await this.scroll(direction, 0.6);
                await browser.pause(500);
            }
        }

        throw new Error(`Element "${element.selector}" was not displayed after ${maxScrolls} scrolls`);
    }

    /**
     * Pause execution (for debugging only)
     * @param {Number} seconds
     */
    async pause(seconds = 2) {
        await browser.pause(seconds * 1000);
    }
}
