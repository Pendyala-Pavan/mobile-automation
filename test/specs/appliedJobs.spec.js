import loginPage from '../pageobjects/login.page.js';
import appliedJobsPage from '../pageobjects/appliedJobs.page.js';
import loginData from '../data/login.data.js';

const APP_ID = 'com.nextenti.job.qa';

describe('Nextenti Applied Jobs Test', () => {
    beforeEach(async () => {
        await driver.execute('mobile: clearApp', { appId: APP_ID });
        await driver.execute('mobile: activateApp', { appId: APP_ID });
    });

    it('should navigate to Applied Jobs after login', async function () {
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
        await appliedJobsPage.openAppliedJobs();
        await appliedJobsPage.pause(3);

        await appliedJobsPage.openFirstAppliedJob();
        await appliedJobsPage.pause(3);

        await appliedJobsPage.returnToAppliedJobs();
        await appliedJobsPage.pause(3);
    });
});
