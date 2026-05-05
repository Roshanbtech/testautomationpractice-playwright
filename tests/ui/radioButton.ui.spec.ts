import { test } from '../../framework/fixtures/uiFixtures';
import { RadioButtonValidators } from '../../framework/validators/radioButtonValidators';
import radioButtonData from '../../framework/test-data/radioButtonData.json';

test.describe('RADIO BUTTON UI TESTS', () => {

  test.beforeEach(async ({ homePage }) => {
    await homePage.navigate();
  });

  test(
    '@smoke TC_RADIO_POS_001 - Verify Male radio button selection',
    async ({ homePage }) => {
      const gender = radioButtonData.TC_RADIO_POS_001.gender as 'male';

      await homePage.radioButton.selectGender(gender);

      await RadioButtonValidators.validateSelectedGender(
        homePage.radioButton,
        gender
      );
    }
  );

  test(
    '@smoke TC_RADIO_POS_002 - Verify Female radio button selection',
    async ({ homePage }) => {

      const gender = radioButtonData.TC_RADIO_POS_002.gender as 'female';
      await homePage.radioButton.selectGender(gender);

      await RadioButtonValidators.validateSelectedGender(
        homePage.radioButton,
        gender
      );
    }
  );

  test(
    '@regression TC_RADIO_VAL_001 - Verify only one radio button can be selected',
  async ({ homePage }) => {

    const firstSelection =
      radioButtonData.TC_RADIO_VAL_001.firstSelection as 'male';

    const secondSelection =
      radioButtonData.TC_RADIO_VAL_001.secondSelection as 'female';

    await homePage.radioButton.selectGender(firstSelection);

    await homePage.radioButton.selectGender(secondSelection);

    await RadioButtonValidators.validateSingleSelection(
      homePage.radioButton
    );
  }
);
});