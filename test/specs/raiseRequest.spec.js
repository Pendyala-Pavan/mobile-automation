import loginPage from '../pageobjects/login.page.js';
import raiseRequestPage from '../pageobjects/raiseRequest.page.js';
import loginData from '../data/login.data.js';

const APP_ID = 'com.nextenti.job.qa';

describe('Nextenti Offered Job Actions Visibility Test', () => {
    beforeEach(async () => {
        await driver.execute('mobile: clearApp', { appId: APP_ID });
        await driver.execute('mobile: activateApp', { appId: APP_ID });
    });

    it('should display Raise Request, Decline and Accept Offer', async function () {
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

        await raiseRequestPage.openOfferedJobs();
        await raiseRequestPage.pause(3);

        await raiseRequestPage.openFirstOfferedJob();
        await raiseRequestPage.pause(3);

        await raiseRequestPage.verifyOfferActionsVisible();

        await raiseRequestPage.returnToOfferedJobs();
        await raiseRequestPage.pause(3);
    });
});
