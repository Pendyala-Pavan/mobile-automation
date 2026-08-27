import Page from './Base.page.js';

class RaiseRequestPage extends Page {
    get offeredJobsButton() {
        return $('id=default_home_offered_jobs_button');
    }

    get firstOfferedJob() {
        return $$('//android.view.View[contains(@content-desc, "Job ID:")]')[0];
    }

    get jobDetailsBackButton() {
        return $('id=application_status_back_button');
    }

    get raiseRequestButton() {
        return $('id=application_status_raise_request_button');
    }

    get declineButton() {
        return $('id=application_status_decline_offer_link_button');
    }

    get acceptOfferButton() {
        return $('~Accept Offer');
    }

    async openOfferedJobs() {
        await this.scroll('down');
        await this.pause(1);
        await this.click(this.offeredJobsButton);
        await this.waitForElement(this.firstOfferedJob);
    }

    async openFirstOfferedJob() {
        await this.click(this.firstOfferedJob);
        await this.waitForElement(this.jobDetailsBackButton);
    }

    async verifyOfferActionsVisible() {
        if (!(await this.raiseRequestButton.isDisplayed())) {
            throw new Error('Offered Job Details is missing Raise Request');
        }

        if (!(await this.declineButton.isDisplayed())) {
            throw new Error('Offered Job Details is missing Decline');
        }

        if (!(await this.acceptOfferButton.isDisplayed())) {
            throw new Error('Offered Job Details is missing Accept Offer');
        }
    }

    async returnToOfferedJobs() {
        await this.click(this.jobDetailsBackButton);
        await this.waitForElement(this.firstOfferedJob);
    }
}

export default new RaiseRequestPage();
