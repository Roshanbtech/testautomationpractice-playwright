import { test } from '../../framework/fixtures/uiFixtures';
import dropdownData from '../../framework/test-data/dropdownData.json';
import { DropdownValidators } from '../../framework/validators/dropdownValidators';

test.describe('DROPDOWN UI TESTS', () => {


  test.beforeEach(async ({ homePage }) => {
    await homePage.navigate();
  });

  test('TC_DROPDOWN_POS_001 - Verify country dropdown selection',
    async ({ homePage }) => {

      await homePage.dropdown.selectCountry(
        dropdownData.TC_DROPDOWN_POS_001.country
      );

      await DropdownValidators
        .validateCountrySelection(
          homePage.dropdown,
          dropdownData.TC_DROPDOWN_POS_001.country
        );
    }
  );

  test(
    'TC_DROPDOWN_VAL_001 - Verify country dropdown values',
    async ( { homePage } ) => {

      await DropdownValidators
        .validateDropdownOptions(
          homePage.dropdown,
          dropdownData.TC_DROPDOWN_VAL_001.countries
        );
    }
  );

  test(
    'TC_MULTISELECT_POS_001 - Verify multi-select dropdown',
    async ( { homePage } ) => {

      await homePage.dropdown.selectMultipleColors(
        dropdownData.TC_MULTISELECT_POS_001.colors
      );

      await DropdownValidators
        .validateMultipleColorSelection(
          homePage.dropdown,
          dropdownData.TC_MULTISELECT_POS_001.colors
        );
    }
  );

  test(
    'TC_MULTISELECT_NEG_001 - Verify dropdown deselection',
    async ( { homePage } ) => {

      await homePage.dropdown.selectMultipleColors([dropdownData.TC_MULTISELECT_NEG_001.color]);

      await homePage.dropdown.deselectAllColors();

      await DropdownValidators
        .validateColorDeselection(
          homePage.dropdown
        );
    }
  );
});