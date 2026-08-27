import Page from './Base.page.js';

class JobInvitesPage extends Page {
    get jobInvitesButton() {
        return $('id=candidate_home_job_invites_button');
    }

    get filterButton() {
        return $('id=job_invites_filter_button');
    }

    get jobDurationSection() {
        return $('id=job_invites_filter_job_duration_section_button');
    }

    get longTermOption() {
        return $('id=job_invites_filter_option_long_term_button');
    }

    get shortTermOption() {
        return $('id=job_invites_filter_option_short_term_button');
    }

    get jobTypeSection() {
        return $('id=job_invites_filter_job_type_section_button');
    }

    get fullTimeOption() {
        return $('id=job_invites_filter_option_full_time_button');
    }

    get partTimeOption() {
        return $('id=job_invites_filter_option_part_time_button');
    }

    get procedureConsultationOption() {
        return $('id=job_invites_filter_option_procedure_consultation_button');
    }

    async openJobInvites() {
        await this.waitForElement(this.jobInvitesButton);
        await this.click(this.jobInvitesButton);
        await this.waitForElement(this.filterButton);
    }

    async openFilters() {
        await this.click(this.filterButton);
        await this.waitForElement(this.jobDurationSection);
        await this.waitForElement(this.jobTypeSection);
    }

    async openJobDuration() {
        await this.click(this.jobDurationSection);
    }

    async verifyJobDurationOptionsVisible() {
        if (!(await this.longTermOption.isDisplayed())) {
            throw new Error('Job Invites filter is missing Long term');
        }

        if (!(await this.shortTermOption.isDisplayed())) {
            throw new Error('Job Invites filter is missing Short term');
        }
    }

    async openJobType() {
        await this.click(this.jobTypeSection);
    }

    async verifyJobTypeOptionsVisible() {
        if (!(await this.fullTimeOption.isDisplayed())) {
            throw new Error('Job Invites filter is missing Full Time');
        }

        if (!(await this.partTimeOption.isDisplayed())) {
            throw new Error('Job Invites filter is missing Part Time');
        }

        if (!(await this.procedureConsultationOption.isDisplayed())) {
            throw new Error(
                'Job Invites filter is missing Procedure/Consultation'
            );
        }
    }
}

export default new JobInvitesPage();
