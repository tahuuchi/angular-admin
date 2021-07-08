import { __decorate, __metadata } from "tslib";
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Directionality } from '@angular/cdk/bidi';
import { DOCUMENT } from '@angular/common';
import { ChangeDetectorRef, Directive, ElementRef, Inject, Input, Optional } from '@angular/core';
import { NzConfigService, WithConfig } from 'ng-zorro-antd/core/config';
import { InputBoolean } from 'ng-zorro-antd/core/util';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { NzImageGroupComponent } from './image-group.component';
import { NzImageService } from './image.service';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from 'ng-zorro-antd/core/config';
import * as ɵngcc2 from './image.service';
import * as ɵngcc3 from './image-group.component';
import * as ɵngcc4 from '@angular/cdk/bidi';
const NZ_CONFIG_MODULE_NAME = 'image';
export class NzImageDirective {
    constructor(document, nzConfigService, elementRef, nzImageService, cdr, parentGroup, directionality) {
        this.document = document;
        this.nzConfigService = nzConfigService;
        this.elementRef = elementRef;
        this.nzImageService = nzImageService;
        this.cdr = cdr;
        this.parentGroup = parentGroup;
        this.directionality = directionality;
        this._nzModuleName = NZ_CONFIG_MODULE_NAME;
        this.nzSrc = '';
        this.nzDisablePreview = false;
        this.nzFallback = null;
        this.nzPlaceholder = null;
        this.status = 'normal';
        this.destroy$ = new Subject();
    }
    get previewable() {
        return !this.nzDisablePreview && this.status !== 'error';
    }
    ngOnInit() {
        var _a;
        this.backLoad();
        if (this.parentGroup) {
            this.parentGroup.addImage(this);
        }
        if (this.directionality) {
            (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
                this.dir = direction;
                this.cdr.detectChanges();
            });
            this.dir = this.directionality.value;
        }
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    onPreview() {
        if (!this.previewable) {
            return;
        }
        if (this.parentGroup) {
            // preview inside image group
            const previewAbleImages = this.parentGroup.images.filter(e => e.previewable);
            const previewImages = previewAbleImages.map(e => ({ src: e.nzSrc }));
            const previewIndex = previewAbleImages.findIndex(el => this === el);
            const previewRef = this.nzImageService.preview(previewImages, { nzDirection: this.dir });
            previewRef.switchTo(previewIndex);
        }
        else {
            // preview not inside image group
            const previewImages = [{ src: this.nzSrc }];
            this.nzImageService.preview(previewImages, { nzDirection: this.dir });
        }
    }
    getElement() {
        return this.elementRef;
    }
    ngOnChanges(changes) {
        const { nzSrc } = changes;
        if (nzSrc) {
            this.getElement().nativeElement.src = nzSrc.currentValue;
            this.backLoad();
        }
    }
    /**
     * use internal Image object handle fallback & placeholder
     * @private
     */
    backLoad() {
        this.backLoadImage = this.document.createElement('img');
        this.backLoadImage.src = this.nzSrc;
        this.status = 'loading';
        if (this.backLoadImage.complete) {
            this.status = 'normal';
            this.getElement().nativeElement.src = this.nzSrc;
        }
        else {
            if (this.nzPlaceholder) {
                this.getElement().nativeElement.src = this.nzPlaceholder;
            }
            else {
                this.getElement().nativeElement.src = this.nzSrc;
            }
            this.backLoadImage.onload = () => {
                this.status = 'normal';
                this.getElement().nativeElement.src = this.nzSrc;
            };
            this.backLoadImage.onerror = () => {
                this.status = 'error';
                if (this.nzFallback) {
                    this.getElement().nativeElement.src = this.nzFallback;
                }
            };
        }
    }
}
NzImageDirective.ɵfac = function NzImageDirective_Factory(t) { return new (t || NzImageDirective)(ɵngcc0.ɵɵdirectiveInject(DOCUMENT), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.NzConfigService), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.NzImageService), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc3.NzImageGroupComponent, 8), ɵngcc0.ɵɵdirectiveInject(ɵngcc4.Directionality, 8)); };
NzImageDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: NzImageDirective, selectors: [["img", "nz-image", ""]], hostBindings: function NzImageDirective_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("click", function NzImageDirective_click_HostBindingHandler() { return ctx.onPreview(); });
    } }, inputs: { nzSrc: "nzSrc", nzDisablePreview: "nzDisablePreview", nzFallback: "nzFallback", nzPlaceholder: "nzPlaceholder" }, exportAs: ["nzImage"], features: [ɵngcc0.ɵɵNgOnChangesFeature] });
NzImageDirective.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: NzConfigService },
    { type: ElementRef },
    { type: NzImageService },
    { type: ChangeDetectorRef },
    { type: NzImageGroupComponent, decorators: [{ type: Optional }] },
    { type: Directionality, decorators: [{ type: Optional }] }
];
NzImageDirective.propDecorators = {
    nzSrc: [{ type: Input }],
    nzDisablePreview: [{ type: Input }],
    nzFallback: [{ type: Input }],
    nzPlaceholder: [{ type: Input }]
};
__decorate([
    InputBoolean(),
    WithConfig(),
    __metadata("design:type", Boolean)
], NzImageDirective.prototype, "nzDisablePreview", void 0);
__decorate([
    WithConfig(),
    __metadata("design:type", Object)
], NzImageDirective.prototype, "nzFallback", void 0);
__decorate([
    WithConfig(),
    __metadata("design:type", Object)
], NzImageDirective.prototype, "nzPlaceholder", void 0);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzImageDirective, [{
        type: Directive,
        args: [{
                selector: 'img[nz-image]',
                exportAs: 'nzImage',
                host: {
                    '(click)': 'onPreview()'
                }
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [DOCUMENT]
            }] }, { type: ɵngcc1.NzConfigService }, { type: ɵngcc0.ElementRef }, { type: ɵngcc2.NzImageService }, { type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc3.NzImageGroupComponent, decorators: [{
                type: Optional
            }] }, { type: ɵngcc4.Directionality, decorators: [{
                type: Optional
            }] }]; }, { nzSrc: [{
            type: Input
        }], nzDisablePreview: [{
            type: Input
        }], nzFallback: [{
            type: Input
        }], nzPlaceholder: [{
            type: Input
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2UuZGlyZWN0aXZlLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9jb21wb25lbnRzL2ltYWdlL2ltYWdlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILE9BQU8sRUFBYSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUNMLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLE1BQU0sRUFDTixLQUFLLEVBSUwsUUFBUSxFQUVULE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBZSxlQUFlLEVBQUUsVUFBVSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFFckYsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTNDLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7Ozs7O0FBRWpELE1BQU0scUJBQXFCLEdBQWdCLE9BQU8sQ0FBQztBQVduRCxNQUFNLE9BQU8sZ0JBQWdCO0FBQUcsSUFtQjlCLFlBQzRCLFFBQW1CLEVBQ3RDLGVBQWdDLEVBQy9CLFVBQXNCLEVBQ3RCLGNBQThCLEVBQzVCLEdBQXNCLEVBQ1osV0FBa0MsRUFDbEMsY0FBOEI7QUFDbkQsUUFQMkIsYUFBUSxHQUFSLFFBQVEsQ0FBVztBQUFDLFFBQ3ZDLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtBQUFDLFFBQ2hDLGVBQVUsR0FBVixVQUFVLENBQVk7QUFBQyxRQUN2QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7QUFBQyxRQUM3QixRQUFHLEdB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UTtBQUFNO0FBQUc7QUFDbkIsb0JBdEJBLEtBQUs7QUFBSywrQkFDVixLQUFLO0FBQUsseUJBQ1YsS0FBSztBQUFLLDRCQUNWLEtBQUs7QUFBSTtBQUY2QjtBQUFhLElBQTFDLFlBQVksRUFBRTtBQUFFLElBQUEsVUFBVSxFQUFFO0FBQUU7QUFDckMsMERBRHNFO0FBQ2xEO0FBQWEsSUFBMUIsVUFBVSxFQUFFO0FBQUU7QUFDckIsb0RBRHFEO0FBQ2pDO0FBQWEsSUFBMUIsVUFBVSxFQUFFO0FBQUU7QUFFekIsdURBRjREOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQUM3RDtBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cbmltcG9ydCB7IERpcmVjdGlvbiwgRGlyZWN0aW9uYWxpdHkgfSBmcm9tICdAYW5ndWxhci9jZGsvYmlkaSc7XG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgRGlyZWN0aXZlLFxuICBFbGVtZW50UmVmLFxuICBJbmplY3QsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPcHRpb25hbCxcbiAgU2ltcGxlQ2hhbmdlc1xufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE56Q29uZmlnS2V5LCBOekNvbmZpZ1NlcnZpY2UsIFdpdGhDb25maWcgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvY29uZmlnJztcbmltcG9ydCB7IEJvb2xlYW5JbnB1dCwgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcbmltcG9ydCB7IElucHV0Qm9vbGVhbiB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS91dGlsJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgTnpJbWFnZUdyb3VwQ29tcG9uZW50IH0gZnJvbSAnLi9pbWFnZS1ncm91cC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTnpJbWFnZVNlcnZpY2UgfSBmcm9tICcuL2ltYWdlLnNlcnZpY2UnO1xuXG5jb25zdCBOWl9DT05GSUdfTU9EVUxFX05BTUU6IE56Q29uZmlnS2V5ID0gJ2ltYWdlJztcblxuZXhwb3J0IHR5cGUgSW1hZ2VTdGF0dXNUeXBlID0gJ2Vycm9yJyB8ICdsb2FkaW5nJyB8ICdub3JtYWwnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdpbWdbbnotaW1hZ2VdJyxcbiAgZXhwb3J0QXM6ICduekltYWdlJyxcbiAgaG9zdDoge1xuICAgICcoY2xpY2spJzogJ29uUHJldmlldygpJ1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIE56SW1hZ2VEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcbiAgcmVhZG9ubHkgX256TW9kdWxlTmFtZTogTnpDb25maWdLZXkgPSBOWl9DT05GSUdfTU9EVUxFX05BTUU7XG5cbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX256RGlzYWJsZVByZXZpZXc6IEJvb2xlYW5JbnB1dDtcblxuICBASW5wdXQoKSBuelNyYyA9ICcnO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgQFdpdGhDb25maWcoKSBuekRpc2FibGVQcmV2aWV3OiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBXaXRoQ29uZmlnKCkgbnpGYWxsYmFjazogc3RyaW5nIHwgbnVsbCA9IG51bGw7XG4gIEBJbnB1dCgpIEBXaXRoQ29uZmlnKCkgbnpQbGFjZWhvbGRlcjogc3RyaW5nIHwgbnVsbCA9IG51bGw7XG5cbiAgZGlyPzogRGlyZWN0aW9uO1xuICBiYWNrTG9hZEltYWdlITogSFRNTEltYWdlRWxlbWVudDtcbiAgcHJpdmF0ZSBzdGF0dXM6IEltYWdlU3RhdHVzVHlwZSA9ICdub3JtYWwnO1xuICBwcml2YXRlIGRlc3Ryb3kkOiBTdWJqZWN0PHZvaWQ+ID0gbmV3IFN1YmplY3QoKTtcblxuICBnZXQgcHJldmlld2FibGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICF0aGlzLm56RGlzYWJsZVByZXZpZXcgJiYgdGhpcy5zdGF0dXMgIT09ICdlcnJvcic7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvY3VtZW50OiBOelNhZmVBbnksXG4gICAgcHVibGljIG56Q29uZmlnU2VydmljZTogTnpDb25maWdTZXJ2aWNlLFxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIG56SW1hZ2VTZXJ2aWNlOiBOekltYWdlU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIHBhcmVudEdyb3VwOiBOekltYWdlR3JvdXBDb21wb25lbnQsXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBkaXJlY3Rpb25hbGl0eTogRGlyZWN0aW9uYWxpdHlcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuYmFja0xvYWQoKTtcbiAgICBpZiAodGhpcy5wYXJlbnRHcm91cCkge1xuICAgICAgdGhpcy5wYXJlbnRHcm91cC5hZGRJbWFnZSh0aGlzKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuZGlyZWN0aW9uYWxpdHkpIHtcbiAgICAgIHRoaXMuZGlyZWN0aW9uYWxpdHkuY2hhbmdlPy5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKChkaXJlY3Rpb246IERpcmVjdGlvbikgPT4ge1xuICAgICAgICB0aGlzLmRpciA9IGRpcmVjdGlvbjtcbiAgICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgfSk7XG4gICAgICB0aGlzLmRpciA9IHRoaXMuZGlyZWN0aW9uYWxpdHkudmFsdWU7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xuICB9XG5cbiAgb25QcmV2aWV3KCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5wcmV2aWV3YWJsZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnBhcmVudEdyb3VwKSB7XG4gICAgICAvLyBwcmV2aWV3IGluc2lkZSBpbWFnZSBncm91cFxuICAgICAgY29uc3QgcHJldmlld0FibGVJbWFnZXMgPSB0aGlzLnBhcmVudEdyb3VwLmltYWdlcy5maWx0ZXIoZSA9PiBlLnByZXZpZXdhYmxlKTtcbiAgICAgIGNvbnN0IHByZXZpZXdJbWFnZXMgPSBwcmV2aWV3QWJsZUltYWdlcy5tYXAoZSA9PiAoeyBzcmM6IGUubnpTcmMgfSkpO1xuICAgICAgY29uc3QgcHJldmlld0luZGV4ID0gcHJldmlld0FibGVJbWFnZXMuZmluZEluZGV4KGVsID0+IHRoaXMgPT09IGVsKTtcbiAgICAgIGNvbnN0IHByZXZpZXdSZWYgPSB0aGlzLm56SW1hZ2VTZXJ2aWNlLnByZXZpZXcocHJldmlld0ltYWdlcywgeyBuekRpcmVjdGlvbjogdGhpcy5kaXIgfSk7XG4gICAgICBwcmV2aWV3UmVmLnN3aXRjaFRvKHByZXZpZXdJbmRleCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIHByZXZpZXcgbm90IGluc2lkZSBpbWFnZSBncm91cFxuICAgICAgY29uc3QgcHJldmlld0ltYWdlcyA9IFt7IHNyYzogdGhpcy5uelNyYyB9XTtcbiAgICAgIHRoaXMubnpJbWFnZVNlcnZpY2UucHJldmlldyhwcmV2aWV3SW1hZ2VzLCB7IG56RGlyZWN0aW9uOiB0aGlzLmRpciB9KTtcbiAgICB9XG4gIH1cblxuICBnZXRFbGVtZW50KCk6IEVsZW1lbnRSZWY8SFRNTEltYWdlRWxlbWVudD4ge1xuICAgIHJldHVybiB0aGlzLmVsZW1lbnRSZWY7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgY29uc3QgeyBuelNyYyB9ID0gY2hhbmdlcztcbiAgICBpZiAobnpTcmMpIHtcbiAgICAgIHRoaXMuZ2V0RWxlbWVudCgpLm5hdGl2ZUVsZW1lbnQuc3JjID0gbnpTcmMuY3VycmVudFZhbHVlO1xuICAgICAgdGhpcy5iYWNrTG9hZCgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiB1c2UgaW50ZXJuYWwgSW1hZ2Ugb2JqZWN0IGhhbmRsZSBmYWxsYmFjayAmIHBsYWNlaG9sZGVyXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBwcml2YXRlIGJhY2tMb2FkKCk6IHZvaWQge1xuICAgIHRoaXMuYmFja0xvYWRJbWFnZSA9IHRoaXMuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgdGhpcy5iYWNrTG9hZEltYWdlLnNyYyA9IHRoaXMubnpTcmM7XG4gICAgdGhpcy5zdGF0dXMgPSAnbG9hZGluZyc7XG5cbiAgICBpZiAodGhpcy5iYWNrTG9hZEltYWdlLmNvbXBsZXRlKSB7XG4gICAgICB0aGlzLnN0YXR1cyA9ICdub3JtYWwnO1xuICAgICAgdGhpcy5nZXRFbGVtZW50KCkubmF0aXZlRWxlbWVudC5zcmMgPSB0aGlzLm56U3JjO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5uelBsYWNlaG9sZGVyKSB7XG4gICAgICAgIHRoaXMuZ2V0RWxlbWVudCgpLm5hdGl2ZUVsZW1lbnQuc3JjID0gdGhpcy5uelBsYWNlaG9sZGVyO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5nZXRFbGVtZW50KCkubmF0aXZlRWxlbWVudC5zcmMgPSB0aGlzLm56U3JjO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmJhY2tMb2FkSW1hZ2Uub25sb2FkID0gKCkgPT4ge1xuICAgICAgICB0aGlzLnN0YXR1cyA9ICdub3JtYWwnO1xuICAgICAgICB0aGlzLmdldEVsZW1lbnQoKS5uYXRpdmVFbGVtZW50LnNyYyA9IHRoaXMubnpTcmM7XG4gICAgICB9O1xuXG4gICAgICB0aGlzLmJhY2tMb2FkSW1hZ2Uub25lcnJvciA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5zdGF0dXMgPSAnZXJyb3InO1xuICAgICAgICBpZiAodGhpcy5uekZhbGxiYWNrKSB7XG4gICAgICAgICAgdGhpcy5nZXRFbGVtZW50KCkubmF0aXZlRWxlbWVudC5zcmMgPSB0aGlzLm56RmFsbGJhY2s7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuICB9XG59XG4iXX0=