import Page from './Base.page.js';

class AvailabilityPage extends Page {

    get createAvailabilityButton() {
        return $('id=candidate_home_create_availability_button');
    }

    get longTermOption() {
        return $('id=radio_selection_popup_option_0_button');
    }

    get shortTermOption() {
        return $('id=radio_selection_popup_option_1_button');
    }

    get cancelButton() {
        return $('id=radio_selection_popup_button1');
    }

    get nextButton() {
        return $('id=radio_selection_popup_button2');
    }
    get startTimeDropdown() {
        return $('id=availability_start_time_dropdown');
    } 

    get endTimeDropdown() {
        return $('id=availability_end_time_dropdown');
    }

    get preferredLocationDropdown() {
        return $('id=availability_preferred_location_dropdown');
    }

    get dailyMode() {
        return $('id=availability_type_daily_chip');
    }

    get weeklyMode() {
        return $('id=availability_type_weekly_chip');
    }

    get customMode() {
        return $('id=availability_type_custom_chip');
    }

    async clickCreateAvailability() {
        await this.click(this.createAvailabilityButton);
    }

    async verifyAvailabilityPopupVisible() {
        if (!(await this.longTermOption.isDisplayed())) {
            throw new Error('Availability popup is missing Long Term');
        }

        if (!(await this.shortTermOption.isDisplayed())) {
            throw new Error('Availability popup is missing Short Term');
        }

        if (!(await this.cancelButton.isDisplayed())) {
            throw new Error('Availability popup is missing Cancel');
        }

        if (!(await this.nextButton.isDisplayed())) {
            throw new Error('Availability popup is missing Next');
        }
    }

    async chooseAvailabilityMode(availabilityMode) {
        if (availabilityMode === 'Long Term') {
            await this.click(this.longTermOption);
        } else if (availabilityMode === 'Short Term') {
            await this.click(this.shortTermOption);
        } else {
            throw new Error(
                `Unsupported availability mode: ${availabilityMode}`
            );
        }
    }

    async createAvailability(availabilityMode) {
        await this.clickCreateAvailability();
        await this.verifyAvailabilityPopupVisible();
        await this.chooseAvailabilityMode(availabilityMode);
        await this.click(this.nextButton);
    }

    async verifyAvailabilityFieldsVisible() {
        if (!(await this.startTimeDropdown.isDisplayed())) {
            throw new Error('Availability page is missing Start Time');
        }

        if (!(await this.endTimeDropdown.isDisplayed())) {
            throw new Error('Availability page is missing End Time');
        }
        if (!(await this.dailyMode.isDisplayed())) {
            throw new Error('Availability page is missing Daily');
        }

        if (!(await this.weeklyMode.isDisplayed())) {
            throw new Error('Availability page is missing Weekly');
        }

        if (!(await this.customMode.isDisplayed())) {
            throw new Error('Availability page is missing Custom');
        }

        await this.scrollUntilDisplayed(this.preferredLocationDropdown,'down',6);

        if (!(await this.preferredLocationDropdown.isDisplayed())) {
            throw new Error('Availability page is missing Preferred Location');
        }
    }
    async chooseScheduleMode(mode) {
        if (mode === 'Daily') {
            await this.click(this.dailyMode);
        } else if (mode === 'Weekly') {
            await this.click(this.weeklyMode);
        } else if (mode === 'Custom') {
            await this.click(this.customMode);
        } else {
            throw new Error(`Unsupported schedule mode: ${mode}`);
        }
    }

    async selectTime(dropdown, time) {
        await this.click(dropdown);

        const timeOption = $(`~${time}`);

        await this.scrollUntilDisplayed(timeOption, 'down');
        await this.click(timeOption);
    }

    async fillAvailabilityDetails(data) {
        await this.waitForElement(this.startTimeDropdown, 20000);
        await this.verifyAvailabilityFieldsVisible();

        // await this.scrollUntilDisplayed(this.startTimeDropdown, 'up', 6);

        await this.selectTime(this.startTimeDropdown, data.startTime);
        await this.selectTime(this.endTimeDropdown, data.endTime);

        await this.chooseScheduleMode(data.scheduleMode);

        await this.scrollUntilDisplayed(this.preferredLocationDropdown,'down');
        await this.click(this.preferredLocationDropdown);
        await this.click($(`~${data.preferredLocation}`));
    }
}


export default new AvailabilityPage();
