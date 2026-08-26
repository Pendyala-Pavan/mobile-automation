import loginPage from '../pageobjects/login.page.js';
import jobInvitesPage from '../pageobjects/jobInvites.page.js';
import loginData from '../data/login.data.js';

const APP_ID = 'com.nextenti.job.qa';

describe('Nextenti Job Invites Test', () => {
    beforeEach(async () => {
        await driver.execute('mobile: clearApp', { appId: APP_ID });
        await driver.execute('mobile: activateApp', { appId: APP_ID });
    });

    it('should open Job Invites after login', async function () {
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

        await jobInvitesPage.openJobInvites();
        await jobInvitesPage.pause(2);

        await jobInvitesPage.openFilters();
        await jobInvitesPage.pause(1);

        await jobInvitesPage.openJobDuration();
        await jobInvitesPage.verifyJobDurationOptionsVisible();

        await jobInvitesPage.openJobType();
        await jobInvitesPage.verifyJobTypeOptionsVisible();
    });
});
