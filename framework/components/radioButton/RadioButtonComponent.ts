import { Page } from '@playwright/test';
import { getRadioButtonLocators }from './radioButton.locators';

export class RadioButtonComponent {

  readonly page: Page;
  readonly locators;

  constructor(page: Page) {
    this.page = page;
    this.locators = getRadioButtonLocators(page);
  }

  async selectGender(gender: keyof typeof this.locators) {
    await this.locators[gender].check();
  }
}