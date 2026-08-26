import loginPage from '../pageobjects/login.page.js';
import employerLoginPage from '../pageobjects/employerLogin.page.js';
import employerHomePage from '../pageobjects/employerHome.page.js';
import employerDashboardPage from '../pageobjects/employerDashboard.page.js';
import employerLoginData from '../data/employerLogin.data.js';

const APP_ID = 'com.nextenti.job.qa';

describe('Nextenti Employer Dashboard Visibility Test', () => {

    beforeEach(async () => {
        await driver.execute('mobile: clearApp', { appId: APP_ID });
        await driver.execute('mobile: activateApp', { appId: APP_ID });
    });

    it('should open the employer dashboard after successful login', async function () {
        this.timeout(150000);

        await loginPage.waitForLandingPage();
        await loginPage.pause(3);
        await loginPage.verifyLandingPageVisible();

        await employerLoginPage.clickForEmployerDropdown();
        await employerLoginPage.verifyEmployerDropdownOptionsVisible();
        await employerLoginPage.clickEmployerLogin();
        await employerLoginPage.waitForEmployerLoginForm();

        await employerLoginPage.fillLoginForm(
            employerLoginData.phoneNumber2,
            employerLoginData.password2
        );

        await employerLoginPage.pressDoneOnKeyboard();
        await employerLoginPage.clickLogin();
        await employerLoginPage.waitForHomePage();

        await employerHomePage.verifyEmployerHomePageVisible();

        await employerDashboardPage.clickDashboard();
        await employerDashboardPage.pause(2);
        await employerDashboardPage.verifyEmployerDashboardVisible();
        await employerDashboardPage.pause(2);
    });
});
