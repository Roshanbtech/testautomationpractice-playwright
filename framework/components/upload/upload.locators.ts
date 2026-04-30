import { Page } from '@playwright/test';

export const getUploadLocators = (page: Page) => ({

  singleFileInput: page.locator('#singleFileInput'),

  multipleFileInput: page.locator('#multipleFilesInput')
});