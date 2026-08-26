import Page from './Base.page.js';

class DashboardPage extends Page {
    get dashboardNavigation() {
        return $('id=bottom_nav_dashboard_tab');
    }
    get menuButton() {
        return $('id=common_header_drawer_icon');
    }

    get chatButton() {
        return $('id=common_header_request_icon');
    }

    get notificationButton() {
        return $('id=common_header_notification_icon');
    }

    get myApplicationsHeading() {
        return $('~My Applications');
    }

    get appliedApplications() {
        return $$('id=dashboard_custom_card_button')[0];
    }

    get offeredApplications() {
        return $$('id=dashboard_custom_card_button')[1];
    }

    get declinedApplications() {
        return $$('id=dashboard_custom_card_button')[2];
    }

    get jobsPopupCloseButton() {
        return $('//android.widget.Button');
    }

    get myJobsHeading() {
        return $('//android.view.View[@content-desc="My Jobs"]');
    }

    get currentJobs() {
        return $$('id=dashboard_custom_card_button')[3];
    }

    get upcomingJobs() {
        return $$('id=dashboard_custom_card_button')[4];
    }

    get completedJobs() {
        return $$('id=dashboard_custom_card_button')[5];
    }

    get topMatchesHeading() {
        return $('~Top matches for you');
    }

    get profileComplete() {
        return $('~Profile Complete');
    }

    get updateProfileDescription() {
        return $('//android.view.View[@content-desc="Update your profile regularly\nfor better job matches"]');
    }

    get updateProfileButton() {
        return $('id=candidate_dashboard2_profile_update_button');
    }

    get myAvailabilityHeading() {
        return $('~My Availability');
    }

    get addAvailabilityButton() {
        return $('id=candidate_dashboard2_add_availability_button');
    }

    get myPreferenceHeading() {
        return $('~My Preference');
    }

    get editPreferenceButton() {
        return $('id=candidate_dashboard2_edit_preference_button');
    }

    get actionRequiredHeading() {
        return $('~Action Required');
    }



    get updatesForYouHeading() {
        return $('~Updates for you');
    }

    async clickDashboard() {
        await this.click(this.dashboardNavigation);
    }
    async clickappliedjobs() {
        await this.click(this.appliedApplications);
    }
    
    async clickofferedjobs() {
        await this.click(this.offeredApplications);
    }
    
    async clickdeclinedjobs() {
        await this.click(this.declinedApplications);
    }

    async clickJobsPopupCloseButton() {
        await this.click(this.jobsPopupCloseButton);
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

    async myApplicationsHeadingVisible() {
        return await this.myApplicationsHeading.isDisplayed().catch(() => false);
    }

    async appliedApplicationsVisible() {
        return await this.appliedApplications.isDisplayed().catch(() => false);
    }

    async offeredApplicationsVisible() {
        return await this.offeredApplications.isDisplayed().catch(() => false);
    }

    async declinedApplicationsVisible() {
        return await this.declinedApplications.isDisplayed().catch(() => false);
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

    async completedJobsVisible() {
        return await this.completedJobs.isDisplayed().catch(() => false);
    }

    async topMatchesHeadingVisible() {
        return await this.topMatchesHeading.isDisplayed().catch(() => false);
    }

    async profileCompleteVisible() {
        return await this.profileComplete.isDisplayed().catch(() => false);
    }

    async updateProfileDescriptionVisible() {
        return await this.updateProfileDescription.isDisplayed().catch(() => false);
    }

    async updateProfileButtonVisible() {
        return await this.updateProfileButton.isDisplayed().catch(() => false);
    }

    async myAvailabilityHeadingVisible() {
        return await this.myAvailabilityHeading.isDisplayed().catch(() => false);
    }

    async addAvailabilityButtonVisible() {
        return await this.addAvailabilityButton.isDisplayed().catch(() => false);
    }

    async myPreferenceHeadingVisible() {
        return await this.myPreferenceHeading.isDisplayed().catch(() => false);
    }

    async editPreferenceButtonVisible() {
        return await this.editPreferenceButton.isDisplayed().catch(() => false);
    }

    async actionRequiredHeadingVisible() {
        return await this.actionRequiredHeading.isDisplayed().catch(() => false);
    }

    async noActionsRequiredVisible() {
        return await this.noActionsRequired.isDisplayed().catch(() => false);
    }

    async updatesForYouHeadingVisible() {
        return await this.updatesForYouHeading.isDisplayed().catch(() => false);
    }

    async verifyDashboardPageVisible() {
        if (!(await this.menuButtonVisible())) {
            throw new Error('Dashboard page is missing Menu button');
        }

        if (!(await this.chatButtonVisible())) {
            throw new Error('Dashboard page is missing Chat button');
        }

        if (!(await this.notificationButtonVisible())) {
            throw new Error('Dashboard page is missing Notification button');
        }

        if (!(await this.myApplicationsHeadingVisible())) {
            throw new Error('Dashboard page is missing "My Applications"');
        }

        if (!(await this.appliedApplicationsVisible())) {
            throw new Error('Dashboard page is missing Applied applications');
        }

        if (!(await this.offeredApplicationsVisible())) {
            throw new Error('Dashboard page is missing Offered applications');
        }

        if (!(await this.declinedApplicationsVisible())) {
            throw new Error('Dashboard page is missing Declined applications');
        }

        if (!(await this.myJobsHeadingVisible())) {
            throw new Error('Dashboard page is missing "My Jobs"');
        }

        if (!(await this.currentJobsVisible())) {
            throw new Error('Dashboard page is missing "Current Jobs"');
        }

        if (!(await this.upcomingJobsVisible())) {
            throw new Error('Dashboard page is missing "Upcoming Jobs"');
        }

        if (!(await this.completedJobsVisible())) {
            throw new Error('Dashboard page is missing "Completed" jobs');
        }

        if (!(await this.topMatchesHeadingVisible())) {
            throw new Error('Dashboard page is missing "Top matches for you"');
        }

        if (!(await this.profileCompleteVisible())) {
            throw new Error('Dashboard page is missing "Profile Complete"');
        }

        if (!(await this.updateProfileDescriptionVisible())) {
            throw new Error('Dashboard page is missing the profile update description');
        }

        if (!(await this.updateProfileButtonVisible())) {
            throw new Error('Dashboard page is missing Update button');
        }

        await this.scroll('down');

        if (!(await this.myAvailabilityHeadingVisible())) {
            throw new Error('Dashboard page is missing "My Availability"');
        }

        if (!(await this.addAvailabilityButtonVisible())) {
            throw new Error('Dashboard page is missing "Add Availability"');
        }

        if (!(await this.myPreferenceHeadingVisible())) {
            throw new Error('Dashboard page is missing "My Preference"');
        }

        if (!(await this.editPreferenceButtonVisible())) {
            throw new Error('Dashboard page is missing Preference Edit button');
        }

        await this.scroll('down');

        if (!(await this.actionRequiredHeadingVisible())) {
            throw new Error('Dashboard page is missing "Action Required"');
        }

        if (!(await this.updatesForYouHeadingVisible())) {
            throw new Error('Dashboard page is missing "Updates for you"');
        }
    }
    async clickappliedjobs() {
        await this.click(this.appliedApplications);
    }
    
    async clickofferedjobs() {
        await this.click(this.offeredApplications);
    }
    
    async clickdeclinedjobs() {
        await this.click(this.declinedApplications);
    }
    async clickcurrentjobs() {
        await this.click(this.currentJobs);
    }
    
    async clickupcomingjobs() {
        await this.click(this.upcomingJobs);
    }
    
    async clickcompletedjobs() {
        await this.click(this.completedJobs);
    }

}

export default new DashboardPage();
