import Page from './Base.page.js';

class DeclinedJobsPage extends Page {
    get declinedJobsButton() {
        return $('id=default_home_declined_jobs_button');
    }

    get firstDeclinedJob() {
        return $$('//android.view.View[contains(@content-desc, "Job ID:")]')[0];
    }

    get jobDetailsBackButton() {
        return $('id=application_status_back_button');
    }

    get offerDeclinedStatus() {
        return $('~Offer Declined');
    }

    async openDeclinedJobs() {
        await this.scroll('down');
        await this.pause(1);
        await this.click(this.declinedJobsButton);
        await this.waitForElement(this.firstDeclinedJob);
    }

    async openFirstDeclinedJob() {
        await this.waitForElement(this.firstDeclinedJob);
        await this.click(this.firstDeclinedJob);
        await this.waitForElement(this.jobDetailsBackButton);
    }

    async verifyOfferDeclinedVisible() {
        if (!(await this.offerDeclinedStatus.isDisplayed())) {
            throw new Error(
                'Declined Job Details is missing Offer Declined status'
            );
        }
    }

    async returnToDeclinedJobs() {
        await this.click(this.jobDetailsBackButton);
        await this.waitForElement(this.firstDeclinedJob);
    }
}

export default new DeclinedJobsPage();
