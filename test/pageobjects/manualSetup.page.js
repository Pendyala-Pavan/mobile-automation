import Page from './Base.page.js';

class ManualSetupPage extends Page {

    get uploadResumeCard() {
        return $$('id=profile_resume_selection_card_button')[0];
    }

    get manualProfileSetupCard() {
        return $$('id=profile_resume_selection_card_button')[1];
    }

    get completeProfileHeading() {
        return $('~Complete Profile');
    }

    get profileTypeQuestion() {
        return $('~What best describes you?');
    }

    get studentOption() {
        return $('~Student');
    }

    get fresherOption() {
        return $('~Fresher');
    }

    get experiencedOption() {
        return $('~Experienced');
    }

    get personalDetailsSection() {
        return $('id=candidate_signup_personal_details_accordion_button');
    }

    get educationDetailsSection() {
        return $('id=candidate_signup_education_details_accordion_button');
    }

    get internshipSection() {
        return $('id=candidate_signup_internship_accordion_button');
    }

    get experienceSection() {
        return $('id=candidate_signup_experience_accordion_button');
    }

    get jobPreferenceSection() {
        return $('id=candidate_signup_job_preference_accordion_button');
    }

    get continueButton() {
        return $('~Continue');
    }

    get firstNameField() {
        return $('id=candidate_signup_first_name_field');
    }

    get lastNameField() {
        return $('id=candidate_signup_last_name_field');
    }

    get emailIdField() {
        return $('id=candidate_signup_email_field');
    }

    get mobileNumberField() {
        return $('id=candidate_signup_phone_field');
    }

    get dateOfBirthField() {
        return $('id=candidate_signup_dob_field');
    }

    get genderField() {
        return $('id=candidate_signup_gender_dropdown');
    }

    get maleOption() {
        return $('~Male');
    }

    get countryField() {
        return $('id=candidate_signup_country_dropdown');
    }

    get pincodeField() {
        return $('id=candidate_signup_pincode_field');
    }

    get stateField() {
        return $('id=candidate_signup_state_dropdown');
    }

    get andhraPradeshOption() {
        return $('~Andhra Pradesh');
    }

    get cityField() {
        return $('id=candidate_signup_city_field');
    }

    get professionField() {
        return $('id=candidate_signup_profession_dropdown');
    }

    get nurseOption() {
        return $('~Nurse');
    }

    get educationTypeField() {
        return $('id=candidate_signup_education_type_dropdown');
    }

    get graduationOption() {
        return $('~Graduation');
    }

    get qualificationField() {
        return $('id=candidate_signup_education_qualification_field');
    }

    get departmentField() {
        return $('id=candidate_signup_education_department_dropdown');
    }

    get nursingDepartmentOption() {
        return $('~Nursing');
    }

    get instituteField() {
        return $('id=candidate_signup_education_institute_field');
    }

    get yearOfPassingField() {
        return $('id=candidate_signup_education_year_of_passing_dropdown');
    }

    get year2024Option() {
        return $('~2024');
    }

    get addEducationButton() {
        return $('~Add Education');
    }

    get internshipQuestion() {
        return $('~Do you have an internship?');
    }

    get internshipYesOption() {
        return $('id=candidate_signup_internship_yes_radio');
    }

    get internshipNoOption() {
        return $('id=candidate_signup_internship_no_radio');
    }

    get employmentTypeField() {
        return $('id=candidate_signup_experience_employment_type_dropdown');
    }

    get fullTimeOption() {
        return $('~Full Time');
    }

    get internshipJobTitleField() {
        return $('//android.widget.Button[@content-desc="Job Title"]');
    }

    get internshipOrganizationField() {
        return $('id=candidate_signup_experience_org_field');
    }

    get internshipDepartmentField() {
        return $('//android.widget.Button[@content-desc="Department"]/android.view.View/android.widget.EditText');
    }

    get internshipStartDateField() {
        return $('id=candidate_signup_experience_start_date_field');
    }

    get internshipEndDateField() {
        return $('id=candidate_signup_experience_end_date_field');
    }

    get currentlyWorkingCheckbox() {
        return $('id=candidate_signup_currently_working_checkbox');
    }

    get internshipSkillsField() {
        return $('id=candidate_signup_experience_skills_dropdown');
    }

    get internshipPincodeField() {
        return $('id=candidate_signup_experience_pincode_field');
    }

    get internshipCityField() {
        return $('id=candidate_signup_experience_city_field');
    }

    get internshipStateField() {
        return $('id=candidate_signup_experience_state_dropdown');
    }

    get preferredStateField() {
        return $('id=candidate_signup_preference_state_dropdown');
    }

    get preferredStateOption() {
        return $('~Andhra Pradesh');
    }

    get preferredCityField() {
        return $('id=candidate_signup_preference_city_dropdown');
    }

    get preferredCityOption() {
        return $('~Guntur');
    }
    get homeMenuButton() {
        return $('id=bottom_nav_home_tab');
    }

    async clickManualProfileSetup() {
        await this.click(this.manualProfileSetupCard);
    }

    async completeProfileHeadingVisible() {
        return await this.completeProfileHeading.isDisplayed().catch(() => false);
    }

    async profileTypeQuestionVisible() {
        return await this.profileTypeQuestion.isDisplayed().catch(() => false);
    }

    async studentOptionVisible() {
        return await this.studentOption.isDisplayed().catch(() => false);
    }

    async fresherOptionVisible() {
        return await this.fresherOption.isDisplayed().catch(() => false);
    }

    async experiencedOptionVisible() {
        return await this.experiencedOption.isDisplayed().catch(() => false);
    }

    async verifyCompleteProfileOptionsVisible() {
        if (!(await this.completeProfileHeadingVisible())) {
            throw new Error('Complete Profile page is missing the "Complete Profile" heading');
        }

        if (!(await this.profileTypeQuestionVisible())) {
            throw new Error('Complete Profile page is missing "What best describes you?"');
        }

        if (!(await this.studentOptionVisible())) {
            throw new Error('Complete Profile page is missing the Student option');
        }

        if (!(await this.fresherOptionVisible())) {
            throw new Error('Complete Profile page is missing the Fresher option');
        }

        if (!(await this.experiencedOptionVisible())) {
            throw new Error('Complete Profile page is missing the Experienced option');
        }
    }

    async chooseProfileType(profileType) {
        if (profileType === 'Student') {
            await this.click(this.studentOption);
        } else if (profileType === 'Fresher') {
            await this.click(this.fresherOption);
        } else if (profileType === 'Experienced' || profileType === 'Experience') {
            await this.click(this.experiencedOption);
        } else {
            throw new Error(`Unsupported profile type: ${profileType}`);
        }
    }

    async personalDetailsSectionVisible() {
        return await this.personalDetailsSection.isDisplayed().catch(() => false);
    }

    async educationDetailsSectionVisible() {
        return await this.educationDetailsSection.isDisplayed().catch(() => false);
    }

    async internshipSectionVisible() {
        return await this.internshipSection.isDisplayed().catch(() => false);
    }

    async jobPreferenceSectionVisible() {
        return await this.jobPreferenceSection.isDisplayed().catch(() => false);
    }

    async continueButtonVisible() {
        return await this.continueButton.isDisplayed().catch(() => false);
    }

    async verifyProfileDetailsSectionsVisible(profileType) {
        if (!(await this.personalDetailsSectionVisible())) {
            throw new Error('Complete Profile page is missing the Personal Details section');
        }

        if (!(await this.educationDetailsSectionVisible())) {
            throw new Error('Complete Profile page is missing the Education Details section');
        }

        if (profileType === 'Experienced') {
            if (!(await this.experienceSection.isDisplayed())) {
                throw new Error('Complete Profile page is missing Experience');
            }
        } else {
            if (!(await this.internshipSection.isDisplayed())) {
                throw new Error('Complete Profile page is missing Internship');
            }
        }

        if (!(await this.jobPreferenceSectionVisible())) {
            throw new Error('Complete Profile page is missing the Job Preference section');
        }

        if (!(await this.continueButtonVisible())) {
            throw new Error('Complete Profile page is missing the Continue button');
        }
    }
    async clickPersonalDetailsSection() {
        await this.click(this.personalDetailsSection);
    }

    async fillPersonalDetails(data) {
        await this.scrollUntilDisplayed(this.dateOfBirthField, 'down');
        await this.setText(this.dateOfBirthField, data.dateOfBirth);
        await this.pressDoneOnKeyboard();

        await this.click(this.genderField);
        await this.click(this.maleOption);

        await this.scrollUntilDisplayed(this.pincodeField, 'down');
        await this.setText(this.pincodeField, data.pincode);
        await this.pressDoneOnKeyboard();

        await this.click(this.stateField);
        await this.click(this.andhraPradeshOption);

        await this.scrollUntilDisplayed(this.cityField, 'down');
        await this.setText(this.cityField, data.city);
        await this.pressDoneOnKeyboard();

        await this.scrollUntilDisplayed(this.professionField, 'down');
        await this.click(this.professionField);
        await this.click(this.nurseOption);
    }

    async pressDoneOnKeyboard() {
        try {
            await driver.execute('mobile: performEditorAction', { action: 'done' });
        } catch (error) {
            await driver.hideKeyboard().catch(() => {});
        }
    }

    async fillEducationDetails(data) {
        await this.scrollUntilDisplayed(this.educationTypeField, 'down');
        await this.click(this.educationTypeField);
        await this.click(this.graduationOption);

        await this.setText(this.qualificationField, data.qualification);
        await this.pressDoneOnKeyboard();

        await this.setText(this.departmentField, data.department);
        await this.pressDoneOnKeyboard();
        await this.click(this.nursingDepartmentOption);

        await this.scrollUntilDisplayed(this.instituteField, 'down');
        await this.setText(this.instituteField, data.institute);
        await this.pressDoneOnKeyboard();

        await this.scrollUntilDisplayed(this.yearOfPassingField, 'down');
        await this.click(this.yearOfPassingField);
        await this.click(this.year2024Option);
    }

    async firstNameFieldVisible() {
        return await this.firstNameField.isDisplayed().catch(() => false);
    }

    async lastNameFieldVisible() {
        return await this.lastNameField.isDisplayed().catch(() => false);
    }

    async emailIdFieldVisible() {
        return await this.emailIdField.isDisplayed().catch(() => false);
    }

    async mobileNumberFieldVisible() {
        return await this.mobileNumberField.isDisplayed().catch(() => false);
    }

    async dateOfBirthFieldVisible() {
        return await this.dateOfBirthField.isDisplayed().catch(() => false);
    }

    async genderFieldVisible() {
        return await this.genderField.isDisplayed().catch(() => false);
    }

    async countryFieldVisible() {
        return await this.countryField.isDisplayed().catch(() => false);
    }

    async pincodeFieldVisible() {
        return await this.pincodeField.isDisplayed().catch(() => false);
    }

    async stateFieldVisible() {
        return await this.stateField.isDisplayed().catch(() => false);
    }

    async cityFieldVisible() {
        return await this.cityField.isDisplayed().catch(() => false);
    }

    async professionFieldVisible() {
        return await this.professionField.isDisplayed().catch(() => false);
    }

    async verifyPersonalDetailsFieldsVisible() {
        if (!(await this.firstNameFieldVisible())) {
            throw new Error('Personal Details is missing the First Name field');
        }

        if (!(await this.lastNameFieldVisible())) {
            throw new Error('Personal Details is missing the Last Name/Surname field');
        }

        if (!(await this.emailIdFieldVisible())) {
            throw new Error('Personal Details is missing the Email Id field');
        }

        if (!(await this.mobileNumberFieldVisible())) {
            throw new Error('Personal Details is missing the Mobile Number field');
        }

        await this.scroll('down');
        await this.pause(2);

        if (!(await this.dateOfBirthFieldVisible())) {
            throw new Error('Personal Details is missing the Date of Birth field');
        }

        if (!(await this.genderFieldVisible())) {
            throw new Error('Personal Details is missing the Gender field');
        }

        if (!(await this.countryFieldVisible())) {
            throw new Error('Personal Details is missing the Country field');
        }

        await this.scroll('down');
        await this.pause(2);

        if (!(await this.pincodeFieldVisible())) {
            throw new Error('Personal Details is missing the Pincode / Postal Code field');
        }

        if (!(await this.stateFieldVisible())) {
            throw new Error('Personal Details is missing the State / Province field');
        }

        if (!(await this.cityFieldVisible())) {
            throw new Error('Personal Details is missing the City field');
        }

        if (!(await this.professionFieldVisible())) {
            throw new Error('Personal Details is missing the Profession field');
        }
    }

    async clickEducationDetailsSection() {
        await this.scrollUntilDisplayed(this.educationDetailsSection, 'down');
        await this.click(this.educationDetailsSection);
    }

    async educationTypeFieldVisible() {
        return await this.educationTypeField.isDisplayed().catch(() => false);
    }

    async qualificationFieldVisible() {
        return await this.qualificationField.isDisplayed().catch(() => false);
    }

    async departmentFieldVisible() {
        return await this.departmentField.isDisplayed().catch(() => false);
    }

    async instituteFieldVisible() {
        return await this.instituteField.isDisplayed().catch(() => false);
    }

    async yearOfPassingFieldVisible() {
        return await this.yearOfPassingField.isDisplayed().catch(() => false);
    }

    async addEducationButtonVisible() {
        return await this.addEducationButton.isDisplayed().catch(() => false);
    }

    async verifyEducationDetailsFieldsVisible() {
        if (!(await this.educationTypeFieldVisible())) {
            throw new Error('Education Details is missing the Education Type field');
        }

        if (!(await this.qualificationFieldVisible())) {
            throw new Error('Education Details is missing the Qualification field');
        }

        if (!(await this.departmentFieldVisible())) {
            throw new Error('Education Details is missing the Department / Field of Study field');
        }

        await this.scrollUntilDisplayed(this.instituteField, 'down');

        if (!(await this.instituteFieldVisible())) {
            throw new Error('Education Details is missing the Institute / College Name field');
        }

        await this.scrollUntilDisplayed(this.yearOfPassingField, 'down');

        if (!(await this.yearOfPassingFieldVisible())) {
            throw new Error('Education Details is missing the Year of Passing field');
        }

        await this.scrollUntilDisplayed(this.addEducationButton, 'down');

        if (!(await this.addEducationButtonVisible())) {
            throw new Error('Education Details is missing the Add Education button');
        }
    }

    async clickInternshipSection() {
        await this.scrollUntilDisplayed(this.internshipSection, 'down');
        await this.click(this.internshipSection);
    }

    async clickExperienceSection() {
        await this.scrollUntilDisplayed(this.experienceSection, 'down');
        await this.click(this.experienceSection);
    }

    async verifyExperienceDetailsVisible() {
        await this.scrollUntilDisplayed(this.employmentTypeField, 'down');

        if (!(await this.employmentTypeField.isDisplayed())) {
            throw new Error('Experience section is missing the Employment Type field');
        }
    }

    async verifyWorkSection(profileType) {
        if (profileType === 'Experienced') {
            await this.clickExperienceSection();
            await this.pause(3);
            await this.verifyExperienceDetailsVisible();
        } else {
            await this.clickInternshipSection();
            await this.pause(3);
            await this.verifyInternshipOptionsVisible();
        }
    }

    async internshipQuestionVisible() {
        return await this.internshipQuestion.isDisplayed().catch(() => false);
    }

    async internshipYesOptionVisible() {
        return await this.internshipYesOption.isDisplayed().catch(() => false);
    }

    async internshipNoOptionVisible() {
        return await this.internshipNoOption.isDisplayed().catch(() => false);
    }

    async verifyInternshipOptionsVisible() {
        if (!(await this.internshipQuestionVisible())) {
            throw new Error('Internship section is missing "Do you have an internship?"');
        }

        if (!(await this.internshipYesOptionVisible())) {
            throw new Error('Internship section is missing the Yes option');
        }

        if (!(await this.internshipNoOptionVisible())) {
            throw new Error('Internship section is missing the No option');
        }
    }

    async chooseInternshipOption(internshipMode) {
        if (internshipMode === 'Yes') {
            await this.click(this.internshipYesOption);
        } else if (internshipMode === 'No') {
            await this.click(this.internshipNoOption);
        } else {
            throw new Error(`Unsupported internship mode: ${internshipMode}`);
        }
    }

    async fillWorkDetails(workDetails) {
        await this.scrollUntilDisplayed(this.employmentTypeField, 'down');
        await this.click(this.employmentTypeField);
        await this.click(this.fullTimeOption);

        await this.setText(this.internshipJobTitleField, workDetails.jobTitle);
        await this.pressDoneOnKeyboard();

        await this.scrollUntilDisplayed(this.internshipOrganizationField, 'down');
        await this.setText(this.internshipOrganizationField, workDetails.organization);
        await this.pressDoneOnKeyboard();

        await this.setText(this.internshipDepartmentField, workDetails.department);
        await this.pressDoneOnKeyboard();

        await this.scrollUntilDisplayed(this.internshipStartDateField, 'down');
        await this.setText(this.internshipStartDateField, workDetails.startDate);
        await this.pressDoneOnKeyboard();

        if (workDetails.currentlyWorking) {
            await this.click(this.currentlyWorkingCheckbox);
        } else {
            await this.setText(this.internshipEndDateField, workDetails.endDate);
            await this.pressDoneOnKeyboard();
        }

        await this.scrollUntilDisplayed(this.internshipSkillsField, 'down');
        await this.setText(this.internshipSkillsField, workDetails.skills);
        await this.pressDoneOnKeyboard();

        await this.scrollUntilDisplayed(this.internshipPincodeField, 'down');
        await this.setText(this.internshipPincodeField, workDetails.pincode);
        await this.pressDoneOnKeyboard();

        await this.setText(this.internshipCityField, workDetails.city);
        await this.pressDoneOnKeyboard();

        await this.click(this.internshipStateField);
        await this.click(this.andhraPradeshOption);
    }

    async completeWorkDetails(data) {
        const isExperienced = data.profileType === 'Experienced';

        if (isExperienced) {
            await this.clickExperienceSection();
            await this.fillWorkDetails(data.experience);
            return;
        }

        await this.clickInternshipSection();
        await this.chooseInternshipOption(data.internshipMode);

        if (data.internshipMode === 'Yes') {
            await this.fillWorkDetails(data.internship);
        }
    }

    async fillJobPreference(data) {
        const preference = data.jobPreference;

        await this.scrollUntilDisplayed(this.preferredStateField, 'down');
        await this.setText(this.preferredStateField, preference.preferredState);
        await this.pressDoneOnKeyboard();
        await this.click(this.preferredStateOption);

        // await this.scrollUntilDisplayed(this.preferredCityField, 'down');
        await this.setText(this.preferredCityField, preference.preferredCity);
        await this.pressDoneOnKeyboard();
        await this.click(this.preferredCityOption);
    }

    async clickContinue() {
        // await this.scrollUntilDisplayed(this.continueButton, 'down');
        await this.click(this.continueButton);
    }

    async clickJobPreferenceSection() {
        await this.scrollUntilDisplayed(this.jobPreferenceSection, 'down');
        await this.click(this.jobPreferenceSection);
    }

    async preferredStateFieldVisible() {
        return await this.preferredStateField.isDisplayed().catch(() => false);
    }

    async preferredCityFieldVisible() {
        return await this.preferredCityField.isDisplayed().catch(() => false);
    }

    async verifyJobPreferenceFieldsVisible() {
        if (!(await this.preferredStateFieldVisible())) {
            throw new Error('Job Preference is missing the Preferred State field');
        }

        if (!(await this.preferredCityFieldVisible())) {
            throw new Error('Job Preference is missing the Preferred City field');
        }

        await this.scrollUntilDisplayed(this.continueButton, 'down');

        if (!(await this.continueButtonVisible())) {
            throw new Error('Job Preference is missing the Continue button');
        }
    }
    async homeMenuButtonVisible() {
        return await this.homeMenuButton.isDisplayed().catch(() => false);
    }
}

export default new ManualSetupPage();
