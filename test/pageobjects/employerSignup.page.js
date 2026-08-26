import Page from './Base.page.js';

class EmployerSignupPage extends Page {

    randomDigits(count) {
        let digits = '';
        for (let i = 0; i < count; i++) {
            digits += Math.floor(Math.random() * 10);
        }
        return digits;
    }

    randomMobileNumber() {
        const firstDigit = Math.random() < 0.5 ? '2' : '3';
        return firstDigit + this.randomDigits(9);
    }

    randomYopmailEmail() {
        const letters = 'abcdefghijklmnopqrstuvwxyz';
        let name = '';

        for (let i = 0; i < 8; i++) {
            name += letters[Math.floor(Math.random() * letters.length)];
        }

        return `${name}@yopmail.com`;
    }

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
        return $('id=login_google_signin_button');
    }

    get emailOrMobileField() {
        return $('id=login_email_or_phone_field');
    }

    get passwordField() {
        return $('id=login_password_field');
    }

    get forgotPasswordButton() {
        return $('id=login_forgot_password_button');
    }

    get loginButton() {
        return $('id=login_submit_button');
    }

    get newToNextentiText() {
        return $('~New to Nextenti? ');
    }

    get signupButton() {
        return $('id=login_sign_up_button');
    }

    get signupBackButton() {
        return $('id=register_back_icon');
    }

    get signupLoginButton() {
        return $('//android.widget.Button[@content-desc="Login"]');
    }

    get employerSignupTitle() {
        return $('~Employer Sign Up');
    }

    get signupGoogleButton() {
        return $('//android.widget.ImageView[@content-desc="Continue with Google"]');
    }

    get orText() {
        return $('~or');
    }

    get mobileNumberText() {
        return $('~Mobile Number');
    }

    get phoneCodeDropdown() {
        return $('id=register_phone_code_dropdown');
    }

    get registerPhoneField() {
        return $('id=register_phone_field');
    }

    get mobileNumberCounter() {
        return $('~10 characters remaining');
    }

    get registerContinueButton() {
        return $('//android.widget.Button[@content-desc="Continue"]');
    }

    get firstNameField() {
        return $('id=user_signup_first_name_field');
    }

    get lastNameField() {
        return $('id=user_signup_last_name_field');
    }

    get emailField() {
        return $('id=user_signup_email_field');
    }

    get emailVerifyButton() {
        return $('~Verify');
    }

    get emailOtpPopup() {
        return $('id=verify_email_otp_popup_otp_field');
    }

    get emailOtpSkipButton() {
        return $('~Skip');
    }

    get smsOtpChannelButton() {
        return $('id=otp_method_sms_button');
    }

    get whatsAppOtpChannelButton() {
        return $('id=otp_method_whatsapp_button');
    }

    get mobileOtpPopup() {
        return $('id=verify_otp_popup_otp_field');
    }

    get createPasswordField() {
        return $('id=user_signup_create_password_field');
    }

    get confirmPasswordField() {
        return $('id=user_signup_confirm_password_field');
    }

    get termsCheckbox() {
        return $('id=user_signup_terms_and_conditions_checkbox');
    }

    get createAccountButton() {
        return $('~Create Account');
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

    async employerLoginTitleVisible() {
        return await this.employerLoginTitle.isDisplayed().catch(() => false);
    }

    async continueWithGoogleButtonVisible() {
        return await this.continueWithGoogleButton.isDisplayed().catch(() => false);
    }

    async emailOrMobileFieldVisible() {
        return await this.emailOrMobileField.isDisplayed().catch(() => false);
    }

    async passwordFieldVisible() {
        return await this.passwordField.isDisplayed().catch(() => false);
    }

    async forgotPasswordButtonVisible() {
        return await this.forgotPasswordButton.isDisplayed().catch(() => false);
    }

    async loginButtonVisible() {
        return await this.loginButton.isDisplayed().catch(() => false);
    }

    async newToNextentiTextVisible() {
        return await this.newToNextentiText.isDisplayed().catch(() => false);
    }

    async signupButtonVisible() {
        return await this.signupButton.isDisplayed().catch(() => false);
    }

    async verifyEmployerLoginPageVisible() {
        if (!(await this.employerLoginTitleVisible())) {
            throw new Error('Employer Login page is missing the title');
        }

        if (!(await this.continueWithGoogleButtonVisible())) {
            throw new Error('Employer Login page is missing "Continue with Google"');
        }

        if (!(await this.emailOrMobileFieldVisible())) {
            throw new Error('Employer Login page is missing the phone/email field');
        }

        if (!(await this.passwordFieldVisible())) {
            throw new Error('Employer Login page is missing the password field');
        }

        if (!(await this.forgotPasswordButtonVisible())) {
            throw new Error('Employer Login page is missing "Forgot Password?"');
        }

        if (!(await this.loginButtonVisible())) {
            throw new Error('Employer Login page is missing the Login button');
        }

        if (!(await this.newToNextentiTextVisible())) {
            throw new Error('Employer Login page is missing "New to Nextenti?"');
        }

        if (!(await this.signupButtonVisible())) {
            throw new Error('Employer Login page is missing the Sign up button');
        }
    }

    async clickSignup() {
        await this.click(this.signupButton);
    }

    async signupBackButtonVisible() {
        return await this.signupBackButton.isDisplayed().catch(() => false);
    }

    async signupLoginButtonVisible() {
        return await this.signupLoginButton.isDisplayed().catch(() => false);
    }

    async employerSignupTitleVisible() {
        return await this.employerSignupTitle.isDisplayed().catch(() => false);
    }

    async signupGoogleButtonVisible() {
        return await this.signupGoogleButton.isDisplayed().catch(() => false);
    }

    async orTextVisible() {
        return await this.orText.isDisplayed().catch(() => false);
    }

    async mobileNumberTextVisible() {
        return await this.mobileNumberText.isDisplayed().catch(() => false);
    }

    async phoneCodeDropdownVisible() {
        return await this.phoneCodeDropdown.isDisplayed().catch(() => false);
    }

    async registerPhoneFieldVisible() {
        return await this.registerPhoneField.isDisplayed().catch(() => false);
    }

    async mobileNumberCounterVisible() {
        return await this.mobileNumberCounter.isDisplayed().catch(() => false);
    }

    async registerContinueButtonVisible() {
        return await this.registerContinueButton.isDisplayed().catch(() => false);
    }

    async verifyEmployerSignupPageVisible() {
        if (!(await this.signupBackButtonVisible())) {
            throw new Error('Employer Sign Up page is missing the Back button');
        }

        if (!(await this.signupLoginButtonVisible())) {
            throw new Error('Employer Sign Up page is missing the Login button');
        }

        if (!(await this.employerSignupTitleVisible())) {
            throw new Error('Employer Sign Up page is missing the title');
        }

        if (!(await this.signupGoogleButtonVisible())) {
            throw new Error('Employer Sign Up page is missing "Continue with Google"');
        }

        if (!(await this.orTextVisible())) {
            throw new Error('Employer Sign Up page is missing the "or" separator');
        }

        if (!(await this.mobileNumberTextVisible())) {
            throw new Error('Employer Sign Up page is missing "Mobile Number"');
        }

        if (!(await this.phoneCodeDropdownVisible())) {
            throw new Error('Employer Sign Up page is missing the country-code dropdown');
        }

        if (!(await this.registerPhoneFieldVisible())) {
            throw new Error('Employer Sign Up page is missing the mobile-number field');
        }

        if (!(await this.mobileNumberCounterVisible())) {
            throw new Error('Employer Sign Up page is missing the mobile-number counter');
        }

        if (!(await this.registerContinueButtonVisible())) {
            throw new Error('Employer Sign Up page is missing the Continue button');
        }
    }

    async enterMobileNumber(mobileNumber) {
        await this.setText(this.registerPhoneField, mobileNumber);
        await this.verifyTextEntered(this.registerPhoneField, mobileNumber);
    }

    async clickContinue() {
        await this.click(this.registerContinueButton);
    }

    async firstNameFieldVisible() {
        return await this.firstNameField.isDisplayed().catch(() => false);
    }

    async lastNameFieldVisible() {
        return await this.lastNameField.isDisplayed().catch(() => false);
    }

    async emailFieldVisible() {
        return await this.emailField.isDisplayed().catch(() => false);
    }

    async emailVerifyButtonVisible() {
        return await this.emailVerifyButton.isDisplayed().catch(() => false);
    }

    async smsOtpChannelButtonVisible() {
        return await this.smsOtpChannelButton.isDisplayed().catch(() => false);
    }

    async whatsAppOtpChannelButtonVisible() {
        return await this.whatsAppOtpChannelButton.isDisplayed().catch(() => false);
    }

    async verifyEmployerDetailsFormVisible() {
        if (!(await this.signupLoginButtonVisible())) {
            throw new Error('Employer details form is missing the Login button');
        }

        if (!(await this.firstNameFieldVisible())) {
            throw new Error('Employer details form is missing the First Name field');
        }

        if (!(await this.lastNameFieldVisible())) {
            throw new Error('Employer details form is missing the Last Name field');
        }

        if (!(await this.emailFieldVisible())) {
            throw new Error('Employer details form is missing the Email field');
        }

        if (!(await this.emailVerifyButtonVisible())) {
            throw new Error('Employer details form is missing the Verify button');
        }

        if (!(await this.smsOtpChannelButtonVisible())) {
            throw new Error('Employer details form is missing the SMS option');
        }

        if (!(await this.whatsAppOtpChannelButtonVisible())) {
            throw new Error('Employer details form is missing the WhatsApp option');
        }
    }

    async enterFirstName(firstName) {
        await this.setText(this.firstNameField, firstName);
        await this.verifyTextEntered(this.firstNameField, firstName);
    }

    async enterLastName(lastName) {
        await this.setText(this.lastNameField, lastName);
        await this.verifyTextEntered(this.lastNameField, lastName);
    }

    async enterEmail(email) {
        await this.setText(this.emailField, email);
        await this.verifyTextEntered(this.emailField, email);
    }

    async clickEmailVerify() {
        await this.click(this.emailVerifyButton);
    }

    async waitForEmailOtpPopup() {
        await this.waitForElement(this.emailOtpPopup);
    }

    async skipEmailOtp() {
        await this.click(this.emailOtpSkipButton);
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

    async chooseOtpChannel(otpMode) {
        if (otpMode === 'SMS') {
            await this.click(this.smsOtpChannelButton);
        } else if (otpMode === 'WhatsApp') {
            await this.click(this.whatsAppOtpChannelButton);
        } else {
            throw new Error(`Unsupported OTP mode: ${otpMode}`);
        }
    }

    async waitForMobileOtpPopup() {
        await this.waitForElement(this.mobileOtpPopup);
    }

    async enterMobileOtp(mobileOtp) {
        await this.click(this.mobileOtpPopup);
        await this.setText(this.mobileOtpPopup, mobileOtp);
    }

    async waitForOtpScreenToClose() {
        await this.waitForElement(this.createPasswordField);
    }

    async createPassword(accountPassword) {
        await this.click(this.createPasswordField);
        await this.setText(this.createPasswordField, accountPassword);
        await this.waitForPasswordEntered(this.createPasswordField, accountPassword.length);
    }

    async confirmPassword(accountPassword) {
        await this.setText(this.confirmPasswordField, accountPassword);
        await this.waitForPasswordEntered(this.confirmPasswordField, accountPassword.length);
    }

    async acceptTerms() {
        await this.click(this.termsCheckbox);
    }

    async clickCreateAccount() {
        await this.click(this.createAccountButton);
    }
}

export default new EmployerSignupPage();
