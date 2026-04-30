import { test } from '../../framework/fixtures/uiFixtures';
import { UploadValidators } from '../../framework/validators/uploadValidators';
import uploadData from '../../framework/test-data/uploadData.json';

test.describe('FILE UPLOAD UI TESTS', () => {


  test.beforeEach(async ({ homePage }) => {
    await homePage.navigate();
  });

  test('TC_UPLOAD_POS_001 - Verify single file upload',
    async ({ homePage}) => {

      await homePage.upload.uploadSingleFile(
        uploadData.TC_UPLOAD_POS_001.file
      );

      await UploadValidators
        .validateSingleFileUpload(
          homePage.upload,
          uploadData.TC_UPLOAD_POS_001.expectedFileName
        );
    }
  );

  test(
    'TC_UPLOAD_NEG_001 - Verify upload without file',
    async ({ homePage }) => {

      await homePage.upload.clearSingleFile();

      await UploadValidators
        .validateNoFileUpload(homePage.upload);
    }
  );

  test(
    'TC_UPLOAD_POS_002 - Verify multiple file upload',
    async ({ homePage }) => {

      await homePage.upload.uploadMultipleFiles(
        uploadData.TC_UPLOAD_POS_002.files
      );

      await UploadValidators
        .validateMultipleFileUpload(
          homePage.upload,
          uploadData.TC_UPLOAD_POS_002.files
        );
    }
  );

  test(
    'TC_UPLOAD_VAL_001 - Verify uploaded file details',
    async ({ homePage }) => {

      await homePage.upload.uploadSingleFile(
        uploadData.TC_UPLOAD_VAL_001.file
      );

      await UploadValidators
        .validateUploadedFileDetails(
          homePage.upload,
          uploadData.TC_UPLOAD_VAL_001.expectedFileName
        );
    }
  );
});