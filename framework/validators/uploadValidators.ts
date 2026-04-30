import { expect } from '@playwright/test';
import { UploadComponent } from '../components/upload/UploadComponent';

export class UploadValidators {

  static async validateSingleFileUpload(
    upload: UploadComponent,
    expectedFileName: string
  ) {

    const uploadedFile =
      await upload.getSingleUploadedFileName();

    expect(uploadedFile)
      .toContain(expectedFileName);
  }

  static async validateNoFileUpload(
    upload: UploadComponent
  ) {

    const uploadedFile =
      await upload.getSingleUploadedFileName();

    expect(uploadedFile)
      .toBe('');
  }

  static async validateMultipleFileUpload(
    upload: UploadComponent,
    expectedFiles: string[]
  ) {

    const uploadedFiles =
      await upload.getMultipleUploadedFiles();

    expectedFiles.forEach(file => {

      const fileName =
        file.split('/').pop();

      expect(uploadedFiles)
        .toContain(fileName);
    });
  }

  static async validateUploadedFileDetails(
    upload: UploadComponent,
    expectedFileName: string
  ) {

    const uploadedFile =
      await upload.getSingleUploadedFileName();

    expect(uploadedFile)
      .toContain(expectedFileName);
  }
}