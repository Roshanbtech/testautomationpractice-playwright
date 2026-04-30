import { Page } from '@playwright/test';
import { getCheckboxLocators } from './checkbox.locators';

export class CheckboxComponent {

  readonly page: Page;
  readonly locators;

  constructor(page: Page) {

    this.page = page;
    this.locators = getCheckboxLocators(page);
  }


  async selectDay(day: keyof typeof this.locators) {

    await this.locators[day].check();
  }

  async unselectDay(day: keyof typeof this.locators) {

    await this.locators[day].uncheck();
  }

  async selectAll(days: Array<keyof typeof this.locators>) {

    for (const day of days) {
      await this.selectDay(day);
    }
  }

  getCheckbox(day: keyof typeof this.locators) {
    return this.locators[day];
  }
}