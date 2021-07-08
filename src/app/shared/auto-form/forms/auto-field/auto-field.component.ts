import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldBase } from 'src/app/models/form/FieldBase';

@Component({
  selector: 'auto-field',
  templateUrl: './auto-field.component.html',
  styleUrls: ['./auto-field.component.less']
})
export class AutoFieldComponent {
  @Input() field: FieldBase<string>;
  @Input() form: FormGroup;
  @Output() onChangeValue: EventEmitter<any> = new EventEmitter();
  get isValid() { return this.form.controls[this.field.key].valid; }

  onChange(e) {
    this.onChangeValue.emit(e);
  }
}
