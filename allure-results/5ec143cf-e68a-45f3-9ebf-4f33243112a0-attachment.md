# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui\datePicker.ui.spec.ts >> DATE PICKER UI TESTS >> @regression TC_DATE_VAL_001 - Verify date format validation
- Location: tests\ui\datePicker.ui.spec.ts:28:7

# Error details

```
Test timeout of 30000ms exceeded while running "beforeEach" hook.
```

```
Error: page.goto: Test timeout of 30000ms exceeded.
Call log:
  - navigating to "https://testautomationpractice.blogspot.com/", waiting until "load"

```

# Test source

```ts
  1  | import { Page } from '@playwright/test';
  2  | import { FormComponent } from '../components/form/FormComponent';
  3  | import { RadioButtonComponent } from '../components/radioButton/RadioButtonComponent';
  4  | import { CheckboxComponent } from '../components/checkbox/CheckboxComponent';
  5  | import { DropdownComponent } from '../components/dropdown/DropdownComponent';
  6  | import { DatePickerComponent } from '../components/datePicker/DatePickerComponent';
  7  | import { UploadComponent } from '../components/upload/UploadComponent';
  8  | 
  9  | export class HomePage {
  10 | 
  11 |   readonly page: Page;
  12 |   readonly form: FormComponent;
  13 |   readonly radioButton: RadioButtonComponent;
  14 |   readonly checkbox: CheckboxComponent;
  15 |   readonly dropdown: DropdownComponent;
  16 |   readonly datePicker: DatePickerComponent;
  17 |   readonly upload: UploadComponent;
  18 | 
  19 |   constructor(page: Page) {
  20 |     this.page = page;
  21 |     this.form = new FormComponent(page);
  22 |     this.radioButton = new RadioButtonComponent(page);
  23 |     this.checkbox = new CheckboxComponent(page);
  24 |     this.dropdown = new DropdownComponent(page);
  25 |     this.datePicker = new DatePickerComponent(page);
  26 |     this.upload = new UploadComponent(page);
  27 |   }
  28 | 
  29 |   async navigate() {
> 30 |     await this.page.goto('/');
     |                     ^ Error: page.goto: Test timeout of 30000ms exceeded.
  31 |   }
  32 | }
```