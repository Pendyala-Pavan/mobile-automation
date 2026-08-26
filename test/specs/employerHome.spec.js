import loginPage from '../pageobjects/login.page.js';
import employerLoginPage from '../pageobjects/employerLogin.page.js';
import employerHomePage from '../pageobjects/employerHome.page.js';
import employerLoginData from '../data/employerLogin.data.js';

const APP_ID = 'com.nextenti.job.qa';

describe('Nextenti Employer Home Page Visibility Test', () => {

    beforeEach(async () => {
        await driver.execute('mobile: clearApp', { appId: APP_ID });
        await driver.execute('mobile: activateApp', { appId: APP_ID });
    });

    it('should display all employer home page fields after successful login', async function () {
        this.timeout(150000);

        await loginPage.waitForLandingPage();
        await loginPage.pause(3);
        await loginPage.verifyLandingPageVisible();

        await employerLoginPage.clickForEmployerDropdown();
        await employerLoginPage.verifyEmployerDropdownOptionsVisible();
        await employerLoginPage.clickEmployerLogin();
        await employerLoginPage.waitForEmployerLoginForm();

        await employerLoginPage.fillLoginForm(employerLoginData.phoneNumber2,employerLoginData.password2);

        await employerLoginPage.pressDoneOnKeyboard();
        await employerLoginPage.clickLogin();
        await employerLoginPage.waitForHomePage();

        await employerHomePage.verifyEmployerHomePageVisible();
        await employerHomePage.clickPostedJobs();
        await employerHomePage.pause(3);
        await employerHomePage.verifyPostedJobsPageVisible();
        await employerHomePage.navigateBackToEmployerHomePage();
        await employerHomePage.pause(3);
        // await employerHomePage.verifyEmployerHomePageVisible();
        await employerHomePage.clickDraftedJobs();
        await employerHomePage.pause(3);
        await employerHomePage.verifyDraftedJobsPageVisible();
        await employerHomePage.navigateBackToEmployerHomePage();
        await employerHomePage.pause(3);
        // await employerHomePage.verifyEmployerHomePageVisible();
        await employerHomePage.clickCreateJob();
        await employerHomePage.pause(2);
        await employerHomePage.verifySubscriptionPopupVisible();
        await employerHomePage.clickSubscriptionCancel();
        await employerHomePage.pause(2);
        await employerHomePage.clickClosedJobs();
        await employerHomePage.pause(3);
        await employerHomePage.verifyClosedJobsPageVisible();
        await employerHomePage.navigateBackToEmployerHomePage();
        await employerHomePage.clickCancelledJobs();
        await employerHomePage.pause(3);
        await employerHomePage.verifyCancelledJobsPageVisible();
        await employerHomePage.navigateBackToEmployerHomePage();
        await employerHomePage.pause(3);
        await employerHomePage.clickTimesheetApproval();
        await employerHomePage.pause(2);
        await employerHomePage.navigateBackToEmployerHomePage();
        await employerHomePage.pause(3);
        await employerHomePage.clickTimesheetLogs();
        await employerHomePage.pause(3);
        await employerHomePage.verifyTimesheetLogsPageVisible();
        
    });
});
