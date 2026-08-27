import Page from './Base.page.js';

class HomePage extends Page {

    get menuButton() {
        return $('id=common_header_drawer_icon');
    }

    get chatButton() {
        return $('id=common_header_request_icon');
    }

    get notificationButton() {
        return $('id=common_header_notification_icon');
    }

    get openToWork() {
        return $('~Open To Work');
    }

    get openToWorkOverseas() {
        return $('~Open To Work Overseas');
    }

    get yesOption() {
        return $('~Yes');
    }

    get noOption() {
        return $('~No');
    }

    get maybeOption() {
        return $('~Maybe');
    }

    get searchJobs() {
        return $('id=candidate_home_search_jobs_button');
    }

    get recommendedJobs() {
        return $('id=candidate_home_recommended_jobs_button');
    }

    get createAvailability() {
        return $('id=candidate_home_create_availability_button');
    }

    get editProfile() {
        return $('id=candidate_home_edit_profile_button');
    }

    get jobInvites() {
        return $('id=candidate_home_job_invites_button');
    }

    get myJobsHeading() {
        return $('//android.view.View[@content-desc="My Jobs"]');
    }

    get currentJobs() {
        return $('id=candidate_home_current_jobs_button');
    }

    get upcomingJobs() {
        return $('id=candidate_home_upcoming_jobs_button');
    }

    get appliedJobs() {
        return $('id=default_home_applied_jobs_button');
    }

    get offeredJobs() {
        return $('id=default_home_offered_jobs_button');
    }

    get declinedJobs() {
        return $('id=default_home_declined_jobs_button');
    }

    get homeNavigation() {
        return $('id=bottom_nav_home_tab');
    }

    get dashboardNavigation() {
        return $('id=bottom_nav_dashboard_tab');
    }

    get myJobsNavigation() {
        return $('id=bottom_nav_my_jobs_tab');
    }

    get appliedNavigation() {
        return $('id=bottom_nav_applied_tab');
    }
    get availabilityNavigation() {
        return $('id=bottom_nav_availability_tab');
    }

    async menuButtonVisible() {
        return await this.menuButton.isDisplayed().catch(() => false);
    }

    async chatButtonVisible() {
        return await this.chatButton.isDisplayed().catch(() => false);
    }

    async notificationButtonVisible() {
        return await this.notificationButton.isDisplayed().catch(() => false);
    }

    async openToWorkVisible() {
        return await this.openToWork.isDisplayed().catch(() => false);
    }

    async openToWorkOverseasVisible() {
        return await this.openToWorkOverseas.isDisplayed().catch(() => false);
    }

    async yesOptionVisible() {
        return await this.yesOption.isDisplayed().catch(() => false);
    }

    async noOptionVisible() {
        return await this.noOption.isDisplayed().catch(() => false);
    }

    async maybeOptionVisible() {
        return await this.maybeOption.isDisplayed().catch(() => false);
    }

    async searchJobsVisible() {
        return await this.searchJobs.isDisplayed().catch(() => false);
    }

    async recommendedJobsVisible() {
        return await this.recommendedJobs.isDisplayed().catch(() => false);
    }

    async createAvailabilityVisible() {
        return await this.createAvailability.isDisplayed().catch(() => false);
    }

    async editProfileVisible() {
        return await this.editProfile.isDisplayed().catch(() => false);
    }

    async jobInvitesVisible() {
        return await this.jobInvites.isDisplayed().catch(() => false);
    }

    async myJobsHeadingVisible() {
        return await this.myJobsHeading.isDisplayed().catch(() => false);
    }

    async currentJobsVisible() {
        return await this.currentJobs.isDisplayed().catch(() => false);
    }

    async upcomingJobsVisible() {
        return await this.upcomingJobs.isDisplayed().catch(() => false);
    }

    async appliedJobsVisible() {
        return await this.appliedJobs.isDisplayed().catch(() => false);
    }

    async offeredJobsVisible() {
        return await this.offeredJobs.isDisplayed().catch(() => false);
    }

    async declinedJobsVisible() {
        return await this.declinedJobs.isDisplayed().catch(() => false);
    }

    async homeNavigationVisible() {
        return await this.homeNavigation.isDisplayed().catch(() => false);
    }

    async dashboardNavigationVisible() {
        return await this.dashboardNavigation.isDisplayed().catch(() => false);
    }

    async myJobsNavigationVisible() {
        return await this.myJobsNavigation.isDisplayed().catch(() => false);
    }

    async appliedNavigationVisible() {
        return await this.appliedNavigation.isDisplayed().catch(() => false);
    }

    async verifyHomePageVisible() {
        if (!(await this.menuButtonVisible())) {
            throw new Error('Home page is missing Menu button');
        }

        if (!(await this.chatButtonVisible())) {
            throw new Error('Home page is missing Chat button');
        }

        if (!(await this.notificationButtonVisible())) {
            throw new Error('Home page is missing Notification button');
        }

        if (!(await this.openToWorkVisible())) {
            throw new Error('Home page is missing "Open To Work"');
        }

        if (!(await this.openToWorkOverseasVisible())) {
            throw new Error('Home page is missing "Open To Work Overseas"');
        }

        if (!(await this.yesOptionVisible())) {
            throw new Error('Home page is missing Yes option');
        }

        if (!(await this.noOptionVisible())) {
            throw new Error('Home page is missing No option');
        }

        if (!(await this.maybeOptionVisible())) {
            throw new Error('Home page is missing Maybe option');
        }

        if (!(await this.searchJobsVisible())) {
            throw new Error('Home page is missing "Search Jobs"');
        }

        if (!(await this.recommendedJobsVisible())) {
            throw new Error('Home page is missing "Recommended Jobs"');
        }

        if (!(await this.createAvailabilityVisible())) {
            throw new Error('Home page is missing "Create Availability"');
        }

        if (!(await this.editProfileVisible())) {
            throw new Error('Home page is missing "Edit Profile"');
        }

        if (!(await this.jobInvitesVisible())) {
            throw new Error('Home page is missing "Job Invites"');
        }

        if (!(await this.myJobsHeadingVisible())) {
            throw new Error('Home page is missing "My Jobs" heading');
        }

        if (!(await this.currentJobsVisible())) {
            throw new Error('Home page is missing "Current Jobs"');
        }

        if (!(await this.upcomingJobsVisible())) {
            throw new Error('Home page is missing "Upcoming Jobs"');
        }

        await this.scroll('down');

        if (!(await this.appliedJobsVisible())) {
            throw new Error('Home page is missing "Applied Jobs"');
        }

        if (!(await this.offeredJobsVisible())) {
            throw new Error('Home page is missing "Offered Jobs"');
        }

        if (!(await this.declinedJobsVisible())) {
            throw new Error('Home page is missing "Declined Jobs"');
        }

        if (!(await this.homeNavigationVisible())) {
            throw new Error('Home page is missing Home navigation');
        }

        if (!(await this.dashboardNavigationVisible())) {
            throw new Error('Home page is missing Dashboard navigation');
        }

        if (!(await this.myJobsNavigationVisible())) {
            throw new Error('Home page is missing My Jobs navigation');
        }

        if (!(await this.appliedNavigationVisible())) {
            throw new Error('Home page is missing Applied navigation');
        }
    }
    
}

export default new HomePage();
