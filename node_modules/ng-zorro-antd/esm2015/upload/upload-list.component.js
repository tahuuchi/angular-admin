/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { animate, style, transition, trigger } from '@angular/animations';
import { Platform } from '@angular/cdk/platform';
import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Inject, Input, NgZone, ViewEncapsulation } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/cdk/platform';
import * as ɵngcc2 from '@angular/common';
import * as ɵngcc3 from 'ng-zorro-antd/tooltip';
import * as ɵngcc4 from 'ng-zorro-antd/icon';
import * as ɵngcc5 from 'ng-zorro-antd/core/transition-patch';
import * as ɵngcc6 from 'ng-zorro-antd/button';
import * as ɵngcc7 from 'ng-zorro-antd/progress';

function NzUploadListComponent_div_0_ng_template_2_div_1_ng_template_1_Template(rf, ctx) { }
const _c0 = function (a0) { return { $implicit: a0 }; };
function NzUploadListComponent_div_0_ng_template_2_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 18);
    ɵngcc0.ɵɵtemplate(1, NzUploadListComponent_div_0_ng_template_2_div_1_ng_template_1_Template, 0, 0, "ng-template", 19);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const file_r1 = ɵngcc0.ɵɵnextContext(2).$implicit;
    const _r4 = ɵngcc0.ɵɵreference(5);
    ɵngcc0.ɵɵclassProp("ant-upload-list-item-file", !file_r1.isUploading);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", _r4)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction1(4, _c0, file_r1));
} }
function NzUploadListComponent_div_0_ng_template_2_a_2_img_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "img", 22);
} if (rf & 2) {
    const file_r1 = ɵngcc0.ɵɵnextContext(3).$implicit;
    ɵngcc0.ɵɵproperty("src", file_r1.thumbUrl || file_r1.url, ɵngcc0.ɵɵsanitizeUrl);
    ɵngcc0.ɵɵattribute("alt", file_r1.name);
} }
function NzUploadListComponent_div_0_ng_template_2_a_2_Template(rf, ctx) { if (rf & 1) {
    const _r29 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "a", 20);
    ɵngcc0.ɵɵlistener("click", function NzUploadListComponent_div_0_ng_template_2_a_2_Template_a_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r29); const file_r1 = ɵngcc0.ɵɵnextContext(2).$implicit; const ctx_r27 = ɵngcc0.ɵɵnextContext(); return ctx_r27.handlePreview(file_r1, $event); });
    ɵngcc0.ɵɵtemplate(1, NzUploadListComponent_div_0_ng_template_2_a_2_img_1_Template, 1, 2, "img", 21);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    ɵngcc0.ɵɵnextContext();
    const _r21 = ɵngcc0.ɵɵreference(5);
    const file_r1 = ɵngcc0.ɵɵnextContext().$implicit;
    ɵngcc0.ɵɵclassProp("ant-upload-list-item-file", !file_r1.isImageUrl);
    ɵngcc0.ɵɵproperty("href", file_r1.url || file_r1.thumbUrl, ɵngcc0.ɵɵsanitizeUrl);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", file_r1.isImageUrl)("ngIfElse", _r21);
} }
function NzUploadListComponent_div_0_ng_template_2_div_3_ng_template_1_Template(rf, ctx) { }
function NzUploadListComponent_div_0_ng_template_2_div_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 23);
    ɵngcc0.ɵɵtemplate(1, NzUploadListComponent_div_0_ng_template_2_div_3_ng_template_1_Template, 0, 0, "ng-template", 19);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const file_r1 = ɵngcc0.ɵɵnextContext(2).$implicit;
    const _r4 = ɵngcc0.ɵɵreference(5);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", _r4)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction1(2, _c0, file_r1));
} }
function NzUploadListComponent_div_0_ng_template_2_ng_template_4_ng_template_0_Template(rf, ctx) { }
function NzUploadListComponent_div_0_ng_template_2_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, NzUploadListComponent_div_0_ng_template_2_ng_template_4_ng_template_0_Template, 0, 0, "ng-template", 19);
} if (rf & 2) {
    const file_r1 = ɵngcc0.ɵɵnextContext(2).$implicit;
    const _r4 = ɵngcc0.ɵɵreference(5);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", _r4)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction1(2, _c0, file_r1));
} }
function NzUploadListComponent_div_0_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0, 13);
    ɵngcc0.ɵɵtemplate(1, NzUploadListComponent_div_0_ng_template_2_div_1_Template, 2, 6, "div", 14);
    ɵngcc0.ɵɵtemplate(2, NzUploadListComponent_div_0_ng_template_2_a_2_Template, 2, 5, "a", 15);
    ɵngcc0.ɵɵtemplate(3, NzUploadListComponent_div_0_ng_template_2_div_3_Template, 2, 4, "div", 16);
    ɵngcc0.ɵɵelementContainerEnd();
    ɵngcc0.ɵɵtemplate(4, NzUploadListComponent_div_0_ng_template_2_ng_template_4_Template, 1, 4, "ng-template", null, 17, ɵngcc0.ɵɵtemplateRefExtractor);
} if (rf & 2) {
    const file_r1 = ɵngcc0.ɵɵnextContext().$implicit;
    ɵngcc0.ɵɵproperty("ngSwitch", file_r1.iconType);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngSwitchCase", "uploading");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngSwitchCase", "thumbnail");
} }
function NzUploadListComponent_div_0_ng_template_4_ng_container_0_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelement(1, "i", 29);
    ɵngcc0.ɵɵelementContainerEnd();
} }
function NzUploadListComponent_div_0_ng_template_4_ng_container_0_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, NzUploadListComponent_div_0_ng_template_4_ng_container_0_ng_container_2_ng_container_1_Template, 2, 0, "ng-container", 24);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const file_r36 = ɵngcc0.ɵɵnextContext(2).$implicit;
    const _r40 = ɵngcc0.ɵɵreference(4);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", file_r36.isUploading)("ngIfElse", _r40);
} }
function NzUploadListComponent_div_0_ng_template_4_ng_container_0_ng_container_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r47 = ɵngcc0.ɵɵnextContext(5);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", ctx_r47.locale.uploading, " ");
} }
function NzUploadListComponent_div_0_ng_template_4_ng_container_0_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, NzUploadListComponent_div_0_ng_template_4_ng_container_0_ng_container_3_ng_container_1_Template, 2, 1, "ng-container", 24);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const file_r36 = ɵngcc0.ɵɵnextContext(2).$implicit;
    const _r40 = ɵngcc0.ɵɵreference(4);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", file_r36.isUploading)("ngIfElse", _r40);
} }
function NzUploadListComponent_div_0_ng_template_4_ng_container_0_i_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "i", 30);
} if (rf & 2) {
    const file_r36 = ɵngcc0.ɵɵnextContext(2).$implicit;
    ɵngcc0.ɵɵproperty("nzType", file_r36.isUploading ? "loading" : "paper-clip");
} }
function NzUploadListComponent_div_0_ng_template_4_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelementContainerStart(1, 13);
    ɵngcc0.ɵɵtemplate(2, NzUploadListComponent_div_0_ng_template_4_ng_container_0_ng_container_2_Template, 2, 2, "ng-container", 27);
    ɵngcc0.ɵɵtemplate(3, NzUploadListComponent_div_0_ng_template_4_ng_container_0_ng_container_3_Template, 2, 2, "ng-container", 27);
    ɵngcc0.ɵɵtemplate(4, NzUploadListComponent_div_0_ng_template_4_ng_container_0_i_4_Template, 1, 1, "i", 28);
    ɵngcc0.ɵɵelementContainerEnd();
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r37 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngSwitch", ctx_r37.listType);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngSwitchCase", "picture");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngSwitchCase", "picture-card");
} }
function NzUploadListComponent_div_0_ng_template_4_ng_template_1_Template(rf, ctx) { }
function NzUploadListComponent_div_0_ng_template_4_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "i", 31);
} if (rf & 2) {
    const file_r36 = ɵngcc0.ɵɵnextContext().$implicit;
    ɵngcc0.ɵɵproperty("nzType", file_r36.isImageUrl ? "picture" : "file");
} }
function NzUploadListComponent_div_0_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, NzUploadListComponent_div_0_ng_template_4_ng_container_0_Template, 5, 3, "ng-container", 24);
    ɵngcc0.ɵɵtemplate(1, NzUploadListComponent_div_0_ng_template_4_ng_template_1_Template, 0, 0, "ng-template", 19, 25, ɵngcc0.ɵɵtemplateRefExtractor);
    ɵngcc0.ɵɵtemplate(3, NzUploadListComponent_div_0_ng_template_4_ng_template_3_Template, 1, 1, "ng-template", null, 26, ɵngcc0.ɵɵtemplateRefExtractor);
} if (rf & 2) {
    const file_r36 = ctx.$implicit;
    const _r38 = ɵngcc0.ɵɵreference(2);
    const ctx_r5 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r5.iconRender)("ngIfElse", _r38);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r5.iconRender)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction1(4, _c0, file_r36));
} }
function NzUploadListComponent_div_0_ng_template_6_button_0_Template(rf, ctx) { if (rf & 1) {
    const _r54 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 33);
    ɵngcc0.ɵɵlistener("click", function NzUploadListComponent_div_0_ng_template_6_button_0_Template_button_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r54); const file_r1 = ɵngcc0.ɵɵnextContext(2).$implicit; const ctx_r52 = ɵngcc0.ɵɵnextContext(); return ctx_r52.handleRemove(file_r1, $event); });
    ɵngcc0.ɵɵelement(1, "i", 34);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r51 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵattribute("title", ctx_r51.locale.removeFile);
} }
function NzUploadListComponent_div_0_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, NzUploadListComponent_div_0_ng_template_6_button_0_Template, 2, 1, "button", 32);
} if (rf & 2) {
    const ctx_r7 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r7.icons.showRemoveIcon);
} }
function NzUploadListComponent_div_0_ng_template_8_button_0_Template(rf, ctx) { if (rf & 1) {
    const _r58 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 33);
    ɵngcc0.ɵɵlistener("click", function NzUploadListComponent_div_0_ng_template_8_button_0_Template_button_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r58); const file_r1 = ɵngcc0.ɵɵnextContext(2).$implicit; const ctx_r56 = ɵngcc0.ɵɵnextContext(); return ctx_r56.handleDownload(file_r1); });
    ɵngcc0.ɵɵelement(1, "i", 35);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r55 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵattribute("title", ctx_r55.locale.downloadFile);
} }
function NzUploadListComponent_div_0_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, NzUploadListComponent_div_0_ng_template_8_button_0_Template, 2, 1, "button", 32);
} if (rf & 2) {
    const file_r1 = ɵngcc0.ɵɵnextContext().$implicit;
    ɵngcc0.ɵɵproperty("ngIf", file_r1.showDownload);
} }
function NzUploadListComponent_div_0_ng_template_10_span_0_ng_template_1_Template(rf, ctx) { }
function NzUploadListComponent_div_0_ng_template_10_span_0_ng_template_2_Template(rf, ctx) { }
function NzUploadListComponent_div_0_ng_template_10_span_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span");
    ɵngcc0.ɵɵtemplate(1, NzUploadListComponent_div_0_ng_template_10_span_0_ng_template_1_Template, 0, 0, "ng-template", 10);
    ɵngcc0.ɵɵtemplate(2, NzUploadListComponent_div_0_ng_template_10_span_0_ng_template_2_Template, 0, 0, "ng-template", 10);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    ɵngcc0.ɵɵnextContext(2);
    const _r8 = ɵngcc0.ɵɵreference(9);
    const _r6 = ɵngcc0.ɵɵreference(7);
    const ctx_r60 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassMapInterpolate1("ant-upload-list-item-card-actions ", ctx_r60.listType === "picture" ? "picture" : "", "");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", _r8);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", _r6);
} }
function NzUploadListComponent_div_0_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, NzUploadListComponent_div_0_ng_template_10_span_0_Template, 3, 5, "span", 36);
} if (rf & 2) {
    const ctx_r11 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r11.listType !== "picture-card");
} }
function NzUploadListComponent_div_0_ng_template_12_a_0_Template(rf, ctx) { if (rf & 1) {
    const _r68 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "a", 39);
    ɵngcc0.ɵɵlistener("click", function NzUploadListComponent_div_0_ng_template_12_a_0_Template_a_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r68); const file_r1 = ɵngcc0.ɵɵnextContext(2).$implicit; const ctx_r66 = ɵngcc0.ɵɵnextContext(); return ctx_r66.handlePreview(file_r1, $event); });
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const file_r1 = ɵngcc0.ɵɵnextContext(2).$implicit;
    ɵngcc0.ɵɵproperty("href", file_r1.url, ɵngcc0.ɵɵsanitizeUrl);
    ɵngcc0.ɵɵattribute("title", file_r1.name)("download", file_r1.linkProps && file_r1.linkProps.download);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", file_r1.name, " ");
} }
function NzUploadListComponent_div_0_ng_template_12_span_1_Template(rf, ctx) { if (rf & 1) {
    const _r72 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "span", 40);
    ɵngcc0.ɵɵlistener("click", function NzUploadListComponent_div_0_ng_template_12_span_1_Template_span_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r72); const file_r1 = ɵngcc0.ɵɵnextContext(2).$implicit; const ctx_r70 = ɵngcc0.ɵɵnextContext(); return ctx_r70.handlePreview(file_r1, $event); });
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const file_r1 = ɵngcc0.ɵɵnextContext(2).$implicit;
    ɵngcc0.ɵɵattribute("title", file_r1.name);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", file_r1.name, " ");
} }
function NzUploadListComponent_div_0_ng_template_12_ng_template_2_Template(rf, ctx) { }
function NzUploadListComponent_div_0_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, NzUploadListComponent_div_0_ng_template_12_a_0_Template, 2, 4, "a", 37);
    ɵngcc0.ɵɵtemplate(1, NzUploadListComponent_div_0_ng_template_12_span_1_Template, 2, 2, "span", 38);
    ɵngcc0.ɵɵtemplate(2, NzUploadListComponent_div_0_ng_template_12_ng_template_2_Template, 0, 0, "ng-template", 10);
} if (rf & 2) {
    const file_r1 = ɵngcc0.ɵɵnextContext().$implicit;
    const _r10 = ɵngcc0.ɵɵreference(11);
    ɵngcc0.ɵɵproperty("ngIf", file_r1.url);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !file_r1.url);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", _r10);
} }
function NzUploadListComponent_div_0_ng_template_16_Template(rf, ctx) { }
function NzUploadListComponent_div_0_ng_template_17_Template(rf, ctx) { }
const _c1 = function () { return { opacity: 0.5, "pointer-events": "none" }; };
function NzUploadListComponent_div_0_span_18_a_1_Template(rf, ctx) { if (rf & 1) {
    const _r80 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "a", 44);
    ɵngcc0.ɵɵlistener("click", function NzUploadListComponent_div_0_span_18_a_1_Template_a_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r80); const file_r1 = ɵngcc0.ɵɵnextContext(2).$implicit; const ctx_r78 = ɵngcc0.ɵɵnextContext(); return ctx_r78.handlePreview(file_r1, $event); });
    ɵngcc0.ɵɵelement(1, "i", 45);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const file_r1 = ɵngcc0.ɵɵnextContext(2).$implicit;
    const ctx_r75 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("href", file_r1.url || file_r1.thumbUrl, ɵngcc0.ɵɵsanitizeUrl)("ngStyle", !(file_r1.url || file_r1.thumbUrl) ? ɵngcc0.ɵɵpureFunction0(3, _c1) : null);
    ɵngcc0.ɵɵattribute("title", ctx_r75.locale.previewFile);
} }
function NzUploadListComponent_div_0_span_18_ng_container_2_ng_template_1_Template(rf, ctx) { }
function NzUploadListComponent_div_0_span_18_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, NzUploadListComponent_div_0_span_18_ng_container_2_ng_template_1_Template, 0, 0, "ng-template", 10);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    ɵngcc0.ɵɵnextContext(2);
    const _r8 = ɵngcc0.ɵɵreference(9);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", _r8);
} }
function NzUploadListComponent_div_0_span_18_ng_template_3_Template(rf, ctx) { }
function NzUploadListComponent_div_0_span_18_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span", 41);
    ɵngcc0.ɵɵtemplate(1, NzUploadListComponent_div_0_span_18_a_1_Template, 2, 4, "a", 42);
    ɵngcc0.ɵɵtemplate(2, NzUploadListComponent_div_0_span_18_ng_container_2_Template, 2, 1, "ng-container", 43);
    ɵngcc0.ɵɵtemplate(3, NzUploadListComponent_div_0_span_18_ng_template_3_Template, 0, 0, "ng-template", 10);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const file_r1 = ɵngcc0.ɵɵnextContext().$implicit;
    const _r6 = ɵngcc0.ɵɵreference(7);
    const ctx_r16 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r16.icons.showPreviewIcon);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", file_r1.status === "done");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", _r6);
} }
function NzUploadListComponent_div_0_div_19_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 46);
    ɵngcc0.ɵɵelement(1, "nz-progress", 47);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const file_r1 = ɵngcc0.ɵɵnextContext().$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("nzPercent", file_r1.percent)("nzShowInfo", false)("nzStrokeWidth", 2);
} }
function NzUploadListComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div");
    ɵngcc0.ɵɵelementStart(1, "div", 1);
    ɵngcc0.ɵɵtemplate(2, NzUploadListComponent_div_0_ng_template_2_Template, 6, 3, "ng-template", null, 2, ɵngcc0.ɵɵtemplateRefExtractor);
    ɵngcc0.ɵɵtemplate(4, NzUploadListComponent_div_0_ng_template_4_Template, 5, 6, "ng-template", null, 3, ɵngcc0.ɵɵtemplateRefExtractor);
    ɵngcc0.ɵɵtemplate(6, NzUploadListComponent_div_0_ng_template_6_Template, 1, 1, "ng-template", null, 4, ɵngcc0.ɵɵtemplateRefExtractor);
    ɵngcc0.ɵɵtemplate(8, NzUploadListComponent_div_0_ng_template_8_Template, 1, 1, "ng-template", null, 5, ɵngcc0.ɵɵtemplateRefExtractor);
    ɵngcc0.ɵɵtemplate(10, NzUploadListComponent_div_0_ng_template_10_Template, 1, 1, "ng-template", null, 6, ɵngcc0.ɵɵtemplateRefExtractor);
    ɵngcc0.ɵɵtemplate(12, NzUploadListComponent_div_0_ng_template_12_Template, 3, 3, "ng-template", null, 7, ɵngcc0.ɵɵtemplateRefExtractor);
    ɵngcc0.ɵɵelementStart(14, "div", 8);
    ɵngcc0.ɵɵelementStart(15, "span", 9);
    ɵngcc0.ɵɵtemplate(16, NzUploadListComponent_div_0_ng_template_16_Template, 0, 0, "ng-template", 10);
    ɵngcc0.ɵɵtemplate(17, NzUploadListComponent_div_0_ng_template_17_Template, 0, 0, "ng-template", 10);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(18, NzUploadListComponent_div_0_span_18_Template, 4, 3, "span", 11);
    ɵngcc0.ɵɵtemplate(19, NzUploadListComponent_div_0_div_19_Template, 2, 3, "div", 12);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const file_r1 = ctx.$implicit;
    const _r2 = ɵngcc0.ɵɵreference(3);
    const _r12 = ɵngcc0.ɵɵreference(13);
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassMapInterpolate1("ant-upload-list-", ctx_r0.listType, "-container");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassMapInterpolate2("ant-upload-list-item ant-upload-list-item-", file_r1.status, " ant-upload-list-item-list-type-", ctx_r0.listType, "");
    ɵngcc0.ɵɵproperty("@itemState", undefined)("nzTooltipTitle", file_r1.status === "error" ? file_r1.message : null);
    ɵngcc0.ɵɵattribute("data-key", file_r1.key);
    ɵngcc0.ɵɵadvance(15);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", _r2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", _r12);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.listType === "picture-card" && !file_r1.isUploading);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", file_r1.isUploading);
} }
const isImageFileType = (type) => !!type && type.indexOf('image/') === 0;
const ɵ0 = isImageFileType;
const MEASURE_SIZE = 200;
export class NzUploadListComponent {
    // #endregion
    constructor(cdr, doc, ngZone, platform, elementRef) {
        this.cdr = cdr;
        this.doc = doc;
        this.ngZone = ngZone;
        this.platform = platform;
        this.elementRef = elementRef;
        this.list = [];
        this.locale = {};
        this.iconRender = null;
        this.dir = 'ltr';
        // TODO: move to host after View Engine deprecation
        this.elementRef.nativeElement.classList.add('ant-upload-list');
    }
    get showPic() {
        return this.listType === 'picture' || this.listType === 'picture-card';
    }
    set items(list) {
        this.list = list;
    }
    genErr(file) {
        if (file.response && typeof file.response === 'string') {
            return file.response;
        }
        return (file.error && file.error.statusText) || this.locale.uploadError;
    }
    extname(url) {
        const temp = url.split('/');
        const filename = temp[temp.length - 1];
        const filenameWithoutSuffix = filename.split(/#|\?/)[0];
        return (/\.[^./\\]*$/.exec(filenameWithoutSuffix) || [''])[0];
    }
    isImageUrl(file) {
        if (isImageFileType(file.type)) {
            return true;
        }
        const url = (file.thumbUrl || file.url || '');
        if (!url) {
            return false;
        }
        const extension = this.extname(url);
        if (/^data:image\//.test(url) || /(webp|svg|png|gif|jpg|jpeg|jfif|bmp|dpg)$/i.test(extension)) {
            return true;
        }
        else if (/^data:/.test(url)) {
            // other file types of base64
            return false;
        }
        else if (extension) {
            // other file types which have extension
            return false;
        }
        return true;
    }
    getIconType(file) {
        if (!this.showPic) {
            return '';
        }
        if (file.isUploading || (!file.thumbUrl && !file.url)) {
            return 'uploading';
        }
        else {
            return 'thumbnail';
        }
    }
    previewImage(file) {
        return new Promise(resolve => {
            if (!isImageFileType(file.type) || !this.platform.isBrowser) {
                resolve('');
                return;
            }
            this.ngZone.runOutsideAngular(() => {
                const canvas = this.doc.createElement('canvas');
                canvas.width = MEASURE_SIZE;
                canvas.height = MEASURE_SIZE;
                canvas.style.cssText = `position: fixed; left: 0; top: 0; width: ${MEASURE_SIZE}px; height: ${MEASURE_SIZE}px; z-index: 9999; display: none;`;
                this.doc.body.appendChild(canvas);
                const ctx = canvas.getContext('2d');
                const img = new Image();
                img.onload = () => {
                    const { width, height } = img;
                    let drawWidth = MEASURE_SIZE;
                    let drawHeight = MEASURE_SIZE;
                    let offsetX = 0;
                    let offsetY = 0;
                    if (width < height) {
                        drawHeight = height * (MEASURE_SIZE / width);
                        offsetY = -(drawHeight - drawWidth) / 2;
                    }
                    else {
                        drawWidth = width * (MEASURE_SIZE / height);
                        offsetX = -(drawWidth - drawHeight) / 2;
                    }
                    try {
                        ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
                    }
                    catch (_a) { }
                    const dataURL = canvas.toDataURL();
                    this.doc.body.removeChild(canvas);
                    resolve(dataURL);
                };
                img.src = window.URL.createObjectURL(file);
            });
        });
    }
    genThumb() {
        if (!this.platform.isBrowser) {
            return;
        }
        const win = window;
        if (!this.showPic || typeof document === 'undefined' || typeof win === 'undefined' || !win.FileReader || !win.File) {
            return;
        }
        this.list
            .filter(file => file.originFileObj instanceof File && file.thumbUrl === undefined)
            .forEach(file => {
            file.thumbUrl = '';
            (this.previewFile ? this.previewFile(file).toPromise() : this.previewImage(file.originFileObj)).then(dataUrl => {
                file.thumbUrl = dataUrl;
                this.detectChanges();
            });
        });
    }
    showDownload(file) {
        return !!(this.icons.showDownloadIcon && file.status === 'done');
    }
    fixData() {
        this.list.forEach(file => {
            file.isUploading = file.status === 'uploading';
            file.message = this.genErr(file);
            file.linkProps = typeof file.linkProps === 'string' ? JSON.parse(file.linkProps) : file.linkProps;
            file.isImageUrl = this.previewIsImage ? this.previewIsImage(file) : this.isImageUrl(file);
            file.iconType = this.getIconType(file);
            file.showDownload = this.showDownload(file);
        });
    }
    handlePreview(file, e) {
        if (!this.onPreview) {
            return;
        }
        e.preventDefault();
        return this.onPreview(file);
    }
    handleRemove(file, e) {
        e.preventDefault();
        if (this.onRemove) {
            this.onRemove(file);
        }
        return;
    }
    handleDownload(file) {
        if (typeof this.onDownload === 'function') {
            this.onDownload(file);
        }
        else if (file.url) {
            window.open(file.url);
        }
    }
    detectChanges() {
        this.fixData();
        this.cdr.detectChanges();
    }
    ngOnChanges() {
        this.fixData();
        this.genThumb();
    }
}
NzUploadListComponent.ɵfac = function NzUploadListComponent_Factory(t) { return new (t || NzUploadListComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(DOCUMENT), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.NgZone), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.Platform), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
NzUploadListComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzUploadListComponent, selectors: [["nz-upload-list"]], hostVars: 8, hostBindings: function NzUploadListComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("ant-upload-list-rtl", ctx.dir === "rtl")("ant-upload-list-text", ctx.listType === "text")("ant-upload-list-picture", ctx.listType === "picture")("ant-upload-list-picture-card", ctx.listType === "picture-card");
    } }, inputs: { locale: "locale", iconRender: "iconRender", dir: "dir", items: "items", listType: "listType", icons: "icons", onPreview: "onPreview", onRemove: "onRemove", onDownload: "onDownload", previewFile: "previewFile", previewIsImage: "previewIsImage" }, exportAs: ["nzUploadList"], features: [ɵngcc0.ɵɵNgOnChangesFeature], decls: 1, vars: 1, consts: [[3, "class", 4, "ngFor", "ngForOf"], ["nz-tooltip", "", 3, "nzTooltipTitle"], ["icon", ""], ["iconNode", ""], ["removeIcon", ""], ["downloadIcon", ""], ["downloadOrDelete", ""], ["preview", ""], [1, "ant-upload-list-item-info"], [1, "ant-upload-span"], [3, "ngTemplateOutlet"], ["class", "ant-upload-list-item-actions", 4, "ngIf"], ["class", "ant-upload-list-item-progress", 4, "ngIf"], [3, "ngSwitch"], ["class", "ant-upload-list-item-thumbnail", 3, "ant-upload-list-item-file", 4, "ngSwitchCase"], ["class", "ant-upload-list-item-thumbnail", "target", "_blank", "rel", "noopener noreferrer", 3, "ant-upload-list-item-file", "href", "click", 4, "ngSwitchCase"], ["class", "ant-upload-text-icon", 4, "ngSwitchDefault"], ["noImageThumbTpl", ""], [1, "ant-upload-list-item-thumbnail"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["target", "_blank", "rel", "noopener noreferrer", 1, "ant-upload-list-item-thumbnail", 3, "href", "click"], ["class", "ant-upload-list-item-image", 3, "src", 4, "ngIf", "ngIfElse"], [1, "ant-upload-list-item-image", 3, "src"], [1, "ant-upload-text-icon"], [4, "ngIf", "ngIfElse"], ["customIconRender", ""], ["iconNodeFileIcon", ""], [4, "ngSwitchCase"], ["nz-icon", "", 3, "nzType", 4, "ngSwitchDefault"], ["nz-icon", "", "nzType", "loading"], ["nz-icon", "", 3, "nzType"], ["nz-icon", "", "nzTheme", "twotone", 3, "nzType"], ["type", "button", "nz-button", "", "nzType", "text", "nzSize", "small", "class", "ant-upload-list-item-card-actions-btn", 3, "click", 4, "ngIf"], ["type", "button", "nz-button", "", "nzType", "text", "nzSize", "small", 1, "ant-upload-list-item-card-actions-btn", 3, "click"], ["nz-icon", "", "nzType", "delete"], ["nz-icon", "", "nzType", "download"], [3, "class", 4, "ngIf"], ["target", "_blank", "rel", "noopener noreferrer", "class", "ant-upload-list-item-name", 3, "href", "click", 4, "ngIf"], ["class", "ant-upload-list-item-name", 3, "click", 4, "ngIf"], ["target", "_blank", "rel", "noopener noreferrer", 1, "ant-upload-list-item-name", 3, "href", "click"], [1, "ant-upload-list-item-name", 3, "click"], [1, "ant-upload-list-item-actions"], ["target", "_blank", "rel", "noopener noreferrer", 3, "href", "ngStyle", "click", 4, "ngIf"], [4, "ngIf"], ["target", "_blank", "rel", "noopener noreferrer", 3, "href", "ngStyle", "click"], ["nz-icon", "", "nzType", "eye"], [1, "ant-upload-list-item-progress"], ["nzType", "line", 3, "nzPercent", "nzShowInfo", "nzStrokeWidth"]], template: function NzUploadListComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, NzUploadListComponent_div_0_Template, 20, 14, "div", 0);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngForOf", ctx.list);
    } }, directives: [ɵngcc2.NgForOf, ɵngcc3.NzTooltipDirective, ɵngcc2.NgTemplateOutlet, ɵngcc2.NgIf, ɵngcc2.NgSwitch, ɵngcc2.NgSwitchCase, ɵngcc2.NgSwitchDefault, ɵngcc4.NzIconDirective, ɵngcc5.ɵNzTransitionPatchDirective, ɵngcc6.NzButtonComponent, ɵngcc2.NgStyle, ɵngcc7.NzProgressComponent], encapsulation: 2, data: { animation: [
            trigger('itemState', [
                transition(':enter', [style({ height: '0', width: '0', opacity: 0 }), animate(150, style({ height: '*', width: '*', opacity: 1 }))]),
                transition(':leave', [animate(150, style({ height: '0', width: '0', opacity: 0 }))])
            ])
        ] }, changeDetection: 0 });
NzUploadListComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: NgZone },
    { type: Platform },
    { type: ElementRef }
];
NzUploadListComponent.propDecorators = {
    locale: [{ type: Input }],
    listType: [{ type: Input }],
    items: [{ type: Input }],
    icons: [{ type: Input }],
    onPreview: [{ type: Input }],
    onRemove: [{ type: Input }],
    onDownload: [{ type: Input }],
    previewFile: [{ type: Input }],
    previewIsImage: [{ type: Input }],
    iconRender: [{ type: Input }],
    dir: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzUploadListComponent, [{
        type: Component,
        args: [{
                selector: 'nz-upload-list',
                exportAs: 'nzUploadList',
                template: "<div *ngFor=\"let file of list\" class=\"ant-upload-list-{{ listType }}-container\">\n  <div\n    class=\"ant-upload-list-item ant-upload-list-item-{{\n      file.status\n    }} ant-upload-list-item-list-type-{{ listType }}\"\n    [attr.data-key]=\"file.key\"\n    @itemState\n    nz-tooltip\n    [nzTooltipTitle]=\"file.status === 'error' ? file.message : null\"\n  >\n    <ng-template #icon>\n      <ng-container [ngSwitch]=\"file.iconType\">\n        <div\n          *ngSwitchCase=\"'uploading'\"\n          class=\"ant-upload-list-item-thumbnail\"\n          [class.ant-upload-list-item-file]=\"!file.isUploading\"\n        >\n          <ng-template\n            [ngTemplateOutlet]=\"iconNode\"\n            [ngTemplateOutletContext]=\"{ $implicit: file }\"\n          ></ng-template>\n        </div>\n        <a\n          *ngSwitchCase=\"'thumbnail'\"\n          class=\"ant-upload-list-item-thumbnail\"\n          [class.ant-upload-list-item-file]=\"!file.isImageUrl\"\n          target=\"_blank\"\n          rel=\"noopener noreferrer\"\n          [href]=\"file.url || file.thumbUrl\"\n          (click)=\"handlePreview(file, $event)\"\n        >\n          <img\n            *ngIf=\"file.isImageUrl; else noImageThumbTpl\"\n            class=\"ant-upload-list-item-image\"\n            [src]=\"file.thumbUrl || file.url\"\n            [attr.alt]=\"file.name\"\n          />\n        </a>\n        <div *ngSwitchDefault class=\"ant-upload-text-icon\">\n          <ng-template\n            [ngTemplateOutlet]=\"iconNode\"\n            [ngTemplateOutletContext]=\"{ $implicit: file }\"\n          ></ng-template>\n        </div>\n      </ng-container>\n      <ng-template #noImageThumbTpl>\n        <ng-template\n          [ngTemplateOutlet]=\"iconNode\"\n          [ngTemplateOutletContext]=\"{ $implicit: file }\"\n        ></ng-template>\n      </ng-template>\n    </ng-template>\n    <ng-template #iconNode let-file>\n      <ng-container *ngIf=\"!iconRender; else customIconRender\">\n        <ng-container [ngSwitch]=\"listType\">\n          <ng-container *ngSwitchCase=\"'picture'\">\n            <ng-container *ngIf=\"file.isUploading; else iconNodeFileIcon\">\n              <i nz-icon nzType=\"loading\"></i>\n            </ng-container>\n          </ng-container>\n          <ng-container *ngSwitchCase=\"'picture-card'\">\n            <ng-container *ngIf=\"file.isUploading; else iconNodeFileIcon\">\n              {{ locale.uploading }}\n            </ng-container>\n          </ng-container>\n          <i *ngSwitchDefault nz-icon [nzType]=\"file.isUploading ? 'loading' : 'paper-clip'\"></i>\n        </ng-container>\n      </ng-container>\n      <ng-template\n        #customIconRender\n        [ngTemplateOutlet]=\"iconRender\"\n        [ngTemplateOutletContext]=\"{ $implicit: file }\"\n      ></ng-template>\n      <ng-template #iconNodeFileIcon>\n        <i nz-icon [nzType]=\"file.isImageUrl ? 'picture' : 'file'\" nzTheme=\"twotone\"></i>\n      </ng-template>\n    </ng-template>\n    <ng-template #removeIcon>\n      <button\n        *ngIf=\"icons.showRemoveIcon\"\n        type=\"button\"\n        nz-button\n        nzType=\"text\"\n        nzSize=\"small\"\n        (click)=\"handleRemove(file, $event)\"\n        [attr.title]=\"locale.removeFile\"\n        class=\"ant-upload-list-item-card-actions-btn\"\n      >\n        <i nz-icon nzType=\"delete\"></i>\n      </button>\n    </ng-template>\n    <ng-template #downloadIcon>\n      <button\n        *ngIf=\"file.showDownload\"\n        type=\"button\"\n        nz-button\n        nzType=\"text\"\n        nzSize=\"small\"\n        (click)=\"handleDownload(file)\"\n        [attr.title]=\"locale.downloadFile\"\n        class=\"ant-upload-list-item-card-actions-btn\"\n      >\n        <i nz-icon nzType=\"download\"></i>\n      </button>\n    </ng-template>\n    <ng-template #downloadOrDelete>\n      <span\n        *ngIf=\"listType !== 'picture-card'\"\n        class=\"ant-upload-list-item-card-actions {{ listType === 'picture' ? 'picture' : '' }}\"\n      >\n        <ng-template [ngTemplateOutlet]=\"downloadIcon\"></ng-template>\n        <ng-template [ngTemplateOutlet]=\"removeIcon\"></ng-template>\n      </span>\n    </ng-template>\n    <ng-template #preview>\n      <a\n        *ngIf=\"file.url\"\n        target=\"_blank\"\n        rel=\"noopener noreferrer\"\n        class=\"ant-upload-list-item-name\"\n        [attr.title]=\"file.name\"\n        [href]=\"file.url\"\n        [attr.download]=\"file.linkProps && file.linkProps.download\"\n        (click)=\"handlePreview(file, $event)\"\n      >\n        {{ file.name }}\n      </a>\n      <span\n        *ngIf=\"!file.url\"\n        class=\"ant-upload-list-item-name\"\n        [attr.title]=\"file.name\"\n        (click)=\"handlePreview(file, $event)\"\n      >\n        {{ file.name }}\n      </span>\n      <ng-template [ngTemplateOutlet]=\"downloadOrDelete\"></ng-template>\n    </ng-template>\n    <div class=\"ant-upload-list-item-info\">\n      <span class=\"ant-upload-span\">\n        <ng-template [ngTemplateOutlet]=\"icon\"></ng-template>\n        <ng-template [ngTemplateOutlet]=\"preview\"></ng-template>\n      </span>\n    </div>\n    <span\n      *ngIf=\"listType === 'picture-card' && !file.isUploading\"\n      class=\"ant-upload-list-item-actions\"\n    >\n      <a\n        *ngIf=\"icons.showPreviewIcon\"\n        [href]=\"file.url || file.thumbUrl\"\n        target=\"_blank\"\n        rel=\"noopener noreferrer\"\n        [attr.title]=\"locale.previewFile\"\n        [ngStyle]=\"!(file.url || file.thumbUrl) ? { opacity: 0.5, 'pointer-events': 'none' } : null\"\n        (click)=\"handlePreview(file, $event)\"\n      >\n        <i nz-icon nzType=\"eye\"></i>\n      </a>\n      <ng-container *ngIf=\"file.status === 'done'\">\n        <ng-template [ngTemplateOutlet]=\"downloadIcon\"></ng-template>\n      </ng-container>\n      <ng-template [ngTemplateOutlet]=\"removeIcon\"></ng-template>\n    </span>\n    <div *ngIf=\"file.isUploading\" class=\"ant-upload-list-item-progress\">\n      <nz-progress\n        [nzPercent]=\"file.percent!\"\n        nzType=\"line\"\n        [nzShowInfo]=\"false\"\n        [nzStrokeWidth]=\"2\"\n      ></nz-progress>\n    </div>\n  </div>\n</div>\n",
                animations: [
                    trigger('itemState', [
                        transition(':enter', [style({ height: '0', width: '0', opacity: 0 }), animate(150, style({ height: '*', width: '*', opacity: 1 }))]),
                        transition(':leave', [animate(150, style({ height: '0', width: '0', opacity: 0 }))])
                    ])
                ],
                host: {
                    '[class.ant-upload-list-rtl]': `dir === 'rtl'`,
                    '[class.ant-upload-list-text]': `listType === 'text'`,
                    '[class.ant-upload-list-picture]': `listType === 'picture'`,
                    '[class.ant-upload-list-picture-card]': `listType === 'picture-card'`
                },
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: ɵngcc0.ChangeDetectorRef }, { type: undefined, decorators: [{
                type: Inject,
                args: [DOCUMENT]
            }] }, { type: ɵngcc0.NgZone }, { type: ɵngcc1.Platform }, { type: ɵngcc0.ElementRef }]; }, { locale: [{
            type: Input
        }], iconRender: [{
            type: Input
        }], dir: [{
            type: Input
        }], items: [{
            type: Input
        }], listType: [{
            type: Input
        }], icons: [{
            type: Input
        }], onPreview: [{
            type: Input
        }], onRemove: [{
            type: Input
        }], onDownload: [{
            type: Input
        }], previewFile: [{
            type: Input
        }], previewIsImage: [{
            type: Input
        }] }); })();
export { ɵ0 };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBsb2FkLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9jb21wb25lbnRzL3VwbG9hZC91cGxvYWQtbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUVILE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUUxRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDakQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsTUFBTSxFQUNOLEtBQUssRUFDTCxNQUFNLEVBRU4saUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU12QixNQUFNLGVBQWUsR0FBRyxDQUFDLElBQVksRUFBVyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUMxRjtBQUNB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MEJBQ3BJLFVBQVUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsc0JBQ3JGLENBQUMsa0JBQ0gsa0JBQ0QsSUFBSSxFQUFFLHNCQUNKLDZCQUE2QixFQUFFLGVBQWUsc0JBQzlDLDhCQUE4QixFQUFFLHFCQUFxQixzQkFDckQsaUNBQWlDLEVBQUUsd0JBQXdCLHNCQUMzRCxzQ0FBc0MsRUFBRSw2QkFBNkIsa0JBQ3RFLGtCQUNELG1CQUFtQixFQUFFLEtBQUssa0JBQzFCLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJLGtCQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTSxjQUNoRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQXFCYTtBQUFDO0FBQWUiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBhbmltYXRlLCBzdHlsZSwgdHJhbnNpdGlvbiwgdHJpZ2dlciB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHsgRGlyZWN0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2JpZGknO1xuaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICdAYW5ndWxhci9jZGsvcGxhdGZvcm0nO1xuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEluamVjdCxcbiAgSW5wdXQsXG4gIE5nWm9uZSxcbiAgT25DaGFuZ2VzLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IE56SWNvblJlbmRlclRlbXBsYXRlLCBOelNob3dVcGxvYWRMaXN0LCBOelVwbG9hZEZpbGUsIE56VXBsb2FkTGlzdFR5cGUgfSBmcm9tICcuL2ludGVyZmFjZSc7XG5cbmNvbnN0IGlzSW1hZ2VGaWxlVHlwZSA9ICh0eXBlOiBzdHJpbmcpOiBib29sZWFuID0+ICEhdHlwZSAmJiB0eXBlLmluZGV4T2YoJ2ltYWdlLycpID09PSAwO1xuXG5jb25zdCBNRUFTVVJFX1NJWkUgPSAyMDA7XG5cbnR5cGUgVXBsb2FkTGlzdEljb25UeXBlID0gJycgfCAndXBsb2FkaW5nJyB8ICd0aHVtYm5haWwnO1xuXG5pbnRlcmZhY2UgVXBsb2FkTGlzdEZpbGUgZXh0ZW5kcyBOelVwbG9hZEZpbGUge1xuICBpc0ltYWdlVXJsPzogYm9vbGVhbjtcbiAgaXNVcGxvYWRpbmc/OiBib29sZWFuO1xuICBpY29uVHlwZT86IFVwbG9hZExpc3RJY29uVHlwZTtcbiAgc2hvd0Rvd25sb2FkPzogYm9vbGVhbjtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbnotdXBsb2FkLWxpc3QnLFxuICBleHBvcnRBczogJ256VXBsb2FkTGlzdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi91cGxvYWQtbGlzdC5jb21wb25lbnQuaHRtbCcsXG4gIGFuaW1hdGlvbnM6IFtcbiAgICB0cmlnZ2VyKCdpdGVtU3RhdGUnLCBbXG4gICAgICB0cmFuc2l0aW9uKCc6ZW50ZXInLCBbc3R5bGUoeyBoZWlnaHQ6ICcwJywgd2lkdGg6ICcwJywgb3BhY2l0eTogMCB9KSwgYW5pbWF0ZSgxNTAsIHN0eWxlKHsgaGVpZ2h0OiAnKicsIHdpZHRoOiAnKicsIG9wYWNpdHk6IDEgfSkpXSksXG4gICAgICB0cmFuc2l0aW9uKCc6bGVhdmUnLCBbYW5pbWF0ZSgxNTAsIHN0eWxlKHsgaGVpZ2h0OiAnMCcsIHdpZHRoOiAnMCcsIG9wYWNpdHk6IDAgfSkpXSlcbiAgICBdKVxuICBdLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5hbnQtdXBsb2FkLWxpc3QtcnRsXSc6IGBkaXIgPT09ICdydGwnYCxcbiAgICAnW2NsYXNzLmFudC11cGxvYWQtbGlzdC10ZXh0XSc6IGBsaXN0VHlwZSA9PT0gJ3RleHQnYCxcbiAgICAnW2NsYXNzLmFudC11cGxvYWQtbGlzdC1waWN0dXJlXSc6IGBsaXN0VHlwZSA9PT0gJ3BpY3R1cmUnYCxcbiAgICAnW2NsYXNzLmFudC11cGxvYWQtbGlzdC1waWN0dXJlLWNhcmRdJzogYGxpc3RUeXBlID09PSAncGljdHVyZS1jYXJkJ2BcbiAgfSxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIE56VXBsb2FkTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG4gIGxpc3Q6IFVwbG9hZExpc3RGaWxlW10gPSBbXTtcblxuICBwcml2YXRlIGdldCBzaG93UGljKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmxpc3RUeXBlID09PSAncGljdHVyZScgfHwgdGhpcy5saXN0VHlwZSA9PT0gJ3BpY3R1cmUtY2FyZCc7XG4gIH1cblxuICBASW5wdXQoKSBsb2NhbGU6IE56U2FmZUFueSA9IHt9O1xuICBASW5wdXQoKSBsaXN0VHlwZSE6IE56VXBsb2FkTGlzdFR5cGU7XG4gIEBJbnB1dCgpXG4gIHNldCBpdGVtcyhsaXN0OiBOelVwbG9hZEZpbGVbXSkge1xuICAgIHRoaXMubGlzdCA9IGxpc3Q7XG4gIH1cbiAgQElucHV0KCkgaWNvbnMhOiBOelNob3dVcGxvYWRMaXN0O1xuICBASW5wdXQoKSBvblByZXZpZXc/OiAoZmlsZTogTnpVcGxvYWRGaWxlKSA9PiB2b2lkO1xuICBASW5wdXQoKSBvblJlbW92ZSE6IChmaWxlOiBOelVwbG9hZEZpbGUpID0+IHZvaWQ7XG4gIEBJbnB1dCgpIG9uRG93bmxvYWQ/OiAoZmlsZTogTnpVcGxvYWRGaWxlKSA9PiB2b2lkO1xuICBASW5wdXQoKSBwcmV2aWV3RmlsZT86IChmaWxlOiBOelVwbG9hZEZpbGUpID0+IE9ic2VydmFibGU8c3RyaW5nPjtcbiAgQElucHV0KCkgcHJldmlld0lzSW1hZ2U/OiAoZmlsZTogTnpVcGxvYWRGaWxlKSA9PiBib29sZWFuO1xuICBASW5wdXQoKSBpY29uUmVuZGVyOiBOekljb25SZW5kZXJUZW1wbGF0ZSB8IG51bGwgPSBudWxsO1xuICBASW5wdXQoKSBkaXI6IERpcmVjdGlvbiA9ICdsdHInO1xuXG4gIHByaXZhdGUgZ2VuRXJyKGZpbGU6IE56VXBsb2FkRmlsZSk6IHN0cmluZyB7XG4gICAgaWYgKGZpbGUucmVzcG9uc2UgJiYgdHlwZW9mIGZpbGUucmVzcG9uc2UgPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm4gZmlsZS5yZXNwb25zZTtcbiAgICB9XG4gICAgcmV0dXJuIChmaWxlLmVycm9yICYmIGZpbGUuZXJyb3Iuc3RhdHVzVGV4dCkgfHwgdGhpcy5sb2NhbGUudXBsb2FkRXJyb3I7XG4gIH1cblxuICBwcml2YXRlIGV4dG5hbWUodXJsOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGNvbnN0IHRlbXAgPSB1cmwuc3BsaXQoJy8nKTtcbiAgICBjb25zdCBmaWxlbmFtZSA9IHRlbXBbdGVtcC5sZW5ndGggLSAxXTtcbiAgICBjb25zdCBmaWxlbmFtZVdpdGhvdXRTdWZmaXggPSBmaWxlbmFtZS5zcGxpdCgvI3xcXD8vKVswXTtcbiAgICByZXR1cm4gKC9cXC5bXi4vXFxcXF0qJC8uZXhlYyhmaWxlbmFtZVdpdGhvdXRTdWZmaXgpIHx8IFsnJ10pWzBdO1xuICB9XG5cbiAgaXNJbWFnZVVybChmaWxlOiBOelVwbG9hZEZpbGUpOiBib29sZWFuIHtcbiAgICBpZiAoaXNJbWFnZUZpbGVUeXBlKGZpbGUudHlwZSEpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgY29uc3QgdXJsOiBzdHJpbmcgPSAoZmlsZS50aHVtYlVybCB8fCBmaWxlLnVybCB8fCAnJykgYXMgc3RyaW5nO1xuICAgIGlmICghdXJsKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGNvbnN0IGV4dGVuc2lvbiA9IHRoaXMuZXh0bmFtZSh1cmwpO1xuICAgIGlmICgvXmRhdGE6aW1hZ2VcXC8vLnRlc3QodXJsKSB8fCAvKHdlYnB8c3ZnfHBuZ3xnaWZ8anBnfGpwZWd8amZpZnxibXB8ZHBnKSQvaS50ZXN0KGV4dGVuc2lvbikpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSBpZiAoL15kYXRhOi8udGVzdCh1cmwpKSB7XG4gICAgICAvLyBvdGhlciBmaWxlIHR5cGVzIG9mIGJhc2U2NFxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZSBpZiAoZXh0ZW5zaW9uKSB7XG4gICAgICAvLyBvdGhlciBmaWxlIHR5cGVzIHdoaWNoIGhhdmUgZXh0ZW5zaW9uXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRJY29uVHlwZShmaWxlOiBVcGxvYWRMaXN0RmlsZSk6IFVwbG9hZExpc3RJY29uVHlwZSB7XG4gICAgaWYgKCF0aGlzLnNob3dQaWMpIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgaWYgKGZpbGUuaXNVcGxvYWRpbmcgfHwgKCFmaWxlLnRodW1iVXJsICYmICFmaWxlLnVybCkpIHtcbiAgICAgIHJldHVybiAndXBsb2FkaW5nJztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuICd0aHVtYm5haWwnO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgcHJldmlld0ltYWdlKGZpbGU6IEZpbGUgfCBCbG9iKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICBpZiAoIWlzSW1hZ2VGaWxlVHlwZShmaWxlLnR5cGUpIHx8ICF0aGlzLnBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgICByZXNvbHZlKCcnKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgICBjb25zdCBjYW52YXMgPSB0aGlzLmRvYy5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICAgICAgY2FudmFzLndpZHRoID0gTUVBU1VSRV9TSVpFO1xuICAgICAgICBjYW52YXMuaGVpZ2h0ID0gTUVBU1VSRV9TSVpFO1xuICAgICAgICBjYW52YXMuc3R5bGUuY3NzVGV4dCA9IGBwb3NpdGlvbjogZml4ZWQ7IGxlZnQ6IDA7IHRvcDogMDsgd2lkdGg6ICR7TUVBU1VSRV9TSVpFfXB4OyBoZWlnaHQ6ICR7TUVBU1VSRV9TSVpFfXB4OyB6LWluZGV4OiA5OTk5OyBkaXNwbGF5OiBub25lO2A7XG4gICAgICAgIHRoaXMuZG9jLmJvZHkuYXBwZW5kQ2hpbGQoY2FudmFzKTtcbiAgICAgICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgIGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBpbWcub25sb2FkID0gKCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCB9ID0gaW1nO1xuXG4gICAgICAgICAgbGV0IGRyYXdXaWR0aCA9IE1FQVNVUkVfU0laRTtcbiAgICAgICAgICBsZXQgZHJhd0hlaWdodCA9IE1FQVNVUkVfU0laRTtcbiAgICAgICAgICBsZXQgb2Zmc2V0WCA9IDA7XG4gICAgICAgICAgbGV0IG9mZnNldFkgPSAwO1xuXG4gICAgICAgICAgaWYgKHdpZHRoIDwgaGVpZ2h0KSB7XG4gICAgICAgICAgICBkcmF3SGVpZ2h0ID0gaGVpZ2h0ICogKE1FQVNVUkVfU0laRSAvIHdpZHRoKTtcbiAgICAgICAgICAgIG9mZnNldFkgPSAtKGRyYXdIZWlnaHQgLSBkcmF3V2lkdGgpIC8gMjtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZHJhd1dpZHRoID0gd2lkdGggKiAoTUVBU1VSRV9TSVpFIC8gaGVpZ2h0KTtcbiAgICAgICAgICAgIG9mZnNldFggPSAtKGRyYXdXaWR0aCAtIGRyYXdIZWlnaHQpIC8gMjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgY3R4IS5kcmF3SW1hZ2UoaW1nLCBvZmZzZXRYLCBvZmZzZXRZLCBkcmF3V2lkdGgsIGRyYXdIZWlnaHQpO1xuICAgICAgICAgIH0gY2F0Y2gge31cbiAgICAgICAgICBjb25zdCBkYXRhVVJMID0gY2FudmFzLnRvRGF0YVVSTCgpO1xuICAgICAgICAgIHRoaXMuZG9jLmJvZHkucmVtb3ZlQ2hpbGQoY2FudmFzKTtcblxuICAgICAgICAgIHJlc29sdmUoZGF0YVVSTCk7XG4gICAgICAgIH07XG4gICAgICAgIGltZy5zcmMgPSB3aW5kb3cuVVJMLmNyZWF0ZU9iamVjdFVSTChmaWxlKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBnZW5UaHVtYigpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMucGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgd2luID0gd2luZG93IGFzIE56U2FmZUFueTtcbiAgICBpZiAoIXRoaXMuc2hvd1BpYyB8fCB0eXBlb2YgZG9jdW1lbnQgPT09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiB3aW4gPT09ICd1bmRlZmluZWQnIHx8ICF3aW4uRmlsZVJlYWRlciB8fCAhd2luLkZpbGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5saXN0XG4gICAgICAuZmlsdGVyKGZpbGUgPT4gZmlsZS5vcmlnaW5GaWxlT2JqIGluc3RhbmNlb2YgRmlsZSAmJiBmaWxlLnRodW1iVXJsID09PSB1bmRlZmluZWQpXG4gICAgICAuZm9yRWFjaChmaWxlID0+IHtcbiAgICAgICAgZmlsZS50aHVtYlVybCA9ICcnO1xuICAgICAgICAodGhpcy5wcmV2aWV3RmlsZSA/IHRoaXMucHJldmlld0ZpbGUoZmlsZSkudG9Qcm9taXNlKCkgOiB0aGlzLnByZXZpZXdJbWFnZShmaWxlLm9yaWdpbkZpbGVPYmohKSkudGhlbihkYXRhVXJsID0+IHtcbiAgICAgICAgICBmaWxlLnRodW1iVXJsID0gZGF0YVVybDtcbiAgICAgICAgICB0aGlzLmRldGVjdENoYW5nZXMoKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgc2hvd0Rvd25sb2FkKGZpbGU6IE56VXBsb2FkRmlsZSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhISh0aGlzLmljb25zLnNob3dEb3dubG9hZEljb24gJiYgZmlsZS5zdGF0dXMgPT09ICdkb25lJyk7XG4gIH1cblxuICBwcml2YXRlIGZpeERhdGEoKTogdm9pZCB7XG4gICAgdGhpcy5saXN0LmZvckVhY2goZmlsZSA9PiB7XG4gICAgICBmaWxlLmlzVXBsb2FkaW5nID0gZmlsZS5zdGF0dXMgPT09ICd1cGxvYWRpbmcnO1xuICAgICAgZmlsZS5tZXNzYWdlID0gdGhpcy5nZW5FcnIoZmlsZSk7XG4gICAgICBmaWxlLmxpbmtQcm9wcyA9IHR5cGVvZiBmaWxlLmxpbmtQcm9wcyA9PT0gJ3N0cmluZycgPyBKU09OLnBhcnNlKGZpbGUubGlua1Byb3BzKSA6IGZpbGUubGlua1Byb3BzO1xuICAgICAgZmlsZS5pc0ltYWdlVXJsID0gdGhpcy5wcmV2aWV3SXNJbWFnZSA/IHRoaXMucHJldmlld0lzSW1hZ2UoZmlsZSkgOiB0aGlzLmlzSW1hZ2VVcmwoZmlsZSk7XG4gICAgICBmaWxlLmljb25UeXBlID0gdGhpcy5nZXRJY29uVHlwZShmaWxlKTtcbiAgICAgIGZpbGUuc2hvd0Rvd25sb2FkID0gdGhpcy5zaG93RG93bmxvYWQoZmlsZSk7XG4gICAgfSk7XG4gIH1cblxuICBoYW5kbGVQcmV2aWV3KGZpbGU6IE56VXBsb2FkRmlsZSwgZTogRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMub25QcmV2aWV3KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHJldHVybiB0aGlzLm9uUHJldmlldyhmaWxlKTtcbiAgfVxuXG4gIGhhbmRsZVJlbW92ZShmaWxlOiBOelVwbG9hZEZpbGUsIGU6IEV2ZW50KTogdm9pZCB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmICh0aGlzLm9uUmVtb3ZlKSB7XG4gICAgICB0aGlzLm9uUmVtb3ZlKGZpbGUpO1xuICAgIH1cbiAgICByZXR1cm47XG4gIH1cblxuICBoYW5kbGVEb3dubG9hZChmaWxlOiBOelVwbG9hZEZpbGUpOiB2b2lkIHtcbiAgICBpZiAodHlwZW9mIHRoaXMub25Eb3dubG9hZCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhpcy5vbkRvd25sb2FkKGZpbGUpO1xuICAgIH0gZWxzZSBpZiAoZmlsZS51cmwpIHtcbiAgICAgIHdpbmRvdy5vcGVuKGZpbGUudXJsKTtcbiAgICB9XG4gIH1cblxuICAvLyAjZW5kcmVnaW9uXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jOiBOelNhZmVBbnksXG4gICAgcHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSxcbiAgICBwcml2YXRlIHBsYXRmb3JtOiBQbGF0Zm9ybSxcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWZcbiAgKSB7XG4gICAgLy8gVE9ETzogbW92ZSB0byBob3N0IGFmdGVyIFZpZXcgRW5naW5lIGRlcHJlY2F0aW9uXG4gICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnYW50LXVwbG9hZC1saXN0Jyk7XG4gIH1cblxuICBkZXRlY3RDaGFuZ2VzKCk6IHZvaWQge1xuICAgIHRoaXMuZml4RGF0YSgpO1xuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xuICAgIHRoaXMuZml4RGF0YSgpO1xuICAgIHRoaXMuZ2VuVGh1bWIoKTtcbiAgfVxufVxuIl19