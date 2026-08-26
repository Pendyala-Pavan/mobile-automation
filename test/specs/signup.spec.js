import signupPage from '../pageobjects/signup.page.js';
import loginPage from '../pageobjects/login.page.js';
import signupData from '../data/signup.data.js';
import uploadResumePage from '../pageobjects/uploadResume.page.js';
import { saveSignupLogin } from '../data/signupLogin.data.js';

const APP_ID = 'com.nextenti.job.qa';

describe('Nextenti Signup Test', () => {

    beforeEach(async () => {
        await driver.execute('mobile: clearApp', { appId: APP_ID });
        await driver.execute('mobile: activateApp', { appId: APP_ID });
    });

    it('should sign up successfully with a new mobile number and email', async function () {
        this.timeout(200000);

        const email = signupPage.randomYopmailEmail();
        await signupPage.waitForLandingPage();
        await signupPage.pause(2);
        await loginPage.verifyLandingPageVisible();
        await signupPage.clickLandingSignup();
        await signupPage.pause(2);
        const mobileNumber = signupPage.randomMobileNumber();
        await signupPage.enterMobileNumber(mobileNumber);
        await signupPage.setText(signupPage.firstNameField, signupData.firstName);
        await signupPage.verifyTextEntered(signupPage.firstNameField, signupData.firstName);
        await signupPage.setText(signupPage.lastNameField, signupData.lastName);
        await signupPage.verifyTextEntered(signupPage.lastNameField, signupData.lastName);
        await signupPage.setText(signupPage.emailField, email);
        await signupPage.verifyTextEntered(signupPage.emailField, email);
        await signupPage.clickEmailVerify();
        await signupPage.waitForEmailOtpPopup();
        await signupPage.pause(2);
        await signupPage.skipEmailOtp();
        await signupPage.pressDoneOnKeyboard();
        await signupPage.chooseOtpChannel(signupData.otpMode);
        await signupPage.pause(2);
        await signupPage.enterMobileOtp(signupData.mobileOtp);
        await signupPage.waitForOtpScreenToClose();
        await signupPage.pressDoneOnKeyboard();
        await signupPage.createPassword(signupData.accountPassword);
        await signupPage.pressDoneOnKeyboard();
        await signupPage.confirmPassword(signupData.accountPassword);
        await signupPage.pressDoneOnKeyboard();
        await signupPage.acceptTerms();
        await signupPage.clickCreateAccount();
        await uploadResumePage.waitForUploadResumePage();
        await saveSignupLogin(mobileNumber,signupData.accountPassword);

    });

});
