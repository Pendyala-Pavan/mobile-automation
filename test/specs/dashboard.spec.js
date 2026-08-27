import dashboardPage from '../pageobjects/dashboard.page.js';
import homePage from '../pageobjects/home.page.js';
import loginPage from '../pageobjects/login.page.js';
import loginData from '../data/login.data.js';

const APP_ID = 'com.nextenti.job.qa';

describe('Nextenti Dashboard Page Visibility Test', () => {

    beforeEach(async () => {
        await driver.execute('mobile: clearApp', { appId: APP_ID });
        await driver.execute('mobile: activateApp', { appId: APP_ID });
    });

    it('should display all dashboard fields after clicking Dashboard', async function () {
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
        await homePage.verifyHomePageVisible();
        await dashboardPage.clickDashboard();
        await dashboardPage.pause(3);
        await dashboardPage.verifyDashboardPageVisible();
        await dashboardPage.scroll('up');
        await dashboardPage.scroll('up');
        await dashboardPage.clickappliedjobs();
        await dashboardPage.pause(3);
        await dashboardPage.clickDashboard();
        await dashboardPage.pause(3);
        await dashboardPage.clickofferedjobs();
        await dashboardPage.pause(3);
        await dashboardPage.clickDashboard();
        await dashboardPage.pause(3);
        await dashboardPage.clickdeclinedjobs();
        await dashboardPage.pause(3);
        await dashboardPage.clickDashboard();
        await dashboardPage.pause(3);
        await dashboardPage.clickcurrentjobs();
        await dashboardPage.pause(3);
        await dashboardPage.clickJobsPopupCloseButton();
        await dashboardPage.pause(3);
        await dashboardPage.clickDashboard();
        await dashboardPage.pause(3);
        await dashboardPage.clickupcomingjobs();
        await dashboardPage.pause(3);
        await dashboardPage.clickJobsPopupCloseButton();
        await dashboardPage.pause(3);
        await dashboardPage.clickDashboard();
        await dashboardPage.pause(3);
        await dashboardPage.clickcompletedjobs();
        await dashboardPage.pause(3);
        await dashboardPage.clickDashboard();
        await dashboardPage.pause(3);
        
    });
});
