import { Page } from '@playwright/test';

export class WaitUtils {

  static async wait(page: Page, milliseconds: number) {

    await page.waitForTimeout(milliseconds);
  }
}