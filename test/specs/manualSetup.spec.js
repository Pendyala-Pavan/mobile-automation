import loginPage from '../pageobjects/login.page.js';
import manualSetupPage from '../pageobjects/manualSetup.page.js';
import uploadResumePage from '../pageobjects/uploadResume.page.js';
import manualSetupData from '../data/manualSetup.data.js';
import { getSignupLogin } from '../data/signupLogin.data.js';

const APP_ID = 'com.nextenti.job.qa';

describe('Nextenti Manual Profile Setup Test', () => {

    beforeEach(async () => {
        await driver.execute('mobile: clearApp', { appId: APP_ID });
        await driver.execute('mobile: activateApp', { appId: APP_ID });
    });

    it('should verify both profile setup options and select Manual Profile Setup', async () => {
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
        await uploadResumePage.waitForUploadResumePage();
        await uploadResumePage.verifyUploadResumePageVisible();
        await uploadResumePage.pause(3);
        await manualSetupPage.clickManualProfileSetup();
        await manualSetupPage.pause(4);
        await manualSetupPage.verifyCompleteProfileOptionsVisible();
        await manualSetupPage.chooseProfileType(manualSetupData.profileType);
        await manualSetupPage.pause(3);
        await manualSetupPage.verifyProfileDetailsSectionsVisible(manualSetupData.profileType);
        await manualSetupPage.clickPersonalDetailsSection();
        await manualSetupPage.pause(3);
        await manualSetupPage.verifyPersonalDetailsFieldsVisible();
        await manualSetupPage.clickEducationDetailsSection();
        await manualSetupPage.pause(2);
        await manualSetupPage.verifyEducationDetailsFieldsVisible();
        await manualSetupPage.verifyWorkSection(manualSetupData.profileType);
        await manualSetupPage.clickJobPreferenceSection();
        await manualSetupPage.pause(3);
        await manualSetupPage.verifyJobPreferenceFieldsVisible();
        await manualSetupPage.scrollUntilDisplayed(manualSetupPage.personalDetailsSection,'up',);
        await manualSetupPage.clickPersonalDetailsSection();
        await manualSetupPage.pause(3);
        await manualSetupPage.fillPersonalDetails(manualSetupData);
        await manualSetupPage.clickEducationDetailsSection();
        await manualSetupPage.pause(2);
        await manualSetupPage.fillEducationDetails(manualSetupData);
        await manualSetupPage.pause(2);
        await manualSetupPage.completeWorkDetails(manualSetupData);
        await manualSetupPage.clickJobPreferenceSection();
        await manualSetupPage.pause(2);
        await manualSetupPage.fillJobPreference(manualSetupData);
        await manualSetupPage.clickContinue();
        await manualSetupPage.pause(2);
        await manualSetupPage.homeMenuButtonVisible();
    });
});
