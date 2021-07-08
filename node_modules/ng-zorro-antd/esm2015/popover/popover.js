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
import { isTooltipEmpty, NzTooltipBaseDirective, NzToolTipComponent } from 'ng-zorro-antd/tooltip';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from 'ng-zorro-antd/core/no-animation';
import * as ɵngcc2 from 'ng-zorro-antd/core/config';
import * as ɵngcc3 from '@angular/cdk/bidi';
import * as ɵngcc4 from '@angular/cdk/overlay';
import * as ɵngcc5 from 'ng-zorro-antd/core/overlay';
import * as ɵngcc6 from '@angular/common';
import * as ɵngcc7 from 'ng-zorro-antd/core/outlet';

function NzPopoverComponent_ng_template_0_div_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r4 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r4.nzTitle);
} }
function NzPopoverComponent_ng_template_0_div_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 9);
    ɵngcc0.ɵɵtemplate(1, NzPopoverComponent_ng_template_0_div_5_ng_container_1_Template, 2, 1, "ng-container", 8);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("nzStringTemplateOutlet", ctx_r2.nzTitle);
} }
function NzPopoverComponent_ng_template_0_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r3 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r3.nzContent);
} }
function NzPopoverComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 2);
    ɵngcc0.ɵɵelementStart(1, "div", 3);
    ɵngcc0.ɵɵelement(2, "div", 4);
    ɵngcc0.ɵɵelementStart(3, "div", 5);
    ɵngcc0.ɵɵelementStart(4, "div");
    ɵngcc0.ɵɵtemplate(5, NzPopoverComponent_ng_template_0_div_5_Template, 2, 1, "div", 6);
    ɵngcc0.ɵɵelementStart(6, "div", 7);
    ɵngcc0.ɵɵtemplate(7, NzPopoverComponent_ng_template_0_ng_container_7_Template, 2, 1, "ng-container", 8);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassProp("ant-popover-rtl", ctx_r1.dir === "rtl");
    ɵngcc0.ɵɵproperty("ngClass", ctx_r1._classMap)("ngStyle", ctx_r1.nzOverlayStyle)("@.disabled", ctx_r1.noAnimation == null ? null : ctx_r1.noAnimation.nzNoAnimation)("nzNoAnimation", ctx_r1.noAnimation == null ? null : ctx_r1.noAnimation.nzNoAnimation)("@zoomBigMotion", "active");
    ɵngcc0.ɵɵadvance(5);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r1.nzTitle);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("nzStringTemplateOutlet", ctx_r1.nzContent);
} }
const NZ_CONFIG_MODULE_NAME = 'popover';
export class NzPopoverDirective extends NzTooltipBaseDirective {
    constructor(elementRef, hostView, resolver, renderer, noAnimation, nzConfigService) {
        super(elementRef, hostView, resolver, renderer, noAnimation, nzConfigService);
        this.noAnimation = noAnimation;
        this._nzModuleName = NZ_CONFIG_MODULE_NAME;
        this.trigger = 'hover';
        this.placement = 'top';
        this.nzPopoverBackdrop = false;
        // tslint:disable-next-line:no-output-rename
        this.visibleChange = new EventEmitter();
        this.componentFactory = this.resolver.resolveComponentFactory(NzPopoverComponent);
    }
    getProxyPropertyMap() {
        return Object.assign({ nzPopoverBackdrop: ['nzBackdrop', () => this.nzPopoverBackdrop] }, super.getProxyPropertyMap());
    }
}
NzPopoverDirective.ɵfac = function NzPopoverDirective_Factory(t) { return new (t || NzPopoverDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ViewContainerRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ComponentFactoryResolver), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.NzNoAnimationDirective, 9), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.NzConfigService)); };
NzPopoverDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: NzPopoverDirective, selectors: [["", "nz-popover", ""]], hostVars: 2, hostBindings: function NzPopoverDirective_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("ant-popover-open", ctx.visible);
    } }, inputs: { trigger: ["nzPopoverTrigger", "trigger"], placement: ["nzPopoverPlacement", "placement"], nzPopoverBackdrop: "nzPopoverBackdrop", title: ["nzPopoverTitle", "title"], content: ["nzPopoverContent", "content"], directiveTitle: ["nz-popover", "directiveTitle"], origin: ["nzPopoverOrigin", "origin"], visible: ["nzPopoverVisible", "visible"], mouseEnterDelay: ["nzPopoverMouseEnterDelay", "mouseEnterDelay"], mouseLeaveDelay: ["nzPopoverMouseLeaveDelay", "mouseLeaveDelay"], overlayClassName: ["nzPopoverOverlayClassName", "overlayClassName"], overlayStyle: ["nzPopoverOverlayStyle", "overlayStyle"] }, outputs: { visibleChange: "nzPopoverVisibleChange" }, exportAs: ["nzPopover"], features: [ɵngcc0.ɵɵInheritDefinitionFeature] });
NzPopoverDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: ViewContainerRef },
    { type: ComponentFactoryResolver },
    { type: Renderer2 },
    { type: NzNoAnimationDirective, decorators: [{ type: Host }, { type: Optional }] },
    { type: NzConfigService }
];
NzPopoverDirective.propDecorators = {
    title: [{ type: Input, args: ['nzPopoverTitle',] }],
    content: [{ type: Input, args: ['nzPopoverContent',] }],
    directiveTitle: [{ type: Input, args: ['nz-popover',] }],
    trigger: [{ type: Input, args: ['nzPopoverTrigger',] }],
    placement: [{ type: Input, args: ['nzPopoverPlacement',] }],
    origin: [{ type: Input, args: ['nzPopoverOrigin',] }],
    visible: [{ type: Input, args: ['nzPopoverVisible',] }],
    mouseEnterDelay: [{ type: Input, args: ['nzPopoverMouseEnterDelay',] }],
    mouseLeaveDelay: [{ type: Input, args: ['nzPopoverMouseLeaveDelay',] }],
    overlayClassName: [{ type: Input, args: ['nzPopoverOverlayClassName',] }],
    overlayStyle: [{ type: Input, args: ['nzPopoverOverlayStyle',] }],
    nzPopoverBackdrop: [{ type: Input }],
    visibleChange: [{ type: Output, args: ['nzPopoverVisibleChange',] }]
};
__decorate([
    WithConfig(),
    __metadata("design:type", Boolean)
], NzPopoverDirective.prototype, "nzPopoverBackdrop", void 0);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzPopoverDirective, [{
        type: Directive,
        args: [{
                selector: '[nz-popover]',
                exportAs: 'nzPopover',
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
            args: ['nzPopoverTrigger']
        }], placement: [{
            type: Input,
            args: ['nzPopoverPlacement']
        }], nzPopoverBackdrop: [{
            type: Input
        }], visibleChange: [{
            type: Output,
            args: ['nzPopoverVisibleChange']
        }], title: [{
            type: Input,
            args: ['nzPopoverTitle']
        }], content: [{
            type: Input,
            args: ['nzPopoverContent']
        }], directiveTitle: [{
            type: Input,
            args: ['nz-popover']
        }], origin: [{
            type: Input,
            args: ['nzPopoverOrigin']
        }], visible: [{
            type: Input,
            args: ['nzPopoverVisible']
        }], mouseEnterDelay: [{
            type: Input,
            args: ['nzPopoverMouseEnterDelay']
        }], mouseLeaveDelay: [{
            type: Input,
            args: ['nzPopoverMouseLeaveDelay']
        }], overlayClassName: [{
            type: Input,
            args: ['nzPopoverOverlayClassName']
        }], overlayStyle: [{
            type: Input,
            args: ['nzPopoverOverlayStyle']
        }] }); })();
export class NzPopoverComponent extends NzToolTipComponent {
    constructor(cdr, directionality, noAnimation) {
        super(cdr, directionality, noAnimation);
        this.noAnimation = noAnimation;
        this._prefix = 'ant-popover';
    }
    get hasBackdrop() {
        return this.nzTrigger === 'click' ? this.nzBackdrop : false;
    }
    isEmpty() {
        return isTooltipEmpty(this.nzTitle) && isTooltipEmpty(this.nzContent);
    }
}
NzPopoverComponent.ɵfac = function NzPopoverComponent_Factory(t) { return new (t || NzPopoverComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc3.Directionality, 8), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.NzNoAnimationDirective, 9)); };
NzPopoverComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzPopoverComponent, selectors: [["nz-popover"]], exportAs: ["nzPopoverComponent"], features: [ɵngcc0.ɵɵInheritDefinitionFeature], decls: 2, vars: 5, consts: [["cdkConnectedOverlay", "", "nzConnectedOverlay", "", 3, "cdkConnectedOverlayHasBackdrop", "cdkConnectedOverlayOrigin", "cdkConnectedOverlayPositions", "cdkConnectedOverlayOpen", "cdkConnectedOverlayPush", "overlayOutsideClick", "detach", "positionChange"], ["overlay", "cdkConnectedOverlay"], [1, "ant-popover", 3, "ngClass", "ngStyle", "nzNoAnimation"], [1, "ant-popover-content"], [1, "ant-popover-arrow"], ["role", "tooltip", 1, "ant-popover-inner"], ["class", "ant-popover-title", 4, "ngIf"], [1, "ant-popover-inner-content"], [4, "nzStringTemplateOutlet"], [1, "ant-popover-title"]], template: function NzPopoverComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, NzPopoverComponent_ng_template_0_Template, 8, 9, "ng-template", 0, 1, ɵngcc0.ɵɵtemplateRefExtractor);
        ɵngcc0.ɵɵlistener("overlayOutsideClick", function NzPopoverComponent_Template_ng_template_overlayOutsideClick_0_listener($event) { return ctx.onClickOutside($event); })("detach", function NzPopoverComponent_Template_ng_template_detach_0_listener() { return ctx.hide(); })("positionChange", function NzPopoverComponent_Template_ng_template_positionChange_0_listener($event) { return ctx.onPositionChange($event); });
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("cdkConnectedOverlayHasBackdrop", ctx.hasBackdrop)("cdkConnectedOverlayOrigin", ctx.origin)("cdkConnectedOverlayPositions", ctx._positions)("cdkConnectedOverlayOpen", ctx._visible)("cdkConnectedOverlayPush", true);
    } }, directives: [ɵngcc4.CdkConnectedOverlay, ɵngcc5.NzConnectedOverlayDirective, ɵngcc6.NgClass, ɵngcc6.NgStyle, ɵngcc1.NzNoAnimationDirective, ɵngcc6.NgIf, ɵngcc7.NzStringTemplateOutletDirective], encapsulation: 2, data: { animation: [zoomBigMotion] }, changeDetection: 0 });
NzPopoverComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: Directionality, decorators: [{ type: Optional }] },
    { type: NzNoAnimationDirective, decorators: [{ type: Host }, { type: Optional }] }
];
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzPopoverComponent, [{
        type: Component,
        args: [{
                selector: 'nz-popover',
                exportAs: 'nzPopoverComponent',
                animations: [zoomBigMotion],
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                preserveWhitespaces: false,
                template: `
    <ng-template
      #overlay="cdkConnectedOverlay"
      cdkConnectedOverlay
      nzConnectedOverlay
      [cdkConnectedOverlayHasBackdrop]="hasBackdrop"
      [cdkConnectedOverlayOrigin]="origin"
      [cdkConnectedOverlayPositions]="_positions"
      [cdkConnectedOverlayOpen]="_visible"
      [cdkConnectedOverlayPush]="true"
      (overlayOutsideClick)="onClickOutside($event)"
      (detach)="hide()"
      (positionChange)="onPositionChange($event)"
    >
      <div
        class="ant-popover"
        [class.ant-popover-rtl]="dir === 'rtl'"
        [ngClass]="_classMap"
        [ngStyle]="nzOverlayStyle"
        [@.disabled]="noAnimation?.nzNoAnimation"
        [nzNoAnimation]="noAnimation?.nzNoAnimation"
        [@zoomBigMotion]="'active'"
      >
        <div class="ant-popover-content">
          <div class="ant-popover-arrow"></div>
          <div class="ant-popover-inner" role="tooltip">
            <div>
              <div class="ant-popover-title" *ngIf="nzTitle">
                <ng-container *nzStringTemplateOutlet="nzTitle">{{ nzTitle }}</ng-container>
              </div>
              <div class="ant-popover-inner-content">
                <ng-container *nzStringTemplateOutlet="nzContent">{{ nzContent }}</ng-container>
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wb3Zlci5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vY29tcG9uZW50cy9wb3BvdmVyL3BvcG92ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ25ELE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFFVCx3QkFBd0IsRUFDeEIsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osSUFBSSxFQUNKLEtBQUssRUFDTCxRQUFRLEVBQ1IsTUFBTSxFQUNOLFNBQVMsRUFDVCxnQkFBZ0IsRUFDaEIsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUM3RCxPQUFPLEVBQWUsZUFBZSxFQUFFLFVBQVUsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3JGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBRXpFLE9BQU8sRUFBRSxjQUFjLEVBQUUsc0JBQXNCLEVBQUUsa0JBQWtCLEVBQXFDLE1BQU0sdUJBQXVCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV0SSxNQUFNLHFCQUFxQixHQUFnQixTQUFTLENBQUM7QUFTckQsTUFBTSxPQUFPLGtCQUFtQixTQUFRLHNCQUFzQjtBQUM5RCxJQTJCRSxZQUNFLFVBQXNCLEVBQ3RCLFFBQTBCLEVBQzFCLFFBQWtDLEVBQ2xDLFFBQW1CLEVBQ1EsV0FBb0MsRUFDL0QsZUFBaUM7QUFDbEMsUUFDQyxLQUFLLENBQUMsVUFBVSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxlQUFlLENBQUMsQ0FBQztBQUNsRixRQUorQixnQkFBVyxHQUFYLFdBQVcs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QUFDLElBQUksa0JBQ3JDLG1CQUFtQixFQUFFLEtBQUssa0JBQzFCLFFBQVEsRUFBRTs7Ozs2QkFzQ1QsY0FDRjt5UkFDSTtBQUFDO0FBQTRDLFlBckhoRCxpQkFBaUI7QUFDakIsWUFKTyxjQUFjLHVCQTZIbEIsUUFBUTtBQUFPLFlBekdYLHNCQUFzQix1QkEwRzFCLElBQUksWUFBSSxRQUFRO0FBQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUFFO0FBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBEaXJlY3Rpb25hbGl0eSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9iaWRpJztcbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBDb21wb25lbnRGYWN0b3J5LFxuICBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gIERpcmVjdGl2ZSxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBIb3N0LFxuICBJbnB1dCxcbiAgT3B0aW9uYWwsXG4gIE91dHB1dCxcbiAgUmVuZGVyZXIyLFxuICBWaWV3Q29udGFpbmVyUmVmLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHpvb21CaWdNb3Rpb24gfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvYW5pbWF0aW9uJztcbmltcG9ydCB7IE56Q29uZmlnS2V5LCBOekNvbmZpZ1NlcnZpY2UsIFdpdGhDb25maWcgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvY29uZmlnJztcbmltcG9ydCB7IE56Tm9BbmltYXRpb25EaXJlY3RpdmUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvbm8tYW5pbWF0aW9uJztcbmltcG9ydCB7IE5nU3R5bGVJbnRlcmZhY2UsIE56VFNUeXBlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcbmltcG9ydCB7IGlzVG9vbHRpcEVtcHR5LCBOelRvb2x0aXBCYXNlRGlyZWN0aXZlLCBOelRvb2xUaXBDb21wb25lbnQsIE56VG9vbHRpcFRyaWdnZXIsIFByb3BlcnR5TWFwcGluZyB9IGZyb20gJ25nLXpvcnJvLWFudGQvdG9vbHRpcCc7XG5cbmNvbnN0IE5aX0NPTkZJR19NT0RVTEVfTkFNRTogTnpDb25maWdLZXkgPSAncG9wb3Zlcic7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tuei1wb3BvdmVyXScsXG4gIGV4cG9ydEFzOiAnbnpQb3BvdmVyJyxcbiAgaG9zdDoge1xuICAgICdbY2xhc3MuYW50LXBvcG92ZXItb3Blbl0nOiAndmlzaWJsZSdcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBOelBvcG92ZXJEaXJlY3RpdmUgZXh0ZW5kcyBOelRvb2x0aXBCYXNlRGlyZWN0aXZlIHtcbiAgcmVhZG9ubHkgX256TW9kdWxlTmFtZTogTnpDb25maWdLZXkgPSBOWl9DT05GSUdfTU9EVUxFX05BTUU7XG5cbiAgQElucHV0KCduelBvcG92ZXJUaXRsZScpIHRpdGxlPzogTnpUU1R5cGU7XG4gIEBJbnB1dCgnbnpQb3BvdmVyQ29udGVudCcpIGNvbnRlbnQ/OiBOelRTVHlwZTtcbiAgQElucHV0KCduei1wb3BvdmVyJykgZGlyZWN0aXZlVGl0bGU/OiBOelRTVHlwZSB8IG51bGw7XG4gIEBJbnB1dCgnbnpQb3BvdmVyVHJpZ2dlcicpIHRyaWdnZXI/OiBOelRvb2x0aXBUcmlnZ2VyID0gJ2hvdmVyJztcbiAgQElucHV0KCduelBvcG92ZXJQbGFjZW1lbnQnKSBwbGFjZW1lbnQ/OiBzdHJpbmcgfCBzdHJpbmdbXSA9ICd0b3AnO1xuICBASW5wdXQoJ256UG9wb3Zlck9yaWdpbicpIG9yaWdpbj86IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+O1xuICBASW5wdXQoJ256UG9wb3ZlclZpc2libGUnKSB2aXNpYmxlPzogYm9vbGVhbjtcbiAgQElucHV0KCduelBvcG92ZXJNb3VzZUVudGVyRGVsYXknKSBtb3VzZUVudGVyRGVsYXk/OiBudW1iZXI7XG4gIEBJbnB1dCgnbnpQb3BvdmVyTW91c2VMZWF2ZURlbGF5JykgbW91c2VMZWF2ZURlbGF5PzogbnVtYmVyO1xuICBASW5wdXQoJ256UG9wb3Zlck92ZXJsYXlDbGFzc05hbWUnKSBvdmVybGF5Q2xhc3NOYW1lPzogc3RyaW5nO1xuICBASW5wdXQoJ256UG9wb3Zlck92ZXJsYXlTdHlsZScpIG92ZXJsYXlTdHlsZT86IE5nU3R5bGVJbnRlcmZhY2U7XG4gIEBJbnB1dCgpIEBXaXRoQ29uZmlnKCkgbnpQb3BvdmVyQmFja2Ryb3A/OiBib29sZWFuID0gZmFsc2U7XG5cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLW91dHB1dC1yZW5hbWVcbiAgQE91dHB1dCgnbnpQb3BvdmVyVmlzaWJsZUNoYW5nZScpIHJlYWRvbmx5IHZpc2libGVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG5cbiAgY29tcG9uZW50RmFjdG9yeTogQ29tcG9uZW50RmFjdG9yeTxOelBvcG92ZXJDb21wb25lbnQ+ID0gdGhpcy5yZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShOelBvcG92ZXJDb21wb25lbnQpO1xuXG4gIHByb3RlY3RlZCBnZXRQcm94eVByb3BlcnR5TWFwKCk6IFByb3BlcnR5TWFwcGluZyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG56UG9wb3ZlckJhY2tkcm9wOiBbJ256QmFja2Ryb3AnLCAoKSA9PiB0aGlzLm56UG9wb3ZlckJhY2tkcm9wXSxcbiAgICAgIC4uLnN1cGVyLmdldFByb3h5UHJvcGVydHlNYXAoKVxuICAgIH07XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIGhvc3RWaWV3OiBWaWV3Q29udGFpbmVyUmVmLFxuICAgIHJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gICAgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBASG9zdCgpIEBPcHRpb25hbCgpIHB1YmxpYyBub0FuaW1hdGlvbj86IE56Tm9BbmltYXRpb25EaXJlY3RpdmUsXG4gICAgbnpDb25maWdTZXJ2aWNlPzogTnpDb25maWdTZXJ2aWNlXG4gICkge1xuICAgIHN1cGVyKGVsZW1lbnRSZWYsIGhvc3RWaWV3LCByZXNvbHZlciwgcmVuZGVyZXIsIG5vQW5pbWF0aW9uLCBuekNvbmZpZ1NlcnZpY2UpO1xuICB9XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ256LXBvcG92ZXInLFxuICBleHBvcnRBczogJ256UG9wb3ZlckNvbXBvbmVudCcsXG4gIGFuaW1hdGlvbnM6IFt6b29tQmlnTW90aW9uXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuZy10ZW1wbGF0ZVxuICAgICAgI292ZXJsYXk9XCJjZGtDb25uZWN0ZWRPdmVybGF5XCJcbiAgICAgIGNka0Nvbm5lY3RlZE92ZXJsYXlcbiAgICAgIG56Q29ubmVjdGVkT3ZlcmxheVxuICAgICAgW2Nka0Nvbm5lY3RlZE92ZXJsYXlIYXNCYWNrZHJvcF09XCJoYXNCYWNrZHJvcFwiXG4gICAgICBbY2RrQ29ubmVjdGVkT3ZlcmxheU9yaWdpbl09XCJvcmlnaW5cIlxuICAgICAgW2Nka0Nvbm5lY3RlZE92ZXJsYXlQb3NpdGlvbnNdPVwiX3Bvc2l0aW9uc1wiXG4gICAgICBbY2RrQ29ubmVjdGVkT3ZlcmxheU9wZW5dPVwiX3Zpc2libGVcIlxuICAgICAgW2Nka0Nvbm5lY3RlZE92ZXJsYXlQdXNoXT1cInRydWVcIlxuICAgICAgKG92ZXJsYXlPdXRzaWRlQ2xpY2spPVwib25DbGlja091dHNpZGUoJGV2ZW50KVwiXG4gICAgICAoZGV0YWNoKT1cImhpZGUoKVwiXG4gICAgICAocG9zaXRpb25DaGFuZ2UpPVwib25Qb3NpdGlvbkNoYW5nZSgkZXZlbnQpXCJcbiAgICA+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzPVwiYW50LXBvcG92ZXJcIlxuICAgICAgICBbY2xhc3MuYW50LXBvcG92ZXItcnRsXT1cImRpciA9PT0gJ3J0bCdcIlxuICAgICAgICBbbmdDbGFzc109XCJfY2xhc3NNYXBcIlxuICAgICAgICBbbmdTdHlsZV09XCJuek92ZXJsYXlTdHlsZVwiXG4gICAgICAgIFtALmRpc2FibGVkXT1cIm5vQW5pbWF0aW9uPy5uek5vQW5pbWF0aW9uXCJcbiAgICAgICAgW256Tm9BbmltYXRpb25dPVwibm9BbmltYXRpb24/Lm56Tm9BbmltYXRpb25cIlxuICAgICAgICBbQHpvb21CaWdNb3Rpb25dPVwiJ2FjdGl2ZSdcIlxuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiYW50LXBvcG92ZXItY29udGVudFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJhbnQtcG9wb3Zlci1hcnJvd1wiPjwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJhbnQtcG9wb3Zlci1pbm5lclwiIHJvbGU9XCJ0b29sdGlwXCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYW50LXBvcG92ZXItdGl0bGVcIiAqbmdJZj1cIm56VGl0bGVcIj5cbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuelN0cmluZ1RlbXBsYXRlT3V0bGV0PVwibnpUaXRsZVwiPnt7IG56VGl0bGUgfX08L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhbnQtcG9wb3Zlci1pbm5lci1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbnpTdHJpbmdUZW1wbGF0ZU91dGxldD1cIm56Q29udGVudFwiPnt7IG56Q29udGVudCB9fTwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvbmctdGVtcGxhdGU+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgTnpQb3BvdmVyQ29tcG9uZW50IGV4dGVuZHMgTnpUb29sVGlwQ29tcG9uZW50IHtcbiAgX3ByZWZpeCA9ICdhbnQtcG9wb3Zlcic7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBAT3B0aW9uYWwoKSBkaXJlY3Rpb25hbGl0eTogRGlyZWN0aW9uYWxpdHksXG4gICAgQEhvc3QoKSBAT3B0aW9uYWwoKSBwdWJsaWMgbm9BbmltYXRpb24/OiBOek5vQW5pbWF0aW9uRGlyZWN0aXZlXG4gICkge1xuICAgIHN1cGVyKGNkciwgZGlyZWN0aW9uYWxpdHksIG5vQW5pbWF0aW9uKTtcbiAgfVxuXG4gIGdldCBoYXNCYWNrZHJvcCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5uelRyaWdnZXIgPT09ICdjbGljaycgPyB0aGlzLm56QmFja2Ryb3AgOiBmYWxzZTtcbiAgfVxuXG4gIHByb3RlY3RlZCBpc0VtcHR5KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBpc1Rvb2x0aXBFbXB0eSh0aGlzLm56VGl0bGUpICYmIGlzVG9vbHRpcEVtcHR5KHRoaXMubnpDb250ZW50KTtcbiAgfVxufVxuIl19