import Page from './Base.page.js';

class EditProfilePage extends Page {

    get editProfileButton() {
        return $('id=candidate_home_edit_profile_button');
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
        return $('id=candidate_profile_edit_personal_details_accordion_button');
    }

    get educationDetailsSection() {
        return $('id=candidate_profile_edit_education_details_accordion_button');
    }

    get internshipSection() {
        return $('id=candidate_profile_edit_internship_accordion_button');
    }

    get experienceSection() {
        return $('id=candidate_profile_edit_experience_details_accordion_button');
    }

    get jobPreferenceSection() {
        return $('id=candidate_profile_edit_job_preference_accordion_button');
    }

    get backButton() {
        return $('id=candidate_profile_edit_back_button');
    }

    get saveButton() {
        return $('id=candidate_profile_edit_save_button');
    }

    get firstNameField() {
        return $('id=personal_details_first_name_field');
    }

    get lastNameField() {
        return $('id=personal_details_last_name_field');
    }

    get emailField() {
        return $('id=personal_details_email_field');
    }
    get emailEditButton() {
        return $('id=personal_details_email_edit_icon');
    }

    get mobileNumberField() {
        return $('id=personal_details_phone_field');
    }
    get mobileNumberEditButton() {
        return $('id=personal_details_phone_edit_icon');
    }

    get dateOfBirthField() {
        return $('id=personal_details_dob_field');
    }

    get genderField() {
        return $('id=personal_details_gender_dropdown');
    }

    get professionField() {
        return $('id=personal_details_profession_dropdown');
    }

    get addressField() {
        return $('id=personal_details_address_field');
    }

    get countryField() {
        return $('id=personal_details_country_dropdown');
    }

    get pincodeField() {
        return $('id=personal_details_pincode_field');
    }

    get stateField() {
        return $('id=personal_details_state_dropdown');
    }

    get cityField() {
        return $('id=personal_details_city_field');
    }

    get firstEducationSection() {
        return $('id=candidate_profile_edit_education_expand_button');
    }

    get addEducationButton() {
        return $('id=candidate_profile_edit_add_education_button');
    }

    get educationTypeField() {
        return $('id=education_type_0_dropdown');
    }

    get educationQualificationField() {
        return $('id=education_qualification_field');
    }

    get educationDepartmentField() {
        return $('id=education_department_0_dropdown');
    }

    get educationInstituteField() {
        return $('id=education_institute_field');
    }

    get educationYearOfPassingField() {
        return $('id=education_year_of_passing_0_dropdown');
    }

    get educationCountryField() {
        return $('id=education_country_0_dropdown');
    }

    get educationPincodeField() {
        return $('id=education_pincode_field');
    }

    get educationCityField() {
        return $('id=education_city_field');
    }

    get educationStateField() {
        return $('id=education_state_0_dropdown');
    }

    get educationUniversityField() {
        return $('id=education_university_field');
    }

    get educationRegistrationAuthorityField() {
        return $('id=medical_council_field');
    }

    get educationRegistrationNumberField() {
        return $('id=education_registration_field');
    }

    async clickEditProfile() {
        await this.click(this.editProfileButton);
    }

    async chooseProfileType(profileType) {
        if (profileType === 'Student') {
            await this.click(this.studentOption);
        } else if (profileType === 'Fresher') {
            await this.click(this.fresherOption);
        } else if (profileType === 'Experienced') {
            await this.click(this.experiencedOption);
        } else {
            throw new Error(`Unsupported profile type: ${profileType}`);
        }
    }

    async verifyProfileSectionsVisible(profileType) {
        if (!(await this.personalDetailsSection.isDisplayed())) {
            throw new Error('Edit Profile page is missing Personal Details');
        }

        if (!(await this.educationDetailsSection.isDisplayed())) {
            throw new Error('Edit Profile page is missing Education Details');
        }

        if (profileType === 'Experienced') {
            if (!(await this.experienceSection.isDisplayed())) {
                throw new Error('Edit Profile page is missing Experience Details');
            }
        } else {
            if (!(await this.internshipSection.isDisplayed())) {
                throw new Error('Edit Profile page is missing Internship');
            }
        }

        if (!(await this.jobPreferenceSection.isDisplayed())) {
            throw new Error('Edit Profile page is missing Job Preference');
        }

        if (!(await this.backButton.isDisplayed())) {
            throw new Error('Edit Profile page is missing Back');
        }

        if (!(await this.saveButton.isDisplayed())) {
            throw new Error('Edit Profile page is missing Save');
        }
    }

    async clickPersonalDetailsSection() {
        await this.scrollUntilDisplayed(this.personalDetailsSection, 'up', 6);
        await this.click(this.personalDetailsSection);
    }

    async verifyPersonalDetailsFieldsVisible() {
        if (!(await this.firstNameField.isDisplayed())) {
            throw new Error('Personal Details is missing First Name');
        }

        if (!(await this.lastNameField.isDisplayed())) {
            throw new Error('Personal Details is missing Last Name');
        }

        if (!(await this.emailField.isDisplayed())) {
            throw new Error('Personal Details is missing Email Id');
        }

        if (!(await this.mobileNumberField.isDisplayed())) {
            throw new Error('Personal Details is missing Mobile Number');
        }

        await this.scrollUntilDisplayed(this.dateOfBirthField, 'down', 6);

        if (!(await this.dateOfBirthField.isDisplayed())) {
            throw new Error('Personal Details is missing Date of Birth');
        }

        if (!(await this.genderField.isDisplayed())) {
            throw new Error('Personal Details is missing Gender');
        }

        if (!(await this.professionField.isDisplayed())) {
            throw new Error('Personal Details is missing Profession');
        }

        await this.scrollUntilDisplayed(this.addressField, 'down', 6);

        if (!(await this.addressField.isDisplayed())) {
            throw new Error('Personal Details is missing Address');
        }

        await this.scrollUntilDisplayed(this.countryField, 'down', 6);

        if (!(await this.countryField.isDisplayed())) {
            throw new Error('Personal Details is missing Country');
        }

        await this.scrollUntilDisplayed(this.pincodeField, 'down', 6);

        if (!(await this.pincodeField.isDisplayed())) {
            throw new Error('Personal Details is missing Pincode');
        }

        await this.scrollUntilDisplayed(this.stateField, 'down', 6);

        if (!(await this.stateField.isDisplayed())) {
            throw new Error('Personal Details is missing State');
        }

        await this.scrollUntilDisplayed(this.cityField, 'down', 6);

        if (!(await this.cityField.isDisplayed())) {
            throw new Error('Personal Details is missing City');
        }
    }

    async clickEducationDetailsSection() {
        await this.scrollUntilDisplayed(this.educationDetailsSection, 'down', 6);
        await this.click(this.educationDetailsSection);
    }

    async verifyEducationOptionsVisible() {
        await this.scrollUntilDisplayed(this.firstEducationSection, 'down', 6);

        if (!(await this.firstEducationSection.isDisplayed())) {
            throw new Error('Education Details is missing Education - 1');
        }

        if (!(await this.addEducationButton.isDisplayed())) {
            throw new Error('Education Details is missing Add Education');
        }
    }

    async clickFirstEducationSection() {
        await this.click(this.firstEducationSection);
    }

    async verifyEducationDetailsFieldsVisible() {
        if (!(await this.educationTypeField.isDisplayed())) {
            throw new Error('Education Details is missing Education Type');
        }

        if (!(await this.educationQualificationField.isDisplayed())) {
            throw new Error('Education Details is missing Qualification');
        }

        if (!(await this.educationDepartmentField.isDisplayed())) {
            throw new Error('Education Details is missing Department / Field of Study');
        }

        await this.scrollUntilDisplayed(this.educationInstituteField, 'down', 4);
        if (!(await this.educationInstituteField.isDisplayed())) {
            throw new Error('Education Details is missing Institute / College Name');
        }

        if (!(await this.educationYearOfPassingField.isDisplayed())) {
            throw new Error('Education Details is missing Year of Passing');
        }

        await this.scrollUntilDisplayed(this.educationCountryField, 'down', 4);

        if (!(await this.educationCountryField.isDisplayed())) {
            throw new Error('Education Details is missing Country');
        }

        await this.scrollUntilDisplayed(this.educationPincodeField, 'down', 4);
        if (!(await this.educationPincodeField.isDisplayed())) {
            throw new Error('Education Details is missing Pincode / Postal Code');
        }

        await this.scrollUntilDisplayed(this.educationCityField, 'down', 4);

        if (!(await this.educationCityField.isDisplayed())) {
            throw new Error('Education Details is missing City');
        }

        await this.scrollUntilDisplayed(this.educationStateField, 'down', 4);

        if (!(await this.educationStateField.isDisplayed())) {
            throw new Error('Education Details is missing State / Province');
        }

        await this.scrollUntilDisplayed(this.educationUniversityField, 'down', 4);
        if (!(await this.educationUniversityField.isDisplayed())) {
            throw new Error('Education Details is missing University Name');
        }

        await this.scrollUntilDisplayed(this.educationRegistrationAuthorityField, 'down', 4);

        if (!(await this.educationRegistrationAuthorityField.isDisplayed())) {
            throw new Error('Education Details is missing Registration Authority');
        }

        await this.scrollUntilDisplayed(this.educationRegistrationNumberField, 'down', 4);

        if (!(await this.educationRegistrationNumberField.isDisplayed())) {
            throw new Error('Education Details is missing Registration Number');
        }
    }

    async verifyEditProfile(profileType) {
        await this.clickEditProfile();
        await this.pause(3);
        await this.chooseProfileType(profileType);
        await this.pause(2);
        await this.verifyProfileSectionsVisible(profileType);
    }
}

export default new EditProfilePage();
