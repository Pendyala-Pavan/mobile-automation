import Page from './Base.page.js';
import jobPage from './job.page.js';

class SignupJobPage extends Page {

    async applyForJob(jobData) {
        await jobPage.searchAndApply(jobData);
        await this.pause(2);
    }
}

export default new SignupJobPage();
