export class FieldBase<T> {
  value?: T | [] | any;
  key?: string;
  controlType?: string;
  label?: string;
  type?: string;
  mode?: string;
  class?: string;
  placeHolder?: string;
  formatTime?: string;
  required?: boolean;
  readOnly?: boolean;
  checked?: boolean;
  loading?: boolean;
  showTime?: boolean;
  order?: number;
  min?: number;
  max?: number;
  options?: {
    label: string;
    value: string | number | any;
    checked?: boolean;
  }[];
  onChange?: Function;
  constructor(
    options: {
      value?: T | [] | any;
      key?: string;
      controlType?: string;
      label?: string;
      type?: string;
      mode?: string;
      class?: string;
      placeHolder?: string;
      formatTime?: string;
      required?: boolean;
      readOnly?: boolean;
      checked?: boolean;
      loading?: boolean;
      showTime?: boolean;
      order?: number;
      min?: number;
      max?: number;
      options?: {
        label: string;
        value: string | number | any;
        checked?: boolean;
      }[];
      onChange?: Function;
    } = {}
  ) {
    this.value = options.value;
    this.key = options.key || '';
    this.label = options.label || '';
    this.placeHolder = options.placeHolder || '';
    this.required = options.required;
    this.order = options.order === undefined ? 1 : options.order;
    this.controlType = options.controlType || '';
    this.type = options.type || '';
    this.options = options.options || [];
    this.checked = options.checked;
    this.loading = options.loading || false;
    this.readOnly = options.readOnly || false;
    this.onChange = options.onChange || function () {};
    this.mode = options.mode;
    this.min = options.min;
    this.max = options.max;
    this.class = options.class || '';
    this.showTime = options.showTime || false;
    this.formatTime = options.formatTime || 'dd/MM/YYYY HH:mm:ss';
  }
}
