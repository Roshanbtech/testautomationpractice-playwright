import { Page } from '@playwright/test';

export const getCheckboxLocators = (page: Page) => ({

  Sunday: page.locator('#sunday'),
  Monday: page.locator('#monday'),
  Tuesday: page.locator('#tuesday'),
  Wednesday: page.locator('#wednesday'),
  Thursday: page.locator('#thursday'),
  Friday: page.locator('#friday'),
  Saturday: page.locator('#saturday')
});