import Page from './Base.page.js';

class EmployerOrganizationSetupPage extends Page {

    get chooseOrganizationTypeTitle() {
        return $('~Choose Organization Type');
    }

    get organizationTypeDropdown() {
        return $('~Select Your Organization Type');
    }

    get hospitalOption() {
        return $('~Hospital');
    }

    get hospitalProfileSection() {
        return $('id=corporate_profile_org_profile_accordion_tab');
    }

    get authorizedPersonDetailsSection() {
        return $('id=corporate_profile_authorized_person_accordion_tab');
    }

    get billingDetailsSection() {
        return $('id=corporate_profile_billing_details_accordion_tab');
    }

    get continueButton() {
        return $('id=corporate_profile_continue_button');
    }

    get organizationNameField() {
        return $('id=org_profile_organization_name_field');
    }

    get sameAsOrganizationNameCheckbox() {
        return $('id=org_profile_same_as_org_name_checkbox');
    }

    get hospitalNameField() {
        return $('id=org_profile_hospital_name_field');
    }

    get phoneCodeDropdown() {
        return $('id=organization_profile_phone_code_dropdown');
    }

    get phoneNumberField() {
        return $('id=org_profile_phone_number_field');
    }

    get countryDropdown() {
        return $('id=organization_profile_country_dropdown');
    }

    get pincodeField() {
        return $('id=org_profile_pincode_field');
    }

    get cityField() {
        return $('id=org_profile_city_field');
    }

    get stateDropdown() {
        return $('id=organization_profile_state_dropdown');
    }

    get areaField() {
        return $('id=org_profile_area_field');
    }

    get streetAddressField() {
        return $('id=org_profile_street_address_field');
    }

    get authorizedPersonNameField() {
        return $('id=owner_details_name_field');
    }

    get authorizedPersonEmailField() {
        return $('id=owner_details_email_field');
    }

    get authorizedPersonPhoneCodeDropdown() {
        return $('id=corporate_owner_phone_code_dropdown');
    }

    get authorizedPersonMobileNumberField() {
        return $('id=owner_details_phone_number_field');
    }

    get authorizedPersonDesignationField() {
        return $('id=owner_details_designation_field');
    }

    get sameAsOrganizationAddressCheckbox() {
        return $('id=org_payment_same_as_org_address_checkbox');
    }

    get billingAddressField() {
        return $('id=org_payment_billing_address_field');
    }

    get agreeAndContinueButton() {
        return $('id=terms_dialog_agree_button');
    }

    get cancelButton() {
        return $('id=terms_dialog_cancel_button');
    }

    async waitForOrganizationProfilePage() {
        await this.waitForElement(this.chooseOrganizationTypeTitle);
        await this.waitForElement(this.organizationTypeDropdown);
    }

    async chooseOrganizationTypeTitleVisible() {
        return await this.chooseOrganizationTypeTitle.isDisplayed().catch(() => false);
    }

    async organizationTypeDropdownVisible() {
        return await this.organizationTypeDropdown.isDisplayed().catch(() => false);
    }

    async verifyOrganizationProfilePageVisible() {
        if (!(await this.chooseOrganizationTypeTitleVisible())) {
            throw new Error('Organization setup page is missing "Choose Organization Type"');
        }

        if (!(await this.organizationTypeDropdownVisible())) {
            throw new Error('Organization setup page is missing the organization type dropdown');
        }
    }

    async clickOrganizationTypeDropdown() {
        await this.click(this.organizationTypeDropdown);
    }

    async selectHospital() {
        await this.click(this.hospitalOption);
    }

    async hospitalProfileSectionVisible() {
        return await this.hospitalProfileSection.isDisplayed().catch(() => false);
    }

    async authorizedPersonDetailsSectionVisible() {
        return await this.authorizedPersonDetailsSection.isDisplayed().catch(() => false);
    }

    async billingDetailsSectionVisible() {
        return await this.billingDetailsSection.isDisplayed().catch(() => false);
    }

    async continueButtonVisible() {
        return await this.continueButton.isDisplayed().catch(() => false);
    }

    async verifyHospitalDetailsVisible() {
        if (!(await this.hospitalProfileSectionVisible())) {
            throw new Error('Organization setup page is missing the Hospital Profile section');
        }

        if (!(await this.authorizedPersonDetailsSectionVisible())) {
            throw new Error('Organization setup page is missing the Authorized Person Details section');
        }

        if (!(await this.billingDetailsSectionVisible())) {
            throw new Error('Organization setup page is missing the Billing Details section');
        }

        if (!(await this.continueButtonVisible())) {
            throw new Error('Organization setup page is missing the Continue button');
        }
    }

    async clickHospitalProfileSection() {
        await this.click(this.hospitalProfileSection);
    }

    async organizationNameFieldVisible() {
        return await this.organizationNameField.isDisplayed().catch(() => false);
    }

    async sameAsOrganizationNameCheckboxVisible() {
        return await this.sameAsOrganizationNameCheckbox.isDisplayed().catch(() => false);
    }

    async hospitalNameFieldVisible() {
        return await this.hospitalNameField.isDisplayed().catch(() => false);
    }

    async phoneCodeDropdownVisible() {
        return await this.phoneCodeDropdown.isDisplayed().catch(() => false);
    }

    async phoneNumberFieldVisible() {
        return await this.phoneNumberField.isDisplayed().catch(() => false);
    }

    async countryDropdownVisible() {
        return await this.countryDropdown.isDisplayed().catch(() => false);
    }

    async pincodeFieldVisible() {
        return await this.pincodeField.isDisplayed().catch(() => false);
    }

    async cityFieldVisible() {
        return await this.cityField.isDisplayed().catch(() => false);
    }

    async stateDropdownVisible() {
        return await this.stateDropdown.isDisplayed().catch(() => false);
    }

    async areaFieldVisible() {
        return await this.areaField.isDisplayed().catch(() => false);
    }

    async streetAddressFieldVisible() {
        return await this.streetAddressField.isDisplayed().catch(() => false);
    }

    async verifyHospitalProfileFieldsVisible() {
        if (!(await this.organizationNameFieldVisible())) {
            throw new Error('Hospital Profile is missing the Organization Name field');
        }

        if (!(await this.sameAsOrganizationNameCheckboxVisible())) {
            throw new Error('Hospital Profile is missing the Same as Organization Name checkbox');
        }

        if (!(await this.hospitalNameFieldVisible())) {
            throw new Error('Hospital Profile is missing the Hospital Name field');
        }

        if (!(await this.phoneCodeDropdownVisible())) {
            throw new Error('Hospital Profile is missing the phone-code dropdown');
        }

        if (!(await this.phoneNumberFieldVisible())) {
            throw new Error('Hospital Profile is missing the Phone Number field');
        }

        if (!(await this.countryDropdownVisible())) {
            throw new Error('Hospital Profile is missing the Country dropdown');
        }

        if (!(await this.pincodeFieldVisible())) {
            throw new Error('Hospital Profile is missing the Pincode / Postal Code field');
        }
        await this.scrollUntilDisplayed(this.cityField, 'down');

        if (!(await this.cityFieldVisible())) {
            throw new Error('Hospital Profile is missing the City field');
        }

        if (!(await this.stateDropdownVisible())) {
            throw new Error('Hospital Profile is missing the State / Province dropdown');
        }

        await this.scrollUntilDisplayed(this.areaField, 'down');

        if (!(await this.areaFieldVisible())) {
            throw new Error('Hospital Profile is missing the Area field');
        }

        if (!(await this.streetAddressFieldVisible())) {
            throw new Error('Hospital Profile is missing the Street Address field');
        }
    }

    async clickAuthorizedPersonDetailsSection() {
        await this.scrollUntilDisplayed(this.authorizedPersonDetailsSection, 'down');
        await this.click(this.authorizedPersonDetailsSection);
    }

    async authorizedPersonNameFieldVisible() {
        return await this.authorizedPersonNameField.isDisplayed().catch(() => false);
    }

    async authorizedPersonEmailFieldVisible() {
        return await this.authorizedPersonEmailField.isDisplayed().catch(() => false);
    }

    async authorizedPersonPhoneCodeDropdownVisible() {
        return await this.authorizedPersonPhoneCodeDropdown.isDisplayed().catch(() => false);
    }

    async authorizedPersonMobileNumberFieldVisible() {
        return await this.authorizedPersonMobileNumberField.isDisplayed().catch(() => false);
    }

    async authorizedPersonDesignationFieldVisible() {
        return await this.authorizedPersonDesignationField.isDisplayed().catch(() => false);
    }

    async verifyAuthorizedPersonDetailsFieldsVisible() {
        if (!(await this.authorizedPersonNameFieldVisible())) {
            throw new Error('Authorized Person Details is missing the Name field');
        }

        if (!(await this.authorizedPersonEmailFieldVisible())) {
            throw new Error('Authorized Person Details is missing the Email ID field');
        }

        if (!(await this.authorizedPersonPhoneCodeDropdownVisible())) {
            throw new Error('Authorized Person Details is missing the phone-code dropdown');
        }

        if (!(await this.authorizedPersonMobileNumberFieldVisible())) {
            throw new Error('Authorized Person Details is missing the Mobile Number field');
        }

        if (!(await this.authorizedPersonDesignationFieldVisible())) {
            throw new Error('Authorized Person Details is missing the Designation field');
        }
    }

    async clickBillingDetailsSection() {
        await this.scrollUntilDisplayed(this.billingDetailsSection, 'down');
        await this.click(this.billingDetailsSection);
    }

    async sameAsOrganizationAddressCheckboxVisible() {
        return await this.sameAsOrganizationAddressCheckbox.isDisplayed().catch(() => false);
    }

    async billingAddressFieldVisible() {
        return await this.billingAddressField.isDisplayed().catch(() => false);
    }

    async verifyBillingDetailsFieldsVisible() {
        if (!(await this.sameAsOrganizationAddressCheckboxVisible())) {
            throw new Error('Billing Details is missing the Same as Organization Address checkbox');
        }

        if (!(await this.billingAddressFieldVisible())) {
            throw new Error('Billing Details is missing the Billing Address field');
        }
    }

    async fillHospitalProfile(data) {
        await this.setText(this.organizationNameField, data.organizationName);
        await this.verifyTextEntered(this.organizationNameField, data.organizationName);
        await this.pressDoneOnKeyboard();

        if (data.hospitalNameMode === 'Same as Organization Name') {
            await this.click(this.sameAsOrganizationNameCheckbox);
        } else if (data.hospitalNameMode === 'Different Name') {
            await this.setText(this.hospitalNameField, data.hospitalName);
            await this.verifyTextEntered(this.hospitalNameField, data.hospitalName);
            await this.pressDoneOnKeyboard();
        } else {
            throw new Error(`Unsupported hospital name mode: ${data.hospitalNameMode}`);
        }

        await this.setText(this.phoneNumberField, data.phoneNumber);
        await this.verifyTextEntered(this.phoneNumberField, data.phoneNumber);
        await this.pressDoneOnKeyboard();

        await this.scrollUntilDisplayed(this.pincodeField, 'down');
        await this.setText(this.pincodeField, data.pincode);
        await this.verifyTextEntered(this.pincodeField, data.pincode);
        await this.pressDoneOnKeyboard();

        await this.scrollUntilDisplayed(this.areaField, 'down');
        await this.setText(this.areaField, data.area);
        await this.verifyTextEntered(this.areaField, data.area);
        await this.pressDoneOnKeyboard();

        await this.setText(this.streetAddressField, data.streetAddress);
        await this.verifyTextEntered(this.streetAddressField, data.streetAddress);
        await this.pressDoneOnKeyboard();
    }

    async fillAuthorizedPersonDetails(data) {
        await this.setText(this.authorizedPersonNameField, data.authorizedPersonName);
        await this.verifyTextEntered(this.authorizedPersonNameField, data.authorizedPersonName);
        await this.pressDoneOnKeyboard();

        await this.setText(this.authorizedPersonEmailField, data.authorizedPersonEmail);
        await this.verifyTextEntered(this.authorizedPersonEmailField, data.authorizedPersonEmail);
        await this.pressDoneOnKeyboard();

        await this.setText(this.authorizedPersonMobileNumberField, data.authorizedPersonMobileNumber);
        await this.verifyTextEntered(
            this.authorizedPersonMobileNumberField,
            data.authorizedPersonMobileNumber
        );
        await this.pressDoneOnKeyboard();

        await this.setText(
            this.authorizedPersonDesignationField,
            data.authorizedPersonDesignation
        );
        await this.verifyTextEntered(
            this.authorizedPersonDesignationField,
            data.authorizedPersonDesignation
        );
        await this.pressDoneOnKeyboard();
    }

    async fillBillingDetails(data) {
        if (data.billingAddressMode === 'Same as Organization Address') {
            await this.click(this.sameAsOrganizationAddressCheckbox);
        } else if (data.billingAddressMode === 'Different Address') {
            await this.setText(this.billingAddressField, data.billingAddress);
            await this.verifyTextEntered(this.billingAddressField, data.billingAddress);
            await this.pressDoneOnKeyboard();
        } else {
            throw new Error(`Unsupported billing address mode: ${data.billingAddressMode}`);
        }
    }

    async clickContinue() {
        await this.scrollUntilDisplayed(this.continueButton, 'down');
        await this.click(this.continueButton);
    }

    async agreeAndContinueButtonVisible() {
        return await this.agreeAndContinueButton.isDisplayed().catch(() => false);
    }

    async cancelButtonVisible() {
        return await this.cancelButton.isDisplayed().catch(() => false);
    }

    async verifyTermsAndConditionsOptionsVisible() {
        if (!(await this.agreeAndContinueButtonVisible())) {
            throw new Error('Terms and Conditions popup is missing the Agree and Continue button');
        }

        if (!(await this.cancelButtonVisible())) {
            throw new Error('Terms and Conditions popup is missing the Cancel button');
        }
    }

    async chooseTermsAndConditionsAction(data) {
        if (data.termsActionMode === 'Agree and Continue') {
            await this.click(this.agreeAndContinueButton);
        } else if (data.termsActionMode === 'Cancel') {
            await this.click(this.cancelButton);
        } else {
            throw new Error(`Unsupported Terms and Conditions action: ${data.termsActionMode}`);
        }
    }

    async pressDoneOnKeyboard() {
        try {
            await driver.execute('mobile: performEditorAction', { action: 'done' });
        } catch (error) {
            await driver.hideKeyboard().catch(() => {});
        }
    }
}

export default new EmployerOrganizationSetupPage();
