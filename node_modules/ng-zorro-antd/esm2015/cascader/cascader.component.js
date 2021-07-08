/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { __decorate, __metadata } from "tslib";
import { Directionality } from '@angular/cdk/bidi';
import { BACKSPACE, DOWN_ARROW, ENTER, ESCAPE, LEFT_ARROW, RIGHT_ARROW, UP_ARROW } from '@angular/cdk/keycodes';
import { CdkConnectedOverlay } from '@angular/cdk/overlay';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, forwardRef, Host, HostListener, Input, Optional, Output, QueryList, Renderer2, ViewChild, ViewChildren, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { slideMotion } from 'ng-zorro-antd/core/animation';
import { NzConfigService, WithConfig } from 'ng-zorro-antd/core/config';
import { NzNoAnimationDirective } from 'ng-zorro-antd/core/no-animation';
import { DEFAULT_CASCADER_POSITIONS } from 'ng-zorro-antd/core/overlay';
import { InputBoolean, toArray } from 'ng-zorro-antd/core/util';
import { NzI18nService } from 'ng-zorro-antd/i18n';
import { Subject } from 'rxjs';
import { startWith, takeUntil } from 'rxjs/operators';
import { NzCascaderOptionComponent } from './cascader-li.component';
import { NzCascaderService } from './cascader.service';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from './cascader.service';
import * as ɵngcc2 from 'ng-zorro-antd/core/config';
import * as ɵngcc3 from 'ng-zorro-antd/i18n';
import * as ɵngcc4 from '@angular/cdk/bidi';
import * as ɵngcc5 from 'ng-zorro-antd/core/no-animation';
import * as ɵngcc6 from '@angular/cdk/overlay';
import * as ɵngcc7 from '@angular/common';
import * as ɵngcc8 from 'ng-zorro-antd/core/overlay';
import * as ɵngcc9 from 'ng-zorro-antd/input';
import * as ɵngcc10 from '@angular/forms';
import * as ɵngcc11 from 'ng-zorro-antd/core/outlet';
import * as ɵngcc12 from 'ng-zorro-antd/icon';
import * as ɵngcc13 from 'ng-zorro-antd/empty';
import * as ɵngcc14 from './cascader-li.component';

const _c0 = ["input"];
const _c1 = ["menu"];
function NzCascaderComponent_div_3_i_3_Template(rf, ctx) { if (rf & 1) {
    const _r12 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "i", 12);
    ɵngcc0.ɵɵlistener("click", function NzCascaderComponent_div_3_i_3_Template_i_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r12); const ctx_r11 = ɵngcc0.ɵɵnextContext(2); return ctx_r11.clearSelection($event); });
    ɵngcc0.ɵɵelementEnd();
} }
function NzCascaderComponent_div_3_ng_container_4_i_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "i", 14);
} if (rf & 2) {
    const ctx_r13 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵclassProp("ant-cascader-picker-arrow-expand", ctx_r13.menuVisible);
    ɵngcc0.ɵɵproperty("nzType", ctx_r13.nzSuffixIcon);
} }
function NzCascaderComponent_div_3_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, NzCascaderComponent_div_3_ng_container_4_i_1_Template, 1, 3, "i", 13);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r6 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r6.nzShowArrow && !ctx_r6.isLoading);
} }
function NzCascaderComponent_div_3_i_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "i", 15);
} }
function NzCascaderComponent_div_3_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r8 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r8.labelRenderText);
} }
function NzCascaderComponent_div_3_ng_template_8_ng_template_0_Template(rf, ctx) { }
function NzCascaderComponent_div_3_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, NzCascaderComponent_div_3_ng_template_8_ng_template_0_Template, 0, 0, "ng-template", 16);
} if (rf & 2) {
    const ctx_r10 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r10.nzLabelRender)("ngTemplateOutletContext", ctx_r10.labelRenderContext);
} }
function NzCascaderComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r16 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div");
    ɵngcc0.ɵɵelementStart(1, "input", 4, 5);
    ɵngcc0.ɵɵlistener("ngModelChange", function NzCascaderComponent_div_3_Template_input_ngModelChange_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r16); const ctx_r15 = ɵngcc0.ɵɵnextContext(); return ctx_r15.inputValue = $event; })("blur", function NzCascaderComponent_div_3_Template_input_blur_1_listener() { ɵngcc0.ɵɵrestoreView(_r16); const ctx_r17 = ɵngcc0.ɵɵnextContext(); return ctx_r17.handleInputBlur(); })("focus", function NzCascaderComponent_div_3_Template_input_focus_1_listener() { ɵngcc0.ɵɵrestoreView(_r16); const ctx_r18 = ɵngcc0.ɵɵnextContext(); return ctx_r18.handleInputFocus(); })("change", function NzCascaderComponent_div_3_Template_input_change_1_listener($event) { return $event.stopPropagation(); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(3, NzCascaderComponent_div_3_i_3_Template, 1, 0, "i", 6);
    ɵngcc0.ɵɵtemplate(4, NzCascaderComponent_div_3_ng_container_4_Template, 2, 1, "ng-container", 7);
    ɵngcc0.ɵɵtemplate(5, NzCascaderComponent_div_3_i_5_Template, 1, 0, "i", 8);
    ɵngcc0.ɵɵelementStart(6, "span", 9);
    ɵngcc0.ɵɵtemplate(7, NzCascaderComponent_div_3_ng_container_7_Template, 2, 1, "ng-container", 10);
    ɵngcc0.ɵɵtemplate(8, NzCascaderComponent_div_3_ng_template_8_Template, 1, 2, "ng-template", null, 11, ɵngcc0.ɵɵtemplateRefExtractor);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const _r9 = ɵngcc0.ɵɵreference(9);
    const ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassProp("ant-cascader-input-disabled", ctx_r2.nzDisabled)("ant-cascader-input-lg", ctx_r2.nzSize === "large")("ant-cascader-input-sm", ctx_r2.nzSize === "small");
    ɵngcc0.ɵɵproperty("readonly", !ctx_r2.nzShowSearch)("disabled", ctx_r2.nzDisabled)("nzSize", ctx_r2.nzSize)("ngModel", ctx_r2.inputValue);
    ɵngcc0.ɵɵattribute("autoComplete", "off")("placeholder", ctx_r2.showPlaceholder ? ctx_r2.nzPlaceHolder || (ctx_r2.locale == null ? null : ctx_r2.locale.placeholder) : null)("autofocus", ctx_r2.nzAutoFocus ? "autofocus" : null);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r2.clearIconVisible);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("nzStringTemplateOutlet", ctx_r2.nzSuffixIcon);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r2.isLoading);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassProp("ant-cascader-picker-show-search", !!ctx_r2.nzShowSearch)("ant-cascader-picker-focused", !!ctx_r2.nzShowSearch && ctx_r2.isFocused && !ctx_r2.inputValue);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r2.isLabelRenderTemplate)("ngIfElse", _r9);
} }
function NzCascaderComponent_ng_template_5_ul_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "ul", 21);
    ɵngcc0.ɵɵelementStart(1, "li", 22);
    ɵngcc0.ɵɵelement(2, "nz-embed-empty", 23);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r21 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵstyleProp("width", ctx_r21.dropdownWidthStyle)("height", ctx_r21.dropdownHeightStyle);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("nzComponentName", "cascader")("specificContent", ctx_r21.nzNotFoundContent);
} }
function NzCascaderComponent_ng_template_5_ng_template_3_ul_0_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r31 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "li", 27);
    ɵngcc0.ɵɵlistener("mouseenter", function NzCascaderComponent_ng_template_5_ng_template_3_ul_0_li_1_Template_li_mouseenter_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r31); const option_r28 = ctx.$implicit; const i_r26 = ɵngcc0.ɵɵnextContext().index; const ctx_r29 = ɵngcc0.ɵɵnextContext(3); return ctx_r29.onOptionMouseEnter(option_r28, i_r26, $event); })("mouseleave", function NzCascaderComponent_ng_template_5_ng_template_3_ul_0_li_1_Template_li_mouseleave_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r31); const option_r28 = ctx.$implicit; const i_r26 = ɵngcc0.ɵɵnextContext().index; const ctx_r32 = ɵngcc0.ɵɵnextContext(3); return ctx_r32.onOptionMouseLeave(option_r28, i_r26, $event); })("click", function NzCascaderComponent_ng_template_5_ng_template_3_ul_0_li_1_Template_li_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r31); const option_r28 = ctx.$implicit; const i_r26 = ɵngcc0.ɵɵnextContext().index; const ctx_r34 = ɵngcc0.ɵɵnextContext(3); return ctx_r34.onOptionClick(option_r28, i_r26, $event); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r28 = ctx.$implicit;
    const i_r26 = ɵngcc0.ɵɵnextContext().index;
    const ctx_r27 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵproperty("expandIcon", ctx_r27.nzExpandIcon)("columnIndex", i_r26)("nzLabelProperty", ctx_r27.nzLabelProperty)("optionTemplate", ctx_r27.nzOptionRender)("activated", ctx_r27.isOptionActivated(option_r28, i_r26))("highlightText", ctx_r27.inSearchingMode ? ctx_r27.inputValue : "")("option", option_r28)("dir", ctx_r27.dir);
} }
function NzCascaderComponent_ng_template_5_ng_template_3_ul_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "ul", 25);
    ɵngcc0.ɵɵtemplate(1, NzCascaderComponent_ng_template_5_ng_template_3_ul_0_li_1_Template, 1, 8, "li", 26);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const options_r25 = ctx.$implicit;
    const ctx_r24 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵstyleProp("height", ctx_r24.dropdownHeightStyle)("width", ctx_r24.dropdownWidthStyle);
    ɵngcc0.ɵɵproperty("ngClass", ctx_r24.menuColumnCls);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", options_r25);
} }
function NzCascaderComponent_ng_template_5_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, NzCascaderComponent_ng_template_5_ng_template_3_ul_0_Template, 2, 6, "ul", 24);
} if (rf & 2) {
    const ctx_r23 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r23.cascaderService.columns);
} }
function NzCascaderComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    const _r38 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 17, 18);
    ɵngcc0.ɵɵlistener("mouseleave", function NzCascaderComponent_ng_template_5_Template_div_mouseleave_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r38); const ctx_r37 = ɵngcc0.ɵɵnextContext(); return ctx_r37.onTriggerMouseLeave($event); });
    ɵngcc0.ɵɵtemplate(2, NzCascaderComponent_ng_template_5_ul_2_Template, 3, 6, "ul", 19);
    ɵngcc0.ɵɵtemplate(3, NzCascaderComponent_ng_template_5_ng_template_3_Template, 1, 1, "ng-template", null, 20, ɵngcc0.ɵɵtemplateRefExtractor);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const _r22 = ɵngcc0.ɵɵreference(4);
    const ctx_r3 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassProp("ant-cascader-menu-rtl", ctx_r3.dir === "rtl")("ant-cascader-menus-hidden", !ctx_r3.menuVisible);
    ɵngcc0.ɵɵproperty("ngClass", ctx_r3.menuCls)("ngStyle", ctx_r3.nzMenuStyle)("@.disabled", ctx_r3.noAnimation == null ? null : ctx_r3.noAnimation.nzNoAnimation)("nzNoAnimation", ctx_r3.noAnimation == null ? null : ctx_r3.noAnimation.nzNoAnimation)("@slideMotion", "enter");
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r3.shouldShowEmpty)("ngIfElse", _r22);
} }
const _c2 = ["*"];
const NZ_CONFIG_MODULE_NAME = 'cascader';
const defaultDisplayRender = (labels) => labels.join(' / ');
const ɵ0 = defaultDisplayRender;
export class NzCascaderComponent {
    constructor(cascaderService, nzConfigService, cdr, i18nService, elementRef, renderer, directionality, noAnimation) {
        this.cascaderService = cascaderService;
        this.nzConfigService = nzConfigService;
        this.cdr = cdr;
        this.i18nService = i18nService;
        this.directionality = directionality;
        this.noAnimation = noAnimation;
        this._nzModuleName = NZ_CONFIG_MODULE_NAME;
        this.nzOptionRender = null;
        this.nzShowInput = true;
        this.nzShowArrow = true;
        this.nzAllowClear = true;
        this.nzAutoFocus = false;
        this.nzChangeOnSelect = false;
        this.nzDisabled = false;
        this.nzExpandTrigger = 'click';
        this.nzValueProperty = 'value';
        this.nzLabelRender = null;
        this.nzLabelProperty = 'label';
        this.nzSize = 'default';
        this.nzBackdrop = false;
        this.nzShowSearch = false;
        this.nzPlaceHolder = '';
        this.nzMenuStyle = null;
        this.nzMouseEnterDelay = 150; // ms
        this.nzMouseLeaveDelay = 150; // ms
        this.nzTriggerAction = ['click'];
        // TODO: RTL
        this.nzSuffixIcon = 'down';
        this.nzExpandIcon = '';
        this.nzVisibleChange = new EventEmitter();
        this.nzSelectionChange = new EventEmitter();
        this.nzSelect = new EventEmitter();
        this.nzClear = new EventEmitter();
        /**
         * If the dropdown should show the empty content.
         * `true` if there's no options.
         */
        this.shouldShowEmpty = false;
        this.menuVisible = false;
        this.isLoading = false;
        this.labelRenderContext = {};
        this.onChange = Function.prototype;
        this.onTouched = Function.prototype;
        this.positions = [...DEFAULT_CASCADER_POSITIONS];
        this.dropdownHeightStyle = '';
        this.isFocused = false;
        this.dir = 'ltr';
        this.destroy$ = new Subject();
        this.inputString = '';
        this.isOpening = false;
        this.delayMenuTimer = null;
        this.delaySelectTimer = null;
        this.el = elementRef.nativeElement;
        this.cascaderService.withComponent(this);
        renderer.addClass(elementRef.nativeElement, 'ant-cascader');
        renderer.addClass(elementRef.nativeElement, 'ant-cascader-picker');
    }
    get nzOptions() {
        return this.cascaderService.nzOptions;
    }
    set nzOptions(options) {
        this.cascaderService.withOptions(options);
    }
    get inSearchingMode() {
        return this.cascaderService.inSearchingMode;
    }
    set inputValue(inputValue) {
        this.inputString = inputValue;
        this.toggleSearchingMode(!!inputValue);
    }
    get inputValue() {
        return this.inputString;
    }
    get menuCls() {
        return { [`${this.nzMenuClassName}`]: !!this.nzMenuClassName };
    }
    get menuColumnCls() {
        return { [`${this.nzColumnClassName}`]: !!this.nzColumnClassName };
    }
    get hasInput() {
        return !!this.inputValue;
    }
    get hasValue() {
        return this.cascaderService.values && this.cascaderService.values.length > 0;
    }
    get showPlaceholder() {
        return !(this.hasInput || this.hasValue);
    }
    get clearIconVisible() {
        return this.nzAllowClear && !this.nzDisabled && (this.hasValue || this.hasInput);
    }
    get isLabelRenderTemplate() {
        return !!this.nzLabelRender;
    }
    ngOnInit() {
        var _a;
        const srv = this.cascaderService;
        srv.$redraw.pipe(takeUntil(this.destroy$)).subscribe(() => {
            // These operations would not mutate data.
            this.checkChildren();
            this.setDisplayLabel();
            this.reposition();
            this.setDropdownStyles();
            this.cdr.markForCheck();
        });
        srv.$loading.pipe(takeUntil(this.destroy$)).subscribe(loading => {
            this.isLoading = loading;
        });
        srv.$optionSelected.pipe(takeUntil(this.destroy$)).subscribe(data => {
            if (!data) {
                this.onChange([]);
                this.nzSelect.emit(null);
                this.nzSelectionChange.emit([]);
            }
            else {
                const { option, index } = data;
                const shouldClose = option.isLeaf || (this.nzChangeOnSelect && this.nzExpandTrigger === 'hover');
                if (shouldClose) {
                    this.delaySetMenuVisible(false);
                }
                this.onChange(this.cascaderService.values);
                this.nzSelectionChange.emit(this.cascaderService.selectedOptions);
                this.nzSelect.emit({ option, index });
                this.cdr.markForCheck();
            }
        });
        srv.$quitSearching.pipe(takeUntil(this.destroy$)).subscribe(() => {
            this.inputString = '';
            this.dropdownWidthStyle = '';
        });
        this.i18nService.localeChange.pipe(startWith(), takeUntil(this.destroy$)).subscribe(() => {
            this.setLocale();
        });
        this.nzConfigService
            .getConfigChangeEventForComponent(NZ_CONFIG_MODULE_NAME)
            .pipe(takeUntil(this.destroy$))
            .subscribe(() => {
            this.cdr.markForCheck();
        });
        this.dir = this.directionality.value;
        (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(takeUntil(this.destroy$)).subscribe(() => {
            this.dir = this.directionality.value;
            srv.$redraw.next();
        });
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
        this.clearDelayMenuTimer();
        this.clearDelaySelectTimer();
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    writeValue(value) {
        this.cascaderService.values = toArray(value);
        this.cascaderService.syncOptions(true);
    }
    delaySetMenuVisible(visible, delay = 100, setOpening = false) {
        this.clearDelayMenuTimer();
        if (delay) {
            if (visible && setOpening) {
                this.isOpening = true;
            }
            this.delayMenuTimer = setTimeout(() => {
                this.setMenuVisible(visible);
                this.cdr.detectChanges();
                this.clearDelayMenuTimer();
                if (visible) {
                    setTimeout(() => {
                        this.isOpening = false;
                    }, 100);
                }
            }, delay);
        }
        else {
            this.setMenuVisible(visible);
        }
    }
    setMenuVisible(visible) {
        if (this.nzDisabled || this.menuVisible === visible) {
            return;
        }
        if (visible) {
            this.cascaderService.syncOptions();
            this.scrollToActivatedOptions();
        }
        if (!visible) {
            this.inputValue = '';
        }
        this.menuVisible = visible;
        this.nzVisibleChange.emit(visible);
        this.cdr.detectChanges();
    }
    clearDelayMenuTimer() {
        if (this.delayMenuTimer) {
            clearTimeout(this.delayMenuTimer);
            this.delayMenuTimer = null;
        }
    }
    clearSelection(event) {
        if (event) {
            event.preventDefault();
            event.stopPropagation();
        }
        this.labelRenderText = '';
        this.labelRenderContext = {};
        this.inputValue = '';
        this.setMenuVisible(false);
        this.cascaderService.clear();
    }
    getSubmitValue() {
        return this.cascaderService.selectedOptions.map(o => this.cascaderService.getOptionValue(o));
    }
    focus() {
        if (!this.isFocused) {
            (this.input ? this.input.nativeElement : this.el).focus();
            this.isFocused = true;
        }
    }
    blur() {
        if (this.isFocused) {
            (this.input ? this.input.nativeElement : this.el).blur();
            this.isFocused = false;
        }
    }
    handleInputBlur() {
        this.menuVisible ? this.focus() : this.blur();
    }
    handleInputFocus() {
        this.focus();
    }
    onKeyDown(event) {
        const keyCode = event.keyCode;
        if (keyCode !== DOWN_ARROW &&
            keyCode !== UP_ARROW &&
            keyCode !== LEFT_ARROW &&
            keyCode !== RIGHT_ARROW &&
            keyCode !== ENTER &&
            keyCode !== BACKSPACE &&
            keyCode !== ESCAPE) {
            return;
        }
        // Press any keys above to reopen menu.
        if (!this.menuVisible && keyCode !== BACKSPACE && keyCode !== ESCAPE) {
            return this.setMenuVisible(true);
        }
        // Make these keys work as default in searching mode.
        if (this.inSearchingMode && (keyCode === BACKSPACE || keyCode === LEFT_ARROW || keyCode === RIGHT_ARROW)) {
            return;
        }
        // Interact with the component.
        if (this.menuVisible) {
            event.preventDefault();
            if (keyCode === DOWN_ARROW) {
                this.moveUpOrDown(false);
            }
            else if (keyCode === UP_ARROW) {
                this.moveUpOrDown(true);
            }
            else if (keyCode === LEFT_ARROW) {
                this.moveLeft();
            }
            else if (keyCode === RIGHT_ARROW) {
                this.moveRight();
            }
            else if (keyCode === ENTER) {
                this.onEnter();
            }
        }
    }
    onTriggerClick() {
        if (this.nzDisabled) {
            return;
        }
        if (this.nzShowSearch) {
            this.focus();
        }
        if (this.isActionTrigger('click')) {
            this.delaySetMenuVisible(!this.menuVisible, 100);
        }
        this.onTouched();
    }
    onTriggerMouseEnter() {
        if (this.nzDisabled || !this.isActionTrigger('hover')) {
            return;
        }
        this.delaySetMenuVisible(true, this.nzMouseEnterDelay, true);
    }
    onTriggerMouseLeave(event) {
        if (this.nzDisabled || !this.menuVisible || this.isOpening || !this.isActionTrigger('hover')) {
            event.preventDefault();
            return;
        }
        const mouseTarget = event.relatedTarget;
        const hostEl = this.el;
        const menuEl = this.menu && this.menu.nativeElement;
        if (hostEl.contains(mouseTarget) || (menuEl && menuEl.contains(mouseTarget))) {
            return;
        }
        this.delaySetMenuVisible(false, this.nzMouseLeaveDelay);
    }
    onOptionMouseEnter(option, columnIndex, event) {
        event.preventDefault();
        if (this.nzExpandTrigger === 'hover') {
            if (!option.isLeaf) {
                this.delaySetOptionActivated(option, columnIndex, false);
            }
            else {
                this.cascaderService.setOptionDeactivatedSinceColumn(columnIndex);
            }
        }
    }
    onOptionMouseLeave(option, _columnIndex, event) {
        event.preventDefault();
        if (this.nzExpandTrigger === 'hover' && !option.isLeaf) {
            this.clearDelaySelectTimer();
        }
    }
    onOptionClick(option, columnIndex, event) {
        if (event) {
            event.preventDefault();
        }
        if (option && option.disabled) {
            return;
        }
        this.el.focus();
        this.inSearchingMode
            ? this.cascaderService.setSearchOptionSelected(option)
            : this.cascaderService.setOptionActivated(option, columnIndex, true);
    }
    onClickOutside(event) {
        if (!this.el.contains(event.target)) {
            this.closeMenu();
        }
    }
    isActionTrigger(action) {
        return typeof this.nzTriggerAction === 'string' ? this.nzTriggerAction === action : this.nzTriggerAction.indexOf(action) !== -1;
    }
    onEnter() {
        const columnIndex = Math.max(this.cascaderService.activatedOptions.length - 1, 0);
        const option = this.cascaderService.activatedOptions[columnIndex];
        if (option && !option.disabled) {
            this.inSearchingMode
                ? this.cascaderService.setSearchOptionSelected(option)
                : this.cascaderService.setOptionActivated(option, columnIndex, true);
        }
    }
    moveUpOrDown(isUp) {
        const columnIndex = Math.max(this.cascaderService.activatedOptions.length - 1, 0);
        const activeOption = this.cascaderService.activatedOptions[columnIndex];
        const options = this.cascaderService.columns[columnIndex] || [];
        const length = options.length;
        let nextIndex = -1;
        if (!activeOption) {
            // Not selected options in this column
            nextIndex = isUp ? length : -1;
        }
        else {
            nextIndex = options.indexOf(activeOption);
        }
        while (true) {
            nextIndex = isUp ? nextIndex - 1 : nextIndex + 1;
            if (nextIndex < 0 || nextIndex >= length) {
                break;
            }
            const nextOption = options[nextIndex];
            if (!nextOption || nextOption.disabled) {
                continue;
            }
            this.cascaderService.setOptionActivated(nextOption, columnIndex);
            break;
        }
    }
    moveLeft() {
        const options = this.cascaderService.activatedOptions;
        if (options.length) {
            options.pop(); // Remove the last one
        }
    }
    moveRight() {
        const length = this.cascaderService.activatedOptions.length;
        const options = this.cascaderService.columns[length];
        if (options && options.length) {
            const nextOpt = options.find(o => !o.disabled);
            if (nextOpt) {
                this.cascaderService.setOptionActivated(nextOpt, length);
            }
        }
    }
    clearDelaySelectTimer() {
        if (this.delaySelectTimer) {
            clearTimeout(this.delaySelectTimer);
            this.delaySelectTimer = null;
        }
    }
    delaySetOptionActivated(option, columnIndex, performSelect) {
        this.clearDelaySelectTimer();
        this.delaySelectTimer = setTimeout(() => {
            this.cascaderService.setOptionActivated(option, columnIndex, performSelect);
            this.delaySelectTimer = null;
        }, 150);
    }
    toggleSearchingMode(toSearching) {
        if (this.inSearchingMode !== toSearching) {
            this.cascaderService.toggleSearchingMode(toSearching);
        }
        if (this.inSearchingMode) {
            this.cascaderService.prepareSearchOptions(this.inputValue);
        }
    }
    isOptionActivated(option, index) {
        const activeOpt = this.cascaderService.activatedOptions[index];
        return activeOpt === option;
    }
    setDisabledState(isDisabled) {
        if (isDisabled) {
            this.closeMenu();
        }
        this.nzDisabled = isDisabled;
    }
    closeMenu() {
        this.blur();
        this.clearDelayMenuTimer();
        this.setMenuVisible(false);
    }
    /**
     * Reposition the cascader panel. When a menu opens, the cascader expands
     * and may exceed the boundary of browser's window.
     */
    reposition() {
        if (this.overlay && this.overlay.overlayRef && this.menuVisible) {
            Promise.resolve().then(() => {
                this.overlay.overlayRef.updatePosition();
            });
        }
    }
    /**
     * When a cascader options is changed, a child needs to know that it should re-render.
     */
    checkChildren() {
        if (this.cascaderItems) {
            this.cascaderItems.forEach(item => item.markForCheck());
        }
    }
    setDisplayLabel() {
        const selectedOptions = this.cascaderService.selectedOptions;
        const labels = selectedOptions.map(o => this.cascaderService.getOptionLabel(o));
        if (this.isLabelRenderTemplate) {
            this.labelRenderContext = { labels, selectedOptions };
        }
        else {
            this.labelRenderText = defaultDisplayRender.call(this, labels);
        }
    }
    setDropdownStyles() {
        const firstColumn = this.cascaderService.columns[0];
        this.shouldShowEmpty =
            (this.inSearchingMode && (!firstColumn || !firstColumn.length)) || // Should show empty when there's no searching result
                (!(this.nzOptions && this.nzOptions.length) && !this.nzLoadData); // Should show when there's no options and developer does not use nzLoadData
        this.dropdownHeightStyle = this.shouldShowEmpty ? 'auto' : '';
        if (this.input) {
            this.dropdownWidthStyle = this.inSearchingMode || this.shouldShowEmpty ? `${this.input.nativeElement.offsetWidth}px` : '';
        }
    }
    setLocale() {
        this.locale = this.i18nService.getLocaleData('global');
        this.cdr.markForCheck();
    }
    scrollToActivatedOptions() {
        // scroll only until option menu view is ready
        Promise.resolve().then(() => {
            this.cascaderItems
                .toArray()
                .filter(e => e.activated)
                .forEach(e => {
                var _a;
                (_a = e.nativeElement) === null || _a === void 0 ? void 0 : _a.scrollIntoView({ block: 'start', inline: 'nearest' });
            });
        });
    }
}
NzCascaderComponent.ɵfac = function NzCascaderComponent_Factory(t) { return new (t || NzCascaderComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc1.NzCascaderService), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.NzConfigService), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc3.NzI18nService), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2), ɵngcc0.ɵɵdirectiveInject(ɵngcc4.Directionality, 8), ɵngcc0.ɵɵdirectiveInject(ɵngcc5.NzNoAnimationDirective, 9)); };
NzCascaderComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzCascaderComponent, selectors: [["nz-cascader"], ["", "nz-cascader", ""]], viewQuery: function NzCascaderComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c0, true);
        ɵngcc0.ɵɵviewQuery(_c1, true);
        ɵngcc0.ɵɵviewQuery(CdkConnectedOverlay, true);
        ɵngcc0.ɵɵviewQuery(NzCascaderOptionComponent, true);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.input = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.menu = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.overlay = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.cascaderItems = _t);
    } }, hostVars: 15, hostBindings: function NzCascaderComponent_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("keydown", function NzCascaderComponent_keydown_HostBindingHandler($event) { return ctx.onKeyDown($event); })("click", function NzCascaderComponent_click_HostBindingHandler() { return ctx.onTriggerClick(); })("mouseenter", function NzCascaderComponent_mouseenter_HostBindingHandler() { return ctx.onTriggerMouseEnter(); })("mouseleave", function NzCascaderComponent_mouseleave_HostBindingHandler($event) { return ctx.onTriggerMouseLeave($event); });
    } if (rf & 2) {
        ɵngcc0.ɵɵattribute("tabIndex", "0");
        ɵngcc0.ɵɵclassProp("ant-cascader-lg", ctx.nzSize === "large")("ant-cascader-sm", ctx.nzSize === "small")("ant-cascader-picker-disabled", ctx.nzDisabled)("ant-cascader-picker-open", ctx.menuVisible)("ant-cascader-picker-with-value", !!ctx.inputValue)("ant-cascader-focused", ctx.isFocused)("ant-cascader-picker-rtl", ctx.dir === "rtl");
    } }, inputs: { nzOptionRender: "nzOptionRender", nzShowInput: "nzShowInput", nzShowArrow: "nzShowArrow", nzAllowClear: "nzAllowClear", nzAutoFocus: "nzAutoFocus", nzChangeOnSelect: "nzChangeOnSelect", nzDisabled: "nzDisabled", nzExpandTrigger: "nzExpandTrigger", nzValueProperty: "nzValueProperty", nzLabelRender: "nzLabelRender", nzLabelProperty: "nzLabelProperty", nzSize: "nzSize", nzBackdrop: "nzBackdrop", nzShowSearch: "nzShowSearch", nzPlaceHolder: "nzPlaceHolder", nzMenuStyle: "nzMenuStyle", nzMouseEnterDelay: "nzMouseEnterDelay", nzMouseLeaveDelay: "nzMouseLeaveDelay", nzTriggerAction: "nzTriggerAction", nzSuffixIcon: "nzSuffixIcon", nzExpandIcon: "nzExpandIcon", nzOptions: "nzOptions", nzColumnClassName: "nzColumnClassName", nzNotFoundContent: "nzNotFoundContent", nzMenuClassName: "nzMenuClassName", nzChangeOn: "nzChangeOn", nzLoadData: "nzLoadData" }, outputs: { nzVisibleChange: "nzVisibleChange", nzSelectionChange: "nzSelectionChange", nzSelect: "nzSelect", nzClear: "nzClear" }, exportAs: ["nzCascader"], features: [ɵngcc0.ɵɵProvidersFeature([
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => NzCascaderComponent),
                multi: true
            },
            NzCascaderService
        ])], ngContentSelectors: _c2, decls: 6, vars: 6, consts: [["cdkOverlayOrigin", ""], ["origin", "cdkOverlayOrigin", "trigger", ""], [4, "ngIf"], ["cdkConnectedOverlay", "", "nzConnectedOverlay", "", 3, "cdkConnectedOverlayHasBackdrop", "cdkConnectedOverlayOrigin", "cdkConnectedOverlayPositions", "cdkConnectedOverlayTransformOriginOn", "cdkConnectedOverlayOpen", "overlayOutsideClick", "detach"], ["nz-input", "", 1, "ant-cascader-input", 3, "readonly", "disabled", "nzSize", "ngModel", "ngModelChange", "blur", "focus", "change"], ["input", ""], ["nz-icon", "", "nzType", "close-circle", "nzTheme", "fill", "class", "ant-cascader-picker-clear", 3, "click", 4, "ngIf"], [4, "nzStringTemplateOutlet"], ["nz-icon", "", "nzType", "loading", "class", "ant-cascader-picker-arrow", 4, "ngIf"], [1, "ant-cascader-picker-label"], [4, "ngIf", "ngIfElse"], ["labelTemplate", ""], ["nz-icon", "", "nzType", "close-circle", "nzTheme", "fill", 1, "ant-cascader-picker-clear", 3, "click"], ["nz-icon", "", "class", "ant-cascader-picker-arrow", 3, "nzType", "ant-cascader-picker-arrow-expand", 4, "ngIf"], ["nz-icon", "", 1, "ant-cascader-picker-arrow", 3, "nzType"], ["nz-icon", "", "nzType", "loading", 1, "ant-cascader-picker-arrow"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "ant-cascader-menus", 3, "ngClass", "ngStyle", "nzNoAnimation", "mouseleave"], ["menu", ""], ["class", "ant-cascader-menu", 3, "width", "height", 4, "ngIf", "ngIfElse"], ["hasOptionsTemplate", ""], [1, "ant-cascader-menu"], [1, "ant-cascader-menu-item", "ant-cascader-menu-item-expanded", "ant-cascader-menu-item-disabled"], [3, "nzComponentName", "specificContent"], ["class", "ant-cascader-menu", 3, "ngClass", "height", "width", 4, "ngFor", "ngForOf"], [1, "ant-cascader-menu", 3, "ngClass"], ["nz-cascader-option", "", 3, "expandIcon", "columnIndex", "nzLabelProperty", "optionTemplate", "activated", "highlightText", "option", "dir", "mouseenter", "mouseleave", "click", 4, "ngFor", "ngForOf"], ["nz-cascader-option", "", 3, "expandIcon", "columnIndex", "nzLabelProperty", "optionTemplate", "activated", "highlightText", "option", "dir", "mouseenter", "mouseleave", "click"]], template: function NzCascaderComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "div", 0, 1);
        ɵngcc0.ɵɵtemplate(3, NzCascaderComponent_div_3_Template, 10, 22, "div", 2);
        ɵngcc0.ɵɵprojection(4);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(5, NzCascaderComponent_ng_template_5_Template, 5, 11, "ng-template", 3);
        ɵngcc0.ɵɵlistener("overlayOutsideClick", function NzCascaderComponent_Template_ng_template_overlayOutsideClick_5_listener($event) { return ctx.onClickOutside($event); })("detach", function NzCascaderComponent_Template_ng_template_detach_5_listener() { return ctx.closeMenu(); });
    } if (rf & 2) {
        const _r0 = ɵngcc0.ɵɵreference(1);
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵproperty("ngIf", ctx.nzShowInput);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("cdkConnectedOverlayHasBackdrop", ctx.nzBackdrop)("cdkConnectedOverlayOrigin", _r0)("cdkConnectedOverlayPositions", ctx.positions)("cdkConnectedOverlayTransformOriginOn", ".ant-cascader-menus")("cdkConnectedOverlayOpen", ctx.menuVisible);
    } }, directives: [ɵngcc6.CdkOverlayOrigin, ɵngcc7.NgIf, ɵngcc6.CdkConnectedOverlay, ɵngcc8.NzConnectedOverlayDirective, ɵngcc9.NzInputDirective, ɵngcc10.DefaultValueAccessor, ɵngcc10.NgControlStatus, ɵngcc10.NgModel, ɵngcc11.NzStringTemplateOutletDirective, ɵngcc12.NzIconDirective, ɵngcc7.NgTemplateOutlet, ɵngcc7.NgClass, ɵngcc7.NgStyle, ɵngcc5.NzNoAnimationDirective, ɵngcc13.NzEmbedEmptyComponent, ɵngcc7.NgForOf, ɵngcc14.NzCascaderOptionComponent, ɵngcc4.Dir], encapsulation: 2, data: { animation: [slideMotion] }, changeDetection: 0 });
NzCascaderComponent.ctorParameters = () => [
    { type: NzCascaderService },
    { type: NzConfigService },
    { type: ChangeDetectorRef },
    { type: NzI18nService },
    { type: ElementRef },
    { type: Renderer2 },
    { type: Directionality, decorators: [{ type: Optional }] },
    { type: NzNoAnimationDirective, decorators: [{ type: Host }, { type: Optional }] }
];
NzCascaderComponent.propDecorators = {
    input: [{ type: ViewChild, args: ['input', { static: false },] }],
    menu: [{ type: ViewChild, args: ['menu', { static: false },] }],
    overlay: [{ type: ViewChild, args: [CdkConnectedOverlay, { static: false },] }],
    cascaderItems: [{ type: ViewChildren, args: [NzCascaderOptionComponent,] }],
    nzOptionRender: [{ type: Input }],
    nzShowInput: [{ type: Input }],
    nzShowArrow: [{ type: Input }],
    nzAllowClear: [{ type: Input }],
    nzAutoFocus: [{ type: Input }],
    nzChangeOnSelect: [{ type: Input }],
    nzDisabled: [{ type: Input }],
    nzColumnClassName: [{ type: Input }],
    nzExpandTrigger: [{ type: Input }],
    nzValueProperty: [{ type: Input }],
    nzLabelRender: [{ type: Input }],
    nzLabelProperty: [{ type: Input }],
    nzNotFoundContent: [{ type: Input }],
    nzSize: [{ type: Input }],
    nzBackdrop: [{ type: Input }],
    nzShowSearch: [{ type: Input }],
    nzPlaceHolder: [{ type: Input }],
    nzMenuClassName: [{ type: Input }],
    nzMenuStyle: [{ type: Input }],
    nzMouseEnterDelay: [{ type: Input }],
    nzMouseLeaveDelay: [{ type: Input }],
    nzTriggerAction: [{ type: Input }],
    nzChangeOn: [{ type: Input }],
    nzLoadData: [{ type: Input }],
    nzSuffixIcon: [{ type: Input }],
    nzExpandIcon: [{ type: Input }],
    nzOptions: [{ type: Input }],
    nzVisibleChange: [{ type: Output }],
    nzSelectionChange: [{ type: Output }],
    nzSelect: [{ type: Output }],
    nzClear: [{ type: Output }],
    onKeyDown: [{ type: HostListener, args: ['keydown', ['$event'],] }],
    onTriggerClick: [{ type: HostListener, args: ['click',] }],
    onTriggerMouseEnter: [{ type: HostListener, args: ['mouseenter',] }],
    onTriggerMouseLeave: [{ type: HostListener, args: ['mouseleave', ['$event'],] }]
};
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzCascaderComponent.prototype, "nzShowInput", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzCascaderComponent.prototype, "nzShowArrow", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzCascaderComponent.prototype, "nzAllowClear", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzCascaderComponent.prototype, "nzAutoFocus", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzCascaderComponent.prototype, "nzChangeOnSelect", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzCascaderComponent.prototype, "nzDisabled", void 0);
__decorate([
    WithConfig(),
    __metadata("design:type", String)
], NzCascaderComponent.prototype, "nzSize", void 0);
__decorate([
    WithConfig(),
    __metadata("design:type", Object)
], NzCascaderComponent.prototype, "nzBackdrop", void 0);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzCascaderComponent, [{
        type: Component,
        args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                selector: 'nz-cascader, [nz-cascader]',
                exportAs: 'nzCascader',
                preserveWhitespaces: false,
                template: `
    <div cdkOverlayOrigin #origin="cdkOverlayOrigin" #trigger>
      <div *ngIf="nzShowInput">
        <input
          #input
          nz-input
          class="ant-cascader-input"
          [class.ant-cascader-input-disabled]="nzDisabled"
          [class.ant-cascader-input-lg]="nzSize === 'large'"
          [class.ant-cascader-input-sm]="nzSize === 'small'"
          [attr.autoComplete]="'off'"
          [attr.placeholder]="showPlaceholder ? nzPlaceHolder || locale?.placeholder : null"
          [attr.autofocus]="nzAutoFocus ? 'autofocus' : null"
          [readonly]="!nzShowSearch"
          [disabled]="nzDisabled"
          [nzSize]="nzSize"
          [(ngModel)]="inputValue"
          (blur)="handleInputBlur()"
          (focus)="handleInputFocus()"
          (change)="$event.stopPropagation()"
        />
        <i
          *ngIf="clearIconVisible"
          nz-icon
          nzType="close-circle"
          nzTheme="fill"
          class="ant-cascader-picker-clear"
          (click)="clearSelection($event)"
        ></i>
        <ng-container *nzStringTemplateOutlet="nzSuffixIcon">
          <i
            *ngIf="nzShowArrow && !isLoading"
            nz-icon
            [nzType]="$any(nzSuffixIcon)"
            class="ant-cascader-picker-arrow"
            [class.ant-cascader-picker-arrow-expand]="menuVisible"
          ></i>
        </ng-container>
        <i *ngIf="isLoading" nz-icon nzType="loading" class="ant-cascader-picker-arrow"></i>
        <span
          class="ant-cascader-picker-label"
          [class.ant-cascader-picker-show-search]="!!nzShowSearch"
          [class.ant-cascader-picker-focused]="!!nzShowSearch && isFocused && !inputValue"
        >
          <ng-container *ngIf="!isLabelRenderTemplate; else labelTemplate">{{ labelRenderText }}</ng-container>
          <ng-template #labelTemplate>
            <ng-template [ngTemplateOutlet]="nzLabelRender" [ngTemplateOutletContext]="labelRenderContext"></ng-template>
          </ng-template>
        </span>
      </div>
      <ng-content></ng-content>
    </div>
    <ng-template
      cdkConnectedOverlay
      nzConnectedOverlay
      [cdkConnectedOverlayHasBackdrop]="nzBackdrop"
      [cdkConnectedOverlayOrigin]="origin"
      [cdkConnectedOverlayPositions]="positions"
      [cdkConnectedOverlayTransformOriginOn]="'.ant-cascader-menus'"
      [cdkConnectedOverlayOpen]="menuVisible"
      (overlayOutsideClick)="onClickOutside($event)"
      (detach)="closeMenu()"
    >
      <div
        #menu
        class="ant-cascader-menus"
        [class.ant-cascader-menu-rtl]="dir === 'rtl'"
        [class.ant-cascader-menus-hidden]="!menuVisible"
        [ngClass]="menuCls"
        [ngStyle]="nzMenuStyle"
        [@.disabled]="noAnimation?.nzNoAnimation"
        [nzNoAnimation]="noAnimation?.nzNoAnimation"
        [@slideMotion]="'enter'"
        (mouseleave)="onTriggerMouseLeave($event)"
      >
        <ul
          *ngIf="shouldShowEmpty; else hasOptionsTemplate"
          class="ant-cascader-menu"
          [style.width]="dropdownWidthStyle"
          [style.height]="dropdownHeightStyle"
        >
          <li class="ant-cascader-menu-item ant-cascader-menu-item-expanded ant-cascader-menu-item-disabled">
            <nz-embed-empty [nzComponentName]="'cascader'" [specificContent]="nzNotFoundContent"></nz-embed-empty>
          </li>
        </ul>
        <ng-template #hasOptionsTemplate>
          <ul
            *ngFor="let options of cascaderService.columns; let i = index"
            class="ant-cascader-menu"
            [ngClass]="menuColumnCls"
            [style.height]="dropdownHeightStyle"
            [style.width]="dropdownWidthStyle"
          >
            <li
              nz-cascader-option
              *ngFor="let option of options"
              [expandIcon]="nzExpandIcon"
              [columnIndex]="i"
              [nzLabelProperty]="nzLabelProperty"
              [optionTemplate]="nzOptionRender"
              [activated]="isOptionActivated(option, i)"
              [highlightText]="inSearchingMode ? inputValue : ''"
              [option]="option"
              [dir]="dir"
              (mouseenter)="onOptionMouseEnter(option, i, $event)"
              (mouseleave)="onOptionMouseLeave(option, i, $event)"
              (click)="onOptionClick(option, i, $event)"
            ></li>
          </ul>
        </ng-template>
      </div>
    </ng-template>
  `,
                animations: [slideMotion],
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => NzCascaderComponent),
                        multi: true
                    },
                    NzCascaderService
                ],
                host: {
                    '[attr.tabIndex]': '"0"',
                    '[class.ant-cascader-lg]': 'nzSize === "large"',
                    '[class.ant-cascader-sm]': 'nzSize === "small"',
                    '[class.ant-cascader-picker-disabled]': 'nzDisabled',
                    '[class.ant-cascader-picker-open]': 'menuVisible',
                    '[class.ant-cascader-picker-with-value]': '!!inputValue',
                    '[class.ant-cascader-focused]': 'isFocused',
                    '[class.ant-cascader-picker-rtl]': `dir ==='rtl'`
                }
            }]
    }], function () { return [{ type: ɵngcc1.NzCascaderService }, { type: ɵngcc2.NzConfigService }, { type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc3.NzI18nService }, { type: ɵngcc0.ElementRef }, { type: ɵngcc0.Renderer2 }, { type: ɵngcc4.Directionality, decorators: [{
                type: Optional
            }] }, { type: ɵngcc5.NzNoAnimationDirective, decorators: [{
                type: Host
            }, {
                type: Optional
            }] }]; }, { nzOptionRender: [{
            type: Input
        }], nzShowInput: [{
            type: Input
        }], nzShowArrow: [{
            type: Input
        }], nzAllowClear: [{
            type: Input
        }], nzAutoFocus: [{
            type: Input
        }], nzChangeOnSelect: [{
            type: Input
        }], nzDisabled: [{
            type: Input
        }], nzExpandTrigger: [{
            type: Input
        }], nzValueProperty: [{
            type: Input
        }], nzLabelRender: [{
            type: Input
        }], nzLabelProperty: [{
            type: Input
        }], nzSize: [{
            type: Input
        }], nzBackdrop: [{
            type: Input
        }], nzShowSearch: [{
            type: Input
        }], nzPlaceHolder: [{
            type: Input
        }], nzMenuStyle: [{
            type: Input
        }], nzMouseEnterDelay: [{
            type: Input
        }], nzMouseLeaveDelay: [{
            type: Input
        }], nzTriggerAction: [{
            type: Input
        }], nzSuffixIcon: [{
            type: Input
        }], nzExpandIcon: [{
            type: Input
        }], nzVisibleChange: [{
            type: Output
        }], nzSelectionChange: [{
            type: Output
        }], nzSelect: [{
            type: Output
        }], nzClear: [{
            type: Output
        }], nzOptions: [{
            type: Input
        }], onKeyDown: [{
            type: HostListener,
            args: ['keydown', ['$event']]
        }], onTriggerClick: [{
            type: HostListener,
            args: ['click']
        }], onTriggerMouseEnter: [{
            type: HostListener,
            args: ['mouseenter']
        }], onTriggerMouseLeave: [{
            type: HostListener,
            args: ['mouseleave', ['$event']]
        }], input: [{
            type: ViewChild,
            args: ['input', { static: false }]
        }], menu: [{
            type: ViewChild,
            args: ['menu', { static: false }]
        }], overlay: [{
            type: ViewChild,
            args: [CdkConnectedOverlay, { static: false }]
        }], cascaderItems: [{
            type: ViewChildren,
            args: [NzCascaderOptionComponent]
        }], nzColumnClassName: [{
            type: Input
        }], nzNotFoundContent: [{
            type: Input
        }], nzMenuClassName: [{
            type: Input
        }], nzChangeOn: [{
            type: Input
        }], nzLoadData: [{
            type: Input
        }] }); })();
export { ɵ0 };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FzY2FkZXIuY29tcG9uZW50LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9jb21wb25lbnRzL2Nhc2NhZGVyL2Nhc2NhZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxPQUFPLEVBQWEsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDOUQsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2hILE9BQU8sRUFBRSxtQkFBbUIsRUFBMEIsTUFBTSxzQkFBc0IsQ0FBQztBQUNuRixPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixVQUFVLEVBQ1YsSUFBSSxFQUNKLFlBQVksRUFDWixLQUFLLEVBR0wsUUFBUSxFQUNSLE1BQU0sRUFDTixTQUFTLEVBQ1QsU0FBUyxFQUVULFNBQVMsRUFDVCxZQUFZLEVBQ1osaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6RSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDM0QsT0FBTyxFQUFlLGVBQWUsRUFBRSxVQUFVLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNyRixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUN6RSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUV4RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE9BQU8sRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBRWhFLE9BQU8sRUFBMkIsYUFBYSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDNUUsT0FBTyxFQUFFLE9B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c291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7IERpcmVjdGlvbiwgRGlyZWN0aW9uYWxpdHkgfSBmcm9tICdAYW5ndWxhci9jZGsvYmlkaSc7XG5pbXBvcnQgeyBCQUNLU1BBQ0UsIERPV05fQVJST1csIEVOVEVSLCBFU0NBUEUsIExFRlRfQVJST1csIFJJR0hUX0FSUk9XLCBVUF9BUlJPVyB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9rZXljb2Rlcyc7XG5pbXBvcnQgeyBDZGtDb25uZWN0ZWRPdmVybGF5LCBDb25uZWN0aW9uUG9zaXRpb25QYWlyIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgZm9yd2FyZFJlZixcbiAgSG9zdCxcbiAgSG9zdExpc3RlbmVyLFxuICBJbnB1dCxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE9wdGlvbmFsLFxuICBPdXRwdXQsXG4gIFF1ZXJ5TGlzdCxcbiAgUmVuZGVyZXIyLFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0NoaWxkLFxuICBWaWV3Q2hpbGRyZW4sXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgc2xpZGVNb3Rpb24gfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvYW5pbWF0aW9uJztcbmltcG9ydCB7IE56Q29uZmlnS2V5LCBOekNvbmZpZ1NlcnZpY2UsIFdpdGhDb25maWcgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvY29uZmlnJztcbmltcG9ydCB7IE56Tm9BbmltYXRpb25EaXJlY3RpdmUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvbm8tYW5pbWF0aW9uJztcbmltcG9ydCB7IERFRkFVTFRfQ0FTQ0FERVJfUE9TSVRJT05TIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL292ZXJsYXknO1xuaW1wb3J0IHsgQm9vbGVhbklucHV0LCBOZ0NsYXNzVHlwZSwgTmdTdHlsZUludGVyZmFjZSwgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcbmltcG9ydCB7IElucHV0Qm9vbGVhbiwgdG9BcnJheSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS91dGlsJztcblxuaW1wb3J0IHsgTnpDYXNjYWRlckkxOG5JbnRlcmZhY2UsIE56STE4blNlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2kxOG4nO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgc3RhcnRXaXRoLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBOekNhc2NhZGVyT3B0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9jYXNjYWRlci1saS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTnpDYXNjYWRlclNlcnZpY2UgfSBmcm9tICcuL2Nhc2NhZGVyLnNlcnZpY2UnO1xuaW1wb3J0IHtcbiAgTnpDYXNjYWRlckNvbXBvbmVudEFzU291cmNlLFxuICBOekNhc2NhZGVyRXhwYW5kVHJpZ2dlcixcbiAgTnpDYXNjYWRlck9wdGlvbixcbiAgTnpDYXNjYWRlclNlYXJjaE9wdGlvbixcbiAgTnpDYXNjYWRlclNpemUsXG4gIE56Q2FzY2FkZXJUcmlnZ2VyVHlwZSxcbiAgTnpTaG93U2VhcmNoT3B0aW9uc1xufSBmcm9tICcuL3R5cGluZ3MnO1xuXG5jb25zdCBOWl9DT05GSUdfTU9EVUxFX05BTUU6IE56Q29uZmlnS2V5ID0gJ2Nhc2NhZGVyJztcbmNvbnN0IGRlZmF1bHREaXNwbGF5UmVuZGVyID0gKGxhYmVsczogc3RyaW5nW10pID0+IGxhYmVscy5qb2luKCcgLyAnKTtcblxuQENvbXBvbmVudCh7XG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBzZWxlY3RvcjogJ256LWNhc2NhZGVyLCBbbnotY2FzY2FkZXJdJyxcbiAgZXhwb3J0QXM6ICduekNhc2NhZGVyJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBjZGtPdmVybGF5T3JpZ2luICNvcmlnaW49XCJjZGtPdmVybGF5T3JpZ2luXCIgI3RyaWdnZXI+XG4gICAgICA8ZGl2ICpuZ0lmPVwibnpTaG93SW5wdXRcIj5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgI2lucHV0XG4gICAgICAgICAgbnotaW5wdXRcbiAgICAgICAgICBjbGFzcz1cImFudC1jYXNjYWRlci1pbnB1dFwiXG4gICAgICAgICAgW2NsYXNzLmFudC1jYXNjYWRlci1pbnB1dC1kaXNhYmxlZF09XCJuekRpc2FibGVkXCJcbiAgICAgICAgICBbY2xhc3MuYW50LWNhc2NhZGVyLWlucHV0LWxnXT1cIm56U2l6ZSA9PT0gJ2xhcmdlJ1wiXG4gICAgICAgICAgW2NsYXNzLmFudC1jYXNjYWRlci1pbnB1dC1zbV09XCJuelNpemUgPT09ICdzbWFsbCdcIlxuICAgICAgICAgIFthdHRyLmF1dG9Db21wbGV0ZV09XCInb2ZmJ1wiXG4gICAgICAgICAgW2F0dHIucGxhY2Vob2xkZXJdPVwic2hvd1BsYWNlaG9sZGVyID8gbnpQbGFjZUhvbGRlciB8fCBsb2NhbGU/LnBsYWNlaG9sZGVyIDogbnVsbFwiXG4gICAgICAgICAgW2F0dHIuYXV0b2ZvY3VzXT1cIm56QXV0b0ZvY3VzID8gJ2F1dG9mb2N1cycgOiBudWxsXCJcbiAgICAgICAgICBbcmVhZG9ubHldPVwiIW56U2hvd1NlYXJjaFwiXG4gICAgICAgICAgW2Rpc2FibGVkXT1cIm56RGlzYWJsZWRcIlxuICAgICAgICAgIFtuelNpemVdPVwibnpTaXplXCJcbiAgICAgICAgICBbKG5nTW9kZWwpXT1cImlucHV0VmFsdWVcIlxuICAgICAgICAgIChibHVyKT1cImhhbmRsZUlucHV0Qmx1cigpXCJcbiAgICAgICAgICAoZm9jdXMpPVwiaGFuZGxlSW5wdXRGb2N1cygpXCJcbiAgICAgICAgICAoY2hhbmdlKT1cIiRldmVudC5zdG9wUHJvcGFnYXRpb24oKVwiXG4gICAgICAgIC8+XG4gICAgICAgIDxpXG4gICAgICAgICAgKm5nSWY9XCJjbGVhckljb25WaXNpYmxlXCJcbiAgICAgICAgICBuei1pY29uXG4gICAgICAgICAgbnpUeXBlPVwiY2xvc2UtY2lyY2xlXCJcbiAgICAgICAgICBuelRoZW1lPVwiZmlsbFwiXG4gICAgICAgICAgY2xhc3M9XCJhbnQtY2FzY2FkZXItcGlja2VyLWNsZWFyXCJcbiAgICAgICAgICAoY2xpY2spPVwiY2xlYXJTZWxlY3Rpb24oJGV2ZW50KVwiXG4gICAgICAgID48L2k+XG4gICAgICAgIDxuZy1jb250YWluZXIgKm56U3RyaW5nVGVtcGxhdGVPdXRsZXQ9XCJuelN1ZmZpeEljb25cIj5cbiAgICAgICAgICA8aVxuICAgICAgICAgICAgKm5nSWY9XCJuelNob3dBcnJvdyAmJiAhaXNMb2FkaW5nXCJcbiAgICAgICAgICAgIG56LWljb25cbiAgICAgICAgICAgIFtuelR5cGVdPVwiJGFueShuelN1ZmZpeEljb24pXCJcbiAgICAgICAgICAgIGNsYXNzPVwiYW50LWNhc2NhZGVyLXBpY2tlci1hcnJvd1wiXG4gICAgICAgICAgICBbY2xhc3MuYW50LWNhc2NhZGVyLXBpY2tlci1hcnJvdy1leHBhbmRdPVwibWVudVZpc2libGVcIlxuICAgICAgICAgID48L2k+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICA8aSAqbmdJZj1cImlzTG9hZGluZ1wiIG56LWljb24gbnpUeXBlPVwibG9hZGluZ1wiIGNsYXNzPVwiYW50LWNhc2NhZGVyLXBpY2tlci1hcnJvd1wiPjwvaT5cbiAgICAgICAgPHNwYW5cbiAgICAgICAgICBjbGFzcz1cImFudC1jYXNjYWRlci1waWNrZXItbGFiZWxcIlxuICAgICAgICAgIFtjbGFzcy5hbnQtY2FzY2FkZXItcGlja2VyLXNob3ctc2VhcmNoXT1cIiEhbnpTaG93U2VhcmNoXCJcbiAgICAgICAgICBbY2xhc3MuYW50LWNhc2NhZGVyLXBpY2tlci1mb2N1c2VkXT1cIiEhbnpTaG93U2VhcmNoICYmIGlzRm9jdXNlZCAmJiAhaW5wdXRWYWx1ZVwiXG4gICAgICAgID5cbiAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWlzTGFiZWxSZW5kZXJUZW1wbGF0ZTsgZWxzZSBsYWJlbFRlbXBsYXRlXCI+e3sgbGFiZWxSZW5kZXJUZXh0IH19PC9uZy1jb250YWluZXI+XG4gICAgICAgICAgPG5nLXRlbXBsYXRlICNsYWJlbFRlbXBsYXRlPlxuICAgICAgICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cIm56TGFiZWxSZW5kZXJcIiBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwibGFiZWxSZW5kZXJDb250ZXh0XCI+PC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgICA8L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICA8L2Rpdj5cbiAgICA8bmctdGVtcGxhdGVcbiAgICAgIGNka0Nvbm5lY3RlZE92ZXJsYXlcbiAgICAgIG56Q29ubmVjdGVkT3ZlcmxheVxuICAgICAgW2Nka0Nvbm5lY3RlZE92ZXJsYXlIYXNCYWNrZHJvcF09XCJuekJhY2tkcm9wXCJcbiAgICAgIFtjZGtDb25uZWN0ZWRPdmVybGF5T3JpZ2luXT1cIm9yaWdpblwiXG4gICAgICBbY2RrQ29ubmVjdGVkT3ZlcmxheVBvc2l0aW9uc109XCJwb3NpdGlvbnNcIlxuICAgICAgW2Nka0Nvbm5lY3RlZE92ZXJsYXlUcmFuc2Zvcm1PcmlnaW5Pbl09XCInLmFudC1jYXNjYWRlci1tZW51cydcIlxuICAgICAgW2Nka0Nvbm5lY3RlZE92ZXJsYXlPcGVuXT1cIm1lbnVWaXNpYmxlXCJcbiAgICAgIChvdmVybGF5T3V0c2lkZUNsaWNrKT1cIm9uQ2xpY2tPdXRzaWRlKCRldmVudClcIlxuICAgICAgKGRldGFjaCk9XCJjbG9zZU1lbnUoKVwiXG4gICAgPlxuICAgICAgPGRpdlxuICAgICAgICAjbWVudVxuICAgICAgICBjbGFzcz1cImFudC1jYXNjYWRlci1tZW51c1wiXG4gICAgICAgIFtjbGFzcy5hbnQtY2FzY2FkZXItbWVudS1ydGxdPVwiZGlyID09PSAncnRsJ1wiXG4gICAgICAgIFtjbGFzcy5hbnQtY2FzY2FkZXItbWVudXMtaGlkZGVuXT1cIiFtZW51VmlzaWJsZVwiXG4gICAgICAgIFtuZ0NsYXNzXT1cIm1lbnVDbHNcIlxuICAgICAgICBbbmdTdHlsZV09XCJuek1lbnVTdHlsZVwiXG4gICAgICAgIFtALmRpc2FibGVkXT1cIm5vQW5pbWF0aW9uPy5uek5vQW5pbWF0aW9uXCJcbiAgICAgICAgW256Tm9BbmltYXRpb25dPVwibm9BbmltYXRpb24/Lm56Tm9BbmltYXRpb25cIlxuICAgICAgICBbQHNsaWRlTW90aW9uXT1cIidlbnRlcidcIlxuICAgICAgICAobW91c2VsZWF2ZSk9XCJvblRyaWdnZXJNb3VzZUxlYXZlKCRldmVudClcIlxuICAgICAgPlxuICAgICAgICA8dWxcbiAgICAgICAgICAqbmdJZj1cInNob3VsZFNob3dFbXB0eTsgZWxzZSBoYXNPcHRpb25zVGVtcGxhdGVcIlxuICAgICAgICAgIGNsYXNzPVwiYW50LWNhc2NhZGVyLW1lbnVcIlxuICAgICAgICAgIFtzdHlsZS53aWR0aF09XCJkcm9wZG93bldpZHRoU3R5bGVcIlxuICAgICAgICAgIFtzdHlsZS5oZWlnaHRdPVwiZHJvcGRvd25IZWlnaHRTdHlsZVwiXG4gICAgICAgID5cbiAgICAgICAgICA8bGkgY2xhc3M9XCJhbnQtY2FzY2FkZXItbWVudS1pdGVtIGFudC1jYXNjYWRlci1tZW51LWl0ZW0tZXhwYW5kZWQgYW50LWNhc2NhZGVyLW1lbnUtaXRlbS1kaXNhYmxlZFwiPlxuICAgICAgICAgICAgPG56LWVtYmVkLWVtcHR5IFtuekNvbXBvbmVudE5hbWVdPVwiJ2Nhc2NhZGVyJ1wiIFtzcGVjaWZpY0NvbnRlbnRdPVwibnpOb3RGb3VuZENvbnRlbnRcIj48L256LWVtYmVkLWVtcHR5PlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgICAgIDxuZy10ZW1wbGF0ZSAjaGFzT3B0aW9uc1RlbXBsYXRlPlxuICAgICAgICAgIDx1bFxuICAgICAgICAgICAgKm5nRm9yPVwibGV0IG9wdGlvbnMgb2YgY2FzY2FkZXJTZXJ2aWNlLmNvbHVtbnM7IGxldCBpID0gaW5kZXhcIlxuICAgICAgICAgICAgY2xhc3M9XCJhbnQtY2FzY2FkZXItbWVudVwiXG4gICAgICAgICAgICBbbmdDbGFzc109XCJtZW51Q29sdW1uQ2xzXCJcbiAgICAgICAgICAgIFtzdHlsZS5oZWlnaHRdPVwiZHJvcGRvd25IZWlnaHRTdHlsZVwiXG4gICAgICAgICAgICBbc3R5bGUud2lkdGhdPVwiZHJvcGRvd25XaWR0aFN0eWxlXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8bGlcbiAgICAgICAgICAgICAgbnotY2FzY2FkZXItb3B0aW9uXG4gICAgICAgICAgICAgICpuZ0Zvcj1cImxldCBvcHRpb24gb2Ygb3B0aW9uc1wiXG4gICAgICAgICAgICAgIFtleHBhbmRJY29uXT1cIm56RXhwYW5kSWNvblwiXG4gICAgICAgICAgICAgIFtjb2x1bW5JbmRleF09XCJpXCJcbiAgICAgICAgICAgICAgW256TGFiZWxQcm9wZXJ0eV09XCJuekxhYmVsUHJvcGVydHlcIlxuICAgICAgICAgICAgICBbb3B0aW9uVGVtcGxhdGVdPVwibnpPcHRpb25SZW5kZXJcIlxuICAgICAgICAgICAgICBbYWN0aXZhdGVkXT1cImlzT3B0aW9uQWN0aXZhdGVkKG9wdGlvbiwgaSlcIlxuICAgICAgICAgICAgICBbaGlnaGxpZ2h0VGV4dF09XCJpblNlYXJjaGluZ01vZGUgPyBpbnB1dFZhbHVlIDogJydcIlxuICAgICAgICAgICAgICBbb3B0aW9uXT1cIm9wdGlvblwiXG4gICAgICAgICAgICAgIFtkaXJdPVwiZGlyXCJcbiAgICAgICAgICAgICAgKG1vdXNlZW50ZXIpPVwib25PcHRpb25Nb3VzZUVudGVyKG9wdGlvbiwgaSwgJGV2ZW50KVwiXG4gICAgICAgICAgICAgIChtb3VzZWxlYXZlKT1cIm9uT3B0aW9uTW91c2VMZWF2ZShvcHRpb24sIGksICRldmVudClcIlxuICAgICAgICAgICAgICAoY2xpY2spPVwib25PcHRpb25DbGljayhvcHRpb24sIGksICRldmVudClcIlxuICAgICAgICAgICAgPjwvbGk+XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgIDwvZGl2PlxuICAgIDwvbmctdGVtcGxhdGU+XG4gIGAsXG4gIGFuaW1hdGlvbnM6IFtzbGlkZU1vdGlvbl0sXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTnpDYXNjYWRlckNvbXBvbmVudCksXG4gICAgICBtdWx0aTogdHJ1ZVxuICAgIH0sXG4gICAgTnpDYXNjYWRlclNlcnZpY2VcbiAgXSxcbiAgaG9zdDoge1xuICAgICdbYXR0ci50YWJJbmRleF0nOiAnXCIwXCInLFxuICAgICdbY2xhc3MuYW50LWNhc2NhZGVyLWxnXSc6ICduelNpemUgPT09IFwibGFyZ2VcIicsXG4gICAgJ1tjbGFzcy5hbnQtY2FzY2FkZXItc21dJzogJ256U2l6ZSA9PT0gXCJzbWFsbFwiJyxcbiAgICAnW2NsYXNzLmFudC1jYXNjYWRlci1waWNrZXItZGlzYWJsZWRdJzogJ256RGlzYWJsZWQnLFxuICAgICdbY2xhc3MuYW50LWNhc2NhZGVyLXBpY2tlci1vcGVuXSc6ICdtZW51VmlzaWJsZScsXG4gICAgJ1tjbGFzcy5hbnQtY2FzY2FkZXItcGlja2VyLXdpdGgtdmFsdWVdJzogJyEhaW5wdXRWYWx1ZScsXG4gICAgJ1tjbGFzcy5hbnQtY2FzY2FkZXItZm9jdXNlZF0nOiAnaXNGb2N1c2VkJyxcbiAgICAnW2NsYXNzLmFudC1jYXNjYWRlci1waWNrZXItcnRsXSc6IGBkaXIgPT09J3J0bCdgXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgTnpDYXNjYWRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE56Q2FzY2FkZXJDb21wb25lbnRBc1NvdXJjZSwgT25Jbml0LCBPbkRlc3Ryb3ksIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcbiAgcmVhZG9ubHkgX256TW9kdWxlTmFtZTogTnpDb25maWdLZXkgPSBOWl9DT05GSUdfTU9EVUxFX05BTUU7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9uelNob3dJbnB1dDogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbnpTaG93QXJyb3c6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX256QWxsb3dDbGVhcjogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbnpBdXRvRm9jdXM6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX256Q2hhbmdlT25TZWxlY3Q6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX256RGlzYWJsZWQ6IEJvb2xlYW5JbnB1dDtcblxuICBAVmlld0NoaWxkKCdpbnB1dCcsIHsgc3RhdGljOiBmYWxzZSB9KSBpbnB1dCE6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ21lbnUnLCB7IHN0YXRpYzogZmFsc2UgfSkgbWVudSE6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoQ2RrQ29ubmVjdGVkT3ZlcmxheSwgeyBzdGF0aWM6IGZhbHNlIH0pIG92ZXJsYXkhOiBDZGtDb25uZWN0ZWRPdmVybGF5O1xuICBAVmlld0NoaWxkcmVuKE56Q2FzY2FkZXJPcHRpb25Db21wb25lbnQpIGNhc2NhZGVySXRlbXMhOiBRdWVyeUxpc3Q8TnpDYXNjYWRlck9wdGlvbkNvbXBvbmVudD47XG5cbiAgQElucHV0KCkgbnpPcHRpb25SZW5kZXI6IFRlbXBsYXRlUmVmPHsgJGltcGxpY2l0OiBOekNhc2NhZGVyT3B0aW9uOyBpbmRleDogbnVtYmVyIH0+IHwgbnVsbCA9IG51bGw7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuelNob3dJbnB1dCA9IHRydWU7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuelNob3dBcnJvdyA9IHRydWU7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekFsbG93Q2xlYXIgPSB0cnVlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpBdXRvRm9jdXMgPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56Q2hhbmdlT25TZWxlY3QgPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56RGlzYWJsZWQgPSBmYWxzZTtcbiAgQElucHV0KCkgbnpDb2x1bW5DbGFzc05hbWU/OiBzdHJpbmc7XG4gIEBJbnB1dCgpIG56RXhwYW5kVHJpZ2dlcjogTnpDYXNjYWRlckV4cGFuZFRyaWdnZXIgPSAnY2xpY2snO1xuICBASW5wdXQoKSBuelZhbHVlUHJvcGVydHkgPSAndmFsdWUnO1xuICBASW5wdXQoKSBuekxhYmVsUmVuZGVyOiBUZW1wbGF0ZVJlZjx2b2lkPiB8IG51bGwgPSBudWxsO1xuICBASW5wdXQoKSBuekxhYmVsUHJvcGVydHkgPSAnbGFiZWwnO1xuICBASW5wdXQoKSBuek5vdEZvdW5kQ29udGVudD86IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBASW5wdXQoKSBAV2l0aENvbmZpZygpIG56U2l6ZTogTnpDYXNjYWRlclNpemUgPSAnZGVmYXVsdCc7XG4gIEBJbnB1dCgpIEBXaXRoQ29uZmlnKCkgbnpCYWNrZHJvcCA9IGZhbHNlO1xuICBASW5wdXQoKSBuelNob3dTZWFyY2g6IGJvb2xlYW4gfCBOelNob3dTZWFyY2hPcHRpb25zID0gZmFsc2U7XG4gIEBJbnB1dCgpIG56UGxhY2VIb2xkZXI6IHN0cmluZyA9ICcnO1xuICBASW5wdXQoKSBuek1lbnVDbGFzc05hbWU/OiBzdHJpbmc7XG4gIEBJbnB1dCgpIG56TWVudVN0eWxlOiBOZ1N0eWxlSW50ZXJmYWNlIHwgbnVsbCA9IG51bGw7XG4gIEBJbnB1dCgpIG56TW91c2VFbnRlckRlbGF5OiBudW1iZXIgPSAxNTA7IC8vIG1zXG4gIEBJbnB1dCgpIG56TW91c2VMZWF2ZURlbGF5OiBudW1iZXIgPSAxNTA7IC8vIG1zXG4gIEBJbnB1dCgpIG56VHJpZ2dlckFjdGlvbjogTnpDYXNjYWRlclRyaWdnZXJUeXBlIHwgTnpDYXNjYWRlclRyaWdnZXJUeXBlW10gPSBbJ2NsaWNrJ10gYXMgTnpDYXNjYWRlclRyaWdnZXJUeXBlW107XG4gIEBJbnB1dCgpIG56Q2hhbmdlT24/OiAob3B0aW9uOiBOekNhc2NhZGVyT3B0aW9uLCBsZXZlbDogbnVtYmVyKSA9PiBib29sZWFuO1xuICBASW5wdXQoKSBuekxvYWREYXRhPzogKG5vZGU6IE56Q2FzY2FkZXJPcHRpb24sIGluZGV4OiBudW1iZXIpID0+IFByb21pc2VMaWtlPE56U2FmZUFueT47XG4gIC8vIFRPRE86IFJUTFxuICBASW5wdXQoKSBuelN1ZmZpeEljb246IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+ID0gJ2Rvd24nO1xuICBASW5wdXQoKSBuekV4cGFuZEljb246IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+ID0gJyc7XG5cbiAgQElucHV0KClcbiAgZ2V0IG56T3B0aW9ucygpOiBOekNhc2NhZGVyT3B0aW9uW10gfCBudWxsIHtcbiAgICByZXR1cm4gdGhpcy5jYXNjYWRlclNlcnZpY2UubnpPcHRpb25zO1xuICB9XG5cbiAgc2V0IG56T3B0aW9ucyhvcHRpb25zOiBOekNhc2NhZGVyT3B0aW9uW10gfCBudWxsKSB7XG4gICAgdGhpcy5jYXNjYWRlclNlcnZpY2Uud2l0aE9wdGlvbnMob3B0aW9ucyk7XG4gIH1cblxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpWaXNpYmxlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpTZWxlY3Rpb25DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPE56Q2FzY2FkZXJPcHRpb25bXT4oKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56U2VsZWN0ID0gbmV3IEV2ZW50RW1pdHRlcjx7IG9wdGlvbjogTnpDYXNjYWRlck9wdGlvbjsgaW5kZXg6IG51bWJlciB9IHwgbnVsbD4oKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56Q2xlYXIgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cbiAgLyoqXG4gICAqIElmIHRoZSBkcm9wZG93biBzaG91bGQgc2hvdyB0aGUgZW1wdHkgY29udGVudC5cbiAgICogYHRydWVgIGlmIHRoZXJlJ3Mgbm8gb3B0aW9ucy5cbiAgICovXG4gIHNob3VsZFNob3dFbXB0eTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIGVsOiBIVE1MRWxlbWVudDtcbiAgbWVudVZpc2libGUgPSBmYWxzZTtcbiAgaXNMb2FkaW5nID0gZmFsc2U7XG4gIGxhYmVsUmVuZGVyVGV4dD86IHN0cmluZztcbiAgbGFiZWxSZW5kZXJDb250ZXh0ID0ge307XG4gIG9uQ2hhbmdlID0gRnVuY3Rpb24ucHJvdG90eXBlO1xuICBvblRvdWNoZWQgPSBGdW5jdGlvbi5wcm90b3R5cGU7XG4gIHBvc2l0aW9uczogQ29ubmVjdGlvblBvc2l0aW9uUGFpcltdID0gWy4uLkRFRkFVTFRfQ0FTQ0FERVJfUE9TSVRJT05TXTtcblxuICAvKipcbiAgICogRHJvcGRvd24ncyB3aXRoIGluIHBpeGVsLlxuICAgKi9cbiAgZHJvcGRvd25XaWR0aFN0eWxlPzogc3RyaW5nO1xuICBkcm9wZG93bkhlaWdodFN0eWxlOiAnYXV0bycgfCAnJyA9ICcnO1xuICBpc0ZvY3VzZWQgPSBmYWxzZTtcblxuICBsb2NhbGUhOiBOekNhc2NhZGVySTE4bkludGVyZmFjZTtcbiAgZGlyOiBEaXJlY3Rpb24gPSAnbHRyJztcblxuICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcbiAgcHJpdmF0ZSBpbnB1dFN0cmluZyA9ICcnO1xuICBwcml2YXRlIGlzT3BlbmluZyA9IGZhbHNlO1xuICBwcml2YXRlIGRlbGF5TWVudVRpbWVyOiBudW1iZXIgfCBudWxsID0gbnVsbDtcbiAgcHJpdmF0ZSBkZWxheVNlbGVjdFRpbWVyOiBudW1iZXIgfCBudWxsID0gbnVsbDtcblxuICBnZXQgaW5TZWFyY2hpbmdNb2RlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmNhc2NhZGVyU2VydmljZS5pblNlYXJjaGluZ01vZGU7XG4gIH1cblxuICBzZXQgaW5wdXRWYWx1ZShpbnB1dFZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLmlucHV0U3RyaW5nID0gaW5wdXRWYWx1ZTtcbiAgICB0aGlzLnRvZ2dsZVNlYXJjaGluZ01vZGUoISFpbnB1dFZhbHVlKTtcbiAgfVxuXG4gIGdldCBpbnB1dFZhbHVlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuaW5wdXRTdHJpbmc7XG4gIH1cblxuICBnZXQgbWVudUNscygpOiBOZ0NsYXNzVHlwZSB7XG4gICAgcmV0dXJuIHsgW2Ake3RoaXMubnpNZW51Q2xhc3NOYW1lfWBdOiAhIXRoaXMubnpNZW51Q2xhc3NOYW1lIH07XG4gIH1cblxuICBnZXQgbWVudUNvbHVtbkNscygpOiBOZ0NsYXNzVHlwZSB7XG4gICAgcmV0dXJuIHsgW2Ake3RoaXMubnpDb2x1bW5DbGFzc05hbWV9YF06ICEhdGhpcy5uekNvbHVtbkNsYXNzTmFtZSB9O1xuICB9XG5cbiAgcHJpdmF0ZSBnZXQgaGFzSW5wdXQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICEhdGhpcy5pbnB1dFZhbHVlO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXQgaGFzVmFsdWUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuY2FzY2FkZXJTZXJ2aWNlLnZhbHVlcyAmJiB0aGlzLmNhc2NhZGVyU2VydmljZS52YWx1ZXMubGVuZ3RoID4gMDtcbiAgfVxuXG4gIGdldCBzaG93UGxhY2Vob2xkZXIoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICEodGhpcy5oYXNJbnB1dCB8fCB0aGlzLmhhc1ZhbHVlKTtcbiAgfVxuXG4gIGdldCBjbGVhckljb25WaXNpYmxlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLm56QWxsb3dDbGVhciAmJiAhdGhpcy5uekRpc2FibGVkICYmICh0aGlzLmhhc1ZhbHVlIHx8IHRoaXMuaGFzSW5wdXQpO1xuICB9XG5cbiAgZ2V0IGlzTGFiZWxSZW5kZXJUZW1wbGF0ZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gISF0aGlzLm56TGFiZWxSZW5kZXI7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgY2FzY2FkZXJTZXJ2aWNlOiBOekNhc2NhZGVyU2VydmljZSxcbiAgICBwdWJsaWMgbnpDb25maWdTZXJ2aWNlOiBOekNvbmZpZ1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByaXZhdGUgaTE4blNlcnZpY2U6IE56STE4blNlcnZpY2UsXG4gICAgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgZGlyZWN0aW9uYWxpdHk6IERpcmVjdGlvbmFsaXR5LFxuICAgIEBIb3N0KCkgQE9wdGlvbmFsKCkgcHVibGljIG5vQW5pbWF0aW9uPzogTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZVxuICApIHtcbiAgICB0aGlzLmVsID0gZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuICAgIHRoaXMuY2FzY2FkZXJTZXJ2aWNlLndpdGhDb21wb25lbnQodGhpcyk7XG4gICAgcmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnYW50LWNhc2NhZGVyJyk7XG4gICAgcmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnYW50LWNhc2NhZGVyLXBpY2tlcicpO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgY29uc3Qgc3J2ID0gdGhpcy5jYXNjYWRlclNlcnZpY2U7XG5cbiAgICBzcnYuJHJlZHJhdy5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIC8vIFRoZXNlIG9wZXJhdGlvbnMgd291bGQgbm90IG11dGF0ZSBkYXRhLlxuICAgICAgdGhpcy5jaGVja0NoaWxkcmVuKCk7XG4gICAgICB0aGlzLnNldERpc3BsYXlMYWJlbCgpO1xuICAgICAgdGhpcy5yZXBvc2l0aW9uKCk7XG4gICAgICB0aGlzLnNldERyb3Bkb3duU3R5bGVzKCk7XG5cbiAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICAgIH0pO1xuXG4gICAgc3J2LiRsb2FkaW5nLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUobG9hZGluZyA9PiB7XG4gICAgICB0aGlzLmlzTG9hZGluZyA9IGxvYWRpbmc7XG4gICAgfSk7XG5cbiAgICBzcnYuJG9wdGlvblNlbGVjdGVkLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoZGF0YSA9PiB7XG4gICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgdGhpcy5vbkNoYW5nZShbXSk7XG4gICAgICAgIHRoaXMubnpTZWxlY3QuZW1pdChudWxsKTtcbiAgICAgICAgdGhpcy5uelNlbGVjdGlvbkNoYW5nZS5lbWl0KFtdKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHsgb3B0aW9uLCBpbmRleCB9ID0gZGF0YTtcbiAgICAgICAgY29uc3Qgc2hvdWxkQ2xvc2UgPSBvcHRpb24uaXNMZWFmIHx8ICh0aGlzLm56Q2hhbmdlT25TZWxlY3QgJiYgdGhpcy5uekV4cGFuZFRyaWdnZXIgPT09ICdob3ZlcicpO1xuICAgICAgICBpZiAoc2hvdWxkQ2xvc2UpIHtcbiAgICAgICAgICB0aGlzLmRlbGF5U2V0TWVudVZpc2libGUoZmFsc2UpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMub25DaGFuZ2UodGhpcy5jYXNjYWRlclNlcnZpY2UudmFsdWVzKTtcbiAgICAgICAgdGhpcy5uelNlbGVjdGlvbkNoYW5nZS5lbWl0KHRoaXMuY2FzY2FkZXJTZXJ2aWNlLnNlbGVjdGVkT3B0aW9ucyk7XG4gICAgICAgIHRoaXMubnpTZWxlY3QuZW1pdCh7IG9wdGlvbiwgaW5kZXggfSk7XG4gICAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgc3J2LiRxdWl0U2VhcmNoaW5nLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5pbnB1dFN0cmluZyA9ICcnO1xuICAgICAgdGhpcy5kcm9wZG93bldpZHRoU3R5bGUgPSAnJztcbiAgICB9KTtcblxuICAgIHRoaXMuaTE4blNlcnZpY2UubG9jYWxlQ2hhbmdlLnBpcGUoc3RhcnRXaXRoKCksIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMuc2V0TG9jYWxlKCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLm56Q29uZmlnU2VydmljZVxuICAgICAgLmdldENvbmZpZ0NoYW5nZUV2ZW50Rm9yQ29tcG9uZW50KE5aX0NPTkZJR19NT0RVTEVfTkFNRSlcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgICAgIH0pO1xuXG4gICAgdGhpcy5kaXIgPSB0aGlzLmRpcmVjdGlvbmFsaXR5LnZhbHVlO1xuICAgIHRoaXMuZGlyZWN0aW9uYWxpdHkuY2hhbmdlPy5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMuZGlyID0gdGhpcy5kaXJlY3Rpb25hbGl0eS52YWx1ZTtcbiAgICAgIHNydi4kcmVkcmF3Lm5leHQoKTtcbiAgICB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcbiAgICB0aGlzLmNsZWFyRGVsYXlNZW51VGltZXIoKTtcbiAgICB0aGlzLmNsZWFyRGVsYXlTZWxlY3RUaW1lcigpO1xuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKCkgPT4ge30pOiB2b2lkIHtcbiAgICB0aGlzLm9uQ2hhbmdlID0gZm47XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4ge30pOiB2b2lkIHtcbiAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xuICB9XG5cbiAgd3JpdGVWYWx1ZSh2YWx1ZTogTnpTYWZlQW55KTogdm9pZCB7XG4gICAgdGhpcy5jYXNjYWRlclNlcnZpY2UudmFsdWVzID0gdG9BcnJheSh2YWx1ZSk7XG4gICAgdGhpcy5jYXNjYWRlclNlcnZpY2Uuc3luY09wdGlvbnModHJ1ZSk7XG4gIH1cblxuICBkZWxheVNldE1lbnVWaXNpYmxlKHZpc2libGU6IGJvb2xlYW4sIGRlbGF5OiBudW1iZXIgPSAxMDAsIHNldE9wZW5pbmc6IGJvb2xlYW4gPSBmYWxzZSk6IHZvaWQge1xuICAgIHRoaXMuY2xlYXJEZWxheU1lbnVUaW1lcigpO1xuICAgIGlmIChkZWxheSkge1xuICAgICAgaWYgKHZpc2libGUgJiYgc2V0T3BlbmluZykge1xuICAgICAgICB0aGlzLmlzT3BlbmluZyA9IHRydWU7XG4gICAgICB9XG4gICAgICB0aGlzLmRlbGF5TWVudVRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0TWVudVZpc2libGUodmlzaWJsZSk7XG4gICAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICAgICAgdGhpcy5jbGVhckRlbGF5TWVudVRpbWVyKCk7XG4gICAgICAgIGlmICh2aXNpYmxlKSB7XG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmlzT3BlbmluZyA9IGZhbHNlO1xuICAgICAgICAgIH0sIDEwMCk7XG4gICAgICAgIH1cbiAgICAgIH0sIGRlbGF5KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRNZW51VmlzaWJsZSh2aXNpYmxlKTtcbiAgICB9XG4gIH1cblxuICBzZXRNZW51VmlzaWJsZSh2aXNpYmxlOiBib29sZWFuKTogdm9pZCB7XG4gICAgaWYgKHRoaXMubnpEaXNhYmxlZCB8fCB0aGlzLm1lbnVWaXNpYmxlID09PSB2aXNpYmxlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh2aXNpYmxlKSB7XG4gICAgICB0aGlzLmNhc2NhZGVyU2VydmljZS5zeW5jT3B0aW9ucygpO1xuICAgICAgdGhpcy5zY3JvbGxUb0FjdGl2YXRlZE9wdGlvbnMoKTtcbiAgICB9XG5cbiAgICBpZiAoIXZpc2libGUpIHtcbiAgICAgIHRoaXMuaW5wdXRWYWx1ZSA9ICcnO1xuICAgIH1cblxuICAgIHRoaXMubWVudVZpc2libGUgPSB2aXNpYmxlO1xuICAgIHRoaXMubnpWaXNpYmxlQ2hhbmdlLmVtaXQodmlzaWJsZSk7XG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgcHJpdmF0ZSBjbGVhckRlbGF5TWVudVRpbWVyKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmRlbGF5TWVudVRpbWVyKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5kZWxheU1lbnVUaW1lcik7XG4gICAgICB0aGlzLmRlbGF5TWVudVRpbWVyID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICBjbGVhclNlbGVjdGlvbihldmVudD86IEV2ZW50KTogdm9pZCB7XG4gICAgaWYgKGV2ZW50KSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfVxuXG4gICAgdGhpcy5sYWJlbFJlbmRlclRleHQgPSAnJztcbiAgICB0aGlzLmxhYmVsUmVuZGVyQ29udGV4dCA9IHt9O1xuICAgIHRoaXMuaW5wdXRWYWx1ZSA9ICcnO1xuICAgIHRoaXMuc2V0TWVudVZpc2libGUoZmFsc2UpO1xuICAgIHRoaXMuY2FzY2FkZXJTZXJ2aWNlLmNsZWFyKCk7XG4gIH1cblxuICBnZXRTdWJtaXRWYWx1ZSgpOiBOelNhZmVBbnlbXSB7XG4gICAgcmV0dXJuIHRoaXMuY2FzY2FkZXJTZXJ2aWNlLnNlbGVjdGVkT3B0aW9ucy5tYXAobyA9PiB0aGlzLmNhc2NhZGVyU2VydmljZS5nZXRPcHRpb25WYWx1ZShvKSk7XG4gIH1cblxuICBmb2N1cygpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuaXNGb2N1c2VkKSB7XG4gICAgICAodGhpcy5pbnB1dCA/IHRoaXMuaW5wdXQubmF0aXZlRWxlbWVudCA6IHRoaXMuZWwpLmZvY3VzKCk7XG4gICAgICB0aGlzLmlzRm9jdXNlZCA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgYmx1cigpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pc0ZvY3VzZWQpIHtcbiAgICAgICh0aGlzLmlucHV0ID8gdGhpcy5pbnB1dC5uYXRpdmVFbGVtZW50IDogdGhpcy5lbCkuYmx1cigpO1xuICAgICAgdGhpcy5pc0ZvY3VzZWQgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVJbnB1dEJsdXIoKTogdm9pZCB7XG4gICAgdGhpcy5tZW51VmlzaWJsZSA/IHRoaXMuZm9jdXMoKSA6IHRoaXMuYmx1cigpO1xuICB9XG5cbiAgaGFuZGxlSW5wdXRGb2N1cygpOiB2b2lkIHtcbiAgICB0aGlzLmZvY3VzKCk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdrZXlkb3duJywgWyckZXZlbnQnXSlcbiAgb25LZXlEb3duKGV2ZW50OiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XG4gICAgY29uc3Qga2V5Q29kZSA9IGV2ZW50LmtleUNvZGU7XG5cbiAgICBpZiAoXG4gICAgICBrZXlDb2RlICE9PSBET1dOX0FSUk9XICYmXG4gICAgICBrZXlDb2RlICE9PSBVUF9BUlJPVyAmJlxuICAgICAga2V5Q29kZSAhPT0gTEVGVF9BUlJPVyAmJlxuICAgICAga2V5Q29kZSAhPT0gUklHSFRfQVJST1cgJiZcbiAgICAgIGtleUNvZGUgIT09IEVOVEVSICYmXG4gICAgICBrZXlDb2RlICE9PSBCQUNLU1BBQ0UgJiZcbiAgICAgIGtleUNvZGUgIT09IEVTQ0FQRVxuICAgICkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIFByZXNzIGFueSBrZXlzIGFib3ZlIHRvIHJlb3BlbiBtZW51LlxuICAgIGlmICghdGhpcy5tZW51VmlzaWJsZSAmJiBrZXlDb2RlICE9PSBCQUNLU1BBQ0UgJiYga2V5Q29kZSAhPT0gRVNDQVBFKSB7XG4gICAgICByZXR1cm4gdGhpcy5zZXRNZW51VmlzaWJsZSh0cnVlKTtcbiAgICB9XG5cbiAgICAvLyBNYWtlIHRoZXNlIGtleXMgd29yayBhcyBkZWZhdWx0IGluIHNlYXJjaGluZyBtb2RlLlxuICAgIGlmICh0aGlzLmluU2VhcmNoaW5nTW9kZSAmJiAoa2V5Q29kZSA9PT0gQkFDS1NQQUNFIHx8IGtleUNvZGUgPT09IExFRlRfQVJST1cgfHwga2V5Q29kZSA9PT0gUklHSFRfQVJST1cpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gSW50ZXJhY3Qgd2l0aCB0aGUgY29tcG9uZW50LlxuICAgIGlmICh0aGlzLm1lbnVWaXNpYmxlKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgaWYgKGtleUNvZGUgPT09IERPV05fQVJST1cpIHtcbiAgICAgICAgdGhpcy5tb3ZlVXBPckRvd24oZmFsc2UpO1xuICAgICAgfSBlbHNlIGlmIChrZXlDb2RlID09PSBVUF9BUlJPVykge1xuICAgICAgICB0aGlzLm1vdmVVcE9yRG93bih0cnVlKTtcbiAgICAgIH0gZWxzZSBpZiAoa2V5Q29kZSA9PT0gTEVGVF9BUlJPVykge1xuICAgICAgICB0aGlzLm1vdmVMZWZ0KCk7XG4gICAgICB9IGVsc2UgaWYgKGtleUNvZGUgPT09IFJJR0hUX0FSUk9XKSB7XG4gICAgICAgIHRoaXMubW92ZVJpZ2h0KCk7XG4gICAgICB9IGVsc2UgaWYgKGtleUNvZGUgPT09IEVOVEVSKSB7XG4gICAgICAgIHRoaXMub25FbnRlcigpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJylcbiAgb25UcmlnZ2VyQ2xpY2soKTogdm9pZCB7XG4gICAgaWYgKHRoaXMubnpEaXNhYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy5uelNob3dTZWFyY2gpIHtcbiAgICAgIHRoaXMuZm9jdXMoKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuaXNBY3Rpb25UcmlnZ2VyKCdjbGljaycpKSB7XG4gICAgICB0aGlzLmRlbGF5U2V0TWVudVZpc2libGUoIXRoaXMubWVudVZpc2libGUsIDEwMCk7XG4gICAgfVxuICAgIHRoaXMub25Ub3VjaGVkKCk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdtb3VzZWVudGVyJylcbiAgb25UcmlnZ2VyTW91c2VFbnRlcigpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5uekRpc2FibGVkIHx8ICF0aGlzLmlzQWN0aW9uVHJpZ2dlcignaG92ZXInKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuZGVsYXlTZXRNZW51VmlzaWJsZSh0cnVlLCB0aGlzLm56TW91c2VFbnRlckRlbGF5LCB0cnVlKTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBbJyRldmVudCddKVxuICBvblRyaWdnZXJNb3VzZUxlYXZlKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgaWYgKHRoaXMubnpEaXNhYmxlZCB8fCAhdGhpcy5tZW51VmlzaWJsZSB8fCB0aGlzLmlzT3BlbmluZyB8fCAhdGhpcy5pc0FjdGlvblRyaWdnZXIoJ2hvdmVyJykpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IG1vdXNlVGFyZ2V0ID0gZXZlbnQucmVsYXRlZFRhcmdldCBhcyBIVE1MRWxlbWVudDtcbiAgICBjb25zdCBob3N0RWwgPSB0aGlzLmVsO1xuICAgIGNvbnN0IG1lbnVFbCA9IHRoaXMubWVudSAmJiAodGhpcy5tZW51Lm5hdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQpO1xuICAgIGlmIChob3N0RWwuY29udGFpbnMobW91c2VUYXJnZXQpIHx8IChtZW51RWwgJiYgbWVudUVsLmNvbnRhaW5zKG1vdXNlVGFyZ2V0KSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5kZWxheVNldE1lbnVWaXNpYmxlKGZhbHNlLCB0aGlzLm56TW91c2VMZWF2ZURlbGF5KTtcbiAgfVxuXG4gIG9uT3B0aW9uTW91c2VFbnRlcihvcHRpb246IE56Q2FzY2FkZXJPcHRpb24sIGNvbHVtbkluZGV4OiBudW1iZXIsIGV2ZW50OiBFdmVudCk6IHZvaWQge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKHRoaXMubnpFeHBhbmRUcmlnZ2VyID09PSAnaG92ZXInKSB7XG4gICAgICBpZiAoIW9wdGlvbi5pc0xlYWYpIHtcbiAgICAgICAgdGhpcy5kZWxheVNldE9wdGlvbkFjdGl2YXRlZChvcHRpb24sIGNvbHVtbkluZGV4LCBmYWxzZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNhc2NhZGVyU2VydmljZS5zZXRPcHRpb25EZWFjdGl2YXRlZFNpbmNlQ29sdW1uKGNvbHVtbkluZGV4KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBvbk9wdGlvbk1vdXNlTGVhdmUob3B0aW9uOiBOekNhc2NhZGVyT3B0aW9uLCBfY29sdW1uSW5kZXg6IG51bWJlciwgZXZlbnQ6IEV2ZW50KTogdm9pZCB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAodGhpcy5uekV4cGFuZFRyaWdnZXIgPT09ICdob3ZlcicgJiYgIW9wdGlvbi5pc0xlYWYpIHtcbiAgICAgIHRoaXMuY2xlYXJEZWxheVNlbGVjdFRpbWVyKCk7XG4gICAgfVxuICB9XG5cbiAgb25PcHRpb25DbGljayhvcHRpb246IE56Q2FzY2FkZXJPcHRpb24sIGNvbHVtbkluZGV4OiBudW1iZXIsIGV2ZW50OiBFdmVudCk6IHZvaWQge1xuICAgIGlmIChldmVudCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gICAgaWYgKG9wdGlvbiAmJiBvcHRpb24uZGlzYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5lbC5mb2N1cygpO1xuICAgIHRoaXMuaW5TZWFyY2hpbmdNb2RlXG4gICAgICA/IHRoaXMuY2FzY2FkZXJTZXJ2aWNlLnNldFNlYXJjaE9wdGlvblNlbGVjdGVkKG9wdGlvbiBhcyBOekNhc2NhZGVyU2VhcmNoT3B0aW9uKVxuICAgICAgOiB0aGlzLmNhc2NhZGVyU2VydmljZS5zZXRPcHRpb25BY3RpdmF0ZWQob3B0aW9uLCBjb2x1bW5JbmRleCwgdHJ1ZSk7XG4gIH1cblxuICBvbkNsaWNrT3V0c2lkZShldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5lbC5jb250YWlucyhldmVudC50YXJnZXQgYXMgTm9kZSkpIHtcbiAgICAgIHRoaXMuY2xvc2VNZW51KCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBpc0FjdGlvblRyaWdnZXIoYWN0aW9uOiAnY2xpY2snIHwgJ2hvdmVyJyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0eXBlb2YgdGhpcy5uelRyaWdnZXJBY3Rpb24gPT09ICdzdHJpbmcnID8gdGhpcy5uelRyaWdnZXJBY3Rpb24gPT09IGFjdGlvbiA6IHRoaXMubnpUcmlnZ2VyQWN0aW9uLmluZGV4T2YoYWN0aW9uKSAhPT0gLTE7XG4gIH1cblxuICBwcml2YXRlIG9uRW50ZXIoKTogdm9pZCB7XG4gICAgY29uc3QgY29sdW1uSW5kZXggPSBNYXRoLm1heCh0aGlzLmNhc2NhZGVyU2VydmljZS5hY3RpdmF0ZWRPcHRpb25zLmxlbmd0aCAtIDEsIDApO1xuICAgIGNvbnN0IG9wdGlvbiA9IHRoaXMuY2FzY2FkZXJTZXJ2aWNlLmFjdGl2YXRlZE9wdGlvbnNbY29sdW1uSW5kZXhdO1xuICAgIGlmIChvcHRpb24gJiYgIW9wdGlvbi5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5pblNlYXJjaGluZ01vZGVcbiAgICAgICAgPyB0aGlzLmNhc2NhZGVyU2VydmljZS5zZXRTZWFyY2hPcHRpb25TZWxlY3RlZChvcHRpb24gYXMgTnpDYXNjYWRlclNlYXJjaE9wdGlvbilcbiAgICAgICAgOiB0aGlzLmNhc2NhZGVyU2VydmljZS5zZXRPcHRpb25BY3RpdmF0ZWQob3B0aW9uLCBjb2x1bW5JbmRleCwgdHJ1ZSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBtb3ZlVXBPckRvd24oaXNVcDogYm9vbGVhbik6IHZvaWQge1xuICAgIGNvbnN0IGNvbHVtbkluZGV4ID0gTWF0aC5tYXgodGhpcy5jYXNjYWRlclNlcnZpY2UuYWN0aXZhdGVkT3B0aW9ucy5sZW5ndGggLSAxLCAwKTtcbiAgICBjb25zdCBhY3RpdmVPcHRpb24gPSB0aGlzLmNhc2NhZGVyU2VydmljZS5hY3RpdmF0ZWRPcHRpb25zW2NvbHVtbkluZGV4XTtcbiAgICBjb25zdCBvcHRpb25zID0gdGhpcy5jYXNjYWRlclNlcnZpY2UuY29sdW1uc1tjb2x1bW5JbmRleF0gfHwgW107XG4gICAgY29uc3QgbGVuZ3RoID0gb3B0aW9ucy5sZW5ndGg7XG4gICAgbGV0IG5leHRJbmRleCA9IC0xO1xuICAgIGlmICghYWN0aXZlT3B0aW9uKSB7XG4gICAgICAvLyBOb3Qgc2VsZWN0ZWQgb3B0aW9ucyBpbiB0aGlzIGNvbHVtblxuICAgICAgbmV4dEluZGV4ID0gaXNVcCA/IGxlbmd0aCA6IC0xO1xuICAgIH0gZWxzZSB7XG4gICAgICBuZXh0SW5kZXggPSBvcHRpb25zLmluZGV4T2YoYWN0aXZlT3B0aW9uKTtcbiAgICB9XG5cbiAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgbmV4dEluZGV4ID0gaXNVcCA/IG5leHRJbmRleCAtIDEgOiBuZXh0SW5kZXggKyAxO1xuICAgICAgaWYgKG5leHRJbmRleCA8IDAgfHwgbmV4dEluZGV4ID49IGxlbmd0aCkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNvbnN0IG5leHRPcHRpb24gPSBvcHRpb25zW25leHRJbmRleF07XG4gICAgICBpZiAoIW5leHRPcHRpb24gfHwgbmV4dE9wdGlvbi5kaXNhYmxlZCkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIHRoaXMuY2FzY2FkZXJTZXJ2aWNlLnNldE9wdGlvbkFjdGl2YXRlZChuZXh0T3B0aW9uLCBjb2x1bW5JbmRleCk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIG1vdmVMZWZ0KCk6IHZvaWQge1xuICAgIGNvbnN0IG9wdGlvbnMgPSB0aGlzLmNhc2NhZGVyU2VydmljZS5hY3RpdmF0ZWRPcHRpb25zO1xuICAgIGlmIChvcHRpb25zLmxlbmd0aCkge1xuICAgICAgb3B0aW9ucy5wb3AoKTsgLy8gUmVtb3ZlIHRoZSBsYXN0IG9uZVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgbW92ZVJpZ2h0KCk6IHZvaWQge1xuICAgIGNvbnN0IGxlbmd0aCA9IHRoaXMuY2FzY2FkZXJTZXJ2aWNlLmFjdGl2YXRlZE9wdGlvbnMubGVuZ3RoO1xuICAgIGNvbnN0IG9wdGlvbnMgPSB0aGlzLmNhc2NhZGVyU2VydmljZS5jb2x1bW5zW2xlbmd0aF07XG4gICAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5sZW5ndGgpIHtcbiAgICAgIGNvbnN0IG5leHRPcHQgPSBvcHRpb25zLmZpbmQobyA9PiAhby5kaXNhYmxlZCk7XG4gICAgICBpZiAobmV4dE9wdCkge1xuICAgICAgICB0aGlzLmNhc2NhZGVyU2VydmljZS5zZXRPcHRpb25BY3RpdmF0ZWQobmV4dE9wdCwgbGVuZ3RoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGNsZWFyRGVsYXlTZWxlY3RUaW1lcigpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5kZWxheVNlbGVjdFRpbWVyKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5kZWxheVNlbGVjdFRpbWVyKTtcbiAgICAgIHRoaXMuZGVsYXlTZWxlY3RUaW1lciA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBkZWxheVNldE9wdGlvbkFjdGl2YXRlZChvcHRpb246IE56Q2FzY2FkZXJPcHRpb24sIGNvbHVtbkluZGV4OiBudW1iZXIsIHBlcmZvcm1TZWxlY3Q6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLmNsZWFyRGVsYXlTZWxlY3RUaW1lcigpO1xuICAgIHRoaXMuZGVsYXlTZWxlY3RUaW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5jYXNjYWRlclNlcnZpY2Uuc2V0T3B0aW9uQWN0aXZhdGVkKG9wdGlvbiwgY29sdW1uSW5kZXgsIHBlcmZvcm1TZWxlY3QpO1xuICAgICAgdGhpcy5kZWxheVNlbGVjdFRpbWVyID0gbnVsbDtcbiAgICB9LCAxNTApO1xuICB9XG5cbiAgcHJpdmF0ZSB0b2dnbGVTZWFyY2hpbmdNb2RlKHRvU2VhcmNoaW5nOiBib29sZWFuKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaW5TZWFyY2hpbmdNb2RlICE9PSB0b1NlYXJjaGluZykge1xuICAgICAgdGhpcy5jYXNjYWRlclNlcnZpY2UudG9nZ2xlU2VhcmNoaW5nTW9kZSh0b1NlYXJjaGluZyk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaW5TZWFyY2hpbmdNb2RlKSB7XG4gICAgICB0aGlzLmNhc2NhZGVyU2VydmljZS5wcmVwYXJlU2VhcmNoT3B0aW9ucyh0aGlzLmlucHV0VmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIGlzT3B0aW9uQWN0aXZhdGVkKG9wdGlvbjogTnpDYXNjYWRlck9wdGlvbiwgaW5kZXg6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgIGNvbnN0IGFjdGl2ZU9wdCA9IHRoaXMuY2FzY2FkZXJTZXJ2aWNlLmFjdGl2YXRlZE9wdGlvbnNbaW5kZXhdO1xuICAgIHJldHVybiBhY3RpdmVPcHQgPT09IG9wdGlvbjtcbiAgfVxuXG4gIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIGlmIChpc0Rpc2FibGVkKSB7XG4gICAgICB0aGlzLmNsb3NlTWVudSgpO1xuICAgIH1cbiAgICB0aGlzLm56RGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xuICB9XG5cbiAgY2xvc2VNZW51KCk6IHZvaWQge1xuICAgIHRoaXMuYmx1cigpO1xuICAgIHRoaXMuY2xlYXJEZWxheU1lbnVUaW1lcigpO1xuICAgIHRoaXMuc2V0TWVudVZpc2libGUoZmFsc2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlcG9zaXRpb24gdGhlIGNhc2NhZGVyIHBhbmVsLiBXaGVuIGEgbWVudSBvcGVucywgdGhlIGNhc2NhZGVyIGV4cGFuZHNcbiAgICogYW5kIG1heSBleGNlZWQgdGhlIGJvdW5kYXJ5IG9mIGJyb3dzZXIncyB3aW5kb3cuXG4gICAqL1xuICBwcml2YXRlIHJlcG9zaXRpb24oKTogdm9pZCB7XG4gICAgaWYgKHRoaXMub3ZlcmxheSAmJiB0aGlzLm92ZXJsYXkub3ZlcmxheVJlZiAmJiB0aGlzLm1lbnVWaXNpYmxlKSB7XG4gICAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHtcbiAgICAgICAgdGhpcy5vdmVybGF5Lm92ZXJsYXlSZWYudXBkYXRlUG9zaXRpb24oKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBXaGVuIGEgY2FzY2FkZXIgb3B0aW9ucyBpcyBjaGFuZ2VkLCBhIGNoaWxkIG5lZWRzIHRvIGtub3cgdGhhdCBpdCBzaG91bGQgcmUtcmVuZGVyLlxuICAgKi9cbiAgcHJpdmF0ZSBjaGVja0NoaWxkcmVuKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNhc2NhZGVySXRlbXMpIHtcbiAgICAgIHRoaXMuY2FzY2FkZXJJdGVtcy5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5tYXJrRm9yQ2hlY2soKSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzZXREaXNwbGF5TGFiZWwoKTogdm9pZCB7XG4gICAgY29uc3Qgc2VsZWN0ZWRPcHRpb25zID0gdGhpcy5jYXNjYWRlclNlcnZpY2Uuc2VsZWN0ZWRPcHRpb25zO1xuICAgIGNvbnN0IGxhYmVsczogc3RyaW5nW10gPSBzZWxlY3RlZE9wdGlvbnMubWFwKG8gPT4gdGhpcy5jYXNjYWRlclNlcnZpY2UuZ2V0T3B0aW9uTGFiZWwobykpO1xuXG4gICAgaWYgKHRoaXMuaXNMYWJlbFJlbmRlclRlbXBsYXRlKSB7XG4gICAgICB0aGlzLmxhYmVsUmVuZGVyQ29udGV4dCA9IHsgbGFiZWxzLCBzZWxlY3RlZE9wdGlvbnMgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5sYWJlbFJlbmRlclRleHQgPSBkZWZhdWx0RGlzcGxheVJlbmRlci5jYWxsKHRoaXMsIGxhYmVscyk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzZXREcm9wZG93blN0eWxlcygpOiB2b2lkIHtcbiAgICBjb25zdCBmaXJzdENvbHVtbiA9IHRoaXMuY2FzY2FkZXJTZXJ2aWNlLmNvbHVtbnNbMF07XG5cbiAgICB0aGlzLnNob3VsZFNob3dFbXB0eSA9XG4gICAgICAodGhpcy5pblNlYXJjaGluZ01vZGUgJiYgKCFmaXJzdENvbHVtbiB8fCAhZmlyc3RDb2x1bW4ubGVuZ3RoKSkgfHwgLy8gU2hvdWxkIHNob3cgZW1wdHkgd2hlbiB0aGVyZSdzIG5vIHNlYXJjaGluZyByZXN1bHRcbiAgICAgICghKHRoaXMubnpPcHRpb25zICYmIHRoaXMubnpPcHRpb25zLmxlbmd0aCkgJiYgIXRoaXMubnpMb2FkRGF0YSk7IC8vIFNob3VsZCBzaG93IHdoZW4gdGhlcmUncyBubyBvcHRpb25zIGFuZCBkZXZlbG9wZXIgZG9lcyBub3QgdXNlIG56TG9hZERhdGFcbiAgICB0aGlzLmRyb3Bkb3duSGVpZ2h0U3R5bGUgPSB0aGlzLnNob3VsZFNob3dFbXB0eSA/ICdhdXRvJyA6ICcnO1xuXG4gICAgaWYgKHRoaXMuaW5wdXQpIHtcbiAgICAgIHRoaXMuZHJvcGRvd25XaWR0aFN0eWxlID0gdGhpcy5pblNlYXJjaGluZ01vZGUgfHwgdGhpcy5zaG91bGRTaG93RW1wdHkgPyBgJHt0aGlzLmlucHV0Lm5hdGl2ZUVsZW1lbnQub2Zmc2V0V2lkdGh9cHhgIDogJyc7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzZXRMb2NhbGUoKTogdm9pZCB7XG4gICAgdGhpcy5sb2NhbGUgPSB0aGlzLmkxOG5TZXJ2aWNlLmdldExvY2FsZURhdGEoJ2dsb2JhbCcpO1xuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgcHJpdmF0ZSBzY3JvbGxUb0FjdGl2YXRlZE9wdGlvbnMoKTogdm9pZCB7XG4gICAgLy8gc2Nyb2xsIG9ubHkgdW50aWwgb3B0aW9uIG1lbnUgdmlldyBpcyByZWFkeVxuICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4ge1xuICAgICAgdGhpcy5jYXNjYWRlckl0ZW1zXG4gICAgICAgIC50b0FycmF5KClcbiAgICAgICAgLmZpbHRlcihlID0+IGUuYWN0aXZhdGVkKVxuICAgICAgICAuZm9yRWFjaChlID0+IHtcbiAgICAgICAgICBlLm5hdGl2ZUVsZW1lbnQ/LnNjcm9sbEludG9WaWV3KHsgYmxvY2s6ICdzdGFydCcsIGlubGluZTogJ25lYXJlc3QnIH0pO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgfVxufVxuIl19