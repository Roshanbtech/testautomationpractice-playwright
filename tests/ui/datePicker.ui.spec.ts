import { test } from '../../framework/fixtures/uiFixtures';
import { DatePickerValidators } from '../../framework/validators/datePickerValidators';
import datePickerData from '../../framework/test-data/datePickerData.json';

test.describe('DATE PICKER UI TESTS', () => {

  
  test.beforeEach(async ({ homePage }) => {
    await homePage.navigate();
  });

  test(
    '@smoke TC_DATE_POS_001 - Verify valid date selection',
    async ({ homePage}) => {

      await homePage.datePicker.selectDate(
        datePickerData.TC_DATE_POS_001.date
      );

      await DatePickerValidators
        .validateSelectedDate(
          homePage.datePicker,
          datePickerData.TC_DATE_POS_001.date
        );
    }
  );

  test(
    '@regression TC_DATE_VAL_001 - Verify date format validation',
    async ({ homePage }) => {

      await homePage.datePicker.selectDate(
        datePickerData.TC_DATE_VAL_001.date
      );

      await DatePickerValidators
        .validateDateFormat(
          homePage.datePicker
        );
    }
  );

  test(
    '@regression TC_DATE_VAL_002 - Verify readonly date picker behavior',
    async ({ homePage }) => {

      await homePage.datePicker.tryTypingReadonlyField(
        datePickerData.TC_DATE_VAL_002.invalidText
      );

      await DatePickerValidators
        .validateReadonlyBehavior(
          homePage.datePicker,
          datePickerData.TC_DATE_VAL_002.invalidText
        );
    }
  );

  test(
    '@regression TC_DATE_POS_002 - Verify valid date range',
    async ({ homePage }) => {

      await homePage.datePicker.enterStartDate(
        datePickerData.TC_DATE_POS_002.startDate
      );

      await homePage.datePicker.enterEndDate(
        datePickerData.TC_DATE_POS_002.endDate
      );

      await DatePickerValidators
        .validateValidDateRange(
          homePage.datePicker,
          datePickerData.TC_DATE_POS_002.startDate,
          datePickerData.TC_DATE_POS_002.endDate
        );
    }
  );

  test(
    '@regression TC_DATE_NEG_001 - Verify invalid date range',
    async ({ homePage }) => {

      await homePage.datePicker.enterStartDate(
        datePickerData.TC_DATE_NEG_001.startDate
      );

      await homePage.datePicker.enterEndDate(
        datePickerData.TC_DATE_NEG_001.endDate
      );

      await DatePickerValidators
        .validateInvalidDateRange(
          datePickerData.TC_DATE_NEG_001.startDate,
          datePickerData.TC_DATE_NEG_001.endDate
        );
    }
  );

  test(
    '@regression TC_DATE_EDGE_001 - Verify same start and end date',
    async ({ homePage }) => {

      await homePage.datePicker.enterStartDate(
        datePickerData.TC_DATE_EDGE_001.startDate
      );

      await homePage.datePicker.enterEndDate(
        datePickerData.TC_DATE_EDGE_001.endDate
      );

      await DatePickerValidators
        .validateSameDateRange(
          homePage.datePicker,
          datePickerData.TC_DATE_EDGE_001.startDate
        );
    }
  );
});