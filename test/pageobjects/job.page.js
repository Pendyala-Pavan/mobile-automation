import Page from './Base.page.js';

class JobPage extends Page {

    get searchJobsButton() {
        return $('id=candidate_home_search_jobs_button');
    }
    get recommendedTab() {
        return $('id=available_jobs_status_tab_0');
    }
    get clickAllJobsButton() {
        return $('id=available_jobs_status_tab_1');
    }
    get savedTab() {
        return $('id=available_jobs_status_tab_2');
    }
    get jobTitle() {
        return $('id=job_list_search_field');
    }
    get organization() {
        return $('id=job_list_organization_field');
    }
    get location() {
       return $('id=job_list_location_field');
    }
    get jobSearchSubmitButton() {
        return $('~Search Jobs');
    }
    // get firstJobCard() {
    //     return $('(//android.widget.Button[@resource-id="matched_job_card_item"])[1]');
    // }
    get jobCards() {
        return $$('//android.view.View[contains(@content-desc, "Job ID:")]');
    }
    get applyButton() {
        return $('~Apply');
    }
    get jobDetailsBackButton() {
        return $('id=job_details_back_icon');
    }
    get submitButtton() {
        return $('id=proceed_with_application_submit_with_resume_toggle');
    }
    get continueWithResumeButton() {
        return $('id=proceed_with_application_continue_with_current_resume_button');
    }

    async clickSearchJobs() {
        await this.click(this.searchJobsButton);
    }
    async clickRecommendedJobs() {
        await this.click(this.recommendedTab);
    }
    async clickAllJobs() {
        await this.click(this.clickAllJobsButton);
    }
    async enterJobTitle(title) {
        await this.setText(this.jobTitle, title);
        await this.verifyTextEntered(this.jobTitle, title);
    }
    async enterOrganization(org) {
        await this.setText(this.organization, org);
        await this.verifyTextEntered(this.organization, org);
    }
    async enterLocation(loc) {
        await this.setText(this.location, loc);
        await this.verifyTextEntered(this.location, loc);
    }
    async clickJobSearchSubmit() {
        await this.click(this.jobSearchSubmitButton);
    }
    async pressDoneOnKeyboard() {
        try {
            await driver.execute('mobile: performEditorAction', {
                action: 'done'
            });
        } catch (error) {
            await driver.hideKeyboard().catch(() => {});
        }
    }
    async chooseJobMode(jobData) {
        if (jobData.jobMode === 'Recommended') {
            await this.clickRecommendedJobs();
            await this.pause(3);
        } else if (jobData.jobMode === 'All') {
            await this.clickAllJobs();
            await this.pause(3);
            await this.enterJobTitle(jobData.jobTitle);
            await this.enterOrganization(jobData.organization);
            await this.enterLocation(jobData.location);
            await this.pressDoneOnKeyboard();
            await this.clickJobSearchSubmit();
            await this.pause(3);
        } else if (jobData.jobMode === 'Saved') {
            await this.clickSavedTab();
            await this.pause(3);
        } else {
            throw new Error(`Unsupported job mode: ${jobData.jobMode}`);
        }
    }
    async searchAndApply(jobData) {
        await this.clickSearchJobs();
        await this.pause(3);
        await this.chooseJobMode(jobData);
        await this.applyToAvailableJob(3);
    }
    async clickFirstVisibleJob() {
        const jobCards = await this.jobCards;

        for (const jobCard of jobCards) {
            const displayed = await jobCard.isDisplayed().catch(() => false);
            const enabled = displayed &&
                await jobCard.isEnabled().catch(() => false);

            if (enabled) {
                await jobCard.click();
                return;
            }
        }

        throw new Error('No visible and enabled job card found');
    }
    async waitForJobDetails() {
        await this.waitForElement(this.applyButton);
    }
    async clickApply() {
        await this.click(this.applyButton);
    }
    async clickSavedTab() {
        await this.click(this.savedTab);
    }
    async clickSubmit() {
        await this.click(this.submitButtton);
    }
    async clickContinueWithResume() {
        await this.click(this.continueWithResumeButton);
    }
    async returnToJobList() {
        await this.click(this.jobDetailsBackButton);
        await this.pause(1);

        const keyboardOpen = await driver.isKeyboardShown().catch(() => false);

        if (keyboardOpen) {
            await driver.hideKeyboard();
        }

        await driver.waitUntil(async () => {
            const jobCards = await this.jobCards;

            for (const jobCard of jobCards) {
                if (await jobCard.isDisplayed().catch(() => false)) {
                    return true;
                }
            }

            return false;
        }, {
            timeout: 10000,
            timeoutMsg: 'No visible job card found after returning to the job list'
        });
    }

    async applyToAvailableJob(maxAttempts = 3) {
        for (let attempt = 1; attempt <= maxAttempts; attempt++) {
            await this.clickFirstVisibleJob();
            await this.pause(2);

            const applyVisible = await this.applyButton.isDisplayed().catch(() => false);

            const applyEnabled = applyVisible &&
                await this.applyButton.isEnabled().catch(() => false);

            if (applyEnabled) {
                await this.clickApply();
                await this.clickSubmit();
                await this.clickContinueWithResume();
                return;
            }

            await this.returnToJobList();
            await this.pause(1);

            if (attempt < maxAttempts) {
                await this.scroll('down');
                await this.pause(1);
            }
        }

        throw new Error(
            `No enabled Apply button found after checking ${maxAttempts} jobs`
        );
    }

}

export default new JobPage();
