import { Page } from "@playwright/test";
import { getUploadLocators } from "./upload.locators";

export class UploadComponent {
  readonly page: Page;
  readonly locators;

  constructor(page: Page) {
    this.page = page;
    this.locators = getUploadLocators(page);
  }

  async uploadSingleFile(filePath: string) {
    await this.locators.singleFileInput.setInputFiles(filePath);
  }

  async uploadMultipleFiles(files: string[]) {
    await this.locators.multipleFileInput.setInputFiles(files);
  }

  async clearSingleFile() {
    await this.locators.singleFileInput.setInputFiles([]);
  }

  async getSingleUploadedFileName() {
    return await this.locators.singleFileInput.inputValue();
  }

  async getMultipleUploadedFiles() {
    return await this.locators.multipleFileInput.evaluate(
      (input: HTMLInputElement) => {
        return Array.from(input.files || []).map((file) => file.name);
      },
    );
  }
}
