/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { FocusKeyManager } from '@angular/cdk/a11y';
import { Directionality } from '@angular/cdk/bidi';
import { coerceNumberProperty } from '@angular/cdk/coercion';
import { DOWN_ARROW, ENTER, hasModifierKey, LEFT_ARROW, RIGHT_ARROW, SPACE, UP_ARROW } from '@angular/cdk/keycodes';
import { ViewportRuler } from '@angular/cdk/overlay';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChildren, ElementRef, EventEmitter, Input, NgZone, Optional, Output, QueryList, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { animationFrameScheduler, asapScheduler, merge, of, Subject } from 'rxjs';
import { auditTime, takeUntil } from 'rxjs/operators';
import { reqAnimFrame } from 'ng-zorro-antd/core/polyfill';
import { NzResizeObserver } from 'ng-zorro-antd/core/resize-observers';
import { NzTabAddButtonComponent } from './tab-add-button.component';
import { NzTabNavItemDirective } from './tab-nav-item.directive';
import { NzTabNavOperationComponent } from './tab-nav-operation.component';
import { NzTabsInkBarDirective } from './tabs-ink-bar.directive';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/cdk/overlay';
import * as ɵngcc2 from 'ng-zorro-antd/core/resize-observers';
import * as ɵngcc3 from '@angular/cdk/bidi';
import * as ɵngcc4 from './tab-scroll-list.directive';
import * as ɵngcc5 from '@angular/common';
import * as ɵngcc6 from './tabs-ink-bar.directive';
import * as ɵngcc7 from './tab-nav-operation.component';
import * as ɵngcc8 from './tab-add-button.component';

const _c0 = ["navWarp"];
const _c1 = ["navList"];
function NzTabNavBarComponent_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r5 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 8);
    ɵngcc0.ɵɵlistener("click", function NzTabNavBarComponent_button_5_Template_button_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r5); const ctx_r4 = ɵngcc0.ɵɵnextContext(); return ctx_r4.addClicked.emit(); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("addIcon", ctx_r2.addIcon);
} }
function NzTabNavBarComponent_div_8_ng_template_1_Template(rf, ctx) { }
function NzTabNavBarComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 9);
    ɵngcc0.ɵɵtemplate(1, NzTabNavBarComponent_div_8_ng_template_1_Template, 0, 0, "ng-template", 10);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r3.extraTemplate);
} }
const _c2 = ["*"];
const RESIZE_SCHEDULER = typeof requestAnimationFrame !== 'undefined' ? animationFrameScheduler : asapScheduler;
const CSS_TRANSFORM_TIME = 150;
export class NzTabNavBarComponent {
    constructor(cdr, ngZone, viewportRuler, nzResizeObserver, dir) {
        this.cdr = cdr;
        this.ngZone = ngZone;
        this.viewportRuler = viewportRuler;
        this.nzResizeObserver = nzResizeObserver;
        this.dir = dir;
        this.indexFocused = new EventEmitter();
        this.selectFocusedIndex = new EventEmitter();
        this.addClicked = new EventEmitter();
        this.tabScroll = new EventEmitter();
        this.position = 'horizontal';
        this.addable = false;
        this.hideBar = false;
        this.addIcon = 'plus';
        this.inkBarAnimated = true;
        this.translate = null;
        this.transformX = 0;
        this.transformY = 0;
        this.pingLeft = false;
        this.pingRight = false;
        this.pingTop = false;
        this.pingBottom = false;
        this.hiddenItems = [];
        this.destroy$ = new Subject();
        this._selectedIndex = 0;
        this.wrapperWidth = 0;
        this.wrapperHeight = 0;
        this.scrollListWidth = 0;
        this.scrollListHeight = 0;
        this.operationWidth = 0;
        this.operationHeight = 0;
        this.addButtonWidth = 0;
        this.addButtonHeight = 0;
        this.selectedIndexChanged = false;
        this.lockAnimationTimeoutId = -1;
        this.cssTransformTimeWaitingId = -1;
    }
    get selectedIndex() {
        return this._selectedIndex;
    }
    set selectedIndex(value) {
        const newValue = coerceNumberProperty(value);
        if (this._selectedIndex !== newValue) {
            this._selectedIndex = value;
            this.selectedIndexChanged = true;
            if (this.keyManager) {
                this.keyManager.updateActiveItem(value);
            }
        }
    }
    /** Tracks which element has focus; used for keyboard navigation */
    get focusIndex() {
        return this.keyManager ? this.keyManager.activeItemIndex : 0;
    }
    /** When the focus index is set, we must manually send focus to the correct label */
    set focusIndex(value) {
        if (!this.isValidIndex(value) || this.focusIndex === value || !this.keyManager) {
            return;
        }
        this.keyManager.setActiveItem(value);
    }
    get showAddButton() {
        return this.hiddenItems.length === 0 && this.addable;
    }
    ngOnInit() { }
    ngAfterViewInit() {
        const dirChange = this.dir ? this.dir.change : of(null);
        const resize = this.viewportRuler.change(150);
        const realign = () => {
            this.updateScrollListPosition();
            this.alignInkBarToSelectedTab();
        };
        this.keyManager = new FocusKeyManager(this.items)
            .withHorizontalOrientation(this.getLayoutDirection())
            .withWrap();
        this.keyManager.updateActiveItem(this.selectedIndex);
        reqAnimFrame(realign);
        merge(this.nzResizeObserver.observe(this.navWarpRef), this.nzResizeObserver.observe(this.navListRef))
            .pipe(takeUntil(this.destroy$), auditTime(16, RESIZE_SCHEDULER))
            .subscribe(() => {
            realign();
        });
        merge(dirChange, resize, this.items.changes)
            .pipe(takeUntil(this.destroy$))
            .subscribe(() => {
            Promise.resolve().then(realign);
            this.keyManager.withHorizontalOrientation(this.getLayoutDirection());
        });
        this.keyManager.change.pipe(takeUntil(this.destroy$)).subscribe(newFocusIndex => {
            this.indexFocused.emit(newFocusIndex);
            this.setTabFocus(newFocusIndex);
            this.scrollToTab(this.keyManager.activeItem);
        });
    }
    ngAfterContentChecked() {
        if (this.selectedIndexChanged) {
            this.updateScrollListPosition();
            this.alignInkBarToSelectedTab();
            this.selectedIndexChanged = false;
            this.cdr.markForCheck();
        }
    }
    ngOnDestroy() {
        clearTimeout(this.lockAnimationTimeoutId);
        clearTimeout(this.cssTransformTimeWaitingId);
        this.destroy$.next();
        this.destroy$.complete();
    }
    onSelectedFromMenu(tab) {
        const tabIndex = this.items.toArray().findIndex(e => e === tab);
        if (tabIndex !== -1) {
            this.keyManager.updateActiveItem(tabIndex);
            if (this.focusIndex !== this.selectedIndex) {
                this.selectFocusedIndex.emit(this.focusIndex);
                this.scrollToTab(tab);
            }
        }
    }
    onOffsetChange(e) {
        if (this.position === 'horizontal') {
            if (this.lockAnimationTimeoutId === -1) {
                if (this.transformX >= 0 && e.x > 0) {
                    return;
                }
                if (this.transformX <= this.wrapperWidth - this.scrollListWidth && e.x < 0) {
                    return;
                }
            }
            e.event.preventDefault();
            this.transformX = this.clampTransformX(this.transformX + e.x);
            this.setTransform(this.transformX, 0);
        }
        else {
            if (this.lockAnimationTimeoutId === -1) {
                if (this.transformY >= 0 && e.y > 0) {
                    return;
                }
                if (this.transformY <= this.wrapperHeight - this.scrollListHeight && e.y < 0) {
                    return;
                }
            }
            e.event.preventDefault();
            this.transformY = this.clampTransformY(this.transformY + e.y);
            this.setTransform(0, this.transformY);
        }
        this.lockAnimation();
        this.setVisibleRange();
        this.setPingStatus();
    }
    handleKeydown(event) {
        const inNavigationList = this.navWarpRef.nativeElement.contains(event.target);
        if (hasModifierKey(event) || !inNavigationList) {
            return;
        }
        switch (event.keyCode) {
            case LEFT_ARROW:
            case UP_ARROW:
            case RIGHT_ARROW:
            case DOWN_ARROW:
                this.lockAnimation();
                this.keyManager.onKeydown(event);
                break;
            case ENTER:
            case SPACE:
                if (this.focusIndex !== this.selectedIndex) {
                    this.selectFocusedIndex.emit(this.focusIndex);
                }
                break;
            default:
                this.keyManager.onKeydown(event);
        }
    }
    isValidIndex(index) {
        if (!this.items) {
            return true;
        }
        const tab = this.items ? this.items.toArray()[index] : null;
        return !!tab && !tab.disabled;
    }
    scrollToTab(tab) {
        if (!this.items.find(e => e === tab)) {
            return;
        }
        const tabs = this.items.toArray();
        if (this.position === 'horizontal') {
            let newTransform = this.transformX;
            if (this.getLayoutDirection() === 'rtl') {
                const right = tabs[0].left + tabs[0].width - tab.left - tab.width;
                if (right < this.transformX) {
                    newTransform = right;
                }
                else if (right + tab.width > this.transformX + this.wrapperWidth) {
                    newTransform = right + tab.width - this.wrapperWidth;
                }
            }
            else if (tab.left < -this.transformX) {
                newTransform = -tab.left;
            }
            else if (tab.left + tab.width > -this.transformX + this.wrapperWidth) {
                newTransform = -(tab.left + tab.width - this.wrapperWidth);
            }
            this.transformX = newTransform;
            this.transformY = 0;
            this.setTransform(newTransform, 0);
        }
        else {
            let newTransform = this.transformY;
            if (tab.top < -this.transformY) {
                newTransform = -tab.top;
            }
            else if (tab.top + tab.height > -this.transformY + this.wrapperHeight) {
                newTransform = -(tab.top + tab.height - this.wrapperHeight);
            }
            this.transformY = newTransform;
            this.transformX = 0;
            this.setTransform(0, newTransform);
        }
        clearTimeout(this.cssTransformTimeWaitingId);
        this.cssTransformTimeWaitingId = setTimeout(() => {
            this.setVisibleRange();
        }, CSS_TRANSFORM_TIME);
    }
    lockAnimation() {
        if (this.lockAnimationTimeoutId === -1) {
            this.ngZone.runOutsideAngular(() => {
                this.navListRef.nativeElement.style.transition = 'none';
                this.lockAnimationTimeoutId = setTimeout(() => {
                    this.navListRef.nativeElement.style.transition = '';
                    this.lockAnimationTimeoutId = -1;
                }, CSS_TRANSFORM_TIME);
            });
        }
    }
    setTransform(x, y) {
        this.navListRef.nativeElement.style.transform = `translate(${x}px, ${y}px)`;
    }
    clampTransformX(transform) {
        const scrollWidth = this.wrapperWidth - this.scrollListWidth;
        if (this.getLayoutDirection() === 'rtl') {
            return Math.max(Math.min(scrollWidth, transform), 0);
        }
        else {
            return Math.min(Math.max(scrollWidth, transform), 0);
        }
    }
    clampTransformY(transform) {
        return Math.min(Math.max(this.wrapperHeight - this.scrollListHeight, transform), 0);
    }
    updateScrollListPosition() {
        this.resetSizes();
        this.transformX = this.clampTransformX(this.transformX);
        this.transformY = this.clampTransformY(this.transformY);
        this.setVisibleRange();
        this.setPingStatus();
        if (this.keyManager) {
            this.keyManager.updateActiveItem(this.keyManager.activeItemIndex);
            if (this.keyManager.activeItem) {
                this.scrollToTab(this.keyManager.activeItem);
            }
        }
    }
    resetSizes() {
        this.addButtonWidth = this.addBtnRef ? this.addBtnRef.getElementWidth() : 0;
        this.addButtonHeight = this.addBtnRef ? this.addBtnRef.getElementHeight() : 0;
        this.operationWidth = this.operationRef.getElementWidth();
        this.operationHeight = this.operationRef.getElementHeight();
        this.wrapperWidth = this.navWarpRef.nativeElement.offsetWidth || 0;
        this.wrapperHeight = this.navWarpRef.nativeElement.offsetHeight || 0;
        this.scrollListHeight = this.navListRef.nativeElement.offsetHeight || 0;
        this.scrollListWidth = this.navListRef.nativeElement.offsetWidth || 0;
    }
    alignInkBarToSelectedTab() {
        const selectedItem = this.items && this.items.length ? this.items.toArray()[this.selectedIndex] : null;
        const selectedItemElement = selectedItem ? selectedItem.elementRef.nativeElement : null;
        if (selectedItemElement) {
            /**
             * .ant-tabs-nav-list - Target offset parent element
             *   └──.ant-tabs-tab
             *        └──.ant-tabs-tab-btn - Currently focused element
             */
            this.inkBar.alignToElement(selectedItemElement.parentElement);
        }
    }
    setPingStatus() {
        const ping = {
            top: false,
            right: false,
            bottom: false,
            left: false
        };
        const navWarp = this.navWarpRef.nativeElement;
        if (this.position === 'horizontal') {
            if (this.getLayoutDirection() === 'rtl') {
                ping.right = this.transformX > 0;
                ping.left = this.transformX + this.wrapperWidth < this.scrollListWidth;
            }
            else {
                ping.left = this.transformX < 0;
                ping.right = -this.transformX + this.wrapperWidth < this.scrollListWidth;
            }
        }
        else {
            ping.top = this.transformY < 0;
            ping.bottom = -this.transformY + this.wrapperHeight < this.scrollListHeight;
        }
        Object.keys(ping).forEach(pos => {
            const className = `ant-tabs-nav-wrap-ping-${pos}`;
            if (ping[pos]) {
                navWarp.classList.add(className);
            }
            else {
                navWarp.classList.remove(className);
            }
        });
    }
    setVisibleRange() {
        let unit;
        let position;
        let transformSize;
        let basicSize;
        let tabContentSize;
        let addSize;
        const tabs = this.items.toArray();
        const DEFAULT_SIZE = { width: 0, height: 0, left: 0, top: 0, right: 0 };
        const getOffset = (index) => {
            let offset;
            const size = tabs[index] || DEFAULT_SIZE;
            if (position === 'right') {
                offset = tabs[0].left + tabs[0].width - tabs[index].left - tabs[index].width;
            }
            else {
                offset = size[position];
            }
            return offset;
        };
        if (this.position === 'horizontal') {
            unit = 'width';
            basicSize = this.wrapperWidth;
            tabContentSize = this.scrollListWidth - (this.hiddenItems.length ? this.operationWidth : 0);
            addSize = this.addButtonWidth;
            transformSize = Math.abs(this.transformX);
            if (this.getLayoutDirection() === 'rtl') {
                position = 'right';
                this.pingRight = this.transformX > 0;
                this.pingLeft = this.transformX + this.wrapperWidth < this.scrollListWidth;
            }
            else {
                this.pingLeft = this.transformX < 0;
                this.pingRight = -this.transformX + this.wrapperWidth < this.scrollListWidth;
                position = 'left';
            }
        }
        else {
            unit = 'height';
            basicSize = this.wrapperHeight;
            tabContentSize = this.scrollListHeight - (this.hiddenItems.length ? this.operationHeight : 0);
            addSize = this.addButtonHeight;
            position = 'top';
            transformSize = -this.transformY;
            this.pingTop = this.transformY < 0;
            this.pingBottom = -this.transformY + this.wrapperHeight < this.scrollListHeight;
        }
        let mergedBasicSize = basicSize;
        if (tabContentSize + addSize > basicSize) {
            mergedBasicSize = basicSize - addSize;
        }
        if (!tabs.length) {
            this.hiddenItems = [];
            this.cdr.markForCheck();
            return;
        }
        const len = tabs.length;
        let endIndex = len;
        for (let i = 0; i < len; i += 1) {
            const offset = getOffset(i);
            const size = tabs[i] || DEFAULT_SIZE;
            if (offset + size[unit] > transformSize + mergedBasicSize) {
                endIndex = i - 1;
                break;
            }
        }
        let startIndex = 0;
        for (let i = len - 1; i >= 0; i -= 1) {
            const offset = getOffset(i);
            if (offset < transformSize) {
                startIndex = i + 1;
                break;
            }
        }
        const startHiddenTabs = tabs.slice(0, startIndex);
        const endHiddenTabs = tabs.slice(endIndex + 1);
        this.hiddenItems = [...startHiddenTabs, ...endHiddenTabs];
        this.cdr.markForCheck();
    }
    getLayoutDirection() {
        return this.dir && this.dir.value === 'rtl' ? 'rtl' : 'ltr';
    }
    setTabFocus(_tabIndex) { }
    ngOnChanges(changes) {
        const { position } = changes;
        // The first will be aligning in ngAfterViewInit
        if (position && !position.isFirstChange()) {
            this.alignInkBarToSelectedTab();
            this.lockAnimation();
            this.updateScrollListPosition();
        }
    }
}
NzTabNavBarComponent.ɵfac = function NzTabNavBarComponent_Factory(t) { return new (t || NzTabNavBarComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.NgZone), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.ViewportRuler), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.NzResizeObserver), ɵngcc0.ɵɵdirectiveInject(ɵngcc3.Directionality, 8)); };
NzTabNavBarComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzTabNavBarComponent, selectors: [["nz-tabs-nav"]], contentQueries: function NzTabNavBarComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, NzTabNavItemDirective, true);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.items = _t);
    } }, viewQuery: function NzTabNavBarComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵstaticViewQuery(_c0, true);
        ɵngcc0.ɵɵstaticViewQuery(_c1, true);
        ɵngcc0.ɵɵstaticViewQuery(NzTabNavOperationComponent, true);
        ɵngcc0.ɵɵviewQuery(NzTabAddButtonComponent, true);
        ɵngcc0.ɵɵstaticViewQuery(NzTabsInkBarDirective, true);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.navWarpRef = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.navListRef = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.operationRef = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.addBtnRef = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.inkBar = _t.first);
    } }, hostAttrs: ["role", "tablist", 1, "ant-tabs-nav"], hostBindings: function NzTabNavBarComponent_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("keydown", function NzTabNavBarComponent_keydown_HostBindingHandler($event) { return ctx.handleKeydown($event); });
    } }, inputs: { position: "position", addable: "addable", hideBar: "hideBar", addIcon: "addIcon", inkBarAnimated: "inkBarAnimated", selectedIndex: "selectedIndex", extraTemplate: "extraTemplate" }, outputs: { indexFocused: "indexFocused", selectFocusedIndex: "selectFocusedIndex", addClicked: "addClicked", tabScroll: "tabScroll" }, exportAs: ["nzTabsNav"], features: [ɵngcc0.ɵɵNgOnChangesFeature], ngContentSelectors: _c2, decls: 9, vars: 16, consts: [[1, "ant-tabs-nav-wrap"], ["navWarp", ""], ["nzTabScrollList", "", 1, "ant-tabs-nav-list", 3, "offsetChange", "tabScroll"], ["navList", ""], ["nz-tab-add-button", "", 3, "addIcon", "click", 4, "ngIf"], ["nz-tabs-ink-bar", "", 3, "hidden", "position", "animated"], [3, "addIcon", "addable", "items", "addClicked", "selected"], ["class", "ant-tabs-extra-content", 4, "ngIf"], ["nz-tab-add-button", "", 3, "addIcon", "click"], [1, "ant-tabs-extra-content"], [3, "ngTemplateOutlet"]], template: function NzTabNavBarComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "div", 0, 1);
        ɵngcc0.ɵɵelementStart(2, "div", 2, 3);
        ɵngcc0.ɵɵlistener("offsetChange", function NzTabNavBarComponent_Template_div_offsetChange_2_listener($event) { return ctx.onOffsetChange($event); })("tabScroll", function NzTabNavBarComponent_Template_div_tabScroll_2_listener($event) { return ctx.tabScroll.emit($event); });
        ɵngcc0.ɵɵprojection(4);
        ɵngcc0.ɵɵtemplate(5, NzTabNavBarComponent_button_5_Template, 1, 1, "button", 4);
        ɵngcc0.ɵɵelement(6, "div", 5);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(7, "nz-tab-nav-operation", 6);
        ɵngcc0.ɵɵlistener("addClicked", function NzTabNavBarComponent_Template_nz_tab_nav_operation_addClicked_7_listener() { return ctx.addClicked.emit(); })("selected", function NzTabNavBarComponent_Template_nz_tab_nav_operation_selected_7_listener($event) { return ctx.onSelectedFromMenu($event); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(8, NzTabNavBarComponent_div_8_Template, 2, 1, "div", 7);
    } if (rf & 2) {
        ɵngcc0.ɵɵclassProp("ant-tabs-nav-wrap-ping-left", ctx.pingLeft)("ant-tabs-nav-wrap-ping-right", ctx.pingRight)("ant-tabs-nav-wrap-ping-top", ctx.pingTop)("ant-tabs-nav-wrap-ping-bottom", ctx.pingBottom);
        ɵngcc0.ɵɵadvance(5);
        ɵngcc0.ɵɵproperty("ngIf", ctx.showAddButton);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("hidden", ctx.hideBar)("position", ctx.position)("animated", ctx.inkBarAnimated);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("addIcon", ctx.addIcon)("addable", ctx.addable)("items", ctx.hiddenItems);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.extraTemplate);
    } }, directives: [ɵngcc4.NzTabScrollListDirective, ɵngcc5.NgIf, ɵngcc6.NzTabsInkBarDirective, ɵngcc7.NzTabNavOperationComponent, ɵngcc8.NzTabAddButtonComponent, ɵngcc5.NgTemplateOutlet], encapsulation: 2, changeDetection: 0 });
NzTabNavBarComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: NgZone },
    { type: ViewportRuler },
    { type: NzResizeObserver },
    { type: Directionality, decorators: [{ type: Optional }] }
];
NzTabNavBarComponent.propDecorators = {
    indexFocused: [{ type: Output }],
    selectFocusedIndex: [{ type: Output }],
    addClicked: [{ type: Output }],
    tabScroll: [{ type: Output }],
    position: [{ type: Input }],
    addable: [{ type: Input }],
    hideBar: [{ type: Input }],
    addIcon: [{ type: Input }],
    inkBarAnimated: [{ type: Input }],
    extraTemplate: [{ type: Input }],
    selectedIndex: [{ type: Input }],
    navWarpRef: [{ type: ViewChild, args: ['navWarp', { static: true },] }],
    navListRef: [{ type: ViewChild, args: ['navList', { static: true },] }],
    operationRef: [{ type: ViewChild, args: [NzTabNavOperationComponent, { static: true },] }],
    addBtnRef: [{ type: ViewChild, args: [NzTabAddButtonComponent, { static: false },] }],
    inkBar: [{ type: ViewChild, args: [NzTabsInkBarDirective, { static: true },] }],
    items: [{ type: ContentChildren, args: [NzTabNavItemDirective, { descendants: true },] }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzTabNavBarComponent, [{
        type: Component,
        args: [{
                selector: 'nz-tabs-nav',
                exportAs: 'nzTabsNav',
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                template: `
    <div
      class="ant-tabs-nav-wrap"
      [class.ant-tabs-nav-wrap-ping-left]="pingLeft"
      [class.ant-tabs-nav-wrap-ping-right]="pingRight"
      [class.ant-tabs-nav-wrap-ping-top]="pingTop"
      [class.ant-tabs-nav-wrap-ping-bottom]="pingBottom"
      #navWarp
    >
      <div class="ant-tabs-nav-list" #navList nzTabScrollList (offsetChange)="onOffsetChange($event)" (tabScroll)="tabScroll.emit($event)">
        <ng-content></ng-content>
        <button *ngIf="showAddButton" nz-tab-add-button [addIcon]="addIcon" (click)="addClicked.emit()"></button>
        <div nz-tabs-ink-bar [hidden]="hideBar" [position]="position" [animated]="inkBarAnimated"></div>
      </div>
    </div>
    <nz-tab-nav-operation
      (addClicked)="addClicked.emit()"
      (selected)="onSelectedFromMenu($event)"
      [addIcon]="addIcon"
      [addable]="addable"
      [items]="hiddenItems"
    ></nz-tab-nav-operation>
    <div class="ant-tabs-extra-content" *ngIf="extraTemplate">
      <ng-template [ngTemplateOutlet]="extraTemplate"></ng-template>
    </div>
  `,
                host: {
                    role: 'tablist',
                    class: 'ant-tabs-nav',
                    '(keydown)': 'handleKeydown($event)'
                }
            }]
    }], function () { return [{ type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc0.NgZone }, { type: ɵngcc1.ViewportRuler }, { type: ɵngcc2.NzResizeObserver }, { type: ɵngcc3.Directionality, decorators: [{
                type: Optional
            }] }]; }, { indexFocused: [{
            type: Output
        }], selectFocusedIndex: [{
            type: Output
        }], addClicked: [{
            type: Output
        }], tabScroll: [{
            type: Output
        }], position: [{
            type: Input
        }], addable: [{
            type: Input
        }], hideBar: [{
            type: Input
        }], addIcon: [{
            type: Input
        }], inkBarAnimated: [{
            type: Input
        }], selectedIndex: [{
            type: Input
        }], extraTemplate: [{
            type: Input
        }], navWarpRef: [{
            type: ViewChild,
            args: ['navWarp', { static: true }]
        }], navListRef: [{
            type: ViewChild,
            args: ['navList', { static: true }]
        }], operationRef: [{
            type: ViewChild,
            args: [NzTabNavOperationComponent, { static: true }]
        }], addBtnRef: [{
            type: ViewChild,
            args: [NzTabAddButtonComponent, { static: false }]
        }], inkBar: [{
            type: ViewChild,
            args: [NzTabsInkBarDirective, { static: true }]
        }], items: [{
            type: ContentChildren,
            args: [NzTabNavItemDirective, { descendants: true }]
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLW5hdi1iYXIuY29tcG9uZW50LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9jb21wb25lbnRzL3RhYnMvdGFiLW5hdi1iYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFFSCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDcEQsT0FBTyxFQUFhLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQzlELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzdELE9BQU8sRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLGNBQWMsRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNwSCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDckQsT0FBTyxFQUdMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULGVBQWUsRUFDZixVQUFVLEVBQ1YsWUFBWSxFQUNaLEtBQUssRUFDTCxNQUFNLEVBSU4sUUFBUSxFQUNSLE1BQU0sRUFDTixTQUFTLEVBRVQsV0FBVyxFQUNYLFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLHVCQUF1QixFQUFFLGFBQWEsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNsRixPQUFPLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXRELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUl2RSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNyRSxPQUFPLEVBQUUs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LFNBQUMsdUJBQXVCLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFO0FBQU8scUJBQzNELFNBQVMsU0FBQyxxQkFBcUIsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7QUFBTyxvQkFDeEQsZUFBZSxTQUFDLHFCQUFxQixFQUFFLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRTtBQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkFBRTtBQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHsgRm9jdXNLZXlNYW5hZ2VyIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2ExMXknO1xuaW1wb3J0IHsgRGlyZWN0aW9uLCBEaXJlY3Rpb25hbGl0eSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9iaWRpJztcbmltcG9ydCB7IGNvZXJjZU51bWJlclByb3BlcnR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uJztcbmltcG9ydCB7IERPV05fQVJST1csIEVOVEVSLCBoYXNNb2RpZmllcktleSwgTEVGVF9BUlJPVywgUklHSFRfQVJST1csIFNQQUNFLCBVUF9BUlJPVyB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9rZXljb2Rlcyc7XG5pbXBvcnQgeyBWaWV3cG9ydFJ1bGVyIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xuaW1wb3J0IHtcbiAgQWZ0ZXJDb250ZW50Q2hlY2tlZCxcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgTmdab25lLFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPcHRpb25hbCxcbiAgT3V0cHV0LFxuICBRdWVyeUxpc3QsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBhbmltYXRpb25GcmFtZVNjaGVkdWxlciwgYXNhcFNjaGVkdWxlciwgbWVyZ2UsIG9mLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBhdWRpdFRpbWUsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgcmVxQW5pbUZyYW1lIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3BvbHlmaWxsJztcbmltcG9ydCB7IE56UmVzaXplT2JzZXJ2ZXIgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvcmVzaXplLW9ic2VydmVycyc7XG5pbXBvcnQgeyBOdW1iZXJJbnB1dCwgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcblxuaW1wb3J0IHsgTnpUYWJQb3NpdGlvbk1vZGUsIE56VGFiU2Nyb2xsRXZlbnQsIE56VGFiU2Nyb2xsTGlzdE9mZnNldEV2ZW50IH0gZnJvbSAnLi9pbnRlcmZhY2VzJztcbmltcG9ydCB7IE56VGFiQWRkQnV0dG9uQ29tcG9uZW50IH0gZnJvbSAnLi90YWItYWRkLWJ1dHRvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgTnpUYWJOYXZJdGVtRGlyZWN0aXZlIH0gZnJvbSAnLi90YWItbmF2LWl0ZW0uZGlyZWN0aXZlJztcbmltcG9ydCB7IE56VGFiTmF2T3BlcmF0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi90YWItbmF2LW9wZXJhdGlvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgTnpUYWJzSW5rQmFyRGlyZWN0aXZlIH0gZnJvbSAnLi90YWJzLWluay1iYXIuZGlyZWN0aXZlJztcblxuY29uc3QgUkVTSVpFX1NDSEVEVUxFUiA9IHR5cGVvZiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgIT09ICd1bmRlZmluZWQnID8gYW5pbWF0aW9uRnJhbWVTY2hlZHVsZXIgOiBhc2FwU2NoZWR1bGVyO1xuY29uc3QgQ1NTX1RSQU5TRk9STV9USU1FID0gMTUwO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduei10YWJzLW5hdicsXG4gIGV4cG9ydEFzOiAnbnpUYWJzTmF2JyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXZcbiAgICAgIGNsYXNzPVwiYW50LXRhYnMtbmF2LXdyYXBcIlxuICAgICAgW2NsYXNzLmFudC10YWJzLW5hdi13cmFwLXBpbmctbGVmdF09XCJwaW5nTGVmdFwiXG4gICAgICBbY2xhc3MuYW50LXRhYnMtbmF2LXdyYXAtcGluZy1yaWdodF09XCJwaW5nUmlnaHRcIlxuICAgICAgW2NsYXNzLmFudC10YWJzLW5hdi13cmFwLXBpbmctdG9wXT1cInBpbmdUb3BcIlxuICAgICAgW2NsYXNzLmFudC10YWJzLW5hdi13cmFwLXBpbmctYm90dG9tXT1cInBpbmdCb3R0b21cIlxuICAgICAgI25hdldhcnBcbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzPVwiYW50LXRhYnMtbmF2LWxpc3RcIiAjbmF2TGlzdCBuelRhYlNjcm9sbExpc3QgKG9mZnNldENoYW5nZSk9XCJvbk9mZnNldENoYW5nZSgkZXZlbnQpXCIgKHRhYlNjcm9sbCk9XCJ0YWJTY3JvbGwuZW1pdCgkZXZlbnQpXCI+XG4gICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICAgICAgPGJ1dHRvbiAqbmdJZj1cInNob3dBZGRCdXR0b25cIiBuei10YWItYWRkLWJ1dHRvbiBbYWRkSWNvbl09XCJhZGRJY29uXCIgKGNsaWNrKT1cImFkZENsaWNrZWQuZW1pdCgpXCI+PC9idXR0b24+XG4gICAgICAgIDxkaXYgbnotdGFicy1pbmstYmFyIFtoaWRkZW5dPVwiaGlkZUJhclwiIFtwb3NpdGlvbl09XCJwb3NpdGlvblwiIFthbmltYXRlZF09XCJpbmtCYXJBbmltYXRlZFwiPjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPG56LXRhYi1uYXYtb3BlcmF0aW9uXG4gICAgICAoYWRkQ2xpY2tlZCk9XCJhZGRDbGlja2VkLmVtaXQoKVwiXG4gICAgICAoc2VsZWN0ZWQpPVwib25TZWxlY3RlZEZyb21NZW51KCRldmVudClcIlxuICAgICAgW2FkZEljb25dPVwiYWRkSWNvblwiXG4gICAgICBbYWRkYWJsZV09XCJhZGRhYmxlXCJcbiAgICAgIFtpdGVtc109XCJoaWRkZW5JdGVtc1wiXG4gICAgPjwvbnotdGFiLW5hdi1vcGVyYXRpb24+XG4gICAgPGRpdiBjbGFzcz1cImFudC10YWJzLWV4dHJhLWNvbnRlbnRcIiAqbmdJZj1cImV4dHJhVGVtcGxhdGVcIj5cbiAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJleHRyYVRlbXBsYXRlXCI+PC9uZy10ZW1wbGF0ZT5cbiAgICA8L2Rpdj5cbiAgYCxcbiAgaG9zdDoge1xuICAgIHJvbGU6ICd0YWJsaXN0JyxcbiAgICBjbGFzczogJ2FudC10YWJzLW5hdicsXG4gICAgJyhrZXlkb3duKSc6ICdoYW5kbGVLZXlkb3duKCRldmVudCknXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgTnpUYWJOYXZCYXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQsIEFmdGVyQ29udGVudENoZWNrZWQsIE9uRGVzdHJveSwgT25DaGFuZ2VzIHtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX3NlbGVjdGVkSW5kZXg6IE51bWJlcklucHV0O1xuXG4gIEBPdXRwdXQoKSByZWFkb25seSBpbmRleEZvY3VzZWQ6IEV2ZW50RW1pdHRlcjxudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XG4gIEBPdXRwdXQoKSByZWFkb25seSBzZWxlY3RGb2N1c2VkSW5kZXg6IEV2ZW50RW1pdHRlcjxudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XG4gIEBPdXRwdXQoKSByZWFkb25seSBhZGRDbGlja2VkID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgdGFiU2Nyb2xsID0gbmV3IEV2ZW50RW1pdHRlcjxOelRhYlNjcm9sbEV2ZW50PigpO1xuXG4gIEBJbnB1dCgpIHBvc2l0aW9uOiBOelRhYlBvc2l0aW9uTW9kZSA9ICdob3Jpem9udGFsJztcbiAgQElucHV0KCkgYWRkYWJsZTogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBoaWRlQmFyOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIGFkZEljb246IHN0cmluZyB8IFRlbXBsYXRlUmVmPE56U2FmZUFueT4gPSAncGx1cyc7XG4gIEBJbnB1dCgpIGlua0JhckFuaW1hdGVkID0gdHJ1ZTtcbiAgQElucHV0KCkgZXh0cmFUZW1wbGF0ZT86IFRlbXBsYXRlUmVmPHZvaWQ+O1xuXG4gIEBJbnB1dCgpXG4gIGdldCBzZWxlY3RlZEluZGV4KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3NlbGVjdGVkSW5kZXg7XG4gIH1cbiAgc2V0IHNlbGVjdGVkSW5kZXgodmFsdWU6IG51bWJlcikge1xuICAgIGNvbnN0IG5ld1ZhbHVlID0gY29lcmNlTnVtYmVyUHJvcGVydHkodmFsdWUpO1xuICAgIGlmICh0aGlzLl9zZWxlY3RlZEluZGV4ICE9PSBuZXdWYWx1ZSkge1xuICAgICAgdGhpcy5fc2VsZWN0ZWRJbmRleCA9IHZhbHVlO1xuICAgICAgdGhpcy5zZWxlY3RlZEluZGV4Q2hhbmdlZCA9IHRydWU7XG4gICAgICBpZiAodGhpcy5rZXlNYW5hZ2VyKSB7XG4gICAgICAgIHRoaXMua2V5TWFuYWdlci51cGRhdGVBY3RpdmVJdGVtKHZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBAVmlld0NoaWxkKCduYXZXYXJwJywgeyBzdGF0aWM6IHRydWUgfSkgbmF2V2FycFJlZiE6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+O1xuICBAVmlld0NoaWxkKCduYXZMaXN0JywgeyBzdGF0aWM6IHRydWUgfSkgbmF2TGlzdFJlZiE6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+O1xuICBAVmlld0NoaWxkKE56VGFiTmF2T3BlcmF0aW9uQ29tcG9uZW50LCB7IHN0YXRpYzogdHJ1ZSB9KSBvcGVyYXRpb25SZWYhOiBOelRhYk5hdk9wZXJhdGlvbkNvbXBvbmVudDtcbiAgQFZpZXdDaGlsZChOelRhYkFkZEJ1dHRvbkNvbXBvbmVudCwgeyBzdGF0aWM6IGZhbHNlIH0pIGFkZEJ0blJlZiE6IE56VGFiQWRkQnV0dG9uQ29tcG9uZW50O1xuICBAVmlld0NoaWxkKE56VGFic0lua0JhckRpcmVjdGl2ZSwgeyBzdGF0aWM6IHRydWUgfSkgaW5rQmFyITogTnpUYWJzSW5rQmFyRGlyZWN0aXZlO1xuICBAQ29udGVudENoaWxkcmVuKE56VGFiTmF2SXRlbURpcmVjdGl2ZSwgeyBkZXNjZW5kYW50czogdHJ1ZSB9KSBpdGVtcyE6IFF1ZXJ5TGlzdDxOelRhYk5hdkl0ZW1EaXJlY3RpdmU+O1xuXG4gIC8qKiBUcmFja3Mgd2hpY2ggZWxlbWVudCBoYXMgZm9jdXM7IHVzZWQgZm9yIGtleWJvYXJkIG5hdmlnYXRpb24gKi9cbiAgZ2V0IGZvY3VzSW5kZXgoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5rZXlNYW5hZ2VyID8gdGhpcy5rZXlNYW5hZ2VyLmFjdGl2ZUl0ZW1JbmRleCEgOiAwO1xuICB9XG5cbiAgLyoqIFdoZW4gdGhlIGZvY3VzIGluZGV4IGlzIHNldCwgd2UgbXVzdCBtYW51YWxseSBzZW5kIGZvY3VzIHRvIHRoZSBjb3JyZWN0IGxhYmVsICovXG4gIHNldCBmb2N1c0luZGV4KHZhbHVlOiBudW1iZXIpIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZEluZGV4KHZhbHVlKSB8fCB0aGlzLmZvY3VzSW5kZXggPT09IHZhbHVlIHx8ICF0aGlzLmtleU1hbmFnZXIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmtleU1hbmFnZXIuc2V0QWN0aXZlSXRlbSh2YWx1ZSk7XG4gIH1cblxuICBnZXQgc2hvd0FkZEJ1dHRvbigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5oaWRkZW5JdGVtcy5sZW5ndGggPT09IDAgJiYgdGhpcy5hZGRhYmxlO1xuICB9XG5cbiAgdHJhbnNsYXRlOiBudWxsIHwgc3RyaW5nID0gbnVsbDtcbiAgdHJhbnNmb3JtWCA9IDA7XG4gIHRyYW5zZm9ybVkgPSAwO1xuICBwaW5nTGVmdCA9IGZhbHNlO1xuICBwaW5nUmlnaHQgPSBmYWxzZTtcbiAgcGluZ1RvcCA9IGZhbHNlO1xuICBwaW5nQm90dG9tID0gZmFsc2U7XG4gIGhpZGRlbkl0ZW1zOiBOelRhYk5hdkl0ZW1EaXJlY3RpdmVbXSA9IFtdO1xuXG4gIHByaXZhdGUga2V5TWFuYWdlciE6IEZvY3VzS2V5TWFuYWdlcjxOelRhYk5hdkl0ZW1EaXJlY3RpdmU+O1xuICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcbiAgcHJpdmF0ZSBfc2VsZWN0ZWRJbmRleCA9IDA7XG4gIHByaXZhdGUgd3JhcHBlcldpZHRoID0gMDtcbiAgcHJpdmF0ZSB3cmFwcGVySGVpZ2h0ID0gMDtcbiAgcHJpdmF0ZSBzY3JvbGxMaXN0V2lkdGggPSAwO1xuICBwcml2YXRlIHNjcm9sbExpc3RIZWlnaHQgPSAwO1xuICBwcml2YXRlIG9wZXJhdGlvbldpZHRoID0gMDtcbiAgcHJpdmF0ZSBvcGVyYXRpb25IZWlnaHQgPSAwO1xuICBwcml2YXRlIGFkZEJ1dHRvbldpZHRoID0gMDtcbiAgcHJpdmF0ZSBhZGRCdXR0b25IZWlnaHQgPSAwO1xuICBwcml2YXRlIHNlbGVjdGVkSW5kZXhDaGFuZ2VkID0gZmFsc2U7XG4gIHByaXZhdGUgbG9ja0FuaW1hdGlvblRpbWVvdXRJZCA9IC0xO1xuICBwcml2YXRlIGNzc1RyYW5zZm9ybVRpbWVXYWl0aW5nSWQgPSAtMTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSxcbiAgICBwcml2YXRlIHZpZXdwb3J0UnVsZXI6IFZpZXdwb3J0UnVsZXIsXG4gICAgcHJpdmF0ZSBuelJlc2l6ZU9ic2VydmVyOiBOelJlc2l6ZU9ic2VydmVyLFxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgZGlyOiBEaXJlY3Rpb25hbGl0eVxuICApIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7fVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICBjb25zdCBkaXJDaGFuZ2UgPSB0aGlzLmRpciA/IHRoaXMuZGlyLmNoYW5nZSA6IG9mKG51bGwpO1xuICAgIGNvbnN0IHJlc2l6ZSA9IHRoaXMudmlld3BvcnRSdWxlci5jaGFuZ2UoMTUwKTtcblxuICAgIGNvbnN0IHJlYWxpZ24gPSAoKSA9PiB7XG4gICAgICB0aGlzLnVwZGF0ZVNjcm9sbExpc3RQb3NpdGlvbigpO1xuICAgICAgdGhpcy5hbGlnbklua0JhclRvU2VsZWN0ZWRUYWIoKTtcbiAgICB9O1xuICAgIHRoaXMua2V5TWFuYWdlciA9IG5ldyBGb2N1c0tleU1hbmFnZXI8TnpUYWJOYXZJdGVtRGlyZWN0aXZlPih0aGlzLml0ZW1zKVxuICAgICAgLndpdGhIb3Jpem9udGFsT3JpZW50YXRpb24odGhpcy5nZXRMYXlvdXREaXJlY3Rpb24oKSlcbiAgICAgIC53aXRoV3JhcCgpO1xuICAgIHRoaXMua2V5TWFuYWdlci51cGRhdGVBY3RpdmVJdGVtKHRoaXMuc2VsZWN0ZWRJbmRleCk7XG5cbiAgICByZXFBbmltRnJhbWUocmVhbGlnbik7XG5cbiAgICBtZXJnZSh0aGlzLm56UmVzaXplT2JzZXJ2ZXIub2JzZXJ2ZSh0aGlzLm5hdldhcnBSZWYpLCB0aGlzLm56UmVzaXplT2JzZXJ2ZXIub2JzZXJ2ZSh0aGlzLm5hdkxpc3RSZWYpKVxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpLCBhdWRpdFRpbWUoMTYsIFJFU0laRV9TQ0hFRFVMRVIpKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIHJlYWxpZ24oKTtcbiAgICAgIH0pO1xuICAgIG1lcmdlKGRpckNoYW5nZSwgcmVzaXplLCB0aGlzLml0ZW1zLmNoYW5nZXMpXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbihyZWFsaWduKTtcbiAgICAgICAgdGhpcy5rZXlNYW5hZ2VyLndpdGhIb3Jpem9udGFsT3JpZW50YXRpb24odGhpcy5nZXRMYXlvdXREaXJlY3Rpb24oKSk7XG4gICAgICB9KTtcblxuICAgIHRoaXMua2V5TWFuYWdlci5jaGFuZ2UucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZShuZXdGb2N1c0luZGV4ID0+IHtcbiAgICAgIHRoaXMuaW5kZXhGb2N1c2VkLmVtaXQobmV3Rm9jdXNJbmRleCk7XG4gICAgICB0aGlzLnNldFRhYkZvY3VzKG5ld0ZvY3VzSW5kZXgpO1xuICAgICAgdGhpcy5zY3JvbGxUb1RhYih0aGlzLmtleU1hbmFnZXIuYWN0aXZlSXRlbSEpO1xuICAgIH0pO1xuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRDaGVja2VkKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnNlbGVjdGVkSW5kZXhDaGFuZ2VkKSB7XG4gICAgICB0aGlzLnVwZGF0ZVNjcm9sbExpc3RQb3NpdGlvbigpO1xuICAgICAgdGhpcy5hbGlnbklua0JhclRvU2VsZWN0ZWRUYWIoKTtcbiAgICAgIHRoaXMuc2VsZWN0ZWRJbmRleENoYW5nZWQgPSBmYWxzZTtcbiAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGNsZWFyVGltZW91dCh0aGlzLmxvY2tBbmltYXRpb25UaW1lb3V0SWQpO1xuICAgIGNsZWFyVGltZW91dCh0aGlzLmNzc1RyYW5zZm9ybVRpbWVXYWl0aW5nSWQpO1xuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcbiAgfVxuXG4gIG9uU2VsZWN0ZWRGcm9tTWVudSh0YWI6IE56VGFiTmF2SXRlbURpcmVjdGl2ZSk6IHZvaWQge1xuICAgIGNvbnN0IHRhYkluZGV4ID0gdGhpcy5pdGVtcy50b0FycmF5KCkuZmluZEluZGV4KGUgPT4gZSA9PT0gdGFiKTtcbiAgICBpZiAodGFiSW5kZXggIT09IC0xKSB7XG4gICAgICB0aGlzLmtleU1hbmFnZXIudXBkYXRlQWN0aXZlSXRlbSh0YWJJbmRleCk7XG4gICAgICBpZiAodGhpcy5mb2N1c0luZGV4ICE9PSB0aGlzLnNlbGVjdGVkSW5kZXgpIHtcbiAgICAgICAgdGhpcy5zZWxlY3RGb2N1c2VkSW5kZXguZW1pdCh0aGlzLmZvY3VzSW5kZXgpO1xuICAgICAgICB0aGlzLnNjcm9sbFRvVGFiKHRhYik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25PZmZzZXRDaGFuZ2UoZTogTnpUYWJTY3JvbGxMaXN0T2Zmc2V0RXZlbnQpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5wb3NpdGlvbiA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICBpZiAodGhpcy5sb2NrQW5pbWF0aW9uVGltZW91dElkID09PSAtMSkge1xuICAgICAgICBpZiAodGhpcy50cmFuc2Zvcm1YID49IDAgJiYgZS54ID4gMCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy50cmFuc2Zvcm1YIDw9IHRoaXMud3JhcHBlcldpZHRoIC0gdGhpcy5zY3JvbGxMaXN0V2lkdGggJiYgZS54IDwgMCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZS5ldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgdGhpcy50cmFuc2Zvcm1YID0gdGhpcy5jbGFtcFRyYW5zZm9ybVgodGhpcy50cmFuc2Zvcm1YICsgZS54KTtcbiAgICAgIHRoaXMuc2V0VHJhbnNmb3JtKHRoaXMudHJhbnNmb3JtWCwgMCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLmxvY2tBbmltYXRpb25UaW1lb3V0SWQgPT09IC0xKSB7XG4gICAgICAgIGlmICh0aGlzLnRyYW5zZm9ybVkgPj0gMCAmJiBlLnkgPiAwKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnRyYW5zZm9ybVkgPD0gdGhpcy53cmFwcGVySGVpZ2h0IC0gdGhpcy5zY3JvbGxMaXN0SGVpZ2h0ICYmIGUueSA8IDApIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGUuZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHRoaXMudHJhbnNmb3JtWSA9IHRoaXMuY2xhbXBUcmFuc2Zvcm1ZKHRoaXMudHJhbnNmb3JtWSArIGUueSk7XG4gICAgICB0aGlzLnNldFRyYW5zZm9ybSgwLCB0aGlzLnRyYW5zZm9ybVkpO1xuICAgIH1cblxuICAgIHRoaXMubG9ja0FuaW1hdGlvbigpO1xuICAgIHRoaXMuc2V0VmlzaWJsZVJhbmdlKCk7XG4gICAgdGhpcy5zZXRQaW5nU3RhdHVzKCk7XG4gIH1cblxuICBoYW5kbGVLZXlkb3duKGV2ZW50OiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XG4gICAgY29uc3QgaW5OYXZpZ2F0aW9uTGlzdCA9IHRoaXMubmF2V2FycFJlZi5uYXRpdmVFbGVtZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldCBhcyBIVE1MRWxlbWVudCk7XG4gICAgaWYgKGhhc01vZGlmaWVyS2V5KGV2ZW50KSB8fCAhaW5OYXZpZ2F0aW9uTGlzdCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHN3aXRjaCAoZXZlbnQua2V5Q29kZSkge1xuICAgICAgY2FzZSBMRUZUX0FSUk9XOlxuICAgICAgY2FzZSBVUF9BUlJPVzpcbiAgICAgIGNhc2UgUklHSFRfQVJST1c6XG4gICAgICBjYXNlIERPV05fQVJST1c6XG4gICAgICAgIHRoaXMubG9ja0FuaW1hdGlvbigpO1xuICAgICAgICB0aGlzLmtleU1hbmFnZXIub25LZXlkb3duKGV2ZW50KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIEVOVEVSOlxuICAgICAgY2FzZSBTUEFDRTpcbiAgICAgICAgaWYgKHRoaXMuZm9jdXNJbmRleCAhPT0gdGhpcy5zZWxlY3RlZEluZGV4KSB7XG4gICAgICAgICAgdGhpcy5zZWxlY3RGb2N1c2VkSW5kZXguZW1pdCh0aGlzLmZvY3VzSW5kZXgpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhpcy5rZXlNYW5hZ2VyLm9uS2V5ZG93bihldmVudCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBpc1ZhbGlkSW5kZXgoaW5kZXg6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgIGlmICghdGhpcy5pdGVtcykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgY29uc3QgdGFiID0gdGhpcy5pdGVtcyA/IHRoaXMuaXRlbXMudG9BcnJheSgpW2luZGV4XSA6IG51bGw7XG4gICAgcmV0dXJuICEhdGFiICYmICF0YWIuZGlzYWJsZWQ7XG4gIH1cblxuICBwcml2YXRlIHNjcm9sbFRvVGFiKHRhYjogTnpUYWJOYXZJdGVtRGlyZWN0aXZlKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLml0ZW1zLmZpbmQoZSA9PiBlID09PSB0YWIpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHRhYnMgPSB0aGlzLml0ZW1zLnRvQXJyYXkoKTtcblxuICAgIGlmICh0aGlzLnBvc2l0aW9uID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgIGxldCBuZXdUcmFuc2Zvcm0gPSB0aGlzLnRyYW5zZm9ybVg7XG4gICAgICBpZiAodGhpcy5nZXRMYXlvdXREaXJlY3Rpb24oKSA9PT0gJ3J0bCcpIHtcbiAgICAgICAgY29uc3QgcmlnaHQgPSB0YWJzWzBdLmxlZnQgKyB0YWJzWzBdLndpZHRoIC0gdGFiLmxlZnQgLSB0YWIud2lkdGg7XG5cbiAgICAgICAgaWYgKHJpZ2h0IDwgdGhpcy50cmFuc2Zvcm1YKSB7XG4gICAgICAgICAgbmV3VHJhbnNmb3JtID0gcmlnaHQ7XG4gICAgICAgIH0gZWxzZSBpZiAocmlnaHQgKyB0YWIud2lkdGggPiB0aGlzLnRyYW5zZm9ybVggKyB0aGlzLndyYXBwZXJXaWR0aCkge1xuICAgICAgICAgIG5ld1RyYW5zZm9ybSA9IHJpZ2h0ICsgdGFiLndpZHRoIC0gdGhpcy53cmFwcGVyV2lkdGg7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAodGFiLmxlZnQgPCAtdGhpcy50cmFuc2Zvcm1YKSB7XG4gICAgICAgIG5ld1RyYW5zZm9ybSA9IC10YWIubGVmdDtcbiAgICAgIH0gZWxzZSBpZiAodGFiLmxlZnQgKyB0YWIud2lkdGggPiAtdGhpcy50cmFuc2Zvcm1YICsgdGhpcy53cmFwcGVyV2lkdGgpIHtcbiAgICAgICAgbmV3VHJhbnNmb3JtID0gLSh0YWIubGVmdCArIHRhYi53aWR0aCAtIHRoaXMud3JhcHBlcldpZHRoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMudHJhbnNmb3JtWCA9IG5ld1RyYW5zZm9ybTtcbiAgICAgIHRoaXMudHJhbnNmb3JtWSA9IDA7XG4gICAgICB0aGlzLnNldFRyYW5zZm9ybShuZXdUcmFuc2Zvcm0sIDApO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgbmV3VHJhbnNmb3JtID0gdGhpcy50cmFuc2Zvcm1ZO1xuXG4gICAgICBpZiAodGFiLnRvcCA8IC10aGlzLnRyYW5zZm9ybVkpIHtcbiAgICAgICAgbmV3VHJhbnNmb3JtID0gLXRhYi50b3A7XG4gICAgICB9IGVsc2UgaWYgKHRhYi50b3AgKyB0YWIuaGVpZ2h0ID4gLXRoaXMudHJhbnNmb3JtWSArIHRoaXMud3JhcHBlckhlaWdodCkge1xuICAgICAgICBuZXdUcmFuc2Zvcm0gPSAtKHRhYi50b3AgKyB0YWIuaGVpZ2h0IC0gdGhpcy53cmFwcGVySGVpZ2h0KTtcbiAgICAgIH1cbiAgICAgIHRoaXMudHJhbnNmb3JtWSA9IG5ld1RyYW5zZm9ybTtcbiAgICAgIHRoaXMudHJhbnNmb3JtWCA9IDA7XG4gICAgICB0aGlzLnNldFRyYW5zZm9ybSgwLCBuZXdUcmFuc2Zvcm0pO1xuICAgIH1cblxuICAgIGNsZWFyVGltZW91dCh0aGlzLmNzc1RyYW5zZm9ybVRpbWVXYWl0aW5nSWQpO1xuICAgIHRoaXMuY3NzVHJhbnNmb3JtVGltZVdhaXRpbmdJZCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5zZXRWaXNpYmxlUmFuZ2UoKTtcbiAgICB9LCBDU1NfVFJBTlNGT1JNX1RJTUUpO1xuICB9XG5cbiAgcHJpdmF0ZSBsb2NrQW5pbWF0aW9uKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmxvY2tBbmltYXRpb25UaW1lb3V0SWQgPT09IC0xKSB7XG4gICAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICAgIHRoaXMubmF2TGlzdFJlZi5uYXRpdmVFbGVtZW50LnN0eWxlLnRyYW5zaXRpb24gPSAnbm9uZSc7XG4gICAgICAgIHRoaXMubG9ja0FuaW1hdGlvblRpbWVvdXRJZCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHRoaXMubmF2TGlzdFJlZi5uYXRpdmVFbGVtZW50LnN0eWxlLnRyYW5zaXRpb24gPSAnJztcbiAgICAgICAgICB0aGlzLmxvY2tBbmltYXRpb25UaW1lb3V0SWQgPSAtMTtcbiAgICAgICAgfSwgQ1NTX1RSQU5TRk9STV9USU1FKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc2V0VHJhbnNmb3JtKHg6IG51bWJlciwgeTogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5uYXZMaXN0UmVmLm5hdGl2ZUVsZW1lbnQuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZSgke3h9cHgsICR7eX1weClgO1xuICB9XG5cbiAgcHJpdmF0ZSBjbGFtcFRyYW5zZm9ybVgodHJhbnNmb3JtOiBudW1iZXIpOiBudW1iZXIge1xuICAgIGNvbnN0IHNjcm9sbFdpZHRoID0gdGhpcy53cmFwcGVyV2lkdGggLSB0aGlzLnNjcm9sbExpc3RXaWR0aDtcbiAgICBpZiAodGhpcy5nZXRMYXlvdXREaXJlY3Rpb24oKSA9PT0gJ3J0bCcpIHtcbiAgICAgIHJldHVybiBNYXRoLm1heChNYXRoLm1pbihzY3JvbGxXaWR0aCwgdHJhbnNmb3JtKSwgMCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBNYXRoLm1pbihNYXRoLm1heChzY3JvbGxXaWR0aCwgdHJhbnNmb3JtKSwgMCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBjbGFtcFRyYW5zZm9ybVkodHJhbnNmb3JtOiBudW1iZXIpOiBudW1iZXIge1xuICAgIHJldHVybiBNYXRoLm1pbihNYXRoLm1heCh0aGlzLndyYXBwZXJIZWlnaHQgLSB0aGlzLnNjcm9sbExpc3RIZWlnaHQsIHRyYW5zZm9ybSksIDApO1xuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVTY3JvbGxMaXN0UG9zaXRpb24oKTogdm9pZCB7XG4gICAgdGhpcy5yZXNldFNpemVzKCk7XG4gICAgdGhpcy50cmFuc2Zvcm1YID0gdGhpcy5jbGFtcFRyYW5zZm9ybVgodGhpcy50cmFuc2Zvcm1YKTtcbiAgICB0aGlzLnRyYW5zZm9ybVkgPSB0aGlzLmNsYW1wVHJhbnNmb3JtWSh0aGlzLnRyYW5zZm9ybVkpO1xuICAgIHRoaXMuc2V0VmlzaWJsZVJhbmdlKCk7XG4gICAgdGhpcy5zZXRQaW5nU3RhdHVzKCk7XG4gICAgaWYgKHRoaXMua2V5TWFuYWdlcikge1xuICAgICAgdGhpcy5rZXlNYW5hZ2VyLnVwZGF0ZUFjdGl2ZUl0ZW0odGhpcy5rZXlNYW5hZ2VyLmFjdGl2ZUl0ZW1JbmRleCEpO1xuICAgICAgaWYgKHRoaXMua2V5TWFuYWdlci5hY3RpdmVJdGVtKSB7XG4gICAgICAgIHRoaXMuc2Nyb2xsVG9UYWIodGhpcy5rZXlNYW5hZ2VyLmFjdGl2ZUl0ZW0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgcmVzZXRTaXplcygpOiB2b2lkIHtcbiAgICB0aGlzLmFkZEJ1dHRvbldpZHRoID0gdGhpcy5hZGRCdG5SZWYgPyB0aGlzLmFkZEJ0blJlZi5nZXRFbGVtZW50V2lkdGgoKSA6IDA7XG4gICAgdGhpcy5hZGRCdXR0b25IZWlnaHQgPSB0aGlzLmFkZEJ0blJlZiA/IHRoaXMuYWRkQnRuUmVmLmdldEVsZW1lbnRIZWlnaHQoKSA6IDA7XG4gICAgdGhpcy5vcGVyYXRpb25XaWR0aCA9IHRoaXMub3BlcmF0aW9uUmVmLmdldEVsZW1lbnRXaWR0aCgpO1xuICAgIHRoaXMub3BlcmF0aW9uSGVpZ2h0ID0gdGhpcy5vcGVyYXRpb25SZWYuZ2V0RWxlbWVudEhlaWdodCgpO1xuICAgIHRoaXMud3JhcHBlcldpZHRoID0gdGhpcy5uYXZXYXJwUmVmLm5hdGl2ZUVsZW1lbnQub2Zmc2V0V2lkdGggfHwgMDtcbiAgICB0aGlzLndyYXBwZXJIZWlnaHQgPSB0aGlzLm5hdldhcnBSZWYubmF0aXZlRWxlbWVudC5vZmZzZXRIZWlnaHQgfHwgMDtcbiAgICB0aGlzLnNjcm9sbExpc3RIZWlnaHQgPSB0aGlzLm5hdkxpc3RSZWYubmF0aXZlRWxlbWVudC5vZmZzZXRIZWlnaHQgfHwgMDtcbiAgICB0aGlzLnNjcm9sbExpc3RXaWR0aCA9IHRoaXMubmF2TGlzdFJlZi5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoIHx8IDA7XG4gIH1cblxuICBwcml2YXRlIGFsaWduSW5rQmFyVG9TZWxlY3RlZFRhYigpOiB2b2lkIHtcbiAgICBjb25zdCBzZWxlY3RlZEl0ZW0gPSB0aGlzLml0ZW1zICYmIHRoaXMuaXRlbXMubGVuZ3RoID8gdGhpcy5pdGVtcy50b0FycmF5KClbdGhpcy5zZWxlY3RlZEluZGV4XSA6IG51bGw7XG4gICAgY29uc3Qgc2VsZWN0ZWRJdGVtRWxlbWVudCA9IHNlbGVjdGVkSXRlbSA/IHNlbGVjdGVkSXRlbS5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQgOiBudWxsO1xuXG4gICAgaWYgKHNlbGVjdGVkSXRlbUVsZW1lbnQpIHtcbiAgICAgIC8qKlxuICAgICAgICogLmFudC10YWJzLW5hdi1saXN0IC0gVGFyZ2V0IG9mZnNldCBwYXJlbnQgZWxlbWVudFxuICAgICAgICogICDilJTilIDilIAuYW50LXRhYnMtdGFiXG4gICAgICAgKiAgICAgICAg4pSU4pSA4pSALmFudC10YWJzLXRhYi1idG4gLSBDdXJyZW50bHkgZm9jdXNlZCBlbGVtZW50XG4gICAgICAgKi9cbiAgICAgIHRoaXMuaW5rQmFyLmFsaWduVG9FbGVtZW50KHNlbGVjdGVkSXRlbUVsZW1lbnQucGFyZW50RWxlbWVudCEpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc2V0UGluZ1N0YXR1cygpOiB2b2lkIHtcbiAgICBjb25zdCBwaW5nID0ge1xuICAgICAgdG9wOiBmYWxzZSxcbiAgICAgIHJpZ2h0OiBmYWxzZSxcbiAgICAgIGJvdHRvbTogZmFsc2UsXG4gICAgICBsZWZ0OiBmYWxzZVxuICAgIH07XG4gICAgY29uc3QgbmF2V2FycCA9IHRoaXMubmF2V2FycFJlZi5uYXRpdmVFbGVtZW50O1xuICAgIGlmICh0aGlzLnBvc2l0aW9uID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgIGlmICh0aGlzLmdldExheW91dERpcmVjdGlvbigpID09PSAncnRsJykge1xuICAgICAgICBwaW5nLnJpZ2h0ID0gdGhpcy50cmFuc2Zvcm1YID4gMDtcbiAgICAgICAgcGluZy5sZWZ0ID0gdGhpcy50cmFuc2Zvcm1YICsgdGhpcy53cmFwcGVyV2lkdGggPCB0aGlzLnNjcm9sbExpc3RXaWR0aDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBpbmcubGVmdCA9IHRoaXMudHJhbnNmb3JtWCA8IDA7XG4gICAgICAgIHBpbmcucmlnaHQgPSAtdGhpcy50cmFuc2Zvcm1YICsgdGhpcy53cmFwcGVyV2lkdGggPCB0aGlzLnNjcm9sbExpc3RXaWR0aDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcGluZy50b3AgPSB0aGlzLnRyYW5zZm9ybVkgPCAwO1xuICAgICAgcGluZy5ib3R0b20gPSAtdGhpcy50cmFuc2Zvcm1ZICsgdGhpcy53cmFwcGVySGVpZ2h0IDwgdGhpcy5zY3JvbGxMaXN0SGVpZ2h0O1xuICAgIH1cblxuICAgIChPYmplY3Qua2V5cyhwaW5nKSBhcyBBcnJheTwndG9wJyB8ICdyaWdodCcgfCAnYm90dG9tJyB8ICdsZWZ0Jz4pLmZvckVhY2gocG9zID0+IHtcbiAgICAgIGNvbnN0IGNsYXNzTmFtZSA9IGBhbnQtdGFicy1uYXYtd3JhcC1waW5nLSR7cG9zfWA7XG4gICAgICBpZiAocGluZ1twb3NdKSB7XG4gICAgICAgIG5hdldhcnAuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmF2V2FycC5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIHNldFZpc2libGVSYW5nZSgpOiB2b2lkIHtcbiAgICBsZXQgdW5pdDogJ3dpZHRoJyB8ICdoZWlnaHQnO1xuICAgIGxldCBwb3NpdGlvbjogJ2xlZnQnIHwgJ3RvcCcgfCAncmlnaHQnO1xuICAgIGxldCB0cmFuc2Zvcm1TaXplOiBudW1iZXI7XG4gICAgbGV0IGJhc2ljU2l6ZTogbnVtYmVyO1xuICAgIGxldCB0YWJDb250ZW50U2l6ZTogbnVtYmVyO1xuICAgIGxldCBhZGRTaXplOiBudW1iZXI7XG4gICAgY29uc3QgdGFicyA9IHRoaXMuaXRlbXMudG9BcnJheSgpO1xuICAgIGNvbnN0IERFRkFVTFRfU0laRSA9IHsgd2lkdGg6IDAsIGhlaWdodDogMCwgbGVmdDogMCwgdG9wOiAwLCByaWdodDogMCB9O1xuXG4gICAgY29uc3QgZ2V0T2Zmc2V0ID0gKGluZGV4OiBudW1iZXIpOiBudW1iZXIgPT4ge1xuICAgICAgbGV0IG9mZnNldDogbnVtYmVyO1xuICAgICAgY29uc3Qgc2l6ZSA9IHRhYnNbaW5kZXhdIHx8IERFRkFVTFRfU0laRTtcbiAgICAgIGlmIChwb3NpdGlvbiA9PT0gJ3JpZ2h0Jykge1xuICAgICAgICBvZmZzZXQgPSB0YWJzWzBdLmxlZnQgKyB0YWJzWzBdLndpZHRoIC0gdGFic1tpbmRleF0ubGVmdCAtIHRhYnNbaW5kZXhdLndpZHRoO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb2Zmc2V0ID0gc2l6ZVtwb3NpdGlvbl07XG4gICAgICB9XG4gICAgICByZXR1cm4gb2Zmc2V0O1xuICAgIH07XG5cbiAgICBpZiAodGhpcy5wb3NpdGlvbiA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICB1bml0ID0gJ3dpZHRoJztcbiAgICAgIGJhc2ljU2l6ZSA9IHRoaXMud3JhcHBlcldpZHRoO1xuICAgICAgdGFiQ29udGVudFNpemUgPSB0aGlzLnNjcm9sbExpc3RXaWR0aCAtICh0aGlzLmhpZGRlbkl0ZW1zLmxlbmd0aCA/IHRoaXMub3BlcmF0aW9uV2lkdGggOiAwKTtcbiAgICAgIGFkZFNpemUgPSB0aGlzLmFkZEJ1dHRvbldpZHRoO1xuICAgICAgdHJhbnNmb3JtU2l6ZSA9IE1hdGguYWJzKHRoaXMudHJhbnNmb3JtWCk7XG4gICAgICBpZiAodGhpcy5nZXRMYXlvdXREaXJlY3Rpb24oKSA9PT0gJ3J0bCcpIHtcbiAgICAgICAgcG9zaXRpb24gPSAncmlnaHQnO1xuICAgICAgICB0aGlzLnBpbmdSaWdodCA9IHRoaXMudHJhbnNmb3JtWCA+IDA7XG4gICAgICAgIHRoaXMucGluZ0xlZnQgPSB0aGlzLnRyYW5zZm9ybVggKyB0aGlzLndyYXBwZXJXaWR0aCA8IHRoaXMuc2Nyb2xsTGlzdFdpZHRoO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5waW5nTGVmdCA9IHRoaXMudHJhbnNmb3JtWCA8IDA7XG4gICAgICAgIHRoaXMucGluZ1JpZ2h0ID0gLXRoaXMudHJhbnNmb3JtWCArIHRoaXMud3JhcHBlcldpZHRoIDwgdGhpcy5zY3JvbGxMaXN0V2lkdGg7XG4gICAgICAgIHBvc2l0aW9uID0gJ2xlZnQnO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB1bml0ID0gJ2hlaWdodCc7XG4gICAgICBiYXNpY1NpemUgPSB0aGlzLndyYXBwZXJIZWlnaHQ7XG4gICAgICB0YWJDb250ZW50U2l6ZSA9IHRoaXMuc2Nyb2xsTGlzdEhlaWdodCAtICh0aGlzLmhpZGRlbkl0ZW1zLmxlbmd0aCA/IHRoaXMub3BlcmF0aW9uSGVpZ2h0IDogMCk7XG4gICAgICBhZGRTaXplID0gdGhpcy5hZGRCdXR0b25IZWlnaHQ7XG4gICAgICBwb3NpdGlvbiA9ICd0b3AnO1xuICAgICAgdHJhbnNmb3JtU2l6ZSA9IC10aGlzLnRyYW5zZm9ybVk7XG4gICAgICB0aGlzLnBpbmdUb3AgPSB0aGlzLnRyYW5zZm9ybVkgPCAwO1xuICAgICAgdGhpcy5waW5nQm90dG9tID0gLXRoaXMudHJhbnNmb3JtWSArIHRoaXMud3JhcHBlckhlaWdodCA8IHRoaXMuc2Nyb2xsTGlzdEhlaWdodDtcbiAgICB9XG5cbiAgICBsZXQgbWVyZ2VkQmFzaWNTaXplID0gYmFzaWNTaXplO1xuICAgIGlmICh0YWJDb250ZW50U2l6ZSArIGFkZFNpemUgPiBiYXNpY1NpemUpIHtcbiAgICAgIG1lcmdlZEJhc2ljU2l6ZSA9IGJhc2ljU2l6ZSAtIGFkZFNpemU7XG4gICAgfVxuXG4gICAgaWYgKCF0YWJzLmxlbmd0aCkge1xuICAgICAgdGhpcy5oaWRkZW5JdGVtcyA9IFtdO1xuICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgbGVuID0gdGFicy5sZW5ndGg7XG4gICAgbGV0IGVuZEluZGV4ID0gbGVuO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IG9mZnNldCA9IGdldE9mZnNldChpKTtcbiAgICAgIGNvbnN0IHNpemUgPSB0YWJzW2ldIHx8IERFRkFVTFRfU0laRTtcbiAgICAgIGlmIChvZmZzZXQgKyBzaXplW3VuaXRdID4gdHJhbnNmb3JtU2l6ZSArIG1lcmdlZEJhc2ljU2l6ZSkge1xuICAgICAgICBlbmRJbmRleCA9IGkgLSAxO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgc3RhcnRJbmRleCA9IDA7XG4gICAgZm9yIChsZXQgaSA9IGxlbiAtIDE7IGkgPj0gMDsgaSAtPSAxKSB7XG4gICAgICBjb25zdCBvZmZzZXQgPSBnZXRPZmZzZXQoaSk7XG4gICAgICBpZiAob2Zmc2V0IDwgdHJhbnNmb3JtU2l6ZSkge1xuICAgICAgICBzdGFydEluZGV4ID0gaSArIDE7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHN0YXJ0SGlkZGVuVGFicyA9IHRhYnMuc2xpY2UoMCwgc3RhcnRJbmRleCk7XG4gICAgY29uc3QgZW5kSGlkZGVuVGFicyA9IHRhYnMuc2xpY2UoZW5kSW5kZXggKyAxKTtcbiAgICB0aGlzLmhpZGRlbkl0ZW1zID0gWy4uLnN0YXJ0SGlkZGVuVGFicywgLi4uZW5kSGlkZGVuVGFic107XG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBwcml2YXRlIGdldExheW91dERpcmVjdGlvbigpOiBEaXJlY3Rpb24ge1xuICAgIHJldHVybiB0aGlzLmRpciAmJiB0aGlzLmRpci52YWx1ZSA9PT0gJ3J0bCcgPyAncnRsJyA6ICdsdHInO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRUYWJGb2N1cyhfdGFiSW5kZXg6IG51bWJlcik6IHZvaWQge31cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgY29uc3QgeyBwb3NpdGlvbiB9ID0gY2hhbmdlcztcbiAgICAvLyBUaGUgZmlyc3Qgd2lsbCBiZSBhbGlnbmluZyBpbiBuZ0FmdGVyVmlld0luaXRcbiAgICBpZiAocG9zaXRpb24gJiYgIXBvc2l0aW9uLmlzRmlyc3RDaGFuZ2UoKSkge1xuICAgICAgdGhpcy5hbGlnbklua0JhclRvU2VsZWN0ZWRUYWIoKTtcbiAgICAgIHRoaXMubG9ja0FuaW1hdGlvbigpO1xuICAgICAgdGhpcy51cGRhdGVTY3JvbGxMaXN0UG9zaXRpb24oKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==