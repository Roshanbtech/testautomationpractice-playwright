import { expect } from '@playwright/test';
import { FormComponent } from '../components/form/FormComponent';

export class FormValidators {

  static async validateName(form: FormComponent, expected: string) {
    await expect(form.locators.nameInput).toHaveValue(expected);
  }

  static async validateEmail(form: FormComponent, expected: string) {
    await expect(form.locators.emailInput).toHaveValue(expected);
  }

  static async validatePhone(form: FormComponent, expected: string) {
    await expect(form.locators.phoneInput).toHaveValue(expected);
  }

  static async validateAddress(form: FormComponent, expected: string) {
    await expect(form.locators.addressInput).toHaveValue(expected);
  }

  static async validateEmptyFields(form: FormComponent) {
    await expect(form.locators.nameInput).toHaveValue('');
    await expect(form.locators.emailInput).toHaveValue('');
    await expect(form.locators.phoneInput).toHaveValue('');
    await expect(form.locators.addressInput).toHaveValue('');
  }
}