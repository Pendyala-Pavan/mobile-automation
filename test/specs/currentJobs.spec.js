import loginPage from '../pageobjects/login.page.js';
import currentJobsPage from '../pageobjects/currentJobs.page.js';
import loginData from '../data/login.data.js';

const APP_ID = 'com.nextenti.job.qa';

describe('Nextenti Current Jobs Test', () => {
    beforeEach(async () => {
        await driver.execute('mobile: clearApp', { appId: APP_ID });
        await driver.execute('mobile: activateApp', { appId: APP_ID });
    });

    it('should open Current Jobs and return Home', async function () {
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

        await currentJobsPage.openCurrentJobs();
        await currentJobsPage.pause(3);

        await currentJobsPage.returnToHome();
        await currentJobsPage.pause(3);
    });
});
