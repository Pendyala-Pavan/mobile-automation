import Page from './Base.page.js';

class LoginPage extends Page {

    get landingLoginButton() {
        return $('~Login');
    }

    get forEmployerText() {
        return $('~For Employer');
    }

    get indiasLeadingText() {
        return $('~India’s Leading');
    }

    get healthcareRecruitmentText() {
        return $('~Healthcare Recruitment Platform');
    }

    get searchJobsLandingButton() {
        return $('~Search By Job Title / Organization / Location');
    }

    get discoverHealthcareJobsText() {
        return $('~Discover Healthcare Jobs');
    }

    get exploreOpeningsText() {
        return $('~Explore openings across hospitals, clinics, pharma, biotech, healthcare IT and all healthcare organizations');
    }

    get landingLoginButtonCheck() {
        return $('~Login');
    }

    get landingSignupButtonCheck() {
        return $('~Signup');
    }

    get needHelpButton() {
        return $('~Need Help?');
    }

    get copyrightText() {
        return $('~Copyright © 2026 Nextenti. All rights reserved');
    }

    get emailField() {
        return $('id=login_email_or_phone_field');
    }

    get passwordField() {
        return $('id=login_password_field');
    }

    get loginButton() {
        return $('//android.widget.Button[@content-desc="Login"]');
    }

    get homeMenuButton() {
        return $('id=common_header_drawer_icon');
    }

    get invalidCredentialsError() {
        return $('~User doesnot exists, please sign up/ register');
    }
    get invalidPasswordError() {
        return $('~Invalid Password');
    }
    get invalidUsernameError() {
        return $('~User doesnot exists, please sign up/ register');
    }

    get emailValidationError() {
        return $('~Please enter an email id or mobile number');
    }

    get passwordValidationError() {
        return $('~Password is required');
    }

    async waitForLandingPage() {
        await this.waitForElement(this.landingLoginButton);
    }

    async forEmployerTextVisible() {
        return await this.forEmployerText.isDisplayed().catch(() => false);
    }

    async indiasLeadingTextVisible() {
        return await this.indiasLeadingText.isDisplayed().catch(() => false);
    }

    async healthcareRecruitmentTextVisible() {
        return await this.healthcareRecruitmentText.isDisplayed().catch(() => false);
    }

    async searchJobsLandingButtonVisible() {
        return await this.searchJobsLandingButton.isDisplayed().catch(() => false);
    }

    async discoverHealthcareJobsTextVisible() {
        return await this.discoverHealthcareJobsText.isDisplayed().catch(() => false);
    }

    async exploreOpeningsTextVisible() {
        return await this.exploreOpeningsText.isDisplayed().catch(() => false);
    }

    async landingLoginButtonVisible() {
        return await this.landingLoginButtonCheck.isDisplayed().catch(() => false);
    }

    async landingSignupButtonVisible() {
        return await this.landingSignupButtonCheck.isDisplayed().catch(() => false);
    }

    async needHelpButtonVisible() {
        return await this.needHelpButton.isDisplayed().catch(() => false);
    }

    async copyrightTextVisible() {
        return await this.copyrightText.isDisplayed().catch(() => false);
    }

    async verifyLandingPageVisible() {
        if (!(await this.forEmployerTextVisible())) {
            throw new Error('Landing page is missing "For Employer"');
        }
        if (!(await this.indiasLeadingTextVisible())) {
            throw new Error('Landing page is missing "India’s Leading"');
        }
        if (!(await this.healthcareRecruitmentTextVisible())) {
            throw new Error('Landing page is missing "Healthcare Recruitment Platform"');
        }
        if (!(await this.searchJobsLandingButtonVisible())) {
            throw new Error('Landing page is missing "Search Jobs" button');
        }
        if (!(await this.discoverHealthcareJobsTextVisible())) {
            throw new Error('Landing page is missing "Discover Healthcare Jobs"');
        }
        if (!(await this.exploreOpeningsTextVisible())) {
            throw new Error('Landing page is missing "Explore openings..." description');
        }
        if (!(await this.landingLoginButtonVisible())) {
            throw new Error('Landing page is missing Login button');
        }
        if (!(await this.landingSignupButtonVisible())) {
            throw new Error('Landing page is missing Signup button');
        }
        if (!(await this.needHelpButtonVisible())) {
            throw new Error('Landing page is missing "Need Help?" button');
        }
        if (!(await this.copyrightTextVisible())) {
            throw new Error('Landing page is missing Copyright text');
        }
    }

    async clickLandingLogin() {
        await this.click(this.landingLoginButton);
    }

    async waitForLoginForm() {
        await this.waitForElement(this.emailField);
        await this.waitForElement(this.passwordField);
    }

    async waitForHomePage() {
        await this.homeMenuButton.waitForDisplayed({ timeout: 20000 });
        await this.pause(4);
    }

    async enterMobileOrEmail(username) {
        await this.setText(this.emailField, username);
        await this.verifyTextEntered(this.emailField, username);
    }

    async enterPassword(password) {
        await this.setText(this.passwordField, password);
        await this.waitForPasswordEntered(this.passwordField, password.length);
    }

    async pressDoneOnKeyboard() {
        try {

            await driver.execute('mobile: performEditorAction', { action: 'done' });
        } catch (error) {

            try {
                await driver.hideKeyboard();
            } catch (hideError) {
               
            }
        }

        await this.pause(1);
    }

    async clickLogin() {
        await this.click(this.loginButton);
    }

    async getInvalidCredentialsErrorText() {
        await this.waitForElement(this.invalidCredentialsError);
        return await this.invalidCredentialsError.getAttribute('content-desc');
    }
    async getInvalidPasswordErrorText() {
        await this.waitForElement(this.invalidPasswordError);
        return await this.invalidPasswordError.getAttribute('content-desc');
    }
    async getInvalidUsernameErrorText() {
        await this.waitForElement(this.invalidUsernameError);
        return await this.invalidUsernameError.getAttribute('content-desc');
    }

    async getEmailValidationErrorText() {
        await this.waitForElement(this.emailValidationError);
        return await this.emailValidationError.getAttribute('content-desc');
    }

    async getPasswordValidationErrorText() {
        await this.waitForElement(this.passwordValidationError);
        return await this.passwordValidationError.getAttribute('content-desc');
    }

    async fillLoginForm(username, password) {
        await this.enterMobileOrEmail(username);
        await this.enterPassword(password);
    }

    async fillLoginFormWithRetry(username, password) {
        try {
            await this.fillLoginForm(username, password);
        } catch (error) {
            const bouncedToLandingPage = await this.landingLoginButton.isDisplayed().catch(() => false);
            if (!bouncedToLandingPage) {
                throw error;
            }

            await this.clickLandingLogin();
            await this.waitForLoginForm();
            await this.fillLoginForm(username, password);
        }
    }

}

export default new LoginPage();
