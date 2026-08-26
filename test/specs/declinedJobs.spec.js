import loginPage from '../pageobjects/login.page.js';
import declinedJobsPage from '../pageobjects/declinedJobs.page.js';
import loginData from '../data/login.data.js';

const APP_ID = 'com.nextenti.job.qa';

describe('Nextenti Declined Jobs Test', () => {
    beforeEach(async () => {
        await driver.execute('mobile: clearApp', { appId: APP_ID });
        await driver.execute('mobile: activateApp', { appId: APP_ID });
    });

    it('should verify the first declined job and return', async function () {
        this.timeout(150000);

        await loginPage.waitForLandingPage();
        await loginPage.pause(3);
        await loginPage.verifyLandingPageVisible();
        await loginPage.clickLandingLogin();
        await loginPage.pause(3);
        await loginPage.waitForLoginForm();

        await loginPage.fillLoginFormWithRetry(
            loginData.username,
            loginData.password
        );

        await loginPage.pressDoneOnKeyboard();
        await loginPage.clickLogin();
        await loginPage.waitForHomePage();

        await declinedJobsPage.openDeclinedJobs();
        await declinedJobsPage.pause(3);

        await declinedJobsPage.openFirstDeclinedJob();
        await declinedJobsPage.pause(3);

        await declinedJobsPage.verifyOfferDeclinedVisible();

        await declinedJobsPage.returnToDeclinedJobs();
        await declinedJobsPage.pause(3);
    });
});
