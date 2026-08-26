import jobPage from '../pageobjects/job.page.js';
import loginPage from '../pageobjects/login.page.js';
import loginData from '../data/login.data.js';
import jobData from '../data/job.data.js';

const APP_ID = 'com.nextenti.job.qa';

describe('Nextenti Job Search Test', () => {

    beforeEach(async () => {
        await driver.execute('mobile: clearApp', { appId: APP_ID });
        await driver.execute('mobile: activateApp', { appId: APP_ID });
    });

    it('should reach the dashboard and open Search Jobs', async function () {
        this.timeout(150000);

        await loginPage.waitForLandingPage();
        await loginPage.pause(3);
        await loginPage.verifyLandingPageVisible();
        await loginPage.clickLandingLogin();
        await loginPage.pause(3);
        await loginPage.waitForLoginForm();
        await loginPage.fillLoginFormWithRetry(loginData.username, loginData.password);
        await loginPage.pressDoneOnKeyboard();
        await loginPage.clickLogin();
        await loginPage.waitForHomePage();
        await jobPage.searchAndApply(jobData);
        await jobPage.pause(2);
    });

});
