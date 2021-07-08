/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { __decorate, __metadata } from "tslib";
import { FocusTrapFactory } from '@angular/cdk/a11y';
import { Directionality } from '@angular/cdk/bidi';
import { ESCAPE } from '@angular/cdk/keycodes';
import { Overlay, OverlayConfig, OverlayKeyboardDispatcher } from '@angular/cdk/overlay';
import { CdkPortalOutlet, ComponentPortal, TemplatePortal } from '@angular/cdk/portal';
import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChild, EventEmitter, Inject, Injector, Input, Optional, Output, Renderer2, TemplateRef, Type, ViewChild, ViewContainerRef } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { NzConfigService, WithConfig } from 'ng-zorro-antd/core/config';
import { warnDeprecation } from 'ng-zorro-antd/core/logger';
import { InputBoolean, toCssPixel } from 'ng-zorro-antd/core/util';
import { NzDrawerContentDirective } from './drawer-content.directive';
import { NzDrawerRef } from './drawer-ref';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from 'ng-zorro-antd/core/config';
import * as ɵngcc2 from '@angular/cdk/overlay';
import * as ɵngcc3 from '@angular/cdk/a11y';
import * as ɵngcc4 from '@angular/cdk/bidi';
import * as ɵngcc5 from 'ng-zorro-antd/core/no-animation';
import * as ɵngcc6 from '@angular/common';
import * as ɵngcc7 from '@angular/cdk/portal';
import * as ɵngcc8 from 'ng-zorro-antd/core/outlet';
import * as ɵngcc9 from 'ng-zorro-antd/icon';

const _c0 = ["drawerTemplate"];
function NzDrawerComponent_ng_template_0_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r11 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 12);
    ɵngcc0.ɵɵlistener("click", function NzDrawerComponent_ng_template_0_div_1_Template_div_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r11); const ctx_r10 = ɵngcc0.ɵɵnextContext(2); return ctx_r10.maskClick(); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("ngStyle", ctx_r2.nzMaskStyle);
} }
function NzDrawerComponent_ng_template_0_div_5_div_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelement(1, "div", 17);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r14 = ɵngcc0.ɵɵnextContext(4);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("innerHTML", ctx_r14.nzTitle, ɵngcc0.ɵɵsanitizeHtml);
} }
function NzDrawerComponent_ng_template_0_div_5_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 15);
    ɵngcc0.ɵɵtemplate(1, NzDrawerComponent_ng_template_0_div_5_div_1_ng_container_1_Template, 2, 1, "ng-container", 16);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r12 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("nzStringTemplateOutlet", ctx_r12.nzTitle);
} }
function NzDrawerComponent_ng_template_0_div_5_button_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelement(1, "i", 19);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const closeIcon_r16 = ctx.$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("nzType", closeIcon_r16);
} }
function NzDrawerComponent_ng_template_0_div_5_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r18 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 18);
    ɵngcc0.ɵɵlistener("click", function NzDrawerComponent_ng_template_0_div_5_button_2_Template_button_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r18); const ctx_r17 = ɵngcc0.ɵɵnextContext(3); return ctx_r17.closeClick(); });
    ɵngcc0.ɵɵtemplate(1, NzDrawerComponent_ng_template_0_div_5_button_2_ng_container_1_Template, 2, 1, "ng-container", 16);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r13 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("nzStringTemplateOutlet", ctx_r13.nzCloseIcon);
} }
function NzDrawerComponent_ng_template_0_div_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div");
    ɵngcc0.ɵɵtemplate(1, NzDrawerComponent_ng_template_0_div_5_div_1_Template, 2, 1, "div", 13);
    ɵngcc0.ɵɵtemplate(2, NzDrawerComponent_ng_template_0_div_5_button_2_Template, 2, 1, "button", 14);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵclassProp("ant-drawer-header", !!ctx_r3.nzTitle)("ant-drawer-header-no-title", !ctx_r3.nzTitle);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r3.nzTitle);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r3.nzClosable);
} }
function NzDrawerComponent_ng_template_0_ng_template_7_Template(rf, ctx) { }
function NzDrawerComponent_ng_template_0_ng_container_8_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function NzDrawerComponent_ng_template_0_ng_container_8_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, NzDrawerComponent_ng_template_0_ng_container_8_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 20);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r19 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r19.nzContent)("ngTemplateOutletContext", ctx_r19.templateContext);
} }
function NzDrawerComponent_ng_template_0_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, NzDrawerComponent_ng_template_0_ng_container_8_ng_container_1_Template, 2, 2, "ng-container", 10);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r5 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r5.isTemplateRef(ctx_r5.nzContent));
} }
function NzDrawerComponent_ng_template_0_ng_template_9_ng_container_0_ng_template_1_Template(rf, ctx) { }
function NzDrawerComponent_ng_template_0_ng_template_9_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, NzDrawerComponent_ng_template_0_ng_template_9_ng_container_0_ng_template_1_Template, 0, 0, "ng-template", 21);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r21 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r21.contentFromContentChild);
} }
function NzDrawerComponent_ng_template_0_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, NzDrawerComponent_ng_template_0_ng_template_9_ng_container_0_Template, 2, 1, "ng-container", 10);
} if (rf & 2) {
    const ctx_r7 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r7.contentFromContentChild && (ctx_r7.isOpen || ctx_r7.inAnimation));
} }
function NzDrawerComponent_ng_template_0_ng_content_11_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵprojection(0, 0, ["*ngIf", "!(nzContent || contentFromContentChild)"]);
} }
function NzDrawerComponent_ng_template_0_div_12_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelement(1, "div", 17);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r23 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("innerHTML", ctx_r23.nzFooter, ɵngcc0.ɵɵsanitizeHtml);
} }
function NzDrawerComponent_ng_template_0_div_12_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 22);
    ɵngcc0.ɵɵtemplate(1, NzDrawerComponent_ng_template_0_div_12_ng_container_1_Template, 2, 1, "ng-container", 16);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r9 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("nzStringTemplateOutlet", ctx_r9.nzFooter);
} }
function NzDrawerComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 1);
    ɵngcc0.ɵɵtemplate(1, NzDrawerComponent_ng_template_0_div_1_Template, 1, 1, "div", 2);
    ɵngcc0.ɵɵelementStart(2, "div");
    ɵngcc0.ɵɵelementStart(3, "div", 3);
    ɵngcc0.ɵɵelementStart(4, "div", 4);
    ɵngcc0.ɵɵtemplate(5, NzDrawerComponent_ng_template_0_div_5_Template, 3, 6, "div", 5);
    ɵngcc0.ɵɵelementStart(6, "div", 6);
    ɵngcc0.ɵɵtemplate(7, NzDrawerComponent_ng_template_0_ng_template_7_Template, 0, 0, "ng-template", 7);
    ɵngcc0.ɵɵtemplate(8, NzDrawerComponent_ng_template_0_ng_container_8_Template, 2, 1, "ng-container", 8);
    ɵngcc0.ɵɵtemplate(9, NzDrawerComponent_ng_template_0_ng_template_9_Template, 1, 1, "ng-template", null, 9, ɵngcc0.ɵɵtemplateRefExtractor);
    ɵngcc0.ɵɵtemplate(11, NzDrawerComponent_ng_template_0_ng_content_11_Template, 1, 0, "ng-content", 10);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(12, NzDrawerComponent_ng_template_0_div_12_Template, 2, 1, "div", 11);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const _r6 = ɵngcc0.ɵɵreference(10);
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵstyleProp("transform", ctx_r1.offsetTransform)("transition", ctx_r1.placementChanging ? "none" : null)("z-index", ctx_r1.nzZIndex);
    ɵngcc0.ɵɵclassProp("ant-drawer-rtl", ctx_r1.dir === "rtl")("ant-drawer-open", ctx_r1.isOpen)("no-mask", !ctx_r1.nzMask)("ant-drawer-top", ctx_r1.nzPlacement === "top")("ant-drawer-bottom", ctx_r1.nzPlacement === "bottom")("ant-drawer-right", ctx_r1.nzPlacement === "right")("ant-drawer-left", ctx_r1.nzPlacement === "left");
    ɵngcc0.ɵɵproperty("nzNoAnimation", ctx_r1.nzNoAnimation);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r1.nzMask);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassMapInterpolate1("ant-drawer-content-wrapper ", ctx_r1.nzWrapClassName, "");
    ɵngcc0.ɵɵstyleProp("width", ctx_r1.width)("height", ctx_r1.height)("transform", ctx_r1.transform)("transition", ctx_r1.placementChanging ? "none" : null);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵstyleProp("height", ctx_r1.isLeftOrRight ? "100%" : null);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r1.nzTitle || ctx_r1.nzClosable);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngStyle", ctx_r1.nzBodyStyle);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r1.nzContent)("ngIfElse", _r6);
    ɵngcc0.ɵɵadvance(3);
    ɵngcc0.ɵɵproperty("ngIf", !(ctx_r1.nzContent || ctx_r1.contentFromContentChild));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r1.nzFooter);
} }
const _c1 = ["*"];
export const DRAWER_ANIMATE_DURATION = 300;
const NZ_CONFIG_MODULE_NAME = 'drawer';
export class NzDrawerComponent extends NzDrawerRef {
    constructor(cdr, 
    // tslint:disable-next-line:no-any
    document, nzConfigService, renderer, overlay, injector, changeDetectorRef, focusTrapFactory, viewContainerRef, overlayKeyboardDispatcher, directionality) {
        super();
        this.cdr = cdr;
        this.document = document;
        this.nzConfigService = nzConfigService;
        this.renderer = renderer;
        this.overlay = overlay;
        this.injector = injector;
        this.changeDetectorRef = changeDetectorRef;
        this.focusTrapFactory = focusTrapFactory;
        this.viewContainerRef = viewContainerRef;
        this.overlayKeyboardDispatcher = overlayKeyboardDispatcher;
        this.directionality = directionality;
        this._nzModuleName = NZ_CONFIG_MODULE_NAME;
        this.nzCloseIcon = 'close';
        this.nzClosable = true;
        this.nzMaskClosable = true;
        this.nzMask = true;
        this.nzCloseOnNavigation = true;
        this.nzNoAnimation = false;
        this.nzKeyboard = true;
        this.nzPlacement = 'right';
        this.nzMaskStyle = {};
        this.nzBodyStyle = {};
        this.nzWidth = 256;
        this.nzHeight = 256;
        this.nzZIndex = 1000;
        this.nzOffsetX = 0;
        this.nzOffsetY = 0;
        this.componentInstance = null;
        this.nzOnViewInit = new EventEmitter();
        this.nzOnClose = new EventEmitter();
        this.nzVisibleChange = new EventEmitter();
        this.destroy$ = new Subject();
        this.placementChanging = false;
        this.placementChangeTimeoutId = -1;
        this.isOpen = false;
        this.inAnimation = false;
        this.templateContext = {
            $implicit: undefined,
            drawerRef: this
        };
        this.nzAfterOpen = new Subject();
        this.nzAfterClose = new Subject();
        // from service config
        this.nzDirection = undefined;
        this.dir = 'ltr';
    }
    set nzVisible(value) {
        this.isOpen = value;
    }
    get nzVisible() {
        return this.isOpen;
    }
    get offsetTransform() {
        if (!this.isOpen || this.nzOffsetX + this.nzOffsetY === 0) {
            return null;
        }
        switch (this.nzPlacement) {
            case 'left':
                return `translateX(${this.nzOffsetX}px)`;
            case 'right':
                return `translateX(-${this.nzOffsetX}px)`;
            case 'top':
                return `translateY(${this.nzOffsetY}px)`;
            case 'bottom':
                return `translateY(-${this.nzOffsetY}px)`;
        }
    }
    get transform() {
        if (this.isOpen) {
            return null;
        }
        switch (this.nzPlacement) {
            case 'left':
                return `translateX(-100%)`;
            case 'right':
                return `translateX(100%)`;
            case 'top':
                return `translateY(-100%)`;
            case 'bottom':
                return `translateY(100%)`;
        }
    }
    get width() {
        return this.isLeftOrRight ? toCssPixel(this.nzWidth) : null;
    }
    get height() {
        return !this.isLeftOrRight ? toCssPixel(this.nzHeight) : null;
    }
    get isLeftOrRight() {
        return this.nzPlacement === 'left' || this.nzPlacement === 'right';
    }
    get afterOpen() {
        return this.nzAfterOpen.asObservable();
    }
    get afterClose() {
        return this.nzAfterClose.asObservable();
    }
    isTemplateRef(value) {
        return value instanceof TemplateRef;
    }
    ngOnInit() {
        var _a;
        (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
            this.dir = direction;
            this.cdr.detectChanges();
        });
        this.dir = this.nzDirection || this.directionality.value;
        this.attachOverlay();
        this.updateOverlayStyle();
        this.updateBodyOverflow();
        this.templateContext = { $implicit: this.nzContentParams, drawerRef: this };
        this.changeDetectorRef.detectChanges();
    }
    ngAfterViewInit() {
        this.attachBodyContent();
        setTimeout(() => {
            this.nzOnViewInit.emit();
        });
    }
    ngAfterContentInit() {
        if (!(this.contentFromContentChild || this.nzContent)) {
            warnDeprecation('Usage `<ng-content></ng-content>` is deprecated, which will be removed in 12.0.0. Please instead use `<ng-template nzDrawerContent></ng-template>` to declare the content of the drawer.');
        }
    }
    ngOnChanges(changes) {
        const { nzPlacement, nzVisible } = changes;
        if (nzVisible) {
            const value = changes.nzVisible.currentValue;
            if (value) {
                this.open();
            }
            else {
                this.close();
            }
        }
        if (nzPlacement && !nzPlacement.isFirstChange()) {
            this.triggerPlacementChangeCycleOnce();
        }
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
        clearTimeout(this.placementChangeTimeoutId);
        this.disposeOverlay();
    }
    getAnimationDuration() {
        return this.nzNoAnimation ? 0 : DRAWER_ANIMATE_DURATION;
    }
    // Disable the transition animation temporarily when the placement changing
    triggerPlacementChangeCycleOnce() {
        if (!this.nzNoAnimation) {
            this.placementChanging = true;
            this.changeDetectorRef.markForCheck();
            clearTimeout(this.placementChangeTimeoutId);
            this.placementChangeTimeoutId = setTimeout(() => {
                this.placementChanging = false;
                this.changeDetectorRef.markForCheck();
            }, this.getAnimationDuration());
        }
    }
    close(result) {
        this.isOpen = false;
        this.inAnimation = true;
        this.nzVisibleChange.emit(false);
        this.updateOverlayStyle();
        this.overlayKeyboardDispatcher.remove(this.overlayRef);
        this.changeDetectorRef.detectChanges();
        setTimeout(() => {
            this.updateBodyOverflow();
            this.restoreFocus();
            this.inAnimation = false;
            this.nzAfterClose.next(result);
            this.nzAfterClose.complete();
            this.componentInstance = null;
        }, this.getAnimationDuration());
    }
    open() {
        this.attachOverlay();
        this.isOpen = true;
        this.inAnimation = true;
        this.nzVisibleChange.emit(true);
        this.overlayKeyboardDispatcher.add(this.overlayRef);
        this.updateOverlayStyle();
        this.updateBodyOverflow();
        this.savePreviouslyFocusedElement();
        this.trapFocus();
        this.changeDetectorRef.detectChanges();
        setTimeout(() => {
            this.inAnimation = false;
            this.changeDetectorRef.detectChanges();
            this.nzAfterOpen.next();
        }, this.getAnimationDuration());
    }
    getContentComponent() {
        return this.componentInstance;
    }
    closeClick() {
        this.nzOnClose.emit();
    }
    maskClick() {
        if (this.nzMaskClosable && this.nzMask) {
            this.nzOnClose.emit();
        }
    }
    attachBodyContent() {
        this.bodyPortalOutlet.dispose();
        if (this.nzContent instanceof Type) {
            const childInjector = Injector.create({
                parent: this.injector,
                providers: [{ provide: NzDrawerRef, useValue: this }]
            });
            const componentPortal = new ComponentPortal(this.nzContent, null, childInjector);
            const componentRef = this.bodyPortalOutlet.attachComponentPortal(componentPortal);
            this.componentInstance = componentRef.instance;
            Object.assign(componentRef.instance, this.nzContentParams);
            componentRef.changeDetectorRef.detectChanges();
        }
    }
    attachOverlay() {
        if (!this.overlayRef) {
            this.portal = new TemplatePortal(this.drawerTemplate, this.viewContainerRef);
            this.overlayRef = this.overlay.create(this.getOverlayConfig());
        }
        if (this.overlayRef && !this.overlayRef.hasAttached()) {
            this.overlayRef.attach(this.portal);
            this.overlayRef.keydownEvents()
                .pipe(takeUntil(this.destroy$))
                .subscribe((event) => {
                if (event.keyCode === ESCAPE && this.isOpen && this.nzKeyboard) {
                    this.nzOnClose.emit();
                }
            });
            this.overlayRef
                .detachments()
                .pipe(takeUntil(this.destroy$))
                .subscribe(() => {
                this.disposeOverlay();
            });
        }
    }
    disposeOverlay() {
        var _a;
        (_a = this.overlayRef) === null || _a === void 0 ? void 0 : _a.dispose();
        this.overlayRef = null;
    }
    getOverlayConfig() {
        return new OverlayConfig({
            disposeOnNavigation: this.nzCloseOnNavigation,
            positionStrategy: this.overlay.position().global(),
            scrollStrategy: this.overlay.scrollStrategies.block()
        });
    }
    updateOverlayStyle() {
        if (this.overlayRef && this.overlayRef.overlayElement) {
            this.renderer.setStyle(this.overlayRef.overlayElement, 'pointer-events', this.isOpen ? 'auto' : 'none');
        }
    }
    updateBodyOverflow() {
        if (this.overlayRef) {
            if (this.isOpen) {
                this.overlayRef.getConfig().scrollStrategy.enable();
            }
            else {
                this.overlayRef.getConfig().scrollStrategy.disable();
            }
        }
    }
    savePreviouslyFocusedElement() {
        if (this.document && !this.previouslyFocusedElement) {
            this.previouslyFocusedElement = this.document.activeElement;
            // We need the extra check, because IE's svg element has no blur method.
            if (this.previouslyFocusedElement && typeof this.previouslyFocusedElement.blur === 'function') {
                this.previouslyFocusedElement.blur();
            }
        }
    }
    trapFocus() {
        if (!this.focusTrap && this.overlayRef && this.overlayRef.overlayElement) {
            this.focusTrap = this.focusTrapFactory.create(this.overlayRef.overlayElement);
            this.focusTrap.focusInitialElement();
        }
    }
    restoreFocus() {
        // We need the extra check, because IE can set the `activeElement` to null in some cases.
        if (this.previouslyFocusedElement && typeof this.previouslyFocusedElement.focus === 'function') {
            this.previouslyFocusedElement.focus();
        }
        if (this.focusTrap) {
            this.focusTrap.destroy();
        }
    }
}
NzDrawerComponent.ɵfac = function NzDrawerComponent_Factory(t) { return new (t || NzDrawerComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(DOCUMENT, 8), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.NzConfigService), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.Overlay), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Injector), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc3.FocusTrapFactory), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ViewContainerRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.OverlayKeyboardDispatcher), ɵngcc0.ɵɵdirectiveInject(ɵngcc4.Directionality, 8)); };
NzDrawerComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzDrawerComponent, selectors: [["nz-drawer"]], contentQueries: function NzDrawerComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵstaticContentQuery(dirIndex, NzDrawerContentDirective, true, TemplateRef);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.contentFromContentChild = _t.first);
    } }, viewQuery: function NzDrawerComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵstaticViewQuery(_c0, true);
        ɵngcc0.ɵɵviewQuery(CdkPortalOutlet, true);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.drawerTemplate = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.bodyPortalOutlet = _t.first);
    } }, inputs: { nzCloseIcon: "nzCloseIcon", nzClosable: "nzClosable", nzMaskClosable: "nzMaskClosable", nzMask: "nzMask", nzCloseOnNavigation: "nzCloseOnNavigation", nzNoAnimation: "nzNoAnimation", nzKeyboard: "nzKeyboard", nzPlacement: "nzPlacement", nzMaskStyle: "nzMaskStyle", nzBodyStyle: "nzBodyStyle", nzWidth: "nzWidth", nzHeight: "nzHeight", nzZIndex: "nzZIndex", nzOffsetX: "nzOffsetX", nzOffsetY: "nzOffsetY", nzVisible: "nzVisible", nzContent: "nzContent", nzTitle: "nzTitle", nzFooter: "nzFooter", nzWrapClassName: "nzWrapClassName" }, outputs: { nzOnViewInit: "nzOnViewInit", nzOnClose: "nzOnClose", nzVisibleChange: "nzVisibleChange" }, exportAs: ["nzDrawer"], features: [ɵngcc0.ɵɵInheritDefinitionFeature, ɵngcc0.ɵɵNgOnChangesFeature], ngContentSelectors: _c1, decls: 2, vars: 0, consts: [["drawerTemplate", ""], [1, "ant-drawer", 3, "nzNoAnimation"], ["class", "ant-drawer-mask", 3, "ngStyle", "click", 4, "ngIf"], [1, "ant-drawer-content"], [1, "ant-drawer-wrapper-body"], [3, "ant-drawer-header", "ant-drawer-header-no-title", 4, "ngIf"], [1, "ant-drawer-body", 3, "ngStyle"], ["cdkPortalOutlet", ""], [4, "ngIf", "ngIfElse"], ["contentElseTemp", ""], [4, "ngIf"], ["class", "ant-drawer-footer", 4, "ngIf"], [1, "ant-drawer-mask", 3, "ngStyle", "click"], ["class", "ant-drawer-title", 4, "ngIf"], ["aria-label", "Close", "class", "ant-drawer-close", "style", "--scroll-bar: 0px;", 3, "click", 4, "ngIf"], [1, "ant-drawer-title"], [4, "nzStringTemplateOutlet"], [3, "innerHTML"], ["aria-label", "Close", 1, "ant-drawer-close", 2, "--scroll-bar", "0px", 3, "click"], ["nz-icon", "", 3, "nzType"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "ngTemplateOutlet"], [1, "ant-drawer-footer"]], template: function NzDrawerComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵtemplate(0, NzDrawerComponent_ng_template_0_Template, 13, 41, "ng-template", null, 0, ɵngcc0.ɵɵtemplateRefExtractor);
    } }, directives: [ɵngcc5.NzNoAnimationDirective, ɵngcc6.NgIf, ɵngcc6.NgStyle, ɵngcc7.CdkPortalOutlet, ɵngcc8.NzStringTemplateOutletDirective, ɵngcc9.NzIconDirective, ɵngcc6.NgTemplateOutlet], encapsulation: 2, changeDetection: 0 });
NzDrawerComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [DOCUMENT,] }] },
    { type: NzConfigService },
    { type: Renderer2 },
    { type: Overlay },
    { type: Injector },
    { type: ChangeDetectorRef },
    { type: FocusTrapFactory },
    { type: ViewContainerRef },
    { type: OverlayKeyboardDispatcher },
    { type: Directionality, decorators: [{ type: Optional }] }
];
NzDrawerComponent.propDecorators = {
    nzContent: [{ type: Input }],
    nzCloseIcon: [{ type: Input }],
    nzClosable: [{ type: Input }],
    nzMaskClosable: [{ type: Input }],
    nzMask: [{ type: Input }],
    nzCloseOnNavigation: [{ type: Input }],
    nzNoAnimation: [{ type: Input }],
    nzKeyboard: [{ type: Input }],
    nzTitle: [{ type: Input }],
    nzFooter: [{ type: Input }],
    nzPlacement: [{ type: Input }],
    nzMaskStyle: [{ type: Input }],
    nzBodyStyle: [{ type: Input }],
    nzWrapClassName: [{ type: Input }],
    nzWidth: [{ type: Input }],
    nzHeight: [{ type: Input }],
    nzZIndex: [{ type: Input }],
    nzOffsetX: [{ type: Input }],
    nzOffsetY: [{ type: Input }],
    nzVisible: [{ type: Input }],
    nzOnViewInit: [{ type: Output }],
    nzOnClose: [{ type: Output }],
    nzVisibleChange: [{ type: Output }],
    drawerTemplate: [{ type: ViewChild, args: ['drawerTemplate', { static: true },] }],
    bodyPortalOutlet: [{ type: ViewChild, args: [CdkPortalOutlet, { static: false },] }],
    contentFromContentChild: [{ type: ContentChild, args: [NzDrawerContentDirective, { static: true, read: TemplateRef },] }]
};
__decorate([
    InputBoolean(),
    __metadata("design:type", Boolean)
], NzDrawerComponent.prototype, "nzClosable", void 0);
__decorate([
    WithConfig(),
    InputBoolean(),
    __metadata("design:type", Boolean)
], NzDrawerComponent.prototype, "nzMaskClosable", void 0);
__decorate([
    WithConfig(),
    InputBoolean(),
    __metadata("design:type", Boolean)
], NzDrawerComponent.prototype, "nzMask", void 0);
__decorate([
    WithConfig(),
    InputBoolean(),
    __metadata("design:type", Boolean)
], NzDrawerComponent.prototype, "nzCloseOnNavigation", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzDrawerComponent.prototype, "nzNoAnimation", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Boolean)
], NzDrawerComponent.prototype, "nzKeyboard", void 0);
__decorate([
    WithConfig(),
    __metadata("design:type", String)
], NzDrawerComponent.prototype, "nzDirection", void 0);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzDrawerComponent, [{
        type: Component,
        args: [{
                selector: 'nz-drawer',
                exportAs: 'nzDrawer',
                template: `
    <ng-template #drawerTemplate>
      <div
        class="ant-drawer"
        [nzNoAnimation]="nzNoAnimation"
        [class.ant-drawer-rtl]="dir === 'rtl'"
        [class.ant-drawer-open]="isOpen"
        [class.no-mask]="!nzMask"
        [class.ant-drawer-top]="nzPlacement === 'top'"
        [class.ant-drawer-bottom]="nzPlacement === 'bottom'"
        [class.ant-drawer-right]="nzPlacement === 'right'"
        [class.ant-drawer-left]="nzPlacement === 'left'"
        [style.transform]="offsetTransform"
        [style.transition]="placementChanging ? 'none' : null"
        [style.zIndex]="nzZIndex"
      >
        <div class="ant-drawer-mask" (click)="maskClick()" *ngIf="nzMask" [ngStyle]="nzMaskStyle"></div>
        <div
          class="ant-drawer-content-wrapper {{ nzWrapClassName }}"
          [style.width]="width"
          [style.height]="height"
          [style.transform]="transform"
          [style.transition]="placementChanging ? 'none' : null"
        >
          <div class="ant-drawer-content">
            <div class="ant-drawer-wrapper-body" [style.height]="isLeftOrRight ? '100%' : null">
              <div *ngIf="nzTitle || nzClosable" [class.ant-drawer-header]="!!nzTitle" [class.ant-drawer-header-no-title]="!nzTitle">
                <div *ngIf="nzTitle" class="ant-drawer-title">
                  <ng-container *nzStringTemplateOutlet="nzTitle"><div [innerHTML]="nzTitle"></div></ng-container>
                </div>
                <button *ngIf="nzClosable" (click)="closeClick()" aria-label="Close" class="ant-drawer-close" style="--scroll-bar: 0px;">
                  <ng-container *nzStringTemplateOutlet="nzCloseIcon; let closeIcon">
                    <i nz-icon [nzType]="closeIcon"></i>
                  </ng-container>
                </button>
              </div>
              <div class="ant-drawer-body" [ngStyle]="nzBodyStyle">
                <ng-template cdkPortalOutlet></ng-template>
                <ng-container *ngIf="nzContent; else contentElseTemp">
                  <ng-container *ngIf="isTemplateRef(nzContent)">
                    <ng-container *ngTemplateOutlet="$any(nzContent); context: templateContext"></ng-container>
                  </ng-container>
                </ng-container>
                <ng-template #contentElseTemp>
                  <ng-container *ngIf="contentFromContentChild && (isOpen || inAnimation)">
                    <ng-template [ngTemplateOutlet]="contentFromContentChild"></ng-template>
                  </ng-container>
                </ng-template>
                <ng-content *ngIf="!(nzContent || contentFromContentChild)"></ng-content>
              </div>
              <div *ngIf="nzFooter" class="ant-drawer-footer">
                <ng-container *nzStringTemplateOutlet="nzFooter"><div [innerHTML]="nzFooter"></div></ng-container>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ng-template>
  `,
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: ɵngcc0.ChangeDetectorRef }, { type: undefined, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [DOCUMENT]
            }] }, { type: ɵngcc1.NzConfigService }, { type: ɵngcc0.Renderer2 }, { type: ɵngcc2.Overlay }, { type: ɵngcc0.Injector }, { type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc3.FocusTrapFactory }, { type: ɵngcc0.ViewContainerRef }, { type: ɵngcc2.OverlayKeyboardDispatcher }, { type: ɵngcc4.Directionality, decorators: [{
                type: Optional
            }] }]; }, { nzCloseIcon: [{
            type: Input
        }], nzClosable: [{
            type: Input
        }], nzMaskClosable: [{
            type: Input
        }], nzMask: [{
            type: Input
        }], nzCloseOnNavigation: [{
            type: Input
        }], nzNoAnimation: [{
            type: Input
        }], nzKeyboard: [{
            type: Input
        }], nzPlacement: [{
            type: Input
        }], nzMaskStyle: [{
            type: Input
        }], nzBodyStyle: [{
            type: Input
        }], nzWidth: [{
            type: Input
        }], nzHeight: [{
            type: Input
        }], nzZIndex: [{
            type: Input
        }], nzOffsetX: [{
            type: Input
        }], nzOffsetY: [{
            type: Input
        }], nzOnViewInit: [{
            type: Output
        }], nzOnClose: [{
            type: Output
        }], nzVisibleChange: [{
            type: Output
        }], nzVisible: [{
            type: Input
        }], nzContent: [{
            type: Input
        }], nzTitle: [{
            type: Input
        }], nzFooter: [{
            type: Input
        }], nzWrapClassName: [{
            type: Input
        }], drawerTemplate: [{
            type: ViewChild,
            args: ['drawerTemplate', { static: true }]
        }], bodyPortalOutlet: [{
            type: ViewChild,
            args: [CdkPortalOutlet, { static: false }]
        }], contentFromContentChild: [{
            type: ContentChild,
            args: [NzDrawerContentDirective, { static: true, read: TemplateRef }]
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhd2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vY29tcG9uZW50cy9kcmF3ZXIvZHJhd2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxPQUFPLEVBQWEsZ0JBQWdCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNoRSxPQUFPLEVBQWEsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDOUQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQy9DLE9BQU8sRUFBRSxPQUFPLEVBQUUsYUFBYSxFQUFFLHlCQUF5QixFQUFjLE1BQU0sc0JBQXNCLENBQUM7QUFDckcsT0FBTyxFQUFFLGVBQWUsRUFBRSxlQUFlLEVBQUUsY0FBYyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdkYsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFHTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxZQUFZLEVBQ1osWUFBWSxFQUNaLE1BQU0sRUFDTixRQUFRLEVBQ1IsS0FBSyxFQUlMLFFBQVEsRUFDUixNQUFNLEVBQ04sU0FBUyxFQUVULFdBQVcsRUFDWCxJQUFJLEVBQ0osU0FBUyxFQUNULGdCQUFnQixFQUNqQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQWMsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzQyxPQUFPLEVBQWUsZUFBZSxFQUFFLFVBQVUsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3JGLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUU1RCxPQUFPLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBRW5FLE9BQU8sRUFBRSx3QkFB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Q25ELFNBQVMsU0FBQyxlQUFlLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFO0FBQU8sc0NBQ25ELFlBQVksU0FBQyx3QkFBd0IsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRTtBQUFNO0FBbEN4RDtBQUFhLElBQTVCLFlBQVksRUFBRTtBQUFFO0FBQ2hCLHFEQUQwQztBQUNiO0FBQWEsSUFBMUMsVUFBVSxFQUFFO0FBQUUsSUFBQSxZQUFZLEVBQUU7QUFBRTtBQUNsQyx5REFEZ0U7QUFDL0I7QUFBYSxJQUExQyxVQUFVLEVBQUU7QUFBRSxJQUFBLFlBQVksRUFBRTtBQUFFO0FBQzFCLGlEQURnRDtBQUN2QjtBQUFhLElBQTFDLFVBQVUsRUFBRTtBQUFFLElBQUEsWUFBWSxFQUFFO0FBQUU7QUFDdkMsOERBRDBFO0FBQ2xEO0FBQWEsSUFBNUIsWUFBWSxFQUFFO0FBQUU7QUFDWix3REFEaUM7QUFDdEI7QUFBYSxJQUE1QixZQUFZLEVBQUU7QUFBRTtBQUNoQixxREFEMEM7QUEyR3RDO0FBQWEsSUFBMUIsVUFBVSxFQUFFO0FBQUU7QUFFaEIsc0RBRm1EOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQUNwRDtBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHsgRm9jdXNUcmFwLCBGb2N1c1RyYXBGYWN0b3J5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2ExMXknO1xuaW1wb3J0IHsgRGlyZWN0aW9uLCBEaXJlY3Rpb25hbGl0eSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9iaWRpJztcbmltcG9ydCB7IEVTQ0FQRSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9rZXljb2Rlcyc7XG5pbXBvcnQgeyBPdmVybGF5LCBPdmVybGF5Q29uZmlnLCBPdmVybGF5S2V5Ym9hcmREaXNwYXRjaGVyLCBPdmVybGF5UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xuaW1wb3J0IHsgQ2RrUG9ydGFsT3V0bGV0LCBDb21wb25lbnRQb3J0YWwsIFRlbXBsYXRlUG9ydGFsIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BvcnRhbCc7XG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge1xuICBBZnRlckNvbnRlbnRJbml0LFxuICBBZnRlclZpZXdJbml0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgQ29udGVudENoaWxkLFxuICBFdmVudEVtaXR0ZXIsXG4gIEluamVjdCxcbiAgSW5qZWN0b3IsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPcHRpb25hbCxcbiAgT3V0cHV0LFxuICBSZW5kZXJlcjIsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFRlbXBsYXRlUmVmLFxuICBUeXBlLFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdDb250YWluZXJSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgTnpDb25maWdLZXksIE56Q29uZmlnU2VydmljZSwgV2l0aENvbmZpZyB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9jb25maWcnO1xuaW1wb3J0IHsgd2FybkRlcHJlY2F0aW9uIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL2xvZ2dlcic7XG5pbXBvcnQgeyBCb29sZWFuSW5wdXQsIE5nU3R5bGVJbnRlcmZhY2UsIE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4sIHRvQ3NzUGl4ZWwgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdXRpbCc7XG5cbmltcG9ydCB7IE56RHJhd2VyQ29udGVudERpcmVjdGl2ZSB9IGZyb20gJy4vZHJhd2VyLWNvbnRlbnQuZGlyZWN0aXZlJztcbmltcG9ydCB7IE56RHJhd2VyT3B0aW9uc09mQ29tcG9uZW50LCBOekRyYXdlclBsYWNlbWVudCB9IGZyb20gJy4vZHJhd2VyLW9wdGlvbnMnO1xuaW1wb3J0IHsgTnpEcmF3ZXJSZWYgfSBmcm9tICcuL2RyYXdlci1yZWYnO1xuXG5leHBvcnQgY29uc3QgRFJBV0VSX0FOSU1BVEVfRFVSQVRJT04gPSAzMDA7XG5cbmNvbnN0IE5aX0NPTkZJR19NT0RVTEVfTkFNRTogTnpDb25maWdLZXkgPSAnZHJhd2VyJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbnotZHJhd2VyJyxcbiAgZXhwb3J0QXM6ICduekRyYXdlcicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5nLXRlbXBsYXRlICNkcmF3ZXJUZW1wbGF0ZT5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3M9XCJhbnQtZHJhd2VyXCJcbiAgICAgICAgW256Tm9BbmltYXRpb25dPVwibnpOb0FuaW1hdGlvblwiXG4gICAgICAgIFtjbGFzcy5hbnQtZHJhd2VyLXJ0bF09XCJkaXIgPT09ICdydGwnXCJcbiAgICAgICAgW2NsYXNzLmFudC1kcmF3ZXItb3Blbl09XCJpc09wZW5cIlxuICAgICAgICBbY2xhc3Mubm8tbWFza109XCIhbnpNYXNrXCJcbiAgICAgICAgW2NsYXNzLmFudC1kcmF3ZXItdG9wXT1cIm56UGxhY2VtZW50ID09PSAndG9wJ1wiXG4gICAgICAgIFtjbGFzcy5hbnQtZHJhd2VyLWJvdHRvbV09XCJuelBsYWNlbWVudCA9PT0gJ2JvdHRvbSdcIlxuICAgICAgICBbY2xhc3MuYW50LWRyYXdlci1yaWdodF09XCJuelBsYWNlbWVudCA9PT0gJ3JpZ2h0J1wiXG4gICAgICAgIFtjbGFzcy5hbnQtZHJhd2VyLWxlZnRdPVwibnpQbGFjZW1lbnQgPT09ICdsZWZ0J1wiXG4gICAgICAgIFtzdHlsZS50cmFuc2Zvcm1dPVwib2Zmc2V0VHJhbnNmb3JtXCJcbiAgICAgICAgW3N0eWxlLnRyYW5zaXRpb25dPVwicGxhY2VtZW50Q2hhbmdpbmcgPyAnbm9uZScgOiBudWxsXCJcbiAgICAgICAgW3N0eWxlLnpJbmRleF09XCJuelpJbmRleFwiXG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJhbnQtZHJhd2VyLW1hc2tcIiAoY2xpY2spPVwibWFza0NsaWNrKClcIiAqbmdJZj1cIm56TWFza1wiIFtuZ1N0eWxlXT1cIm56TWFza1N0eWxlXCI+PC9kaXY+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzcz1cImFudC1kcmF3ZXItY29udGVudC13cmFwcGVyIHt7IG56V3JhcENsYXNzTmFtZSB9fVwiXG4gICAgICAgICAgW3N0eWxlLndpZHRoXT1cIndpZHRoXCJcbiAgICAgICAgICBbc3R5bGUuaGVpZ2h0XT1cImhlaWdodFwiXG4gICAgICAgICAgW3N0eWxlLnRyYW5zZm9ybV09XCJ0cmFuc2Zvcm1cIlxuICAgICAgICAgIFtzdHlsZS50cmFuc2l0aW9uXT1cInBsYWNlbWVudENoYW5naW5nID8gJ25vbmUnIDogbnVsbFwiXG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiYW50LWRyYXdlci1jb250ZW50XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYW50LWRyYXdlci13cmFwcGVyLWJvZHlcIiBbc3R5bGUuaGVpZ2h0XT1cImlzTGVmdE9yUmlnaHQgPyAnMTAwJScgOiBudWxsXCI+XG4gICAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJuelRpdGxlIHx8IG56Q2xvc2FibGVcIiBbY2xhc3MuYW50LWRyYXdlci1oZWFkZXJdPVwiISFuelRpdGxlXCIgW2NsYXNzLmFudC1kcmF3ZXItaGVhZGVyLW5vLXRpdGxlXT1cIiFuelRpdGxlXCI+XG4gICAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cIm56VGl0bGVcIiBjbGFzcz1cImFudC1kcmF3ZXItdGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm56U3RyaW5nVGVtcGxhdGVPdXRsZXQ9XCJuelRpdGxlXCI+PGRpdiBbaW5uZXJIVE1MXT1cIm56VGl0bGVcIj48L2Rpdj48L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uICpuZ0lmPVwibnpDbG9zYWJsZVwiIChjbGljayk9XCJjbG9zZUNsaWNrKClcIiBhcmlhLWxhYmVsPVwiQ2xvc2VcIiBjbGFzcz1cImFudC1kcmF3ZXItY2xvc2VcIiBzdHlsZT1cIi0tc2Nyb2xsLWJhcjogMHB4O1wiPlxuICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbnpTdHJpbmdUZW1wbGF0ZU91dGxldD1cIm56Q2xvc2VJY29uOyBsZXQgY2xvc2VJY29uXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpIG56LWljb24gW256VHlwZV09XCJjbG9zZUljb25cIj48L2k+XG4gICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhbnQtZHJhd2VyLWJvZHlcIiBbbmdTdHlsZV09XCJuekJvZHlTdHlsZVwiPlxuICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBjZGtQb3J0YWxPdXRsZXQ+PC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwibnpDb250ZW50OyBlbHNlIGNvbnRlbnRFbHNlVGVtcFwiPlxuICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImlzVGVtcGxhdGVSZWYobnpDb250ZW50KVwiPlxuICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwiJGFueShuekNvbnRlbnQpOyBjb250ZXh0OiB0ZW1wbGF0ZUNvbnRleHRcIj48L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSAjY29udGVudEVsc2VUZW1wPlxuICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImNvbnRlbnRGcm9tQ29udGVudENoaWxkICYmIChpc09wZW4gfHwgaW5BbmltYXRpb24pXCI+XG4gICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJjb250ZW50RnJvbUNvbnRlbnRDaGlsZFwiPjwvbmctdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgICAgICAgICAgIDxuZy1jb250ZW50ICpuZ0lmPVwiIShuekNvbnRlbnQgfHwgY29udGVudEZyb21Db250ZW50Q2hpbGQpXCI+PC9uZy1jb250ZW50PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cIm56Rm9vdGVyXCIgY2xhc3M9XCJhbnQtZHJhd2VyLWZvb3RlclwiPlxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm56U3RyaW5nVGVtcGxhdGVPdXRsZXQ9XCJuekZvb3RlclwiPjxkaXYgW2lubmVySFRNTF09XCJuekZvb3RlclwiPjwvZGl2PjwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvbmctdGVtcGxhdGU+XG4gIGAsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBOekRyYXdlckNvbXBvbmVudDxUID0gTnpTYWZlQW55LCBSID0gTnpTYWZlQW55LCBEID0gTnpTYWZlQW55PlxuICBleHRlbmRzIE56RHJhd2VyUmVmPFQsIFI+XG4gIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIEFmdGVyVmlld0luaXQsIE9uQ2hhbmdlcywgQWZ0ZXJDb250ZW50SW5pdCwgTnpEcmF3ZXJPcHRpb25zT2ZDb21wb25lbnQge1xuICByZWFkb25seSBfbnpNb2R1bGVOYW1lOiBOekNvbmZpZ0tleSA9IE5aX0NPTkZJR19NT0RVTEVfTkFNRTtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX256Q2xvc2FibGU6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX256TWFza0Nsb3NhYmxlOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9uek1hc2s6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX256Tm9BbmltYXRpb246IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX256S2V5Ym9hcmQ6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX256Q2xvc2VPbk5hdmlnYXRpb246IEJvb2xlYW5JbnB1dDtcblxuICBASW5wdXQoKSBuekNvbnRlbnQhOiBUZW1wbGF0ZVJlZjx7ICRpbXBsaWNpdDogRDsgZHJhd2VyUmVmOiBOekRyYXdlclJlZjxSPiB9PiB8IFR5cGU8VD47XG4gIEBJbnB1dCgpIG56Q2xvc2VJY29uOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPiA9ICdjbG9zZSc7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekNsb3NhYmxlOiBib29sZWFuID0gdHJ1ZTtcbiAgQElucHV0KCkgQFdpdGhDb25maWcoKSBASW5wdXRCb29sZWFuKCkgbnpNYXNrQ2xvc2FibGU6IGJvb2xlYW4gPSB0cnVlO1xuICBASW5wdXQoKSBAV2l0aENvbmZpZygpIEBJbnB1dEJvb2xlYW4oKSBuek1hc2s6IGJvb2xlYW4gPSB0cnVlO1xuICBASW5wdXQoKSBAV2l0aENvbmZpZygpIEBJbnB1dEJvb2xlYW4oKSBuekNsb3NlT25OYXZpZ2F0aW9uOiBib29sZWFuID0gdHJ1ZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56Tm9BbmltYXRpb24gPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56S2V5Ym9hcmQ6IGJvb2xlYW4gPSB0cnVlO1xuICBASW5wdXQoKSBuelRpdGxlPzogc3RyaW5nIHwgVGVtcGxhdGVSZWY8e30+O1xuICBASW5wdXQoKSBuekZvb3Rlcj86IHN0cmluZyB8IFRlbXBsYXRlUmVmPHt9PjtcbiAgQElucHV0KCkgbnpQbGFjZW1lbnQ6IE56RHJhd2VyUGxhY2VtZW50ID0gJ3JpZ2h0JztcbiAgQElucHV0KCkgbnpNYXNrU3R5bGU6IE5nU3R5bGVJbnRlcmZhY2UgPSB7fTtcbiAgQElucHV0KCkgbnpCb2R5U3R5bGU6IE5nU3R5bGVJbnRlcmZhY2UgPSB7fTtcbiAgQElucHV0KCkgbnpXcmFwQ2xhc3NOYW1lPzogc3RyaW5nO1xuICBASW5wdXQoKSBueldpZHRoOiBudW1iZXIgfCBzdHJpbmcgPSAyNTY7XG4gIEBJbnB1dCgpIG56SGVpZ2h0OiBudW1iZXIgfCBzdHJpbmcgPSAyNTY7XG4gIEBJbnB1dCgpIG56WkluZGV4ID0gMTAwMDtcbiAgQElucHV0KCkgbnpPZmZzZXRYID0gMDtcbiAgQElucHV0KCkgbnpPZmZzZXRZID0gMDtcbiAgcHJpdmF0ZSBjb21wb25lbnRJbnN0YW5jZTogVCB8IG51bGwgPSBudWxsO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBuelZpc2libGUodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmlzT3BlbiA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0IG56VmlzaWJsZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5pc09wZW47XG4gIH1cblxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpPblZpZXdJbml0ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpPbkNsb3NlID0gbmV3IEV2ZW50RW1pdHRlcjxNb3VzZUV2ZW50PigpO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpWaXNpYmxlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuXG4gIEBWaWV3Q2hpbGQoJ2RyYXdlclRlbXBsYXRlJywgeyBzdGF0aWM6IHRydWUgfSkgZHJhd2VyVGVtcGxhdGUhOiBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgQFZpZXdDaGlsZChDZGtQb3J0YWxPdXRsZXQsIHsgc3RhdGljOiBmYWxzZSB9KSBib2R5UG9ydGFsT3V0bGV0PzogQ2RrUG9ydGFsT3V0bGV0O1xuICBAQ29udGVudENoaWxkKE56RHJhd2VyQ29udGVudERpcmVjdGl2ZSwgeyBzdGF0aWM6IHRydWUsIHJlYWQ6IFRlbXBsYXRlUmVmIH0pIGNvbnRlbnRGcm9tQ29udGVudENoaWxkPzogVGVtcGxhdGVSZWY8TnpTYWZlQW55PjtcblxuICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcbiAgcHJldmlvdXNseUZvY3VzZWRFbGVtZW50PzogSFRNTEVsZW1lbnQ7XG4gIHBsYWNlbWVudENoYW5naW5nID0gZmFsc2U7XG4gIHBsYWNlbWVudENoYW5nZVRpbWVvdXRJZCA9IC0xO1xuICBuekNvbnRlbnRQYXJhbXM/OiBEOyAvLyBvbmx5IHNlcnZpY2VcbiAgb3ZlcmxheVJlZj86IE92ZXJsYXlSZWYgfCBudWxsO1xuICBwb3J0YWw/OiBUZW1wbGF0ZVBvcnRhbDtcbiAgZm9jdXNUcmFwPzogRm9jdXNUcmFwO1xuICBpc09wZW4gPSBmYWxzZTtcbiAgaW5BbmltYXRpb24gPSBmYWxzZTtcbiAgdGVtcGxhdGVDb250ZXh0OiB7ICRpbXBsaWNpdDogRCB8IHVuZGVmaW5lZDsgZHJhd2VyUmVmOiBOekRyYXdlclJlZjxSPiB9ID0ge1xuICAgICRpbXBsaWNpdDogdW5kZWZpbmVkLFxuICAgIGRyYXdlclJlZjogdGhpcyBhcyBOekRyYXdlclJlZjxSPlxuICB9O1xuXG4gIGdldCBvZmZzZXRUcmFuc2Zvcm0oKTogc3RyaW5nIHwgbnVsbCB7XG4gICAgaWYgKCF0aGlzLmlzT3BlbiB8fCB0aGlzLm56T2Zmc2V0WCArIHRoaXMubnpPZmZzZXRZID09PSAwKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgc3dpdGNoICh0aGlzLm56UGxhY2VtZW50KSB7XG4gICAgICBjYXNlICdsZWZ0JzpcbiAgICAgICAgcmV0dXJuIGB0cmFuc2xhdGVYKCR7dGhpcy5uek9mZnNldFh9cHgpYDtcbiAgICAgIGNhc2UgJ3JpZ2h0JzpcbiAgICAgICAgcmV0dXJuIGB0cmFuc2xhdGVYKC0ke3RoaXMubnpPZmZzZXRYfXB4KWA7XG4gICAgICBjYXNlICd0b3AnOlxuICAgICAgICByZXR1cm4gYHRyYW5zbGF0ZVkoJHt0aGlzLm56T2Zmc2V0WX1weClgO1xuICAgICAgY2FzZSAnYm90dG9tJzpcbiAgICAgICAgcmV0dXJuIGB0cmFuc2xhdGVZKC0ke3RoaXMubnpPZmZzZXRZfXB4KWA7XG4gICAgfVxuICB9XG5cbiAgZ2V0IHRyYW5zZm9ybSgpOiBzdHJpbmcgfCBudWxsIHtcbiAgICBpZiAodGhpcy5pc09wZW4pIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHN3aXRjaCAodGhpcy5uelBsYWNlbWVudCkge1xuICAgICAgY2FzZSAnbGVmdCc6XG4gICAgICAgIHJldHVybiBgdHJhbnNsYXRlWCgtMTAwJSlgO1xuICAgICAgY2FzZSAncmlnaHQnOlxuICAgICAgICByZXR1cm4gYHRyYW5zbGF0ZVgoMTAwJSlgO1xuICAgICAgY2FzZSAndG9wJzpcbiAgICAgICAgcmV0dXJuIGB0cmFuc2xhdGVZKC0xMDAlKWA7XG4gICAgICBjYXNlICdib3R0b20nOlxuICAgICAgICByZXR1cm4gYHRyYW5zbGF0ZVkoMTAwJSlgO1xuICAgIH1cbiAgfVxuXG4gIGdldCB3aWR0aCgpOiBzdHJpbmcgfCBudWxsIHtcbiAgICByZXR1cm4gdGhpcy5pc0xlZnRPclJpZ2h0ID8gdG9Dc3NQaXhlbCh0aGlzLm56V2lkdGgpIDogbnVsbDtcbiAgfVxuXG4gIGdldCBoZWlnaHQoKTogc3RyaW5nIHwgbnVsbCB7XG4gICAgcmV0dXJuICF0aGlzLmlzTGVmdE9yUmlnaHQgPyB0b0Nzc1BpeGVsKHRoaXMubnpIZWlnaHQpIDogbnVsbDtcbiAgfVxuXG4gIGdldCBpc0xlZnRPclJpZ2h0KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLm56UGxhY2VtZW50ID09PSAnbGVmdCcgfHwgdGhpcy5uelBsYWNlbWVudCA9PT0gJ3JpZ2h0JztcbiAgfVxuXG4gIG56QWZ0ZXJPcGVuID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcbiAgbnpBZnRlckNsb3NlID0gbmV3IFN1YmplY3Q8Uj4oKTtcblxuICBnZXQgYWZ0ZXJPcGVuKCk6IE9ic2VydmFibGU8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLm56QWZ0ZXJPcGVuLmFzT2JzZXJ2YWJsZSgpO1xuICB9XG5cbiAgZ2V0IGFmdGVyQ2xvc2UoKTogT2JzZXJ2YWJsZTxSPiB7XG4gICAgcmV0dXJuIHRoaXMubnpBZnRlckNsb3NlLmFzT2JzZXJ2YWJsZSgpO1xuICB9XG5cbiAgaXNUZW1wbGF0ZVJlZih2YWx1ZToge30pOiBib29sZWFuIHtcbiAgICByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZjtcbiAgfVxuXG4gIC8vIGZyb20gc2VydmljZSBjb25maWdcbiAgQFdpdGhDb25maWcoKSBuekRpcmVjdGlvbj86IERpcmVjdGlvbiA9IHVuZGVmaW5lZDtcblxuICBkaXI6IERpcmVjdGlvbiA9ICdsdHInO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2N1bWVudDogTnpTYWZlQW55LFxuICAgIHB1YmxpYyBuekNvbmZpZ1NlcnZpY2U6IE56Q29uZmlnU2VydmljZSxcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBvdmVybGF5OiBPdmVybGF5LFxuICAgIHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yLFxuICAgIHByaXZhdGUgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByaXZhdGUgZm9jdXNUcmFwRmFjdG9yeTogRm9jdXNUcmFwRmFjdG9yeSxcbiAgICBwcml2YXRlIHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYsXG4gICAgcHJpdmF0ZSBvdmVybGF5S2V5Ym9hcmREaXNwYXRjaGVyOiBPdmVybGF5S2V5Ym9hcmREaXNwYXRjaGVyLFxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgZGlyZWN0aW9uYWxpdHk6IERpcmVjdGlvbmFsaXR5XG4gICkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmRpcmVjdGlvbmFsaXR5LmNoYW5nZT8ucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZSgoZGlyZWN0aW9uOiBEaXJlY3Rpb24pID0+IHtcbiAgICAgIHRoaXMuZGlyID0gZGlyZWN0aW9uO1xuICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH0pO1xuICAgIHRoaXMuZGlyID0gdGhpcy5uekRpcmVjdGlvbiB8fCB0aGlzLmRpcmVjdGlvbmFsaXR5LnZhbHVlO1xuXG4gICAgdGhpcy5hdHRhY2hPdmVybGF5KCk7XG4gICAgdGhpcy51cGRhdGVPdmVybGF5U3R5bGUoKTtcbiAgICB0aGlzLnVwZGF0ZUJvZHlPdmVyZmxvdygpO1xuICAgIHRoaXMudGVtcGxhdGVDb250ZXh0ID0geyAkaW1wbGljaXQ6IHRoaXMubnpDb250ZW50UGFyYW1zLCBkcmF3ZXJSZWY6IHRoaXMgYXMgTnpEcmF3ZXJSZWY8Uj4gfTtcbiAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmF0dGFjaEJvZHlDb250ZW50KCk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLm56T25WaWV3SW5pdC5lbWl0KCk7XG4gICAgfSk7XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XG4gICAgaWYgKCEodGhpcy5jb250ZW50RnJvbUNvbnRlbnRDaGlsZCB8fCB0aGlzLm56Q29udGVudCkpIHtcbiAgICAgIHdhcm5EZXByZWNhdGlvbihcbiAgICAgICAgJ1VzYWdlIGA8bmctY29udGVudD48L25nLWNvbnRlbnQ+YCBpcyBkZXByZWNhdGVkLCB3aGljaCB3aWxsIGJlIHJlbW92ZWQgaW4gMTIuMC4wLiBQbGVhc2UgaW5zdGVhZCB1c2UgYDxuZy10ZW1wbGF0ZSBuekRyYXdlckNvbnRlbnQ+PC9uZy10ZW1wbGF0ZT5gIHRvIGRlY2xhcmUgdGhlIGNvbnRlbnQgb2YgdGhlIGRyYXdlci4nXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBjb25zdCB7IG56UGxhY2VtZW50LCBuelZpc2libGUgfSA9IGNoYW5nZXM7XG4gICAgaWYgKG56VmlzaWJsZSkge1xuICAgICAgY29uc3QgdmFsdWUgPSBjaGFuZ2VzLm56VmlzaWJsZS5jdXJyZW50VmFsdWU7XG4gICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgdGhpcy5vcGVuKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChuelBsYWNlbWVudCAmJiAhbnpQbGFjZW1lbnQuaXNGaXJzdENoYW5nZSgpKSB7XG4gICAgICB0aGlzLnRyaWdnZXJQbGFjZW1lbnRDaGFuZ2VDeWNsZU9uY2UoKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMucGxhY2VtZW50Q2hhbmdlVGltZW91dElkKTtcbiAgICB0aGlzLmRpc3Bvc2VPdmVybGF5KCk7XG4gIH1cblxuICBwcml2YXRlIGdldEFuaW1hdGlvbkR1cmF0aW9uKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMubnpOb0FuaW1hdGlvbiA/IDAgOiBEUkFXRVJfQU5JTUFURV9EVVJBVElPTjtcbiAgfVxuXG4gIC8vIERpc2FibGUgdGhlIHRyYW5zaXRpb24gYW5pbWF0aW9uIHRlbXBvcmFyaWx5IHdoZW4gdGhlIHBsYWNlbWVudCBjaGFuZ2luZ1xuICBwcml2YXRlIHRyaWdnZXJQbGFjZW1lbnRDaGFuZ2VDeWNsZU9uY2UoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLm56Tm9BbmltYXRpb24pIHtcbiAgICAgIHRoaXMucGxhY2VtZW50Q2hhbmdpbmcgPSB0cnVlO1xuICAgICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLnBsYWNlbWVudENoYW5nZVRpbWVvdXRJZCk7XG4gICAgICB0aGlzLnBsYWNlbWVudENoYW5nZVRpbWVvdXRJZCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLnBsYWNlbWVudENoYW5naW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgICB9LCB0aGlzLmdldEFuaW1hdGlvbkR1cmF0aW9uKCkpO1xuICAgIH1cbiAgfVxuXG4gIGNsb3NlKHJlc3VsdD86IFIpOiB2b2lkIHtcbiAgICB0aGlzLmlzT3BlbiA9IGZhbHNlO1xuICAgIHRoaXMuaW5BbmltYXRpb24gPSB0cnVlO1xuICAgIHRoaXMubnpWaXNpYmxlQ2hhbmdlLmVtaXQoZmFsc2UpO1xuICAgIHRoaXMudXBkYXRlT3ZlcmxheVN0eWxlKCk7XG4gICAgdGhpcy5vdmVybGF5S2V5Ym9hcmREaXNwYXRjaGVyLnJlbW92ZSh0aGlzLm92ZXJsYXlSZWYhKTtcbiAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMudXBkYXRlQm9keU92ZXJmbG93KCk7XG4gICAgICB0aGlzLnJlc3RvcmVGb2N1cygpO1xuICAgICAgdGhpcy5pbkFuaW1hdGlvbiA9IGZhbHNlO1xuICAgICAgdGhpcy5uekFmdGVyQ2xvc2UubmV4dChyZXN1bHQpO1xuICAgICAgdGhpcy5uekFmdGVyQ2xvc2UuY29tcGxldGUoKTtcbiAgICAgIHRoaXMuY29tcG9uZW50SW5zdGFuY2UgPSBudWxsO1xuICAgIH0sIHRoaXMuZ2V0QW5pbWF0aW9uRHVyYXRpb24oKSk7XG4gIH1cblxuICBvcGVuKCk6IHZvaWQge1xuICAgIHRoaXMuYXR0YWNoT3ZlcmxheSgpO1xuICAgIHRoaXMuaXNPcGVuID0gdHJ1ZTtcbiAgICB0aGlzLmluQW5pbWF0aW9uID0gdHJ1ZTtcbiAgICB0aGlzLm56VmlzaWJsZUNoYW5nZS5lbWl0KHRydWUpO1xuICAgIHRoaXMub3ZlcmxheUtleWJvYXJkRGlzcGF0Y2hlci5hZGQodGhpcy5vdmVybGF5UmVmISk7XG4gICAgdGhpcy51cGRhdGVPdmVybGF5U3R5bGUoKTtcbiAgICB0aGlzLnVwZGF0ZUJvZHlPdmVyZmxvdygpO1xuICAgIHRoaXMuc2F2ZVByZXZpb3VzbHlGb2N1c2VkRWxlbWVudCgpO1xuICAgIHRoaXMudHJhcEZvY3VzKCk7XG4gICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmluQW5pbWF0aW9uID0gZmFsc2U7XG4gICAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcbiAgICAgIHRoaXMubnpBZnRlck9wZW4ubmV4dCgpO1xuICAgIH0sIHRoaXMuZ2V0QW5pbWF0aW9uRHVyYXRpb24oKSk7XG4gIH1cblxuICBnZXRDb250ZW50Q29tcG9uZW50KCk6IFQgfCBudWxsIHtcbiAgICByZXR1cm4gdGhpcy5jb21wb25lbnRJbnN0YW5jZTtcbiAgfVxuXG4gIGNsb3NlQ2xpY2soKTogdm9pZCB7XG4gICAgdGhpcy5uek9uQ2xvc2UuZW1pdCgpO1xuICB9XG5cbiAgbWFza0NsaWNrKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm56TWFza0Nsb3NhYmxlICYmIHRoaXMubnpNYXNrKSB7XG4gICAgICB0aGlzLm56T25DbG9zZS5lbWl0KCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBhdHRhY2hCb2R5Q29udGVudCgpOiB2b2lkIHtcbiAgICB0aGlzLmJvZHlQb3J0YWxPdXRsZXQhLmRpc3Bvc2UoKTtcblxuICAgIGlmICh0aGlzLm56Q29udGVudCBpbnN0YW5jZW9mIFR5cGUpIHtcbiAgICAgIGNvbnN0IGNoaWxkSW5qZWN0b3IgPSBJbmplY3Rvci5jcmVhdGUoe1xuICAgICAgICBwYXJlbnQ6IHRoaXMuaW5qZWN0b3IsXG4gICAgICAgIHByb3ZpZGVyczogW3sgcHJvdmlkZTogTnpEcmF3ZXJSZWYsIHVzZVZhbHVlOiB0aGlzIH1dXG4gICAgICB9KTtcbiAgICAgIGNvbnN0IGNvbXBvbmVudFBvcnRhbCA9IG5ldyBDb21wb25lbnRQb3J0YWw8VD4odGhpcy5uekNvbnRlbnQsIG51bGwsIGNoaWxkSW5qZWN0b3IpO1xuICAgICAgY29uc3QgY29tcG9uZW50UmVmID0gdGhpcy5ib2R5UG9ydGFsT3V0bGV0IS5hdHRhY2hDb21wb25lbnRQb3J0YWwoY29tcG9uZW50UG9ydGFsKTtcbiAgICAgIHRoaXMuY29tcG9uZW50SW5zdGFuY2UgPSBjb21wb25lbnRSZWYuaW5zdGFuY2U7XG4gICAgICBPYmplY3QuYXNzaWduKGNvbXBvbmVudFJlZi5pbnN0YW5jZSwgdGhpcy5uekNvbnRlbnRQYXJhbXMpO1xuICAgICAgY29tcG9uZW50UmVmLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGF0dGFjaE92ZXJsYXkoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLm92ZXJsYXlSZWYpIHtcbiAgICAgIHRoaXMucG9ydGFsID0gbmV3IFRlbXBsYXRlUG9ydGFsKHRoaXMuZHJhd2VyVGVtcGxhdGUsIHRoaXMudmlld0NvbnRhaW5lclJlZik7XG4gICAgICB0aGlzLm92ZXJsYXlSZWYgPSB0aGlzLm92ZXJsYXkuY3JlYXRlKHRoaXMuZ2V0T3ZlcmxheUNvbmZpZygpKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5vdmVybGF5UmVmICYmICF0aGlzLm92ZXJsYXlSZWYuaGFzQXR0YWNoZWQoKSkge1xuICAgICAgdGhpcy5vdmVybGF5UmVmLmF0dGFjaCh0aGlzLnBvcnRhbCk7XG4gICAgICB0aGlzLm92ZXJsYXlSZWYhLmtleWRvd25FdmVudHMoKVxuICAgICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXG4gICAgICAgIC5zdWJzY3JpYmUoKGV2ZW50OiBLZXlib2FyZEV2ZW50KSA9PiB7XG4gICAgICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IEVTQ0FQRSAmJiB0aGlzLmlzT3BlbiAmJiB0aGlzLm56S2V5Ym9hcmQpIHtcbiAgICAgICAgICAgIHRoaXMubnpPbkNsb3NlLmVtaXQoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgdGhpcy5vdmVybGF5UmVmXG4gICAgICAgIC5kZXRhY2htZW50cygpXG4gICAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcbiAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5kaXNwb3NlT3ZlcmxheSgpO1xuICAgICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGRpc3Bvc2VPdmVybGF5KCk6IHZvaWQge1xuICAgIHRoaXMub3ZlcmxheVJlZj8uZGlzcG9zZSgpO1xuICAgIHRoaXMub3ZlcmxheVJlZiA9IG51bGw7XG4gIH1cblxuICBwcml2YXRlIGdldE92ZXJsYXlDb25maWcoKTogT3ZlcmxheUNvbmZpZyB7XG4gICAgcmV0dXJuIG5ldyBPdmVybGF5Q29uZmlnKHtcbiAgICAgIGRpc3Bvc2VPbk5hdmlnYXRpb246IHRoaXMubnpDbG9zZU9uTmF2aWdhdGlvbixcbiAgICAgIHBvc2l0aW9uU3RyYXRlZ3k6IHRoaXMub3ZlcmxheS5wb3NpdGlvbigpLmdsb2JhbCgpLFxuICAgICAgc2Nyb2xsU3RyYXRlZ3k6IHRoaXMub3ZlcmxheS5zY3JvbGxTdHJhdGVnaWVzLmJsb2NrKClcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlT3ZlcmxheVN0eWxlKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm92ZXJsYXlSZWYgJiYgdGhpcy5vdmVybGF5UmVmLm92ZXJsYXlFbGVtZW50KSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMub3ZlcmxheVJlZi5vdmVybGF5RWxlbWVudCwgJ3BvaW50ZXItZXZlbnRzJywgdGhpcy5pc09wZW4gPyAnYXV0bycgOiAnbm9uZScpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlQm9keU92ZXJmbG93KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm92ZXJsYXlSZWYpIHtcbiAgICAgIGlmICh0aGlzLmlzT3Blbikge1xuICAgICAgICB0aGlzLm92ZXJsYXlSZWYuZ2V0Q29uZmlnKCkuc2Nyb2xsU3RyYXRlZ3khLmVuYWJsZSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5vdmVybGF5UmVmLmdldENvbmZpZygpLnNjcm9sbFN0cmF0ZWd5IS5kaXNhYmxlKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgc2F2ZVByZXZpb3VzbHlGb2N1c2VkRWxlbWVudCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5kb2N1bWVudCAmJiAhdGhpcy5wcmV2aW91c2x5Rm9jdXNlZEVsZW1lbnQpIHtcbiAgICAgIHRoaXMucHJldmlvdXNseUZvY3VzZWRFbGVtZW50ID0gdGhpcy5kb2N1bWVudC5hY3RpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50O1xuICAgICAgLy8gV2UgbmVlZCB0aGUgZXh0cmEgY2hlY2ssIGJlY2F1c2UgSUUncyBzdmcgZWxlbWVudCBoYXMgbm8gYmx1ciBtZXRob2QuXG4gICAgICBpZiAodGhpcy5wcmV2aW91c2x5Rm9jdXNlZEVsZW1lbnQgJiYgdHlwZW9mIHRoaXMucHJldmlvdXNseUZvY3VzZWRFbGVtZW50LmJsdXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdGhpcy5wcmV2aW91c2x5Rm9jdXNlZEVsZW1lbnQuYmx1cigpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgdHJhcEZvY3VzKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5mb2N1c1RyYXAgJiYgdGhpcy5vdmVybGF5UmVmICYmIHRoaXMub3ZlcmxheVJlZi5vdmVybGF5RWxlbWVudCkge1xuICAgICAgdGhpcy5mb2N1c1RyYXAgPSB0aGlzLmZvY3VzVHJhcEZhY3RvcnkuY3JlYXRlKHRoaXMub3ZlcmxheVJlZiEub3ZlcmxheUVsZW1lbnQpO1xuICAgICAgdGhpcy5mb2N1c1RyYXAuZm9jdXNJbml0aWFsRWxlbWVudCgpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgcmVzdG9yZUZvY3VzKCk6IHZvaWQge1xuICAgIC8vIFdlIG5lZWQgdGhlIGV4dHJhIGNoZWNrLCBiZWNhdXNlIElFIGNhbiBzZXQgdGhlIGBhY3RpdmVFbGVtZW50YCB0byBudWxsIGluIHNvbWUgY2FzZXMuXG4gICAgaWYgKHRoaXMucHJldmlvdXNseUZvY3VzZWRFbGVtZW50ICYmIHR5cGVvZiB0aGlzLnByZXZpb3VzbHlGb2N1c2VkRWxlbWVudC5mb2N1cyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhpcy5wcmV2aW91c2x5Rm9jdXNlZEVsZW1lbnQuZm9jdXMoKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuZm9jdXNUcmFwKSB7XG4gICAgICB0aGlzLmZvY3VzVHJhcC5kZXN0cm95KCk7XG4gICAgfVxuICB9XG59XG4iXX0=