import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  TemplateRef,
  AfterContentChecked,
  ChangeDetectorRef,
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldBase } from 'src/app/models/form/FieldBase';
import { FieldControlService } from 'src/app/services/field-control.service';

@Component({
  selector: 'auto-form',
  templateUrl: './auto-form.component.html',
  styleUrls: ['./auto-form.component.less'],
  providers: [FieldControlService],
})
export class AutoFormComponent implements OnInit, AfterContentChecked {
  @Input() fields: FieldBase<string>[] = [];
  @Input() customField: TemplateRef<any>;
  @Output() submitForm: EventEmitter<any> = new EventEmitter();
  @Output() resetForm: EventEmitter<any> = new EventEmitter();
  @Input() col: number = 12;
  @Input() layout: string = 'horizontal';

  public form: FormGroup;
  payLoad = '';

  constructor(
    private cdRef: ChangeDetectorRef,
    private fcs: FieldControlService
  ) {}

  ngOnInit() {
    this.form = this.fcs.toFormGroup(this.fields);
  }

  ngAfterContentChecked(): void {
    this.cdRef.detectChanges();
  }

  onSubmit() {
    for (const i in this.form.controls) {
      this.form.controls[i].markAsDirty();
      this.form.controls[i].updateValueAndValidity();
    }
    if (this.form.valid) {
      this.payLoad = JSON.stringify(this.form.getRawValue());
      this.submitForm.emit(this.form.getRawValue());
    }
  }

  onResetForm(e: MouseEvent): void {
    e.preventDefault();
    this.form.reset();
    for (const key in this.form.controls) {
      this.form.controls[key].markAsPristine();
      this.form.controls[key].updateValueAndValidity();
    }
    this.resetForm.emit(true);
  }

  onValueChange(e, index) {
    if (typeof this.fields[index].onChange === 'function') {
      this.fields[index].onChange(e);
    }
  }
}
