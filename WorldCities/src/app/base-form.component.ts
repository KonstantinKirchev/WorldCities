import { Component } from '@angular/core';
import { FormGroup, AbstractControl } from '@angular/forms';

@Component({
  template: ''
})

export abstract class BaseFormComponent {

  // the form model
  form!: FormGroup;

  getErrors(
    control: AbstractControl,
    displayName: string,
    customMessages: { [key: string]: string } | null = null
  ): string[] {
    var errors: string[] = [];
    Object.keys(control.errors || {}).forEach((key) => {
      switch (key) {
        case 'required':
          var msg = displayName + ' ';
          if (customMessages?.[key]) {
            msg += customMessages?.[key];
          } else {
            msg += 'is required.';
          }
          errors.push(msg);
          break;
        case 'pattern':
          var msg = displayName + ' ';
          if (customMessages?.[key]) {
            msg += customMessages?.[key];
          } else {
            msg += 'contains invalid characters.';
          }
          errors.push(msg);
          break;
        case 'isDupeField':
          var msg = displayName + ' ';
          if (customMessages?.[key]) {
            msg += customMessages?.[key];
          } else {
            msg += 'already exists: please choose another.';
          }
          errors.push(msg);
          break;
        default:
          errors.push(displayName + ' is invalid.');
          break;
      }
    });
    return errors;
  }

  constructor() { }
}
