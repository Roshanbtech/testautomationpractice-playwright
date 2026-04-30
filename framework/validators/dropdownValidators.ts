import { expect } from '@playwright/test';
import { DropdownComponent } from '../components/dropdown/DropdownComponent';

export class DropdownValidators {

  static async validateCountrySelection(
    dropdown: DropdownComponent,
    expectedCountry: string
  ) {

    await expect(dropdown.locators.countryDropdown)
      .toHaveValue(expectedCountry);
  }

  static async validateDropdownOptions(
    dropdown: DropdownComponent,
    expectedCountries: string[]
  ) {

    const actualOptions =
      await dropdown.getCountryOptions();

    for (const country of expectedCountries) {

      expect(actualOptions).toContain(country);
    }
  }

  static async validateMultipleColorSelection(
    dropdown: DropdownComponent,
    expectedColors: string[]
  ) {

    const selectedColors =
      await dropdown.getSelectedColors();

    expect(selectedColors).toEqual(
      expect.arrayContaining(expectedColors)
    );
  }

  static async validateColorDeselection(
    dropdown: DropdownComponent
  ) {

    const selectedColors =
      await dropdown.getSelectedColors();
    expect(selectedColors.length).toBe(0);
  }
}