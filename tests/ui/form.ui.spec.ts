import formData from '../../framework/test-data/formData.json';
import { test } from '../../framework/fixtures/uiFixtures';
import { FormValidators } from '../../framework/validators/formValidators';

test.describe('FORM UI TESTS', () => {

  /*
    USER STORY:
    US_FORM_001
  */
  
    test.beforeEach(
      async ({ homePage }) => {
        await homePage.navigate();
      }
    );

  test(
    'TC_FORM_POS_001 - Verify valid name input',
    async ({ homePage }) => {

      await homePage.form.enterName(
        formData.TC_FORM_POS_001.name
      );

      await FormValidators.validateName(
        homePage.form,
        formData.TC_FORM_POS_001.name
      );
    }
  );

  test(
    'TC_FORM_NEG_001 - Verify empty name field',
    async ({ homePage }) => {

      await homePage.form.enterName(
        formData.TC_FORM_NEG_001.name
      );

      await FormValidators.validateName(
        homePage.form,
        formData.TC_FORM_NEG_001.name
      );
    }
  );

  test(
    'TC_FORM_NEG_002 - Verify name max character limit',
    async ({ homePage }) => {

      await homePage.form.enterName(
        formData.TC_FORM_NEG_002.inputName
      );

      await FormValidators.validateName(
        homePage.form,
        formData.TC_FORM_NEG_002.expectedName
      );
    }
  );

  test(
    'TC_FORM_POS_002 - Verify valid email input',
    async ({ homePage }) => {

      await homePage.form.enterEmail(
        formData.TC_FORM_POS_002.email
      );

      await FormValidators.validateEmail(
        homePage.form,
        formData.TC_FORM_POS_002.email
      );
    }
  );

  test(
    'TC_FORM_NEG_003 - Verify invalid email format',
    async ({ homePage }) => {

      await homePage.form.enterEmail(
        formData.TC_FORM_NEG_003.email
      );

      await FormValidators.validateEmail(
        homePage.form,
        formData.TC_FORM_NEG_003.email
      );
    }
  );

  test(
    'TC_FORM_POS_003 - Verify valid phone number input',
    async ({ homePage }) => {

      await homePage.form.enterPhone(
        formData.TC_FORM_POS_003.phone
      );

      await FormValidators.validatePhone(
        homePage.form,
        formData.TC_FORM_POS_003.phone
      );
    }
  );

  test(
    'TC_FORM_NEG_004 - Verify invalid phone number input',
    async ({ homePage }) => {

      await homePage.form.enterPhone(
        formData.TC_FORM_NEG_004.phone
      );

      await FormValidators.validatePhone(
        homePage.form,
        formData.TC_FORM_NEG_004.phone
      );
    }
  );

  test(
    'TC_FORM_EDGE_001 - Verify multiline address input',
    async ({ homePage }) => {

      await homePage.form.enterAddress(
        formData.TC_FORM_EDGE_001.address
      );

      await FormValidators.validateAddress(
        homePage.form,
        formData.TC_FORM_EDGE_001.address
      );
    }
  );

  test(
    'TC_FORM_NEG_005 - Verify empty mandatory fields',
    async ({ homePage }) => {

      await homePage.form.enterName(
        formData.TC_FORM_NEG_005.name
      );

      await homePage.form.enterEmail(
        formData.TC_FORM_NEG_005.email
      );

      await homePage.form.enterPhone(
        formData.TC_FORM_NEG_005.phone
      );

      await homePage.form.enterAddress(
        formData.TC_FORM_NEG_005.address
      );

      await FormValidators.validateEmptyFields(
        homePage.form
        );
    }
  );
});