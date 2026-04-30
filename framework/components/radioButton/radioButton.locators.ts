import { Page } from '@playwright/test';

export const getRadioButtonLocators = (page: Page) => ({
    male: page.locator('#male'),
    female: page.locator('#female')
});