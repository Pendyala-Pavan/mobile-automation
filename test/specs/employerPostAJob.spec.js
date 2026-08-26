import loginPage from '../pageobjects/login.page.js';
import employerLoginPage from '../pageobjects/employerLogin.page.js';
import employerHomePage from '../pageobjects/employerHome.page.js';
import employerPostAJobPage from '../pageobjects/employerPostAJob.page.js';
import employerLoginData from '../data/employerLogin.data.js';
import employerPostAJobData from '../data/employerPostAJob.data.js';

const APP_ID = 'com.nextenti.job.qa';

describe('Post a Job Test', () => {

    beforeEach(async () => {
        await driver.execute('mobile: clearApp', { appId: APP_ID });
        await driver.execute('mobile: activateApp', { appId: APP_ID });
    });

    it('should open New Job from the employer Home page', async function () {
        this.timeout(200000);

        await loginPage.waitForLandingPage();
        await loginPage.verifyLandingPageVisible();
        await loginPage.pause(2);
        await employerLoginPage.clickForEmployerDropdown();
        await employerLoginPage.verifyEmployerDropdownOptionsVisible();
        await employerLoginPage.pause(2);
        await employerLoginPage.clickEmployerLogin();
        await employerLoginPage.waitForEmployerLoginForm();
        await employerLoginPage.pause(2);
        await employerLoginPage.fillLoginForm(
            employerLoginData.phoneNumber3,
            employerLoginData.password3
        );

        await employerLoginPage.pressDoneOnKeyboard();
        await employerLoginPage.clickLogin();
        await employerLoginPage.waitForHomePage();

        await employerHomePage.verifyEmployerHomePageVisible();
        await employerPostAJobPage.clickCreateJob();
        await employerPostAJobPage.pause(2);
        await employerPostAJobPage.waitForSelectJobTypePopup();
        await employerPostAJobPage.selectJobType(employerPostAJobData.jobType);
        await employerPostAJobPage.clickNext();

        await employerPostAJobPage.verifyNewJobPostPageVisible();
        await employerPostAJobPage.fillNewJobPostDetails(employerPostAJobData);
    });
});
