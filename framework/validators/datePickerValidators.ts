import { expect } from "@playwright/test";
import { DatePickerComponent } from "../components/datePicker/DatePickerComponent";

export class DatePickerValidators {
  static async validateSelectedDate(
    datePicker: DatePickerComponent,
    expectedDate: string,
  ) {
    await expect(datePicker.locators.datePickerInput).toHaveValue(expectedDate);
  }

  static async validateDateFormat(datePicker: DatePickerComponent) {
    const dateValue = await datePicker.getDateValue();

    const dateFormatRegex =
      /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/\d{4}$/;

    expect(dateValue).toMatch(dateFormatRegex);
  }

  static async validateReadonlyBehavior(
    datePicker: DatePickerComponent,
    invalidText: string,
  ) {
    const actualValue = await datePicker.getDateValue();

    expect(actualValue).toBe(invalidText);
  }

  static async validateValidDateRange(
    datePicker: DatePickerComponent,
    startDate: string,
    endDate: string,
  ) {
    await expect(datePicker.locators.startDateInput).toHaveValue(startDate);

    await expect(datePicker.locators.endDateInput).toHaveValue(endDate);
  }

  static async validateInvalidDateRange(startDate: string, endDate: string) {
    const start = new Date(startDate);

    const end = new Date(endDate);

    expect(end.getTime()).toBeLessThan(start.getTime());
  }

  static async validateSameDateRange(
    datePicker: DatePickerComponent,
    sameDate: string,
  ) {
    await expect(datePicker.locators.startDateInput).toHaveValue(sameDate);

    await expect(datePicker.locators.endDateInput).toHaveValue(sameDate);
  }
}
