import { Page } from "@playwright/test";

import {getDropdownLocators} from "./dropdown.locators";

export class DropdownComponent {
  readonly page: Page;

  readonly locators;

  constructor(page: Page) {
    this.page = page;

    this.locators = getDropdownLocators(page);
  }

  async selectCountry(country: string) {
    await this.locators.countryDropdown.selectOption(country);
  }

  async selectMultipleColors(colors: string[]) {
    await this.locators.colorsDropdown.selectOption(colors);
  }

  async deselectAllColors() {
    await this.locators.colorsDropdown.selectOption([]);
  }

  async getCountryOptions() {
    const options = await this.locators.countryDropdown
      .locator("option")
      .allTextContents();

    return options.map((option) => option.trim());
  }

  async getSelectedColors() {
    return await this.locators.colorsDropdown.evaluate((select) => {
      return Array.from((select as HTMLSelectElement).selectedOptions).map(
        (option) => option.text,
      );
    });
  }
}
