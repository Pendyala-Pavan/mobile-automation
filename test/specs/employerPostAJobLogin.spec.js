import loginPage from '../pageobjects/login.page.js';
import employerPostAJobLoginPage from '../pageobjects/employerPostAJobLogin.page.js';
import employerLoginData from '../data/employerLogin.data.js';

const APP_ID = 'com.nextenti.job.qa';

describe('Nextenti Post a Job Login Test', () => {

    beforeEach(async () => {

        await driver.execute('mobile: clearApp', { appId: APP_ID });
        await driver.execute('mobile: activateApp', { appId: APP_ID });
    });

    it('should login with valid employer credentials through Post a Job', async () => {

        await loginPage.waitForLandingPage();
        await loginPage.pause(2);
        await loginPage.verifyLandingPageVisible();
        await employerPostAJobLoginPage.clickForEmployerDropdown();
        await employerPostAJobLoginPage.verifyEmployerDropdownOptionsVisible();
        await employerPostAJobLoginPage.clickPostAJob();
        await employerPostAJobLoginPage.waitForEmployerLoginForm();
        await employerPostAJobLoginPage.fillLoginForm(employerLoginData.phoneNumber,employerLoginData.password);
        await employerPostAJobLoginPage.pressDoneOnKeyboard();
        await employerPostAJobLoginPage.clickLogin();
        await employerPostAJobLoginPage.pause(3);
    });
});
