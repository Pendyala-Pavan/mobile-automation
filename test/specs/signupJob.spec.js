import loginPage from '../pageobjects/login.page.js';
import signupJobPage from '../pageobjects/signupJob.page.js';
import { getSignupLogin } from '../data/signupLogin.data.js';
import jobData from '../data/job.data.js';

const APP_ID = 'com.nextenti.job.qa';

describe('Apply Job With Signup Account', () => {

    beforeEach(async () => {
        await driver.execute('mobile: clearApp', { appId: APP_ID });
        await driver.execute('mobile: activateApp', { appId: APP_ID });
    });

    it('should login with signup credentials and apply for a job', async function () {
        this.timeout(200000);

        const signupLoginData = await getSignupLogin();

        await loginPage.waitForLandingPage();
        await loginPage.pause(3);
        await loginPage.verifyLandingPageVisible();
        await loginPage.clickLandingLogin();
        await loginPage.pause(3);
        await loginPage.waitForLoginForm();

        await loginPage.fillLoginFormWithRetry(
            signupLoginData.phoneNumber,
            signupLoginData.password
        );

        await loginPage.pressDoneOnKeyboard();
        await loginPage.clickLogin();
        await loginPage.waitForHomePage();

        await signupJobPage.applyForJob(jobData);
    });
});
