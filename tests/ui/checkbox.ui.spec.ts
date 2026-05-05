import { test } from '../../framework/fixtures/uiFixtures';
import checkBoxData from '../../framework/test-data/checkboxData.json';
import { CheckboxValidators } from '../../framework/validators/checkboxValidators';

test.describe('CHECKBOX UI TESTS', () => {

  test.beforeEach(async ({ homePage }) => {
    await homePage.navigate();
  });

  test(
    '@smoke TC_CHECKBOX_POS_001 - Verify single checkbox selection',
    async ({ homePage }) => {
      const day = checkBoxData.TC_CHECKBOX_POS_001.day as keyof typeof homePage.checkbox.locators;
      await homePage.checkbox.selectDay(day);

      await CheckboxValidators.validateChecked(
        homePage.checkbox,
        day
      );
    }
  );

  test(
    '@smoke TC_CHECKBOX_POS_002 - Verify multiple checkbox selection',
    async ({ homePage }) => {

      const days = checkBoxData.TC_CHECKBOX_POS_002.days as Array<keyof typeof homePage.checkbox.locators>;
      await homePage.checkbox.selectAll(days);
      await CheckboxValidators.validateMultipleChecked(
        homePage.checkbox,
        days
      );
    }
  );

  test(
    '@regression TC_CHECKBOX_POS_003 - Verify checkbox deselection',
    async ({ homePage }) => {

      const day = checkBoxData.TC_CHECKBOX_POS_003.day as keyof typeof homePage.checkbox.locators;
      await homePage.checkbox.selectDay(day);
      await homePage.checkbox.unselectDay(day);
      await CheckboxValidators.validateUnchecked(
        homePage.checkbox,
        day
      );
    }
  );

  test(
    '@regression TC_CHECKBOX_EDGE_001 - Verify all checkboxes selection',
    async ({ homePage }) => {

      const days = checkBoxData.TC_CHECKBOX_EDGE_001.days as Array<keyof typeof homePage.checkbox.locators>;
      await homePage.checkbox.selectAll(days);

      await CheckboxValidators.validateMultipleChecked(
        homePage.checkbox,
        days
      );
    }
  );
});