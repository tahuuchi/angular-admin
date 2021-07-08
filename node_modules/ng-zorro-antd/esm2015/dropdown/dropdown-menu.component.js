/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Directionality } from '@angular/cdk/bidi';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Host, Optional, Renderer2, TemplateRef, ViewChild, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { slideMotion } from 'ng-zorro-antd/core/animation';
import { NzNoAnimationDirective } from 'ng-zorro-antd/core/no-animation';
import { MenuService, NzIsMenuInsideDropDownToken } from 'ng-zorro-antd/menu';
import { BehaviorSubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from 'ng-zorro-antd/menu';
import * as ɵngcc2 from '@angular/cdk/bidi';
import * as ɵngcc3 from 'ng-zorro-antd/core/no-animation';
import * as ɵngcc4 from '@angular/common';

function NzDropdownMenuComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    const _r2 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 0);
    ɵngcc0.ɵɵlistener("@slideMotion.done", function NzDropdownMenuComponent_ng_template_0_Template_div_animation_slideMotion_done_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r2); const ctx_r1 = ɵngcc0.ɵɵnextContext(); return ctx_r1.onAnimationEvent($event); })("mouseenter", function NzDropdownMenuComponent_ng_template_0_Template_div_mouseenter_0_listener() { ɵngcc0.ɵɵrestoreView(_r2); const ctx_r3 = ɵngcc0.ɵɵnextContext(); return ctx_r3.setMouseState(true); })("mouseleave", function NzDropdownMenuComponent_ng_template_0_Template_div_mouseleave_0_listener() { ɵngcc0.ɵɵrestoreView(_r2); const ctx_r4 = ɵngcc0.ɵɵnextContext(); return ctx_r4.setMouseState(false); });
    ɵngcc0.ɵɵprojection(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassProp("ant-dropdown-rtl", ctx_r0.dir === "rtl");
    ɵngcc0.ɵɵproperty("ngClass", ctx_r0.nzOverlayClassName)("ngStyle", ctx_r0.nzOverlayStyle)("@slideMotion", undefined)("@.disabled", ctx_r0.noAnimation == null ? null : ctx_r0.noAnimation.nzNoAnimation)("nzNoAnimation", ctx_r0.noAnimation == null ? null : ctx_r0.noAnimation.nzNoAnimation);
} }
const _c0 = ["*"];
export class NzDropdownMenuComponent {
    constructor(cdr, elementRef, renderer, viewContainerRef, nzMenuService, directionality, noAnimation) {
        this.cdr = cdr;
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.viewContainerRef = viewContainerRef;
        this.nzMenuService = nzMenuService;
        this.directionality = directionality;
        this.noAnimation = noAnimation;
        this.mouseState$ = new BehaviorSubject(false);
        this.isChildSubMenuOpen$ = this.nzMenuService.isChildSubMenuOpen$;
        this.descendantMenuItemClick$ = this.nzMenuService.descendantMenuItemClick$;
        this.animationStateChange$ = new EventEmitter();
        this.nzOverlayClassName = '';
        this.nzOverlayStyle = {};
        this.dir = 'ltr';
        this.destroy$ = new Subject();
    }
    onAnimationEvent(event) {
        this.animationStateChange$.emit(event);
    }
    setMouseState(visible) {
        this.mouseState$.next(visible);
    }
    setValue(key, value) {
        this[key] = value;
        this.cdr.markForCheck();
    }
    ngOnInit() {
        var _a;
        (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
            this.dir = direction;
            this.cdr.detectChanges();
        });
        this.dir = this.directionality.value;
    }
    ngAfterContentInit() {
        this.renderer.removeChild(this.renderer.parentNode(this.elementRef.nativeElement), this.elementRef.nativeElement);
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
NzDropdownMenuComponent.ɵfac = function NzDropdownMenuComponent_Factory(t) { return new (t || NzDropdownMenuComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ViewContainerRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.MenuService), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.Directionality, 8), ɵngcc0.ɵɵdirectiveInject(ɵngcc3.NzNoAnimationDirective, 9)); };
NzDropdownMenuComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzDropdownMenuComponent, selectors: [["nz-dropdown-menu"]], viewQuery: function NzDropdownMenuComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵstaticViewQuery(TemplateRef, true);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.templateRef = _t.first);
    } }, exportAs: ["nzDropdownMenu"], features: [ɵngcc0.ɵɵProvidersFeature([
            MenuService,
            /** menu is inside dropdown-menu component **/
            {
                provide: NzIsMenuInsideDropDownToken,
                useValue: true
            }
        ])], ngContentSelectors: _c0, decls: 1, vars: 0, consts: [[1, "ant-dropdown", 3, "ngClass", "ngStyle", "nzNoAnimation", "mouseenter", "mouseleave"]], template: function NzDropdownMenuComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵtemplate(0, NzDropdownMenuComponent_ng_template_0_Template, 2, 7, "ng-template");
    } }, directives: [ɵngcc4.NgClass, ɵngcc4.NgStyle, ɵngcc3.NzNoAnimationDirective], encapsulation: 2, data: { animation: [slideMotion] }, changeDetection: 0 });
NzDropdownMenuComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: Renderer2 },
    { type: ViewContainerRef },
    { type: MenuService },
    { type: Directionality, decorators: [{ type: Optional }] },
    { type: NzNoAnimationDirective, decorators: [{ type: Host }, { type: Optional }] }
];
NzDropdownMenuComponent.propDecorators = {
    templateRef: [{ type: ViewChild, args: [TemplateRef, { static: true },] }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzDropdownMenuComponent, [{
        type: Component,
        args: [{
                selector: `nz-dropdown-menu`,
                exportAs: `nzDropdownMenu`,
                animations: [slideMotion],
                providers: [
                    MenuService,
                    /** menu is inside dropdown-menu component **/
                    {
                        provide: NzIsMenuInsideDropDownToken,
                        useValue: true
                    }
                ],
                template: `
    <ng-template>
      <div
        class="ant-dropdown"
        [class.ant-dropdown-rtl]="dir === 'rtl'"
        [ngClass]="nzOverlayClassName"
        [ngStyle]="nzOverlayStyle"
        @slideMotion
        (@slideMotion.done)="onAnimationEvent($event)"
        [@.disabled]="noAnimation?.nzNoAnimation"
        [nzNoAnimation]="noAnimation?.nzNoAnimation"
        (mouseenter)="setMouseState(true)"
        (mouseleave)="setMouseState(false)"
      >
        <ng-content></ng-content>
      </div>
    </ng-template>
  `,
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc0.ElementRef }, { type: ɵngcc0.Renderer2 }, { type: ɵngcc0.ViewContainerRef }, { type: ɵngcc1.MenuService }, { type: ɵngcc2.Directionality, decorators: [{
                type: Optional
            }] }, { type: ɵngcc3.NzNoAnimationDirective, decorators: [{
                type: Host
            }, {
                type: Optional
            }] }]; }, { templateRef: [{
            type: ViewChild,
            args: [TemplateRef, { static: true }]
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24tbWVudS5jb21wb25lbnQuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NvbXBvbmVudHMvZHJvcGRvd24vZHJvcGRvd24tbWVudS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUdILE9BQU8sRUFBYSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUM5RCxPQUFPLEVBRUwsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixJQUFJLEVBR0osUUFBUSxFQUNSLFNBQVMsRUFDVCxXQUFXLEVBQ1gsU0FBUyxFQUNULGdCQUFnQixFQUNoQixpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQzNELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBRXpFLE9BQU8sRUFBRSxXQUFXLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUM5RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNoRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFzQzNDLE1BQU0sT0FBTyx1QkFBdUI7QUFBRyxJQXlCckMsWUFDVSxHQUFzQixFQUN0QixVQUFzQixFQUN0QixRQUFtQixFQUNwQixnQkFBa0MsRUFDbEMsYUFBMEIsRUFDYixjQUE4QixFQUN2QixXQUFvQztBQUNoRSxRQVBTLFFBQUcsR0FBSCxHQUFHLENBQW1CO0FBQUMsUUFDdkIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtBQUFDLFFBQ3ZCLGFBQVEsR0FBUixRQUFRLENBQVc7QUFBQyxRQUNyQixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO0FBQUMsUUFDbkMsa0JBQWEsR0FBYixh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QUNULFlBRUEsZ0JBQWdCO0FBQ2hCLFlBS08sV0FBVztBQUFJLFlBckJKLGNBQWMsdUJBNEY3QixRQUFRO0FBQU8sWUF6RVgsc0JBQXNCLHVCQTBFMUIsSUFBSSxZQUFJLFFBQVE7QUFBTTtBQUFHO0FBQ3pCLDBCQTFCRixTQUFTLFNBQUMsV0FBVyxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtBQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQUFFO0FBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBBbmltYXRpb25FdmVudCB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHsgRGlyZWN0aW9uLCBEaXJlY3Rpb25hbGl0eSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9iaWRpJztcbmltcG9ydCB7XG4gIEFmdGVyQ29udGVudEluaXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIEhvc3QsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPcHRpb25hbCxcbiAgUmVuZGVyZXIyLFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0NoaWxkLFxuICBWaWV3Q29udGFpbmVyUmVmLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHNsaWRlTW90aW9uIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL2FuaW1hdGlvbic7XG5pbXBvcnQgeyBOek5vQW5pbWF0aW9uRGlyZWN0aXZlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL25vLWFuaW1hdGlvbic7XG5pbXBvcnQgeyBJbmRleGFibGVPYmplY3QsIE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5pbXBvcnQgeyBNZW51U2VydmljZSwgTnpJc01lbnVJbnNpZGVEcm9wRG93blRva2VuIH0gZnJvbSAnbmctem9ycm8tYW50ZC9tZW51JztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5leHBvcnQgdHlwZSBOelBsYWNlbWVudFR5cGUgPSAnYm90dG9tTGVmdCcgfCAnYm90dG9tQ2VudGVyJyB8ICdib3R0b21SaWdodCcgfCAndG9wTGVmdCcgfCAndG9wQ2VudGVyJyB8ICd0b3BSaWdodCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogYG56LWRyb3Bkb3duLW1lbnVgLFxuICBleHBvcnRBczogYG56RHJvcGRvd25NZW51YCxcbiAgYW5pbWF0aW9uczogW3NsaWRlTW90aW9uXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgTWVudVNlcnZpY2UsXG4gICAgLyoqIG1lbnUgaXMgaW5zaWRlIGRyb3Bkb3duLW1lbnUgY29tcG9uZW50ICoqL1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IE56SXNNZW51SW5zaWRlRHJvcERvd25Ub2tlbixcbiAgICAgIHVzZVZhbHVlOiB0cnVlXG4gICAgfVxuICBdLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuZy10ZW1wbGF0ZT5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3M9XCJhbnQtZHJvcGRvd25cIlxuICAgICAgICBbY2xhc3MuYW50LWRyb3Bkb3duLXJ0bF09XCJkaXIgPT09ICdydGwnXCJcbiAgICAgICAgW25nQ2xhc3NdPVwibnpPdmVybGF5Q2xhc3NOYW1lXCJcbiAgICAgICAgW25nU3R5bGVdPVwibnpPdmVybGF5U3R5bGVcIlxuICAgICAgICBAc2xpZGVNb3Rpb25cbiAgICAgICAgKEBzbGlkZU1vdGlvbi5kb25lKT1cIm9uQW5pbWF0aW9uRXZlbnQoJGV2ZW50KVwiXG4gICAgICAgIFtALmRpc2FibGVkXT1cIm5vQW5pbWF0aW9uPy5uek5vQW5pbWF0aW9uXCJcbiAgICAgICAgW256Tm9BbmltYXRpb25dPVwibm9BbmltYXRpb24/Lm56Tm9BbmltYXRpb25cIlxuICAgICAgICAobW91c2VlbnRlcik9XCJzZXRNb3VzZVN0YXRlKHRydWUpXCJcbiAgICAgICAgKG1vdXNlbGVhdmUpPVwic2V0TW91c2VTdGF0ZShmYWxzZSlcIlxuICAgICAgPlxuICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgICA8L2Rpdj5cbiAgICA8L25nLXRlbXBsYXRlPlxuICBgLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgTnpEcm9wZG93bk1lbnVDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0LCBPbkRlc3Ryb3ksIE9uSW5pdCB7XG4gIG1vdXNlU3RhdGUkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPihmYWxzZSk7XG4gIGlzQ2hpbGRTdWJNZW51T3BlbiQgPSB0aGlzLm56TWVudVNlcnZpY2UuaXNDaGlsZFN1Yk1lbnVPcGVuJDtcbiAgZGVzY2VuZGFudE1lbnVJdGVtQ2xpY2skID0gdGhpcy5uek1lbnVTZXJ2aWNlLmRlc2NlbmRhbnRNZW51SXRlbUNsaWNrJDtcbiAgYW5pbWF0aW9uU3RhdGVDaGFuZ2UkID0gbmV3IEV2ZW50RW1pdHRlcjxBbmltYXRpb25FdmVudD4oKTtcbiAgbnpPdmVybGF5Q2xhc3NOYW1lOiBzdHJpbmcgPSAnJztcbiAgbnpPdmVybGF5U3R5bGU6IEluZGV4YWJsZU9iamVjdCA9IHt9O1xuICBAVmlld0NoaWxkKFRlbXBsYXRlUmVmLCB7IHN0YXRpYzogdHJ1ZSB9KSB0ZW1wbGF0ZVJlZiE6IFRlbXBsYXRlUmVmPE56U2FmZUFueT47XG5cbiAgZGlyOiBEaXJlY3Rpb24gPSAnbHRyJztcbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG5cbiAgb25BbmltYXRpb25FdmVudChldmVudDogQW5pbWF0aW9uRXZlbnQpOiB2b2lkIHtcbiAgICB0aGlzLmFuaW1hdGlvblN0YXRlQ2hhbmdlJC5lbWl0KGV2ZW50KTtcbiAgfVxuXG4gIHNldE1vdXNlU3RhdGUodmlzaWJsZTogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMubW91c2VTdGF0ZSQubmV4dCh2aXNpYmxlKTtcbiAgfVxuXG4gIHNldFZhbHVlPFQgZXh0ZW5kcyBrZXlvZiBOekRyb3Bkb3duTWVudUNvbXBvbmVudD4oa2V5OiBULCB2YWx1ZTogdGhpc1tUXSk6IHZvaWQge1xuICAgIHRoaXNba2V5XSA9IHZhbHVlO1xuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHVibGljIHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYsXG4gICAgcHVibGljIG56TWVudVNlcnZpY2U6IE1lbnVTZXJ2aWNlLFxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgZGlyZWN0aW9uYWxpdHk6IERpcmVjdGlvbmFsaXR5LFxuICAgIEBIb3N0KCkgQE9wdGlvbmFsKCkgcHVibGljIG5vQW5pbWF0aW9uPzogTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZVxuICApIHt9XG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuZGlyZWN0aW9uYWxpdHkuY2hhbmdlPy5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKChkaXJlY3Rpb246IERpcmVjdGlvbikgPT4ge1xuICAgICAgdGhpcy5kaXIgPSBkaXJlY3Rpb247XG4gICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmRpciA9IHRoaXMuZGlyZWN0aW9uYWxpdHkudmFsdWU7XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDaGlsZCh0aGlzLnJlbmRlcmVyLnBhcmVudE5vZGUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpLCB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XG4gIH1cbn1cbiJdfQ==