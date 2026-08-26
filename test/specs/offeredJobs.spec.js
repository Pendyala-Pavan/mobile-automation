import loginPage from '../pageobjects/login.page.js';
import offeredJobsPage from '../pageobjects/offeredJobs.page.js';
import loginData from '../data/login.data.js';

const APP_ID = 'com.nextenti.job.qa';

describe('Nextenti Offered Jobs Test', () => {
    beforeEach(async () => {
        await driver.execute('mobile: clearApp', { appId: APP_ID });
        await driver.execute('mobile: activateApp', { appId: APP_ID });
    });

    it('should open the first offered job and return', async function () {
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

        await offeredJobsPage.openOfferedJobs();
        await offeredJobsPage.pause(3);

        await offeredJobsPage.openFirstOfferedJob();
        await offeredJobsPage.pause(3);

        await offeredJobsPage.verifyOfferActionsVisible();

        await offeredJobsPage.returnToOfferedJobs();
        await offeredJobsPage.pause(3);
    });
});
