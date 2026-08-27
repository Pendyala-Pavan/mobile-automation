import Page from './Base.page.js';

class UploadResumePage extends Page {

    get welcomeHeading() {
        return $('~Welcome to Nextenti');
    }

    get profileSetupDescription() {
        return $('~Let\'s get your profile set up. Choose how you\'d like to get started:');
    }

    get uploadResumeCard() {
        return $$('id=profile_resume_selection_card_button')[0];
    }

    get manualProfileSetupCard() {
        return $$('id=profile_resume_selection_card_button')[1];
    }

    async waitForUploadResumePage() {
        await this.waitForElement(this.welcomeHeading);
        await this.waitForElement(this.uploadResumeCard);
        await this.waitForElement(this.manualProfileSetupCard);
    }

    async welcomeHeadingVisible() {
        return await this.welcomeHeading.isDisplayed().catch(() => false);
    }

    async profileSetupDescriptionVisible() {
        return await this.profileSetupDescription.isDisplayed().catch(() => false);
    }

    async uploadResumeCardVisible() {
        return await this.uploadResumeCard.isDisplayed().catch(() => false);
    }

    async manualProfileSetupCardVisible() {
        return await this.manualProfileSetupCard.isDisplayed().catch(() => false);
    }

    async verifyUploadResumePageVisible() {
        if (!(await this.welcomeHeadingVisible())) {
            throw new Error('Upload Resume page is missing "Welcome to Nextenti"');
        }

        if (!(await this.profileSetupDescriptionVisible())) {
            throw new Error('Upload Resume page is missing the profile setup description');
        }

        if (!(await this.uploadResumeCardVisible())) {
            throw new Error('Upload Resume page is missing the Upload Resume (CV) card');
        }

        if (!(await this.manualProfileSetupCardVisible())) {
            throw new Error('Upload Resume page is missing the Manual Profile Setup card');
        }
    }

    async clickUploadResumeCard() {
        await this.click(this.uploadResumeCard);
    }

    async selectResume(localPath) {
        const resumeName = localPath.split('/').pop().replace(/\.[^/.]+$/, '');
        const resumeFile = $(`android=new UiSelector().textContains("${resumeName}")`);

        await this.click(resumeFile);
    }

}

export default new UploadResumePage();
