import loginPage from '../pageobjects/login.page.js';
import employerLoginPage from '../pageobjects/employerLogin.page.js';
import employerLoginData from '../data/employerLogin.data.js';

const APP_ID = 'com.nextenti.job.qa';

describe('Nextenti Employer Login Test', () => {

    beforeEach(async () => {

        await driver.execute('mobile: clearApp', { appId: APP_ID });
        await driver.execute('mobile: activateApp', { appId: APP_ID });
    });

    it('should login successfully with valid employer credentials', async () => {

        await loginPage.waitForLandingPage();
        await loginPage.pause(2);
        await loginPage.verifyLandingPageVisible();

        await employerLoginPage.clickForEmployerDropdown();
        await employerLoginPage.verifyEmployerDropdownOptionsVisible();
        await employerLoginPage.clickEmployerLogin();
        await employerLoginPage.waitForEmployerLoginForm();

        await employerLoginPage.fillLoginForm(
            employerLoginData.phoneNumber,
            employerLoginData.password
        );

        await employerLoginPage.pressDoneOnKeyboard();
        await employerLoginPage.clickLogin();
        await employerLoginPage.waitForHomePage();
    });

    it('should not login with invalid employer credentials', async () => {

        await loginPage.waitForLandingPage();
        await loginPage.pause(3);
        await loginPage.verifyLandingPageVisible();
        await employerLoginPage.clickForEmployerDropdown();
        await employerLoginPage.verifyEmployerDropdownOptionsVisible();
        await employerLoginPage.clickEmployerLogin();
        await employerLoginPage.waitForEmployerLoginForm();
        await employerLoginPage.fillLoginForm(employerLoginData.invalidPhoneNumber,employerLoginData.invalidPassword);
        await employerLoginPage.pressDoneOnKeyboard();
        await employerLoginPage.clickLogin();
        const expectedErrorMessage = 'User doesnot exists, please sign up/ register';
        const actualErrorMessage = await employerLoginPage.getInvalidCredentialsErrorText();
        expect(actualErrorMessage).toEqual(expectedErrorMessage);
    });

    it('should not login with valid phone number and invalid password', async () => {

        await loginPage.waitForLandingPage();
        await loginPage.pause(3);
        await loginPage.verifyLandingPageVisible();
        await employerLoginPage.clickForEmployerDropdown();
        await employerLoginPage.verifyEmployerDropdownOptionsVisible();
        await employerLoginPage.clickEmployerLogin();
        await employerLoginPage.waitForEmployerLoginForm();
        await employerLoginPage.fillLoginForm(employerLoginData.phoneNumber,employerLoginData.invalidPassword);
        await employerLoginPage.pressDoneOnKeyboard();
        await employerLoginPage.clickLogin();
        const expectedErrorMessage = 'Invalid Password';
        const actualErrorMessage = await employerLoginPage.getInvalidPasswordErrorText();
        expect(actualErrorMessage).toEqual(expectedErrorMessage);
    });

    it('should not login with invalid phone number and valid password', async () => {

        await loginPage.waitForLandingPage();
        await loginPage.pause(3);
        await loginPage.verifyLandingPageVisible();
        await employerLoginPage.clickForEmployerDropdown();
        await employerLoginPage.verifyEmployerDropdownOptionsVisible();
        await employerLoginPage.clickEmployerLogin();
        await employerLoginPage.waitForEmployerLoginForm();
        await employerLoginPage.fillLoginForm(employerLoginData.invalidPhoneNumber,employerLoginData.password);
        await employerLoginPage.pressDoneOnKeyboard();
        await employerLoginPage.clickLogin();
        const expectedErrorMessage = 'User doesnot exists, please sign up/ register';
        const actualErrorMessage = await employerLoginPage.getInvalidCredentialsErrorText();
        expect(actualErrorMessage).toEqual(expectedErrorMessage);
    });

    it('should show validation errors when Login is clicked with empty fields', async () => {

        await loginPage.waitForLandingPage();
        await loginPage.pause(3);
        await loginPage.verifyLandingPageVisible();
        await employerLoginPage.clickForEmployerDropdown();
        await employerLoginPage.verifyEmployerDropdownOptionsVisible();
        await employerLoginPage.clickEmployerLogin();
        await employerLoginPage.waitForEmployerLoginForm();
        await employerLoginPage.clickLogin();
        const expectedPhoneNumberError = 'Please enter an email id or mobile number';
        const actualPhoneNumberError = await employerLoginPage.getPhoneNumberValidationErrorText();
        expect(actualPhoneNumberError).toEqual(expectedPhoneNumberError);
        const expectedPasswordError = 'Password is required';
        const actualPasswordError = await employerLoginPage.getPasswordValidationErrorText();
        expect(actualPasswordError).toEqual(expectedPasswordError);
    });

    it('should show validation error when Login is clicked with empty password field', async () => {

        await loginPage.waitForLandingPage();
        await loginPage.pause(3);
        await loginPage.verifyLandingPageVisible();
        await employerLoginPage.clickForEmployerDropdown();
        await employerLoginPage.verifyEmployerDropdownOptionsVisible();
        await employerLoginPage.clickEmployerLogin();
        await employerLoginPage.waitForEmployerLoginForm();
        await employerLoginPage.enterPhoneNumber(employerLoginData.phoneNumber);
        await employerLoginPage.pressDoneOnKeyboard();
        await employerLoginPage.clickLogin();
        const expectedPasswordError = 'Password is required';
        const actualPasswordError = await employerLoginPage.getPasswordValidationErrorText();
        expect(actualPasswordError).toEqual(expectedPasswordError);
    });

    it('should show validation error when Login is clicked with empty phone number field', async () => {

        await loginPage.waitForLandingPage();
        await loginPage.pause(3);
        await loginPage.verifyLandingPageVisible();
        await employerLoginPage.clickForEmployerDropdown();
        await employerLoginPage.verifyEmployerDropdownOptionsVisible();
        await employerLoginPage.clickEmployerLogin();
        await employerLoginPage.waitForEmployerLoginForm();
        await employerLoginPage.enterPassword(employerLoginData.password);
        await employerLoginPage.pressDoneOnKeyboard();
        await employerLoginPage.clickLogin();
        const expectedPhoneNumberError = 'Please enter an email id or mobile number';
        const actualPhoneNumberError = await employerLoginPage.getPhoneNumberValidationErrorText();
        expect(actualPhoneNumberError).toEqual(expectedPhoneNumberError);
    });
});
