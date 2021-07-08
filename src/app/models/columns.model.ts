import { EventEmitter } from 'events';

export class ColumnsModel {
    name: string;
    visible?: boolean = true;
    field?: string;
    type?: string = 'text'; // date | datetime | image | check | 
    customView?: Function;
    action?: EventEmitter | Function

    constructor(options: {
        name: string,
        visible?: boolean,
        field?: string,
        type?: string,
        customView?: Function,
        action?: EventEmitter | Function,
    }) {
        this.name = options.name;
        this.visible = options.visible || true;
        this.field = options.field || '_id';
        this.type = options.type || 'text'
        this.customView = options.customView || Function;
        this.action = options.action || EventEmitter || Function;
    }
}