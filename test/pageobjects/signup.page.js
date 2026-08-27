import Page from './Base.page.js';

class SignupPage extends Page {

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

    get landingSignupButton() {
        return $('~Signup');
    }

    get registerPhoneField() {
        return $('id=register_phone_field');
    }

    get registerContinueButton() {
        return $('~Continue');
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

    get smsOtpChannelButton() {
        return $('id=otp_method_sms_button');
    }

    get whatsAppOtpChannelButton() {
        return $('id=otp_method_whatsapp_button');
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

    get otpField() {
        return $('id=verify_otp_popup_otp_field');
    }

    get passwordField() {
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

    async waitForLandingPage() {
        await this.waitForElement(this.landingSignupButton);
    }

    async clickLandingSignup() {
        await this.click(this.landingSignupButton);
    }

    async waitForSignupForm() {
        await this.waitForElement(this.firstNameField);
        await this.waitForElement(this.emailField);
    }
    async enterMobileNumber(mobileNumber) {
        await this.setText(this.registerPhoneField, mobileNumber);
        await this.click(this.registerContinueButton);
        await this.waitForSignupForm();
    }

    async enterMobileNumberWithRetry() {
        const mobileNumber = this.randomMobileNumber();

        try {
            await this.enterMobileNumber(mobileNumber);
        } catch (error) {
            const bouncedToLandingPage = await this.landingSignupButton.isDisplayed().catch(() => false);
            if (!bouncedToLandingPage) {
                throw error;
            }

            await this.clickLandingSignup();
            await this.enterMobileNumber(mobileNumber);
        }

        return mobileNumber;
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

    async chooseOtpChannel(otpMode) {
        if (otpMode === 'SMS') {
            await this.click(this.smsOtpChannelButton);
        } else if (otpMode === 'WhatsApp') {
            await this.click(this.whatsAppOtpChannelButton);
        } else {
            throw new Error(`Unsupported OTP mode: ${otpMode}`);
        }
    }

    async enterMobileOtp(mobileOtp) {
        await this.click(this.otpField);
        await this.setText(this.otpField, mobileOtp);
        
    }

    async waitForOtpScreenToClose() {
        await this.waitForElement(this.passwordField);
    }

    async createPassword(accountPassword) {
        await this.click(this.passwordField);
        await this.setText(this.passwordField, accountPassword);
        await this.waitForPasswordEntered(this.passwordField, accountPassword.length);
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


}

export default new SignupPage();
