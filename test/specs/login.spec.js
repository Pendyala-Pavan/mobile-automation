import loginPage from '../pageobjects/login.page.js';
import loginData from '../data/login.data.js';

const APP_ID = 'com.nextenti.job.qa';

describe('Nextenti Login Test', () => {

    beforeEach(async () => {
        
        await driver.execute('mobile: clearApp', { appId: APP_ID });
        await driver.execute('mobile: activateApp', { appId: APP_ID });
    });

    it('should login successfully with valid credentials', async () => {

        await loginPage.waitForLandingPage();
        await loginPage.pause(2);
        await loginPage.verifyLandingPageVisible();
        await loginPage.clickLandingLogin();
        await loginPage.pause(2);
        await loginPage.waitForLoginForm();
        await loginPage.fillLoginFormWithRetry(loginData.username, loginData.password);
        await loginPage.pressDoneOnKeyboard();
        await loginPage.clickLogin();
        await loginPage.waitForHomePage();

    });

    it('should not login with invalid credentials', async () => {

        await loginPage.waitForLandingPage();
        await loginPage.pause(3);
        await loginPage.verifyLandingPageVisible();
        await loginPage.clickLandingLogin();
        await loginPage.pause(3);
        await loginPage.waitForLoginForm();
        await loginPage.fillLoginFormWithRetry(loginData.invalidUsername, loginData.invalidPassword);
        await loginPage.pressDoneOnKeyboard();
        await loginPage.clickLogin();
        const expectedErrorMessage = 'User doesnot exists, please sign up/ register';
        const actualErrorMessage = await loginPage.getInvalidCredentialsErrorText();
        expect(actualErrorMessage).toEqual(expectedErrorMessage);

    });
    it('should not login with valid username and invalid password', async () => {

        await loginPage.waitForLandingPage();
        await loginPage.pause(3);
        await loginPage.verifyLandingPageVisible();
        await loginPage.clickLandingLogin();
        await loginPage.pause(3);
        await loginPage.waitForLoginForm();
        await loginPage.fillLoginFormWithRetry(loginData.username, loginData.invalidPassword);
        await loginPage.pressDoneOnKeyboard();
        await loginPage.clickLogin();
        const expectedErrorMessage = 'Invalid Password';
        const actualErrorMessage = await loginPage.getInvalidPasswordErrorText();
        expect(actualErrorMessage).toEqual(expectedErrorMessage);

    });
    it ('should not login with invalid username and valid password', async () => {

        await loginPage.waitForLandingPage();
        await loginPage.pause(3);
        await loginPage.verifyLandingPageVisible();
        await loginPage.clickLandingLogin();
        await loginPage.pause(3);
        await loginPage.waitForLoginForm();
        await loginPage.fillLoginFormWithRetry(loginData.invalidUsername, loginData.password);
        await loginPage.pressDoneOnKeyboard();
        await loginPage.clickLogin();
        const expectedErrorMessage = 'User doesnot exists, please sign up/ register';
        const actualErrorMessage = await loginPage.getInvalidCredentialsErrorText();
        expect(actualErrorMessage).toEqual(expectedErrorMessage);

    });

    it('should show validation errors when Login is clicked with empty fields', async () => {

        await loginPage.waitForLandingPage();
        await loginPage.pause(3);
        await loginPage.verifyLandingPageVisible();
        await loginPage.clickLandingLogin();
        await loginPage.pause(3);
        await loginPage.waitForLoginForm();
        await loginPage.clickLogin();
        const expectedEmailError = 'Please enter an email id or mobile number';
        const actualEmailError = await loginPage.getEmailValidationErrorText();
        expect(actualEmailError).toEqual(expectedEmailError);
        const expectedPasswordError = 'Password is required';
        const actualPasswordError = await loginPage.getPasswordValidationErrorText();
        expect(actualPasswordError).toEqual(expectedPasswordError);

    });
    it('should show validation error when Login is clicked with empty password field', async () => {

        await loginPage.waitForLandingPage();
        await loginPage.pause(3);
        await loginPage.verifyLandingPageVisible();
        await loginPage.clickLandingLogin();
        await loginPage.pause(3);
        await loginPage.waitForLoginForm();
        await loginPage.enterMobileOrEmail(loginData.username);
        await loginPage.pressDoneOnKeyboard();
        await loginPage.clickLogin();
        const expectedPasswordError = 'Password is required';
        const actualPasswordError = await loginPage.getPasswordValidationErrorText();
        expect(actualPasswordError).toEqual(expectedPasswordError);
        
    });
    it('should show validation error when Login is clicked with empty username field', async () => {

        await loginPage.waitForLandingPage();
        await loginPage.pause(3);
        await loginPage.verifyLandingPageVisible();
        await loginPage.clickLandingLogin();
        await loginPage.pause(3);
        await loginPage.waitForLoginForm();
        await loginPage.enterPassword(loginData.password);
        await loginPage.pressDoneOnKeyboard();
        await loginPage.clickLogin();
        const expectedEmailError = 'Please enter an email id or mobile number';
        const actualEmailError = await loginPage.getEmailValidationErrorText();
        expect(actualEmailError).toEqual(expectedEmailError);

    });

});
