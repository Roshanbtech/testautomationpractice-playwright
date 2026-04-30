import { Page } from '@playwright/test';
import { getDatePickerLocators } from './datePicker.locators';

export class DatePickerComponent {

  readonly page: Page;
  readonly locators;

  constructor(page: Page) {
    this.page = page;
    this.locators = getDatePickerLocators(page);
  }

  async selectDate(date: string) {
    await this.locators.datePickerInput.fill(date);
  }

  async enterStartDate(startDate: string) {
    await this.locators.startDateInput.fill(startDate);
  }

  async enterEndDate(endDate: string) {
    await this.locators.endDateInput.fill(endDate);
  }

  async clearStartDate() {
    await this.locators.startDateInput.clear();
  }

  async clearEndDate() {
    await this.locators.endDateInput.clear();
  }

  async tryTypingReadonlyField(text: string) {
    await this.locators.datePickerInput.fill(text);
  }

  async getDateValue() {
    return await this.locators.datePickerInput.inputValue();
  }
}