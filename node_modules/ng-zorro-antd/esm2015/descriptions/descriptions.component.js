/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { __decorate, __metadata } from "tslib";
import { Directionality } from '@angular/cdk/bidi';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChildren, Input, Optional, QueryList, ViewEncapsulation } from '@angular/core';
import { NzConfigService, WithConfig } from 'ng-zorro-antd/core/config';
import { warn } from 'ng-zorro-antd/core/logger';
import { gridResponsiveMap, NzBreakpointEnum, NzBreakpointService } from 'ng-zorro-antd/core/services';
import { InputBoolean } from 'ng-zorro-antd/core/util';
import { merge, Subject } from 'rxjs';
import { auditTime, startWith, switchMap, takeUntil, tap } from 'rxjs/operators';
import { NzDescriptionsItemComponent } from './descriptions-item.component';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from 'ng-zorro-antd/core/config';
import * as ɵngcc2 from 'ng-zorro-antd/core/services';
import * as ɵngcc3 from '@angular/cdk/bidi';
import * as ɵngcc4 from '@angular/common';
import * as ɵngcc5 from 'ng-zorro-antd/core/outlet';

function NzDescriptionsComponent_div_0_div_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r5 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r5.nzTitle);
} }
function NzDescriptionsComponent_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 6);
    ɵngcc0.ɵɵtemplate(1, NzDescriptionsComponent_div_0_div_1_ng_container_1_Template, 2, 1, "ng-container", 7);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("nzStringTemplateOutlet", ctx_r3.nzTitle);
} }
function NzDescriptionsComponent_div_0_div_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r6 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r6.nzExtra);
} }
function NzDescriptionsComponent_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 8);
    ɵngcc0.ɵɵtemplate(1, NzDescriptionsComponent_div_0_div_2_ng_container_1_Template, 2, 1, "ng-container", 7);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("nzStringTemplateOutlet", ctx_r4.nzExtra);
} }
function NzDescriptionsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 3);
    ɵngcc0.ɵɵtemplate(1, NzDescriptionsComponent_div_0_div_1_Template, 2, 1, "div", 4);
    ɵngcc0.ɵɵtemplate(2, NzDescriptionsComponent_div_0_div_2_Template, 2, 1, "div", 5);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.nzTitle);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.nzExtra);
} }
function NzDescriptionsComponent_ng_container_4_tr_1_ng_container_1_ng_container_1_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r11 = ɵngcc0.ɵɵnextContext(2).$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", item_r11.title, " ");
} }
function NzDescriptionsComponent_ng_container_4_tr_1_ng_container_1_ng_container_1_ng_template_6_Template(rf, ctx) { }
function NzDescriptionsComponent_ng_container_4_tr_1_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelementStart(1, "td", 12);
    ɵngcc0.ɵɵelementStart(2, "div", 13);
    ɵngcc0.ɵɵelementStart(3, "span", 14);
    ɵngcc0.ɵɵtemplate(4, NzDescriptionsComponent_ng_container_4_tr_1_ng_container_1_ng_container_1_ng_container_4_Template, 2, 1, "ng-container", 7);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(5, "span", 15);
    ɵngcc0.ɵɵtemplate(6, NzDescriptionsComponent_ng_container_4_tr_1_ng_container_1_ng_container_1_ng_template_6_Template, 0, 0, "ng-template", 16);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r11 = ɵngcc0.ɵɵnextContext().$implicit;
    const ctx_r13 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("colSpan", item_r11.span);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵclassProp("ant-descriptions-item-no-colon", !ctx_r13.nzColon);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("nzStringTemplateOutlet", item_r11.title);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", item_r11.content);
} }
function NzDescriptionsComponent_ng_container_4_tr_1_ng_container_1_ng_container_2_td_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r11 = ɵngcc0.ɵɵnextContext(3).$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", item_r11.title, " ");
} }
function NzDescriptionsComponent_ng_container_4_tr_1_ng_container_1_ng_container_2_td_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "td", 14);
    ɵngcc0.ɵɵtemplate(1, NzDescriptionsComponent_ng_container_4_tr_1_ng_container_1_ng_container_2_td_1_ng_container_1_Template, 2, 1, "ng-container", 7);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r11 = ɵngcc0.ɵɵnextContext(2).$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("nzStringTemplateOutlet", item_r11.title);
} }
function NzDescriptionsComponent_ng_container_4_tr_1_ng_container_1_ng_container_2_ng_template_3_Template(rf, ctx) { }
function NzDescriptionsComponent_ng_container_4_tr_1_ng_container_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, NzDescriptionsComponent_ng_container_4_tr_1_ng_container_1_ng_container_2_td_1_Template, 2, 1, "td", 17);
    ɵngcc0.ɵɵelementStart(2, "td", 18);
    ɵngcc0.ɵɵtemplate(3, NzDescriptionsComponent_ng_container_4_tr_1_ng_container_1_ng_container_2_ng_template_3_Template, 0, 0, "ng-template", 16);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r11 = ɵngcc0.ɵɵnextContext().$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("nzStringTemplateOutlet", item_r11.title);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("colSpan", item_r11.span * 2 - 1);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", item_r11.content);
} }
function NzDescriptionsComponent_ng_container_4_tr_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, NzDescriptionsComponent_ng_container_4_tr_1_ng_container_1_ng_container_1_Template, 7, 5, "ng-container", 2);
    ɵngcc0.ɵɵtemplate(2, NzDescriptionsComponent_ng_container_4_tr_1_ng_container_1_ng_container_2_Template, 4, 3, "ng-container", 2);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r10 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r10.nzBordered);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r10.nzBordered);
} }
function NzDescriptionsComponent_ng_container_4_tr_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "tr", 10);
    ɵngcc0.ɵɵtemplate(1, NzDescriptionsComponent_ng_container_4_tr_1_ng_container_1_Template, 3, 2, "ng-container", 11);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r8 = ctx.$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", row_r8);
} }
function NzDescriptionsComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, NzDescriptionsComponent_ng_container_4_tr_1_Template, 2, 1, "tr", 9);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r1.itemMatrix);
} }
function NzDescriptionsComponent_ng_container_5_ng_container_1_ng_container_1_ng_container_2_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r32 = ɵngcc0.ɵɵnextContext().$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", item_r32.title, " ");
} }
function NzDescriptionsComponent_ng_container_5_ng_container_1_ng_container_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelementStart(1, "td", 12);
    ɵngcc0.ɵɵelementStart(2, "div", 13);
    ɵngcc0.ɵɵelementStart(3, "span", 14);
    ɵngcc0.ɵɵtemplate(4, NzDescriptionsComponent_ng_container_5_ng_container_1_ng_container_1_ng_container_2_ng_container_4_Template, 2, 1, "ng-container", 7);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r32 = ctx.$implicit;
    const ctx_r30 = ɵngcc0.ɵɵnextContext(4);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("colSpan", item_r32.span);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵclassProp("ant-descriptions-item-no-colon", !ctx_r30.nzColon);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("nzStringTemplateOutlet", item_r32.title);
} }
function NzDescriptionsComponent_ng_container_5_ng_container_1_ng_container_1_ng_container_4_ng_template_4_Template(rf, ctx) { }
function NzDescriptionsComponent_ng_container_5_ng_container_1_ng_container_1_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelementStart(1, "td", 12);
    ɵngcc0.ɵɵelementStart(2, "div", 13);
    ɵngcc0.ɵɵelementStart(3, "span", 15);
    ɵngcc0.ɵɵtemplate(4, NzDescriptionsComponent_ng_container_5_ng_container_1_ng_container_1_ng_container_4_ng_template_4_Template, 0, 0, "ng-template", 16);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r36 = ctx.$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("colSpan", item_r36.span);
    ɵngcc0.ɵɵadvance(3);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", item_r36.content);
} }
function NzDescriptionsComponent_ng_container_5_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelementStart(1, "tr", 10);
    ɵngcc0.ɵɵtemplate(2, NzDescriptionsComponent_ng_container_5_ng_container_1_ng_container_1_ng_container_2_Template, 5, 4, "ng-container", 11);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(3, "tr", 10);
    ɵngcc0.ɵɵtemplate(4, NzDescriptionsComponent_ng_container_5_ng_container_1_ng_container_1_ng_container_4_Template, 5, 2, "ng-container", 11);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const row_r28 = ctx.$implicit;
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngForOf", row_r28);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngForOf", row_r28);
} }
function NzDescriptionsComponent_ng_container_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, NzDescriptionsComponent_ng_container_5_ng_container_1_ng_container_1_Template, 5, 2, "ng-container", 11);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r25 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r25.itemMatrix);
} }
function NzDescriptionsComponent_ng_container_5_ng_container_2_ng_container_1_ng_container_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r44 = ɵngcc0.ɵɵnextContext().$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", item_r44.title, " ");
} }
function NzDescriptionsComponent_ng_container_5_ng_container_2_ng_container_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelementStart(1, "td", 19);
    ɵngcc0.ɵɵtemplate(2, NzDescriptionsComponent_ng_container_5_ng_container_2_ng_container_1_ng_container_2_ng_container_2_Template, 2, 1, "ng-container", 7);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r44 = ctx.$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("colSpan", item_r44.span);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("nzStringTemplateOutlet", item_r44.title);
} }
function NzDescriptionsComponent_ng_container_5_ng_container_2_ng_container_1_ng_container_4_ng_template_2_Template(rf, ctx) { }
function NzDescriptionsComponent_ng_container_5_ng_container_2_ng_container_1_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelementStart(1, "td", 18);
    ɵngcc0.ɵɵtemplate(2, NzDescriptionsComponent_ng_container_5_ng_container_2_ng_container_1_ng_container_4_ng_template_2_Template, 0, 0, "ng-template", 16);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r48 = ctx.$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("colSpan", item_r48.span);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", item_r48.content);
} }
function NzDescriptionsComponent_ng_container_5_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelementStart(1, "tr", 10);
    ɵngcc0.ɵɵtemplate(2, NzDescriptionsComponent_ng_container_5_ng_container_2_ng_container_1_ng_container_2_Template, 3, 2, "ng-container", 11);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(3, "tr", 10);
    ɵngcc0.ɵɵtemplate(4, NzDescriptionsComponent_ng_container_5_ng_container_2_ng_container_1_ng_container_4_Template, 3, 2, "ng-container", 11);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const row_r40 = ctx.$implicit;
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngForOf", row_r40);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngForOf", row_r40);
} }
function NzDescriptionsComponent_ng_container_5_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, NzDescriptionsComponent_ng_container_5_ng_container_2_ng_container_1_Template, 5, 2, "ng-container", 11);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r26 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r26.itemMatrix);
} }
function NzDescriptionsComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, NzDescriptionsComponent_ng_container_5_ng_container_1_Template, 2, 1, "ng-container", 2);
    ɵngcc0.ɵɵtemplate(2, NzDescriptionsComponent_ng_container_5_ng_container_2_Template, 2, 1, "ng-container", 2);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r2.nzBordered);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r2.nzBordered);
} }
const NZ_CONFIG_MODULE_NAME = 'descriptions';
const defaultColumnMap = {
    xxl: 3,
    xl: 3,
    lg: 3,
    md: 3,
    sm: 2,
    xs: 1
};
export class NzDescriptionsComponent {
    constructor(nzConfigService, cdr, breakpointService, directionality) {
        this.nzConfigService = nzConfigService;
        this.cdr = cdr;
        this.breakpointService = breakpointService;
        this.directionality = directionality;
        this._nzModuleName = NZ_CONFIG_MODULE_NAME;
        this.nzBordered = false;
        this.nzLayout = 'horizontal';
        this.nzColumn = defaultColumnMap;
        this.nzSize = 'default';
        this.nzTitle = '';
        this.nzColon = true;
        this.itemMatrix = [];
        this.realColumn = 3;
        this.dir = 'ltr';
        this.breakpoint = NzBreakpointEnum.md;
        this.destroy$ = new Subject();
    }
    ngOnInit() {
        var _a;
        this.dir = this.directionality.value;
        (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
            this.dir = direction;
        });
    }
    ngOnChanges(changes) {
        if (changes.nzColumn) {
            this.prepareMatrix();
        }
    }
    ngAfterContentInit() {
        const contentChange$ = this.items.changes.pipe(startWith(this.items), takeUntil(this.destroy$));
        merge(contentChange$, contentChange$.pipe(switchMap(() => merge(...this.items.map(i => i.inputChange$)).pipe(auditTime(16)))), this.breakpointService.subscribe(gridResponsiveMap).pipe(tap(bp => (this.breakpoint = bp))))
            .pipe(takeUntil(this.destroy$))
            .subscribe(() => {
            this.prepareMatrix();
            this.cdr.markForCheck();
        });
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    /**
     * Prepare the render matrix according to description items' spans.
     */
    prepareMatrix() {
        if (!this.items) {
            return;
        }
        let currentRow = [];
        let width = 0;
        const column = (this.realColumn = this.getColumn());
        const items = this.items.toArray();
        const length = items.length;
        const matrix = [];
        const flushRow = () => {
            matrix.push(currentRow);
            currentRow = [];
            width = 0;
        };
        for (let i = 0; i < length; i++) {
            const item = items[i];
            const { nzTitle: title, content, nzSpan: span } = item;
            width += span;
            // If the last item make the row's length exceeds `nzColumn`, the last
            // item should take all the space left. This logic is implemented in the template.
            // Warn user about that.
            if (width >= column) {
                if (width > column) {
                    warn(`"nzColumn" is ${column} but we have row length ${width}`);
                }
                currentRow.push({ title, content, span: column - (width - span) });
                flushRow();
            }
            else if (i === length - 1) {
                currentRow.push({ title, content, span: column - (width - span) });
                flushRow();
            }
            else {
                currentRow.push({ title, content, span });
            }
        }
        this.itemMatrix = matrix;
    }
    getColumn() {
        if (typeof this.nzColumn !== 'number') {
            return this.nzColumn[this.breakpoint];
        }
        return this.nzColumn;
    }
}
NzDescriptionsComponent.ɵfac = function NzDescriptionsComponent_Factory(t) { return new (t || NzDescriptionsComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc1.NzConfigService), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.NzBreakpointService), ɵngcc0.ɵɵdirectiveInject(ɵngcc3.Directionality, 8)); };
NzDescriptionsComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzDescriptionsComponent, selectors: [["nz-descriptions"]], contentQueries: function NzDescriptionsComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, NzDescriptionsItemComponent, false);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.items = _t);
    } }, hostAttrs: [1, "ant-descriptions"], hostVars: 8, hostBindings: function NzDescriptionsComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("ant-descriptions-bordered", ctx.nzBordered)("ant-descriptions-middle", ctx.nzSize === "middle")("ant-descriptions-small", ctx.nzSize === "small")("ant-descriptions-rtl", ctx.dir === "rtl");
    } }, inputs: { nzBordered: "nzBordered", nzLayout: "nzLayout", nzColumn: "nzColumn", nzSize: "nzSize", nzTitle: "nzTitle", nzColon: "nzColon", nzExtra: "nzExtra" }, exportAs: ["nzDescriptions"], features: [ɵngcc0.ɵɵNgOnChangesFeature], decls: 6, vars: 3, consts: [["class", "ant-descriptions-header", 4, "ngIf"], [1, "ant-descriptions-view"], [4, "ngIf"], [1, "ant-descriptions-header"], ["class", "ant-descriptions-title", 4, "ngIf"], ["class", "ant-descriptions-extra", 4, "ngIf"], [1, "ant-descriptions-title"], [4, "nzStringTemplateOutlet"], [1, "ant-descriptions-extra"], ["class", "ant-descriptions-row", 4, "ngFor", "ngForOf"], [1, "ant-descriptions-row"], [4, "ngFor", "ngForOf"], [1, "ant-descriptions-item", 3, "colSpan"], [1, "ant-descriptions-item-container"], [1, "ant-descriptions-item-label"], [1, "ant-descriptions-item-content"], [3, "ngTemplateOutlet"], ["class", "ant-descriptions-item-label", 4, "nzStringTemplateOutlet"], [1, "ant-descriptions-item-content", 3, "colSpan"], [1, "ant-descriptions-item-label", 3, "colSpan"]], template: function NzDescriptionsComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, NzDescriptionsComponent_div_0_Template, 3, 2, "div", 0);
        ɵngcc0.ɵɵelementStart(1, "div", 1);
        ɵngcc0.ɵɵelementStart(2, "table");
        ɵngcc0.ɵɵelementStart(3, "tbody");
        ɵngcc0.ɵɵtemplate(4, NzDescriptionsComponent_ng_container_4_Template, 2, 1, "ng-container", 2);
        ɵngcc0.ɵɵtemplate(5, NzDescriptionsComponent_ng_container_5_Template, 3, 2, "ng-container", 2);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngIf", ctx.nzTitle || ctx.nzExtra);
        ɵngcc0.ɵɵadvance(4);
        ɵngcc0.ɵɵproperty("ngIf", ctx.nzLayout === "horizontal");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.nzLayout === "vertical");
    } }, directives: [ɵngcc4.NgIf, ɵngcc5.NzStringTemplateOutletDirective, ɵngcc4.NgForOf, ɵngcc4.NgTemplateOutlet], encapsulation: 2, changeDetection: 0 });
NzDescriptionsComponent.ctorParameters = () => [
    { type: NzConfigService },
    { type: ChangeDetectorRef },
    { type: NzBreakpointService },
    { type: Directionality, decorators: [{ type: Optional }] }
];
NzDescriptionsComponent.propDecorators = {
    items: [{ type: ContentChildren, args: [NzDescriptionsItemComponent,] }],
    nzBordered: [{ type: Input }],
    nzLayout: [{ type: Input }],
    nzColumn: [{ type: Input }],
    nzSize: [{ type: Input }],
    nzTitle: [{ type: Input }],
    nzExtra: [{ type: Input }],
    nzColon: [{ type: Input }]
};
__decorate([
    InputBoolean(),
    WithConfig(),
    __metadata("design:type", Boolean)
], NzDescriptionsComponent.prototype, "nzBordered", void 0);
__decorate([
    WithConfig(),
    __metadata("design:type", Object)
], NzDescriptionsComponent.prototype, "nzColumn", void 0);
__decorate([
    WithConfig(),
    __metadata("design:type", String)
], NzDescriptionsComponent.prototype, "nzSize", void 0);
__decorate([
    WithConfig(),
    InputBoolean(),
    __metadata("design:type", Boolean)
], NzDescriptionsComponent.prototype, "nzColon", void 0);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzDescriptionsComponent, [{
        type: Component,
        args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                selector: 'nz-descriptions',
                exportAs: 'nzDescriptions',
                preserveWhitespaces: false,
                template: `
    <div *ngIf="nzTitle || nzExtra" class="ant-descriptions-header">
      <div *ngIf="nzTitle" class="ant-descriptions-title">
        <ng-container *nzStringTemplateOutlet="nzTitle">{{ nzTitle }}</ng-container>
      </div>
      <div *ngIf="nzExtra" class="ant-descriptions-extra">
        <ng-container *nzStringTemplateOutlet="nzExtra">{{ nzExtra }}</ng-container>
      </div>
    </div>
    <div class="ant-descriptions-view">
      <table>
        <tbody>
          <ng-container *ngIf="nzLayout === 'horizontal'">
            <tr class="ant-descriptions-row" *ngFor="let row of itemMatrix; let i = index">
              <ng-container *ngFor="let item of row; let isLast = last">
                <!-- Horizontal & NOT Bordered -->
                <ng-container *ngIf="!nzBordered">
                  <td class="ant-descriptions-item" [colSpan]="item.span">
                    <div class="ant-descriptions-item-container">
                      <span class="ant-descriptions-item-label" [class.ant-descriptions-item-no-colon]="!nzColon">
                        <ng-container *nzStringTemplateOutlet="item.title">
                          {{ item.title }}
                        </ng-container>
                      </span>
                      <span class="ant-descriptions-item-content">
                        <ng-template [ngTemplateOutlet]="item.content"></ng-template>
                      </span>
                    </div>
                  </td>
                </ng-container>
                <!-- Horizontal & Bordered -->
                <ng-container *ngIf="nzBordered">
                  <td class="ant-descriptions-item-label" *nzStringTemplateOutlet="item.title">
                    <ng-container *nzStringTemplateOutlet="item.title">
                      {{ item.title }}
                    </ng-container>
                  </td>
                  <td class="ant-descriptions-item-content" [colSpan]="item.span * 2 - 1">
                    <ng-template [ngTemplateOutlet]="item.content"></ng-template>
                  </td>
                </ng-container>
              </ng-container>
            </tr>
          </ng-container>

          <ng-container *ngIf="nzLayout === 'vertical'">
            <!-- Vertical & NOT Bordered -->
            <ng-container *ngIf="!nzBordered">
              <ng-container *ngFor="let row of itemMatrix; let i = index">
                <tr class="ant-descriptions-row">
                  <ng-container *ngFor="let item of row; let isLast = last">
                    <td class="ant-descriptions-item" [colSpan]="item.span">
                      <div class="ant-descriptions-item-container">
                        <span class="ant-descriptions-item-label" [class.ant-descriptions-item-no-colon]="!nzColon">
                          <ng-container *nzStringTemplateOutlet="item.title">
                            {{ item.title }}
                          </ng-container>
                        </span>
                      </div>
                    </td>
                  </ng-container>
                </tr>
                <tr class="ant-descriptions-row">
                  <ng-container *ngFor="let item of row; let isLast = last">
                    <td class="ant-descriptions-item" [colSpan]="item.span">
                      <div class="ant-descriptions-item-container">
                        <span class="ant-descriptions-item-content">
                          <ng-template [ngTemplateOutlet]="item.content"></ng-template>
                        </span>
                      </div>
                    </td>
                  </ng-container>
                </tr>
              </ng-container>
            </ng-container>
            <!-- Vertical & Bordered -->
            <ng-container *ngIf="nzBordered">
              <ng-container *ngFor="let row of itemMatrix; let i = index">
                <tr class="ant-descriptions-row">
                  <ng-container *ngFor="let item of row; let isLast = last">
                    <td class="ant-descriptions-item-label" [colSpan]="item.span">
                      <ng-container *nzStringTemplateOutlet="item.title">
                        {{ item.title }}
                      </ng-container>
                    </td>
                  </ng-container>
                </tr>
                <tr class="ant-descriptions-row">
                  <ng-container *ngFor="let item of row; let isLast = last">
                    <td class="ant-descriptions-item-content" [colSpan]="item.span">
                      <ng-template [ngTemplateOutlet]="item.content"></ng-template>
                    </td>
                  </ng-container>
                </tr>
              </ng-container>
            </ng-container>
          </ng-container>
        </tbody>
      </table>
    </div>
  `,
                host: {
                    class: 'ant-descriptions',
                    '[class.ant-descriptions-bordered]': 'nzBordered',
                    '[class.ant-descriptions-middle]': 'nzSize === "middle"',
                    '[class.ant-descriptions-small]': 'nzSize === "small"',
                    '[class.ant-descriptions-rtl]': 'dir === "rtl"'
                }
            }]
    }], function () { return [{ type: ɵngcc1.NzConfigService }, { type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc2.NzBreakpointService }, { type: ɵngcc3.Directionality, decorators: [{
                type: Optional
            }] }]; }, { nzBordered: [{
            type: Input
        }], nzLayout: [{
            type: Input
        }], nzColumn: [{
            type: Input
        }], nzSize: [{
            type: Input
        }], nzTitle: [{
            type: Input
        }], nzColon: [{
            type: Input
        }], items: [{
            type: ContentChildren,
            args: [NzDescriptionsItemComponent]
        }], nzExtra: [{
            type: Input
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVzY3JpcHRpb25zLmNvbXBvbmVudC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vY29tcG9uZW50cy9kZXNjcmlwdGlvbnMvZGVzY3JpcHRpb25zLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxPQUFPLEVBQWEsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDOUQsT0FBTyxFQUVMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULGVBQWUsRUFDZixLQUFLLEVBSUwsUUFBUSxFQUNSLFNBQVMsRUFHVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFlLGVBQWUsRUFBRSxVQUFVLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNyRixPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDakQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLGdCQUFnQixFQUFFLG1CQUFtQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFFdkcsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBRXZELE9BQU8sRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDakYsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sK0JBQStCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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MUIsVUFBVSxFQUFFO0FBQUU7QUFBc0MseURBQXFDO0FBQzVFO0FBQWEsSUFBMUIsVUFBVSxFQUFFO0FBQUU7QUFBc0MsdURBQUE7QUFHdkI7QUFBYSxJQUExQyxVQUFVLEVBQUU7QUFBRSxJQUFBLFlBQVksRUFBRTtBQUFFO0FBRTVCLHdEQUZtRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3NCQXRCOUQsa0JBQ0QsSUFBSSxFQUFFO1NBQ0osS0FBSyxFQUFFLGtCQUFrQixzQkFDekIsbUNBQW1DO0NBQUUsWUFBWSxzQkFDakQsaUNBQWlDLEVBQUU7a0JBQXFCLHNCQUN4RDtxQkFBZ0MsRUFBRSxvQkFBb0I7Y0FDdEQsOEJBQThCLEVBQUUsZUFBZTtJQUNoRCxjQUNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkFlRDtBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHsgRGlyZWN0aW9uLCBEaXJlY3Rpb25hbGl0eSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9iaWRpJztcbmltcG9ydCB7XG4gIEFmdGVyQ29udGVudEluaXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBDb250ZW50Q2hpbGRyZW4sXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPcHRpb25hbCxcbiAgUXVlcnlMaXN0LFxuICBTaW1wbGVDaGFuZ2VzLFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOekNvbmZpZ0tleSwgTnpDb25maWdTZXJ2aWNlLCBXaXRoQ29uZmlnIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL2NvbmZpZyc7XG5pbXBvcnQgeyB3YXJuIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL2xvZ2dlcic7XG5pbXBvcnQgeyBncmlkUmVzcG9uc2l2ZU1hcCwgTnpCcmVha3BvaW50RW51bSwgTnpCcmVha3BvaW50U2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9zZXJ2aWNlcyc7XG5pbXBvcnQgeyBCb29sZWFuSW5wdXQgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuaW1wb3J0IHsgSW5wdXRCb29sZWFuIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3V0aWwnO1xuXG5pbXBvcnQgeyBtZXJnZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgYXVkaXRUaW1lLCBzdGFydFdpdGgsIHN3aXRjaE1hcCwgdGFrZVVudGlsLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBOekRlc2NyaXB0aW9uc0l0ZW1Db21wb25lbnQgfSBmcm9tICcuL2Rlc2NyaXB0aW9ucy1pdGVtLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOekRlc2NyaXB0aW9uc0l0ZW1SZW5kZXJQcm9wcywgTnpEZXNjcmlwdGlvbnNMYXlvdXQsIE56RGVzY3JpcHRpb25zU2l6ZSB9IGZyb20gJy4vdHlwaW5ncyc7XG5cbmNvbnN0IE5aX0NPTkZJR19NT0RVTEVfTkFNRTogTnpDb25maWdLZXkgPSAnZGVzY3JpcHRpb25zJztcbmNvbnN0IGRlZmF1bHRDb2x1bW5NYXA6IHsgW2tleSBpbiBOekJyZWFrcG9pbnRFbnVtXTogbnVtYmVyIH0gPSB7XG4gIHh4bDogMyxcbiAgeGw6IDMsXG4gIGxnOiAzLFxuICBtZDogMyxcbiAgc206IDIsXG4gIHhzOiAxXG59O1xuXG5AQ29tcG9uZW50KHtcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIHNlbGVjdG9yOiAnbnotZGVzY3JpcHRpb25zJyxcbiAgZXhwb3J0QXM6ICduekRlc2NyaXB0aW9ucycsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgKm5nSWY9XCJuelRpdGxlIHx8IG56RXh0cmFcIiBjbGFzcz1cImFudC1kZXNjcmlwdGlvbnMtaGVhZGVyXCI+XG4gICAgICA8ZGl2ICpuZ0lmPVwibnpUaXRsZVwiIGNsYXNzPVwiYW50LWRlc2NyaXB0aW9ucy10aXRsZVwiPlxuICAgICAgICA8bmctY29udGFpbmVyICpuelN0cmluZ1RlbXBsYXRlT3V0bGV0PVwibnpUaXRsZVwiPnt7IG56VGl0bGUgfX08L25nLWNvbnRhaW5lcj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiAqbmdJZj1cIm56RXh0cmFcIiBjbGFzcz1cImFudC1kZXNjcmlwdGlvbnMtZXh0cmFcIj5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbnpTdHJpbmdUZW1wbGF0ZU91dGxldD1cIm56RXh0cmFcIj57eyBuekV4dHJhIH19PC9uZy1jb250YWluZXI+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiYW50LWRlc2NyaXB0aW9ucy12aWV3XCI+XG4gICAgICA8dGFibGU+XG4gICAgICAgIDx0Ym9keT5cbiAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwibnpMYXlvdXQgPT09ICdob3Jpem9udGFsJ1wiPlxuICAgICAgICAgICAgPHRyIGNsYXNzPVwiYW50LWRlc2NyaXB0aW9ucy1yb3dcIiAqbmdGb3I9XCJsZXQgcm93IG9mIGl0ZW1NYXRyaXg7IGxldCBpID0gaW5kZXhcIj5cbiAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgaXRlbSBvZiByb3c7IGxldCBpc0xhc3QgPSBsYXN0XCI+XG4gICAgICAgICAgICAgICAgPCEtLSBIb3Jpem9udGFsICYgTk9UIEJvcmRlcmVkIC0tPlxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhbnpCb3JkZXJlZFwiPlxuICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwiYW50LWRlc2NyaXB0aW9ucy1pdGVtXCIgW2NvbFNwYW5dPVwiaXRlbS5zcGFuXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhbnQtZGVzY3JpcHRpb25zLWl0ZW0tY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJhbnQtZGVzY3JpcHRpb25zLWl0ZW0tbGFiZWxcIiBbY2xhc3MuYW50LWRlc2NyaXB0aW9ucy1pdGVtLW5vLWNvbG9uXT1cIiFuekNvbG9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuelN0cmluZ1RlbXBsYXRlT3V0bGV0PVwiaXRlbS50aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBpdGVtLnRpdGxlIH19XG4gICAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJhbnQtZGVzY3JpcHRpb25zLWl0ZW0tY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cIml0ZW0uY29udGVudFwiPjwvbmctdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgPCEtLSBIb3Jpem9udGFsICYgQm9yZGVyZWQgLS0+XG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIm56Qm9yZGVyZWRcIj5cbiAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cImFudC1kZXNjcmlwdGlvbnMtaXRlbS1sYWJlbFwiICpuelN0cmluZ1RlbXBsYXRlT3V0bGV0PVwiaXRlbS50aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuelN0cmluZ1RlbXBsYXRlT3V0bGV0PVwiaXRlbS50aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgIHt7IGl0ZW0udGl0bGUgfX1cbiAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwiYW50LWRlc2NyaXB0aW9ucy1pdGVtLWNvbnRlbnRcIiBbY29sU3Bhbl09XCJpdGVtLnNwYW4gKiAyIC0gMVwiPlxuICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwiaXRlbS5jb250ZW50XCI+PC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJuekxheW91dCA9PT0gJ3ZlcnRpY2FsJ1wiPlxuICAgICAgICAgICAgPCEtLSBWZXJ0aWNhbCAmIE5PVCBCb3JkZXJlZCAtLT5cbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhbnpCb3JkZXJlZFwiPlxuICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCByb3cgb2YgaXRlbU1hdHJpeDsgbGV0IGkgPSBpbmRleFwiPlxuICAgICAgICAgICAgICAgIDx0ciBjbGFzcz1cImFudC1kZXNjcmlwdGlvbnMtcm93XCI+XG4gICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBpdGVtIG9mIHJvdzsgbGV0IGlzTGFzdCA9IGxhc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwiYW50LWRlc2NyaXB0aW9ucy1pdGVtXCIgW2NvbFNwYW5dPVwiaXRlbS5zcGFuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFudC1kZXNjcmlwdGlvbnMtaXRlbS1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYW50LWRlc2NyaXB0aW9ucy1pdGVtLWxhYmVsXCIgW2NsYXNzLmFudC1kZXNjcmlwdGlvbnMtaXRlbS1uby1jb2xvbl09XCIhbnpDb2xvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuelN0cmluZ1RlbXBsYXRlT3V0bGV0PVwiaXRlbS50aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IGl0ZW0udGl0bGUgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgIDx0ciBjbGFzcz1cImFudC1kZXNjcmlwdGlvbnMtcm93XCI+XG4gICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBpdGVtIG9mIHJvdzsgbGV0IGlzTGFzdCA9IGxhc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwiYW50LWRlc2NyaXB0aW9ucy1pdGVtXCIgW2NvbFNwYW5dPVwiaXRlbS5zcGFuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFudC1kZXNjcmlwdGlvbnMtaXRlbS1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYW50LWRlc2NyaXB0aW9ucy1pdGVtLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cIml0ZW0uY29udGVudFwiPjwvbmctdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgPCEtLSBWZXJ0aWNhbCAmIEJvcmRlcmVkIC0tPlxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIm56Qm9yZGVyZWRcIj5cbiAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgcm93IG9mIGl0ZW1NYXRyaXg7IGxldCBpID0gaW5kZXhcIj5cbiAgICAgICAgICAgICAgICA8dHIgY2xhc3M9XCJhbnQtZGVzY3JpcHRpb25zLXJvd1wiPlxuICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgaXRlbSBvZiByb3c7IGxldCBpc0xhc3QgPSBsYXN0XCI+XG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cImFudC1kZXNjcmlwdGlvbnMtaXRlbS1sYWJlbFwiIFtjb2xTcGFuXT1cIml0ZW0uc3BhblwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm56U3RyaW5nVGVtcGxhdGVPdXRsZXQ9XCJpdGVtLnRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7eyBpdGVtLnRpdGxlIH19XG4gICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgIDx0ciBjbGFzcz1cImFudC1kZXNjcmlwdGlvbnMtcm93XCI+XG4gICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBpdGVtIG9mIHJvdzsgbGV0IGlzTGFzdCA9IGxhc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwiYW50LWRlc2NyaXB0aW9ucy1pdGVtLWNvbnRlbnRcIiBbY29sU3Bhbl09XCJpdGVtLnNwYW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwiaXRlbS5jb250ZW50XCI+PC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgIDwvdGJvZHk+XG4gICAgICA8L3RhYmxlPlxuICAgIDwvZGl2PlxuICBgLFxuICBob3N0OiB7XG4gICAgY2xhc3M6ICdhbnQtZGVzY3JpcHRpb25zJyxcbiAgICAnW2NsYXNzLmFudC1kZXNjcmlwdGlvbnMtYm9yZGVyZWRdJzogJ256Qm9yZGVyZWQnLFxuICAgICdbY2xhc3MuYW50LWRlc2NyaXB0aW9ucy1taWRkbGVdJzogJ256U2l6ZSA9PT0gXCJtaWRkbGVcIicsXG4gICAgJ1tjbGFzcy5hbnQtZGVzY3JpcHRpb25zLXNtYWxsXSc6ICduelNpemUgPT09IFwic21hbGxcIicsXG4gICAgJ1tjbGFzcy5hbnQtZGVzY3JpcHRpb25zLXJ0bF0nOiAnZGlyID09PSBcInJ0bFwiJ1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIE56RGVzY3JpcHRpb25zQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIEFmdGVyQ29udGVudEluaXQsIE9uSW5pdCB7XG4gIHJlYWRvbmx5IF9uek1vZHVsZU5hbWU6IE56Q29uZmlnS2V5ID0gTlpfQ09ORklHX01PRFVMRV9OQU1FO1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbnpCb3JkZXJlZDogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbnpDb2xvbjogQm9vbGVhbklucHV0O1xuXG4gIEBDb250ZW50Q2hpbGRyZW4oTnpEZXNjcmlwdGlvbnNJdGVtQ29tcG9uZW50KSBpdGVtcyE6IFF1ZXJ5TGlzdDxOekRlc2NyaXB0aW9uc0l0ZW1Db21wb25lbnQ+O1xuXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBAV2l0aENvbmZpZygpIG56Qm9yZGVyZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgbnpMYXlvdXQ6IE56RGVzY3JpcHRpb25zTGF5b3V0ID0gJ2hvcml6b250YWwnO1xuICBASW5wdXQoKSBAV2l0aENvbmZpZygpIG56Q29sdW1uOiBudW1iZXIgfCB7IFtrZXkgaW4gTnpCcmVha3BvaW50RW51bV06IG51bWJlciB9ID0gZGVmYXVsdENvbHVtbk1hcDtcbiAgQElucHV0KCkgQFdpdGhDb25maWcoKSBuelNpemU6IE56RGVzY3JpcHRpb25zU2l6ZSA9ICdkZWZhdWx0JztcbiAgQElucHV0KCkgbnpUaXRsZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4gPSAnJztcbiAgQElucHV0KCkgbnpFeHRyYT86IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBASW5wdXQoKSBAV2l0aENvbmZpZygpIEBJbnB1dEJvb2xlYW4oKSBuekNvbG9uOiBib29sZWFuID0gdHJ1ZTtcblxuICBpdGVtTWF0cml4OiBOekRlc2NyaXB0aW9uc0l0ZW1SZW5kZXJQcm9wc1tdW10gPSBbXTtcbiAgcmVhbENvbHVtbiA9IDM7XG4gIGRpcjogRGlyZWN0aW9uID0gJ2x0cic7XG5cbiAgcHJpdmF0ZSBicmVha3BvaW50OiBOekJyZWFrcG9pbnRFbnVtID0gTnpCcmVha3BvaW50RW51bS5tZDtcbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIG56Q29uZmlnU2VydmljZTogTnpDb25maWdTZXJ2aWNlLFxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcml2YXRlIGJyZWFrcG9pbnRTZXJ2aWNlOiBOekJyZWFrcG9pbnRTZXJ2aWNlLFxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgZGlyZWN0aW9uYWxpdHk6IERpcmVjdGlvbmFsaXR5XG4gICkge31cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5kaXIgPSB0aGlzLmRpcmVjdGlvbmFsaXR5LnZhbHVlO1xuICAgIHRoaXMuZGlyZWN0aW9uYWxpdHkuY2hhbmdlPy5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKChkaXJlY3Rpb246IERpcmVjdGlvbikgPT4ge1xuICAgICAgdGhpcy5kaXIgPSBkaXJlY3Rpb247XG4gICAgfSk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgaWYgKGNoYW5nZXMubnpDb2x1bW4pIHtcbiAgICAgIHRoaXMucHJlcGFyZU1hdHJpeCgpO1xuICAgIH1cbiAgfVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcbiAgICBjb25zdCBjb250ZW50Q2hhbmdlJCA9IHRoaXMuaXRlbXMuY2hhbmdlcy5waXBlKHN0YXJ0V2l0aCh0aGlzLml0ZW1zKSwgdGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKTtcblxuICAgIG1lcmdlKFxuICAgICAgY29udGVudENoYW5nZSQsXG4gICAgICBjb250ZW50Q2hhbmdlJC5waXBlKHN3aXRjaE1hcCgoKSA9PiBtZXJnZSguLi50aGlzLml0ZW1zLm1hcChpID0+IGkuaW5wdXRDaGFuZ2UkKSkucGlwZShhdWRpdFRpbWUoMTYpKSkpLFxuICAgICAgdGhpcy5icmVha3BvaW50U2VydmljZS5zdWJzY3JpYmUoZ3JpZFJlc3BvbnNpdmVNYXApLnBpcGUodGFwKGJwID0+ICh0aGlzLmJyZWFrcG9pbnQgPSBicCkpKVxuICAgIClcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICB0aGlzLnByZXBhcmVNYXRyaXgoKTtcbiAgICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gICAgICB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcmVwYXJlIHRoZSByZW5kZXIgbWF0cml4IGFjY29yZGluZyB0byBkZXNjcmlwdGlvbiBpdGVtcycgc3BhbnMuXG4gICAqL1xuICBwcml2YXRlIHByZXBhcmVNYXRyaXgoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLml0ZW1zKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IGN1cnJlbnRSb3c6IE56RGVzY3JpcHRpb25zSXRlbVJlbmRlclByb3BzW10gPSBbXTtcbiAgICBsZXQgd2lkdGggPSAwO1xuXG4gICAgY29uc3QgY29sdW1uID0gKHRoaXMucmVhbENvbHVtbiA9IHRoaXMuZ2V0Q29sdW1uKCkpO1xuICAgIGNvbnN0IGl0ZW1zID0gdGhpcy5pdGVtcy50b0FycmF5KCk7XG4gICAgY29uc3QgbGVuZ3RoID0gaXRlbXMubGVuZ3RoO1xuICAgIGNvbnN0IG1hdHJpeDogTnpEZXNjcmlwdGlvbnNJdGVtUmVuZGVyUHJvcHNbXVtdID0gW107XG4gICAgY29uc3QgZmx1c2hSb3cgPSAoKSA9PiB7XG4gICAgICBtYXRyaXgucHVzaChjdXJyZW50Um93KTtcbiAgICAgIGN1cnJlbnRSb3cgPSBbXTtcbiAgICAgIHdpZHRoID0gMDtcbiAgICB9O1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgaXRlbSA9IGl0ZW1zW2ldO1xuICAgICAgY29uc3QgeyBuelRpdGxlOiB0aXRsZSwgY29udGVudCwgbnpTcGFuOiBzcGFuIH0gPSBpdGVtO1xuXG4gICAgICB3aWR0aCArPSBzcGFuO1xuXG4gICAgICAvLyBJZiB0aGUgbGFzdCBpdGVtIG1ha2UgdGhlIHJvdydzIGxlbmd0aCBleGNlZWRzIGBuekNvbHVtbmAsIHRoZSBsYXN0XG4gICAgICAvLyBpdGVtIHNob3VsZCB0YWtlIGFsbCB0aGUgc3BhY2UgbGVmdC4gVGhpcyBsb2dpYyBpcyBpbXBsZW1lbnRlZCBpbiB0aGUgdGVtcGxhdGUuXG4gICAgICAvLyBXYXJuIHVzZXIgYWJvdXQgdGhhdC5cbiAgICAgIGlmICh3aWR0aCA+PSBjb2x1bW4pIHtcbiAgICAgICAgaWYgKHdpZHRoID4gY29sdW1uKSB7XG4gICAgICAgICAgd2FybihgXCJuekNvbHVtblwiIGlzICR7Y29sdW1ufSBidXQgd2UgaGF2ZSByb3cgbGVuZ3RoICR7d2lkdGh9YCk7XG4gICAgICAgIH1cbiAgICAgICAgY3VycmVudFJvdy5wdXNoKHsgdGl0bGUsIGNvbnRlbnQsIHNwYW46IGNvbHVtbiAtICh3aWR0aCAtIHNwYW4pIH0pO1xuICAgICAgICBmbHVzaFJvdygpO1xuICAgICAgfSBlbHNlIGlmIChpID09PSBsZW5ndGggLSAxKSB7XG4gICAgICAgIGN1cnJlbnRSb3cucHVzaCh7IHRpdGxlLCBjb250ZW50LCBzcGFuOiBjb2x1bW4gLSAod2lkdGggLSBzcGFuKSB9KTtcbiAgICAgICAgZmx1c2hSb3coKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGN1cnJlbnRSb3cucHVzaCh7IHRpdGxlLCBjb250ZW50LCBzcGFuIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuaXRlbU1hdHJpeCA9IG1hdHJpeDtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0Q29sdW1uKCk6IG51bWJlciB7XG4gICAgaWYgKHR5cGVvZiB0aGlzLm56Q29sdW1uICE9PSAnbnVtYmVyJykge1xuICAgICAgcmV0dXJuIHRoaXMubnpDb2x1bW5bdGhpcy5icmVha3BvaW50XTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5uekNvbHVtbjtcbiAgfVxufVxuIl19