import loginPage from '../pageobjects/login.page.js';
import employerSignupPage from '../pageobjects/employerSignup.page.js';
import employerSignupData from '../data/employerSignup.data.js';
import { saveEmployerSignupLogin } from '../data/employerSignupLogin.data.js';

const APP_ID = 'com.nextenti.job.qa';

describe('Nextenti Employer Signup Test', () => {

    beforeEach(async () => {
        await driver.execute('mobile: clearApp', { appId: APP_ID });
        await driver.execute('mobile: activateApp', { appId: APP_ID });
    });

    it('should sign up an employer with a new mobile number and email', async function () {
        this.timeout(200000);

        const email = employerSignupPage.randomYopmailEmail();

        await loginPage.waitForLandingPage();
        await loginPage.pause(3);
        await loginPage.verifyLandingPageVisible();
        await employerSignupPage.clickForEmployerDropdown();
        await employerSignupPage.verifyEmployerDropdownOptionsVisible();
        await employerSignupPage.pause(3);
        await employerSignupPage.clickEmployerLogin();
        await employerSignupPage.verifyEmployerLoginPageVisible();
        await employerSignupPage.pause(3);
        await employerSignupPage.clickSignup();
        await employerSignupPage.pause(3);
        await employerSignupPage.verifyEmployerSignupPageVisible();
        await employerSignupPage.pause(3);

        const mobileNumber = employerSignupPage.randomMobileNumber();
        await employerSignupPage.enterMobileNumber(mobileNumber);
        await employerSignupPage.clickContinue();

        await employerSignupPage.verifyEmployerDetailsFormVisible();

        await employerSignupPage.enterFirstName(employerSignupData.firstName);
        await employerSignupPage.enterLastName(employerSignupData.lastName);
        await employerSignupPage.enterEmail(email);
        await employerSignupPage.clickEmailVerify();
        await employerSignupPage.waitForEmailOtpPopup();
        await employerSignupPage.pause(2);
        await employerSignupPage.skipEmailOtp();
        await employerSignupPage.pressDoneOnKeyboard();
        await employerSignupPage.chooseOtpChannel(employerSignupData.otpMode);
        await employerSignupPage.waitForMobileOtpPopup();
        await employerSignupPage.pause(2);
        await employerSignupPage.enterMobileOtp(employerSignupData.mobileOtp);
        await employerSignupPage.waitForOtpScreenToClose();
        await employerSignupPage.pressDoneOnKeyboard();
        await employerSignupPage.createPassword(employerSignupData.accountPassword);
        await employerSignupPage.pressDoneOnKeyboard();
        await employerSignupPage.confirmPassword(employerSignupData.accountPassword);
        await employerSignupPage.pressDoneOnKeyboard();
        await employerSignupPage.acceptTerms();
        await employerSignupPage.clickCreateAccount();
        await saveEmployerSignupLogin(
            mobileNumber,
            employerSignupData.accountPassword
        );
    });
});
