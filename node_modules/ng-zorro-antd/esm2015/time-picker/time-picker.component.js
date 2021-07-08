/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { __decorate, __metadata } from "tslib";
import { Directionality } from '@angular/cdk/bidi';
import { CdkOverlayOrigin } from '@angular/cdk/overlay';
import { Platform } from '@angular/cdk/platform';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, Optional, Output, Renderer2, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { isValid } from 'date-fns';
import { slideMotion } from 'ng-zorro-antd/core/animation';
import { NzConfigService, WithConfig } from 'ng-zorro-antd/core/config';
import { warn } from 'ng-zorro-antd/core/logger';
import { InputBoolean, isNil } from 'ng-zorro-antd/core/util';
import { DateHelperService, NzI18nService } from 'ng-zorro-antd/i18n';
import { of, Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from 'ng-zorro-antd/core/config';
import * as ɵngcc2 from 'ng-zorro-antd/i18n';
import * as ɵngcc3 from '@angular/cdk/platform';
import * as ɵngcc4 from '@angular/cdk/bidi';
import * as ɵngcc5 from '@angular/forms';
import * as ɵngcc6 from 'ng-zorro-antd/core/outlet';
import * as ɵngcc7 from '@angular/common';
import * as ɵngcc8 from '@angular/cdk/overlay';
import * as ɵngcc9 from 'ng-zorro-antd/core/overlay';
import * as ɵngcc10 from 'ng-zorro-antd/icon';
import * as ɵngcc11 from 'ng-zorro-antd/core/transition-patch';
import * as ɵngcc12 from './time-picker-panel.component';

const _c0 = ["inputElement"];
function NzTimePickerComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelement(1, "i", 7);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const suffixIcon_r4 = ctx.$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("nzType", suffixIcon_r4);
} }
function NzTimePickerComponent_span_6_Template(rf, ctx) { if (rf & 1) {
    const _r6 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "span", 8);
    ɵngcc0.ɵɵlistener("click", function NzTimePickerComponent_span_6_Template_span_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r6); const ctx_r5 = ɵngcc0.ɵɵnextContext(); return ctx_r5.onClickClearBtn($event); });
    ɵngcc0.ɵɵelement(1, "i", 9);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵattribute("aria-label", ctx_r2.nzClearText)("title", ctx_r2.nzClearText);
} }
function NzTimePickerComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    const _r8 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 10);
    ɵngcc0.ɵɵelementStart(1, "div", 11);
    ɵngcc0.ɵɵelementStart(2, "div", 12);
    ɵngcc0.ɵɵelementStart(3, "nz-time-picker-panel", 13);
    ɵngcc0.ɵɵlistener("ngModelChange", function NzTimePickerComponent_ng_template_7_Template_nz_time_picker_panel_ngModelChange_3_listener($event) { ɵngcc0.ɵɵrestoreView(_r8); const ctx_r7 = ɵngcc0.ɵɵnextContext(); return ctx_r7.value = $event; })("ngModelChange", function NzTimePickerComponent_ng_template_7_Template_nz_time_picker_panel_ngModelChange_3_listener($event) { ɵngcc0.ɵɵrestoreView(_r8); const ctx_r9 = ɵngcc0.ɵɵnextContext(); return ctx_r9.onPanelValueChange($event); })("closePanel", function NzTimePickerComponent_ng_template_7_Template_nz_time_picker_panel_closePanel_3_listener() { ɵngcc0.ɵɵrestoreView(_r8); const ctx_r10 = ɵngcc0.ɵɵnextContext(); return ctx_r10.setCurrentValueAndClose(); });
    ɵngcc0.ɵɵpipe(4, "async");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("@slideMotion", "enter");
    ɵngcc0.ɵɵadvance(3);
    ɵngcc0.ɵɵproperty("ngClass", ctx_r3.nzPopupClassName)("format", ctx_r3.nzFormat)("nzHourStep", ctx_r3.nzHourStep)("nzMinuteStep", ctx_r3.nzMinuteStep)("nzSecondStep", ctx_r3.nzSecondStep)("nzDisabledHours", ctx_r3.nzDisabledHours)("nzDisabledMinutes", ctx_r3.nzDisabledMinutes)("nzDisabledSeconds", ctx_r3.nzDisabledSeconds)("nzPlaceHolder", ctx_r3.nzPlaceHolder || ɵngcc0.ɵɵpipeBind1(4, 19, ctx_r3.i18nPlaceHolder$))("nzHideDisabledOptions", ctx_r3.nzHideDisabledOptions)("nzUse12Hours", ctx_r3.nzUse12Hours)("nzDefaultOpenValue", ctx_r3.nzDefaultOpenValue)("nzAddOn", ctx_r3.nzAddOn)("nzClearText", ctx_r3.nzClearText)("nzNowText", ctx_r3.nzNowText)("nzOkText", ctx_r3.nzOkText)("nzAllowEmpty", ctx_r3.nzAllowEmpty)("ngModel", ctx_r3.value);
} }
const NZ_CONFIG_MODULE_NAME = 'timePicker';
export class NzTimePickerComponent {
    constructor(nzConfigService, i18n, element, renderer, cdr, dateHelper, platform, elementRef, directionality) {
        this.nzConfigService = nzConfigService;
        this.i18n = i18n;
        this.element = element;
        this.renderer = renderer;
        this.cdr = cdr;
        this.dateHelper = dateHelper;
        this.platform = platform;
        this.elementRef = elementRef;
        this.directionality = directionality;
        this._nzModuleName = NZ_CONFIG_MODULE_NAME;
        this.destroy$ = new Subject();
        this.isInit = false;
        this.focused = false;
        this.inputValue = '';
        this.value = null;
        this.preValue = null;
        this.i18nPlaceHolder$ = of(undefined);
        this.overlayPositions = [
            {
                originX: 'start',
                originY: 'bottom',
                overlayX: 'start',
                overlayY: 'top',
                offsetY: 3
            }
        ];
        this.dir = 'ltr';
        this.nzId = null;
        this.nzSize = null;
        this.nzHourStep = 1;
        this.nzMinuteStep = 1;
        this.nzSecondStep = 1;
        this.nzClearText = 'clear';
        this.nzNowText = '';
        this.nzOkText = '';
        this.nzPopupClassName = '';
        this.nzPlaceHolder = '';
        this.nzFormat = 'HH:mm:ss';
        this.nzOpen = false;
        this.nzUse12Hours = false;
        this.nzSuffixIcon = 'clock-circle';
        this.nzOpenChange = new EventEmitter();
        this.nzHideDisabledOptions = false;
        this.nzAllowEmpty = true;
        this.nzDisabled = false;
        this.nzAutoFocus = false;
        this.nzBackdrop = false;
        // TODO: move to host after View Engine deprecation
        this.elementRef.nativeElement.classList.add('ant-picker');
    }
    emitValue(value) {
        this.setValue(value, true);
        if (this._onChange) {
            this._onChange(this.value);
        }
        if (this._onTouched) {
            this._onTouched();
        }
    }
    setValue(value, syncPreValue = false) {
        if (syncPreValue) {
            this.preValue = isValid(value) ? new Date(value) : null;
        }
        this.value = isValid(value) ? new Date(value) : null;
        this.inputValue = this.dateHelper.format(value, this.nzFormat);
        this.cdr.markForCheck();
    }
    open() {
        if (this.nzDisabled || this.nzOpen) {
            return;
        }
        this.focus();
        this.nzOpen = true;
        this.nzOpenChange.emit(this.nzOpen);
    }
    close() {
        this.nzOpen = false;
        this.cdr.markForCheck();
        this.nzOpenChange.emit(this.nzOpen);
    }
    updateAutoFocus() {
        if (this.isInit && !this.nzDisabled) {
            if (this.nzAutoFocus) {
                this.renderer.setAttribute(this.inputRef.nativeElement, 'autofocus', 'autofocus');
            }
            else {
                this.renderer.removeAttribute(this.inputRef.nativeElement, 'autofocus');
            }
        }
    }
    onClickClearBtn(event) {
        event.stopPropagation();
        this.emitValue(null);
    }
    onClickOutside(event) {
        if (!this.element.nativeElement.contains(event.target)) {
            this.setCurrentValueAndClose();
        }
    }
    onFocus(value) {
        this.focused = value;
    }
    focus() {
        if (this.inputRef.nativeElement) {
            this.inputRef.nativeElement.focus();
        }
    }
    blur() {
        if (this.inputRef.nativeElement) {
            this.inputRef.nativeElement.blur();
        }
    }
    onKeyupEsc() {
        this.setValue(this.preValue);
    }
    onKeyupEnter() {
        if (this.nzOpen && isValid(this.value)) {
            this.setCurrentValueAndClose();
        }
        else if (!this.nzOpen) {
            this.open();
        }
    }
    onInputChange(str) {
        if (!this.platform.TRIDENT && document.activeElement === this.inputRef.nativeElement) {
            this.open();
            this.parseTimeString(str);
        }
    }
    onPanelValueChange(value) {
        this.setValue(value);
        this.focus();
    }
    setCurrentValueAndClose() {
        this.emitValue(this.value);
        this.close();
    }
    ngOnInit() {
        var _a;
        this.inputSize = Math.max(8, this.nzFormat.length) + 2;
        this.origin = new CdkOverlayOrigin(this.element);
        this.i18nPlaceHolder$ = this.i18n.localeChange.pipe(map((nzLocale) => nzLocale.TimePicker.placeholder));
        this.dir = this.directionality.value;
        (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
            this.dir = direction;
        });
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    ngOnChanges(changes) {
        const { nzUse12Hours, nzFormat, nzDisabled, nzAutoFocus } = changes;
        if (nzUse12Hours && !nzUse12Hours.previousValue && nzUse12Hours.currentValue && !nzFormat) {
            this.nzFormat = 'h:mm:ss a';
        }
        if (nzDisabled) {
            const value = nzDisabled.currentValue;
            const input = this.inputRef.nativeElement;
            if (value) {
                this.renderer.setAttribute(input, 'disabled', '');
            }
            else {
                this.renderer.removeAttribute(input, 'disabled');
            }
        }
        if (nzAutoFocus) {
            this.updateAutoFocus();
        }
    }
    parseTimeString(str) {
        const value = this.dateHelper.parseTime(str, this.nzFormat) || null;
        if (isValid(value)) {
            this.value = value;
            this.cdr.markForCheck();
        }
    }
    ngAfterViewInit() {
        this.isInit = true;
        this.updateAutoFocus();
    }
    writeValue(time) {
        let result;
        if (time instanceof Date) {
            result = time;
        }
        else if (isNil(time)) {
            result = null;
        }
        else {
            warn('Non-Date type is not recommended for time-picker, use "Date" type.');
            result = new Date(time);
        }
        this.setValue(result, true);
    }
    registerOnChange(fn) {
        this._onChange = fn;
    }
    registerOnTouched(fn) {
        this._onTouched = fn;
    }
    setDisabledState(isDisabled) {
        this.nzDisabled = isDisabled;
        this.cdr.markForCheck();
    }
}
NzTimePickerComponent.ɵfac = function NzTimePickerComponent_Factory(t) { return new (t || NzTimePickerComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc1.NzConfigService), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.NzI18nService), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.DateHelperService), ɵngcc0.ɵɵdirectiveInject(ɵngcc3.Platform), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc4.Directionality, 8)); };
NzTimePickerComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzTimePickerComponent, selectors: [["nz-time-picker"]], viewQuery: function NzTimePickerComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵstaticViewQuery(_c0, true);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.inputRef = _t.first);
    } }, hostVars: 10, hostBindings: function NzTimePickerComponent_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("click", function NzTimePickerComponent_click_HostBindingHandler() { return ctx.open(); });
    } if (rf & 2) {
        ɵngcc0.ɵɵclassProp("ant-picker-large", ctx.nzSize === "large")("ant-picker-small", ctx.nzSize === "small")("ant-picker-disabled", ctx.nzDisabled)("ant-picker-focused", ctx.focused)("ant-picker-rtl", ctx.dir === "rtl");
    } }, inputs: { nzId: "nzId", nzSize: "nzSize", nzHourStep: "nzHourStep", nzMinuteStep: "nzMinuteStep", nzSecondStep: "nzSecondStep", nzClearText: "nzClearText", nzNowText: "nzNowText", nzOkText: "nzOkText", nzPopupClassName: "nzPopupClassName", nzPlaceHolder: "nzPlaceHolder", nzFormat: "nzFormat", nzOpen: "nzOpen", nzUse12Hours: "nzUse12Hours", nzSuffixIcon: "nzSuffixIcon", nzHideDisabledOptions: "nzHideDisabledOptions", nzAllowEmpty: "nzAllowEmpty", nzDisabled: "nzDisabled", nzAutoFocus: "nzAutoFocus", nzBackdrop: "nzBackdrop", nzAddOn: "nzAddOn", nzDefaultOpenValue: "nzDefaultOpenValue", nzDisabledHours: "nzDisabledHours", nzDisabledMinutes: "nzDisabledMinutes", nzDisabledSeconds: "nzDisabledSeconds" }, outputs: { nzOpenChange: "nzOpenChange" }, exportAs: ["nzTimePicker"], features: [ɵngcc0.ɵɵProvidersFeature([{ provide: NG_VALUE_ACCESSOR, useExisting: NzTimePickerComponent, multi: true }]), ɵngcc0.ɵɵNgOnChangesFeature], decls: 8, vars: 15, consts: [[1, "ant-picker-input"], ["type", "text", 3, "size", "placeholder", "ngModel", "disabled", "ngModelChange", "focus", "blur", "keyup.enter", "keyup.escape"], ["inputElement", ""], [1, "ant-picker-suffix"], [4, "nzStringTemplateOutlet"], ["class", "ant-picker-clear", 3, "click", 4, "ngIf"], ["cdkConnectedOverlay", "", "nzConnectedOverlay", "", 3, "cdkConnectedOverlayHasBackdrop", "cdkConnectedOverlayPositions", "cdkConnectedOverlayOrigin", "cdkConnectedOverlayOpen", "cdkConnectedOverlayOffsetY", "cdkConnectedOverlayTransformOriginOn", "detach", "overlayOutsideClick"], ["nz-icon", "", 3, "nzType"], [1, "ant-picker-clear", 3, "click"], ["nz-icon", "", "nzType", "close-circle", "nzTheme", "fill"], [1, "ant-picker-dropdown"], [1, "ant-picker-panel-container"], ["tabindex", "-1", 1, "ant-picker-panel"], [3, "ngClass", "format", "nzHourStep", "nzMinuteStep", "nzSecondStep", "nzDisabledHours", "nzDisabledMinutes", "nzDisabledSeconds", "nzPlaceHolder", "nzHideDisabledOptions", "nzUse12Hours", "nzDefaultOpenValue", "nzAddOn", "nzClearText", "nzNowText", "nzOkText", "nzAllowEmpty", "ngModel", "ngModelChange", "closePanel"]], template: function NzTimePickerComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵelementStart(1, "input", 1, 2);
        ɵngcc0.ɵɵlistener("ngModelChange", function NzTimePickerComponent_Template_input_ngModelChange_1_listener($event) { return ctx.inputValue = $event; })("focus", function NzTimePickerComponent_Template_input_focus_1_listener() { return ctx.onFocus(true); })("blur", function NzTimePickerComponent_Template_input_blur_1_listener() { return ctx.onFocus(false); })("keyup.enter", function NzTimePickerComponent_Template_input_keyup_enter_1_listener() { return ctx.onKeyupEnter(); })("keyup.escape", function NzTimePickerComponent_Template_input_keyup_escape_1_listener() { return ctx.onKeyupEsc(); })("ngModelChange", function NzTimePickerComponent_Template_input_ngModelChange_1_listener($event) { return ctx.onInputChange($event); });
        ɵngcc0.ɵɵpipe(3, "async");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(4, "span", 3);
        ɵngcc0.ɵɵtemplate(5, NzTimePickerComponent_ng_container_5_Template, 2, 1, "ng-container", 4);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(6, NzTimePickerComponent_span_6_Template, 2, 2, "span", 5);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(7, NzTimePickerComponent_ng_template_7_Template, 5, 21, "ng-template", 6);
        ɵngcc0.ɵɵlistener("detach", function NzTimePickerComponent_Template_ng_template_detach_7_listener() { return ctx.close(); })("overlayOutsideClick", function NzTimePickerComponent_Template_ng_template_overlayOutsideClick_7_listener($event) { return ctx.onClickOutside($event); });
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("size", ctx.inputSize)("placeholder", ctx.nzPlaceHolder || ɵngcc0.ɵɵpipeBind1(3, 13, ctx.i18nPlaceHolder$))("ngModel", ctx.inputValue)("disabled", ctx.nzDisabled);
        ɵngcc0.ɵɵattribute("id", ctx.nzId);
        ɵngcc0.ɵɵadvance(4);
        ɵngcc0.ɵɵproperty("nzStringTemplateOutlet", ctx.nzSuffixIcon);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.nzAllowEmpty && !ctx.nzDisabled && ctx.value);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("cdkConnectedOverlayHasBackdrop", ctx.nzBackdrop)("cdkConnectedOverlayPositions", ctx.overlayPositions)("cdkConnectedOverlayOrigin", ctx.origin)("cdkConnectedOverlayOpen", ctx.nzOpen)("cdkConnectedOverlayOffsetY", -2)("cdkConnectedOverlayTransformOriginOn", ".ant-picker-dropdown");
    } }, directives: [ɵngcc5.DefaultValueAccessor, ɵngcc5.NgControlStatus, ɵngcc5.NgModel, ɵngcc6.NzStringTemplateOutletDirective, ɵngcc7.NgIf, ɵngcc8.CdkConnectedOverlay, ɵngcc9.NzConnectedOverlayDirective, ɵngcc10.NzIconDirective, ɵngcc11.ɵNzTransitionPatchDirective, ɵngcc12.NzTimePickerPanelComponent, ɵngcc7.NgClass], pipes: [ɵngcc7.AsyncPipe], encapsulation: 2, data: { animation: [slideMotion] }, changeDetection: 0 });
NzTimePickerComponent.ctorParameters = () => [
    { type: NzConfigService },
    { type: NzI18nService },
    { type: ElementRef },
    { type: Renderer2 },
    { type: ChangeDetectorRef },
    { type: DateHelperService },
    { type: Platform },
    { type: ElementRef },
    { type: Directionality, decorators: [{ type: Optional }] }
];
NzTimePickerComponent.propDecorators = {
    inputRef: [{ type: ViewChild, args: ['inputElement', { static: true },] }],
    nzId: [{ type: Input }],
    nzSize: [{ type: Input }],
    nzHourStep: [{ type: Input }],
    nzMinuteStep: [{ type: Input }],
    nzSecondStep: [{ type: Input }],
    nzClearText: [{ type: Input }],
    nzNowText: [{ type: Input }],
    nzOkText: [{ type: Input }],
    nzPopupClassName: [{ type: Input }],
    nzPlaceHolder: [{ type: Input }],
    nzAddOn: [{ type: Input }],
    nzDefaultOpenValue: [{ type: Input }],
    nzDisabledHours: [{ type: Input }],
    nzDisabledMinutes: [{ type: Input }],
    nzDisabledSeconds: [{ type: Input }],
    nzFormat: [{ type: Input }],
    nzOpen: [{ type: Input }],
    nzUse12Hours: [{ type: Input }],
    nzSuffixIcon: [{ type: Input }],
    nzOpenChange: [{ type: Output }],
    nzHideDisabledOptions: [{ type: Input }],
    nzAllowEmpty: [{ type: Input }],
    nzDisabled: [{ type: Input }],
    nzAutoFocus: [{ type: Input }],
    nzBackdrop: [{ type: Input }]
};
__decorate([
    WithConfig(),
    __metadata("design:type", Number)
], NzTimePickerComponent.prototype, "nzHourStep", void 0);
__decorate([
    WithConfig(),
    __metadata("design:type", Number)
], NzTimePickerComponent.prototype, "nzMinuteStep", void 0);
__decorate([
    WithConfig(),
    __metadata("design:type", Number)
], NzTimePickerComponent.prototype, "nzSecondStep", void 0);
__decorate([
    WithConfig(),
    __metadata("design:type", String)
], NzTimePickerComponent.prototype, "nzClearText", void 0);
__decorate([
    WithConfig(),
    __metadata("design:type", String)
], NzTimePickerComponent.prototype, "nzNowText", void 0);
__decorate([
    WithConfig(),
    __metadata("design:type", String)
], NzTimePickerComponent.prototype, "nzOkText", void 0);
__decorate([
    WithConfig(),
    __metadata("design:type", String)
], NzTimePickerComponent.prototype, "nzPopupClassName", void 0);
__decorate([
    WithConfig(),
    __metadata("design:type", String)
], NzTimePickerComponent.prototype, "nzFormat", void 0);
__decorate([
    WithConfig(),
    InputBoolean(),
    __metadata("design:type", Boolean)
], NzTimePickerComponent.prototype, "nzUse12Hours", void 0);
__decorate([
    WithConfig(),
    __metadata("design:type", Object)
], NzTimePickerComponent.prototype, "nzSuffixIcon", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzTimePickerComponent.prototype, "nzHideDisabledOptions", void 0);
__decorate([
    WithConfig(),
    InputBoolean(),
    __metadata("design:type", Boolean)
], NzTimePickerComponent.prototype, "nzAllowEmpty", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzTimePickerComponent.prototype, "nzDisabled", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzTimePickerComponent.prototype, "nzAutoFocus", void 0);
__decorate([
    WithConfig(),
    __metadata("design:type", Object)
], NzTimePickerComponent.prototype, "nzBackdrop", void 0);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzTimePickerComponent, [{
        type: Component,
        args: [{
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                selector: 'nz-time-picker',
                exportAs: 'nzTimePicker',
                template: `
    <div class="ant-picker-input">
      <input
        #inputElement
        [attr.id]="nzId"
        type="text"
        [size]="inputSize"
        [placeholder]="nzPlaceHolder || (i18nPlaceHolder$ | async)"
        [(ngModel)]="inputValue"
        [disabled]="nzDisabled"
        (focus)="onFocus(true)"
        (blur)="onFocus(false)"
        (keyup.enter)="onKeyupEnter()"
        (keyup.escape)="onKeyupEsc()"
        (ngModelChange)="onInputChange($event)"
      />
      <span class="ant-picker-suffix">
        <ng-container *nzStringTemplateOutlet="nzSuffixIcon; let suffixIcon">
          <i nz-icon [nzType]="suffixIcon"></i>
        </ng-container>
      </span>
      <span *ngIf="nzAllowEmpty && !nzDisabled && value" class="ant-picker-clear" (click)="onClickClearBtn($event)">
        <i nz-icon nzType="close-circle" nzTheme="fill" [attr.aria-label]="nzClearText" [attr.title]="nzClearText"></i>
      </span>
    </div>

    <ng-template
      cdkConnectedOverlay
      nzConnectedOverlay
      [cdkConnectedOverlayHasBackdrop]="nzBackdrop"
      [cdkConnectedOverlayPositions]="overlayPositions"
      [cdkConnectedOverlayOrigin]="origin"
      [cdkConnectedOverlayOpen]="nzOpen"
      [cdkConnectedOverlayOffsetY]="-2"
      [cdkConnectedOverlayTransformOriginOn]="'.ant-picker-dropdown'"
      (detach)="close()"
      (overlayOutsideClick)="onClickOutside($event)"
    >
      <div [@slideMotion]="'enter'" class="ant-picker-dropdown">
        <div class="ant-picker-panel-container">
          <div tabindex="-1" class="ant-picker-panel">
            <nz-time-picker-panel
              [ngClass]="nzPopupClassName"
              [format]="nzFormat"
              [nzHourStep]="nzHourStep"
              [nzMinuteStep]="nzMinuteStep"
              [nzSecondStep]="nzSecondStep"
              [nzDisabledHours]="nzDisabledHours"
              [nzDisabledMinutes]="nzDisabledMinutes"
              [nzDisabledSeconds]="nzDisabledSeconds"
              [nzPlaceHolder]="nzPlaceHolder || (i18nPlaceHolder$ | async)"
              [nzHideDisabledOptions]="nzHideDisabledOptions"
              [nzUse12Hours]="nzUse12Hours"
              [nzDefaultOpenValue]="nzDefaultOpenValue"
              [nzAddOn]="nzAddOn"
              [nzClearText]="nzClearText"
              [nzNowText]="nzNowText"
              [nzOkText]="nzOkText"
              [nzAllowEmpty]="nzAllowEmpty"
              [(ngModel)]="value"
              (ngModelChange)="onPanelValueChange($event)"
              (closePanel)="setCurrentValueAndClose()"
            ></nz-time-picker-panel>
          </div>
        </div>
      </div>
    </ng-template>
  `,
                host: {
                    '[class.ant-picker-large]': `nzSize === 'large'`,
                    '[class.ant-picker-small]': `nzSize === 'small'`,
                    '[class.ant-picker-disabled]': `nzDisabled`,
                    '[class.ant-picker-focused]': `focused`,
                    '[class.ant-picker-rtl]': `dir === 'rtl'`,
                    '(click)': 'open()'
                },
                animations: [slideMotion],
                providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: NzTimePickerComponent, multi: true }]
            }]
    }], function () { return [{ type: ɵngcc1.NzConfigService }, { type: ɵngcc2.NzI18nService }, { type: ɵngcc0.ElementRef }, { type: ɵngcc0.Renderer2 }, { type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc2.DateHelperService }, { type: ɵngcc3.Platform }, { type: ɵngcc0.ElementRef }, { type: ɵngcc4.Directionality, decorators: [{
                type: Optional
            }] }]; }, { nzId: [{
            type: Input
        }], nzSize: [{
            type: Input
        }], nzHourStep: [{
            type: Input
        }], nzMinuteStep: [{
            type: Input
        }], nzSecondStep: [{
            type: Input
        }], nzClearText: [{
            type: Input
        }], nzNowText: [{
            type: Input
        }], nzOkText: [{
            type: Input
        }], nzPopupClassName: [{
            type: Input
        }], nzPlaceHolder: [{
            type: Input
        }], nzFormat: [{
            type: Input
        }], nzOpen: [{
            type: Input
        }], nzUse12Hours: [{
            type: Input
        }], nzSuffixIcon: [{
            type: Input
        }], nzOpenChange: [{
            type: Output
        }], nzHideDisabledOptions: [{
            type: Input
        }], nzAllowEmpty: [{
            type: Input
        }], nzDisabled: [{
            type: Input
        }], nzAutoFocus: [{
            type: Input
        }], nzBackdrop: [{
            type: Input
        }], inputRef: [{
            type: ViewChild,
            args: ['inputElement', { static: true }]
        }], nzAddOn: [{
            type: Input
        }], nzDefaultOpenValue: [{
            type: Input
        }], nzDisabledHours: [{
            type: Input
        }], nzDisabledMinutes: [{
            type: Input
        }], nzDisabledSeconds: [{
            type: Input
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZS1waWNrZXIuY29tcG9uZW50LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9jb21wb25lbnRzL3RpbWUtcGlja2VyL3RpbWUtcGlja2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxPQUFPLEVBQWEsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDOUQsT0FBTyxFQUFFLGdCQUFnQixFQUEwQixNQUFNLHNCQUFzQixDQUFDO0FBQ2hGLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNqRCxPQUFPLEVBRUwsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBSUwsUUFBUSxFQUNSLE1BQU0sRUFDTixTQUFTLEVBRVQsV0FBVyxFQUNYLFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3pFLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFDbkMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBRTNELE9BQU8sRUFBZSxlQUFlLEVBQUUsVUFBVSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDckYsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRWpELE9BQU8sRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDOUQsT0FBTyxFQUFFLGlCQUFpQixFQUFtQixhQUFhLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN2RixPQUFPLEVBQWMsRUFBRSxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQyxPQUFPLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFD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O0FBQzNDO0FBQWEsSUFBNUIsWUFBWSxFQUFFO0FBQUU7QUFDVCx5REFEMkI7QUFDbkI7QUFBYSxJQUE1QixZQUFZLEVBQUU7QUFBRTtBQUNWLDBEQUQ2QjtBQUN0QjtBQUFhLElBQTFCLFVBQVUsRUFBRTtBQUFFO0FBRVIseURBRjBCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQUM1QztBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHsgRGlyZWN0aW9uLCBEaXJlY3Rpb25hbGl0eSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9iaWRpJztcbmltcG9ydCB7IENka092ZXJsYXlPcmlnaW4sIENvbm5lY3Rpb25Qb3NpdGlvblBhaXIgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XG5pbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wbGF0Zm9ybSc7XG5pbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3B0aW9uYWwsXG4gIE91dHB1dCxcbiAgUmVuZGVyZXIyLFxuICBTaW1wbGVDaGFuZ2VzLFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0NoaWxkLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IGlzVmFsaWQgfSBmcm9tICdkYXRlLWZucyc7XG5pbXBvcnQgeyBzbGlkZU1vdGlvbiB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9hbmltYXRpb24nO1xuXG5pbXBvcnQgeyBOekNvbmZpZ0tleSwgTnpDb25maWdTZXJ2aWNlLCBXaXRoQ29uZmlnIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL2NvbmZpZyc7XG5pbXBvcnQgeyB3YXJuIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL2xvZ2dlcic7XG5pbXBvcnQgeyBCb29sZWFuSW5wdXQsIE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4sIGlzTmlsIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3V0aWwnO1xuaW1wb3J0IHsgRGF0ZUhlbHBlclNlcnZpY2UsIE56STE4bkludGVyZmFjZSwgTnpJMThuU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaTE4bic7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmNvbnN0IE5aX0NPTkZJR19NT0RVTEVfTkFNRTogTnpDb25maWdLZXkgPSAndGltZVBpY2tlcic7XG5cbkBDb21wb25lbnQoe1xuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgc2VsZWN0b3I6ICduei10aW1lLXBpY2tlcicsXG4gIGV4cG9ydEFzOiAnbnpUaW1lUGlja2VyJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IGNsYXNzPVwiYW50LXBpY2tlci1pbnB1dFwiPlxuICAgICAgPGlucHV0XG4gICAgICAgICNpbnB1dEVsZW1lbnRcbiAgICAgICAgW2F0dHIuaWRdPVwibnpJZFwiXG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgW3NpemVdPVwiaW5wdXRTaXplXCJcbiAgICAgICAgW3BsYWNlaG9sZGVyXT1cIm56UGxhY2VIb2xkZXIgfHwgKGkxOG5QbGFjZUhvbGRlciQgfCBhc3luYylcIlxuICAgICAgICBbKG5nTW9kZWwpXT1cImlucHV0VmFsdWVcIlxuICAgICAgICBbZGlzYWJsZWRdPVwibnpEaXNhYmxlZFwiXG4gICAgICAgIChmb2N1cyk9XCJvbkZvY3VzKHRydWUpXCJcbiAgICAgICAgKGJsdXIpPVwib25Gb2N1cyhmYWxzZSlcIlxuICAgICAgICAoa2V5dXAuZW50ZXIpPVwib25LZXl1cEVudGVyKClcIlxuICAgICAgICAoa2V5dXAuZXNjYXBlKT1cIm9uS2V5dXBFc2MoKVwiXG4gICAgICAgIChuZ01vZGVsQ2hhbmdlKT1cIm9uSW5wdXRDaGFuZ2UoJGV2ZW50KVwiXG4gICAgICAvPlxuICAgICAgPHNwYW4gY2xhc3M9XCJhbnQtcGlja2VyLXN1ZmZpeFwiPlxuICAgICAgICA8bmctY29udGFpbmVyICpuelN0cmluZ1RlbXBsYXRlT3V0bGV0PVwibnpTdWZmaXhJY29uOyBsZXQgc3VmZml4SWNvblwiPlxuICAgICAgICAgIDxpIG56LWljb24gW256VHlwZV09XCJzdWZmaXhJY29uXCI+PC9pPlxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgIDwvc3Bhbj5cbiAgICAgIDxzcGFuICpuZ0lmPVwibnpBbGxvd0VtcHR5ICYmICFuekRpc2FibGVkICYmIHZhbHVlXCIgY2xhc3M9XCJhbnQtcGlja2VyLWNsZWFyXCIgKGNsaWNrKT1cIm9uQ2xpY2tDbGVhckJ0bigkZXZlbnQpXCI+XG4gICAgICAgIDxpIG56LWljb24gbnpUeXBlPVwiY2xvc2UtY2lyY2xlXCIgbnpUaGVtZT1cImZpbGxcIiBbYXR0ci5hcmlhLWxhYmVsXT1cIm56Q2xlYXJUZXh0XCIgW2F0dHIudGl0bGVdPVwibnpDbGVhclRleHRcIj48L2k+XG4gICAgICA8L3NwYW4+XG4gICAgPC9kaXY+XG5cbiAgICA8bmctdGVtcGxhdGVcbiAgICAgIGNka0Nvbm5lY3RlZE92ZXJsYXlcbiAgICAgIG56Q29ubmVjdGVkT3ZlcmxheVxuICAgICAgW2Nka0Nvbm5lY3RlZE92ZXJsYXlIYXNCYWNrZHJvcF09XCJuekJhY2tkcm9wXCJcbiAgICAgIFtjZGtDb25uZWN0ZWRPdmVybGF5UG9zaXRpb25zXT1cIm92ZXJsYXlQb3NpdGlvbnNcIlxuICAgICAgW2Nka0Nvbm5lY3RlZE92ZXJsYXlPcmlnaW5dPVwib3JpZ2luXCJcbiAgICAgIFtjZGtDb25uZWN0ZWRPdmVybGF5T3Blbl09XCJuek9wZW5cIlxuICAgICAgW2Nka0Nvbm5lY3RlZE92ZXJsYXlPZmZzZXRZXT1cIi0yXCJcbiAgICAgIFtjZGtDb25uZWN0ZWRPdmVybGF5VHJhbnNmb3JtT3JpZ2luT25dPVwiJy5hbnQtcGlja2VyLWRyb3Bkb3duJ1wiXG4gICAgICAoZGV0YWNoKT1cImNsb3NlKClcIlxuICAgICAgKG92ZXJsYXlPdXRzaWRlQ2xpY2spPVwib25DbGlja091dHNpZGUoJGV2ZW50KVwiXG4gICAgPlxuICAgICAgPGRpdiBbQHNsaWRlTW90aW9uXT1cIidlbnRlcidcIiBjbGFzcz1cImFudC1waWNrZXItZHJvcGRvd25cIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImFudC1waWNrZXItcGFuZWwtY29udGFpbmVyXCI+XG4gICAgICAgICAgPGRpdiB0YWJpbmRleD1cIi0xXCIgY2xhc3M9XCJhbnQtcGlja2VyLXBhbmVsXCI+XG4gICAgICAgICAgICA8bnotdGltZS1waWNrZXItcGFuZWxcbiAgICAgICAgICAgICAgW25nQ2xhc3NdPVwibnpQb3B1cENsYXNzTmFtZVwiXG4gICAgICAgICAgICAgIFtmb3JtYXRdPVwibnpGb3JtYXRcIlxuICAgICAgICAgICAgICBbbnpIb3VyU3RlcF09XCJuekhvdXJTdGVwXCJcbiAgICAgICAgICAgICAgW256TWludXRlU3RlcF09XCJuek1pbnV0ZVN0ZXBcIlxuICAgICAgICAgICAgICBbbnpTZWNvbmRTdGVwXT1cIm56U2Vjb25kU3RlcFwiXG4gICAgICAgICAgICAgIFtuekRpc2FibGVkSG91cnNdPVwibnpEaXNhYmxlZEhvdXJzXCJcbiAgICAgICAgICAgICAgW256RGlzYWJsZWRNaW51dGVzXT1cIm56RGlzYWJsZWRNaW51dGVzXCJcbiAgICAgICAgICAgICAgW256RGlzYWJsZWRTZWNvbmRzXT1cIm56RGlzYWJsZWRTZWNvbmRzXCJcbiAgICAgICAgICAgICAgW256UGxhY2VIb2xkZXJdPVwibnpQbGFjZUhvbGRlciB8fCAoaTE4blBsYWNlSG9sZGVyJCB8IGFzeW5jKVwiXG4gICAgICAgICAgICAgIFtuekhpZGVEaXNhYmxlZE9wdGlvbnNdPVwibnpIaWRlRGlzYWJsZWRPcHRpb25zXCJcbiAgICAgICAgICAgICAgW256VXNlMTJIb3Vyc109XCJuelVzZTEySG91cnNcIlxuICAgICAgICAgICAgICBbbnpEZWZhdWx0T3BlblZhbHVlXT1cIm56RGVmYXVsdE9wZW5WYWx1ZVwiXG4gICAgICAgICAgICAgIFtuekFkZE9uXT1cIm56QWRkT25cIlxuICAgICAgICAgICAgICBbbnpDbGVhclRleHRdPVwibnpDbGVhclRleHRcIlxuICAgICAgICAgICAgICBbbnpOb3dUZXh0XT1cIm56Tm93VGV4dFwiXG4gICAgICAgICAgICAgIFtuek9rVGV4dF09XCJuek9rVGV4dFwiXG4gICAgICAgICAgICAgIFtuekFsbG93RW1wdHldPVwibnpBbGxvd0VtcHR5XCJcbiAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJ2YWx1ZVwiXG4gICAgICAgICAgICAgIChuZ01vZGVsQ2hhbmdlKT1cIm9uUGFuZWxWYWx1ZUNoYW5nZSgkZXZlbnQpXCJcbiAgICAgICAgICAgICAgKGNsb3NlUGFuZWwpPVwic2V0Q3VycmVudFZhbHVlQW5kQ2xvc2UoKVwiXG4gICAgICAgICAgICA+PC9uei10aW1lLXBpY2tlci1wYW5lbD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L25nLXRlbXBsYXRlPlxuICBgLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5hbnQtcGlja2VyLWxhcmdlXSc6IGBuelNpemUgPT09ICdsYXJnZSdgLFxuICAgICdbY2xhc3MuYW50LXBpY2tlci1zbWFsbF0nOiBgbnpTaXplID09PSAnc21hbGwnYCxcbiAgICAnW2NsYXNzLmFudC1waWNrZXItZGlzYWJsZWRdJzogYG56RGlzYWJsZWRgLFxuICAgICdbY2xhc3MuYW50LXBpY2tlci1mb2N1c2VkXSc6IGBmb2N1c2VkYCxcbiAgICAnW2NsYXNzLmFudC1waWNrZXItcnRsXSc6IGBkaXIgPT09ICdydGwnYCxcbiAgICAnKGNsaWNrKSc6ICdvcGVuKCknXG4gIH0sXG4gIGFuaW1hdGlvbnM6IFtzbGlkZU1vdGlvbl0sXG4gIHByb3ZpZGVyczogW3sgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsIHVzZUV4aXN0aW5nOiBOelRpbWVQaWNrZXJDb21wb25lbnQsIG11bHRpOiB0cnVlIH1dXG59KVxuZXhwb3J0IGNsYXNzIE56VGltZVBpY2tlckNvbXBvbmVudCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBPbkluaXQsIEFmdGVyVmlld0luaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcbiAgcmVhZG9ubHkgX256TW9kdWxlTmFtZTogTnpDb25maWdLZXkgPSBOWl9DT05GSUdfTU9EVUxFX05BTUU7XG5cbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX256VXNlMTJIb3VyczogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbnpIaWRlRGlzYWJsZWRPcHRpb25zOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9uekFsbG93RW1wdHk6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX256RGlzYWJsZWQ6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX256QXV0b0ZvY3VzOiBCb29sZWFuSW5wdXQ7XG5cbiAgcHJpdmF0ZSBfb25DaGFuZ2U/OiAodmFsdWU6IERhdGUgfCBudWxsKSA9PiB2b2lkO1xuICBwcml2YXRlIF9vblRvdWNoZWQ/OiAoKSA9PiB2b2lkO1xuICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcbiAgaXNJbml0ID0gZmFsc2U7XG4gIGZvY3VzZWQgPSBmYWxzZTtcbiAgaW5wdXRWYWx1ZTogc3RyaW5nID0gJyc7XG4gIHZhbHVlOiBEYXRlIHwgbnVsbCA9IG51bGw7XG4gIHByZVZhbHVlOiBEYXRlIHwgbnVsbCA9IG51bGw7XG4gIG9yaWdpbiE6IENka092ZXJsYXlPcmlnaW47XG4gIGlucHV0U2l6ZT86IG51bWJlcjtcbiAgaTE4blBsYWNlSG9sZGVyJDogT2JzZXJ2YWJsZTxzdHJpbmcgfCB1bmRlZmluZWQ+ID0gb2YodW5kZWZpbmVkKTtcbiAgb3ZlcmxheVBvc2l0aW9uczogQ29ubmVjdGlvblBvc2l0aW9uUGFpcltdID0gW1xuICAgIHtcbiAgICAgIG9yaWdpblg6ICdzdGFydCcsXG4gICAgICBvcmlnaW5ZOiAnYm90dG9tJyxcbiAgICAgIG92ZXJsYXlYOiAnc3RhcnQnLFxuICAgICAgb3ZlcmxheVk6ICd0b3AnLFxuICAgICAgb2Zmc2V0WTogM1xuICAgIH1cbiAgXTtcbiAgZGlyOiBEaXJlY3Rpb24gPSAnbHRyJztcblxuICBAVmlld0NoaWxkKCdpbnB1dEVsZW1lbnQnLCB7IHN0YXRpYzogdHJ1ZSB9KSBpbnB1dFJlZiE6IEVsZW1lbnRSZWY8SFRNTElucHV0RWxlbWVudD47XG4gIEBJbnB1dCgpIG56SWQ6IHN0cmluZyB8IG51bGwgPSBudWxsO1xuICBASW5wdXQoKSBuelNpemU6IHN0cmluZyB8IG51bGwgPSBudWxsO1xuICBASW5wdXQoKSBAV2l0aENvbmZpZygpIG56SG91clN0ZXA6IG51bWJlciA9IDE7XG4gIEBJbnB1dCgpIEBXaXRoQ29uZmlnKCkgbnpNaW51dGVTdGVwOiBudW1iZXIgPSAxO1xuICBASW5wdXQoKSBAV2l0aENvbmZpZygpIG56U2Vjb25kU3RlcDogbnVtYmVyID0gMTtcbiAgQElucHV0KCkgQFdpdGhDb25maWcoKSBuekNsZWFyVGV4dDogc3RyaW5nID0gJ2NsZWFyJztcbiAgQElucHV0KCkgQFdpdGhDb25maWcoKSBuek5vd1RleHQ6IHN0cmluZyA9ICcnO1xuICBASW5wdXQoKSBAV2l0aENvbmZpZygpIG56T2tUZXh0OiBzdHJpbmcgPSAnJztcbiAgQElucHV0KCkgQFdpdGhDb25maWcoKSBuelBvcHVwQ2xhc3NOYW1lOiBzdHJpbmcgPSAnJztcbiAgQElucHV0KCkgbnpQbGFjZUhvbGRlciA9ICcnO1xuICBASW5wdXQoKSBuekFkZE9uPzogVGVtcGxhdGVSZWY8dm9pZD47XG4gIEBJbnB1dCgpIG56RGVmYXVsdE9wZW5WYWx1ZT86IERhdGU7XG4gIEBJbnB1dCgpIG56RGlzYWJsZWRIb3Vycz86ICgpID0+IG51bWJlcltdO1xuICBASW5wdXQoKSBuekRpc2FibGVkTWludXRlcz86IChob3VyOiBudW1iZXIpID0+IG51bWJlcltdO1xuICBASW5wdXQoKSBuekRpc2FibGVkU2Vjb25kcz86IChob3VyOiBudW1iZXIsIG1pbnV0ZTogbnVtYmVyKSA9PiBudW1iZXJbXTtcbiAgQElucHV0KCkgQFdpdGhDb25maWcoKSBuekZvcm1hdDogc3RyaW5nID0gJ0hIOm1tOnNzJztcbiAgQElucHV0KCkgbnpPcGVuID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBXaXRoQ29uZmlnKCkgQElucHV0Qm9vbGVhbigpIG56VXNlMTJIb3VyczogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBAV2l0aENvbmZpZygpIG56U3VmZml4SWNvbjogc3RyaW5nIHwgVGVtcGxhdGVSZWY8TnpTYWZlQW55PiA9ICdjbG9jay1jaXJjbGUnO1xuXG4gIEBPdXRwdXQoKSByZWFkb25seSBuek9wZW5DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG5cbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56SGlkZURpc2FibGVkT3B0aW9ucyA9IGZhbHNlO1xuICBASW5wdXQoKSBAV2l0aENvbmZpZygpIEBJbnB1dEJvb2xlYW4oKSBuekFsbG93RW1wdHk6IGJvb2xlYW4gPSB0cnVlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpEaXNhYmxlZCA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpBdXRvRm9jdXMgPSBmYWxzZTtcbiAgQElucHV0KCkgQFdpdGhDb25maWcoKSBuekJhY2tkcm9wID0gZmFsc2U7XG5cbiAgZW1pdFZhbHVlKHZhbHVlOiBEYXRlIHwgbnVsbCk6IHZvaWQge1xuICAgIHRoaXMuc2V0VmFsdWUodmFsdWUsIHRydWUpO1xuXG4gICAgaWYgKHRoaXMuX29uQ2hhbmdlKSB7XG4gICAgICB0aGlzLl9vbkNoYW5nZSh0aGlzLnZhbHVlKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fb25Ub3VjaGVkKSB7XG4gICAgICB0aGlzLl9vblRvdWNoZWQoKTtcbiAgICB9XG4gIH1cblxuICBzZXRWYWx1ZSh2YWx1ZTogRGF0ZSB8IG51bGwsIHN5bmNQcmVWYWx1ZTogYm9vbGVhbiA9IGZhbHNlKTogdm9pZCB7XG4gICAgaWYgKHN5bmNQcmVWYWx1ZSkge1xuICAgICAgdGhpcy5wcmVWYWx1ZSA9IGlzVmFsaWQodmFsdWUpID8gbmV3IERhdGUodmFsdWUhKSA6IG51bGw7XG4gICAgfVxuICAgIHRoaXMudmFsdWUgPSBpc1ZhbGlkKHZhbHVlKSA/IG5ldyBEYXRlKHZhbHVlISkgOiBudWxsO1xuICAgIHRoaXMuaW5wdXRWYWx1ZSA9IHRoaXMuZGF0ZUhlbHBlci5mb3JtYXQodmFsdWUsIHRoaXMubnpGb3JtYXQpO1xuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgb3BlbigpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5uekRpc2FibGVkIHx8IHRoaXMubnpPcGVuKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuZm9jdXMoKTtcbiAgICB0aGlzLm56T3BlbiA9IHRydWU7XG4gICAgdGhpcy5uek9wZW5DaGFuZ2UuZW1pdCh0aGlzLm56T3Blbik7XG4gIH1cblxuICBjbG9zZSgpOiB2b2lkIHtcbiAgICB0aGlzLm56T3BlbiA9IGZhbHNlO1xuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICAgIHRoaXMubnpPcGVuQ2hhbmdlLmVtaXQodGhpcy5uek9wZW4pO1xuICB9XG5cbiAgdXBkYXRlQXV0b0ZvY3VzKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmlzSW5pdCAmJiAhdGhpcy5uekRpc2FibGVkKSB7XG4gICAgICBpZiAodGhpcy5uekF1dG9Gb2N1cykge1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZSh0aGlzLmlucHV0UmVmLm5hdGl2ZUVsZW1lbnQsICdhdXRvZm9jdXMnLCAnYXV0b2ZvY3VzJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUF0dHJpYnV0ZSh0aGlzLmlucHV0UmVmLm5hdGl2ZUVsZW1lbnQsICdhdXRvZm9jdXMnKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBvbkNsaWNrQ2xlYXJCdG4oZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB0aGlzLmVtaXRWYWx1ZShudWxsKTtcbiAgfVxuXG4gIG9uQ2xpY2tPdXRzaWRlKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5jb250YWlucyhldmVudC50YXJnZXQpKSB7XG4gICAgICB0aGlzLnNldEN1cnJlbnRWYWx1ZUFuZENsb3NlKCk7XG4gICAgfVxuICB9XG5cbiAgb25Gb2N1cyh2YWx1ZTogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuZm9jdXNlZCA9IHZhbHVlO1xuICB9XG5cbiAgZm9jdXMoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaW5wdXRSZWYubmF0aXZlRWxlbWVudCkge1xuICAgICAgdGhpcy5pbnB1dFJlZi5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgfVxuICB9XG5cbiAgYmx1cigpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pbnB1dFJlZi5uYXRpdmVFbGVtZW50KSB7XG4gICAgICB0aGlzLmlucHV0UmVmLm5hdGl2ZUVsZW1lbnQuYmx1cigpO1xuICAgIH1cbiAgfVxuXG4gIG9uS2V5dXBFc2MoKTogdm9pZCB7XG4gICAgdGhpcy5zZXRWYWx1ZSh0aGlzLnByZVZhbHVlKTtcbiAgfVxuXG4gIG9uS2V5dXBFbnRlcigpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5uek9wZW4gJiYgaXNWYWxpZCh0aGlzLnZhbHVlKSkge1xuICAgICAgdGhpcy5zZXRDdXJyZW50VmFsdWVBbmRDbG9zZSgpO1xuICAgIH0gZWxzZSBpZiAoIXRoaXMubnpPcGVuKSB7XG4gICAgICB0aGlzLm9wZW4oKTtcbiAgICB9XG4gIH1cblxuICBvbklucHV0Q2hhbmdlKHN0cjogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLnBsYXRmb3JtLlRSSURFTlQgJiYgZG9jdW1lbnQuYWN0aXZlRWxlbWVudCA9PT0gdGhpcy5pbnB1dFJlZi5uYXRpdmVFbGVtZW50KSB7XG4gICAgICB0aGlzLm9wZW4oKTtcbiAgICAgIHRoaXMucGFyc2VUaW1lU3RyaW5nKHN0cik7XG4gICAgfVxuICB9XG5cbiAgb25QYW5lbFZhbHVlQ2hhbmdlKHZhbHVlOiBEYXRlKTogdm9pZCB7XG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSk7XG4gICAgdGhpcy5mb2N1cygpO1xuICB9XG5cbiAgc2V0Q3VycmVudFZhbHVlQW5kQ2xvc2UoKTogdm9pZCB7XG4gICAgdGhpcy5lbWl0VmFsdWUodGhpcy52YWx1ZSk7XG4gICAgdGhpcy5jbG9zZSgpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIG56Q29uZmlnU2VydmljZTogTnpDb25maWdTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBpMThuOiBOekkxOG5TZXJ2aWNlLFxuICAgIHByaXZhdGUgZWxlbWVudDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByaXZhdGUgZGF0ZUhlbHBlcjogRGF0ZUhlbHBlclNlcnZpY2UsXG4gICAgcHJpdmF0ZSBwbGF0Zm9ybTogUGxhdGZvcm0sXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgZGlyZWN0aW9uYWxpdHk6IERpcmVjdGlvbmFsaXR5XG4gICkge1xuICAgIC8vIFRPRE86IG1vdmUgdG8gaG9zdCBhZnRlciBWaWV3IEVuZ2luZSBkZXByZWNhdGlvblxuICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2FudC1waWNrZXInKTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuaW5wdXRTaXplID0gTWF0aC5tYXgoOCwgdGhpcy5uekZvcm1hdC5sZW5ndGgpICsgMjtcbiAgICB0aGlzLm9yaWdpbiA9IG5ldyBDZGtPdmVybGF5T3JpZ2luKHRoaXMuZWxlbWVudCk7XG5cbiAgICB0aGlzLmkxOG5QbGFjZUhvbGRlciQgPSB0aGlzLmkxOG4ubG9jYWxlQ2hhbmdlLnBpcGUobWFwKChuekxvY2FsZTogTnpJMThuSW50ZXJmYWNlKSA9PiBuekxvY2FsZS5UaW1lUGlja2VyLnBsYWNlaG9sZGVyKSk7XG5cbiAgICB0aGlzLmRpciA9IHRoaXMuZGlyZWN0aW9uYWxpdHkudmFsdWU7XG4gICAgdGhpcy5kaXJlY3Rpb25hbGl0eS5jaGFuZ2U/LnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoKGRpcmVjdGlvbjogRGlyZWN0aW9uKSA9PiB7XG4gICAgICB0aGlzLmRpciA9IGRpcmVjdGlvbjtcbiAgICB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBjb25zdCB7IG56VXNlMTJIb3VycywgbnpGb3JtYXQsIG56RGlzYWJsZWQsIG56QXV0b0ZvY3VzIH0gPSBjaGFuZ2VzO1xuICAgIGlmIChuelVzZTEySG91cnMgJiYgIW56VXNlMTJIb3Vycy5wcmV2aW91c1ZhbHVlICYmIG56VXNlMTJIb3Vycy5jdXJyZW50VmFsdWUgJiYgIW56Rm9ybWF0KSB7XG4gICAgICB0aGlzLm56Rm9ybWF0ID0gJ2g6bW06c3MgYSc7XG4gICAgfVxuICAgIGlmIChuekRpc2FibGVkKSB7XG4gICAgICBjb25zdCB2YWx1ZSA9IG56RGlzYWJsZWQuY3VycmVudFZhbHVlO1xuICAgICAgY29uc3QgaW5wdXQgPSB0aGlzLmlucHV0UmVmLm5hdGl2ZUVsZW1lbnQgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZShpbnB1dCwgJ2Rpc2FibGVkJywgJycpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVBdHRyaWJ1dGUoaW5wdXQsICdkaXNhYmxlZCcpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAobnpBdXRvRm9jdXMpIHtcbiAgICAgIHRoaXMudXBkYXRlQXV0b0ZvY3VzKCk7XG4gICAgfVxuICB9XG5cbiAgcGFyc2VUaW1lU3RyaW5nKHN0cjogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmRhdGVIZWxwZXIucGFyc2VUaW1lKHN0ciwgdGhpcy5uekZvcm1hdCkgfHwgbnVsbDtcbiAgICBpZiAoaXNWYWxpZCh2YWx1ZSkpIHtcbiAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmlzSW5pdCA9IHRydWU7XG4gICAgdGhpcy51cGRhdGVBdXRvRm9jdXMoKTtcbiAgfVxuXG4gIHdyaXRlVmFsdWUodGltZTogRGF0ZSB8IG51bGwgfCB1bmRlZmluZWQpOiB2b2lkIHtcbiAgICBsZXQgcmVzdWx0OiBEYXRlIHwgbnVsbDtcblxuICAgIGlmICh0aW1lIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgcmVzdWx0ID0gdGltZTtcbiAgICB9IGVsc2UgaWYgKGlzTmlsKHRpbWUpKSB7XG4gICAgICByZXN1bHQgPSBudWxsO1xuICAgIH0gZWxzZSB7XG4gICAgICB3YXJuKCdOb24tRGF0ZSB0eXBlIGlzIG5vdCByZWNvbW1lbmRlZCBmb3IgdGltZS1waWNrZXIsIHVzZSBcIkRhdGVcIiB0eXBlLicpO1xuICAgICAgcmVzdWx0ID0gbmV3IERhdGUodGltZSk7XG4gICAgfVxuXG4gICAgdGhpcy5zZXRWYWx1ZShyZXN1bHQsIHRydWUpO1xuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKHRpbWU6IERhdGUgfCBudWxsKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgdGhpcy5fb25DaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgdGhpcy5fb25Ub3VjaGVkID0gZm47XG4gIH1cblxuICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLm56RGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICB9XG59XG4iXX0=