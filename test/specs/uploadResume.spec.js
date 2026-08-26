import { readFile } from 'node:fs/promises';
import loginPage from '../pageobjects/login.page.js';
import uploadResumePage from '../pageobjects/uploadResume.page.js';
import loginData from '../data/login.data.js';
import fileData from '../data/file.data.js';

const APP_ID = 'com.nextenti.job.qa';

describe('Nextenti Upload Resume Page Visibility Test', () => {

    beforeEach(async () => {
        const resumeBase64 = (await readFile(fileData.localPath)).toString('base64');

        await driver.pushFile(fileData.devicePath, resumeBase64);
        await driver.execute('mobile: clearApp', { appId: APP_ID });
        await driver.execute('mobile: activateApp', { appId: APP_ID });
    });

    it('should display the profile setup options after successful login', async function () {
        this.timeout(150000);

        await loginPage.waitForLandingPage();
        await loginPage.pause(3);
        await loginPage.verifyLandingPageVisible();
        await loginPage.clickLandingLogin();
        await loginPage.pause(3);
        await loginPage.waitForLoginForm();
        await loginPage.fillLoginFormWithRetry(loginData.username2,loginData.password2);
        await loginPage.pressDoneOnKeyboard();
        await loginPage.clickLogin();
        await uploadResumePage.waitForUploadResumePage();
        await uploadResumePage.verifyUploadResumePageVisible();
        await uploadResumePage.clickUploadResumeCard();
        await uploadResumePage.selectResume(fileData.fileName);
        await uploadResumePage.pause(4);
    });
});
