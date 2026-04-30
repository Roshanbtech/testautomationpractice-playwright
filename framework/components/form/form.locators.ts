import { Page } from '@playwright/test';

export const getFormLocators = (page: Page) => ({
  nameInput: page.locator('#name'),
  emailInput: page.locator('#email'),
  phoneInput: page.locator('#phone'),
  addressInput: page.locator('#textarea')
});