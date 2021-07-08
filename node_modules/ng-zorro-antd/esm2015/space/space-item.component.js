/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, Component, ElementRef, Renderer2 } from '@angular/core';
/**
 * @deprecated NzSpaceItemLegacyComponent will be removed on 12.0.0.
 * @breaking-change 12.0.0
 */
import * as ɵngcc0 from '@angular/core';

const _c0 = ["*"];
export class NzSpaceItemLegacyComponent {
    constructor(renderer, elementRef) {
        this.renderer = renderer;
        this.elementRef = elementRef;
    }
    setDirectionAndSize(direction, size) {
        if (direction === 'horizontal') {
            this.renderer.removeStyle(this.elementRef.nativeElement, 'margin-bottom');
            this.renderer.setStyle(this.elementRef.nativeElement, 'margin-right', `${size}px`);
        }
        else {
            this.renderer.removeStyle(this.elementRef.nativeElement, 'margin-right');
            this.renderer.setStyle(this.elementRef.nativeElement, 'margin-bottom', `${size}px`);
        }
    }
    ngOnInit() { }
}
NzSpaceItemLegacyComponent.ɵfac = function NzSpaceItemLegacyComponent_Factory(t) { return new (t || NzSpaceItemLegacyComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
NzSpaceItemLegacyComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzSpaceItemLegacyComponent, selectors: [["nz-space-item"], ["", "nz-space-item", ""]], hostAttrs: [1, "ant-space-item"], ngContentSelectors: _c0, decls: 1, vars: 0, template: function NzSpaceItemLegacyComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
NzSpaceItemLegacyComponent.ctorParameters = () => [
    { type: Renderer2 },
    { type: ElementRef }
];
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzSpaceItemLegacyComponent, [{
        type: Component,
        args: [{
                selector: 'nz-space-item, [nz-space-item]',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: `
    <ng-content></ng-content>
  `,
                host: {
                    class: 'ant-space-item'
                }
            }]
    }], function () { return [{ type: ɵngcc0.Renderer2 }, { type: ɵngcc0.ElementRef }]; }, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BhY2UtaXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NvbXBvbmVudHMvc3BhY2Uvc3BhY2UtaXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUVILE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFVLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUlsRztBQUNBO0FBQ0E7QUFDQSxHQUFHOzs7O0FBV0gsTUFBTSxPQUFPLDBCQUEwQjtBQUFHLElBQ3hDLFlBQW9CLFFBQW1CLEVBQVUsVUFBc0I7QUFBSSxRQUF2RCxhQUFRLEdBQVIsUUFBUSxDQUFXO0FBQUMsUUFBUyxlQUFVLEdBQVYsVUFBVSxDQUFZO0FBQUMsSUFBRSxDQUFDO0FBQzdFLElBQ0UsbUJBQW1CLENBQUMsU0FBMkIsRUFBRSxJQUFZO0FBQUksUUFDL0QsSUFBSSxTQUFTLEtBQUssWUFBWSxFQUFFO0FBQ3BDLFlBQU0sSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsZUFBZSxDQUFDLENBQUM7QUFDaEYsWUFBTSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxjQUFjLEVBQUUsR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFDO0FBQ3pGLFNBQUs7QUFBQyxhQUFLO0FBQ1gsWUFBTSxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxjQUFjLENBQUMsQ0FBQztBQUMvRSxZQUFNLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLGVBQWUsRUFBRSxHQUFHLElBQUksSUFBSSxDQUFDLENBQUM7QUFDMUYsU0FBSztBQUNMLElBQUUsQ0FBQztBQUNILElBQ0UsUUFBUSxLQUFVLENBQUM7QUFDckI7c0RBeEJDLFNBQVMsU0FBQyxrQkFDVCxRQUFRLEVBQUUsZ0NBQWdDLGtCQUMxQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTSxrQkFDL0M7RUFBUSxFQUFFLG1DQUVULGtCQUNELElBQUksRUFBRSxzQkFDSixLQUFLLEVBQUUsZ0JBQWdCLGtCQUN4QixjQUNGOzs7aURBQ0k7QUFBQztBQUFvRCxZQWxCTyxTQUFTO0FBQUksWUFBakMsVUFBVTtBQUFHOzs7Ozs7Ozs7Ozs7O3VHQUFFO0FBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBPbkluaXQsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBOelNwYWNlRGlyZWN0aW9uIH0gZnJvbSAnLi90eXBlcyc7XG5cbi8qKlxuICogQGRlcHJlY2F0ZWQgTnpTcGFjZUl0ZW1MZWdhY3lDb21wb25lbnQgd2lsbCBiZSByZW1vdmVkIG9uIDEyLjAuMC5cbiAqIEBicmVha2luZy1jaGFuZ2UgMTIuMC4wXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ256LXNwYWNlLWl0ZW0sIFtuei1zcGFjZS1pdGVtXScsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgYCxcbiAgaG9zdDoge1xuICAgIGNsYXNzOiAnYW50LXNwYWNlLWl0ZW0nXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgTnpTcGFjZUl0ZW1MZWdhY3lDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZikge31cblxuICBzZXREaXJlY3Rpb25BbmRTaXplKGRpcmVjdGlvbjogTnpTcGFjZURpcmVjdGlvbiwgc2l6ZTogbnVtYmVyKTogdm9pZCB7XG4gICAgaWYgKGRpcmVjdGlvbiA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZVN0eWxlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnbWFyZ2luLWJvdHRvbScpO1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ21hcmdpbi1yaWdodCcsIGAke3NpemV9cHhgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVTdHlsZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ21hcmdpbi1yaWdodCcpO1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ21hcmdpbi1ib3R0b20nLCBgJHtzaXplfXB4YCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7fVxufVxuIl19