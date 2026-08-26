import Page from './Base.page.js';

class EmployerPostAJobPage extends Page {

    get createJobButton() {
        return $('id=corporate_home_manage_job_create_job_button');
    }

    get selectJobTypePopup() {
        return $('~Select Job Type');
    }

    get fullTimePartTimeRadioButton() {
        return $(
            '//android.view.View[@content-desc="Full-Time/Part Time"]/android.widget.RadioButton');
    }

    get procedureConsultationRadioButton() {
        return $(
            '//android.view.View[@content-desc="Procedure/Consultation"]/android.widget.RadioButton');
    }
    get cancelButton() {
        return $('id=radio_selection_popup_button1');
    }

    get nextButton() {
        return $('id=radio_selection_popup_button2');
    }

    get newJobPostTitle() {
        return $('~New Job Post');
    }

    get selectTemplatesButton() {
        return $('id=job_create_select_template_button');
    }

    get previousJobPostsButton() {
        return $('id=job_create_previous_jobs_button');
    }

    get jobTypeDropdown() {
        return $('id=job_post_job_type_dropdown');
    }

    get jobDurationDropdown() {
        return $('id=job_post_job_duration_dropdown');
    }

    get professionField() {
        return $(
            'android=new UiSelector()' +
            '.className("android.widget.EditText").instance(0)'
        );
    }

    get professionOption() {
        return $('~Doctor');
    }

    get jobTitleField() {
        return $('id=job_post_job_title_dropdown');
    }

    get jobTitleOption() {
        return $('~Cardiologist');
    }

    get qualificationField() {
        return $('id=job_post_qualification_dropdown');
    }

    get qualificationOption() {
        return $('~MBBS');
    }

    get specializationsField() {
        return $('id=job_post_specializations_dropdown');
    }

    get specializationOption() {
        return $('~Cardiology');
    }

    get departmentDropdown() {
        return $('id=job_post_department_dropdown');
    }

    get departmentOption() {
        return $('~Heart Surgeon');
    }

    get skillsField() {
        return $('id=job_post_skills_dropdown');
    }

    get skillOption() {
        return $('~Critical Care');
    }

    get generateWithAIButton() {
        return $('id=job_create_generate_with_ai_button');
    }

    get experienceField() {
        return $('//android.widget.ScrollView/android.view.View/android.widget.EditText');
    }

    get languagePreferredField() {
        return $('id=job_post_preferred_languages_dropdown');
    }

    get preferredLanguageOption() {
        return $('~English');
    }

    get writeWithAIButton() {
        return $('id=job_create_write_with_ai_button');
    }

    get uploadJDButton() {
        return $('id=job_create_upload_jd_button');
    }

    get writeOnMyOwnButton() {
        return $('id=job_create_write_on_my_own_button');
    }

    get jobDescriptionField() {
        return $('id=job_create_job_description_field');
    }

    get numberOfPositionsField() {
        return $('id=job_create_positions_field');
    }
    get salaryCompanyNormsCheckbox() {
        return $('id=job_create_salary_norms_checkbox');
    }

    get salaryRangeField() {
        return $('id=job_create_salary_range_field');
    }

    get salaryTypeDropdown() {
        return $('id=job_create_or_update_salary_type_dropdown');
    }

    get salaryTypeOption() {
        return $('~Monthly');
    }

    get otherFacilitiesField() {
        return $('id=job_create_facilities_field');
    }

    get dateOfJoiningField() {
        return $('//android.widget.Button[@resource-id="custom_text_field_suffix_button"]/android.widget.Button');
    }
    get dateOfJoiningOption() {
        return $('~30, Sunday, 30 August 2026');
    }

    get shiftDropdown() {
        return $('id=job_schedule_fulltime_longterm_shift_dropdown');
    }

    get shiftOption() {
        return $('~Day Shift');
    }

    get recruiterMyselfRadioButton() {
        return $('//android.widget.RadioButton[@content-desc="Myself"]');
    }

    get recruiterOthersRadioButton() {
        return $('//android.widget.RadioButton[@content-desc="Others"]');
    }

    get recruiterNameField() {
        return $('id=contact_information_recruiter_name_field');
    }

    get recruiterMobileNumberField() {
        return $('id=contact_information_recruiter_phone_field');
    }

    get recruiterEmailIdField(){
        return $('id=contact_information_recruiter_email_field');
    }

    get authorizationSameAsRecruiterCheckbox() {
        return $('id=contact_information_same_as_recruiter_checkbox');
    }

    get authorityNameField() {
        return $('id=contact_information_authority_name_field');
    }

    get authorityMobileNumberField() {
        return $('id=contact_information_authority_phone_field');
    }

    get authorityEmailField() {
        return $('id=contact_information_authority_email_field');
    }

    get viewEditJobLocationButton() {
        return $('id=job_create_view_edit_location_button');
    }

    get saveAsTemplateButton() {
        return $('//android.widget.Button[@content-desc="Save As Template"]');
    }

    get postJobButton() {
        return $('id=job_create_post_or_update_job_button');
    }

    get saveAsDraftButton() {
        return $('id=job_create_save_as_draft_button');
    }

    async clickCreateJob() {
        await this.click(this.createJobButton);
    }

    async waitForSelectJobTypePopup() {
        await this.selectJobTypePopup.waitForDisplayed({ timeout: 15000 });
    }

    async selectJobType(mode) {
        if (mode === 'Full-Time/Part Time') {
            await this.click(this.fullTimePartTimeRadioButton);
        } else if (mode === 'Procedure/Consultation') {
            await this.click(this.procedureConsultationRadioButton);
        } else {
            throw new Error(`Unsupported job type: ${mode}`);
        }
    }

    async clickNext() {
        await this.click(this.nextButton);
    }

    async enterProfession(profession) {
        await this.setText(this.professionField, profession);
        await this.verifyTextEntered(this.professionField, profession);
        await this.click(this.professionOption);
    }

    async enterJobTitle(jobTitle) {
        await this.setText(this.jobTitleField, jobTitle);
        await this.verifyTextEntered(this.jobTitleField, jobTitle);
        await this.click(this.jobTitleOption);
    }

    async enterQualification(qualification) {
        await this.setText(this.qualificationField, qualification);
        await this.verifyTextEntered(this.qualificationField, qualification);
        await this.click(this.qualificationOption);
    }

    async enterSpecialization(specialization) {
        await this.setText(this.specializationsField, specialization);
        await this.verifyTextEntered(this.specializationsField, specialization);
        await this.click(this.specializationOption);
    }

    async pressDoneOnKeyboard() {
        try {
            await driver.execute('mobile: performEditorAction', { action: 'done' });
        } catch (error) {
            // The field may not support an editor action.
        }
        try {
            await driver.hideKeyboard();
        } catch (hideError) {
            // Keyboard was already closed.
        }

        await this.pause(1);
    }

    async enterDepartment(department) {
        await this.setText(this.departmentDropdown, department);
        await this.verifyTextEntered(this.departmentDropdown, department);
        await this.click(this.departmentOption);
    }

    async enterSkill(skill) {
        await this.setText(this.skillsField, skill);
        await this.verifyTextEntered(this.skillsField, skill);
        await this.click(this.skillOption);
    }

    async enterExperience(experience) {
        await this.setText(this.experienceField, experience);
        await this.verifyTextEntered(this.experienceField, experience);
    }

    async enterPreferredLanguage(preferredLanguage) {
        await this.setText(this.languagePreferredField, preferredLanguage);
        await this.verifyTextEntered(this.languagePreferredField,preferredLanguage);
        await this.click(this.preferredLanguageOption);
    }

    async enterJobDescription(jobDescription) {
        await this.click(this.writeOnMyOwnButton);
        await this.setText(this.jobDescriptionField, jobDescription);
        await this.verifyTextEntered(this.jobDescriptionField, jobDescription);
    }

    async enterNumberOfPositions(numberOfPositions) {
        await this.clearText(this.numberOfPositionsField);
        await this.setText(this.numberOfPositionsField, numberOfPositions);
        await this.verifyTextEntered(this.numberOfPositionsField,numberOfPositions);
    }

    async enterSalaryRange(salaryRange) {
        await this.setText(this.salaryRangeField, salaryRange);
        await this.verifyTextEntered(this.salaryRangeField, salaryRange);
    }

    async selectSalaryType(salaryType) {
        await this.click(this.salaryTypeDropdown);

        if (salaryType === 'Monthly') {
            await this.click(this.salaryTypeOption);
        } else {
            throw new Error(`Unsupported salary type: ${salaryType}`);
        }
    }

    async enterOtherFacilities(otherFacilities) {
        await this.setText(this.otherFacilitiesField, otherFacilities);
        await this.verifyTextEntered(this.otherFacilitiesField,otherFacilities);
    }

    async enterDateOfJoining(dateOfJoining) {
        await this.click(this.dateOfJoiningField);

        if (dateOfJoining === '30-08-2026') {
            await this.click(this.dateOfJoiningOption);
        } else {
            throw new Error(`Unsupported date of joining: ${dateOfJoining}`);
        }
    }

    async selectShift(shift) {
        await this.click(this.shiftDropdown);

        if (shift === 'Day Shift') {
            await this.click(this.shiftOption);
        } else {
            throw new Error(`Unsupported shift: ${shift}`);
        }
    }

    async selectRecruiterMode(recruiterMode) {
        if (recruiterMode === 'Myself') {
            await this.click(this.recruiterMyselfRadioButton);
        } else if (recruiterMode === 'Others') {
            await this.click(this.recruiterOthersRadioButton);
        } else {
            throw new Error(`Unsupported recruiter mode: ${recruiterMode}`);
        }
    }

    async enterAuthorityName(authorityName) {
        await this.setText(this.authorityNameField, authorityName);
        await this.verifyTextEntered(this.authorityNameField, authorityName);
    }

    async enterAuthorityMobileNumber(authorityMobileNumber) {
        await this.setText(this.authorityMobileNumberField,authorityMobileNumber);
        await this.verifyTextEntered(this.authorityMobileNumberField,authorityMobileNumber);
    }

    async enterAuthorityEmail(authorityEmail) {
        await this.setText(this.authorityEmailField, authorityEmail);
        await this.verifyTextEntered(this.authorityEmailField, authorityEmail);
    }

    async chooseSubmissionMode(mode) {
        await this.pressDoneOnKeyboard();

        if (mode === 'Save As Template') {
            await this.scroll('down')
            await this.scrollUntilDisplayed(this.saveAsTemplateButton);
            await this.click(this.saveAsTemplateButton);
        } else if (mode === 'Post the Job') {
            await this.scroll('down')
            await this.scrollUntilDisplayed(this.postJobButton);
            await this.click(this.postJobButton);
        } else if (mode === 'Save as Draft') {
            await this.scroll('down')
            await this.scrollUntilDisplayed(this.saveAsDraftButton);
            await this.click(this.saveAsDraftButton);
        } else {
            throw new Error(`Unsupported submission mode: ${mode}`);
        }
    }

    async fillNewJobPostDetails(data) {
        await this.scrollUntilDisplayed(this.jobTitleField, 'up');
        await this.scroll('up');
        await this.enterProfession(data.profession);
        await this.enterJobTitle(data.jobTitle);
        await this.pressDoneOnKeyboard();
        await this.enterQualification(data.qualification);
        await this.pressDoneOnKeyboard();
        await this.enterSpecialization(data.specialization);
        await this.pressDoneOnKeyboard();
        await this.scrollUntilDisplayed(this.departmentDropdown);
        await this.enterDepartment(data.department);
        await this.pressDoneOnKeyboard();
        await this.scroll('down')
        await this.enterSkill(data.skill);
        await this.pressDoneOnKeyboard();
        await this.enterExperience(data.experience);
        await this.pressDoneOnKeyboard();
        await this.scrollUntilDisplayed(this.languagePreferredField);
        await this.enterPreferredLanguage(data.preferredLanguage);
        await this.pressDoneOnKeyboard();
        await this.scrollUntilDisplayed(this.writeOnMyOwnButton);
        await this.enterJobDescription(data.jobDescription);
        await this.pressDoneOnKeyboard();
        await this.scrollUntilDisplayed(this.numberOfPositionsField);
        await this.enterNumberOfPositions(data.numberOfPositions);
        await this.pressDoneOnKeyboard();
        await this.scrollUntilDisplayed(this.salaryRangeField);
        await this.enterSalaryRange(data.salaryRange);
        await this.selectSalaryType(data.salaryType);
        await this.enterOtherFacilities(data.otherFacilities);
        await this.pressDoneOnKeyboard();
        await this.scrollUntilDisplayed(this.dateOfJoiningField);
        await this.enterDateOfJoining(data.dateOfJoining);
        await this.selectShift(data.shift);
        await this.scrollUntilDisplayed(this.recruiterMyselfRadioButton);
        await this.selectRecruiterMode(data.recruiterMode);
        await this.scrollUntilDisplayed(this.authorityNameField);
        await this.enterAuthorityName(data.authorityName);
        await this.pressDoneOnKeyboard();
        await this.enterAuthorityMobileNumber(data.authorityMobileNumber);
        await this.pressDoneOnKeyboard();
        await this.enterAuthorityEmail(data.authorityEmail);
        await this.chooseSubmissionMode(data.submissionMode);
        await this.pause(2);
    }

    async newJobPostTitleVisible() {
        return await this.newJobPostTitle.isDisplayed().catch(() => false);
    }

    async selectTemplatesButtonVisible() {
        return await this.selectTemplatesButton.isDisplayed().catch(() => false);
    }

    async previousJobPostsButtonVisible() {
        return await this.previousJobPostsButton.isDisplayed().catch(() => false);
    }

    async jobTypeDropdownVisible() {
        return await this.jobTypeDropdown.isDisplayed().catch(() => false);
    }

    async jobDurationDropdownVisible() {
        return await this.jobDurationDropdown.isDisplayed().catch(() => false);
    }

    async professionFieldVisible() {
        return await this.professionField.isDisplayed().catch(() => false);
    }

    async jobTitleFieldVisible() {
        return await this.jobTitleField.isDisplayed().catch(() => false);
    }

    async qualificationFieldVisible() {
        return await this.qualificationField.isDisplayed().catch(() => false);
    }

    async specializationsFieldVisible() {
        return await this.specializationsField.isDisplayed().catch(() => false);
    }

    async departmentDropdownVisible() {
        return await this.departmentDropdown.isDisplayed().catch(() => false);
    }

    async skillsFieldVisible() {
        return await this.skillsField.isDisplayed().catch(() => false);
    }

    async generateWithAIButtonVisible() {
        return await this.generateWithAIButton.isDisplayed().catch(() => false);
    }

    async experienceFieldVisible() {
        return await this.experienceField.isDisplayed().catch(() => false);
    }

    async languagePreferredFieldVisible() {
        return await this.languagePreferredField.isDisplayed().catch(() => false);
    }

    async writeWithAIButtonVisible() {
        return await this.writeWithAIButton.isDisplayed().catch(() => false);
    }

    async uploadJDButtonVisible() {
        return await this.uploadJDButton.isDisplayed().catch(() => false);
    }

    async writeOnMyOwnButtonVisible() {
        return await this.writeOnMyOwnButton.isDisplayed().catch(() => false);
    }

    async numberOfPositionsFieldVisible() {
        return await this.numberOfPositionsField.isDisplayed().catch(() => false);
    }

    async salaryRangeFieldVisible() {
        return await this.salaryRangeField.isDisplayed().catch(() => false);
    }

    async salaryTypeDropdownVisible() {
        return await this.salaryTypeDropdown.isDisplayed().catch(() => false);
    }

    async salaryCompanyNormsCheckboxVisible() {
        return await this.salaryCompanyNormsCheckbox.isDisplayed().catch(() => false);
    }

    async otherFacilitiesFieldVisible() {
        return await this.otherFacilitiesField.isDisplayed().catch(() => false);
    }

    async dateOfJoiningFieldVisible() {
        return await this.dateOfJoiningField.isDisplayed().catch(() => false);
    }

    async shiftDropdownVisible() {
        return await this.shiftDropdown.isDisplayed().catch(() => false);
    }

    async recruiterMyselfRadioButtonVisible() {
        return await this.recruiterMyselfRadioButton.isDisplayed().catch(() => false);
    }

    async recruiterOthersRadioButtonVisible() {
        return await this.recruiterOthersRadioButton.isDisplayed().catch(() => false);
    }

    async recruiterNameFieldVisible() {
        return await this.recruiterNameField.isDisplayed().catch(() => false);
    }

    async recruiterMobileNumberFieldVisible() {
        return await this.recruiterMobileNumberField.isDisplayed().catch(() => false);
    }

    async authorizationSameAsRecruiterCheckboxVisible() {
        return await this.authorizationSameAsRecruiterCheckbox.isDisplayed().catch(() => false);
    }

    async authorityNameFieldVisible() {
        return await this.authorityNameField.isDisplayed().catch(() => false);
    }

    async authorityMobileNumberFieldVisible() {
        return await this.authorityMobileNumberField.isDisplayed().catch(() => false);
    }

    async authorityEmailFieldVisible() {
        return await this.authorityEmailField.isDisplayed().catch(() => false);
    }

    async viewEditJobLocationButtonVisible() {
        return await this.viewEditJobLocationButton.isDisplayed().catch(() => false);
    }

    async saveAsTemplateButtonVisible() {
        return await this.saveAsTemplateButton.isDisplayed().catch(() => false);
    }

    async postJobButtonVisible() {
        return await this.postJobButton.isDisplayed().catch(() => false);
    }

    async saveAsDraftButtonVisible() {
        return await this.saveAsDraftButton.isDisplayed().catch(() => false);
    }

    async verifyNewJobPostPageVisible() {
        if (!(await this.newJobPostTitleVisible())) {
            throw new Error('New Job Post page is missing the title');
        }

        if (!(await this.selectTemplatesButtonVisible())) {
            throw new Error('New Job Post page is missing Select Templates');
        }

        if (!(await this.previousJobPostsButtonVisible())) {
            throw new Error('New Job Post page is missing Previous Job Posts');
        }

        if (!(await this.jobTypeDropdownVisible())) {
            throw new Error('New Job Post page is missing Job Type');
        }

        if (!(await this.jobDurationDropdownVisible())) {
            throw new Error('New Job Post page is missing Job Duration');
        }

        if (!(await this.professionFieldVisible())) {
            throw new Error('New Job Post page is missing Profession');
        }

        if (!(await this.jobTitleFieldVisible())) {
            throw new Error('New Job Post page is missing Job Title');
        }

        if (!(await this.qualificationFieldVisible())) {
            throw new Error('New Job Post page is missing Qualification');
        }

        await this.scrollUntilDisplayed(this.departmentDropdown);
        
        if (!(await this.specializationsFieldVisible())) {
            throw new Error('New Job Post page is missing Specializations');
        }

        if (!(await this.departmentDropdownVisible())) {
            throw new Error('New Job Post page is missing Department');
        }

        if (!(await this.skillsFieldVisible())) {
            throw new Error('New Job Post page is missing Skills');
        }

        if (!(await this.generateWithAIButtonVisible())) {
            throw new Error('New Job Post page is missing Generate with AI');
        }

        if (!(await this.experienceFieldVisible())) {
            throw new Error('New Job Post page is missing Experience');
        }

        await this.scrollUntilDisplayed(this.languagePreferredField);

        if (!(await this.languagePreferredFieldVisible())) {
            throw new Error('New Job Post page is missing Language Preferred');
        }

        await this.scrollUntilDisplayed(this.writeWithAIButton);

        if (!(await this.writeWithAIButtonVisible())) {
            throw new Error('New Job Post page is missing Write with AI');
        }

        await this.scrollUntilDisplayed(this.uploadJDButton);

        if (!(await this.uploadJDButtonVisible())) {
            throw new Error('New Job Post page is missing Upload JD');
        }

        await this.scrollUntilDisplayed(this.writeOnMyOwnButton);
        if (!(await this.writeOnMyOwnButtonVisible())) {
            throw new Error('New Job Post page is missing Write on My Own');
        }

        await this.scrollUntilDisplayed(this.numberOfPositionsField);
        
        if (!(await this.numberOfPositionsFieldVisible())) {
            throw new Error('New Job Post page is missing Number of Positions');
        }

        await this.scrollUntilDisplayed(this.salaryRangeField);

        if (!(await this.salaryRangeFieldVisible())) {
            throw new Error('New Job Post page is missing Salary Range');
        }

        if (!(await this.salaryTypeDropdownVisible())) {
            throw new Error('New Job Post page is missing Salary Type');
        }

        if (!(await this.salaryCompanyNormsCheckboxVisible())) {
            throw new Error('New Job Post page is missing Salary Company Norms checkbox');
        }

        if (!(await this.otherFacilitiesFieldVisible())) {
            throw new Error('New Job Post page is missing Other Facilities');
        }

        await this.scrollUntilDisplayed(this.dateOfJoiningField);

        if (!(await this.dateOfJoiningFieldVisible())) {
            throw new Error('New Job Post page is missing Date of Joining');
        }

        if (!(await this.shiftDropdownVisible())) {
            throw new Error('New Job Post page is missing Shift');
        }

        await this.scrollUntilDisplayed(this.recruiterMyselfRadioButton);
        
        if (!(await this.recruiterMyselfRadioButtonVisible())) {
            throw new Error('New Job Post page is missing Recruiter Myself');
        }

        if (!(await this.recruiterOthersRadioButtonVisible())) {
            throw new Error('New Job Post page is missing Recruiter Others');
        }

        if (!(await this.recruiterNameFieldVisible())) {
            throw new Error('New Job Post page is missing Recruiter Name');
        }

        await this.scrollUntilDisplayed(this.recruiterMobileNumberField);

        if (!(await this.recruiterMobileNumberFieldVisible())) {
            throw new Error('New Job Post page is missing Recruiter Mobile Number');
        }

        await this.scrollUntilDisplayed(this.authorityEmailField);

        if (!(await this.authorizationSameAsRecruiterCheckboxVisible())) {
            throw new Error('New Job Post page is missing Same as Recruiter checkbox');
        }

        if (!(await this.authorityNameFieldVisible())) {
            throw new Error('New Job Post page is missing Authority Name');
        }

        if (!(await this.authorityMobileNumberFieldVisible())) {
            throw new Error('New Job Post page is missing Authority Mobile Number');
        }

        if (!(await this.authorityEmailFieldVisible())) {
            throw new Error('New Job Post page is missing Authority Email');
        }

        if (!(await this.viewEditJobLocationButtonVisible())) {
            throw new Error('New Job Post page is missing Job Location');
        }

        await this.scrollUntilDisplayed(this.saveAsTemplateButton);

        if (!(await this.saveAsTemplateButtonVisible())) {
            throw new Error('New Job Post page is missing Save As Template');
        }

        if (!(await this.postJobButtonVisible())) {
            throw new Error('New Job Post page is missing Post the Job');
        }

        if (!(await this.saveAsDraftButtonVisible())) {
            throw new Error('New Job Post page is missing Save as Draft');
        }
    }
}

export default new EmployerPostAJobPage();
