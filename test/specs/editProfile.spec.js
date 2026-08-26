import loginPage from '../pageobjects/login.page.js';
import editProfilePage from '../pageobjects/editProfile.page.js';
import loginData from '../data/login.data.js';
import editProfileData from '../data/editProfile.data.js';

const APP_ID = 'com.nextenti.job.qa';

describe('Nextenti Edit Profile Test', () => {

    beforeEach(async () => {
        await driver.execute('mobile: clearApp', { appId: APP_ID });
        await driver.execute('mobile: activateApp', { appId: APP_ID });
    });

    it('should verify profile sections based on profile type', async function () {
        this.timeout(150000);

        await loginPage.waitForLandingPage();
        await loginPage.pause(3);
        await loginPage.verifyLandingPageVisible();
        await loginPage.clickLandingLogin();
        await loginPage.pause(3);
        await loginPage.waitForLoginForm();

        await loginPage.fillLoginFormWithRetry(loginData.username,loginData.password);

        await loginPage.pressDoneOnKeyboard();
        await loginPage.clickLogin();
        await loginPage.waitForHomePage();

        await editProfilePage.verifyEditProfile(editProfileData.profileType);
        await editProfilePage.clickPersonalDetailsSection();
        await editProfilePage.pause(2);
        await editProfilePage.verifyPersonalDetailsFieldsVisible();

        await editProfilePage.clickEducationDetailsSection();
        await editProfilePage.pause(2);
        await editProfilePage.verifyEducationOptionsVisible();
        await editProfilePage.clickFirstEducationSection();
        await editProfilePage.pause(2);
        await editProfilePage.verifyEducationDetailsFieldsVisible();
    });
});
