import { expect } from '@playwright/test';

import { RadioButtonComponent }
from '../components/radioButton/RadioButtonComponent';

export class RadioButtonValidators {

  static async validateSelectedGender(

    radioButton: RadioButtonComponent,

    gender: keyof typeof radioButton.locators

  ) {

    await expect(
      radioButton.locators[gender]
    ).toBeChecked();
  }

  static async validateSingleSelection(
    radioButton: RadioButtonComponent
  ) {

    await expect(
      radioButton.locators.female
    ).toBeChecked();

    await expect(
      radioButton.locators.male
    ).not.toBeChecked();
  }
}