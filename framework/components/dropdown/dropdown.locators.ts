import { Page } from '@playwright/test';

export const getDropdownLocators = (page: Page) => ({
    countryDropdown: page.locator('#country'),
    colorsDropdown: page.locator('#colors')
});