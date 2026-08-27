import Page from './Base.page.js';

class EmployerDashboardPage extends Page {

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

    get activeJobs() {
        return $$('id=dashboard_custom_card_button')[0];
    }

    get openJobs() {
        return $$('id=dashboard_custom_card_button')[1];
    }

    get hiredJobs() {
        return $$('id=dashboard_custom_card_button')[2];
    }

    get postJob() {
        return $('id=corporate_dashboard_post_job_button');
    }

    get draftedJobs() {
        return $('id=candidate_dashboard_draft_close_button');
    }

    get closedJobs() {
        return $('id=candidate_dashboard_draft_close_button');
    }

    get completedTimesheets() {
        return $$('id=dashboard_custom_card_button')[3];
    }

    get inProgressTimesheets() {
        return $$('id=dashboard_custom_card_button')[4];
    }

    get absentTimesheets() {
        return $$('id=dashboard_custom_card_button')[5];
    }

    get pendingApprovals() {
        return $('//android.view.View[@content-desc="Pending Approvals\n0"]');
    }

    async dashboardNavigationVisible() {
        return await this.dashboardNavigation.isDisplayed().catch(() => false);
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

    async activeJobsVisible() {
        return await this.activeJobs.isDisplayed().catch(() => false);
    }

    async openJobsVisible() {
        return await this.openJobs.isDisplayed().catch(() => false);
    }

    async hiredJobsVisible() {
        return await this.hiredJobs.isDisplayed().catch(() => false);
    }

    async postJobVisible() {
        return await this.postJob.isDisplayed().catch(() => false);
    }

    async draftedJobsVisible() {
        return await this.draftedJobs.isDisplayed().catch(() => false);
    }

    async closedJobsVisible() {
        return await this.closedJobs.isDisplayed().catch(() => false);
    }

    async completedTimesheetsVisible() {
        return await this.completedTimesheets.isDisplayed().catch(() => false);
    }

    async inProgressTimesheetsVisible() {
        return await this.inProgressTimesheets.isDisplayed().catch(() => false);
    }

    async absentTimesheetsVisible() {
        return await this.absentTimesheets.isDisplayed().catch(() => false);
    }

    async pendingApprovalsVisible() {
        return await this.pendingApprovals.isDisplayed().catch(() => false);
    }


    async clickDashboard() {
        await this.click(this.dashboardNavigation);
    }

    async verifyEmployerDashboardVisible() {
        if (!(await this.menuButtonVisible())) {
            throw new Error('Employer Dashboard is missing the Menu button');
        }

        if (!(await this.chatButtonVisible())) {
            throw new Error('Employer Dashboard is missing the Chat button');
        }

        if (!(await this.notificationButtonVisible())) {
            throw new Error('Employer Dashboard is missing the Notification button');
        }

        if (!(await this.activeJobsVisible())) {
            throw new Error('Employer Dashboard is missing Active Jobs');
        }

        if (!(await this.openJobsVisible())) {
            throw new Error('Employer Dashboard is missing Open Jobs');
        }

        if (!(await this.hiredJobsVisible())) {
            throw new Error('Employer Dashboard is missing Hired Jobs');
        }

        if (!(await this.postJobVisible())) {
            throw new Error('Employer Dashboard is missing Post Job');
        }

        if (!(await this.draftedJobsVisible())) {
            throw new Error('Employer Dashboard is missing Drafted Jobs');
        }

        if (!(await this.closedJobsVisible())) {
            throw new Error('Employer Dashboard is missing Closed Jobs');
        }

        if (!(await this.completedTimesheetsVisible())) {
            throw new Error('Employer Dashboard is missing Completed Timesheets');
        }

        if (!(await this.inProgressTimesheetsVisible())) {
            throw new Error('Employer Dashboard is missing In Progress Timesheets');
        }

        if (!(await this.absentTimesheetsVisible())) {
            throw new Error('Employer Dashboard is missing Absent Timesheets');
        }

        if (!(await this.pendingApprovalsVisible())) {
            throw new Error('Employer Dashboard is missing Pending Approvals');
        }

    }
}

export default new EmployerDashboardPage();
