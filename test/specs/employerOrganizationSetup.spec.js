import loginPage from '../pageobjects/login.page.js';
import employerLoginPage from '../pageobjects/employerLogin.page.js';
import employerOrganizationSetupPage from '../pageobjects/employerOrganizationSetup.page.js';
import { getEmployerSignupLogin } from '../data/employerSignupLogin.data.js';
import employerOrganizationSetupData from '../data/employerOrganizationSetup.data.js';

const APP_ID = 'com.nextenti.job.qa';

describe('Nextenti Employer Organization Setup Test', () => {

    beforeEach(async () => {
        await driver.execute('mobile: clearApp', { appId: APP_ID });
        await driver.execute('mobile: activateApp', { appId: APP_ID });
    });

    it('should login with signup credentials and set up organization profile', async () => {
        const employerSignupLoginData = await getEmployerSignupLogin();

        await loginPage.waitForLandingPage();
        await loginPage.pause(3);
        await loginPage.verifyLandingPageVisible();

        await employerLoginPage.clickForEmployerDropdown();
        await employerLoginPage.verifyEmployerDropdownOptionsVisible();
        await employerLoginPage.pause(3);

        await employerLoginPage.clickEmployerLogin();
        await employerLoginPage.waitForEmployerLoginForm();

        await employerLoginPage.fillLoginForm(employerSignupLoginData.phoneNumber,employerSignupLoginData.password);

        await employerLoginPage.pressDoneOnKeyboard();
        await employerLoginPage.clickLogin();

        await employerOrganizationSetupPage.waitForOrganizationProfilePage();
        await employerOrganizationSetupPage.verifyOrganizationProfilePageVisible();
        await employerOrganizationSetupPage.clickOrganizationTypeDropdown();
        await employerOrganizationSetupPage.selectHospital();
        await employerOrganizationSetupPage.verifyHospitalDetailsVisible();
        await employerOrganizationSetupPage.clickHospitalProfileSection();
        await employerOrganizationSetupPage.verifyHospitalProfileFieldsVisible();
        await employerOrganizationSetupPage.clickAuthorizedPersonDetailsSection();
        await employerOrganizationSetupPage.verifyAuthorizedPersonDetailsFieldsVisible();
        await employerOrganizationSetupPage.pause(2);
        await employerOrganizationSetupPage.clickBillingDetailsSection();
        await employerOrganizationSetupPage.pause(2);   
        await employerOrganizationSetupPage.verifyBillingDetailsFieldsVisible();
        await employerOrganizationSetupPage.scrollUntilDisplayed(employerOrganizationSetupPage.hospitalProfileSection,'up');
        await employerOrganizationSetupPage.clickHospitalProfileSection();
        await employerOrganizationSetupPage.pause(3);
        await employerOrganizationSetupPage.fillHospitalProfile(employerOrganizationSetupData);
        await employerOrganizationSetupPage.clickAuthorizedPersonDetailsSection();
        await employerOrganizationSetupPage.pause(3);
        await employerOrganizationSetupPage.fillAuthorizedPersonDetails(employerOrganizationSetupData);
        await employerOrganizationSetupPage.clickBillingDetailsSection();
        await employerOrganizationSetupPage.pause(3);
        await employerOrganizationSetupPage.fillBillingDetails(employerOrganizationSetupData);
        await employerOrganizationSetupPage.clickContinue();
        await employerOrganizationSetupPage.verifyTermsAndConditionsOptionsVisible();
        await employerOrganizationSetupPage.chooseTermsAndConditionsAction(employerOrganizationSetupData);
        await employerLoginPage.waitForHomePage();
    });
});
