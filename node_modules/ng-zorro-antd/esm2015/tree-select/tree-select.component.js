/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { __decorate, __metadata } from "tslib";
import { FocusMonitor } from '@angular/cdk/a11y';
import { Directionality } from '@angular/cdk/bidi';
import { BACKSPACE, ESCAPE, TAB } from '@angular/cdk/keycodes';
import { CdkConnectedOverlay, CdkOverlayOrigin } from '@angular/cdk/overlay';
import { ChangeDetectorRef, Component, ContentChild, ElementRef, EventEmitter, forwardRef, Host, Injector, Input, Optional, Output, Renderer2, Self, TemplateRef, ViewChild } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { slideMotion } from 'ng-zorro-antd/core/animation';
import { NzConfigService, WithConfig } from 'ng-zorro-antd/core/config';
import { NzNoAnimationDirective } from 'ng-zorro-antd/core/no-animation';
import { reqAnimFrame } from 'ng-zorro-antd/core/polyfill';
import { NzTreeBase, NzTreeHigherOrderServiceToken } from 'ng-zorro-antd/core/tree';
import { InputBoolean, isNotNil } from 'ng-zorro-antd/core/util';
import { NzSelectSearchComponent } from 'ng-zorro-antd/select';
import { NzTreeComponent } from 'ng-zorro-antd/tree';
import { merge, of as observableOf, Subject } from 'rxjs';
import { filter, takeUntil, tap } from 'rxjs/operators';
import { NzTreeSelectService } from './tree-select.service';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from './tree-select.service';
import * as ɵngcc2 from 'ng-zorro-antd/core/config';
import * as ɵngcc3 from '@angular/cdk/bidi';
import * as ɵngcc4 from '@angular/cdk/a11y';
import * as ɵngcc5 from 'ng-zorro-antd/core/no-animation';
import * as ɵngcc6 from '@angular/cdk/overlay';
import * as ɵngcc7 from 'ng-zorro-antd/core/overlay';
import * as ɵngcc8 from '@angular/common';
import * as ɵngcc9 from 'ng-zorro-antd/select';
import * as ɵngcc10 from 'ng-zorro-antd/tree';
import * as ɵngcc11 from 'ng-zorro-antd/empty';

const _c0 = ["nzTreeTemplate"];
const _c1 = ["treeRef"];
function NzTreeSelectComponent_ng_template_0_span_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span", 11);
    ɵngcc0.ɵɵelement(1, "nz-embed-empty", 12);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r7 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("nzComponentName", "tree-select")("specificContent", ctx_r7.nzNotFoundContent);
} }
const _c2 = function () { return []; };
function NzTreeSelectComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    const _r9 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 7);
    ɵngcc0.ɵɵelementStart(1, "nz-tree", 8, 9);
    ɵngcc0.ɵɵlistener("nzExpandChange", function NzTreeSelectComponent_ng_template_0_Template_nz_tree_nzExpandChange_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r9); const ctx_r8 = ɵngcc0.ɵɵnextContext(); return ctx_r8.onExpandedKeysChange($event); })("nzClick", function NzTreeSelectComponent_ng_template_0_Template_nz_tree_nzClick_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r9); const ctx_r10 = ɵngcc0.ɵɵnextContext(); return ctx_r10.nzTreeClick.emit($event); })("nzCheckedKeysChange", function NzTreeSelectComponent_ng_template_0_Template_nz_tree_nzCheckedKeysChange_1_listener() { ɵngcc0.ɵɵrestoreView(_r9); const ctx_r11 = ɵngcc0.ɵɵnextContext(); return ctx_r11.updateSelectedNodes(); })("nzSelectedKeysChange", function NzTreeSelectComponent_ng_template_0_Template_nz_tree_nzSelectedKeysChange_1_listener() { ɵngcc0.ɵɵrestoreView(_r9); const ctx_r12 = ɵngcc0.ɵɵnextContext(); return ctx_r12.updateSelectedNodes(); })("nzCheckBoxChange", function NzTreeSelectComponent_ng_template_0_Template_nz_tree_nzCheckBoxChange_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r9); const ctx_r13 = ɵngcc0.ɵɵnextContext(); return ctx_r13.nzTreeCheckBoxChange.emit($event); })("nzSearchValueChange", function NzTreeSelectComponent_ng_template_0_Template_nz_tree_nzSearchValueChange_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r9); const ctx_r14 = ɵngcc0.ɵɵnextContext(); return ctx_r14.setSearchValues($event); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(3, NzTreeSelectComponent_ng_template_0_span_3_Template, 2, 2, "span", 10);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassProp("ant-select-dropdown-placement-bottomLeft", ctx_r0.dropDownPosition === "bottom")("ant-select-dropdown-placement-topLeft", ctx_r0.dropDownPosition === "top")("ant-tree-select-dropdown-rtl", ctx_r0.dir === "rtl");
    ɵngcc0.ɵɵproperty("@slideMotion", "enter")("ngClass", ctx_r0.dropdownClassName)("@.disabled", ctx_r0.noAnimation == null ? null : ctx_r0.noAnimation.nzNoAnimation)("nzNoAnimation", ctx_r0.noAnimation == null ? null : ctx_r0.noAnimation.nzNoAnimation)("dir", ctx_r0.dir)("ngStyle", ctx_r0.nzDropdownStyle);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("hidden", ctx_r0.isNotFound)("nzData", ctx_r0.nzNodes)("nzMultiple", ctx_r0.nzMultiple)("nzSearchValue", ctx_r0.inputValue)("nzHideUnMatched", ctx_r0.nzHideUnMatched)("nzShowIcon", ctx_r0.nzShowIcon)("nzCheckable", ctx_r0.nzCheckable)("nzAsyncData", ctx_r0.nzAsyncData)("nzShowExpand", ctx_r0.nzShowExpand)("nzShowLine", ctx_r0.nzShowLine)("nzExpandedIcon", ctx_r0.nzExpandedIcon)("nzExpandAll", ctx_r0.nzDefaultExpandAll)("nzExpandedKeys", ctx_r0.expandedKeys)("nzCheckedKeys", ctx_r0.nzCheckable ? ctx_r0.value : ɵngcc0.ɵɵpureFunction0(34, _c2))("nzSelectedKeys", !ctx_r0.nzCheckable ? ctx_r0.value : ɵngcc0.ɵɵpureFunction0(35, _c2))("nzTreeTemplate", ctx_r0.treeTemplate)("nzCheckStrictly", ctx_r0.nzCheckStrictly)("nzVirtualItemSize", ctx_r0.nzVirtualItemSize)("nzVirtualMaxBufferPx", ctx_r0.nzVirtualMaxBufferPx)("nzVirtualMinBufferPx", ctx_r0.nzVirtualMinBufferPx)("nzVirtualHeight", ctx_r0.nzVirtualHeight);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.nzNodes.length === 0 || ctx_r0.isNotFound);
} }
function NzTreeSelectComponent_ng_container_2_nz_select_item_1_Template(rf, ctx) { if (rf & 1) {
    const _r19 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "nz-select-item", 15);
    ɵngcc0.ɵɵlistener("delete", function NzTreeSelectComponent_ng_container_2_nz_select_item_1_Template_nz_select_item_delete_0_listener() { ɵngcc0.ɵɵrestoreView(_r19); const node_r17 = ctx.$implicit; const ctx_r18 = ɵngcc0.ɵɵnextContext(2); return ctx_r18.removeSelected(node_r17, true); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const node_r17 = ctx.$implicit;
    const ctx_r15 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("deletable", true)("disabled", node_r17.isDisabled || ctx_r15.nzDisabled)("label", ctx_r15.nzDisplayWith(node_r17));
} }
function NzTreeSelectComponent_ng_container_2_nz_select_item_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "nz-select-item", 16);
    ɵngcc0.ɵɵpipe(1, "slice");
} if (rf & 2) {
    const ctx_r16 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("contentTemplateOutlet", ctx_r16.nzMaxTagPlaceholder)("contentTemplateOutletContext", ɵngcc0.ɵɵpipeBind2(1, 5, ctx_r16.selectedNodes, ctx_r16.nzMaxTagCount))("deletable", false)("disabled", false)("label", "+ " + (ctx_r16.selectedNodes.length - ctx_r16.nzMaxTagCount) + " ...");
} }
function NzTreeSelectComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, NzTreeSelectComponent_ng_container_2_nz_select_item_1_Template, 1, 3, "nz-select-item", 13);
    ɵngcc0.ɵɵpipe(2, "slice");
    ɵngcc0.ɵɵtemplate(3, NzTreeSelectComponent_ng_container_2_nz_select_item_3_Template, 2, 8, "nz-select-item", 14);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", ɵngcc0.ɵɵpipeBind3(2, 3, ctx_r1.selectedNodes, 0, ctx_r1.nzMaxTagCount))("ngForTrackBy", ctx_r1.trackValue);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r1.selectedNodes.length > ctx_r1.nzMaxTagCount);
} }
function NzTreeSelectComponent_nz_select_placeholder_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "nz-select-placeholder", 17);
} if (rf & 2) {
    const ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵstyleProp("display", ctx_r2.placeHolderDisplay);
    ɵngcc0.ɵɵproperty("placeholder", ctx_r2.nzPlaceHolder);
} }
function NzTreeSelectComponent_nz_select_item_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "nz-select-item", 18);
} if (rf & 2) {
    const ctx_r3 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("deletable", false)("disabled", false)("label", ctx_r3.nzDisplayWith(ctx_r3.selectedNodes[0]));
} }
function NzTreeSelectComponent_nz_select_arrow_6_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "nz-select-arrow");
} }
function NzTreeSelectComponent_nz_select_clear_7_Template(rf, ctx) { if (rf & 1) {
    const _r21 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "nz-select-clear", 19);
    ɵngcc0.ɵɵlistener("clear", function NzTreeSelectComponent_nz_select_clear_7_Template_nz_select_clear_clear_0_listener() { ɵngcc0.ɵɵrestoreView(_r21); const ctx_r20 = ɵngcc0.ɵɵnextContext(); return ctx_r20.onClearSelection(); });
    ɵngcc0.ɵɵelementEnd();
} }
export function higherOrderServiceFactory(injector) {
    return injector.get(NzTreeSelectService);
}
const NZ_CONFIG_MODULE_NAME = 'treeSelect';
const TREE_SELECT_DEFAULT_CLASS = 'ant-select-dropdown ant-select-tree-dropdown';
export class NzTreeSelectComponent extends NzTreeBase {
    constructor(nzTreeService, nzConfigService, renderer, cdr, elementRef, directionality, focusMonitor, noAnimation) {
        super(nzTreeService);
        this.nzConfigService = nzConfigService;
        this.renderer = renderer;
        this.cdr = cdr;
        this.elementRef = elementRef;
        this.directionality = directionality;
        this.focusMonitor = focusMonitor;
        this.noAnimation = noAnimation;
        this._nzModuleName = NZ_CONFIG_MODULE_NAME;
        this.nzId = null;
        this.nzAllowClear = true;
        this.nzShowExpand = true;
        this.nzShowLine = false;
        this.nzDropdownMatchSelectWidth = true;
        this.nzCheckable = false;
        this.nzHideUnMatched = false;
        this.nzShowIcon = false;
        this.nzShowSearch = false;
        this.nzDisabled = false;
        this.nzAsyncData = false;
        this.nzMultiple = false;
        this.nzDefaultExpandAll = false;
        this.nzCheckStrictly = false;
        this.nzVirtualItemSize = 28;
        this.nzVirtualMaxBufferPx = 500;
        this.nzVirtualMinBufferPx = 28;
        this.nzVirtualHeight = null;
        this.nzNodes = [];
        this.nzOpen = false;
        this.nzSize = 'default';
        this.nzPlaceHolder = '';
        this.nzDropdownStyle = null;
        this.nzBackdrop = false;
        this.nzDisplayWith = (node) => node.title;
        this.nzMaxTagPlaceholder = null;
        this.nzOpenChange = new EventEmitter();
        this.nzCleared = new EventEmitter();
        this.nzRemoved = new EventEmitter();
        this.nzExpandChange = new EventEmitter();
        this.nzTreeClick = new EventEmitter();
        this.nzTreeCheckBoxChange = new EventEmitter();
        this.dropdownClassName = TREE_SELECT_DEFAULT_CLASS;
        this.isComposing = false;
        this.isDestroy = true;
        this.isNotFound = false;
        this.focused = false;
        this.inputValue = '';
        this.dropDownPosition = 'bottom';
        this.selectedNodes = [];
        this.expandedKeys = [];
        this.value = [];
        this.dir = 'ltr';
        this.destroy$ = new Subject();
        this.onChange = _value => { };
        this.onTouched = () => { };
        // TODO: move to host after View Engine deprecation
        this.elementRef.nativeElement.classList.add('ant-select');
        this.renderer.addClass(this.elementRef.nativeElement, 'ant-select');
        this.renderer.addClass(this.elementRef.nativeElement, 'ant-tree-select');
    }
    set nzExpandedKeys(value) {
        this.expandedKeys = value;
    }
    get nzExpandedKeys() {
        return this.expandedKeys;
    }
    get treeTemplate() {
        return this.nzTreeTemplate || this.nzTreeTemplateChild;
    }
    get placeHolderDisplay() {
        return this.inputValue || this.isComposing || this.selectedNodes.length ? 'none' : 'block';
    }
    get isMultiple() {
        return this.nzMultiple || this.nzCheckable;
    }
    ngOnInit() {
        var _a;
        this.isDestroy = false;
        this.subscribeSelectionChange();
        (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
            this.dir = direction;
            this.cdr.detectChanges();
        });
        this.dir = this.directionality.value;
        this.focusMonitor
            .monitor(this.elementRef, true)
            .pipe(takeUntil(this.destroy$))
            .subscribe(focusOrigin => {
            if (!focusOrigin) {
                this.focused = false;
                this.cdr.markForCheck();
                Promise.resolve().then(() => {
                    this.onTouched();
                });
            }
            else {
                this.focused = true;
                this.cdr.markForCheck();
            }
        });
    }
    ngOnDestroy() {
        this.isDestroy = true;
        this.closeDropDown();
        this.destroy$.next();
        this.destroy$.complete();
    }
    isComposingChange(isComposing) {
        this.isComposing = isComposing;
    }
    setDisabledState(isDisabled) {
        this.nzDisabled = isDisabled;
        this.closeDropDown();
    }
    ngOnChanges(changes) {
        const { nzNodes, nzDropdownClassName } = changes;
        if (nzNodes) {
            this.updateSelectedNodes(true);
        }
        if (nzDropdownClassName) {
            const className = this.nzDropdownClassName && this.nzDropdownClassName.trim();
            this.dropdownClassName = className ? `${TREE_SELECT_DEFAULT_CLASS} ${className}` : TREE_SELECT_DEFAULT_CLASS;
        }
    }
    writeValue(value) {
        if (isNotNil(value)) {
            if (this.isMultiple && Array.isArray(value)) {
                this.value = value;
            }
            else {
                this.value = [value];
            }
            this.updateSelectedNodes(true);
        }
        else {
            this.value = [];
            this.selectedNodes.forEach(node => {
                this.removeSelected(node, false);
            });
            this.selectedNodes = [];
        }
        this.cdr.markForCheck();
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    onKeydown(event) {
        if (this.nzDisabled) {
            return;
        }
        switch (event.keyCode) {
            case ESCAPE:
                /**
                 * Skip the ESCAPE processing, it will be handled in {@link onOverlayKeyDown}.
                 */
                break;
            case TAB:
                this.closeDropDown();
                break;
            default:
                if (!this.nzOpen) {
                    this.openDropdown();
                }
        }
    }
    trigger() {
        if (this.nzDisabled || (!this.nzDisabled && this.nzOpen)) {
            this.closeDropDown();
        }
        else {
            this.openDropdown();
        }
    }
    openDropdown() {
        if (!this.nzDisabled) {
            this.nzOpen = true;
            this.nzOpenChange.emit(this.nzOpen);
            this.updateCdkConnectedOverlayStatus();
            if (this.nzShowSearch || this.isMultiple) {
                this.focusOnInput();
            }
        }
    }
    closeDropDown() {
        this.onTouched();
        this.nzOpen = false;
        this.inputValue = '';
        this.isNotFound = false;
        this.nzOpenChange.emit(this.nzOpen);
        this.cdr.markForCheck();
    }
    onKeyDownInput(e) {
        const keyCode = e.keyCode;
        const eventTarget = e.target;
        if (this.isMultiple && !eventTarget.value && keyCode === BACKSPACE) {
            e.preventDefault();
            if (this.selectedNodes.length) {
                const removeNode = this.selectedNodes[this.selectedNodes.length - 1];
                this.removeSelected(removeNode);
            }
        }
    }
    onExpandedKeysChange(value) {
        this.nzExpandChange.emit(value);
        this.expandedKeys = [...value.keys];
    }
    setInputValue(value) {
        this.inputValue = value;
        this.updatePosition();
    }
    removeSelected(node, emit = true) {
        node.isSelected = false;
        node.isChecked = false;
        if (this.nzCheckable) {
            this.nzTreeService.conduct(node, this.nzCheckStrictly);
        }
        else {
            this.nzTreeService.setSelectedNodeList(node, this.nzMultiple);
        }
        if (emit) {
            this.nzRemoved.emit(node);
        }
    }
    focusOnInput() {
        if (this.nzSelectSearchComponent) {
            this.nzSelectSearchComponent.focus();
        }
    }
    subscribeSelectionChange() {
        merge(this.nzTreeClick.pipe(tap((event) => {
            const node = event.node;
            if (this.nzCheckable && !node.isDisabled && !node.isDisableCheckbox) {
                node.isChecked = !node.isChecked;
                node.isHalfChecked = false;
                if (!this.nzCheckStrictly) {
                    this.nzTreeService.conduct(node);
                }
            }
            if (this.nzCheckable) {
                node.isSelected = false;
            }
        }), filter((event) => {
            const node = event.node;
            return this.nzCheckable ? !node.isDisabled && !node.isDisableCheckbox : !node.isDisabled && node.isSelectable;
        })), this.nzCheckable ? this.nzTreeCheckBoxChange : observableOf(), this.nzCleared, this.nzRemoved)
            .pipe(takeUntil(this.destroy$))
            .subscribe(() => {
            this.updateSelectedNodes();
            const value = this.selectedNodes.map(node => node.key);
            this.value = [...value];
            if (this.nzShowSearch || this.isMultiple) {
                this.inputValue = '';
                this.isNotFound = false;
            }
            if (this.isMultiple) {
                this.onChange(value);
                this.focusOnInput();
                this.updatePosition();
            }
            else {
                this.closeDropDown();
                this.onChange(value.length ? value[0] : null);
            }
        });
    }
    updateSelectedNodes(init = false) {
        if (init) {
            const nodes = this.coerceTreeNodes(this.nzNodes);
            this.nzTreeService.isMultiple = this.isMultiple;
            this.nzTreeService.isCheckStrictly = this.nzCheckStrictly;
            this.nzTreeService.initTree(nodes);
            if (this.nzCheckable) {
                this.nzTreeService.conductCheck(this.value, this.nzCheckStrictly);
            }
            else {
                this.nzTreeService.conductSelectedKeys(this.value, this.isMultiple);
            }
        }
        this.selectedNodes = [...(this.nzCheckable ? this.getCheckedNodeList() : this.getSelectedNodeList())];
    }
    updatePosition() {
        reqAnimFrame(() => {
            var _a, _b;
            (_b = (_a = this.cdkConnectedOverlay) === null || _a === void 0 ? void 0 : _a.overlayRef) === null || _b === void 0 ? void 0 : _b.updatePosition();
        });
    }
    onPositionChange(position) {
        this.dropDownPosition = position.connectionPair.originY;
    }
    onClearSelection() {
        this.selectedNodes.forEach(node => {
            this.removeSelected(node, false);
        });
        this.nzCleared.emit();
    }
    onClickOutside(event) {
        if (!this.elementRef.nativeElement.contains(event.target)) {
            this.closeDropDown();
        }
    }
    setSearchValues($event) {
        Promise.resolve().then(() => {
            this.isNotFound = (this.nzShowSearch || this.isMultiple) && !!this.inputValue && $event.matchedKeys.length === 0;
        });
    }
    updateCdkConnectedOverlayStatus() {
        this.triggerWidth = this.cdkOverlayOrigin.elementRef.nativeElement.getBoundingClientRect().width;
    }
    trackValue(_index, option) {
        return option.key;
    }
}
NzTreeSelectComponent.ɵfac = function NzTreeSelectComponent_Factory(t) { return new (t || NzTreeSelectComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc1.NzTreeSelectService), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.NzConfigService), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc3.Directionality, 8), ɵngcc0.ɵɵdirectiveInject(ɵngcc4.FocusMonitor), ɵngcc0.ɵɵdirectiveInject(ɵngcc5.NzNoAnimationDirective, 9)); };
NzTreeSelectComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzTreeSelectComponent, selectors: [["nz-tree-select"]], contentQueries: function NzTreeSelectComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵstaticContentQuery(dirIndex, _c0, true);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.nzTreeTemplateChild = _t.first);
    } }, viewQuery: function NzTreeSelectComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(NzSelectSearchComponent, true);
        ɵngcc0.ɵɵviewQuery(_c1, true);
        ɵngcc0.ɵɵstaticViewQuery(CdkOverlayOrigin, true);
        ɵngcc0.ɵɵviewQuery(CdkConnectedOverlay, true);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.nzSelectSearchComponent = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.treeRef = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.cdkOverlayOrigin = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.cdkConnectedOverlay = _t.first);
    } }, hostVars: 22, hostBindings: function NzTreeSelectComponent_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("click", function NzTreeSelectComponent_click_HostBindingHandler() { return ctx.trigger(); })("keydown", function NzTreeSelectComponent_keydown_HostBindingHandler($event) { return ctx.onKeydown($event); });
    } if (rf & 2) {
        ɵngcc0.ɵɵclassProp("ant-select-lg", ctx.nzSize === "large")("ant-select-rtl", ctx.dir === "rtl")("ant-select-sm", ctx.nzSize === "small")("ant-select-disabled", ctx.nzDisabled)("ant-select-single", !ctx.isMultiple)("ant-select-show-arrow", !ctx.isMultiple)("ant-select-show-search", !ctx.isMultiple)("ant-select-multiple", ctx.isMultiple)("ant-select-allow-clear", ctx.nzAllowClear)("ant-select-open", ctx.nzOpen)("ant-select-focused", ctx.nzOpen || ctx.focused);
    } }, inputs: { nzId: "nzId", nzAllowClear: "nzAllowClear", nzShowExpand: "nzShowExpand", nzShowLine: "nzShowLine", nzDropdownMatchSelectWidth: "nzDropdownMatchSelectWidth", nzCheckable: "nzCheckable", nzHideUnMatched: "nzHideUnMatched", nzShowIcon: "nzShowIcon", nzShowSearch: "nzShowSearch", nzDisabled: "nzDisabled", nzAsyncData: "nzAsyncData", nzMultiple: "nzMultiple", nzDefaultExpandAll: "nzDefaultExpandAll", nzCheckStrictly: "nzCheckStrictly", nzVirtualItemSize: "nzVirtualItemSize", nzVirtualMaxBufferPx: "nzVirtualMaxBufferPx", nzVirtualMinBufferPx: "nzVirtualMinBufferPx", nzVirtualHeight: "nzVirtualHeight", nzNodes: "nzNodes", nzOpen: "nzOpen", nzSize: "nzSize", nzPlaceHolder: "nzPlaceHolder", nzDropdownStyle: "nzDropdownStyle", nzBackdrop: "nzBackdrop", nzDisplayWith: "nzDisplayWith", nzMaxTagPlaceholder: "nzMaxTagPlaceholder", nzExpandedKeys: "nzExpandedKeys", nzExpandedIcon: "nzExpandedIcon", nzNotFoundContent: "nzNotFoundContent", nzDropdownClassName: "nzDropdownClassName", nzMaxTagCount: "nzMaxTagCount", nzTreeTemplate: "nzTreeTemplate" }, outputs: { nzOpenChange: "nzOpenChange", nzCleared: "nzCleared", nzRemoved: "nzRemoved", nzExpandChange: "nzExpandChange", nzTreeClick: "nzTreeClick", nzTreeCheckBoxChange: "nzTreeCheckBoxChange" }, exportAs: ["nzTreeSelect"], features: [ɵngcc0.ɵɵProvidersFeature([
            NzTreeSelectService,
            {
                provide: NzTreeHigherOrderServiceToken,
                useFactory: higherOrderServiceFactory,
                deps: [[new Self(), Injector]]
            },
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => NzTreeSelectComponent),
                multi: true
            }
        ]), ɵngcc0.ɵɵInheritDefinitionFeature, ɵngcc0.ɵɵNgOnChangesFeature], decls: 8, vars: 17, consts: [["cdkConnectedOverlay", "", "nzConnectedOverlay", "", 3, "cdkConnectedOverlayHasBackdrop", "cdkConnectedOverlayOrigin", "cdkConnectedOverlayOpen", "cdkConnectedOverlayTransformOriginOn", "cdkConnectedOverlayMinWidth", "cdkConnectedOverlayWidth", "overlayOutsideClick", "detach", "positionChange"], ["cdkOverlayOrigin", "", 1, "ant-select-selector"], [4, "ngIf"], [3, "nzId", "showInput", "value", "mirrorSync", "disabled", "focusTrigger", "keydown", "isComposingChange", "valueChange"], [3, "placeholder", "display", 4, "ngIf"], [3, "deletable", "disabled", "label", 4, "ngIf"], [3, "clear", 4, "ngIf"], [3, "ngClass", "nzNoAnimation", "dir", "ngStyle"], ["nzNoAnimation", "", "nzSelectMode", "", "nzBlockNode", "", 3, "hidden", "nzData", "nzMultiple", "nzSearchValue", "nzHideUnMatched", "nzShowIcon", "nzCheckable", "nzAsyncData", "nzShowExpand", "nzShowLine", "nzExpandedIcon", "nzExpandAll", "nzExpandedKeys", "nzCheckedKeys", "nzSelectedKeys", "nzTreeTemplate", "nzCheckStrictly", "nzVirtualItemSize", "nzVirtualMaxBufferPx", "nzVirtualMinBufferPx", "nzVirtualHeight", "nzExpandChange", "nzClick", "nzCheckedKeysChange", "nzSelectedKeysChange", "nzCheckBoxChange", "nzSearchValueChange"], ["treeRef", ""], ["class", "ant-select-not-found", 4, "ngIf"], [1, "ant-select-not-found"], [3, "nzComponentName", "specificContent"], [3, "deletable", "disabled", "label", "delete", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "contentTemplateOutlet", "contentTemplateOutletContext", "deletable", "disabled", "label", 4, "ngIf"], [3, "deletable", "disabled", "label", "delete"], [3, "contentTemplateOutlet", "contentTemplateOutletContext", "deletable", "disabled", "label"], [3, "placeholder"], [3, "deletable", "disabled", "label"], [3, "clear"]], template: function NzTreeSelectComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, NzTreeSelectComponent_ng_template_0_Template, 4, 36, "ng-template", 0);
        ɵngcc0.ɵɵlistener("overlayOutsideClick", function NzTreeSelectComponent_Template_ng_template_overlayOutsideClick_0_listener($event) { return ctx.onClickOutside($event); })("detach", function NzTreeSelectComponent_Template_ng_template_detach_0_listener() { return ctx.closeDropDown(); })("positionChange", function NzTreeSelectComponent_Template_ng_template_positionChange_0_listener($event) { return ctx.onPositionChange($event); });
        ɵngcc0.ɵɵelementStart(1, "div", 1);
        ɵngcc0.ɵɵtemplate(2, NzTreeSelectComponent_ng_container_2_Template, 4, 7, "ng-container", 2);
        ɵngcc0.ɵɵelementStart(3, "nz-select-search", 3);
        ɵngcc0.ɵɵlistener("keydown", function NzTreeSelectComponent_Template_nz_select_search_keydown_3_listener($event) { return ctx.onKeyDownInput($event); })("isComposingChange", function NzTreeSelectComponent_Template_nz_select_search_isComposingChange_3_listener($event) { return ctx.isComposing = $event; })("valueChange", function NzTreeSelectComponent_Template_nz_select_search_valueChange_3_listener($event) { return ctx.setInputValue($event); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(4, NzTreeSelectComponent_nz_select_placeholder_4_Template, 1, 3, "nz-select-placeholder", 4);
        ɵngcc0.ɵɵtemplate(5, NzTreeSelectComponent_nz_select_item_5_Template, 1, 3, "nz-select-item", 5);
        ɵngcc0.ɵɵtemplate(6, NzTreeSelectComponent_nz_select_arrow_6_Template, 1, 0, "nz-select-arrow", 2);
        ɵngcc0.ɵɵtemplate(7, NzTreeSelectComponent_nz_select_clear_7_Template, 1, 0, "nz-select-clear", 6);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("cdkConnectedOverlayHasBackdrop", ctx.nzBackdrop)("cdkConnectedOverlayOrigin", ctx.cdkOverlayOrigin)("cdkConnectedOverlayOpen", ctx.nzOpen)("cdkConnectedOverlayTransformOriginOn", ".ant-select-tree-dropdown")("cdkConnectedOverlayMinWidth", ctx.nzDropdownMatchSelectWidth ? null : ctx.triggerWidth)("cdkConnectedOverlayWidth", ctx.nzDropdownMatchSelectWidth ? ctx.triggerWidth : null);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngIf", ctx.isMultiple);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("nzId", ctx.nzId)("showInput", ctx.nzShowSearch)("value", ctx.inputValue)("mirrorSync", ctx.isMultiple)("disabled", ctx.nzDisabled)("focusTrigger", ctx.nzOpen);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.nzPlaceHolder && ctx.selectedNodes.length === 0);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.isMultiple && ctx.selectedNodes.length === 1 && !ctx.isComposing && ctx.inputValue === "");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.isMultiple);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.nzAllowClear && !ctx.nzDisabled && ctx.selectedNodes.length);
    } }, directives: [ɵngcc6.CdkConnectedOverlay, ɵngcc7.NzConnectedOverlayDirective, ɵngcc6.CdkOverlayOrigin, ɵngcc8.NgIf, ɵngcc9.NzSelectSearchComponent, ɵngcc8.NgClass, ɵngcc5.NzNoAnimationDirective, ɵngcc3.Dir, ɵngcc8.NgStyle, ɵngcc10.NzTreeComponent, ɵngcc11.NzEmbedEmptyComponent, ɵngcc8.NgForOf, ɵngcc9.NzSelectItemComponent, ɵngcc9.NzSelectPlaceholderComponent, ɵngcc9.NzSelectArrowComponent, ɵngcc9.NzSelectClearComponent], pipes: [ɵngcc8.SlicePipe], encapsulation: 2, data: { animation: [slideMotion] } });
NzTreeSelectComponent.ctorParameters = () => [
    { type: NzTreeSelectService },
    { type: NzConfigService },
    { type: Renderer2 },
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: Directionality, decorators: [{ type: Optional }] },
    { type: FocusMonitor },
    { type: NzNoAnimationDirective, decorators: [{ type: Host }, { type: Optional }] }
];
NzTreeSelectComponent.propDecorators = {
    nzId: [{ type: Input }],
    nzAllowClear: [{ type: Input }],
    nzShowExpand: [{ type: Input }],
    nzShowLine: [{ type: Input }],
    nzDropdownMatchSelectWidth: [{ type: Input }],
    nzCheckable: [{ type: Input }],
    nzHideUnMatched: [{ type: Input }],
    nzShowIcon: [{ type: Input }],
    nzShowSearch: [{ type: Input }],
    nzDisabled: [{ type: Input }],
    nzAsyncData: [{ type: Input }],
    nzMultiple: [{ type: Input }],
    nzDefaultExpandAll: [{ type: Input }],
    nzCheckStrictly: [{ type: Input }],
    nzVirtualItemSize: [{ type: Input }],
    nzVirtualMaxBufferPx: [{ type: Input }],
    nzVirtualMinBufferPx: [{ type: Input }],
    nzVirtualHeight: [{ type: Input }],
    nzExpandedIcon: [{ type: Input }],
    nzNotFoundContent: [{ type: Input }],
    nzNodes: [{ type: Input }],
    nzOpen: [{ type: Input }],
    nzSize: [{ type: Input }],
    nzPlaceHolder: [{ type: Input }],
    nzDropdownStyle: [{ type: Input }],
    nzDropdownClassName: [{ type: Input }],
    nzBackdrop: [{ type: Input }],
    nzExpandedKeys: [{ type: Input }],
    nzDisplayWith: [{ type: Input }],
    nzMaxTagCount: [{ type: Input }],
    nzMaxTagPlaceholder: [{ type: Input }],
    nzOpenChange: [{ type: Output }],
    nzCleared: [{ type: Output }],
    nzRemoved: [{ type: Output }],
    nzExpandChange: [{ type: Output }],
    nzTreeClick: [{ type: Output }],
    nzTreeCheckBoxChange: [{ type: Output }],
    nzSelectSearchComponent: [{ type: ViewChild, args: [NzSelectSearchComponent, { static: false },] }],
    treeRef: [{ type: ViewChild, args: ['treeRef', { static: false },] }],
    cdkOverlayOrigin: [{ type: ViewChild, args: [CdkOverlayOrigin, { static: true },] }],
    cdkConnectedOverlay: [{ type: ViewChild, args: [CdkConnectedOverlay, { static: false },] }],
    nzTreeTemplate: [{ type: Input }],
    nzTreeTemplateChild: [{ type: ContentChild, args: ['nzTreeTemplate', { static: true },] }]
};
__decorate([
    InputBoolean(),
    __metadata("design:type", Boolean)
], NzTreeSelectComponent.prototype, "nzAllowClear", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Boolean)
], NzTreeSelectComponent.prototype, "nzShowExpand", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Boolean)
], NzTreeSelectComponent.prototype, "nzShowLine", void 0);
__decorate([
    InputBoolean(),
    WithConfig(),
    __metadata("design:type", Boolean)
], NzTreeSelectComponent.prototype, "nzDropdownMatchSelectWidth", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Boolean)
], NzTreeSelectComponent.prototype, "nzCheckable", void 0);
__decorate([
    InputBoolean(),
    WithConfig(),
    __metadata("design:type", Boolean)
], NzTreeSelectComponent.prototype, "nzHideUnMatched", void 0);
__decorate([
    InputBoolean(),
    WithConfig(),
    __metadata("design:type", Boolean)
], NzTreeSelectComponent.prototype, "nzShowIcon", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Boolean)
], NzTreeSelectComponent.prototype, "nzShowSearch", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzTreeSelectComponent.prototype, "nzDisabled", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzTreeSelectComponent.prototype, "nzAsyncData", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzTreeSelectComponent.prototype, "nzMultiple", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzTreeSelectComponent.prototype, "nzDefaultExpandAll", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzTreeSelectComponent.prototype, "nzCheckStrictly", void 0);
__decorate([
    WithConfig(),
    __metadata("design:type", String)
], NzTreeSelectComponent.prototype, "nzSize", void 0);
__decorate([
    WithConfig(),
    __metadata("design:type", Object)
], NzTreeSelectComponent.prototype, "nzBackdrop", void 0);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzTreeSelectComponent, [{
        type: Component,
        args: [{
                selector: 'nz-tree-select',
                exportAs: 'nzTreeSelect',
                animations: [slideMotion],
                template: `
    <ng-template
      cdkConnectedOverlay
      nzConnectedOverlay
      [cdkConnectedOverlayHasBackdrop]="nzBackdrop"
      [cdkConnectedOverlayOrigin]="cdkOverlayOrigin"
      [cdkConnectedOverlayOpen]="nzOpen"
      [cdkConnectedOverlayTransformOriginOn]="'.ant-select-tree-dropdown'"
      [cdkConnectedOverlayMinWidth]="$any(nzDropdownMatchSelectWidth ? null : triggerWidth)"
      [cdkConnectedOverlayWidth]="$any(nzDropdownMatchSelectWidth ? triggerWidth : null)"
      (overlayOutsideClick)="onClickOutside($event)"
      (detach)="closeDropDown()"
      (positionChange)="onPositionChange($event)"
    >
      <div
        [@slideMotion]="'enter'"
        [ngClass]="dropdownClassName"
        [@.disabled]="noAnimation?.nzNoAnimation"
        [nzNoAnimation]="noAnimation?.nzNoAnimation"
        [class.ant-select-dropdown-placement-bottomLeft]="dropDownPosition === 'bottom'"
        [class.ant-select-dropdown-placement-topLeft]="dropDownPosition === 'top'"
        [class.ant-tree-select-dropdown-rtl]="dir === 'rtl'"
        [dir]="dir"
        [ngStyle]="nzDropdownStyle"
      >
        <nz-tree
          #treeRef
          [hidden]="isNotFound"
          nzNoAnimation
          nzSelectMode
          nzBlockNode
          [nzData]="nzNodes"
          [nzMultiple]="nzMultiple"
          [nzSearchValue]="inputValue"
          [nzHideUnMatched]="nzHideUnMatched"
          [nzShowIcon]="nzShowIcon"
          [nzCheckable]="nzCheckable"
          [nzAsyncData]="nzAsyncData"
          [nzShowExpand]="nzShowExpand"
          [nzShowLine]="nzShowLine"
          [nzExpandedIcon]="nzExpandedIcon"
          [nzExpandAll]="nzDefaultExpandAll"
          [nzExpandedKeys]="expandedKeys"
          [nzCheckedKeys]="nzCheckable ? value : []"
          [nzSelectedKeys]="!nzCheckable ? value : []"
          [nzTreeTemplate]="treeTemplate"
          [nzCheckStrictly]="nzCheckStrictly"
          [nzVirtualItemSize]="nzVirtualItemSize"
          [nzVirtualMaxBufferPx]="nzVirtualMaxBufferPx"
          [nzVirtualMinBufferPx]="nzVirtualMinBufferPx"
          [nzVirtualHeight]="nzVirtualHeight"
          (nzExpandChange)="onExpandedKeysChange($event)"
          (nzClick)="nzTreeClick.emit($event)"
          (nzCheckedKeysChange)="updateSelectedNodes()"
          (nzSelectedKeysChange)="updateSelectedNodes()"
          (nzCheckBoxChange)="nzTreeCheckBoxChange.emit($event)"
          (nzSearchValueChange)="setSearchValues($event)"
        ></nz-tree>
        <span *ngIf="nzNodes.length === 0 || isNotFound" class="ant-select-not-found">
          <nz-embed-empty [nzComponentName]="'tree-select'" [specificContent]="nzNotFoundContent"></nz-embed-empty>
        </span>
      </div>
    </ng-template>

    <div cdkOverlayOrigin class="ant-select-selector">
      <ng-container *ngIf="isMultiple">
        <nz-select-item
          *ngFor="let node of selectedNodes | slice: 0:nzMaxTagCount; trackBy: trackValue"
          [deletable]="true"
          [disabled]="node.isDisabled || nzDisabled"
          [label]="nzDisplayWith(node)"
          (delete)="removeSelected(node, true)"
        ></nz-select-item>

        <nz-select-item
          *ngIf="selectedNodes.length > nzMaxTagCount"
          [contentTemplateOutlet]="nzMaxTagPlaceholder"
          [contentTemplateOutletContext]="selectedNodes | slice: nzMaxTagCount"
          [deletable]="false"
          [disabled]="false"
          [label]="'+ ' + (selectedNodes.length - nzMaxTagCount) + ' ...'"
        ></nz-select-item>
      </ng-container>

      <nz-select-search
        [nzId]="nzId"
        [showInput]="nzShowSearch"
        (keydown)="onKeyDownInput($event)"
        (isComposingChange)="isComposing = $event"
        (valueChange)="setInputValue($event)"
        [value]="inputValue"
        [mirrorSync]="isMultiple"
        [disabled]="nzDisabled"
        [focusTrigger]="nzOpen"
      ></nz-select-search>

      <nz-select-placeholder
        *ngIf="nzPlaceHolder && selectedNodes.length === 0"
        [placeholder]="nzPlaceHolder"
        [style.display]="placeHolderDisplay"
      ></nz-select-placeholder>

      <nz-select-item
        *ngIf="!isMultiple && selectedNodes.length === 1 && !isComposing && inputValue === ''"
        [deletable]="false"
        [disabled]="false"
        [label]="nzDisplayWith(selectedNodes[0])"
      ></nz-select-item>

      <nz-select-arrow *ngIf="!isMultiple"></nz-select-arrow>

      <nz-select-clear *ngIf="nzAllowClear && !nzDisabled && selectedNodes.length" (clear)="onClearSelection()"></nz-select-clear>
    </div>
  `,
                providers: [
                    NzTreeSelectService,
                    {
                        provide: NzTreeHigherOrderServiceToken,
                        useFactory: higherOrderServiceFactory,
                        deps: [[new Self(), Injector]]
                    },
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => NzTreeSelectComponent),
                        multi: true
                    }
                ],
                host: {
                    '[class.ant-select-lg]': 'nzSize==="large"',
                    '[class.ant-select-rtl]': 'dir==="rtl"',
                    '[class.ant-select-sm]': 'nzSize==="small"',
                    '[class.ant-select-disabled]': 'nzDisabled',
                    '[class.ant-select-single]': '!isMultiple',
                    '[class.ant-select-show-arrow]': '!isMultiple',
                    '[class.ant-select-show-search]': '!isMultiple',
                    '[class.ant-select-multiple]': 'isMultiple',
                    '[class.ant-select-allow-clear]': 'nzAllowClear',
                    '[class.ant-select-open]': 'nzOpen',
                    '[class.ant-select-focused]': 'nzOpen || focused',
                    '(click)': 'trigger()',
                    '(keydown)': 'onKeydown($event)'
                }
            }]
    }], function () { return [{ type: ɵngcc1.NzTreeSelectService }, { type: ɵngcc2.NzConfigService }, { type: ɵngcc0.Renderer2 }, { type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc0.ElementRef }, { type: ɵngcc3.Directionality, decorators: [{
                type: Optional
            }] }, { type: ɵngcc4.FocusMonitor }, { type: ɵngcc5.NzNoAnimationDirective, decorators: [{
                type: Host
            }, {
                type: Optional
            }] }]; }, { nzId: [{
            type: Input
        }], nzAllowClear: [{
            type: Input
        }], nzShowExpand: [{
            type: Input
        }], nzShowLine: [{
            type: Input
        }], nzDropdownMatchSelectWidth: [{
            type: Input
        }], nzCheckable: [{
            type: Input
        }], nzHideUnMatched: [{
            type: Input
        }], nzShowIcon: [{
            type: Input
        }], nzShowSearch: [{
            type: Input
        }], nzDisabled: [{
            type: Input
        }], nzAsyncData: [{
            type: Input
        }], nzMultiple: [{
            type: Input
        }], nzDefaultExpandAll: [{
            type: Input
        }], nzCheckStrictly: [{
            type: Input
        }], nzVirtualItemSize: [{
            type: Input
        }], nzVirtualMaxBufferPx: [{
            type: Input
        }], nzVirtualMinBufferPx: [{
            type: Input
        }], nzVirtualHeight: [{
            type: Input
        }], nzNodes: [{
            type: Input
        }], nzOpen: [{
            type: Input
        }], nzSize: [{
            type: Input
        }], nzPlaceHolder: [{
            type: Input
        }], nzDropdownStyle: [{
            type: Input
        }], nzBackdrop: [{
            type: Input
        }], nzDisplayWith: [{
            type: Input
        }], nzMaxTagPlaceholder: [{
            type: Input
        }], nzOpenChange: [{
            type: Output
        }], nzCleared: [{
            type: Output
        }], nzRemoved: [{
            type: Output
        }], nzExpandChange: [{
            type: Output
        }], nzTreeClick: [{
            type: Output
        }], nzTreeCheckBoxChange: [{
            type: Output
        }], nzExpandedKeys: [{
            type: Input
        }], nzExpandedIcon: [{
            type: Input
        }], nzNotFoundContent: [{
            type: Input
        }], nzDropdownClassName: [{
            type: Input
        }], nzMaxTagCount: [{
            type: Input
        }], nzSelectSearchComponent: [{
            type: ViewChild,
            args: [NzSelectSearchComponent, { static: false }]
        }], treeRef: [{
            type: ViewChild,
            args: ['treeRef', { static: false }]
        }], cdkOverlayOrigin: [{
            type: ViewChild,
            args: [CdkOverlayOrigin, { static: true }]
        }], cdkConnectedOverlay: [{
            type: ViewChild,
            args: [CdkConnectedOverlay, { static: false }]
        }], nzTreeTemplate: [{
            type: Input
        }], nzTreeTemplateChild: [{
            type: ContentChild,
            args: ['nzTreeTemplate', { static: true }]
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1zZWxlY3QuY29tcG9uZW50LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9jb21wb25lbnRzL3RyZWUtc2VsZWN0L3RyZWUtc2VsZWN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFakQsT0FBTyxFQUFhLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQzlELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQy9ELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxnQkFBZ0IsRUFBa0MsTUFBTSxzQkFBc0IsQ0FBQztBQUM3RyxPQUFPLEVBQ0wsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxZQUFZLEVBQ1osVUFBVSxFQUNWLFlBQVksRUFDWixVQUFVLEVBQ1YsSUFBSSxFQUNKLFFBQVEsRUFDUixLQUFLLEVBSUwsUUFBUSxFQUNSLE1BQU0sRUFDTixTQUFTLEVBQ1QsSUFBSSxFQUVKLFdBQVcsRUFDWCxTQUFTLEVBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3pFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUMzRCxPQUFPLEVBQWUsZUFBZSxFQUFFLFVBQVUsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3JGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUUzRCxPQUFPLEVBRUwsVUFBVSxFQUVWLDZCQUE2QixFQUc5QixNQUFNLHlCQUF5QixDQUFDO0FBRWpDLE9BQU8sRUFBRSxZQUFZLEVBQUUsUUFBUSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDakUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDL0QsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXJELE9BQU8sRUFBRSxLQUFLLEVBQUUsRUFBRSxJQUFJLFlBQVksRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDMUQsT0FBTyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVELE1BQU0sVUFBVSx5QkFBeUIsQ0FBQyxRQUFrQjtBQUFJLElBQzlELE9BQU8sUUFBUSxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0FBQzNDLENBQUM7QUFFRCxNQUFNLHFCQUFxQixHQUFnQixZQUFZLENBQUM7QUFDeEQsTUFBTSx5QkFBeUIsR0FBRyw4Q0FBOEMsQ0FBQztBQXFKakYsTUFBTSxPQUFPLHFCQUFzQixTQUFRLFVBQVU7QUFBRyxJQW1HdEQsWUFDRSxhQUFrQyxFQUMzQixlQUFnQyxFQUMvQixRQUFtQixFQUNuQixHQUFzQixFQUN0QixVQUFzQixFQUNWLGNBQThCLEVBQzFDLFlBQTBCLEVBQ1AsV0FBb0M7QUFDaEUsUUFDQyxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUM7QUFDekIsUUFUVyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7QUFBQyxRQUNoQyxhQUFRLEdBQVIsUUFBUSxDQUFXO0FBQUMsUUFDcEIsUUFBRyxHQUFILEdBQUcsQ0FBbUI7QUFBQyxRQUN2QixlQUFVLEdBQVYsVUFBVSxDQUFZO0FBQUMsUUFDWCxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7QUFBQyxRQUMzQyxpQkFBWSxHQUFaLFlBQVksQ0FBYztBQUFDLFFBQ1IsZ0JBQVcsR0FBWCxXQUFXLENBQXlCO0FBQ25FLFFBM0dXLGtCQUFhLEdBQWdCLHFCQUFxQixDQUFDO0FBQzlELFFBZVcsU0FBSSxHQUFrQixJQUFJLENBQUM7QUFDdEMsUUFBMkIsaUJBQVksR0FBWSxJQUFJLENBQUM7QUFDeEQsUUFBMkIsaUJBQVksR0FBWSxJQUFJLENBQUM7QUFDeEQsUUFBMkIsZUFBVSxHQUFZLEtBQUssQ0FBQztBQUN2RCxRQUF5QywrQkFBMEIsR0FBWSxJQUFJLENBQUM7QUFDcEYsUUFBMkIsZ0JBQVcsR0FBWSxLQUFLLENBQUM7QUFDeEQsUUFBeUMsb0JBQWUsR0FBWSxLQUFLLENBQUM7QUFDMUUsUUFBeUMsZUFBVSxHQUFZLEtBQUssQ0FBQztBQUNyRSxRQUEyQixpQkFBWSxHQUFZLEtBQUssQ0FBQztBQUN6RCxRQUEyQixlQUFVLEdBQUcsS0FBSyxDQUFDO0FBQzlDLFFBQTJCLGdCQUFXLEdBQUcsS0FBSyxDQUFDO0FBQy9DLFFBQTJCLGVBQVUsR0FBRyxLQUFLLENBQUM7QUFDOUMsUUFBMkIsdUJBQWtCLEdBQUcsS0FBSyxDQUFDO0FBQ3RELFFBQTJCLG9CQUFlLEdBQUcsS0FBSyxDQUFDO0FBQ25ELFFBQVcsc0JBQWlCLEdBQUcsRUFBRSxDQUFDO0FBQ2xDLFFBQVcseUJBQW9CLEdBQUcsR0FBRyxDQUFDO0FBQ3RDLFFBQVcseUJBQW9CLEdBQUcsRUFBRSxDQUFDO0FBQ3JDLFFBQVcsb0JBQWUsR0FBa0IsSUFBSSxDQUFDO0FBQ2pELFFBRVcsWUFBTyxHQUEwQyxFQUFFLENBQUM7QUFDL0QsUUFBVyxXQUFNLEdBQUcsS0FBSyxDQUFDO0FBQzFCLFFBQXlCLFdBQU0sR0FBa0IsU0FBUyxDQUFDO0FBQzNELFFBQVcsa0JBQWEsR0FBRyxFQUFFLENBQUM7QUFDOUIsUUFBVyxvQkFBZSxHQUE0QixJQUFJLENBQUM7QUFDM0QsUUFDeUIsZUFBVSxHQUFHLEtBQUssQ0FBQztBQUM1QyxRQVFXLGtCQUFhLEdBQTZDLENBQUMsSUFBZ0IsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztBQUN0RyxRQUNXLHdCQUFtQixHQUFvRCxJQUFJLENBQUM7QUFDdkYsUUFBcUIsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBVyxDQUFDO0FBQ2hFLFFBQXFCLGNBQVMsR0FBRyxJQUFJLFlBQVksRUFBUSxDQUFDO0FBQzFELFFBQXFCLGNBQVMsR0FBRyxJQUFJLFlBQVksRUFBYyxDQUFDO0FBQ2hFLFFBQXFCLG1CQUFjLEdBQUcsSUFBSSxZQUFZLEVBQXFCLENBQUM7QUFDNUUsUUFBcUIsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBcUIsQ0FBQztBQUN6RSxRQUFxQix5QkFBb0IsR0FBRyxJQUFJLFlBQVksRUFBcUIsQ0FBQztBQUNsRixRQVlFLHNCQUFpQixHQUFHLHlCQUF5QixDQUFDO0FBQ2hELFFBQ0UsZ0JBQVcsR0FBRyxLQUFLLENBQUM7QUFDdEIsUUFBRSxjQUFTLEdBQUcsSUFBSSxDQUFDO0FBQ25CLFFBQUUsZUFBVSxHQUFHLEtBQUssQ0FBQztBQUNyQixRQUFFLFlBQU8sR0FBRyxLQUFLLENBQUM7QUFDbEIsUUFBRSxlQUFVLEdBQUcsRUFBRSxDQUFDO0FBQ2xCLFFBQUUscUJBQWdCLEdBQWdDLFFBQVEsQ0FBQztBQUMzRCxRQUFFLGtCQUFhLEdBQWlCLEVBQUUsQ0FBQztBQUNuQyxRQUFFLGlCQUFZLEdBQWEsRUFBRSxDQUFDO0FBQzlCLFFBQUUsVUFBSyxHQUFhLEVBQUUsQ0FBQztBQUN2QixRQUFFLFFBQUcsR0FBYyxLQUFLLENBQUM7QUFDekIsUUFDVSxhQUFRLEdBQUcsSUFBSSxPQUFPLEVBQVEsQ0FBQztBQUN6QyxRQUNFLGFBQVEsR0FBaUIsTUFBTSxDQUFDLEVBQUUsR0FBRSxDQUFDLENBQUM7QUFDeEMsUUFBRSxjQUFTLEdBQWtCLEdBQUcsRUFBRSxHQUFFLENBQUMsQ0FBQztBQUN0QyxRQW9CSSxtREFBbUQ7QUFDdkQsUUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBQzlELFFBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsWUFBWSxDQUFDLENBQUM7QUFDeEUsUUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO0FBQzdFLElBQUUsQ0FBQztBQUNILElBdkVFLElBQ0ksY0FBYyxDQUFDLEtBQWU7QUFDcEMsUUFBSSxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztBQUM5QixJQUFFLENBQUM7QUFDSCxJQUFFLElBQUksY0FBYztBQUFLLFFBQ3JCLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztBQUM3QixJQUFFLENBQUM7QUFDSCxJQWtCRSxJQUFJLFlBQVk7QUFBSyxRQUNuQixPQUFPLElBQUksQ0FBQyxjQUFjLElBQUksSUFBSSxDQUFDLG1CQUFtQixDQUFDO0FBQzNELElBQUUsQ0FBQztBQUNILElBbUJFLElBQUksa0JBQWtCO0FBQUssUUFDekIsT0FBTyxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDO0FBQy9GLElBQUUsQ0FBQztBQUNILElBQ0UsSUFBSSxVQUFVO0FBQUssUUFDakIsT0FBTyxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUM7QUFDL0MsSUFBRSxDQUFDO0FBQ0gsSUFrQkUsUUFBUTtBQUFLO0FBQ0wsUUFBTixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztBQUMzQixRQUFJLElBQUksQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO0FBQ3BDLFFBQ0ksTUFBQSxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sMENBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsU0FBUyxDQUFDLENBQUMsU0FBb0IsRUFBRSxFQUFFO0FBQ2xHLFlBQU0sSUFBSSxDQUFDLEdBQUcsR0FBRyxTQUFTLENBQUM7QUFDM0IsWUFBTSxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxDQUFDO0FBQy9CLFFBQUksQ0FBQyxFQUFFO0FBQ1AsUUFBSSxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDO0FBQ3pDLFFBQ0ksSUFBSSxDQUFDLFlBQVk7QUFDckIsYUFBTyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUM7QUFDckMsYUFBTyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUNyQyxhQUFPLFNBQVMsQ0FBQyxXQUFXLENBQUMsRUFBRTtBQUMvQixZQUFRLElBQUksQ0FBQyxXQUFXLEVBQUU7QUFDMUIsZ0JBQVUsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7QUFDL0IsZ0JBQVUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztBQUNsQyxnQkFBVSxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRTtBQUN0QyxvQkFBWSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7QUFDN0IsZ0JBQVUsQ0FBQyxDQUFDLENBQUM7QUFDYixhQUFTO0FBQUMsaUJBQUs7QUFDZixnQkFBVSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztBQUM5QixnQkFBVSxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO0FBQ2xDLGFBQVM7QUFDVCxRQUFNLENBQUMsQ0FBQyxDQUFDO0FBQ1QsSUFBRSxDQUFDO0FBQ0gsSUFDRSxXQUFXO0FBQUssUUFDZCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztBQUMxQixRQUFJLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztBQUN6QixRQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDekIsUUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO0FBQzdCLElBQUUsQ0FBQztBQUNILElBQ0UsaUJBQWlCLENBQUMsV0FBb0I7QUFBSSxRQUN4QyxJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztBQUNuQyxJQUFFLENBQUM7QUFDSCxJQUNFLGdCQUFnQixDQUFDLFVBQW1CO0FBQUksUUFDdEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7QUFDakMsUUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7QUFDekIsSUFBRSxDQUFDO0FBQ0gsSUFDRSxXQUFXLENBQUMsT0FBc0I7QUFBSSxRQUNwQyxNQUFNLEVBQUUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLEdBQUcsT0FBTyxDQUFDO0FBQ3JELFFBQUksSUFBSSxPQUFPLEVBQUU7QUFDakIsWUFBTSxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDckMsU0FBSztBQUNMLFFBQUksSUFBSSxtQkFBbUIsRUFBRTtBQUM3QixZQUFNLE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxtQkFBbUIsSUFBSSxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDcEYsWUFBTSxJQUFJLENBQUMsaUJBQWlCLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLHlCQUF5QixJQUFJLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQyx5QkFBeUIsQ0FBQztBQUNuSCxTQUFLO0FBQ0wsSUFBRSxDQUFDO0FBQ0gsSUFDRSxVQUFVLENBQUMsS0FBd0I7QUFBSSxRQUNyQyxJQUFJLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBRTtBQUN6QixZQUFNLElBQUksSUFBSSxDQUFDLFVBQVUsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO0FBQ25ELGdCQUFRLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0FBQzNCLGFBQU87QUFBQyxpQkFBSztBQUNiLGdCQUFRLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxLQUFlLENBQUMsQ0FBQztBQUN2QyxhQUFPO0FBQ1AsWUFBTSxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDckMsU0FBSztBQUFDLGFBQUs7QUFDWCxZQUFNLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO0FBQ3RCLFlBQU0sSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7QUFDeEMsZ0JBQVEsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDekMsWUFBTSxDQUFDLENBQUMsQ0FBQztBQUNULFlBQU0sSUFBSSxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUM7QUFDOUIsU0FBSztBQUNMLFFBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztBQUM1QixJQUFFLENBQUM7QUFDSCxJQUNFLGdCQUFnQixDQUFDLEVBQXlDO0FBQUksUUFDNUQsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7QUFDdkIsSUFBRSxDQUFDO0FBQ0gsSUFDRSxpQkFBaUIsQ0FBQyxFQUFjO0FBQUksUUFDbEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7QUFDeEIsSUFBRSxDQUFDO0FBQ0gsSUFDRSxTQUFTLENBQUMsS0FBb0I7QUFBSSxRQUNoQyxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7QUFDekIsWUFBTSxPQUFPO0FBQ2IsU0FBSztBQUNMLFFBQUksUUFBUSxLQUFLLENBQUMsT0FBTyxFQUFFO0FBQzNCLFlBQU0sS0FBSyxNQUFNO0FBQ2pCLGdCQUFRO0FBQ1I7QUFDUSxtQkFBRztBQUNYLGdCQUFRLE1BQU07QUFDZCxZQUFNLEtBQUssR0FBRztBQUNkLGdCQUFRLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztBQUM3QixnQkFBUSxNQUFNO0FBQ2QsWUFBTTtBQUNOLGdCQUFRLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO0FBQzFCLG9CQUFVLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztBQUM5QixpQkFBUztBQUNULFNBQUs7QUFDTCxJQUFFLENBQUM7QUFDSCxJQUNFLE9BQU87QUFBSyxRQUNWLElBQUksSUFBSSxDQUFDLFVBQVUsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUU7QUFDOUQsWUFBTSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7QUFDM0IsU0FBSztBQUFDLGFBQUs7QUFDWCxZQUFNLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztBQUMxQixTQUFLO0FBQ0wsSUFBRSxDQUFDO0FBQ0gsSUFDRSxZQUFZO0FBQUssUUFDZixJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRTtBQUMxQixZQUFNLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO0FBQ3pCLFlBQU0sSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQzFDLFlBQU0sSUFBSSxDQUFDLCtCQUErQixFQUFFLENBQUM7QUFDN0MsWUFBTSxJQUFJLElBQUksQ0FBQyxZQUFZLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtBQUNoRCxnQkFBUSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7QUFDNUIsYUFBTztBQUNQLFNBQUs7QUFDTCxJQUFFLENBQUM7QUFDSCxJQUNFLGFBQWE7QUFBSyxRQUNoQixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7QUFDckIsUUFBSSxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztBQUN4QixRQUFJLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO0FBQ3pCLFFBQUksSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7QUFDNUIsUUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDeEMsUUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO0FBQzVCLElBQUUsQ0FBQztBQUNILElBQ0UsY0FBYyxDQUFDLENBQWdCO0FBQUksUUFDakMsTUFBTSxPQUFPLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQztBQUM5QixRQUFJLE1BQU0sV0FBVyxHQUFHLENBQUMsQ0FBQyxNQUEwQixDQUFDO0FBQ3JELFFBQUksSUFBSSxJQUFJLENBQUMsVUFBVSxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssSUFBSSxPQUFPLEtBQUssU0FBUyxFQUFFO0FBQ3hFLFlBQU0sQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO0FBQ3pCLFlBQU0sSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRTtBQUNyQyxnQkFBUSxNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQzdFLGdCQUFRLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDeEMsYUFBTztBQUNQLFNBQUs7QUFDTCxJQUFFLENBQUM7QUFDSCxJQUNFLG9CQUFvQixDQUFDLEtBQXdCO0FBQUksUUFDL0MsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDcEMsUUFBSSxJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUMsSUFBSyxDQUFDLENBQUM7QUFDekMsSUFBRSxDQUFDO0FBQ0gsSUFDRSxhQUFhLENBQUMsS0FBYTtBQUFJLFFBQzdCLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO0FBQzVCLFFBQUksSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0FBQzFCLElBQUUsQ0FBQztBQUNILElBQ0UsY0FBYyxDQUFDLElBQWdCLEVBQUUsT0FBZ0IsSUFBSTtBQUFJLFFBQ3ZELElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO0FBQzVCLFFBQUksSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7QUFDM0IsUUFBSSxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7QUFDMUIsWUFBTSxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0FBQzdELFNBQUs7QUFBQyxhQUFLO0FBQ1gsWUFBTSxJQUFJLENBQUMsYUFBYSxDQUFDLG1CQUFtQixDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDcEUsU0FBSztBQUNMLFFBQ0ksSUFBSSxJQUFJLEVBQUU7QUFDZCxZQUFNLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ2hDLFNBQUs7QUFDTCxJQUFFLENBQUM7QUFDSCxJQUNFLFlBQVk7QUFBSyxRQUNmLElBQUksSUFBSSxDQUFDLHVCQUF1QixFQUFFO0FBQ3RDLFlBQU0sSUFBSSxDQUFDLHVCQUF1QixDQUFDLEtBQUssRUFBRSxDQUFDO0FBQzNDLFNBQUs7QUFDTCxJQUFFLENBQUM7QUFDSCxJQUNFLHdCQUF3QjtBQUFLLFFBQzNCLEtBQUssQ0FDSCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FDbkIsR0FBRyxDQUFDLENBQUMsS0FBd0IsRUFBRSxFQUFFO0FBQ3pDLFlBQVUsTUFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLElBQUssQ0FBQztBQUNuQyxZQUFVLElBQUksSUFBSSxDQUFDLFdBQVcsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUU7QUFDL0UsZ0JBQVksSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7QUFDN0MsZ0JBQVksSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7QUFDdkMsZ0JBQVksSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUU7QUFDdkMsb0JBQWMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDL0MsaUJBQWE7QUFDYixhQUFXO0FBQ1gsWUFBVSxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7QUFDaEMsZ0JBQVksSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7QUFDcEMsYUFBVztBQUNYLFFBQVEsQ0FBQyxDQUFDLEVBQ0YsTUFBTSxDQUFDLENBQUMsS0FBd0IsRUFBRSxFQUFFO0FBQzVDLFlBQVUsTUFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLElBQUssQ0FBQztBQUNuQyxZQUFVLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQztBQUN4SCxRQUFRLENBQUMsQ0FBQyxDQUNILEVBQ0QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQyxZQUFZLEVBQUUsRUFDN0QsSUFBSSxDQUFDLFNBQVMsRUFDZCxJQUFJLENBQUMsU0FBUyxDQUNmO0FBQ0wsYUFBTyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUNyQyxhQUFPLFNBQVMsQ0FBQyxHQUFHLEVBQUU7QUFDdEIsWUFBUSxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztBQUNuQyxZQUFRLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUksQ0FBQyxDQUFDO0FBQ2hFLFlBQVEsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUM7QUFDaEMsWUFBUSxJQUFJLElBQUksQ0FBQyxZQUFZLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtBQUNsRCxnQkFBVSxJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztBQUMvQixnQkFBVSxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztBQUNsQyxhQUFTO0FBQ1QsWUFBUSxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7QUFDN0IsZ0JBQVUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUMvQixnQkFBVSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7QUFDOUIsZ0JBQVUsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0FBQ2hDLGFBQVM7QUFBQyxpQkFBSztBQUNmLGdCQUFVLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztBQUMvQixnQkFBVSxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDeEQsYUFBUztBQUNULFFBQU0sQ0FBQyxDQUFDLENBQUM7QUFDVCxJQUFFLENBQUM7QUFDSCxJQUNFLG1CQUFtQixDQUFDLE9BQWdCLEtBQUs7QUFBSSxRQUMzQyxJQUFJLElBQUksRUFBRTtBQUNkLFlBQU0sTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDdkQsWUFBTSxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO0FBQ3RELFlBQU0sSUFBSSxDQUFDLGFBQWEsQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQztBQUNoRSxZQUFNLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ3pDLFlBQU0sSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO0FBQzVCLGdCQUFRLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0FBQzFFLGFBQU87QUFBQyxpQkFBSztBQUNiLGdCQUFRLElBQUksQ0FBQyxhQUFhLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDNUUsYUFBTztBQUNQLFNBQUs7QUFDTCxRQUNJLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUMxRyxJQUFFLENBQUM7QUFDSCxJQUNFLGNBQWM7QUFBSyxRQUNqQixZQUFZLENBQUMsR0FBRyxFQUFFO0FBQ3RCO0FBQXdCLFlBQWxCLFlBQUEsSUFBSSxDQUFDLG1CQUFtQiwwQ0FBRSxVQUFVLDBDQUFFLGNBQWMsR0FBRztBQUM3RCxRQUFJLENBQUMsQ0FBQyxDQUFDO0FBQ1AsSUFBRSxDQUFDO0FBQ0gsSUFDRSxnQkFBZ0IsQ0FBQyxRQUF3QztBQUFJLFFBQzNELElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQztBQUM1RCxJQUFFLENBQUM7QUFDSCxJQUNFLGdCQUFnQjtBQUFLLFFBQ25CLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO0FBQ3RDLFlBQU0sSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDdkMsUUFBSSxDQUFDLENBQUMsQ0FBQztBQUNQLFFBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUMxQixJQUFFLENBQUM7QUFDSCxJQUNFLGNBQWMsQ0FBQyxLQUFpQjtBQUFJLFFBQ2xDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxFQUFFO0FBQy9ELFlBQU0sSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0FBQzNCLFNBQUs7QUFDTCxJQUFFLENBQUM7QUFDSCxJQUNFLGVBQWUsQ0FBQyxNQUF5QjtBQUFJLFFBQzNDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFO0FBQ2hDLFlBQU0sSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxJQUFJLE1BQU0sQ0FBQyxXQUFZLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQztBQUN4SCxRQUFJLENBQUMsQ0FBQyxDQUFDO0FBQ1AsSUFBRSxDQUFDO0FBQ0gsSUFDRSwrQkFBK0I7QUFBSyxRQUNsQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLHFCQUFxQixFQUFFLENBQUMsS0FBSyxDQUFDO0FBQ3JHLElBQUUsQ0FBQztBQUNILElBQ0UsVUFBVSxDQUFDLE1BQWMsRUFBRSxNQUFrQjtBQUFJLFFBQy9DLE9BQU8sTUFBTSxDQUFDLEdBQUksQ0FBQztBQUN2QixJQUFFLENBQUM7QUFDSDtpREFsaEJDLFNBQVMsU0FBQyxrQkFDVCxRQUFRLEVBQUUsZ0JBQWdCLGtCQUMxQixRQUFRLEVBQUUsY0FBYyxrQkFDeEIsVUFBVSxFQUFFLENBQUMsV0FBVyxDQUFDLGtCQUN6QixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzttbEJBaUhULGtCQUNELFNBQVMsRUFBRSxzQkFDVCxtQkFBbUIsc0JBQ25CLDBCQUNFLE9BQU8sRUFBRSw2QkFBNkIsMEJBQ3RDLFVBQVUsRUFBRSx5QkFBeUIsMEJBQ3JDLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxJQUFJLEVBQUUsRUFBRSxRQUFRLENBQUMsQ0FBQyxzQkFDL0Isc0JBQ0QsMEJBQ0UsT0FBTyxFQUFFLGlCQUFpQiwwQkFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQywwQkFDcEQsS0FBSyxFQUFFLElBQUksc0JBQ1osa0JBQ0Ysa0JBQ0QsSUFBSSxFQUFFLHNCQUNKLHVCQUF1QixFQUFFLGtCQUFrQixzQkFDM0Msd0JBQXdCLEVBQUUsYUFBYSxzQkFDdkMsdUJBQXVCLEVBQUUsa0JBQWtCLHNCQUMzQyw2QkFBNkIsRUFBRSxZQUFZLHNCQUMzQywyQkFBMkIsRUFBRSxhQUFhLHNCQUMxQywrQkFBK0IsRUFBRSxhQUFhLHNCQUM5QyxnQ0FBZ0MsRUFBRSxhQUFhLHNCQUMvQyw2QkFBNkIsRUFBRSxZQUFZLHNCQUMzQyxnQ0FBZ0MsRUFBRSxjQUFjLHNCQUNoRCx5QkFBeUIsRUFBRSxRQUFRLHNCQUNuQyw0QkFBNEIsRUFBRSxtQkFBbUIsc0JBQ2pELFNBQVMsRUFBRSxXQUFXO09BQ3RCLFdBQVcsRUFBRSxtQkFBbUIsa0JBQ2pDLGNBQ0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29nQkFDSTtBQUFDO0FBQStDLFlBNUo1QyxtQkFBbUI7QUFBSSxZQW5CVixlQUFlO0FBQUksWUFSdkMsU0FBUztBQUNULFlBZkEsaUJBQWlCO0FBQ2pCLFlBRUEsVUFBVTtBQUNWLFlBUmtCLGNBQWMsdUJBa1Q3QixRQUFRO0FBQU8sWUFwVFgsWUFBWTtBQUFJLFlBNkJoQixzQkFBc0IsdUJBeVIxQixJQUFJLFlBQUksUUFBUTtBQUFNO0FBQUc7QUFDM0IsbUJBM0ZBLEtBQUs7QUFBSywyQkFDVixLQUFLO0FBQUssMkJBQ1YsS0FBSztBQUFLLHlCQUNWLEtBQUs7QUFBSyx5Q0FDVixLQUFLO0FBQUssMEJBQ1YsS0FBSztBQUFLLDhCQUNWLEtBQUs7QUFBSyx5QkFDVixLQUFLO0FBQUssMkJBQ1YsS0FBSztBQUFLLHlCQUNWLEtBQUs7QUFBSywwQkFDVixLQUFLO0FBQUsseUJBQ1YsS0FBSztBQUFLLGlDQUNWLEtBQUs7QUFBSyw4QkFDVixLQUFLO0FBQUssZ0NBQ1YsS0FBSztBQUFLLG1DQUNWLEtBQUs7QUFBSyxtQ0FDVixLQUFLO0FBQUssOEJBQ1YsS0FBSztBQUFLLDZCQUNWLEtBQUs7QUFBSyxnQ0FDVixLQUFLO0FBQUssc0JBQ1YsS0FBSztBQUFLLHFCQUNWLEtBQUs7QUFBSyxxQkFDVixLQUFLO0FBQUssNEJBQ1YsS0FBSztBQUFLLDhCQUNWLEtBQUs7QUFBSyxrQ0FDVixLQUFLO0FBQUsseUJBQ1YsS0FBSztBQUFLLDZCQUNWLEtBQUs7QUFDTiw0QkFPQyxLQUFLO0FBQUssNEJBQ1YsS0FBSztBQUFLLGtDQUNWLEtBQUs7QUFBSywyQkFDVixNQUFNO0FBQUssd0JBQ1gsTUFBTTtBQUFLLHdCQUNYLE1BQU07QUFBSyw2QkFDWCxNQUFNO0FBQUssMEJBQ1gsTUFBTTtBQUFLLG1DQUNYLE1BQU07QUFBSyxzQ0FFWCxTQUFTLFNBQUMsdUJBQXVCLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFO0FBQU8sc0JBQzNELFNBQVMsU0FBQyxTQUFTLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFO0FBQU8sK0JBQzdDLFNBQVMsU0FBQyxnQkFBZ0IsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7QUFBTyxrQ0FDbkQsU0FBUyxTQUFDLG1CQUFtQixFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTtBQUFPLDZCQUV2RCxLQUFLO0FBQUssa0NBQ1YsWUFBWSxTQUFDLGdCQUFnQixFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtBQUFNO0FBbEQ3QjtBQUFhLElBQTVCLFlBQVksRUFBRTtBQUFFO0FBQ2xCLDJEQUQ4QztBQUM3QjtBQUFhLElBQTVCLFlBQVksRUFBRTtBQUFFO0FBQ2xCLDJEQUQ4QztBQUM3QjtBQUFhLElBQTVCLFlBQVksRUFBRTtBQUFFO0FBQ2pCLHlEQUQ0QztBQUNkO0FBQWEsSUFBMUMsWUFBWSxFQUFFO0FBQUUsSUFBQSxVQUFVLEVBQUU7QUFBRTtBQUF1Qyx5RUFBRztBQUN6RDtBQUFhLElBQTVCLFlBQVksRUFBRTtBQUFFO0FBQ2xCLDBEQUQ4QztBQUNmO0FBQWEsSUFBMUMsWUFBWSxFQUFFO0FBQUUsSUFBQSxVQUFVLEVBQUU7QUFBRTtBQUNwQyw4REFEb0U7QUFDakM7QUFBYSxJQUExQyxZQUFZLEVBQUU7QUFBRSxJQUFBLFVBQVUsRUFBRTtBQUFFO0FBQy9CLHlEQUQwRDtBQUMxQztBQUFhLElBQTVCLFlBQVksRUFBRTtBQUFFO0FBQ25CLDJEQURnRDtBQUM5QjtBQUFhLElBQTVCLFlBQVksRUFBRTtBQUFFO0FBQ1QseURBRDJCO0FBQ25CO0FBQWEsSUFBNUIsWUFBWSxFQUFFO0FBQUU7QUFDViwwREFENkI7QUFDcEI7QUFBYSxJQUE1QixZQUFZLEVBQUU7QUFBRTtBQUNULHlEQUQyQjtBQUNuQjtBQUFhLElBQTVCLFlBQVksRUFBRTtBQUFFO0FBQ2pCLGlFQUQyQztBQUMzQjtBQUFhLElBQTVCLFlBQVksRUFBRTtBQUFFO0FBQ2QsOERBRHFDO0FBUzFCO0FBQWEsSUFBMUIsVUFBVSxFQUFFO0FBQUU7QUFDdEIscURBRHVEO0FBSWxDO0FBQWEsSUFBMUIsVUFBVSxFQUFFO0FBQUU7QUFFbEIseURBRm9DOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQUM1QztBQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHsgRm9jdXNNb25pdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2ExMXknO1xuXG5pbXBvcnQgeyBEaXJlY3Rpb24sIERpcmVjdGlvbmFsaXR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2JpZGknO1xuaW1wb3J0IHsgQkFDS1NQQUNFLCBFU0NBUEUsIFRBQiB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9rZXljb2Rlcyc7XG5pbXBvcnQgeyBDZGtDb25uZWN0ZWRPdmVybGF5LCBDZGtPdmVybGF5T3JpZ2luLCBDb25uZWN0ZWRPdmVybGF5UG9zaXRpb25DaGFuZ2UgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBDb250ZW50Q2hpbGQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgZm9yd2FyZFJlZixcbiAgSG9zdCxcbiAgSW5qZWN0b3IsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPcHRpb25hbCxcbiAgT3V0cHV0LFxuICBSZW5kZXJlcjIsXG4gIFNlbGYsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3Q2hpbGRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBzbGlkZU1vdGlvbiB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9hbmltYXRpb24nO1xuaW1wb3J0IHsgTnpDb25maWdLZXksIE56Q29uZmlnU2VydmljZSwgV2l0aENvbmZpZyB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9jb25maWcnO1xuaW1wb3J0IHsgTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9uby1hbmltYXRpb24nO1xuaW1wb3J0IHsgcmVxQW5pbUZyYW1lIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3BvbHlmaWxsJztcblxuaW1wb3J0IHtcbiAgTnpGb3JtYXRFbWl0RXZlbnQsXG4gIE56VHJlZUJhc2UsXG4gIE56VHJlZUJhc2VTZXJ2aWNlLFxuICBOelRyZWVIaWdoZXJPcmRlclNlcnZpY2VUb2tlbixcbiAgTnpUcmVlTm9kZSxcbiAgTnpUcmVlTm9kZU9wdGlvbnNcbn0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3RyZWUnO1xuaW1wb3J0IHsgQm9vbGVhbklucHV0LCBOZ1N0eWxlSW50ZXJmYWNlLCBOelNpemVMRFNUeXBlLCBPbkNoYW5nZVR5cGUsIE9uVG91Y2hlZFR5cGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuaW1wb3J0IHsgSW5wdXRCb29sZWFuLCBpc05vdE5pbCB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS91dGlsJztcbmltcG9ydCB7IE56U2VsZWN0U2VhcmNoQ29tcG9uZW50IH0gZnJvbSAnbmctem9ycm8tYW50ZC9zZWxlY3QnO1xuaW1wb3J0IHsgTnpUcmVlQ29tcG9uZW50IH0gZnJvbSAnbmctem9ycm8tYW50ZC90cmVlJztcblxuaW1wb3J0IHsgbWVyZ2UsIG9mIGFzIG9ic2VydmFibGVPZiwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCB0YWtlVW50aWwsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IE56VHJlZVNlbGVjdFNlcnZpY2UgfSBmcm9tICcuL3RyZWUtc2VsZWN0LnNlcnZpY2UnO1xuXG5leHBvcnQgZnVuY3Rpb24gaGlnaGVyT3JkZXJTZXJ2aWNlRmFjdG9yeShpbmplY3RvcjogSW5qZWN0b3IpOiBOelRyZWVCYXNlU2VydmljZSB7XG4gIHJldHVybiBpbmplY3Rvci5nZXQoTnpUcmVlU2VsZWN0U2VydmljZSk7XG59XG5cbmNvbnN0IE5aX0NPTkZJR19NT0RVTEVfTkFNRTogTnpDb25maWdLZXkgPSAndHJlZVNlbGVjdCc7XG5jb25zdCBUUkVFX1NFTEVDVF9ERUZBVUxUX0NMQVNTID0gJ2FudC1zZWxlY3QtZHJvcGRvd24gYW50LXNlbGVjdC10cmVlLWRyb3Bkb3duJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbnotdHJlZS1zZWxlY3QnLFxuICBleHBvcnRBczogJ256VHJlZVNlbGVjdCcsXG4gIGFuaW1hdGlvbnM6IFtzbGlkZU1vdGlvbl0sXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5nLXRlbXBsYXRlXG4gICAgICBjZGtDb25uZWN0ZWRPdmVybGF5XG4gICAgICBuekNvbm5lY3RlZE92ZXJsYXlcbiAgICAgIFtjZGtDb25uZWN0ZWRPdmVybGF5SGFzQmFja2Ryb3BdPVwibnpCYWNrZHJvcFwiXG4gICAgICBbY2RrQ29ubmVjdGVkT3ZlcmxheU9yaWdpbl09XCJjZGtPdmVybGF5T3JpZ2luXCJcbiAgICAgIFtjZGtDb25uZWN0ZWRPdmVybGF5T3Blbl09XCJuek9wZW5cIlxuICAgICAgW2Nka0Nvbm5lY3RlZE92ZXJsYXlUcmFuc2Zvcm1PcmlnaW5Pbl09XCInLmFudC1zZWxlY3QtdHJlZS1kcm9wZG93bidcIlxuICAgICAgW2Nka0Nvbm5lY3RlZE92ZXJsYXlNaW5XaWR0aF09XCIkYW55KG56RHJvcGRvd25NYXRjaFNlbGVjdFdpZHRoID8gbnVsbCA6IHRyaWdnZXJXaWR0aClcIlxuICAgICAgW2Nka0Nvbm5lY3RlZE92ZXJsYXlXaWR0aF09XCIkYW55KG56RHJvcGRvd25NYXRjaFNlbGVjdFdpZHRoID8gdHJpZ2dlcldpZHRoIDogbnVsbClcIlxuICAgICAgKG92ZXJsYXlPdXRzaWRlQ2xpY2spPVwib25DbGlja091dHNpZGUoJGV2ZW50KVwiXG4gICAgICAoZGV0YWNoKT1cImNsb3NlRHJvcERvd24oKVwiXG4gICAgICAocG9zaXRpb25DaGFuZ2UpPVwib25Qb3NpdGlvbkNoYW5nZSgkZXZlbnQpXCJcbiAgICA+XG4gICAgICA8ZGl2XG4gICAgICAgIFtAc2xpZGVNb3Rpb25dPVwiJ2VudGVyJ1wiXG4gICAgICAgIFtuZ0NsYXNzXT1cImRyb3Bkb3duQ2xhc3NOYW1lXCJcbiAgICAgICAgW0AuZGlzYWJsZWRdPVwibm9BbmltYXRpb24/Lm56Tm9BbmltYXRpb25cIlxuICAgICAgICBbbnpOb0FuaW1hdGlvbl09XCJub0FuaW1hdGlvbj8ubnpOb0FuaW1hdGlvblwiXG4gICAgICAgIFtjbGFzcy5hbnQtc2VsZWN0LWRyb3Bkb3duLXBsYWNlbWVudC1ib3R0b21MZWZ0XT1cImRyb3BEb3duUG9zaXRpb24gPT09ICdib3R0b20nXCJcbiAgICAgICAgW2NsYXNzLmFudC1zZWxlY3QtZHJvcGRvd24tcGxhY2VtZW50LXRvcExlZnRdPVwiZHJvcERvd25Qb3NpdGlvbiA9PT0gJ3RvcCdcIlxuICAgICAgICBbY2xhc3MuYW50LXRyZWUtc2VsZWN0LWRyb3Bkb3duLXJ0bF09XCJkaXIgPT09ICdydGwnXCJcbiAgICAgICAgW2Rpcl09XCJkaXJcIlxuICAgICAgICBbbmdTdHlsZV09XCJuekRyb3Bkb3duU3R5bGVcIlxuICAgICAgPlxuICAgICAgICA8bnotdHJlZVxuICAgICAgICAgICN0cmVlUmVmXG4gICAgICAgICAgW2hpZGRlbl09XCJpc05vdEZvdW5kXCJcbiAgICAgICAgICBuek5vQW5pbWF0aW9uXG4gICAgICAgICAgbnpTZWxlY3RNb2RlXG4gICAgICAgICAgbnpCbG9ja05vZGVcbiAgICAgICAgICBbbnpEYXRhXT1cIm56Tm9kZXNcIlxuICAgICAgICAgIFtuek11bHRpcGxlXT1cIm56TXVsdGlwbGVcIlxuICAgICAgICAgIFtuelNlYXJjaFZhbHVlXT1cImlucHV0VmFsdWVcIlxuICAgICAgICAgIFtuekhpZGVVbk1hdGNoZWRdPVwibnpIaWRlVW5NYXRjaGVkXCJcbiAgICAgICAgICBbbnpTaG93SWNvbl09XCJuelNob3dJY29uXCJcbiAgICAgICAgICBbbnpDaGVja2FibGVdPVwibnpDaGVja2FibGVcIlxuICAgICAgICAgIFtuekFzeW5jRGF0YV09XCJuekFzeW5jRGF0YVwiXG4gICAgICAgICAgW256U2hvd0V4cGFuZF09XCJuelNob3dFeHBhbmRcIlxuICAgICAgICAgIFtuelNob3dMaW5lXT1cIm56U2hvd0xpbmVcIlxuICAgICAgICAgIFtuekV4cGFuZGVkSWNvbl09XCJuekV4cGFuZGVkSWNvblwiXG4gICAgICAgICAgW256RXhwYW5kQWxsXT1cIm56RGVmYXVsdEV4cGFuZEFsbFwiXG4gICAgICAgICAgW256RXhwYW5kZWRLZXlzXT1cImV4cGFuZGVkS2V5c1wiXG4gICAgICAgICAgW256Q2hlY2tlZEtleXNdPVwibnpDaGVja2FibGUgPyB2YWx1ZSA6IFtdXCJcbiAgICAgICAgICBbbnpTZWxlY3RlZEtleXNdPVwiIW56Q2hlY2thYmxlID8gdmFsdWUgOiBbXVwiXG4gICAgICAgICAgW256VHJlZVRlbXBsYXRlXT1cInRyZWVUZW1wbGF0ZVwiXG4gICAgICAgICAgW256Q2hlY2tTdHJpY3RseV09XCJuekNoZWNrU3RyaWN0bHlcIlxuICAgICAgICAgIFtuelZpcnR1YWxJdGVtU2l6ZV09XCJuelZpcnR1YWxJdGVtU2l6ZVwiXG4gICAgICAgICAgW256VmlydHVhbE1heEJ1ZmZlclB4XT1cIm56VmlydHVhbE1heEJ1ZmZlclB4XCJcbiAgICAgICAgICBbbnpWaXJ0dWFsTWluQnVmZmVyUHhdPVwibnpWaXJ0dWFsTWluQnVmZmVyUHhcIlxuICAgICAgICAgIFtuelZpcnR1YWxIZWlnaHRdPVwibnpWaXJ0dWFsSGVpZ2h0XCJcbiAgICAgICAgICAobnpFeHBhbmRDaGFuZ2UpPVwib25FeHBhbmRlZEtleXNDaGFuZ2UoJGV2ZW50KVwiXG4gICAgICAgICAgKG56Q2xpY2spPVwibnpUcmVlQ2xpY2suZW1pdCgkZXZlbnQpXCJcbiAgICAgICAgICAobnpDaGVja2VkS2V5c0NoYW5nZSk9XCJ1cGRhdGVTZWxlY3RlZE5vZGVzKClcIlxuICAgICAgICAgIChuelNlbGVjdGVkS2V5c0NoYW5nZSk9XCJ1cGRhdGVTZWxlY3RlZE5vZGVzKClcIlxuICAgICAgICAgIChuekNoZWNrQm94Q2hhbmdlKT1cIm56VHJlZUNoZWNrQm94Q2hhbmdlLmVtaXQoJGV2ZW50KVwiXG4gICAgICAgICAgKG56U2VhcmNoVmFsdWVDaGFuZ2UpPVwic2V0U2VhcmNoVmFsdWVzKCRldmVudClcIlxuICAgICAgICA+PC9uei10cmVlPlxuICAgICAgICA8c3BhbiAqbmdJZj1cIm56Tm9kZXMubGVuZ3RoID09PSAwIHx8IGlzTm90Rm91bmRcIiBjbGFzcz1cImFudC1zZWxlY3Qtbm90LWZvdW5kXCI+XG4gICAgICAgICAgPG56LWVtYmVkLWVtcHR5IFtuekNvbXBvbmVudE5hbWVdPVwiJ3RyZWUtc2VsZWN0J1wiIFtzcGVjaWZpY0NvbnRlbnRdPVwibnpOb3RGb3VuZENvbnRlbnRcIj48L256LWVtYmVkLWVtcHR5PlxuICAgICAgICA8L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICA8L25nLXRlbXBsYXRlPlxuXG4gICAgPGRpdiBjZGtPdmVybGF5T3JpZ2luIGNsYXNzPVwiYW50LXNlbGVjdC1zZWxlY3RvclwiPlxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImlzTXVsdGlwbGVcIj5cbiAgICAgICAgPG56LXNlbGVjdC1pdGVtXG4gICAgICAgICAgKm5nRm9yPVwibGV0IG5vZGUgb2Ygc2VsZWN0ZWROb2RlcyB8IHNsaWNlOiAwOm56TWF4VGFnQ291bnQ7IHRyYWNrQnk6IHRyYWNrVmFsdWVcIlxuICAgICAgICAgIFtkZWxldGFibGVdPVwidHJ1ZVwiXG4gICAgICAgICAgW2Rpc2FibGVkXT1cIm5vZGUuaXNEaXNhYmxlZCB8fCBuekRpc2FibGVkXCJcbiAgICAgICAgICBbbGFiZWxdPVwibnpEaXNwbGF5V2l0aChub2RlKVwiXG4gICAgICAgICAgKGRlbGV0ZSk9XCJyZW1vdmVTZWxlY3RlZChub2RlLCB0cnVlKVwiXG4gICAgICAgID48L256LXNlbGVjdC1pdGVtPlxuXG4gICAgICAgIDxuei1zZWxlY3QtaXRlbVxuICAgICAgICAgICpuZ0lmPVwic2VsZWN0ZWROb2Rlcy5sZW5ndGggPiBuek1heFRhZ0NvdW50XCJcbiAgICAgICAgICBbY29udGVudFRlbXBsYXRlT3V0bGV0XT1cIm56TWF4VGFnUGxhY2Vob2xkZXJcIlxuICAgICAgICAgIFtjb250ZW50VGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cInNlbGVjdGVkTm9kZXMgfCBzbGljZTogbnpNYXhUYWdDb3VudFwiXG4gICAgICAgICAgW2RlbGV0YWJsZV09XCJmYWxzZVwiXG4gICAgICAgICAgW2Rpc2FibGVkXT1cImZhbHNlXCJcbiAgICAgICAgICBbbGFiZWxdPVwiJysgJyArIChzZWxlY3RlZE5vZGVzLmxlbmd0aCAtIG56TWF4VGFnQ291bnQpICsgJyAuLi4nXCJcbiAgICAgICAgPjwvbnotc2VsZWN0LWl0ZW0+XG4gICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgPG56LXNlbGVjdC1zZWFyY2hcbiAgICAgICAgW256SWRdPVwibnpJZFwiXG4gICAgICAgIFtzaG93SW5wdXRdPVwibnpTaG93U2VhcmNoXCJcbiAgICAgICAgKGtleWRvd24pPVwib25LZXlEb3duSW5wdXQoJGV2ZW50KVwiXG4gICAgICAgIChpc0NvbXBvc2luZ0NoYW5nZSk9XCJpc0NvbXBvc2luZyA9ICRldmVudFwiXG4gICAgICAgICh2YWx1ZUNoYW5nZSk9XCJzZXRJbnB1dFZhbHVlKCRldmVudClcIlxuICAgICAgICBbdmFsdWVdPVwiaW5wdXRWYWx1ZVwiXG4gICAgICAgIFttaXJyb3JTeW5jXT1cImlzTXVsdGlwbGVcIlxuICAgICAgICBbZGlzYWJsZWRdPVwibnpEaXNhYmxlZFwiXG4gICAgICAgIFtmb2N1c1RyaWdnZXJdPVwibnpPcGVuXCJcbiAgICAgID48L256LXNlbGVjdC1zZWFyY2g+XG5cbiAgICAgIDxuei1zZWxlY3QtcGxhY2Vob2xkZXJcbiAgICAgICAgKm5nSWY9XCJuelBsYWNlSG9sZGVyICYmIHNlbGVjdGVkTm9kZXMubGVuZ3RoID09PSAwXCJcbiAgICAgICAgW3BsYWNlaG9sZGVyXT1cIm56UGxhY2VIb2xkZXJcIlxuICAgICAgICBbc3R5bGUuZGlzcGxheV09XCJwbGFjZUhvbGRlckRpc3BsYXlcIlxuICAgICAgPjwvbnotc2VsZWN0LXBsYWNlaG9sZGVyPlxuXG4gICAgICA8bnotc2VsZWN0LWl0ZW1cbiAgICAgICAgKm5nSWY9XCIhaXNNdWx0aXBsZSAmJiBzZWxlY3RlZE5vZGVzLmxlbmd0aCA9PT0gMSAmJiAhaXNDb21wb3NpbmcgJiYgaW5wdXRWYWx1ZSA9PT0gJydcIlxuICAgICAgICBbZGVsZXRhYmxlXT1cImZhbHNlXCJcbiAgICAgICAgW2Rpc2FibGVkXT1cImZhbHNlXCJcbiAgICAgICAgW2xhYmVsXT1cIm56RGlzcGxheVdpdGgoc2VsZWN0ZWROb2Rlc1swXSlcIlxuICAgICAgPjwvbnotc2VsZWN0LWl0ZW0+XG5cbiAgICAgIDxuei1zZWxlY3QtYXJyb3cgKm5nSWY9XCIhaXNNdWx0aXBsZVwiPjwvbnotc2VsZWN0LWFycm93PlxuXG4gICAgICA8bnotc2VsZWN0LWNsZWFyICpuZ0lmPVwibnpBbGxvd0NsZWFyICYmICFuekRpc2FibGVkICYmIHNlbGVjdGVkTm9kZXMubGVuZ3RoXCIgKGNsZWFyKT1cIm9uQ2xlYXJTZWxlY3Rpb24oKVwiPjwvbnotc2VsZWN0LWNsZWFyPlxuICAgIDwvZGl2PlxuICBgLFxuICBwcm92aWRlcnM6IFtcbiAgICBOelRyZWVTZWxlY3RTZXJ2aWNlLFxuICAgIHtcbiAgICAgIHByb3ZpZGU6IE56VHJlZUhpZ2hlck9yZGVyU2VydmljZVRva2VuLFxuICAgICAgdXNlRmFjdG9yeTogaGlnaGVyT3JkZXJTZXJ2aWNlRmFjdG9yeSxcbiAgICAgIGRlcHM6IFtbbmV3IFNlbGYoKSwgSW5qZWN0b3JdXVxuICAgIH0sXG4gICAge1xuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBOelRyZWVTZWxlY3RDb21wb25lbnQpLFxuICAgICAgbXVsdGk6IHRydWVcbiAgICB9XG4gIF0sXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLmFudC1zZWxlY3QtbGddJzogJ256U2l6ZT09PVwibGFyZ2VcIicsXG4gICAgJ1tjbGFzcy5hbnQtc2VsZWN0LXJ0bF0nOiAnZGlyPT09XCJydGxcIicsXG4gICAgJ1tjbGFzcy5hbnQtc2VsZWN0LXNtXSc6ICduelNpemU9PT1cInNtYWxsXCInLFxuICAgICdbY2xhc3MuYW50LXNlbGVjdC1kaXNhYmxlZF0nOiAnbnpEaXNhYmxlZCcsXG4gICAgJ1tjbGFzcy5hbnQtc2VsZWN0LXNpbmdsZV0nOiAnIWlzTXVsdGlwbGUnLFxuICAgICdbY2xhc3MuYW50LXNlbGVjdC1zaG93LWFycm93XSc6ICchaXNNdWx0aXBsZScsXG4gICAgJ1tjbGFzcy5hbnQtc2VsZWN0LXNob3ctc2VhcmNoXSc6ICchaXNNdWx0aXBsZScsXG4gICAgJ1tjbGFzcy5hbnQtc2VsZWN0LW11bHRpcGxlXSc6ICdpc011bHRpcGxlJyxcbiAgICAnW2NsYXNzLmFudC1zZWxlY3QtYWxsb3ctY2xlYXJdJzogJ256QWxsb3dDbGVhcicsXG4gICAgJ1tjbGFzcy5hbnQtc2VsZWN0LW9wZW5dJzogJ256T3BlbicsXG4gICAgJ1tjbGFzcy5hbnQtc2VsZWN0LWZvY3VzZWRdJzogJ256T3BlbiB8fCBmb2N1c2VkJyxcbiAgICAnKGNsaWNrKSc6ICd0cmlnZ2VyKCknLFxuICAgICcoa2V5ZG93biknOiAnb25LZXlkb3duKCRldmVudCknXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgTnpUcmVlU2VsZWN0Q29tcG9uZW50IGV4dGVuZHMgTnpUcmVlQmFzZSBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBPbkluaXQsIE9uRGVzdHJveSwgT25DaGFuZ2VzIHtcbiAgcmVhZG9ubHkgX256TW9kdWxlTmFtZTogTnpDb25maWdLZXkgPSBOWl9DT05GSUdfTU9EVUxFX05BTUU7XG5cbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX256QWxsb3dDbGVhcjogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbnpTaG93RXhwYW5kOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9uelNob3dMaW5lOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9uekRyb3Bkb3duTWF0Y2hTZWxlY3RXaWR0aDogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbnpDaGVja2FibGU6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX256SGlkZVVuTWF0Y2hlZDogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbnpTaG93SWNvbjogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbnpTaG93U2VhcmNoOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9uekRpc2FibGVkOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9uekFzeW5jRGF0YTogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbnpNdWx0aXBsZTogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbnpEZWZhdWx0RXhwYW5kQWxsOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9uekNoZWNrU3RyaWN0bHk6IEJvb2xlYW5JbnB1dDtcblxuICBASW5wdXQoKSBueklkOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56QWxsb3dDbGVhcjogYm9vbGVhbiA9IHRydWU7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuelNob3dFeHBhbmQ6IGJvb2xlYW4gPSB0cnVlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpTaG93TGluZTogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgQFdpdGhDb25maWcoKSBuekRyb3Bkb3duTWF0Y2hTZWxlY3RXaWR0aDogYm9vbGVhbiA9IHRydWU7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekNoZWNrYWJsZTogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgQFdpdGhDb25maWcoKSBuekhpZGVVbk1hdGNoZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIEBXaXRoQ29uZmlnKCkgbnpTaG93SWNvbjogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpTaG93U2VhcmNoOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekRpc2FibGVkID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekFzeW5jRGF0YSA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpNdWx0aXBsZSA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpEZWZhdWx0RXhwYW5kQWxsID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekNoZWNrU3RyaWN0bHkgPSBmYWxzZTtcbiAgQElucHV0KCkgbnpWaXJ0dWFsSXRlbVNpemUgPSAyODtcbiAgQElucHV0KCkgbnpWaXJ0dWFsTWF4QnVmZmVyUHggPSA1MDA7XG4gIEBJbnB1dCgpIG56VmlydHVhbE1pbkJ1ZmZlclB4ID0gMjg7XG4gIEBJbnB1dCgpIG56VmlydHVhbEhlaWdodDogc3RyaW5nIHwgbnVsbCA9IG51bGw7XG4gIEBJbnB1dCgpIG56RXhwYW5kZWRJY29uPzogVGVtcGxhdGVSZWY8eyAkaW1wbGljaXQ6IE56VHJlZU5vZGU7IG9yaWdpbjogTnpUcmVlTm9kZU9wdGlvbnMgfT47XG4gIEBJbnB1dCgpIG56Tm90Rm91bmRDb250ZW50Pzogc3RyaW5nO1xuICBASW5wdXQoKSBuek5vZGVzOiBBcnJheTxOelRyZWVOb2RlIHwgTnpUcmVlTm9kZU9wdGlvbnM+ID0gW107XG4gIEBJbnB1dCgpIG56T3BlbiA9IGZhbHNlO1xuICBASW5wdXQoKSBAV2l0aENvbmZpZygpIG56U2l6ZTogTnpTaXplTERTVHlwZSA9ICdkZWZhdWx0JztcbiAgQElucHV0KCkgbnpQbGFjZUhvbGRlciA9ICcnO1xuICBASW5wdXQoKSBuekRyb3Bkb3duU3R5bGU6IE5nU3R5bGVJbnRlcmZhY2UgfCBudWxsID0gbnVsbDtcbiAgQElucHV0KCkgbnpEcm9wZG93bkNsYXNzTmFtZT86IHN0cmluZztcbiAgQElucHV0KCkgQFdpdGhDb25maWcoKSBuekJhY2tkcm9wID0gZmFsc2U7XG4gIEBJbnB1dCgpXG4gIHNldCBuekV4cGFuZGVkS2V5cyh2YWx1ZTogc3RyaW5nW10pIHtcbiAgICB0aGlzLmV4cGFuZGVkS2V5cyA9IHZhbHVlO1xuICB9XG4gIGdldCBuekV4cGFuZGVkS2V5cygpOiBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIHRoaXMuZXhwYW5kZWRLZXlzO1xuICB9XG5cbiAgQElucHV0KCkgbnpEaXNwbGF5V2l0aDogKG5vZGU6IE56VHJlZU5vZGUpID0+IHN0cmluZyB8IHVuZGVmaW5lZCA9IChub2RlOiBOelRyZWVOb2RlKSA9PiBub2RlLnRpdGxlO1xuICBASW5wdXQoKSBuek1heFRhZ0NvdW50ITogbnVtYmVyO1xuICBASW5wdXQoKSBuek1heFRhZ1BsYWNlaG9sZGVyOiBUZW1wbGF0ZVJlZjx7ICRpbXBsaWNpdDogTnpUcmVlTm9kZVtdIH0+IHwgbnVsbCA9IG51bGw7XG4gIEBPdXRwdXQoKSByZWFkb25seSBuek9wZW5DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG4gIEBPdXRwdXQoKSByZWFkb25seSBuekNsZWFyZWQgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG4gIEBPdXRwdXQoKSByZWFkb25seSBuelJlbW92ZWQgPSBuZXcgRXZlbnRFbWl0dGVyPE56VHJlZU5vZGU+KCk7XG4gIEBPdXRwdXQoKSByZWFkb25seSBuekV4cGFuZENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8TnpGb3JtYXRFbWl0RXZlbnQ+KCk7XG4gIEBPdXRwdXQoKSByZWFkb25seSBuelRyZWVDbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8TnpGb3JtYXRFbWl0RXZlbnQ+KCk7XG4gIEBPdXRwdXQoKSByZWFkb25seSBuelRyZWVDaGVja0JveENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8TnpGb3JtYXRFbWl0RXZlbnQ+KCk7XG5cbiAgQFZpZXdDaGlsZChOelNlbGVjdFNlYXJjaENvbXBvbmVudCwgeyBzdGF0aWM6IGZhbHNlIH0pIG56U2VsZWN0U2VhcmNoQ29tcG9uZW50ITogTnpTZWxlY3RTZWFyY2hDb21wb25lbnQ7XG4gIEBWaWV3Q2hpbGQoJ3RyZWVSZWYnLCB7IHN0YXRpYzogZmFsc2UgfSkgdHJlZVJlZiE6IE56VHJlZUNvbXBvbmVudDtcbiAgQFZpZXdDaGlsZChDZGtPdmVybGF5T3JpZ2luLCB7IHN0YXRpYzogdHJ1ZSB9KSBjZGtPdmVybGF5T3JpZ2luITogQ2RrT3ZlcmxheU9yaWdpbjtcbiAgQFZpZXdDaGlsZChDZGtDb25uZWN0ZWRPdmVybGF5LCB7IHN0YXRpYzogZmFsc2UgfSkgY2RrQ29ubmVjdGVkT3ZlcmxheSE6IENka0Nvbm5lY3RlZE92ZXJsYXk7XG5cbiAgQElucHV0KCkgbnpUcmVlVGVtcGxhdGUhOiBUZW1wbGF0ZVJlZjx7ICRpbXBsaWNpdDogTnpUcmVlTm9kZTsgb3JpZ2luOiBOelRyZWVOb2RlT3B0aW9ucyB9PjtcbiAgQENvbnRlbnRDaGlsZCgnbnpUcmVlVGVtcGxhdGUnLCB7IHN0YXRpYzogdHJ1ZSB9KSBuelRyZWVUZW1wbGF0ZUNoaWxkITogVGVtcGxhdGVSZWY8eyAkaW1wbGljaXQ6IE56VHJlZU5vZGU7IG9yaWdpbjogTnpUcmVlTm9kZU9wdGlvbnMgfT47XG4gIGdldCB0cmVlVGVtcGxhdGUoKTogVGVtcGxhdGVSZWY8eyAkaW1wbGljaXQ6IE56VHJlZU5vZGU7IG9yaWdpbjogTnpUcmVlTm9kZU9wdGlvbnMgfT4ge1xuICAgIHJldHVybiB0aGlzLm56VHJlZVRlbXBsYXRlIHx8IHRoaXMubnpUcmVlVGVtcGxhdGVDaGlsZDtcbiAgfVxuXG4gIGRyb3Bkb3duQ2xhc3NOYW1lID0gVFJFRV9TRUxFQ1RfREVGQVVMVF9DTEFTUztcbiAgdHJpZ2dlcldpZHRoPzogbnVtYmVyO1xuICBpc0NvbXBvc2luZyA9IGZhbHNlO1xuICBpc0Rlc3Ryb3kgPSB0cnVlO1xuICBpc05vdEZvdW5kID0gZmFsc2U7XG4gIGZvY3VzZWQgPSBmYWxzZTtcbiAgaW5wdXRWYWx1ZSA9ICcnO1xuICBkcm9wRG93blBvc2l0aW9uOiAndG9wJyB8ICdjZW50ZXInIHwgJ2JvdHRvbScgPSAnYm90dG9tJztcbiAgc2VsZWN0ZWROb2RlczogTnpUcmVlTm9kZVtdID0gW107XG4gIGV4cGFuZGVkS2V5czogc3RyaW5nW10gPSBbXTtcbiAgdmFsdWU6IHN0cmluZ1tdID0gW107XG4gIGRpcjogRGlyZWN0aW9uID0gJ2x0cic7XG5cbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG5cbiAgb25DaGFuZ2U6IE9uQ2hhbmdlVHlwZSA9IF92YWx1ZSA9PiB7fTtcbiAgb25Ub3VjaGVkOiBPblRvdWNoZWRUeXBlID0gKCkgPT4ge307XG5cbiAgZ2V0IHBsYWNlSG9sZGVyRGlzcGxheSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmlucHV0VmFsdWUgfHwgdGhpcy5pc0NvbXBvc2luZyB8fCB0aGlzLnNlbGVjdGVkTm9kZXMubGVuZ3RoID8gJ25vbmUnIDogJ2Jsb2NrJztcbiAgfVxuXG4gIGdldCBpc011bHRpcGxlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLm56TXVsdGlwbGUgfHwgdGhpcy5uekNoZWNrYWJsZTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIG56VHJlZVNlcnZpY2U6IE56VHJlZVNlbGVjdFNlcnZpY2UsXG4gICAgcHVibGljIG56Q29uZmlnU2VydmljZTogTnpDb25maWdTZXJ2aWNlLFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgZGlyZWN0aW9uYWxpdHk6IERpcmVjdGlvbmFsaXR5LFxuICAgIHByaXZhdGUgZm9jdXNNb25pdG9yOiBGb2N1c01vbml0b3IsXG4gICAgQEhvc3QoKSBAT3B0aW9uYWwoKSBwdWJsaWMgbm9BbmltYXRpb24/OiBOek5vQW5pbWF0aW9uRGlyZWN0aXZlXG4gICkge1xuICAgIHN1cGVyKG56VHJlZVNlcnZpY2UpO1xuICAgIC8vIFRPRE86IG1vdmUgdG8gaG9zdCBhZnRlciBWaWV3IEVuZ2luZSBkZXByZWNhdGlvblxuICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2FudC1zZWxlY3QnKTtcbiAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnYW50LXNlbGVjdCcpO1xuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdhbnQtdHJlZS1zZWxlY3QnKTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuaXNEZXN0cm95ID0gZmFsc2U7XG4gICAgdGhpcy5zdWJzY3JpYmVTZWxlY3Rpb25DaGFuZ2UoKTtcblxuICAgIHRoaXMuZGlyZWN0aW9uYWxpdHkuY2hhbmdlPy5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKChkaXJlY3Rpb246IERpcmVjdGlvbikgPT4ge1xuICAgICAgdGhpcy5kaXIgPSBkaXJlY3Rpb247XG4gICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfSk7XG4gICAgdGhpcy5kaXIgPSB0aGlzLmRpcmVjdGlvbmFsaXR5LnZhbHVlO1xuXG4gICAgdGhpcy5mb2N1c01vbml0b3JcbiAgICAgIC5tb25pdG9yKHRoaXMuZWxlbWVudFJlZiwgdHJ1ZSlcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcbiAgICAgIC5zdWJzY3JpYmUoZm9jdXNPcmlnaW4gPT4ge1xuICAgICAgICBpZiAoIWZvY3VzT3JpZ2luKSB7XG4gICAgICAgICAgdGhpcy5mb2N1c2VkID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gICAgICAgICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm9uVG91Y2hlZCgpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuZm9jdXNlZCA9IHRydWU7XG4gICAgICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5pc0Rlc3Ryb3kgPSB0cnVlO1xuICAgIHRoaXMuY2xvc2VEcm9wRG93bigpO1xuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcbiAgfVxuXG4gIGlzQ29tcG9zaW5nQ2hhbmdlKGlzQ29tcG9zaW5nOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5pc0NvbXBvc2luZyA9IGlzQ29tcG9zaW5nO1xuICB9XG5cbiAgc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5uekRpc2FibGVkID0gaXNEaXNhYmxlZDtcbiAgICB0aGlzLmNsb3NlRHJvcERvd24oKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBjb25zdCB7IG56Tm9kZXMsIG56RHJvcGRvd25DbGFzc05hbWUgfSA9IGNoYW5nZXM7XG4gICAgaWYgKG56Tm9kZXMpIHtcbiAgICAgIHRoaXMudXBkYXRlU2VsZWN0ZWROb2Rlcyh0cnVlKTtcbiAgICB9XG4gICAgaWYgKG56RHJvcGRvd25DbGFzc05hbWUpIHtcbiAgICAgIGNvbnN0IGNsYXNzTmFtZSA9IHRoaXMubnpEcm9wZG93bkNsYXNzTmFtZSAmJiB0aGlzLm56RHJvcGRvd25DbGFzc05hbWUudHJpbSgpO1xuICAgICAgdGhpcy5kcm9wZG93bkNsYXNzTmFtZSA9IGNsYXNzTmFtZSA/IGAke1RSRUVfU0VMRUNUX0RFRkFVTFRfQ0xBU1N9ICR7Y2xhc3NOYW1lfWAgOiBUUkVFX1NFTEVDVF9ERUZBVUxUX0NMQVNTO1xuICAgIH1cbiAgfVxuXG4gIHdyaXRlVmFsdWUodmFsdWU6IHN0cmluZ1tdIHwgc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKGlzTm90TmlsKHZhbHVlKSkge1xuICAgICAgaWYgKHRoaXMuaXNNdWx0aXBsZSAmJiBBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnZhbHVlID0gW3ZhbHVlIGFzIHN0cmluZ107XG4gICAgICB9XG4gICAgICB0aGlzLnVwZGF0ZVNlbGVjdGVkTm9kZXModHJ1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudmFsdWUgPSBbXTtcbiAgICAgIHRoaXMuc2VsZWN0ZWROb2Rlcy5mb3JFYWNoKG5vZGUgPT4ge1xuICAgICAgICB0aGlzLnJlbW92ZVNlbGVjdGVkKG5vZGUsIGZhbHNlKTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5zZWxlY3RlZE5vZGVzID0gW107XG4gICAgfVxuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKF86IHN0cmluZ1tdIHwgc3RyaW5nIHwgbnVsbCkgPT4gdm9pZCk6IHZvaWQge1xuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcbiAgfVxuXG4gIG9uS2V5ZG93bihldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm56RGlzYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgc3dpdGNoIChldmVudC5rZXlDb2RlKSB7XG4gICAgICBjYXNlIEVTQ0FQRTpcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNraXAgdGhlIEVTQ0FQRSBwcm9jZXNzaW5nLCBpdCB3aWxsIGJlIGhhbmRsZWQgaW4ge0BsaW5rIG9uT3ZlcmxheUtleURvd259LlxuICAgICAgICAgKi9cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFRBQjpcbiAgICAgICAgdGhpcy5jbG9zZURyb3BEb3duKCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgaWYgKCF0aGlzLm56T3Blbikge1xuICAgICAgICAgIHRoaXMub3BlbkRyb3Bkb3duKCk7XG4gICAgICAgIH1cbiAgICB9XG4gIH1cblxuICB0cmlnZ2VyKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm56RGlzYWJsZWQgfHwgKCF0aGlzLm56RGlzYWJsZWQgJiYgdGhpcy5uek9wZW4pKSB7XG4gICAgICB0aGlzLmNsb3NlRHJvcERvd24oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5vcGVuRHJvcGRvd24oKTtcbiAgICB9XG4gIH1cblxuICBvcGVuRHJvcGRvd24oKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLm56RGlzYWJsZWQpIHtcbiAgICAgIHRoaXMubnpPcGVuID0gdHJ1ZTtcbiAgICAgIHRoaXMubnpPcGVuQ2hhbmdlLmVtaXQodGhpcy5uek9wZW4pO1xuICAgICAgdGhpcy51cGRhdGVDZGtDb25uZWN0ZWRPdmVybGF5U3RhdHVzKCk7XG4gICAgICBpZiAodGhpcy5uelNob3dTZWFyY2ggfHwgdGhpcy5pc011bHRpcGxlKSB7XG4gICAgICAgIHRoaXMuZm9jdXNPbklucHV0KCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY2xvc2VEcm9wRG93bigpOiB2b2lkIHtcbiAgICB0aGlzLm9uVG91Y2hlZCgpO1xuICAgIHRoaXMubnpPcGVuID0gZmFsc2U7XG4gICAgdGhpcy5pbnB1dFZhbHVlID0gJyc7XG4gICAgdGhpcy5pc05vdEZvdW5kID0gZmFsc2U7XG4gICAgdGhpcy5uek9wZW5DaGFuZ2UuZW1pdCh0aGlzLm56T3Blbik7XG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBvbktleURvd25JbnB1dChlOiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XG4gICAgY29uc3Qga2V5Q29kZSA9IGUua2V5Q29kZTtcbiAgICBjb25zdCBldmVudFRhcmdldCA9IGUudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgaWYgKHRoaXMuaXNNdWx0aXBsZSAmJiAhZXZlbnRUYXJnZXQudmFsdWUgJiYga2V5Q29kZSA9PT0gQkFDS1NQQUNFKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBpZiAodGhpcy5zZWxlY3RlZE5vZGVzLmxlbmd0aCkge1xuICAgICAgICBjb25zdCByZW1vdmVOb2RlID0gdGhpcy5zZWxlY3RlZE5vZGVzW3RoaXMuc2VsZWN0ZWROb2Rlcy5sZW5ndGggLSAxXTtcbiAgICAgICAgdGhpcy5yZW1vdmVTZWxlY3RlZChyZW1vdmVOb2RlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBvbkV4cGFuZGVkS2V5c0NoYW5nZSh2YWx1ZTogTnpGb3JtYXRFbWl0RXZlbnQpOiB2b2lkIHtcbiAgICB0aGlzLm56RXhwYW5kQ2hhbmdlLmVtaXQodmFsdWUpO1xuICAgIHRoaXMuZXhwYW5kZWRLZXlzID0gWy4uLnZhbHVlLmtleXMhXTtcbiAgfVxuXG4gIHNldElucHV0VmFsdWUodmFsdWU6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuaW5wdXRWYWx1ZSA9IHZhbHVlO1xuICAgIHRoaXMudXBkYXRlUG9zaXRpb24oKTtcbiAgfVxuXG4gIHJlbW92ZVNlbGVjdGVkKG5vZGU6IE56VHJlZU5vZGUsIGVtaXQ6IGJvb2xlYW4gPSB0cnVlKTogdm9pZCB7XG4gICAgbm9kZS5pc1NlbGVjdGVkID0gZmFsc2U7XG4gICAgbm9kZS5pc0NoZWNrZWQgPSBmYWxzZTtcbiAgICBpZiAodGhpcy5uekNoZWNrYWJsZSkge1xuICAgICAgdGhpcy5uelRyZWVTZXJ2aWNlLmNvbmR1Y3Qobm9kZSwgdGhpcy5uekNoZWNrU3RyaWN0bHkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm56VHJlZVNlcnZpY2Uuc2V0U2VsZWN0ZWROb2RlTGlzdChub2RlLCB0aGlzLm56TXVsdGlwbGUpO1xuICAgIH1cblxuICAgIGlmIChlbWl0KSB7XG4gICAgICB0aGlzLm56UmVtb3ZlZC5lbWl0KG5vZGUpO1xuICAgIH1cbiAgfVxuXG4gIGZvY3VzT25JbnB1dCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5uelNlbGVjdFNlYXJjaENvbXBvbmVudCkge1xuICAgICAgdGhpcy5uelNlbGVjdFNlYXJjaENvbXBvbmVudC5mb2N1cygpO1xuICAgIH1cbiAgfVxuXG4gIHN1YnNjcmliZVNlbGVjdGlvbkNoYW5nZSgpOiB2b2lkIHtcbiAgICBtZXJnZShcbiAgICAgIHRoaXMubnpUcmVlQ2xpY2sucGlwZShcbiAgICAgICAgdGFwKChldmVudDogTnpGb3JtYXRFbWl0RXZlbnQpID0+IHtcbiAgICAgICAgICBjb25zdCBub2RlID0gZXZlbnQubm9kZSE7XG4gICAgICAgICAgaWYgKHRoaXMubnpDaGVja2FibGUgJiYgIW5vZGUuaXNEaXNhYmxlZCAmJiAhbm9kZS5pc0Rpc2FibGVDaGVja2JveCkge1xuICAgICAgICAgICAgbm9kZS5pc0NoZWNrZWQgPSAhbm9kZS5pc0NoZWNrZWQ7XG4gICAgICAgICAgICBub2RlLmlzSGFsZkNoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIGlmICghdGhpcy5uekNoZWNrU3RyaWN0bHkpIHtcbiAgICAgICAgICAgICAgdGhpcy5uelRyZWVTZXJ2aWNlLmNvbmR1Y3Qobm9kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh0aGlzLm56Q2hlY2thYmxlKSB7XG4gICAgICAgICAgICBub2RlLmlzU2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pLFxuICAgICAgICBmaWx0ZXIoKGV2ZW50OiBOekZvcm1hdEVtaXRFdmVudCkgPT4ge1xuICAgICAgICAgIGNvbnN0IG5vZGUgPSBldmVudC5ub2RlITtcbiAgICAgICAgICByZXR1cm4gdGhpcy5uekNoZWNrYWJsZSA/ICFub2RlLmlzRGlzYWJsZWQgJiYgIW5vZGUuaXNEaXNhYmxlQ2hlY2tib3ggOiAhbm9kZS5pc0Rpc2FibGVkICYmIG5vZGUuaXNTZWxlY3RhYmxlO1xuICAgICAgICB9KVxuICAgICAgKSxcbiAgICAgIHRoaXMubnpDaGVja2FibGUgPyB0aGlzLm56VHJlZUNoZWNrQm94Q2hhbmdlIDogb2JzZXJ2YWJsZU9mKCksXG4gICAgICB0aGlzLm56Q2xlYXJlZCxcbiAgICAgIHRoaXMubnpSZW1vdmVkXG4gICAgKVxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIHRoaXMudXBkYXRlU2VsZWN0ZWROb2RlcygpO1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuc2VsZWN0ZWROb2Rlcy5tYXAobm9kZSA9PiBub2RlLmtleSEpO1xuICAgICAgICB0aGlzLnZhbHVlID0gWy4uLnZhbHVlXTtcbiAgICAgICAgaWYgKHRoaXMubnpTaG93U2VhcmNoIHx8IHRoaXMuaXNNdWx0aXBsZSkge1xuICAgICAgICAgIHRoaXMuaW5wdXRWYWx1ZSA9ICcnO1xuICAgICAgICAgIHRoaXMuaXNOb3RGb3VuZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmlzTXVsdGlwbGUpIHtcbiAgICAgICAgICB0aGlzLm9uQ2hhbmdlKHZhbHVlKTtcbiAgICAgICAgICB0aGlzLmZvY3VzT25JbnB1dCgpO1xuICAgICAgICAgIHRoaXMudXBkYXRlUG9zaXRpb24oKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmNsb3NlRHJvcERvd24oKTtcbiAgICAgICAgICB0aGlzLm9uQ2hhbmdlKHZhbHVlLmxlbmd0aCA/IHZhbHVlWzBdIDogbnVsbCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9XG5cbiAgdXBkYXRlU2VsZWN0ZWROb2Rlcyhpbml0OiBib29sZWFuID0gZmFsc2UpOiB2b2lkIHtcbiAgICBpZiAoaW5pdCkge1xuICAgICAgY29uc3Qgbm9kZXMgPSB0aGlzLmNvZXJjZVRyZWVOb2Rlcyh0aGlzLm56Tm9kZXMpO1xuICAgICAgdGhpcy5uelRyZWVTZXJ2aWNlLmlzTXVsdGlwbGUgPSB0aGlzLmlzTXVsdGlwbGU7XG4gICAgICB0aGlzLm56VHJlZVNlcnZpY2UuaXNDaGVja1N0cmljdGx5ID0gdGhpcy5uekNoZWNrU3RyaWN0bHk7XG4gICAgICB0aGlzLm56VHJlZVNlcnZpY2UuaW5pdFRyZWUobm9kZXMpO1xuICAgICAgaWYgKHRoaXMubnpDaGVja2FibGUpIHtcbiAgICAgICAgdGhpcy5uelRyZWVTZXJ2aWNlLmNvbmR1Y3RDaGVjayh0aGlzLnZhbHVlLCB0aGlzLm56Q2hlY2tTdHJpY3RseSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLm56VHJlZVNlcnZpY2UuY29uZHVjdFNlbGVjdGVkS2V5cyh0aGlzLnZhbHVlLCB0aGlzLmlzTXVsdGlwbGUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuc2VsZWN0ZWROb2RlcyA9IFsuLi4odGhpcy5uekNoZWNrYWJsZSA/IHRoaXMuZ2V0Q2hlY2tlZE5vZGVMaXN0KCkgOiB0aGlzLmdldFNlbGVjdGVkTm9kZUxpc3QoKSldO1xuICB9XG5cbiAgdXBkYXRlUG9zaXRpb24oKTogdm9pZCB7XG4gICAgcmVxQW5pbUZyYW1lKCgpID0+IHtcbiAgICAgIHRoaXMuY2RrQ29ubmVjdGVkT3ZlcmxheT8ub3ZlcmxheVJlZj8udXBkYXRlUG9zaXRpb24oKTtcbiAgICB9KTtcbiAgfVxuXG4gIG9uUG9zaXRpb25DaGFuZ2UocG9zaXRpb246IENvbm5lY3RlZE92ZXJsYXlQb3NpdGlvbkNoYW5nZSk6IHZvaWQge1xuICAgIHRoaXMuZHJvcERvd25Qb3NpdGlvbiA9IHBvc2l0aW9uLmNvbm5lY3Rpb25QYWlyLm9yaWdpblk7XG4gIH1cblxuICBvbkNsZWFyU2VsZWN0aW9uKCk6IHZvaWQge1xuICAgIHRoaXMuc2VsZWN0ZWROb2Rlcy5mb3JFYWNoKG5vZGUgPT4ge1xuICAgICAgdGhpcy5yZW1vdmVTZWxlY3RlZChub2RlLCBmYWxzZSk7XG4gICAgfSk7XG4gICAgdGhpcy5uekNsZWFyZWQuZW1pdCgpO1xuICB9XG5cbiAgb25DbGlja091dHNpZGUoZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpIHtcbiAgICAgIHRoaXMuY2xvc2VEcm9wRG93bigpO1xuICAgIH1cbiAgfVxuXG4gIHNldFNlYXJjaFZhbHVlcygkZXZlbnQ6IE56Rm9ybWF0RW1pdEV2ZW50KTogdm9pZCB7XG4gICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB7XG4gICAgICB0aGlzLmlzTm90Rm91bmQgPSAodGhpcy5uelNob3dTZWFyY2ggfHwgdGhpcy5pc011bHRpcGxlKSAmJiAhIXRoaXMuaW5wdXRWYWx1ZSAmJiAkZXZlbnQubWF0Y2hlZEtleXMhLmxlbmd0aCA9PT0gMDtcbiAgICB9KTtcbiAgfVxuXG4gIHVwZGF0ZUNka0Nvbm5lY3RlZE92ZXJsYXlTdGF0dXMoKTogdm9pZCB7XG4gICAgdGhpcy50cmlnZ2VyV2lkdGggPSB0aGlzLmNka092ZXJsYXlPcmlnaW4uZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoO1xuICB9XG5cbiAgdHJhY2tWYWx1ZShfaW5kZXg6IG51bWJlciwgb3B0aW9uOiBOelRyZWVOb2RlKTogc3RyaW5nIHtcbiAgICByZXR1cm4gb3B0aW9uLmtleSE7XG4gIH1cbn1cbiJdfQ==