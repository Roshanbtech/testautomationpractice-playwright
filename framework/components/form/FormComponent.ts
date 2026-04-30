import { Page } from '@playwright/test';
import { getFormLocators } from './form.locators';

export class FormComponent {

  readonly page: Page;
  readonly locators;

  constructor(page: Page) {
    this.page = page;
    this.locators = getFormLocators(page);
  }

  async enterName(name: string) {
    await this.locators.nameInput.fill(name);
  }

  async enterEmail(email: string) {
    await this.locators.emailInput.fill(email);
  }

  async enterPhone(phone: string) {
    await this.locators.phoneInput.fill(phone);
  }

  async enterAddress(address: string) {
    await this.locators.addressInput.fill(address);
  }

  async clearAll() {
    await this.locators.nameInput.clear();
    await this.locators.emailInput.clear();
    await this.locators.phoneInput.clear();
    await this.locators.addressInput.clear();
  }
}