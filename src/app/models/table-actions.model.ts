export class TableActionsModel {
  name?: String;
  action?: Function;
  visible?: Function;
  type?: String;
  danger?: Boolean;
  size?: String;
  icon?: String;

  constructor(options: {
    name?: String;
    action?: Function;
    visible?: Function;
    type?: String;
    danger?: Boolean;
    size?: String;
    icon?: String;
  }) {
    this.name = options.name;
    this.action = options.action || Function;
    this.visible = options.visible || Function;
    this.type = options.type || 'primary';
    this.danger = options.danger || false;
    this.size = options.size || 'small'; //
    this.icon = options.icon || null;
  }
}
