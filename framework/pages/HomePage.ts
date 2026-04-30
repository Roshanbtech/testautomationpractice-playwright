import { Page } from '@playwright/test';
import { FormComponent } from '../components/form/FormComponent';
import { RadioButtonComponent } from '../components/radioButton/RadioButtonComponent';
import { CheckboxComponent } from '../components/checkbox/CheckboxComponent';
import { DropdownComponent } from '../components/dropdown/DropdownComponent';
import { DatePickerComponent } from '../components/datePicker/DatePickerComponent';
import { UploadComponent } from '../components/upload/UploadComponent';

export class HomePage {

  readonly page: Page;
  readonly form: FormComponent;
  readonly radioButton: RadioButtonComponent;
  readonly checkbox: CheckboxComponent;
  readonly dropdown: DropdownComponent;
  readonly datePicker: DatePickerComponent;
  readonly upload: UploadComponent;

  constructor(page: Page) {
    this.page = page;
    this.form = new FormComponent(page);
    this.radioButton = new RadioButtonComponent(page);
    this.checkbox = new CheckboxComponent(page);
    this.dropdown = new DropdownComponent(page);
    this.datePicker = new DatePickerComponent(page);
    this.upload = new UploadComponent(page);
  }

  async navigate() {
    await this.page.goto('/');
  }
}