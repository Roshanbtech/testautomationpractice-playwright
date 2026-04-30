import { expect } from "@playwright/test";
import { CheckboxComponent } from "../components/checkbox/CheckboxComponent";

export class CheckboxValidators {
  static async validateChecked(
    checkbox: CheckboxComponent,
    day: keyof typeof checkbox.locators,
  ) {
    await expect(checkbox.getCheckbox(day)).toBeChecked();
  }

  static async validateUnchecked(
    checkbox: CheckboxComponent,
    day: keyof typeof checkbox.locators,
  ) {
    await expect(checkbox.getCheckbox(day)).not.toBeChecked();
  }

  static async validateMultipleChecked(
    checkbox: CheckboxComponent,
    days: Array<keyof typeof checkbox.locators>,
  ) {
    for (const day of days) {
      await expect(checkbox.getCheckbox(day)).toBeChecked();
    }
  }
}
