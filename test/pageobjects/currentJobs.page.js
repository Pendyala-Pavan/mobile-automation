import Page from './Base.page.js';

class CurrentJobsPage extends Page {
    get currentJobsButton() {
        return $('id=candidate_home_current_jobs_button');
    }

    get myJobsHeading() {
        return $('~My Jobs');
    }

    get currentJobTab() {
        return $('~Current Job');
    }

    get homeTab() {
        return $('id=bottom_nav_home_tab');
    }

    async openCurrentJobs() {
        await this.waitForElement(this.currentJobsButton);
        await this.click(this.currentJobsButton);
        await this.waitForElement(this.myJobsHeading);
        //await this.waitForElement(this.currentJobTab);
    }

    async returnToHome() {
        await this.click(this.homeTab);
        await this.waitForElement(this.currentJobsButton);
    }
}

export default new CurrentJobsPage();
