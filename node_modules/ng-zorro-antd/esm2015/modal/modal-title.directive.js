/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Directive, Optional, TemplateRef } from '@angular/core';
import { NzModalRef } from './modal-ref';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from './modal-ref';
export class NzModalTitleDirective {
    constructor(nzModalRef, templateRef) {
        this.nzModalRef = nzModalRef;
        this.templateRef = templateRef;
        if (this.nzModalRef) {
            this.nzModalRef.updateConfig({
                nzTitle: this.templateRef
            });
        }
    }
}
NzModalTitleDirective.ɵfac = function NzModalTitleDirective_Factory(t) { return new (t || NzModalTitleDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc1.NzModalRef, 8), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.TemplateRef)); };
NzModalTitleDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: NzModalTitleDirective, selectors: [["", "nzModalTitle", ""]], exportAs: ["nzModalTitle"] });
NzModalTitleDirective.ctorParameters = () => [
    { type: NzModalRef, decorators: [{ type: Optional }] },
    { type: TemplateRef }
];
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzModalTitleDirective, [{
        type: Directive,
        args: [{
                selector: '[nzModalTitle]',
                exportAs: 'nzModalTitle'
            }]
    }], function () { return [{ type: ɵngcc1.NzModalRef, decorators: [{
                type: Optional
            }] }, { type: ɵngcc0.TemplateRef }]; }, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwtdGl0bGUuZGlyZWN0aXZlLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9jb21wb25lbnRzL21vZGFsL21vZGFsLXRpdGxlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBRUgsT0FBTyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxhQUFhLENBQUM7OztBQU16QyxNQUFNLE9BQU8scUJBQXFCO0FBQ2xDLElBQUUsWUFBZ0MsVUFBc0IsRUFBUyxXQUE0QjtBQUM3RixRQURrQyxlQUFVLEdBQVYsVUFBVSxDQUFZO0FBQUMsUUFBUSxnQkFBVyxHQUFYLFdBQVcsQ0FBaUI7QUFBQyxRQUMxRixJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7QUFDekIsWUFBTSxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQztBQUNuQyxnQkFBUSxPQUFPLEVBQUUsSUFBSSxDQUFDLFdBQVc7QUFDakMsYUFBTyxDQUFDLENBQUM7QUFDVCxTQUFLO0FBQ0wsSUFBRSxDQUFDO0FBQ0g7aURBWkMsU0FBUyxTQUFDLGtCQUNULFFBQVEsRUFBRSxnQkFBZ0Isa0JBQzFCLFFBQVEsRUFBRSxjQUFjLGNBQ3pCOzBKQUNJO0FBQUM7QUFDVSxZQVBQLFVBQVUsdUJBT0osUUFBUTtBQUFPLFlBUkEsV0FBVztBQUFHOzs7Ozs7Ozs7Z0VBQUU7QUFBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7IERpcmVjdGl2ZSwgT3B0aW9uYWwsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOek1vZGFsUmVmIH0gZnJvbSAnLi9tb2RhbC1yZWYnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbnpNb2RhbFRpdGxlXScsXG4gIGV4cG9ydEFzOiAnbnpNb2RhbFRpdGxlJ1xufSlcbmV4cG9ydCBjbGFzcyBOek1vZGFsVGl0bGVEaXJlY3RpdmUge1xuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBwcml2YXRlIG56TW9kYWxSZWY6IE56TW9kYWxSZWYsIHB1YmxpYyB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8e30+KSB7XG4gICAgaWYgKHRoaXMubnpNb2RhbFJlZikge1xuICAgICAgdGhpcy5uek1vZGFsUmVmLnVwZGF0ZUNvbmZpZyh7XG4gICAgICAgIG56VGl0bGU6IHRoaXMudGVtcGxhdGVSZWZcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuIl19