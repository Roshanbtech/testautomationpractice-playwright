# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui\checkbox.ui.spec.ts >> CHECKBOX UI TESTS >> @smoke TC_CHECKBOX_POS_002 - Verify multiple checkbox selection
- Location: tests\ui\checkbox.ui.spec.ts:24:7

# Error details

```
Test timeout of 30000ms exceeded while running "beforeEach" hook.
```

```
Error: page.goto: Test timeout of 30000ms exceeded.
Call log:
  - navigating to "https://testautomationpractice.blogspot.com/", waiting until "load"

```

# Page snapshot

```yaml
- generic [ref=e16]:
  - banner [ref=e17]:
    - generic [ref=e23]:
      - heading "Automation Testing Practice" [level=1] [ref=e25]
      - paragraph [ref=e27]: For Selenium, Cypress & Playwright
  - list [ref=e34]:
    - listitem [ref=e35]:
      - link "Home" [ref=e36] [cursor=pointer]:
        - /url: http://testautomationpractice.blogspot.com/
    - listitem [ref=e37]:
      - link "Udemy Courses" [ref=e38] [cursor=pointer]:
        - /url: https://www.pavanonlinetrainings.com/#udemy
    - listitem [ref=e39]:
      - link "Online Trainings" [ref=e40] [cursor=pointer]:
        - /url: https://www.pavanonlinetrainings.com/
    - listitem [ref=e41]:
      - link "Blog" [ref=e42] [cursor=pointer]:
        - /url: https://www.pavantestingtools.com/
    - listitem [ref=e43]:
      - link "PlaywrightPractice" [ref=e44] [cursor=pointer]:
        - /url: https://testautomationpractice.blogspot.com/p/playwrightpractice.html
  - heading "Data Entry Form" [level=3] [ref=e65]:
    - link "Data Entry Form" [ref=e66] [cursor=pointer]:
      - /url: https://testautomationpractice.blogspot.com/2018/09/automation-form.html
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