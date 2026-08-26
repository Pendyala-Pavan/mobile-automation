import Page from './Base.page.js';

class EmployerHomePage extends Page {

    get menuButton() {
        return $('id=common_header_drawer_icon');
    }

    get chatButton() {
        return $('id=common_header_request_icon');
    }

    get notificationButton() {
        return $('id=common_header_notification_icon');
    }

    get postedJobs() {
        return $('id=corporate_home_posted_jobs_button');
    }

    get draftedJobs() {
        return $('id=corporate_home_drafted_jobs_button');
    }

    get createJob() {
        return $('id=corporate_home_manage_job_create_job_button');
    }

    get closedJobs() {
        return $('id=corporate_home_manage_job_closed_job_button');
    }

    get cancelledJobs() {
        return $('id=corporate_home_manage_job_cancelled_job_button');
    }

    get timesheetApproval() {
        return $('id=corporate_home_timesheet_approval_button');
    }

    get timesheetLogs() {
        return $('id=corporate_home_timesheet_logs_button');
    }
    get bannerCard() {
        return $('id=home_banner_card_view_plans_button');
    }

    get homeNavigation() {
        return $('id=bottom_nav_home_tab');
    }

    get dashboardNavigation() {
        return $('id=bottom_nav_dashboard_tab');
    }

    get manageJobsNavigation() {
        return $('id=bottom_nav_manage_jobs_tab');
    }

    get timesheetNavigation() {
        return $('id=bottom_nav_timesheet_tab');
    }

    get postedJobsTab() {
        return $('id=corporate_body_posted_jobs_tab');
    }

    get draftedJobsTab() {
        return $('id=corporate_body_drafted_jobs_tab');
    }

    get closedJobsTab() {
        return $('id=corporate_body_closed_jobs_tab');
    }

    get cancelledJobsTab() {
        return $('id=corporate_body_cancelled_jobs_tab');
    }

    get jobTypeFilter() {
        return $('id=corporate_body_job_type_filter_button');
    }

    get timeFilter() {
        return $('id=corporate_body_time_filter_button');
    }

    get newJobButton() {
        return $('id=corporate_jobs_new_job_button');
    }

    get jobsDashboardTab() {
        return $('id=corporate_jobs_dashboard_jobs_tab');
    }

    get candidatesDashboardTab() {
        return $('id=corporate_jobs_dashboard_requests_tab');
    }

    get subscriptionCancelButton() {
        return $('~Cancel');
    }

    get subscriptionViewPlansButton() {
        return $('~View Plans');
    }

    get timesheetApprovalTab() {
        return $('id=corporate_timesheet_approval_tab');
    }

    get timesheetLogsTab() {
        return $('id=corporate_timesheet_logs_tab');
    }

    get timesheetSearchField() {
        return $('id=corporate_timesheet_search_field');
    }

    get timesheetDateRangeButton() {
        return $('id=corporate_timesheet_date_range_button');
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

    async postedJobsVisible() {
        return await this.postedJobs.isDisplayed().catch(() => false);
    }

    async draftedJobsVisible() {
        return await this.draftedJobs.isDisplayed().catch(() => false);
    }

    async createJobVisible() {
        return await this.createJob.isDisplayed().catch(() => false);
    }

    async closedJobsVisible() {
        return await this.closedJobs.isDisplayed().catch(() => false);
    }

    async cancelledJobsVisible() {
        return await this.cancelledJobs.isDisplayed().catch(() => false);
    }

    async timesheetApprovalVisible() {
        return await this.timesheetApproval.isDisplayed().catch(() => false);
    }

    async timesheetLogsVisible() {
        return await this.timesheetLogs.isDisplayed().catch(() => false);
    }
    async bannerCardVisible() {
        return await this.bannerCard.isDisplayed().catch(() => false);
    }

    async homeNavigationVisible() {
        return await this.homeNavigation.isDisplayed().catch(() => false);
    }

    async dashboardNavigationVisible() {
        return await this.dashboardNavigation.isDisplayed().catch(() => false);
    }

    async manageJobsNavigationVisible() {
        return await this.manageJobsNavigation.isDisplayed().catch(() => false);
    }

    async timesheetNavigationVisible() {
        return await this.timesheetNavigation.isDisplayed().catch(() => false);
    }

    async postedJobsTabVisible() {
        return await this.postedJobsTab.isDisplayed().catch(() => false);
    }

    async draftedJobsTabVisible() {
        return await this.draftedJobsTab.isDisplayed().catch(() => false);
    }

    async closedJobsTabVisible() {
        return await this.closedJobsTab.isDisplayed().catch(() => false);
    }

    async cancelledJobsTabVisible() {
        return await this.cancelledJobsTab.isDisplayed().catch(() => false);
    }

    async jobTypeFilterVisible() {
        return await this.jobTypeFilter.isDisplayed().catch(() => false);
    }

    async timeFilterVisible() {
        return await this.timeFilter.isDisplayed().catch(() => false);
    }

    async newJobButtonVisible() {
        return await this.newJobButton.isDisplayed().catch(() => false);
    }

    async jobsDashboardTabVisible() {
        return await this.jobsDashboardTab.isDisplayed().catch(() => false);
    }

    async candidatesDashboardTabVisible() {
        return await this.candidatesDashboardTab.isDisplayed().catch(() => false);
    }

    async subscriptionCancelButtonVisible() {
        return await this.subscriptionCancelButton.isDisplayed().catch(() => false);
    }

    async subscriptionViewPlansButtonVisible() {
        return await this.subscriptionViewPlansButton.isDisplayed().catch(() => false);
    }

    async timesheetApprovalTabVisible() {
        return await this.timesheetApprovalTab.isDisplayed().catch(() => false);
    }

    async timesheetLogsTabVisible() {
        return await this.timesheetLogsTab.isDisplayed().catch(() => false);
    }

    async timesheetSearchFieldVisible() {
        return await this.timesheetSearchField.isDisplayed().catch(() => false);
    }

    async timesheetDateRangeButtonVisible() {
        return await this.timesheetDateRangeButton.isDisplayed().catch(() => false);
    }

    async verifyEmployerHomePageVisible() {
        if (!(await this.menuButtonVisible())) {
            throw new Error('Employer Home page is missing the Menu button');
        }

        if (!(await this.chatButtonVisible())) {
            throw new Error('Employer Home page is missing the Chat button');
        }

        if (!(await this.notificationButtonVisible())) {
            throw new Error('Employer Home page is missing the Notification button');
        }

        if (!(await this.postedJobsVisible())) {
            throw new Error('Employer Home page is missing Posted Jobs');
        }

        if (!(await this.draftedJobsVisible())) {
            throw new Error('Employer Home page is missing Drafted Jobs');
        }

        if (!(await this.createJobVisible())) {
            throw new Error('Employer Home page is missing Create Job');
        }

        if (!(await this.closedJobsVisible())) {
            throw new Error('Employer Home page is missing Closed Jobs');
        }

        if (!(await this.cancelledJobsVisible())) {
            throw new Error('Employer Home page is missing Cancelled Jobs');
        }

        if (!(await this.timesheetApprovalVisible())) {
            throw new Error('Employer Home page is missing Timesheet Approval');
        }

        if (!(await this.timesheetLogsVisible())) {
            throw new Error('Employer Home page is missing Timesheet Logs');
        }
        if (!(await this.bannerCardVisible())) {
            throw new Error('Employer Home page is missing Banner Card');
        }

        if (!(await this.homeNavigationVisible())) {
            throw new Error('Employer Home page is missing Home navigation');
        }

        if (!(await this.dashboardNavigationVisible())) {
            throw new Error('Employer Home page is missing Dashboard navigation');
        }

        if (!(await this.manageJobsNavigationVisible())) {
            throw new Error('Employer Home page is missing Manage Jobs navigation');
        }

        if (!(await this.timesheetNavigationVisible())) {
            throw new Error('Employer Home page is missing Timesheet navigation');
        }
    }

    async clickPostedJobs() {
        await this.click(this.postedJobs);
    }

    async clickDraftedJobs() {
        await this.click(this.draftedJobs);
    }

    async clickCreateJob() {
        await this.click(this.createJob);
    }

    async clickSubscriptionCancel() {
        await this.click(this.subscriptionCancelButton);
    }

    async clickClosedJobs() {
        await this.click(this.closedJobs);
    }

    async clickCancelledJobs() {
        await this.click(this.cancelledJobs);
    }

    async clickTimesheetApproval() {
        await this.click(this.timesheetApproval);
    }

    async clickTimesheetLogs() {
        await this.click(this.timesheetLogs);
    }

    async verifyPostedJobsPageVisible() {
        if (!(await this.postedJobsTabVisible())) {
            throw new Error('Posted Jobs page is missing the Posted Jobs tab');
        }

        if (!(await this.draftedJobsTabVisible())) {
            throw new Error('Posted Jobs page is missing the Drafted Jobs tab');
        }

        if (!(await this.closedJobsTabVisible())) {
            throw new Error('Posted Jobs page is missing the Closed Jobs tab');
        }

        if (!(await this.cancelledJobsTabVisible())) {
            throw new Error('Posted Jobs page is missing the Cancelled Jobs tab');
        }

        if (!(await this.jobTypeFilterVisible())) {
            throw new Error('Posted Jobs page is missing the Job Type filter');
        }

        if (!(await this.timeFilterVisible())) {
            throw new Error('Posted Jobs page is missing the Time filter');
        }

        if (!(await this.newJobButtonVisible())) {
            throw new Error('Posted Jobs page is missing the New Job button');
        }

        if (!(await this.jobsDashboardTabVisible())) {
            throw new Error('Posted Jobs page is missing the Jobs dashboard tab');
        }

        if (!(await this.candidatesDashboardTabVisible())) {
            throw new Error('Posted Jobs page is missing the Candidates dashboard tab');
        }

        if (!(await this.homeNavigationVisible())) {
            throw new Error('Posted Jobs page is missing Home navigation');
        }

        if (!(await this.dashboardNavigationVisible())) {
            throw new Error('Posted Jobs page is missing Dashboard navigation');
        }

        if (!(await this.manageJobsNavigationVisible())) {
            throw new Error('Posted Jobs page is missing Manage Jobs navigation');
        }

        if (!(await this.timesheetNavigationVisible())) {
            throw new Error('Posted Jobs page is missing Timesheet navigation');
        }
    }

    async verifyDraftedJobsPageVisible() {
        if (!(await this.postedJobsTabVisible())) {
            throw new Error('Drafted Jobs page is missing the Posted Jobs tab');
        }

        if (!(await this.draftedJobsTabVisible())) {
            throw new Error('Drafted Jobs page is missing the Drafted Jobs tab');
        }

        if (!(await this.closedJobsTabVisible())) {
            throw new Error('Drafted Jobs page is missing the Closed Jobs tab');
        }

        if (!(await this.cancelledJobsTabVisible())) {
            throw new Error('Drafted Jobs page is missing the Cancelled Jobs tab');
        }

        if (!(await this.jobTypeFilterVisible())) {
            throw new Error('Drafted Jobs page is missing the Job Type filter');
        }

        if (!(await this.timeFilterVisible())) {
            throw new Error('Drafted Jobs page is missing the Time filter');
        }

        if (!(await this.newJobButtonVisible())) {
            throw new Error('Drafted Jobs page is missing the New Job button');
        }

        if (!(await this.jobsDashboardTabVisible())) {
            throw new Error('Drafted Jobs page is missing the Jobs dashboard tab');
        }

        if (!(await this.candidatesDashboardTabVisible())) {
            throw new Error('Drafted Jobs page is missing the Candidates dashboard tab');
        }

        if (!(await this.homeNavigationVisible())) {
            throw new Error('Drafted Jobs page is missing Home navigation');
        }

        if (!(await this.dashboardNavigationVisible())) {
            throw new Error('Drafted Jobs page is missing Dashboard navigation');
        }

        if (!(await this.manageJobsNavigationVisible())) {
            throw new Error('Drafted Jobs page is missing Manage Jobs navigation');
        }

        if (!(await this.timesheetNavigationVisible())) {
            throw new Error('Drafted Jobs page is missing Timesheet navigation');
        }
    }

    async verifySubscriptionPopupVisible() {
        if (!(await this.subscriptionCancelButtonVisible())) {
            throw new Error('No Active Subscription popup is missing the Cancel button');
        }

        if (!(await this.subscriptionViewPlansButtonVisible())) {
            throw new Error('No Active Subscription popup is missing the View Plans button');
        }
    }

    async verifyClosedJobsPageVisible() {
        // if (!(await this.postedJobsTabVisible())) {
        //     throw new Error('Closed Jobs page is missing the Posted Jobs tab');
        // }

        // if (!(await this.draftedJobsTabVisible())) {
        //     throw new Error('Closed Jobs page is missing the Drafted Jobs tab');
        // }

        // if (!(await this.closedJobsTabVisible())) {
        //     throw new Error('Closed Jobs page is missing the Closed Jobs tab');
        // }

        // if (!(await this.cancelledJobsTabVisible())) {
        //     throw new Error('Closed Jobs page is missing the Cancelled Jobs tab');
        // }

        if (!(await this.jobTypeFilterVisible())) {
            throw new Error('Closed Jobs page is missing the Job Type filter');
        }

        if (!(await this.timeFilterVisible())) {
            throw new Error('Closed Jobs page is missing the Time filter');
        }

        if (!(await this.newJobButtonVisible())) {
            throw new Error('Closed Jobs page is missing the New Job button');
        }

        if (!(await this.jobsDashboardTabVisible())) {
            throw new Error('Closed Jobs page is missing the Jobs dashboard tab');
        }

        if (!(await this.candidatesDashboardTabVisible())) {
            throw new Error('Closed Jobs page is missing the Candidates dashboard tab');
        }

        // if (!(await this.homeNavigationVisible())) {
        //     throw new Error('Closed Jobs page is missing Home navigation');
        // }

        // if (!(await this.dashboardNavigationVisible())) {
        //     throw new Error('Closed Jobs page is missing Dashboard navigation');
        // }

        // if (!(await this.manageJobsNavigationVisible())) {
        //     throw new Error('Closed Jobs page is missing Manage Jobs navigation');
        // }

        // if (!(await this.timesheetNavigationVisible())) {
        //     throw new Error('Closed Jobs page is missing Timesheet navigation');
        // }
    }

    async verifyCancelledJobsPageVisible() {
        // if (!(await this.postedJobsTabVisible())) {
        //     throw new Error('Cancelled Jobs page is missing the Posted Jobs tab');
        // }

        // if (!(await this.draftedJobsTabVisible())) {
        //     throw new Error('Cancelled Jobs page is missing the Drafted Jobs tab');
        // }

        // if (!(await this.closedJobsTabVisible())) {
        //     throw new Error('Cancelled Jobs page is missing the Closed Jobs tab');
        // }

        // if (!(await this.cancelledJobsTabVisible())) {
        //     throw new Error('Cancelled Jobs page is missing the Cancelled Jobs tab');
        // }

        if (!(await this.jobTypeFilterVisible())) {
            throw new Error('Cancelled Jobs page is missing the Job Type filter');
        }

        if (!(await this.timeFilterVisible())) {
            throw new Error('Cancelled Jobs page is missing the Time filter');
        }

        if (!(await this.newJobButtonVisible())) {
            throw new Error('Cancelled Jobs page is missing the New Job button');
        }

        if (!(await this.jobsDashboardTabVisible())) {
            throw new Error('Cancelled Jobs page is missing the Jobs dashboard tab');
        }

        if (!(await this.candidatesDashboardTabVisible())) {
            throw new Error('Cancelled Jobs page is missing the Requests dashboard tab');
        }

        // if (!(await this.homeNavigationVisible())) {
        //     throw new Error('Cancelled Jobs page is missing Home navigation');
        // }

        // if (!(await this.dashboardNavigationVisible())) {
        //     throw new Error('Cancelled Jobs page is missing Dashboard navigation');
        // }

        // if (!(await this.manageJobsNavigationVisible())) {
        //     throw new Error('Cancelled Jobs page is missing Manage Jobs navigation');
        // }

        // if (!(await this.timesheetNavigationVisible())) {
        //     throw new Error('Cancelled Jobs page is missing Timesheet navigation');
        // }
    }

    async verifyTimesheetLogsPageVisible() {
        // if (!(await this.timesheetApprovalTabVisible())) {
        //     throw new Error('Timesheet Logs page is missing the Timesheet Approval tab');
        // }

        // if (!(await this.timesheetLogsTabVisible())) {
        //     throw new Error('Timesheet Logs page is missing the Timesheet Logs tab');
        // }

        if (!(await this.timesheetSearchFieldVisible())) {
            throw new Error('Timesheet Logs page is missing the Search field');
        }

        if (!(await this.timesheetDateRangeButtonVisible())) {
            throw new Error('Timesheet Logs page is missing the Date Range button');
        }

        // if (!(await this.homeNavigationVisible())) {
        //     throw new Error('Timesheet Logs page is missing Home navigation');
        // }

        // if (!(await this.dashboardNavigationVisible())) {
        //     throw new Error('Timesheet Logs page is missing Dashboard navigation');
        // }

        // if (!(await this.manageJobsNavigationVisible())) {
        //     throw new Error('Timesheet Logs page is missing Manage Jobs navigation');
        // }

        // if (!(await this.timesheetNavigationVisible())) {
        //     throw new Error('Timesheet Logs page is missing Timesheet navigation');
        // }
    }
    async navigateBackToEmployerHomePage() {
        await this.click(this.homeNavigation);
        await this.waitForElement(this.menuButton);
    }
    
}

export default new EmployerHomePage();
