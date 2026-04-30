import { Page } from '@playwright/test';

export const getDatePickerLocators = (page: Page) => ({

  datePickerInput: page.locator('#datepicker'),
  startDateInput: page.locator('#start-date'),
  endDateInput: page.locator('#end-date')
});