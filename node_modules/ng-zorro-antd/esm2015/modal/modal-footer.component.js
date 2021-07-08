/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { isPromise } from 'ng-zorro-antd/core/util';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { NzI18nService } from 'ng-zorro-antd/i18n';
import { NzModalRef } from './modal-ref';
import { ModalOptions } from './modal-types';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from 'ng-zorro-antd/i18n';
import * as ɵngcc2 from './modal-types';
import * as ɵngcc3 from '@angular/common';
import * as ɵngcc4 from 'ng-zorro-antd/core/outlet';
import * as ɵngcc5 from 'ng-zorro-antd/button';
import * as ɵngcc6 from 'ng-zorro-antd/core/wave';
import * as ɵngcc7 from 'ng-zorro-antd/core/transition-patch';

const _c0 = ["nz-modal-footer", ""];
function NzModalFooterComponent_ng_container_0_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "div", 5);
} if (rf & 2) {
    const ctx_r4 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵproperty("innerHTML", ctx_r4.config.nzFooter, ɵngcc0.ɵɵsanitizeHtml);
} }
function NzModalFooterComponent_ng_container_0_ng_container_1_ng_container_2_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r9 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 7);
    ɵngcc0.ɵɵlistener("click", function NzModalFooterComponent_ng_container_0_ng_container_1_ng_container_2_button_1_Template_button_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r9); const button_r7 = ctx.$implicit; const ctx_r8 = ɵngcc0.ɵɵnextContext(4); return ctx_r8.onButtonClick(button_r7); });
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const button_r7 = ctx.$implicit;
    const ctx_r6 = ɵngcc0.ɵɵnextContext(4);
    ɵngcc0.ɵɵproperty("hidden", !ctx_r6.getButtonCallableProp(button_r7, "show"))("nzLoading", ctx_r6.getButtonCallableProp(button_r7, "loading"))("disabled", ctx_r6.getButtonCallableProp(button_r7, "disabled"))("nzType", button_r7.type)("nzDanger", button_r7.danger)("nzShape", button_r7.shape)("nzSize", button_r7.size)("nzGhost", button_r7.ghost);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", button_r7.label, " ");
} }
function NzModalFooterComponent_ng_container_0_ng_container_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, NzModalFooterComponent_ng_container_0_ng_container_1_ng_container_2_button_1_Template, 2, 9, "button", 6);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r5 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r5.buttons);
} }
function NzModalFooterComponent_ng_container_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, NzModalFooterComponent_ng_container_0_ng_container_1_div_1_Template, 1, 1, "div", 3);
    ɵngcc0.ɵɵtemplate(2, NzModalFooterComponent_ng_container_0_ng_container_1_ng_container_2_Template, 2, 1, "ng-container", 4);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r3 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r3.buttonsFooter);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r3.buttonsFooter);
} }
const _c1 = function (a0, a1) { return { $implicit: a0, modalRef: a1 }; };
function NzModalFooterComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, NzModalFooterComponent_ng_container_0_ng_container_1_Template, 3, 2, "ng-container", 2);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("nzStringTemplateOutlet", ctx_r0.config.nzFooter)("nzStringTemplateOutletContext", ɵngcc0.ɵɵpureFunction2(2, _c1, ctx_r0.config.nzComponentParams, ctx_r0.modalRef));
} }
function NzModalFooterComponent_ng_template_1_button_0_Template(rf, ctx) { if (rf & 1) {
    const _r13 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 10);
    ɵngcc0.ɵɵlistener("click", function NzModalFooterComponent_ng_template_1_button_0_Template_button_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r13); const ctx_r12 = ɵngcc0.ɵɵnextContext(2); return ctx_r12.onCancel(); });
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r10 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("nzLoading", !!ctx_r10.config.nzCancelLoading)("disabled", ctx_r10.config.nzCancelDisabled);
    ɵngcc0.ɵɵattribute("cdkFocusInitial", ctx_r10.config.nzAutofocus === "cancel" || null);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", ctx_r10.config.nzCancelText || ctx_r10.locale.cancelText, " ");
} }
function NzModalFooterComponent_ng_template_1_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r15 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 11);
    ɵngcc0.ɵɵlistener("click", function NzModalFooterComponent_ng_template_1_button_1_Template_button_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r15); const ctx_r14 = ɵngcc0.ɵɵnextContext(2); return ctx_r14.onOk(); });
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r11 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("nzType", ctx_r11.config.nzOkType)("nzDanger", ctx_r11.config.nzOkDanger)("nzLoading", !!ctx_r11.config.nzOkLoading)("disabled", ctx_r11.config.nzOkDisabled);
    ɵngcc0.ɵɵattribute("cdkFocusInitial", ctx_r11.config.nzAutofocus === "ok" || null);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", ctx_r11.config.nzOkText || ctx_r11.locale.okText, " ");
} }
function NzModalFooterComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, NzModalFooterComponent_ng_template_1_button_0_Template, 2, 4, "button", 8);
    ɵngcc0.ɵɵtemplate(1, NzModalFooterComponent_ng_template_1_button_1_Template, 2, 6, "button", 9);
} if (rf & 2) {
    const ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngIf", ctx_r2.config.nzCancelText !== null);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r2.config.nzOkText !== null);
} }
export class NzModalFooterComponent {
    constructor(i18n, config) {
        this.i18n = i18n;
        this.config = config;
        this.buttonsFooter = false;
        this.buttons = [];
        this.cancelTriggered = new EventEmitter();
        this.okTriggered = new EventEmitter();
        this.destroy$ = new Subject();
        if (Array.isArray(config.nzFooter)) {
            this.buttonsFooter = true;
            this.buttons = config.nzFooter.map(mergeDefaultOption);
        }
        this.i18n.localeChange.pipe(takeUntil(this.destroy$)).subscribe(() => {
            this.locale = this.i18n.getLocaleData('Modal');
        });
    }
    onCancel() {
        this.cancelTriggered.emit();
    }
    onOk() {
        this.okTriggered.emit();
    }
    /**
     * Returns the value of the specified key.
     * If it is a function, run and return the return value of the function.
     */
    getButtonCallableProp(options, prop) {
        const value = options[prop];
        const componentInstance = this.modalRef.getContentComponent();
        return typeof value === 'function' ? value.apply(options, componentInstance && [componentInstance]) : value;
    }
    /**
     * Run function based on the type and set its `loading` prop if needed.
     */
    onButtonClick(options) {
        const loading = this.getButtonCallableProp(options, 'loading');
        if (!loading) {
            const result = this.getButtonCallableProp(options, 'onClick');
            if (options.autoLoading && isPromise(result)) {
                options.loading = true;
                result.then(() => (options.loading = false)).catch(() => (options.loading = false));
            }
        }
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
NzModalFooterComponent.ɵfac = function NzModalFooterComponent_Factory(t) { return new (t || NzModalFooterComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc1.NzI18nService), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.ModalOptions)); };
NzModalFooterComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzModalFooterComponent, selectors: [["div", "nz-modal-footer", ""]], hostAttrs: [1, "ant-modal-footer"], inputs: { modalRef: "modalRef" }, outputs: { cancelTriggered: "cancelTriggered", okTriggered: "okTriggered" }, exportAs: ["NzModalFooterBuiltin"], attrs: _c0, decls: 3, vars: 2, consts: [[4, "ngIf", "ngIfElse"], ["defaultFooterButtons", ""], [4, "nzStringTemplateOutlet", "nzStringTemplateOutletContext"], [3, "innerHTML", 4, "ngIf"], [4, "ngIf"], [3, "innerHTML"], ["nz-button", "", 3, "hidden", "nzLoading", "disabled", "nzType", "nzDanger", "nzShape", "nzSize", "nzGhost", "click", 4, "ngFor", "ngForOf"], ["nz-button", "", 3, "hidden", "nzLoading", "disabled", "nzType", "nzDanger", "nzShape", "nzSize", "nzGhost", "click"], ["nz-button", "", 3, "nzLoading", "disabled", "click", 4, "ngIf"], ["nz-button", "", 3, "nzType", "nzDanger", "nzLoading", "disabled", "click", 4, "ngIf"], ["nz-button", "", 3, "nzLoading", "disabled", "click"], ["nz-button", "", 3, "nzType", "nzDanger", "nzLoading", "disabled", "click"]], template: function NzModalFooterComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, NzModalFooterComponent_ng_container_0_Template, 2, 5, "ng-container", 0);
        ɵngcc0.ɵɵtemplate(1, NzModalFooterComponent_ng_template_1_Template, 2, 2, "ng-template", null, 1, ɵngcc0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r1 = ɵngcc0.ɵɵreference(2);
        ɵngcc0.ɵɵproperty("ngIf", ctx.config.nzFooter)("ngIfElse", _r1);
    } }, directives: [ɵngcc3.NgIf, ɵngcc4.NzStringTemplateOutletDirective, ɵngcc3.NgForOf, ɵngcc5.NzButtonComponent, ɵngcc6.NzWaveDirective, ɵngcc7.ɵNzTransitionPatchDirective], encapsulation: 2 });
NzModalFooterComponent.ctorParameters = () => [
    { type: NzI18nService },
    { type: ModalOptions }
];
NzModalFooterComponent.propDecorators = {
    cancelTriggered: [{ type: Output }],
    okTriggered: [{ type: Output }],
    modalRef: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzModalFooterComponent, [{
        type: Component,
        args: [{
                selector: 'div[nz-modal-footer]',
                exportAs: 'NzModalFooterBuiltin',
                template: `
    <ng-container *ngIf="config.nzFooter; else defaultFooterButtons">
      <ng-container *nzStringTemplateOutlet="config.nzFooter; context: { $implicit: config.nzComponentParams, modalRef: modalRef }">
        <div *ngIf="!buttonsFooter" [innerHTML]="config.nzFooter"></div>
        <ng-container *ngIf="buttonsFooter">
          <button
            *ngFor="let button of buttons"
            nz-button
            (click)="onButtonClick(button)"
            [hidden]="!getButtonCallableProp(button, 'show')"
            [nzLoading]="getButtonCallableProp(button, 'loading')"
            [disabled]="getButtonCallableProp(button, 'disabled')"
            [nzType]="button.type!"
            [nzDanger]="button.danger"
            [nzShape]="button.shape!"
            [nzSize]="button.size!"
            [nzGhost]="button.ghost!"
          >
            {{ button.label }}
          </button>
        </ng-container>
      </ng-container>
    </ng-container>
    <ng-template #defaultFooterButtons>
      <button
        *ngIf="config.nzCancelText !== null"
        [attr.cdkFocusInitial]="config.nzAutofocus === 'cancel' || null"
        nz-button
        (click)="onCancel()"
        [nzLoading]="!!config.nzCancelLoading"
        [disabled]="config.nzCancelDisabled"
      >
        {{ config.nzCancelText || locale.cancelText }}
      </button>
      <button
        *ngIf="config.nzOkText !== null"
        [attr.cdkFocusInitial]="config.nzAutofocus === 'ok' || null"
        nz-button
        [nzType]="config.nzOkType!"
        [nzDanger]="config.nzOkDanger"
        (click)="onOk()"
        [nzLoading]="!!config.nzOkLoading"
        [disabled]="config.nzOkDisabled"
      >
        {{ config.nzOkText || locale.okText }}
      </button>
    </ng-template>
  `,
                host: {
                    class: 'ant-modal-footer'
                },
                changeDetection: ChangeDetectionStrategy.Default
            }]
    }], function () { return [{ type: ɵngcc1.NzI18nService }, { type: ɵngcc2.ModalOptions }]; }, { cancelTriggered: [{
            type: Output
        }], okTriggered: [{
            type: Output
        }], modalRef: [{
            type: Input
        }] }); })();
function mergeDefaultOption(options) {
    return Object.assign({ type: null, size: 'default', autoLoading: true, show: true, loading: false, disabled: false }, options);
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwtZm9vdGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vY29tcG9uZW50cy9tb2RhbC9tb2RhbC1mb290ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFFSCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQWEsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNHLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzQyxPQUFPLEVBQUUsYUFBYSxFQUF3QixNQUFNLG9CQUFvQixDQUFDO0FBRXpFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDekMsT0FBTyxFQUFzQixZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTBEakUsTUFBTSxPQUFPLHNCQUFzQjtBQUFHLElBU3BDLFlBQW9CLElBQW1CLEVBQVMsTUFBb0I7QUFDdEUsUUFEc0IsU0FBSSxHQUFKLElBQUksQ0FBZTtBQUFDLFFBQVEsV0FBTSxHQUFOLE1BQU0sQ0FBYztBQUFDLFFBUnJFLGtCQUFhLEdBQUcsS0FBSyxDQUFDO0FBQ3hCLFFBQUUsWUFBTyxHQUF5QixFQUFFLENBQUM7QUFDckMsUUFDcUIsb0JBQWUsR0FBRyxJQUFJLFlBQVksRUFBUSxDQUFDO0FBQ2hFLFFBQXFCLGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQVEsQ0FBQztBQUM1RCxRQUNVLGFBQVEsR0FBRyxJQUFJLE9BQU8sRUFBUSxD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QUFPLGNBQ2pELGhDQXREUSw4QkEyRE4sTUFBTTtBQUFLLDBCQUNYLE1BQU07QUFBSyx1QkFDWCxLQUFLO0FBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQUFFO0FBbURkLFNBQVMsa0JBQWtCLENBQUMsT0FBMkI7QUFBSSxJQUN6RCx1QkFDRSxJQUFJLEVBQUUsSUFBSSxFQUNWLElBQUksRUFBRSxTQUFTLEVBQ2YsV0FBVyxFQUFFLElBQUksRUFDakIsSUFBSSxFQUFFLElBQUksRUFDVixPQUFPLEVBQUUsS0FBSyxFQUNkLFFBQVEsRUFBRSxLQUFLLElBQ1osT0FBTyxFQUNWO0FBQ0osQ0FBQztBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25EZXN0cm95LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGlzUHJvbWlzZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS91dGlsJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgTnpJMThuU2VydmljZSwgTnpNb2RhbEkxOG5JbnRlcmZhY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2kxOG4nO1xuXG5pbXBvcnQgeyBOek1vZGFsUmVmIH0gZnJvbSAnLi9tb2RhbC1yZWYnO1xuaW1wb3J0IHsgTW9kYWxCdXR0b25PcHRpb25zLCBNb2RhbE9wdGlvbnMgfSBmcm9tICcuL21vZGFsLXR5cGVzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZGl2W256LW1vZGFsLWZvb3Rlcl0nLFxuICBleHBvcnRBczogJ056TW9kYWxGb290ZXJCdWlsdGluJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiY29uZmlnLm56Rm9vdGVyOyBlbHNlIGRlZmF1bHRGb290ZXJCdXR0b25zXCI+XG4gICAgICA8bmctY29udGFpbmVyICpuelN0cmluZ1RlbXBsYXRlT3V0bGV0PVwiY29uZmlnLm56Rm9vdGVyOyBjb250ZXh0OiB7ICRpbXBsaWNpdDogY29uZmlnLm56Q29tcG9uZW50UGFyYW1zLCBtb2RhbFJlZjogbW9kYWxSZWYgfVwiPlxuICAgICAgICA8ZGl2ICpuZ0lmPVwiIWJ1dHRvbnNGb290ZXJcIiBbaW5uZXJIVE1MXT1cImNvbmZpZy5uekZvb3RlclwiPjwvZGl2PlxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiYnV0dG9uc0Zvb3RlclwiPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICpuZ0Zvcj1cImxldCBidXR0b24gb2YgYnV0dG9uc1wiXG4gICAgICAgICAgICBuei1idXR0b25cbiAgICAgICAgICAgIChjbGljayk9XCJvbkJ1dHRvbkNsaWNrKGJ1dHRvbilcIlxuICAgICAgICAgICAgW2hpZGRlbl09XCIhZ2V0QnV0dG9uQ2FsbGFibGVQcm9wKGJ1dHRvbiwgJ3Nob3cnKVwiXG4gICAgICAgICAgICBbbnpMb2FkaW5nXT1cImdldEJ1dHRvbkNhbGxhYmxlUHJvcChidXR0b24sICdsb2FkaW5nJylcIlxuICAgICAgICAgICAgW2Rpc2FibGVkXT1cImdldEJ1dHRvbkNhbGxhYmxlUHJvcChidXR0b24sICdkaXNhYmxlZCcpXCJcbiAgICAgICAgICAgIFtuelR5cGVdPVwiYnV0dG9uLnR5cGUhXCJcbiAgICAgICAgICAgIFtuekRhbmdlcl09XCJidXR0b24uZGFuZ2VyXCJcbiAgICAgICAgICAgIFtuelNoYXBlXT1cImJ1dHRvbi5zaGFwZSFcIlxuICAgICAgICAgICAgW256U2l6ZV09XCJidXR0b24uc2l6ZSFcIlxuICAgICAgICAgICAgW256R2hvc3RdPVwiYnV0dG9uLmdob3N0IVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAge3sgYnV0dG9uLmxhYmVsIH19XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgPC9uZy1jb250YWluZXI+XG4gICAgPG5nLXRlbXBsYXRlICNkZWZhdWx0Rm9vdGVyQnV0dG9ucz5cbiAgICAgIDxidXR0b25cbiAgICAgICAgKm5nSWY9XCJjb25maWcubnpDYW5jZWxUZXh0ICE9PSBudWxsXCJcbiAgICAgICAgW2F0dHIuY2RrRm9jdXNJbml0aWFsXT1cImNvbmZpZy5uekF1dG9mb2N1cyA9PT0gJ2NhbmNlbCcgfHwgbnVsbFwiXG4gICAgICAgIG56LWJ1dHRvblxuICAgICAgICAoY2xpY2spPVwib25DYW5jZWwoKVwiXG4gICAgICAgIFtuekxvYWRpbmddPVwiISFjb25maWcubnpDYW5jZWxMb2FkaW5nXCJcbiAgICAgICAgW2Rpc2FibGVkXT1cImNvbmZpZy5uekNhbmNlbERpc2FibGVkXCJcbiAgICAgID5cbiAgICAgICAge3sgY29uZmlnLm56Q2FuY2VsVGV4dCB8fCBsb2NhbGUuY2FuY2VsVGV4dCB9fVxuICAgICAgPC9idXR0b24+XG4gICAgICA8YnV0dG9uXG4gICAgICAgICpuZ0lmPVwiY29uZmlnLm56T2tUZXh0ICE9PSBudWxsXCJcbiAgICAgICAgW2F0dHIuY2RrRm9jdXNJbml0aWFsXT1cImNvbmZpZy5uekF1dG9mb2N1cyA9PT0gJ29rJyB8fCBudWxsXCJcbiAgICAgICAgbnotYnV0dG9uXG4gICAgICAgIFtuelR5cGVdPVwiY29uZmlnLm56T2tUeXBlIVwiXG4gICAgICAgIFtuekRhbmdlcl09XCJjb25maWcubnpPa0RhbmdlclwiXG4gICAgICAgIChjbGljayk9XCJvbk9rKClcIlxuICAgICAgICBbbnpMb2FkaW5nXT1cIiEhY29uZmlnLm56T2tMb2FkaW5nXCJcbiAgICAgICAgW2Rpc2FibGVkXT1cImNvbmZpZy5uek9rRGlzYWJsZWRcIlxuICAgICAgPlxuICAgICAgICB7eyBjb25maWcubnpPa1RleHQgfHwgbG9jYWxlLm9rVGV4dCB9fVxuICAgICAgPC9idXR0b24+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgYCxcbiAgaG9zdDoge1xuICAgIGNsYXNzOiAnYW50LW1vZGFsLWZvb3RlcidcbiAgfSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5EZWZhdWx0XG59KVxuZXhwb3J0IGNsYXNzIE56TW9kYWxGb290ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBidXR0b25zRm9vdGVyID0gZmFsc2U7XG4gIGJ1dHRvbnM6IE1vZGFsQnV0dG9uT3B0aW9uc1tdID0gW107XG4gIGxvY2FsZSE6IE56TW9kYWxJMThuSW50ZXJmYWNlO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgY2FuY2VsVHJpZ2dlcmVkID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgb2tUcmlnZ2VyZWQgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG4gIEBJbnB1dCgpIG1vZGFsUmVmITogTnpNb2RhbFJlZjtcbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBpMThuOiBOekkxOG5TZXJ2aWNlLCBwdWJsaWMgY29uZmlnOiBNb2RhbE9wdGlvbnMpIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShjb25maWcubnpGb290ZXIpKSB7XG4gICAgICB0aGlzLmJ1dHRvbnNGb290ZXIgPSB0cnVlO1xuICAgICAgdGhpcy5idXR0b25zID0gKGNvbmZpZy5uekZvb3RlciBhcyBNb2RhbEJ1dHRvbk9wdGlvbnNbXSkubWFwKG1lcmdlRGVmYXVsdE9wdGlvbik7XG4gICAgfVxuICAgIHRoaXMuaTE4bi5sb2NhbGVDaGFuZ2UucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLmxvY2FsZSA9IHRoaXMuaTE4bi5nZXRMb2NhbGVEYXRhKCdNb2RhbCcpO1xuICAgIH0pO1xuICB9XG5cbiAgb25DYW5jZWwoKTogdm9pZCB7XG4gICAgdGhpcy5jYW5jZWxUcmlnZ2VyZWQuZW1pdCgpO1xuICB9XG5cbiAgb25PaygpOiB2b2lkIHtcbiAgICB0aGlzLm9rVHJpZ2dlcmVkLmVtaXQoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSB2YWx1ZSBvZiB0aGUgc3BlY2lmaWVkIGtleS5cbiAgICogSWYgaXQgaXMgYSBmdW5jdGlvbiwgcnVuIGFuZCByZXR1cm4gdGhlIHJldHVybiB2YWx1ZSBvZiB0aGUgZnVuY3Rpb24uXG4gICAqL1xuICBnZXRCdXR0b25DYWxsYWJsZVByb3Aob3B0aW9uczogTW9kYWxCdXR0b25PcHRpb25zLCBwcm9wOiBrZXlvZiBNb2RhbEJ1dHRvbk9wdGlvbnMpOiBib29sZWFuIHtcbiAgICBjb25zdCB2YWx1ZSA9IG9wdGlvbnNbcHJvcF07XG4gICAgY29uc3QgY29tcG9uZW50SW5zdGFuY2UgPSB0aGlzLm1vZGFsUmVmLmdldENvbnRlbnRDb21wb25lbnQoKTtcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nID8gdmFsdWUuYXBwbHkob3B0aW9ucywgY29tcG9uZW50SW5zdGFuY2UgJiYgW2NvbXBvbmVudEluc3RhbmNlXSkgOiB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSdW4gZnVuY3Rpb24gYmFzZWQgb24gdGhlIHR5cGUgYW5kIHNldCBpdHMgYGxvYWRpbmdgIHByb3AgaWYgbmVlZGVkLlxuICAgKi9cbiAgb25CdXR0b25DbGljayhvcHRpb25zOiBNb2RhbEJ1dHRvbk9wdGlvbnMpOiB2b2lkIHtcbiAgICBjb25zdCBsb2FkaW5nID0gdGhpcy5nZXRCdXR0b25DYWxsYWJsZVByb3Aob3B0aW9ucywgJ2xvYWRpbmcnKTtcbiAgICBpZiAoIWxvYWRpbmcpIHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuZ2V0QnV0dG9uQ2FsbGFibGVQcm9wKG9wdGlvbnMsICdvbkNsaWNrJyk7XG4gICAgICBpZiAob3B0aW9ucy5hdXRvTG9hZGluZyAmJiBpc1Byb21pc2UocmVzdWx0KSkge1xuICAgICAgICBvcHRpb25zLmxvYWRpbmcgPSB0cnVlO1xuICAgICAgICByZXN1bHQudGhlbigoKSA9PiAob3B0aW9ucy5sb2FkaW5nID0gZmFsc2UpKS5jYXRjaCgoKSA9PiAob3B0aW9ucy5sb2FkaW5nID0gZmFsc2UpKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gbWVyZ2VEZWZhdWx0T3B0aW9uKG9wdGlvbnM6IE1vZGFsQnV0dG9uT3B0aW9ucyk6IE1vZGFsQnV0dG9uT3B0aW9ucyB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogbnVsbCxcbiAgICBzaXplOiAnZGVmYXVsdCcsXG4gICAgYXV0b0xvYWRpbmc6IHRydWUsXG4gICAgc2hvdzogdHJ1ZSxcbiAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgLi4ub3B0aW9uc1xuICB9O1xufVxuIl19