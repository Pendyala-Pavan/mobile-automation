import Page from './Base.page.js';

class UpcomingJobsPage extends Page {
    get upcomingJobsButton() {
        return $('id=candidate_home_upcoming_jobs_button');
    }

    get myJobsHeading() {
        return $('~My Jobs');
    }

    get upcomingJobTab() {
        return $('~Upcoming Job');
    }

    get filterByDateButton() {
        return $('id=candidate_my_jobs_upcoming_filter_by_date_button');
    }

    get homeTab() {
        return $('id=bottom_nav_home_tab');
    }

    async openUpcomingJobs() {
        await this.waitForElement(this.upcomingJobsButton);
        await this.click(this.upcomingJobsButton);
        await this.waitForElement(this.myJobsHeading);
        //await this.waitForElement(this.upcomingJobTab);
    }

    async verifyFilterVisible() {
        if (!(await this.filterByDateButton.isDisplayed())) {
            throw new Error('Upcoming Jobs page is missing Filter by date');
        }
    }

    async returnToHome() {
        await this.click(this.homeTab);
        await this.waitForElement(this.upcomingJobsButton);
    }
}

export default new UpcomingJobsPage();
