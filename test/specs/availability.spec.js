import loginPage from '../pageobjects/login.page.js';
import availabilityPage from '../pageobjects/availability.page.js';
import loginData from '../data/login.data.js';
import availabilityData from '../data/availability.data.js';

const APP_ID = 'com.nextenti.job.qa';

describe('Nextenti Availability Test', () => {

    beforeEach(async () => {
        await driver.execute('mobile: clearApp', { appId: APP_ID });
        await driver.execute('mobile: activateApp', { appId: APP_ID });
    });

    it('should create availability based on the selected mode', async function () {
        this.timeout(150000);

        await loginPage.waitForLandingPage();
        await loginPage.pause(3);
        await loginPage.verifyLandingPageVisible();
        await loginPage.clickLandingLogin();
        await loginPage.pause(3);
        await loginPage.waitForLoginForm();

        await loginPage.fillLoginFormWithRetry(loginData.username,loginData.password);

        await loginPage.pressDoneOnKeyboard();
        await loginPage.clickLogin();
        await loginPage.waitForHomePage();

        await availabilityPage.createAvailability(availabilityData.availabilityMode);
        await availabilityPage.fillAvailabilityDetails(availabilityData);
    });
});
