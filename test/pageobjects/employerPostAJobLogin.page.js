import Page from './Base.page.js';

class EmployerPostAJobLoginPage extends Page {

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

    async clickPostAJob() {
        await this.click(this.postAJobMenuItem);
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
}

export default new EmployerPostAJobLoginPage();
