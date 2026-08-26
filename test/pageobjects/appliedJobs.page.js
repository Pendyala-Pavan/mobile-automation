import Page from './Base.page.js';

class AppliedJobsPage extends Page {
    get appliedJobsButton() {
        return $('id=default_home_applied_jobs_button');
    }

    get firstAppliedJob() {
        return $$('//android.view.View[contains(@content-desc, "Job ID:")]')[0];
    }

    get jobDetailsBackButton() {
        return $('id=job_details_back_icon');
    }

    async openAppliedJobs() {
        await this.scroll('down');
        await this.pause(1);
        await this.click(this.appliedJobsButton);
        await this.waitForElement(this.firstAppliedJob);
    }

    async openFirstAppliedJob() {
        await this.waitForElement(this.firstAppliedJob);
        await this.click(this.firstAppliedJob);
        await this.waitForElement(this.jobDetailsBackButton);
    }

    async returnToAppliedJobs() {
        await this.click(this.jobDetailsBackButton);
        await this.waitForElement(this.firstAppliedJob);
    }
}

export default new AppliedJobsPage();
