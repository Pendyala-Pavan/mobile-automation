import Page from './Base.page.js';

class EmployerLoginPage extends Page {

    get forEmployerDropdown() {
        return $('id=landing_for_employer_dropdown');
    }

    get employerLoginMenuItem() {
        return $('id=landing_employer_login_menu_item');
    }

    get postAJobMenuItem() {
        return $('id=landing_post_a_job_menu_item');
    }

    get requestHiringSupportMenuItem() {
        return $('id=landing_request_hiring_support_menu_item');
    }

    get employerLoginTitle() {
        return $('~Employer Login');
    }
    get continueWithGoogleButton() {
        return $('~Continue with Google');
    }

    get emailOrMobileField() {
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

    get phoneNumberValidationError() {
        return $('~Please enter an email id or mobile number');
    }

    get passwordValidationError() {
        return $('~Password is required');
    }

    async clickForEmployerDropdown() {
        await this.click(this.forEmployerDropdown);
    }

    async employerLoginMenuItemVisible() {
        return await this.employerLoginMenuItem.isDisplayed().catch(() => false);
    }

    async postAJobMenuItemVisible() {
        return await this.postAJobMenuItem.isDisplayed().catch(() => false);
    }

    async requestHiringSupportMenuItemVisible() {
        return await this.requestHiringSupportMenuItem.isDisplayed().catch(() => false);
    }

    async verifyEmployerDropdownOptionsVisible() {
        if (!(await this.employerLoginMenuItemVisible())) {
            throw new Error('For Employer dropdown is missing "Employer Login"');
        }

        if (!(await this.postAJobMenuItemVisible())) {
            throw new Error('For Employer dropdown is missing "Post a Job"');
        }

        if (!(await this.requestHiringSupportMenuItemVisible())) {
            throw new Error('For Employer dropdown is missing "Request Hiring Support"');
        }
    }

    async clickEmployerLogin() {
        await this.click(this.employerLoginMenuItem);
    }

    async waitForEmployerLoginForm() {
        await this.waitForElement(this.employerLoginTitle);
        await this.waitForElement(this.continueWithGoogleButton);
        await this.waitForElement(this.emailOrMobileField);
        await this.waitForElement(this.passwordField);
    }

    async enterPhoneNumber(phoneNumber) {
        await this.setText(this.emailOrMobileField, phoneNumber);
        await this.verifyTextEntered(this.emailOrMobileField, phoneNumber);
    }

    async enterPassword(password) {
        await this.setText(this.passwordField, password);
        await this.waitForPasswordEntered(this.passwordField, password.length);
    }

    async fillLoginForm(phoneNumber, password) {
        await this.enterPhoneNumber(phoneNumber);
        await this.enterPassword(password);
    }

    async pressDoneOnKeyboard() {
        try {
            await driver.execute('mobile: performEditorAction', { action: 'done' });
        } catch (error) {
            try {
                await driver.hideKeyboard();
            } catch (hideError) {
                // Keyboard was already closed.
            }
        }

        await this.pause(1);
    }

    async clickLogin() {
        await this.click(this.loginButton);
    }

    async waitForHomePage() {
        await this.homeMenuButton.waitForDisplayed({ timeout: 20000 });
        await this.pause(4);
    }

    async getInvalidCredentialsErrorText() {
        await this.waitForElement(this.invalidCredentialsError);
        return await this.invalidCredentialsError.getAttribute('content-desc');
    }

    async getInvalidPasswordErrorText() {
        await this.waitForElement(this.invalidPasswordError);
        return await this.invalidPasswordError.getAttribute('content-desc');
    }

    async getPhoneNumberValidationErrorText() {
        await this.waitForElement(this.phoneNumberValidationError);
        return await this.phoneNumberValidationError.getAttribute('content-desc');
    }

    async getPasswordValidationErrorText() {
        await this.waitForElement(this.passwordValidationError);
        return await this.passwordValidationError.getAttribute('content-desc');
    }

  
}

export default new EmployerLoginPage();
