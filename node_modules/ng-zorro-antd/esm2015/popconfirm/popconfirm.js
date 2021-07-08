/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { __decorate, __metadata } from "tslib";
import { Directionality } from '@angular/cdk/bidi';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ComponentFactoryResolver, Directive, ElementRef, EventEmitter, Host, Input, Optional, Output, Renderer2, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { zoomBigMotion } from 'ng-zorro-antd/core/animation';
import { NzConfigService, WithConfig } from 'ng-zorro-antd/core/config';
import { NzNoAnimationDirective } from 'ng-zorro-antd/core/no-animation';
import { InputBoolean } from 'ng-zorro-antd/core/util';
import { NzTooltipBaseDirective, NzToolTipComponent } from 'ng-zorro-antd/tooltip';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from 'ng-zorro-antd/core/no-animation';
import * as ɵngcc2 from 'ng-zorro-antd/core/config';
import * as ɵngcc3 from '@angular/cdk/bidi';
import * as ɵngcc4 from '@angular/cdk/overlay';
import * as ɵngcc5 from 'ng-zorro-antd/core/overlay';
import * as ɵngcc6 from '@angular/common';
import * as ɵngcc7 from 'ng-zorro-antd/core/outlet';
import * as ɵngcc8 from 'ng-zorro-antd/button';
import * as ɵngcc9 from 'ng-zorro-antd/core/wave';
import * as ɵngcc10 from 'ng-zorro-antd/core/transition-patch';
import * as ɵngcc11 from 'ng-zorro-antd/icon';
import * as ɵngcc12 from 'ng-zorro-antd/i18n';

function NzPopconfirmComponent_ng_template_0_div_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "div", 13);
} }
function NzPopconfirmComponent_ng_template_0_ng_container_7_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelement(1, "i", 15);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const icon_r9 = ctx.$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("nzType", icon_r9 || "exclamation-circle");
} }
function NzPopconfirmComponent_ng_template_0_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, NzPopconfirmComponent_ng_template_0_ng_container_7_ng_container_1_Template, 2, 1, "ng-container", 8);
    ɵngcc0.ɵɵelementStart(2, "div", 14);
    ɵngcc0.ɵɵtext(3);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r3 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("nzStringTemplateOutlet", ctx_r3.nzIcon);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate(ctx_r3.nzTitle);
} }
function NzPopconfirmComponent_ng_template_0_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r4 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r4.nzCancelText);
} }
function NzPopconfirmComponent_ng_template_0_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵpipe(2, "nzI18n");
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ɵngcc0.ɵɵpipeBind1(2, 1, "Modal.cancelText"));
} }
function NzPopconfirmComponent_ng_template_0_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r6 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r6.nzOkText);
} }
function NzPopconfirmComponent_ng_template_0_ng_container_14_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵpipe(2, "nzI18n");
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ɵngcc0.ɵɵpipeBind1(2, 1, "Modal.okText"));
} }
function NzPopconfirmComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    const _r11 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 2);
    ɵngcc0.ɵɵelementStart(1, "div", 3);
    ɵngcc0.ɵɵtemplate(2, NzPopconfirmComponent_ng_template_0_div_2_Template, 1, 0, "div", 4);
    ɵngcc0.ɵɵelementStart(3, "div", 5);
    ɵngcc0.ɵɵelementStart(4, "div");
    ɵngcc0.ɵɵelementStart(5, "div", 6);
    ɵngcc0.ɵɵelementStart(6, "div", 7);
    ɵngcc0.ɵɵtemplate(7, NzPopconfirmComponent_ng_template_0_ng_container_7_Template, 4, 2, "ng-container", 8);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(8, "div", 9);
    ɵngcc0.ɵɵelementStart(9, "button", 10);
    ɵngcc0.ɵɵlistener("click", function NzPopconfirmComponent_ng_template_0_Template_button_click_9_listener() { ɵngcc0.ɵɵrestoreView(_r11); const ctx_r10 = ɵngcc0.ɵɵnextContext(); return ctx_r10.onCancel(); });
    ɵngcc0.ɵɵtemplate(10, NzPopconfirmComponent_ng_template_0_ng_container_10_Template, 2, 1, "ng-container", 11);
    ɵngcc0.ɵɵtemplate(11, NzPopconfirmComponent_ng_template_0_ng_container_11_Template, 3, 3, "ng-container", 11);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(12, "button", 12);
    ɵngcc0.ɵɵlistener("click", function NzPopconfirmComponent_ng_template_0_Template_button_click_12_listener() { ɵngcc0.ɵɵrestoreView(_r11); const ctx_r12 = ɵngcc0.ɵɵnextContext(); return ctx_r12.onConfirm(); });
    ɵngcc0.ɵɵtemplate(13, NzPopconfirmComponent_ng_template_0_ng_container_13_Template, 2, 1, "ng-container", 11);
    ɵngcc0.ɵɵtemplate(14, NzPopconfirmComponent_ng_template_0_ng_container_14_Template, 3, 3, "ng-container", 11);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassProp("ant-popover-rtl", ctx_r1.dir === "rtl");
    ɵngcc0.ɵɵproperty("ngClass", ctx_r1._classMap)("ngStyle", ctx_r1.nzOverlayStyle)("@.disabled", ctx_r1.noAnimation == null ? null : ctx_r1.noAnimation.nzNoAnimation)("nzNoAnimation", ctx_r1.noAnimation == null ? null : ctx_r1.noAnimation.nzNoAnimation)("@zoomBigMotion", "active");
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r1.nzPopconfirmShowArrow);
    ɵngcc0.ɵɵadvance(5);
    ɵngcc0.ɵɵproperty("nzStringTemplateOutlet", ctx_r1.nzTitle);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("nzSize", "small");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r1.nzCancelText);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r1.nzCancelText);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("nzSize", "small")("nzType", ctx_r1.nzOkType);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r1.nzOkText);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r1.nzOkText);
} }
const NZ_CONFIG_MODULE_NAME = 'popconfirm';
export class NzPopconfirmDirective extends NzTooltipBaseDirective {
    constructor(elementRef, hostView, resolver, renderer, noAnimation, nzConfigService) {
        super(elementRef, hostView, resolver, renderer, noAnimation, nzConfigService);
        this._nzModuleName = NZ_CONFIG_MODULE_NAME;
        this.trigger = 'click';
        this.placement = 'top';
        this.nzCondition = false;
        this.nzPopconfirmShowArrow = true;
        this.nzPopconfirmBackdrop = false;
        // tslint:disable-next-line:no-output-rename
        this.visibleChange = new EventEmitter();
        this.nzOnCancel = new EventEmitter();
        this.nzOnConfirm = new EventEmitter();
        this.componentFactory = this.resolver.resolveComponentFactory(NzPopconfirmComponent);
    }
    getProxyPropertyMap() {
        return Object.assign({ nzOkText: ['nzOkText', () => this.nzOkText], nzOkType: ['nzOkType', () => this.nzOkType], nzCancelText: ['nzCancelText', () => this.nzCancelText], nzCondition: ['nzCondition', () => this.nzCondition], nzIcon: ['nzIcon', () => this.nzIcon], nzPopconfirmShowArrow: ['nzPopconfirmShowArrow', () => this.nzPopconfirmShowArrow], nzPopconfirmBackdrop: ['nzBackdrop', () => this.nzPopconfirmBackdrop] }, super.getProxyPropertyMap());
    }
    /**
     * @override
     */
    createComponent() {
        super.createComponent();
        this.component.nzOnCancel.pipe(takeUntil(this.destroy$)).subscribe(() => {
            this.nzOnCancel.emit();
        });
        this.component.nzOnConfirm.pipe(takeUntil(this.destroy$)).subscribe(() => {
            this.nzOnConfirm.emit();
        });
    }
}
NzPopconfirmDirective.ɵfac = function NzPopconfirmDirective_Factory(t) { return new (t || NzPopconfirmDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ViewContainerRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ComponentFactoryResolver), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.NzNoAnimationDirective, 9), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.NzConfigService)); };
NzPopconfirmDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: NzPopconfirmDirective, selectors: [["", "nz-popconfirm", ""]], hostVars: 2, hostBindings: function NzPopconfirmDirective_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("ant-popover-open", ctx.visible);
    } }, inputs: { trigger: ["nzPopconfirmTrigger", "trigger"], placement: ["nzPopconfirmPlacement", "placement"], nzCondition: "nzCondition", nzPopconfirmShowArrow: "nzPopconfirmShowArrow", nzPopconfirmBackdrop: "nzPopconfirmBackdrop", title: ["nzPopconfirmTitle", "title"], directiveTitle: ["nz-popconfirm", "directiveTitle"], origin: ["nzPopconfirmOrigin", "origin"], mouseEnterDelay: ["nzPopconfirmMouseEnterDelay", "mouseEnterDelay"], mouseLeaveDelay: ["nzPopconfirmMouseLeaveDelay", "mouseLeaveDelay"], overlayClassName: ["nzPopconfirmOverlayClassName", "overlayClassName"], overlayStyle: ["nzPopconfirmOverlayStyle", "overlayStyle"], visible: ["nzPopconfirmVisible", "visible"], nzOkText: "nzOkText", nzOkType: "nzOkType", nzCancelText: "nzCancelText", nzIcon: "nzIcon" }, outputs: { visibleChange: "nzPopconfirmVisibleChange", nzOnCancel: "nzOnCancel", nzOnConfirm: "nzOnConfirm" }, exportAs: ["nzPopconfirm"], features: [ɵngcc0.ɵɵInheritDefinitionFeature] });
NzPopconfirmDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: ViewContainerRef },
    { type: ComponentFactoryResolver },
    { type: Renderer2 },
    { type: NzNoAnimationDirective, decorators: [{ type: Host }, { type: Optional }] },
    { type: NzConfigService }
];
NzPopconfirmDirective.propDecorators = {
    title: [{ type: Input, args: ['nzPopconfirmTitle',] }],
    directiveTitle: [{ type: Input, args: ['nz-popconfirm',] }],
    trigger: [{ type: Input, args: ['nzPopconfirmTrigger',] }],
    placement: [{ type: Input, args: ['nzPopconfirmPlacement',] }],
    origin: [{ type: Input, args: ['nzPopconfirmOrigin',] }],
    mouseEnterDelay: [{ type: Input, args: ['nzPopconfirmMouseEnterDelay',] }],
    mouseLeaveDelay: [{ type: Input, args: ['nzPopconfirmMouseLeaveDelay',] }],
    overlayClassName: [{ type: Input, args: ['nzPopconfirmOverlayClassName',] }],
    overlayStyle: [{ type: Input, args: ['nzPopconfirmOverlayStyle',] }],
    visible: [{ type: Input, args: ['nzPopconfirmVisible',] }],
    nzOkText: [{ type: Input }],
    nzOkType: [{ type: Input }],
    nzCancelText: [{ type: Input }],
    nzIcon: [{ type: Input }],
    nzCondition: [{ type: Input }],
    nzPopconfirmShowArrow: [{ type: Input }],
    nzPopconfirmBackdrop: [{ type: Input }],
    visibleChange: [{ type: Output, args: ['nzPopconfirmVisibleChange',] }],
    nzOnCancel: [{ type: Output }],
    nzOnConfirm: [{ type: Output }]
};
__decorate([
    InputBoolean(),
    __metadata("design:type", Boolean)
], NzPopconfirmDirective.prototype, "nzCondition", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Boolean)
], NzPopconfirmDirective.prototype, "nzPopconfirmShowArrow", void 0);
__decorate([
    WithConfig(),
    __metadata("design:type", Boolean)
], NzPopconfirmDirective.prototype, "nzPopconfirmBackdrop", void 0);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzPopconfirmDirective, [{
        type: Directive,
        args: [{
                selector: '[nz-popconfirm]',
                exportAs: 'nzPopconfirm',
                host: {
                    '[class.ant-popover-open]': 'visible'
                }
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc0.ViewContainerRef }, { type: ɵngcc0.ComponentFactoryResolver }, { type: ɵngcc0.Renderer2 }, { type: ɵngcc1.NzNoAnimationDirective, decorators: [{
                type: Host
            }, {
                type: Optional
            }] }, { type: ɵngcc2.NzConfigService }]; }, { trigger: [{
            type: Input,
            args: ['nzPopconfirmTrigger']
        }], placement: [{
            type: Input,
            args: ['nzPopconfirmPlacement']
        }], nzCondition: [{
            type: Input
        }], nzPopconfirmShowArrow: [{
            type: Input
        }], nzPopconfirmBackdrop: [{
            type: Input
        }], visibleChange: [{
            type: Output,
            args: ['nzPopconfirmVisibleChange']
        }], nzOnCancel: [{
            type: Output
        }], nzOnConfirm: [{
            type: Output
        }], title: [{
            type: Input,
            args: ['nzPopconfirmTitle']
        }], directiveTitle: [{
            type: Input,
            args: ['nz-popconfirm']
        }], origin: [{
            type: Input,
            args: ['nzPopconfirmOrigin']
        }], mouseEnterDelay: [{
            type: Input,
            args: ['nzPopconfirmMouseEnterDelay']
        }], mouseLeaveDelay: [{
            type: Input,
            args: ['nzPopconfirmMouseLeaveDelay']
        }], overlayClassName: [{
            type: Input,
            args: ['nzPopconfirmOverlayClassName']
        }], overlayStyle: [{
            type: Input,
            args: ['nzPopconfirmOverlayStyle']
        }], visible: [{
            type: Input,
            args: ['nzPopconfirmVisible']
        }], nzOkText: [{
            type: Input
        }], nzOkType: [{
            type: Input
        }], nzCancelText: [{
            type: Input
        }], nzIcon: [{
            type: Input
        }] }); })();
export class NzPopconfirmComponent extends NzToolTipComponent {
    constructor(cdr, directionality, noAnimation) {
        super(cdr, directionality, noAnimation);
        this.noAnimation = noAnimation;
        this.nzCondition = false;
        this.nzPopconfirmShowArrow = true;
        this.nzOkType = 'primary';
        this.nzOnCancel = new Subject();
        this.nzOnConfirm = new Subject();
        this._trigger = 'click';
        this._prefix = 'ant-popover';
    }
    ngOnDestroy() {
        super.ngOnDestroy();
        this.nzOnCancel.complete();
        this.nzOnConfirm.complete();
    }
    /**
     * @override
     */
    show() {
        if (!this.nzCondition) {
            super.show();
        }
        else {
            this.onConfirm();
        }
    }
    onCancel() {
        this.nzOnCancel.next();
        super.hide();
    }
    onConfirm() {
        this.nzOnConfirm.next();
        super.hide();
    }
}
NzPopconfirmComponent.ɵfac = function NzPopconfirmComponent_Factory(t) { return new (t || NzPopconfirmComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc3.Directionality, 8), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.NzNoAnimationDirective, 9)); };
NzPopconfirmComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzPopconfirmComponent, selectors: [["nz-popconfirm"]], exportAs: ["nzPopconfirmComponent"], features: [ɵngcc0.ɵɵInheritDefinitionFeature], decls: 2, vars: 5, consts: [["cdkConnectedOverlay", "", "nzConnectedOverlay", "", 3, "cdkConnectedOverlayHasBackdrop", "cdkConnectedOverlayOrigin", "cdkConnectedOverlayPositions", "cdkConnectedOverlayOpen", "cdkConnectedOverlayPush", "overlayOutsideClick", "detach", "positionChange"], ["overlay", "cdkConnectedOverlay"], [1, "ant-popover", 3, "ngClass", "ngStyle", "nzNoAnimation"], [1, "ant-popover-content"], ["class", "ant-popover-arrow", 4, "ngIf"], [1, "ant-popover-inner"], [1, "ant-popover-inner-content"], [1, "ant-popover-message"], [4, "nzStringTemplateOutlet"], [1, "ant-popover-buttons"], ["nz-button", "", 3, "nzSize", "click"], [4, "ngIf"], ["nz-button", "", 3, "nzSize", "nzType", "click"], [1, "ant-popover-arrow"], [1, "ant-popover-message-title"], ["nz-icon", "", "nzTheme", "fill", 3, "nzType"]], template: function NzPopconfirmComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, NzPopconfirmComponent_ng_template_0_Template, 15, 16, "ng-template", 0, 1, ɵngcc0.ɵɵtemplateRefExtractor);
        ɵngcc0.ɵɵlistener("overlayOutsideClick", function NzPopconfirmComponent_Template_ng_template_overlayOutsideClick_0_listener($event) { return ctx.onClickOutside($event); })("detach", function NzPopconfirmComponent_Template_ng_template_detach_0_listener() { return ctx.hide(); })("positionChange", function NzPopconfirmComponent_Template_ng_template_positionChange_0_listener($event) { return ctx.onPositionChange($event); });
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("cdkConnectedOverlayHasBackdrop", ctx.nzBackdrop)("cdkConnectedOverlayOrigin", ctx.origin)("cdkConnectedOverlayPositions", ctx._positions)("cdkConnectedOverlayOpen", ctx._visible)("cdkConnectedOverlayPush", true);
    } }, directives: [ɵngcc4.CdkConnectedOverlay, ɵngcc5.NzConnectedOverlayDirective, ɵngcc6.NgClass, ɵngcc6.NgStyle, ɵngcc1.NzNoAnimationDirective, ɵngcc6.NgIf, ɵngcc7.NzStringTemplateOutletDirective, ɵngcc8.NzButtonComponent, ɵngcc9.NzWaveDirective, ɵngcc10.ɵNzTransitionPatchDirective, ɵngcc11.NzIconDirective], pipes: [ɵngcc12.NzI18nPipe], encapsulation: 2, data: { animation: [zoomBigMotion] }, changeDetection: 0 });
NzPopconfirmComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: Directionality, decorators: [{ type: Optional }] },
    { type: NzNoAnimationDirective, decorators: [{ type: Host }, { type: Optional }] }
];
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzPopconfirmComponent, [{
        type: Component,
        args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                selector: 'nz-popconfirm',
                exportAs: 'nzPopconfirmComponent',
                preserveWhitespaces: false,
                animations: [zoomBigMotion],
                template: `
    <ng-template
      #overlay="cdkConnectedOverlay"
      cdkConnectedOverlay
      nzConnectedOverlay
      [cdkConnectedOverlayHasBackdrop]="nzBackdrop"
      [cdkConnectedOverlayOrigin]="origin"
      (overlayOutsideClick)="onClickOutside($event)"
      (detach)="hide()"
      (positionChange)="onPositionChange($event)"
      [cdkConnectedOverlayPositions]="_positions"
      [cdkConnectedOverlayOpen]="_visible"
      [cdkConnectedOverlayPush]="true"
    >
      <div
        class="ant-popover"
        [ngClass]="_classMap"
        [class.ant-popover-rtl]="dir === 'rtl'"
        [ngStyle]="nzOverlayStyle"
        [@.disabled]="noAnimation?.nzNoAnimation"
        [nzNoAnimation]="noAnimation?.nzNoAnimation"
        [@zoomBigMotion]="'active'"
      >
        <div class="ant-popover-content">
          <div class="ant-popover-arrow" *ngIf="nzPopconfirmShowArrow"></div>
          <div class="ant-popover-inner">
            <div>
              <div class="ant-popover-inner-content">
                <div class="ant-popover-message">
                  <ng-container *nzStringTemplateOutlet="nzTitle">
                    <ng-container *nzStringTemplateOutlet="nzIcon; let icon">
                      <i nz-icon [nzType]="icon || 'exclamation-circle'" nzTheme="fill"></i>
                    </ng-container>
                    <div class="ant-popover-message-title">{{ nzTitle }}</div>
                  </ng-container>
                </div>
                <div class="ant-popover-buttons">
                  <button nz-button [nzSize]="'small'" (click)="onCancel()">
                    <ng-container *ngIf="nzCancelText">{{ nzCancelText }}</ng-container>
                    <ng-container *ngIf="!nzCancelText">{{ 'Modal.cancelText' | nzI18n }}</ng-container>
                  </button>
                  <button nz-button [nzSize]="'small'" [nzType]="nzOkType" (click)="onConfirm()">
                    <ng-container *ngIf="nzOkText">{{ nzOkText }}</ng-container>
                    <ng-container *ngIf="!nzOkText">{{ 'Modal.okText' | nzI18n }}</ng-container>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ng-template>
  `
            }]
    }], function () { return [{ type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc3.Directionality, decorators: [{
                type: Optional
            }] }, { type: ɵngcc1.NzNoAnimationDirective, decorators: [{
                type: Host
            }, {
                type: Optional
            }] }]; }, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wY29uZmlybS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vY29tcG9uZW50cy9wb3Bjb25maXJtL3BvcGNvbmZpcm0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ25ELE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFFVCx3QkFBd0IsRUFDeEIsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osSUFBSSxFQUNKLEtBQUssRUFFTCxRQUFRLEVBQ1IsTUFBTSxFQUNOLFNBQVMsRUFFVCxnQkFBZ0IsRUFDaEIsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUM3RCxPQUFPLEVBQWUsZUFBZSxFQUFFLFVBQVUsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3JGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBR3pFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsa0JBQWtCLEVBQXFDLE1BQU0sdUJBQXVCLENBQUM7QUFDdEgsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUzQyxNQUFNLHFCQUFxQixHQUFnQixZQUFZLENBQUM7QUFTeEQsTUFBTSxPQUFPLHFCQUFzQixTQUFRLHNCQUFzQjtBQUNq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RSx1QkFBdUIsQ0FBQyxNQUFNLGtCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSSxrQkFDckMsUUFBUSxFQUFFLGVBQWUsa0JBQ3pCLFFBQVEsRUFBRTtBQUF1QixrQkFDakMsbUJBQW1CLEVBQUUsS0FBSyxrQkFDMUIsVUFBVSxFQUFFLENBQUMsYUFBYSxDQUFDLGtCQUMzQixRQUFRLEVBQUU7Ozs7O3NhQXNEUDtlQUZGLGNBQ0YsN0JBQ0s7QUFBK0MsWUF6S25ELGlCQUFpQjtBQUNqQixZQUpPLGNBQWMsdUJBNkxsQixRQUFRO0FBQU8sWUF0S1gsc0JBQXNCLHVCQXVLMUIsSUFBSSxZQUFJLFFBQVE7QUFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0FBRTtBQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHsgRGlyZWN0aW9uYWxpdHkgfSBmcm9tICdAYW5ndWxhci9jZGsvYmlkaSc7XG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgQ29tcG9uZW50RmFjdG9yeSxcbiAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICBEaXJlY3RpdmUsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSG9zdCxcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgT3B0aW9uYWwsXG4gIE91dHB1dCxcbiAgUmVuZGVyZXIyLFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0NvbnRhaW5lclJlZixcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOekJ1dHRvblR5cGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2J1dHRvbic7XG5pbXBvcnQgeyB6b29tQmlnTW90aW9uIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL2FuaW1hdGlvbic7XG5pbXBvcnQgeyBOekNvbmZpZ0tleSwgTnpDb25maWdTZXJ2aWNlLCBXaXRoQ29uZmlnIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL2NvbmZpZyc7XG5pbXBvcnQgeyBOek5vQW5pbWF0aW9uRGlyZWN0aXZlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL25vLWFuaW1hdGlvbic7XG5pbXBvcnQgeyBCb29sZWFuSW5wdXQsIE5nU3R5bGVJbnRlcmZhY2UsIE56VFNUeXBlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcblxuaW1wb3J0IHsgSW5wdXRCb29sZWFuIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3V0aWwnO1xuaW1wb3J0IHsgTnpUb29sdGlwQmFzZURpcmVjdGl2ZSwgTnpUb29sVGlwQ29tcG9uZW50LCBOelRvb2x0aXBUcmlnZ2VyLCBQcm9wZXJ0eU1hcHBpbmcgfSBmcm9tICduZy16b3Jyby1hbnRkL3Rvb2x0aXAnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5jb25zdCBOWl9DT05GSUdfTU9EVUxFX05BTUU6IE56Q29uZmlnS2V5ID0gJ3BvcGNvbmZpcm0nO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbnotcG9wY29uZmlybV0nLFxuICBleHBvcnRBczogJ256UG9wY29uZmlybScsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLmFudC1wb3BvdmVyLW9wZW5dJzogJ3Zpc2libGUnXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgTnpQb3Bjb25maXJtRGlyZWN0aXZlIGV4dGVuZHMgTnpUb29sdGlwQmFzZURpcmVjdGl2ZSB7XG4gIHJlYWRvbmx5IF9uek1vZHVsZU5hbWU6IE56Q29uZmlnS2V5ID0gTlpfQ09ORklHX01PRFVMRV9OQU1FO1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbnpDb25kaXRpb246IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX256UG9wY29uZmlybVNob3dBcnJvdzogQm9vbGVhbklucHV0O1xuXG4gIEBJbnB1dCgnbnpQb3Bjb25maXJtVGl0bGUnKSB0aXRsZT86IE56VFNUeXBlO1xuICBASW5wdXQoJ256LXBvcGNvbmZpcm0nKSBkaXJlY3RpdmVUaXRsZT86IE56VFNUeXBlIHwgbnVsbDtcbiAgQElucHV0KCduelBvcGNvbmZpcm1UcmlnZ2VyJykgdHJpZ2dlcj86IE56VG9vbHRpcFRyaWdnZXIgPSAnY2xpY2snO1xuICBASW5wdXQoJ256UG9wY29uZmlybVBsYWNlbWVudCcpIHBsYWNlbWVudD86IHN0cmluZyB8IHN0cmluZ1tdID0gJ3RvcCc7XG4gIEBJbnB1dCgnbnpQb3Bjb25maXJtT3JpZ2luJykgb3JpZ2luPzogRWxlbWVudFJlZjxIVE1MRWxlbWVudD47XG4gIEBJbnB1dCgnbnpQb3Bjb25maXJtTW91c2VFbnRlckRlbGF5JykgbW91c2VFbnRlckRlbGF5PzogbnVtYmVyO1xuICBASW5wdXQoJ256UG9wY29uZmlybU1vdXNlTGVhdmVEZWxheScpIG1vdXNlTGVhdmVEZWxheT86IG51bWJlcjtcbiAgQElucHV0KCduelBvcGNvbmZpcm1PdmVybGF5Q2xhc3NOYW1lJykgb3ZlcmxheUNsYXNzTmFtZT86IHN0cmluZztcbiAgQElucHV0KCduelBvcGNvbmZpcm1PdmVybGF5U3R5bGUnKSBvdmVybGF5U3R5bGU/OiBOZ1N0eWxlSW50ZXJmYWNlO1xuICBASW5wdXQoJ256UG9wY29uZmlybVZpc2libGUnKSB2aXNpYmxlPzogYm9vbGVhbjtcbiAgQElucHV0KCkgbnpPa1RleHQ/OiBzdHJpbmc7XG4gIEBJbnB1dCgpIG56T2tUeXBlPzogc3RyaW5nO1xuICBASW5wdXQoKSBuekNhbmNlbFRleHQ/OiBzdHJpbmc7XG4gIEBJbnB1dCgpIG56SWNvbj86IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpDb25kaXRpb246IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56UG9wY29uZmlybVNob3dBcnJvdzogYm9vbGVhbiA9IHRydWU7XG4gIEBJbnB1dCgpIEBXaXRoQ29uZmlnKCkgbnpQb3Bjb25maXJtQmFja2Ryb3A/OiBib29sZWFuID0gZmFsc2U7XG5cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLW91dHB1dC1yZW5hbWVcbiAgQE91dHB1dCgnbnpQb3Bjb25maXJtVmlzaWJsZUNoYW5nZScpIHJlYWRvbmx5IHZpc2libGVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG4gIEBPdXRwdXQoKSByZWFkb25seSBuek9uQ2FuY2VsID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpPbkNvbmZpcm0gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cbiAgcHJvdGVjdGVkIHJlYWRvbmx5IGNvbXBvbmVudEZhY3Rvcnk6IENvbXBvbmVudEZhY3Rvcnk8TnpQb3Bjb25maXJtQ29tcG9uZW50PiA9IHRoaXMucmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkoXG4gICAgTnpQb3Bjb25maXJtQ29tcG9uZW50XG4gICk7XG5cbiAgcHJvdGVjdGVkIGdldFByb3h5UHJvcGVydHlNYXAoKTogUHJvcGVydHlNYXBwaW5nIHtcbiAgICByZXR1cm4ge1xuICAgICAgbnpPa1RleHQ6IFsnbnpPa1RleHQnLCAoKSA9PiB0aGlzLm56T2tUZXh0XSxcbiAgICAgIG56T2tUeXBlOiBbJ256T2tUeXBlJywgKCkgPT4gdGhpcy5uek9rVHlwZV0sXG4gICAgICBuekNhbmNlbFRleHQ6IFsnbnpDYW5jZWxUZXh0JywgKCkgPT4gdGhpcy5uekNhbmNlbFRleHRdLFxuICAgICAgbnpDb25kaXRpb246IFsnbnpDb25kaXRpb24nLCAoKSA9PiB0aGlzLm56Q29uZGl0aW9uXSxcbiAgICAgIG56SWNvbjogWyduekljb24nLCAoKSA9PiB0aGlzLm56SWNvbl0sXG4gICAgICBuelBvcGNvbmZpcm1TaG93QXJyb3c6IFsnbnpQb3Bjb25maXJtU2hvd0Fycm93JywgKCkgPT4gdGhpcy5uelBvcGNvbmZpcm1TaG93QXJyb3ddLFxuICAgICAgbnpQb3Bjb25maXJtQmFja2Ryb3A6IFsnbnpCYWNrZHJvcCcsICgpID0+IHRoaXMubnpQb3Bjb25maXJtQmFja2Ryb3BdLFxuICAgICAgLi4uc3VwZXIuZ2V0UHJveHlQcm9wZXJ0eU1hcCgpXG4gICAgfTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgaG9zdFZpZXc6IFZpZXdDb250YWluZXJSZWYsXG4gICAgcmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgICByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIEBIb3N0KCkgQE9wdGlvbmFsKCkgbm9BbmltYXRpb24/OiBOek5vQW5pbWF0aW9uRGlyZWN0aXZlLFxuICAgIG56Q29uZmlnU2VydmljZT86IE56Q29uZmlnU2VydmljZVxuICApIHtcbiAgICBzdXBlcihlbGVtZW50UmVmLCBob3N0VmlldywgcmVzb2x2ZXIsIHJlbmRlcmVyLCBub0FuaW1hdGlvbiwgbnpDb25maWdTZXJ2aWNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAb3ZlcnJpZGVcbiAgICovXG4gIHByb3RlY3RlZCBjcmVhdGVDb21wb25lbnQoKTogdm9pZCB7XG4gICAgc3VwZXIuY3JlYXRlQ29tcG9uZW50KCk7XG5cbiAgICAodGhpcy5jb21wb25lbnQgYXMgTnpQb3Bjb25maXJtQ29tcG9uZW50KS5uek9uQ2FuY2VsLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5uek9uQ2FuY2VsLmVtaXQoKTtcbiAgICB9KTtcbiAgICAodGhpcy5jb21wb25lbnQgYXMgTnpQb3Bjb25maXJtQ29tcG9uZW50KS5uek9uQ29uZmlybS5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMubnpPbkNvbmZpcm0uZW1pdCgpO1xuICAgIH0pO1xuICB9XG59XG5cbkBDb21wb25lbnQoe1xuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgc2VsZWN0b3I6ICduei1wb3Bjb25maXJtJyxcbiAgZXhwb3J0QXM6ICduelBvcGNvbmZpcm1Db21wb25lbnQnLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgYW5pbWF0aW9uczogW3pvb21CaWdNb3Rpb25dLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuZy10ZW1wbGF0ZVxuICAgICAgI292ZXJsYXk9XCJjZGtDb25uZWN0ZWRPdmVybGF5XCJcbiAgICAgIGNka0Nvbm5lY3RlZE92ZXJsYXlcbiAgICAgIG56Q29ubmVjdGVkT3ZlcmxheVxuICAgICAgW2Nka0Nvbm5lY3RlZE92ZXJsYXlIYXNCYWNrZHJvcF09XCJuekJhY2tkcm9wXCJcbiAgICAgIFtjZGtDb25uZWN0ZWRPdmVybGF5T3JpZ2luXT1cIm9yaWdpblwiXG4gICAgICAob3ZlcmxheU91dHNpZGVDbGljayk9XCJvbkNsaWNrT3V0c2lkZSgkZXZlbnQpXCJcbiAgICAgIChkZXRhY2gpPVwiaGlkZSgpXCJcbiAgICAgIChwb3NpdGlvbkNoYW5nZSk9XCJvblBvc2l0aW9uQ2hhbmdlKCRldmVudClcIlxuICAgICAgW2Nka0Nvbm5lY3RlZE92ZXJsYXlQb3NpdGlvbnNdPVwiX3Bvc2l0aW9uc1wiXG4gICAgICBbY2RrQ29ubmVjdGVkT3ZlcmxheU9wZW5dPVwiX3Zpc2libGVcIlxuICAgICAgW2Nka0Nvbm5lY3RlZE92ZXJsYXlQdXNoXT1cInRydWVcIlxuICAgID5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3M9XCJhbnQtcG9wb3ZlclwiXG4gICAgICAgIFtuZ0NsYXNzXT1cIl9jbGFzc01hcFwiXG4gICAgICAgIFtjbGFzcy5hbnQtcG9wb3Zlci1ydGxdPVwiZGlyID09PSAncnRsJ1wiXG4gICAgICAgIFtuZ1N0eWxlXT1cIm56T3ZlcmxheVN0eWxlXCJcbiAgICAgICAgW0AuZGlzYWJsZWRdPVwibm9BbmltYXRpb24/Lm56Tm9BbmltYXRpb25cIlxuICAgICAgICBbbnpOb0FuaW1hdGlvbl09XCJub0FuaW1hdGlvbj8ubnpOb0FuaW1hdGlvblwiXG4gICAgICAgIFtAem9vbUJpZ01vdGlvbl09XCInYWN0aXZlJ1wiXG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJhbnQtcG9wb3Zlci1jb250ZW50XCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImFudC1wb3BvdmVyLWFycm93XCIgKm5nSWY9XCJuelBvcGNvbmZpcm1TaG93QXJyb3dcIj48L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiYW50LXBvcG92ZXItaW5uZXJcIj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhbnQtcG9wb3Zlci1pbm5lci1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFudC1wb3BvdmVyLW1lc3NhZ2VcIj5cbiAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm56U3RyaW5nVGVtcGxhdGVPdXRsZXQ9XCJuelRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm56U3RyaW5nVGVtcGxhdGVPdXRsZXQ9XCJuekljb247IGxldCBpY29uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGkgbnotaWNvbiBbbnpUeXBlXT1cImljb24gfHwgJ2V4Y2xhbWF0aW9uLWNpcmNsZSdcIiBuelRoZW1lPVwiZmlsbFwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhbnQtcG9wb3Zlci1tZXNzYWdlLXRpdGxlXCI+e3sgbnpUaXRsZSB9fTwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFudC1wb3BvdmVyLWJ1dHRvbnNcIj5cbiAgICAgICAgICAgICAgICAgIDxidXR0b24gbnotYnV0dG9uIFtuelNpemVdPVwiJ3NtYWxsJ1wiIChjbGljayk9XCJvbkNhbmNlbCgpXCI+XG4gICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJuekNhbmNlbFRleHRcIj57eyBuekNhbmNlbFRleHQgfX08L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFuekNhbmNlbFRleHRcIj57eyAnTW9kYWwuY2FuY2VsVGV4dCcgfCBuekkxOG4gfX08L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBuei1idXR0b24gW256U2l6ZV09XCInc21hbGwnXCIgW256VHlwZV09XCJuek9rVHlwZVwiIChjbGljayk9XCJvbkNvbmZpcm0oKVwiPlxuICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwibnpPa1RleHRcIj57eyBuek9rVGV4dCB9fTwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIW56T2tUZXh0XCI+e3sgJ01vZGFsLm9rVGV4dCcgfCBuekkxOG4gfX08L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvbmctdGVtcGxhdGU+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgTnpQb3Bjb25maXJtQ29tcG9uZW50IGV4dGVuZHMgTnpUb29sVGlwQ29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgbnpDYW5jZWxUZXh0Pzogc3RyaW5nO1xuICBuekNvbmRpdGlvbiA9IGZhbHNlO1xuICBuelBvcGNvbmZpcm1TaG93QXJyb3cgPSB0cnVlO1xuICBuekljb24/OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgbnpPa1RleHQ/OiBzdHJpbmc7XG4gIG56T2tUeXBlOiBOekJ1dHRvblR5cGUgPSAncHJpbWFyeSc7XG5cbiAgcmVhZG9ubHkgbnpPbkNhbmNlbCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG4gIHJlYWRvbmx5IG56T25Db25maXJtID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcblxuICBwcm90ZWN0ZWQgX3RyaWdnZXI6IE56VG9vbHRpcFRyaWdnZXIgPSAnY2xpY2snO1xuXG4gIF9wcmVmaXggPSAnYW50LXBvcG92ZXInO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgQE9wdGlvbmFsKCkgZGlyZWN0aW9uYWxpdHk6IERpcmVjdGlvbmFsaXR5LFxuICAgIEBIb3N0KCkgQE9wdGlvbmFsKCkgcHVibGljIG5vQW5pbWF0aW9uPzogTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZVxuICApIHtcbiAgICBzdXBlcihjZHIsIGRpcmVjdGlvbmFsaXR5LCBub0FuaW1hdGlvbik7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBzdXBlci5uZ09uRGVzdHJveSgpO1xuXG4gICAgdGhpcy5uek9uQ2FuY2VsLmNvbXBsZXRlKCk7XG4gICAgdGhpcy5uek9uQ29uZmlybS5jb21wbGV0ZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBvdmVycmlkZVxuICAgKi9cbiAgc2hvdygpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMubnpDb25kaXRpb24pIHtcbiAgICAgIHN1cGVyLnNob3coKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5vbkNvbmZpcm0oKTtcbiAgICB9XG4gIH1cblxuICBvbkNhbmNlbCgpOiB2b2lkIHtcbiAgICB0aGlzLm56T25DYW5jZWwubmV4dCgpO1xuICAgIHN1cGVyLmhpZGUoKTtcbiAgfVxuXG4gIG9uQ29uZmlybSgpOiB2b2lkIHtcbiAgICB0aGlzLm56T25Db25maXJtLm5leHQoKTtcbiAgICBzdXBlci5oaWRlKCk7XG4gIH1cbn1cbiJdfQ==