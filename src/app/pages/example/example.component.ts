import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Checkbox } from 'src/app/models/form/Checkbox';
import { CheckboxGroup } from 'src/app/models/form/CheckboxGroup';
import { DateTime } from 'src/app/models/form/DateTime';
import { FieldBase } from 'src/app/models/form/FieldBase';
import { NumberBox } from 'src/app/models/form/NumberBox';
import { RadioGroup } from 'src/app/models/form/RadioGroup';
import { SelectBox } from 'src/app/models/form/SelectBox';
import { Textarea } from 'src/app/models/form/Textarea';
import { TextBox } from 'src/app/models/form/TextBox';
import { AutoFormComponent } from 'src/app/shared/auto-form/forms/auto-form/auto-form.component';

@Component({
  selector: 'example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.less'],
})
export class ExampleComponent implements OnInit {
  fields: FieldBase<string>[] = [
    new SelectBox({
      key: 'selectbox',
      label: 'Selectbox',
      options: [
        { value: 'solid', label: 'Solid' },
        { value: 'great', label: 'Great' },
        { value: 'good', label: 'Good' },
        { value: 'unproven', label: 'Unproven' },
      ],
      order: 3,
      // value: 'good',
      required: true,
      onChange: this.onChange,
    }),
    new SelectBox({
      key: 'selectboxMulti',
      label: 'Selectbox Multi',
      mode: 'multiple',
      value: ['good', 'great'],
      options: [
        { value: 'solid', label: 'Solid' },
        { value: 'great', label: 'Great' },
        { value: 'good', label: 'Good' },
        { value: 'unproven', label: 'Unproven' },
      ],
      order: 3,
      onChange: this.onChange,
    }),

    new TextBox({
      key: 'textbox',
      label: 'TextBox',
      value: 'textbox',
      required: true,
      order: 1,
    }),

    new NumberBox({
      key: 'numberBox',
      label: 'NumberBox',
      value: '500',
      required: true,
      order: 1,
      min: 1,
      max: 1000,
      class: 'wrap-input',
    }),

    new Textarea({
      key: 'textarea',
      label: 'Textarea',
      order: 2,
      required: true,
      value: 'textarea',
    }),

    new Checkbox({
      key: 'checkbox',
      label: 'Checkbox',
      order: 2,
      checked: false,
    }),

    new CheckboxGroup({
      key: 'checkboxGroup',
      label: 'CheckboxGroup',
      options: [
        { value: 'solid', label: 'Solid', checked: true },
        { value: 'great', label: 'Great' },
        { value: 'good', label: 'Good' },
        { value: 'unproven', label: 'Unproven' },
      ],
      order: 3,
      onChange: this.onChange,
    }),

    new RadioGroup({
      key: 'radioGroup',
      label: 'radioGroup',
      value: 'good',
      options: [
        { value: 'solid', label: 'Solid' },
        { value: 'great', label: 'Great' },
        { value: 'good', label: 'Good' },
        { value: 'unproven', label: 'Unproven' },
      ],
      order: 3,
      onChange: this.onChange,
    }),

    new DateTime({
      key: 'dateTime',
      label: 'DateTime',
      order: 6,
      showTime: true,
      value: '',
    }),
  ];

  form: FormGroup;
  @ViewChild(AutoFormComponent)
  set autoFormComponent(v: AutoFormComponent) {
    setTimeout(() => {
      this.form = v.form;
      this.form.addControl(
        'adnewfield',
        new FormControl(null, [Validators.required])
      );
    }, 0);
  }
  constructor() {}

  ngOnInit(): void {}

  onChange(e) {
    console.log(e);
  }
}
