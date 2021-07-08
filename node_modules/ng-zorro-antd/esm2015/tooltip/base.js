/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Directionality } from '@angular/cdk/bidi';
import { CdkConnectedOverlay } from '@angular/cdk/overlay';
import { ChangeDetectorRef, ComponentFactoryResolver, Directive, ElementRef, EventEmitter, Optional, Renderer2, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { NzConfigService } from 'ng-zorro-antd/core/config';
import { NzNoAnimationDirective } from 'ng-zorro-antd/core/no-animation';
import { DEFAULT_TOOLTIP_POSITIONS, getPlacementName, POSITION_MAP } from 'ng-zorro-antd/core/overlay';
import { isNotNil, toBoolean } from 'ng-zorro-antd/core/util';
import { Subject } from 'rxjs';
import { distinctUntilChanged, takeUntil } from 'rxjs/operators';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from 'ng-zorro-antd/core/no-animation';
import * as ɵngcc2 from 'ng-zorro-antd/core/config';
import * as ɵngcc3 from '@angular/cdk/bidi';

const _c0 = ["overlay"];
export class NzTooltipBaseDirective {
    constructor(elementRef, hostView, resolver, renderer, noAnimation, nzConfigService) {
        this.elementRef = elementRef;
        this.hostView = hostView;
        this.resolver = resolver;
        this.renderer = renderer;
        this.noAnimation = noAnimation;
        this.nzConfigService = nzConfigService;
        this.visibleChange = new EventEmitter();
        this.internalVisible = false;
        this.destroy$ = new Subject();
        this.triggerDisposables = [];
    }
    /**
     * This true title that would be used in other parts on this component.
     */
    get _title() {
        return this.title || this.directiveTitle || null;
    }
    get _content() {
        return this.content || this.directiveContent || null;
    }
    get _trigger() {
        return typeof this.trigger !== 'undefined' ? this.trigger : 'hover';
    }
    get _placement() {
        const p = this.placement;
        return Array.isArray(p) && p.length > 0 ? p : typeof p === 'string' && p ? [p] : ['top'];
    }
    get _visible() {
        return (typeof this.visible !== 'undefined' ? this.visible : this.internalVisible) || false;
    }
    get _mouseEnterDelay() {
        return this.mouseEnterDelay || 0.15;
    }
    get _mouseLeaveDelay() {
        return this.mouseLeaveDelay || 0.1;
    }
    get _overlayClassName() {
        return this.overlayClassName || null;
    }
    get _overlayStyle() {
        return this.overlayStyle || null;
    }
    getProxyPropertyMap() {
        return {
            noAnimation: ['noAnimation', () => this.noAnimation]
        };
    }
    ngOnChanges(changes) {
        const { trigger } = changes;
        if (trigger && !trigger.isFirstChange()) {
            this.registerTriggers();
        }
        if (this.component) {
            this.updatePropertiesByChanges(changes);
        }
    }
    ngAfterViewInit() {
        this.createComponent();
        this.registerTriggers();
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
        // Clear toggling timer. Issue #3875 #4317 #4386
        this.clearTogglingTimer();
        this.removeTriggerListeners();
    }
    show() {
        var _a;
        (_a = this.component) === null || _a === void 0 ? void 0 : _a.show();
    }
    hide() {
        var _a;
        (_a = this.component) === null || _a === void 0 ? void 0 : _a.hide();
    }
    /**
     * Force the component to update its position.
     */
    updatePosition() {
        if (this.component) {
            this.component.updatePosition();
        }
    }
    /**
     * Create a dynamic tooltip component. This method can be override.
     */
    createComponent() {
        const componentRef = this.hostView.createComponent(this.componentFactory);
        this.component = componentRef.instance;
        // Remove the component's DOM because it should be in the overlay container.
        this.renderer.removeChild(this.renderer.parentNode(this.elementRef.nativeElement), componentRef.location.nativeElement);
        this.component.setOverlayOrigin({ elementRef: this.origin || this.elementRef });
        this.initProperties();
        this.component.nzVisibleChange.pipe(distinctUntilChanged(), takeUntil(this.destroy$)).subscribe((visible) => {
            this.internalVisible = visible;
            this.visibleChange.emit(visible);
        });
    }
    registerTriggers() {
        // When the method gets invoked, all properties has been synced to the dynamic component.
        // After removing the old API, we can just check the directive's own `nzTrigger`.
        const el = this.elementRef.nativeElement;
        const trigger = this.trigger;
        this.removeTriggerListeners();
        if (trigger === 'hover') {
            let overlayElement;
            this.triggerDisposables.push(this.renderer.listen(el, 'mouseenter', () => {
                this.delayEnterLeave(true, true, this._mouseEnterDelay);
            }));
            this.triggerDisposables.push(this.renderer.listen(el, 'mouseleave', () => {
                var _a;
                this.delayEnterLeave(true, false, this._mouseLeaveDelay);
                if (((_a = this.component) === null || _a === void 0 ? void 0 : _a.overlay.overlayRef) && !overlayElement) {
                    overlayElement = this.component.overlay.overlayRef.overlayElement;
                    this.triggerDisposables.push(this.renderer.listen(overlayElement, 'mouseenter', () => {
                        this.delayEnterLeave(false, true, this._mouseEnterDelay);
                    }));
                    this.triggerDisposables.push(this.renderer.listen(overlayElement, 'mouseleave', () => {
                        this.delayEnterLeave(false, false, this._mouseLeaveDelay);
                    }));
                }
            }));
        }
        else if (trigger === 'focus') {
            this.triggerDisposables.push(this.renderer.listen(el, 'focus', () => this.show()));
            this.triggerDisposables.push(this.renderer.listen(el, 'blur', () => this.hide()));
        }
        else if (trigger === 'click') {
            this.triggerDisposables.push(this.renderer.listen(el, 'click', (e) => {
                e.preventDefault();
                this.show();
            }));
        }
        // Else do nothing because user wants to control the visibility programmatically.
    }
    updatePropertiesByChanges(changes) {
        this.updatePropertiesByKeys(Object.keys(changes));
    }
    updatePropertiesByKeys(keys) {
        var _a;
        const mappingProperties = Object.assign({ 
            // common mappings
            title: ['nzTitle', () => this._title], directiveTitle: ['nzTitle', () => this._title], content: ['nzContent', () => this._content], directiveContent: ['nzContent', () => this._content], trigger: ['nzTrigger', () => this._trigger], placement: ['nzPlacement', () => this._placement], visible: ['nzVisible', () => this._visible], mouseEnterDelay: ['nzMouseEnterDelay', () => this._mouseEnterDelay], mouseLeaveDelay: ['nzMouseLeaveDelay', () => this._mouseLeaveDelay], overlayClassName: ['nzOverlayClassName', () => this._overlayClassName], overlayStyle: ['nzOverlayStyle', () => this._overlayStyle] }, this.getProxyPropertyMap());
        (keys || Object.keys(mappingProperties).filter(key => !key.startsWith('directive'))).forEach((property) => {
            if (mappingProperties[property]) {
                const [name, valueFn] = mappingProperties[property];
                this.updateComponentValue(name, valueFn());
            }
        });
        (_a = this.component) === null || _a === void 0 ? void 0 : _a.updateByDirective();
    }
    initProperties() {
        this.updatePropertiesByKeys();
    }
    updateComponentValue(key, value) {
        if (typeof value !== 'undefined') {
            // @ts-ignore
            this.component[key] = value;
        }
    }
    delayEnterLeave(isOrigin, isEnter, delay = -1) {
        if (this.delayTimer) {
            this.clearTogglingTimer();
        }
        else if (delay > 0) {
            this.delayTimer = setTimeout(() => {
                this.delayTimer = undefined;
                isEnter ? this.show() : this.hide();
            }, delay * 1000);
        }
        else {
            // `isOrigin` is used due to the tooltip will not hide immediately
            // (may caused by the fade-out animation).
            isEnter && isOrigin ? this.show() : this.hide();
        }
    }
    removeTriggerListeners() {
        this.triggerDisposables.forEach(dispose => dispose());
        this.triggerDisposables.length = 0;
    }
    clearTogglingTimer() {
        if (this.delayTimer) {
            clearTimeout(this.delayTimer);
            this.delayTimer = undefined;
        }
    }
}
NzTooltipBaseDirective.ɵfac = function NzTooltipBaseDirective_Factory(t) { return new (t || NzTooltipBaseDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ViewContainerRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ComponentFactoryResolver), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.NzNoAnimationDirective), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.NzConfigService)); };
NzTooltipBaseDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: NzTooltipBaseDirective, features: [ɵngcc0.ɵɵNgOnChangesFeature] });
NzTooltipBaseDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: ViewContainerRef },
    { type: ComponentFactoryResolver },
    { type: Renderer2 },
    { type: NzNoAnimationDirective },
    { type: NzConfigService }
];
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzTooltipBaseDirective, [{
        type: Directive
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc0.ViewContainerRef }, { type: ɵngcc0.ComponentFactoryResolver }, { type: ɵngcc0.Renderer2 }, { type: ɵngcc1.NzNoAnimationDirective }, { type: ɵngcc2.NzConfigService }]; }, null); })();
// tslint:disable-next-line:directive-class-suffix
export class NzTooltipBaseComponent {
    constructor(cdr, directionality, noAnimation) {
        this.cdr = cdr;
        this.directionality = directionality;
        this.noAnimation = noAnimation;
        this.nzTitle = null;
        this.nzContent = null;
        this.nzOverlayStyle = {};
        this.nzBackdrop = false;
        this.nzVisibleChange = new Subject();
        this._visible = false;
        this._trigger = 'hover';
        this.preferredPlacement = 'top';
        this.dir = 'ltr';
        this._classMap = {};
        this._prefix = 'ant-tooltip';
        this._positions = [...DEFAULT_TOOLTIP_POSITIONS];
        this.destroy$ = new Subject();
    }
    set nzVisible(value) {
        const visible = toBoolean(value);
        if (this._visible !== visible) {
            this._visible = visible;
            this.nzVisibleChange.next(visible);
        }
    }
    get nzVisible() {
        return this._visible;
    }
    set nzTrigger(value) {
        this._trigger = value;
    }
    get nzTrigger() {
        return this._trigger;
    }
    set nzPlacement(value) {
        const preferredPosition = value.map(placement => POSITION_MAP[placement]);
        this._positions = [...preferredPosition, ...DEFAULT_TOOLTIP_POSITIONS];
    }
    ngOnInit() {
        var _a;
        (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
            this.dir = direction;
            this.cdr.detectChanges();
        });
        this.dir = this.directionality.value;
    }
    ngOnDestroy() {
        this.nzVisibleChange.complete();
        this.destroy$.next();
        this.destroy$.complete();
    }
    show() {
        if (this.nzVisible) {
            return;
        }
        if (!this.isEmpty()) {
            this.nzVisible = true;
            this.nzVisibleChange.next(true);
            this.cdr.detectChanges();
        }
        // for ltr for overlay to display tooltip in correct placement in rtl direction.
        if (this.origin && this.overlay && this.overlay.overlayRef && this.overlay.overlayRef.getDirection() === 'rtl') {
            this.overlay.overlayRef.setDirection('ltr');
        }
    }
    hide() {
        if (!this.nzVisible) {
            return;
        }
        this.nzVisible = false;
        this.nzVisibleChange.next(false);
        this.cdr.detectChanges();
    }
    updateByDirective() {
        this.updateStyles();
        this.cdr.detectChanges();
        Promise.resolve().then(() => {
            this.updatePosition();
            this.updateVisibilityByTitle();
        });
    }
    /**
     * Force the component to update its position.
     */
    updatePosition() {
        if (this.origin && this.overlay && this.overlay.overlayRef) {
            this.overlay.overlayRef.updatePosition();
        }
    }
    onPositionChange(position) {
        this.preferredPlacement = getPlacementName(position);
        this.updateStyles();
        // We have to trigger immediate change detection or the element would blink.
        this.cdr.detectChanges();
    }
    updateStyles() {
        this._classMap = {
            [this.nzOverlayClassName]: true,
            [`${this._prefix}-placement-${this.preferredPlacement}`]: true
        };
    }
    setOverlayOrigin(origin) {
        this.origin = origin;
        this.cdr.markForCheck();
    }
    onClickOutside(event) {
        if (!this.origin.elementRef.nativeElement.contains(event.target) && this.nzTrigger !== null) {
            this.hide();
        }
    }
    /**
     * Hide the component while the content is empty.
     */
    updateVisibilityByTitle() {
        if (this.isEmpty()) {
            this.hide();
        }
    }
}
NzTooltipBaseComponent.ɵfac = function NzTooltipBaseComponent_Factory(t) { return new (t || NzTooltipBaseComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc3.Directionality, 8), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.NzNoAnimationDirective)); };
NzTooltipBaseComponent.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: NzTooltipBaseComponent, viewQuery: function NzTooltipBaseComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c0, true);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.overlay = _t.first);
    } } });
NzTooltipBaseComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: Directionality, decorators: [{ type: Optional }] },
    { type: NzNoAnimationDirective }
];
NzTooltipBaseComponent.propDecorators = {
    overlay: [{ type: ViewChild, args: ['overlay', { static: false },] }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzTooltipBaseComponent, [{
        type: Directive
    }], function () { return [{ type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc3.Directionality, decorators: [{
                type: Optional
            }] }, { type: ɵngcc1.NzNoAnimationDirective }]; }, { overlay: [{
            type: ViewChild,
            args: ['overlay', { static: false }]
        }] }); })();
export function isTooltipEmpty(value) {
    return value instanceof TemplateRef ? false : value === '' || !isNotNil(value);
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vY29tcG9uZW50cy90b29sdGlwL2Jhc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUVILE9BQU8sRUFBYSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsbUJBQW1CLEVBQTRFLE1BQU0sc0JBQXNCLENBQUM7QUFDckksT0FBTyxFQUVMLGlCQUFpQixFQUVqQix3QkFBd0IsRUFDeEIsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBSVosUUFBUSxFQUNSLFNBQVMsRUFFVCxXQUFXLEVBQ1gsU0FBUyxFQUNULGdCQUFnQixFQUNqQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsZUFBZSxFQUFtQyxNQUFNLDJCQUEyQixDQUFDO0FBQzdGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxnQkFBZ0IsRUFBRSxZQUFZLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUV2RyxPQUFPLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzlELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLG9CQUFvQixFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7O0FBU2pFLE1BQU0sT0FBZ0Isc0JBQXNCO0FBQUcsSUE0RTdDLFlBQ1MsVUFBc0IsRUFDbkIsUUFBMEIsRUFDMUIsUUFBa0MsRUFDbEMsUUFBbUIsRUFDbkIsV0FBb0MsRUFDcEMsZUFBaUM7QUFDNUMsUUFOUSxlQUFVLEdBQVYsVUFBVSxDQUFZO0FBQUMsUUFDcEIsYUFBUSxHQUFSLFFBQVEsQ0FBa0I7QUFBQyxRQUMzQixhQUFRLEdBQVIsUUFBUSxDQUEwQjtBQUFDLFFBQ25DLGFBQVEsR0FBUixRQUFRLENBQVc7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LElBQUUsQ0FBQztBQUNILElBQ0U7QUFDRjtBQUNFLE9BQUc7QUFDTCxJQUFVLHVCQUF1QjtBQUFLLFFBQ2xDLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxFQUFFO0FBQ3hCLFlBQU0sSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0FBQ2xCLFNBQUs7QUFDTCxJQUFFLENBQUM7QUFDSDtrREFoS0MsU0FBUzs7Ozs7O1dBQ1I7QUFBQztBQUNILFlBMVNFLGlCQUFpQjtBQUNqQixZQUxrQixjQUFjLHVCQTBXN0IsUUFBUTtBQUFPLFlBclZYLHNCQUFzQjtBQUFHO0FBQUc7QUFDaEMsc0JBMlJGLFNBQVMsU0FBQyxTQUFTLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFO0FBQU07Ozs7Ozs7O29CQUFFO0FBa0tqRCxNQUFNLFVBQVUsY0FBYyxDQUFDLEtBQXdDO0FBQUksSUFDekUsT0FBTyxLQUFLLFlBQVksV0FBVyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssS0FBSyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDakYsQ0FBQztBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHsgRGlyZWN0aW9uLCBEaXJlY3Rpb25hbGl0eSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9iaWRpJztcbmltcG9ydCB7IENka0Nvbm5lY3RlZE92ZXJsYXksIENka092ZXJsYXlPcmlnaW4sIENvbm5lY3RlZE92ZXJsYXlQb3NpdGlvbkNoYW5nZSwgQ29ubmVjdGlvblBvc2l0aW9uUGFpciB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcbmltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnRGYWN0b3J5LFxuICBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gIERpcmVjdGl2ZSxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPcHRpb25hbCxcbiAgUmVuZGVyZXIyLFxuICBTaW1wbGVDaGFuZ2VzLFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0NoaWxkLFxuICBWaWV3Q29udGFpbmVyUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTnpDb25maWdTZXJ2aWNlLCBQb3BDb25maXJtQ29uZmlnLCBQb3BvdmVyQ29uZmlnIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL2NvbmZpZyc7XG5pbXBvcnQgeyBOek5vQW5pbWF0aW9uRGlyZWN0aXZlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL25vLWFuaW1hdGlvbic7XG5pbXBvcnQgeyBERUZBVUxUX1RPT0xUSVBfUE9TSVRJT05TLCBnZXRQbGFjZW1lbnROYW1lLCBQT1NJVElPTl9NQVAgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvb3ZlcmxheSc7XG5pbXBvcnQgeyBCb29sZWFuSW5wdXQsIE5nQ2xhc3NJbnRlcmZhY2UsIE5nU3R5bGVJbnRlcmZhY2UsIE56U2FmZUFueSwgTnpUU1R5cGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuaW1wb3J0IHsgaXNOb3ROaWwsIHRvQm9vbGVhbiB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS91dGlsJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRpc3RpbmN0VW50aWxDaGFuZ2VkLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvcGVydHlNYXBwaW5nIHtcbiAgW2tleTogc3RyaW5nXTogW3N0cmluZywgKCkgPT4gdW5rbm93bl07XG59XG5cbmV4cG9ydCB0eXBlIE56VG9vbHRpcFRyaWdnZXIgPSAnY2xpY2snIHwgJ2ZvY3VzJyB8ICdob3ZlcicgfCBudWxsO1xuXG5ARGlyZWN0aXZlKClcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBOelRvb2x0aXBCYXNlRGlyZWN0aXZlIGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIEFmdGVyVmlld0luaXQge1xuICBjb25maWc/OiBSZXF1aXJlZDxQb3BvdmVyQ29uZmlnIHwgUG9wQ29uZmlybUNvbmZpZz47XG4gIGRpcmVjdGl2ZVRpdGxlPzogTnpUU1R5cGUgfCBudWxsO1xuICBkaXJlY3RpdmVDb250ZW50PzogTnpUU1R5cGUgfCBudWxsO1xuICB0aXRsZT86IE56VFNUeXBlIHwgbnVsbDtcbiAgY29udGVudD86IE56VFNUeXBlIHwgbnVsbDtcbiAgdHJpZ2dlcj86IE56VG9vbHRpcFRyaWdnZXI7XG4gIHBsYWNlbWVudD86IHN0cmluZyB8IHN0cmluZ1tdO1xuICBvcmlnaW4/OiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PjtcbiAgdmlzaWJsZT86IGJvb2xlYW47XG4gIG1vdXNlRW50ZXJEZWxheT86IG51bWJlcjtcbiAgbW91c2VMZWF2ZURlbGF5PzogbnVtYmVyO1xuICBvdmVybGF5Q2xhc3NOYW1lPzogc3RyaW5nO1xuICBvdmVybGF5U3R5bGU/OiBOZ1N0eWxlSW50ZXJmYWNlO1xuICB2aXNpYmxlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuXG4gIC8qKlxuICAgKiBGb3IgY3JlYXRlIHRvb2x0aXAgZHluYW1pY2FsbHkuIFRoaXMgc2hvdWxkIGJlIG92ZXJyaWRlIGZvciBlYWNoIGRpZmZlcmVudCBjb21wb25lbnQuXG4gICAqL1xuICBwcm90ZWN0ZWQgY29tcG9uZW50RmFjdG9yeSE6IENvbXBvbmVudEZhY3Rvcnk8TnpUb29sdGlwQmFzZUNvbXBvbmVudD47XG5cbiAgLyoqXG4gICAqIFRoaXMgdHJ1ZSB0aXRsZSB0aGF0IHdvdWxkIGJlIHVzZWQgaW4gb3RoZXIgcGFydHMgb24gdGhpcyBjb21wb25lbnQuXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0IF90aXRsZSgpOiBOelRTVHlwZSB8IG51bGwge1xuICAgIHJldHVybiB0aGlzLnRpdGxlIHx8IHRoaXMuZGlyZWN0aXZlVGl0bGUgfHwgbnVsbDtcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXQgX2NvbnRlbnQoKTogTnpUU1R5cGUgfCBudWxsIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZW50IHx8IHRoaXMuZGlyZWN0aXZlQ29udGVudCB8fCBudWxsO1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldCBfdHJpZ2dlcigpOiBOelRvb2x0aXBUcmlnZ2VyIHtcbiAgICByZXR1cm4gdHlwZW9mIHRoaXMudHJpZ2dlciAhPT0gJ3VuZGVmaW5lZCcgPyB0aGlzLnRyaWdnZXIgOiAnaG92ZXInO1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldCBfcGxhY2VtZW50KCk6IHN0cmluZ1tdIHtcbiAgICBjb25zdCBwID0gdGhpcy5wbGFjZW1lbnQ7XG4gICAgcmV0dXJuIEFycmF5LmlzQXJyYXkocCkgJiYgcC5sZW5ndGggPiAwID8gcCA6IHR5cGVvZiBwID09PSAnc3RyaW5nJyAmJiBwID8gW3BdIDogWyd0b3AnXTtcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXQgX3Zpc2libGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICh0eXBlb2YgdGhpcy52aXNpYmxlICE9PSAndW5kZWZpbmVkJyA/IHRoaXMudmlzaWJsZSA6IHRoaXMuaW50ZXJuYWxWaXNpYmxlKSB8fCBmYWxzZTtcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXQgX21vdXNlRW50ZXJEZWxheSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLm1vdXNlRW50ZXJEZWxheSB8fCAwLjE1O1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldCBfbW91c2VMZWF2ZURlbGF5KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMubW91c2VMZWF2ZURlbGF5IHx8IDAuMTtcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXQgX292ZXJsYXlDbGFzc05hbWUoKTogc3RyaW5nIHwgbnVsbCB7XG4gICAgcmV0dXJuIHRoaXMub3ZlcmxheUNsYXNzTmFtZSB8fCBudWxsO1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldCBfb3ZlcmxheVN0eWxlKCk6IE5nU3R5bGVJbnRlcmZhY2UgfCBudWxsIHtcbiAgICByZXR1cm4gdGhpcy5vdmVybGF5U3R5bGUgfHwgbnVsbDtcbiAgfVxuXG4gIHByaXZhdGUgaW50ZXJuYWxWaXNpYmxlID0gZmFsc2U7XG5cbiAgcHJvdGVjdGVkIGdldFByb3h5UHJvcGVydHlNYXAoKTogUHJvcGVydHlNYXBwaW5nIHtcbiAgICByZXR1cm4ge1xuICAgICAgbm9BbmltYXRpb246IFsnbm9BbmltYXRpb24nLCAoKSA9PiB0aGlzLm5vQW5pbWF0aW9uXVxuICAgIH07XG4gIH1cblxuICBjb21wb25lbnQ/OiBOelRvb2x0aXBCYXNlQ29tcG9uZW50O1xuXG4gIHByb3RlY3RlZCByZWFkb25seSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG4gIHByb3RlY3RlZCByZWFkb25seSB0cmlnZ2VyRGlzcG9zYWJsZXM6IEFycmF5PCgpID0+IHZvaWQ+ID0gW107XG5cbiAgcHJpdmF0ZSBkZWxheVRpbWVyPzogbnVtYmVyO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHByb3RlY3RlZCBob3N0VmlldzogVmlld0NvbnRhaW5lclJlZixcbiAgICBwcm90ZWN0ZWQgcmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgICBwcm90ZWN0ZWQgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcm90ZWN0ZWQgbm9BbmltYXRpb24/OiBOek5vQW5pbWF0aW9uRGlyZWN0aXZlLFxuICAgIHByb3RlY3RlZCBuekNvbmZpZ1NlcnZpY2U/OiBOekNvbmZpZ1NlcnZpY2VcbiAgKSB7fVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBjb25zdCB7IHRyaWdnZXIgfSA9IGNoYW5nZXM7XG5cbiAgICBpZiAodHJpZ2dlciAmJiAhdHJpZ2dlci5pc0ZpcnN0Q2hhbmdlKCkpIHtcbiAgICAgIHRoaXMucmVnaXN0ZXJUcmlnZ2VycygpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmNvbXBvbmVudCkge1xuICAgICAgdGhpcy51cGRhdGVQcm9wZXJ0aWVzQnlDaGFuZ2VzKGNoYW5nZXMpO1xuICAgIH1cbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpO1xuICAgIHRoaXMucmVnaXN0ZXJUcmlnZ2VycygpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xuXG4gICAgLy8gQ2xlYXIgdG9nZ2xpbmcgdGltZXIuIElzc3VlICMzODc1ICM0MzE3ICM0Mzg2XG4gICAgdGhpcy5jbGVhclRvZ2dsaW5nVGltZXIoKTtcbiAgICB0aGlzLnJlbW92ZVRyaWdnZXJMaXN0ZW5lcnMoKTtcbiAgfVxuXG4gIHNob3coKTogdm9pZCB7XG4gICAgdGhpcy5jb21wb25lbnQ/LnNob3coKTtcbiAgfVxuXG4gIGhpZGUoKTogdm9pZCB7XG4gICAgdGhpcy5jb21wb25lbnQ/LmhpZGUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGb3JjZSB0aGUgY29tcG9uZW50IHRvIHVwZGF0ZSBpdHMgcG9zaXRpb24uXG4gICAqL1xuICB1cGRhdGVQb3NpdGlvbigpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jb21wb25lbnQpIHtcbiAgICAgIHRoaXMuY29tcG9uZW50LnVwZGF0ZVBvc2l0aW9uKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIGR5bmFtaWMgdG9vbHRpcCBjb21wb25lbnQuIFRoaXMgbWV0aG9kIGNhbiBiZSBvdmVycmlkZS5cbiAgICovXG4gIHByb3RlY3RlZCBjcmVhdGVDb21wb25lbnQoKTogdm9pZCB7XG4gICAgY29uc3QgY29tcG9uZW50UmVmID0gdGhpcy5ob3N0Vmlldy5jcmVhdGVDb21wb25lbnQodGhpcy5jb21wb25lbnRGYWN0b3J5KTtcblxuICAgIHRoaXMuY29tcG9uZW50ID0gY29tcG9uZW50UmVmLmluc3RhbmNlIGFzIE56VG9vbHRpcEJhc2VDb21wb25lbnQ7XG5cbiAgICAvLyBSZW1vdmUgdGhlIGNvbXBvbmVudCdzIERPTSBiZWNhdXNlIGl0IHNob3VsZCBiZSBpbiB0aGUgb3ZlcmxheSBjb250YWluZXIuXG4gICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDaGlsZCh0aGlzLnJlbmRlcmVyLnBhcmVudE5vZGUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpLCBjb21wb25lbnRSZWYubG9jYXRpb24ubmF0aXZlRWxlbWVudCk7XG4gICAgdGhpcy5jb21wb25lbnQuc2V0T3ZlcmxheU9yaWdpbih7IGVsZW1lbnRSZWY6IHRoaXMub3JpZ2luIHx8IHRoaXMuZWxlbWVudFJlZiB9KTtcblxuICAgIHRoaXMuaW5pdFByb3BlcnRpZXMoKTtcblxuICAgIHRoaXMuY29tcG9uZW50Lm56VmlzaWJsZUNoYW5nZS5waXBlKGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKCh2aXNpYmxlOiBib29sZWFuKSA9PiB7XG4gICAgICB0aGlzLmludGVybmFsVmlzaWJsZSA9IHZpc2libGU7XG4gICAgICB0aGlzLnZpc2libGVDaGFuZ2UuZW1pdCh2aXNpYmxlKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByb3RlY3RlZCByZWdpc3RlclRyaWdnZXJzKCk6IHZvaWQge1xuICAgIC8vIFdoZW4gdGhlIG1ldGhvZCBnZXRzIGludm9rZWQsIGFsbCBwcm9wZXJ0aWVzIGhhcyBiZWVuIHN5bmNlZCB0byB0aGUgZHluYW1pYyBjb21wb25lbnQuXG4gICAgLy8gQWZ0ZXIgcmVtb3ZpbmcgdGhlIG9sZCBBUEksIHdlIGNhbiBqdXN0IGNoZWNrIHRoZSBkaXJlY3RpdmUncyBvd24gYG56VHJpZ2dlcmAuXG4gICAgY29uc3QgZWwgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgICBjb25zdCB0cmlnZ2VyID0gdGhpcy50cmlnZ2VyO1xuXG4gICAgdGhpcy5yZW1vdmVUcmlnZ2VyTGlzdGVuZXJzKCk7XG5cbiAgICBpZiAodHJpZ2dlciA9PT0gJ2hvdmVyJykge1xuICAgICAgbGV0IG92ZXJsYXlFbGVtZW50OiBIVE1MRWxlbWVudDtcbiAgICAgIHRoaXMudHJpZ2dlckRpc3Bvc2FibGVzLnB1c2goXG4gICAgICAgIHRoaXMucmVuZGVyZXIubGlzdGVuKGVsLCAnbW91c2VlbnRlcicsICgpID0+IHtcbiAgICAgICAgICB0aGlzLmRlbGF5RW50ZXJMZWF2ZSh0cnVlLCB0cnVlLCB0aGlzLl9tb3VzZUVudGVyRGVsYXkpO1xuICAgICAgICB9KVxuICAgICAgKTtcbiAgICAgIHRoaXMudHJpZ2dlckRpc3Bvc2FibGVzLnB1c2goXG4gICAgICAgIHRoaXMucmVuZGVyZXIubGlzdGVuKGVsLCAnbW91c2VsZWF2ZScsICgpID0+IHtcbiAgICAgICAgICB0aGlzLmRlbGF5RW50ZXJMZWF2ZSh0cnVlLCBmYWxzZSwgdGhpcy5fbW91c2VMZWF2ZURlbGF5KTtcbiAgICAgICAgICBpZiAodGhpcy5jb21wb25lbnQ/Lm92ZXJsYXkub3ZlcmxheVJlZiAmJiAhb3ZlcmxheUVsZW1lbnQpIHtcbiAgICAgICAgICAgIG92ZXJsYXlFbGVtZW50ID0gdGhpcy5jb21wb25lbnQub3ZlcmxheS5vdmVybGF5UmVmLm92ZXJsYXlFbGVtZW50O1xuICAgICAgICAgICAgdGhpcy50cmlnZ2VyRGlzcG9zYWJsZXMucHVzaChcbiAgICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5saXN0ZW4ob3ZlcmxheUVsZW1lbnQsICdtb3VzZWVudGVyJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZGVsYXlFbnRlckxlYXZlKGZhbHNlLCB0cnVlLCB0aGlzLl9tb3VzZUVudGVyRGVsYXkpO1xuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHRoaXMudHJpZ2dlckRpc3Bvc2FibGVzLnB1c2goXG4gICAgICAgICAgICAgIHRoaXMucmVuZGVyZXIubGlzdGVuKG92ZXJsYXlFbGVtZW50LCAnbW91c2VsZWF2ZScsICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmRlbGF5RW50ZXJMZWF2ZShmYWxzZSwgZmFsc2UsIHRoaXMuX21vdXNlTGVhdmVEZWxheSk7XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfSBlbHNlIGlmICh0cmlnZ2VyID09PSAnZm9jdXMnKSB7XG4gICAgICB0aGlzLnRyaWdnZXJEaXNwb3NhYmxlcy5wdXNoKHRoaXMucmVuZGVyZXIubGlzdGVuKGVsLCAnZm9jdXMnLCAoKSA9PiB0aGlzLnNob3coKSkpO1xuICAgICAgdGhpcy50cmlnZ2VyRGlzcG9zYWJsZXMucHVzaCh0aGlzLnJlbmRlcmVyLmxpc3RlbihlbCwgJ2JsdXInLCAoKSA9PiB0aGlzLmhpZGUoKSkpO1xuICAgIH0gZWxzZSBpZiAodHJpZ2dlciA9PT0gJ2NsaWNrJykge1xuICAgICAgdGhpcy50cmlnZ2VyRGlzcG9zYWJsZXMucHVzaChcbiAgICAgICAgdGhpcy5yZW5kZXJlci5saXN0ZW4oZWwsICdjbGljaycsIChlOiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIHRoaXMuc2hvdygpO1xuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9XG4gICAgLy8gRWxzZSBkbyBub3RoaW5nIGJlY2F1c2UgdXNlciB3YW50cyB0byBjb250cm9sIHRoZSB2aXNpYmlsaXR5IHByb2dyYW1tYXRpY2FsbHkuXG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZVByb3BlcnRpZXNCeUNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIHRoaXMudXBkYXRlUHJvcGVydGllc0J5S2V5cyhPYmplY3Qua2V5cyhjaGFuZ2VzKSk7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZVByb3BlcnRpZXNCeUtleXMoa2V5cz86IHN0cmluZ1tdKTogdm9pZCB7XG4gICAgY29uc3QgbWFwcGluZ1Byb3BlcnRpZXM6IFByb3BlcnR5TWFwcGluZyA9IHtcbiAgICAgIC8vIGNvbW1vbiBtYXBwaW5nc1xuICAgICAgdGl0bGU6IFsnbnpUaXRsZScsICgpID0+IHRoaXMuX3RpdGxlXSxcbiAgICAgIGRpcmVjdGl2ZVRpdGxlOiBbJ256VGl0bGUnLCAoKSA9PiB0aGlzLl90aXRsZV0sXG4gICAgICBjb250ZW50OiBbJ256Q29udGVudCcsICgpID0+IHRoaXMuX2NvbnRlbnRdLFxuICAgICAgZGlyZWN0aXZlQ29udGVudDogWyduekNvbnRlbnQnLCAoKSA9PiB0aGlzLl9jb250ZW50XSxcbiAgICAgIHRyaWdnZXI6IFsnbnpUcmlnZ2VyJywgKCkgPT4gdGhpcy5fdHJpZ2dlcl0sXG4gICAgICBwbGFjZW1lbnQ6IFsnbnpQbGFjZW1lbnQnLCAoKSA9PiB0aGlzLl9wbGFjZW1lbnRdLFxuICAgICAgdmlzaWJsZTogWyduelZpc2libGUnLCAoKSA9PiB0aGlzLl92aXNpYmxlXSxcbiAgICAgIG1vdXNlRW50ZXJEZWxheTogWyduek1vdXNlRW50ZXJEZWxheScsICgpID0+IHRoaXMuX21vdXNlRW50ZXJEZWxheV0sXG4gICAgICBtb3VzZUxlYXZlRGVsYXk6IFsnbnpNb3VzZUxlYXZlRGVsYXknLCAoKSA9PiB0aGlzLl9tb3VzZUxlYXZlRGVsYXldLFxuICAgICAgb3ZlcmxheUNsYXNzTmFtZTogWyduek92ZXJsYXlDbGFzc05hbWUnLCAoKSA9PiB0aGlzLl9vdmVybGF5Q2xhc3NOYW1lXSxcbiAgICAgIG92ZXJsYXlTdHlsZTogWyduek92ZXJsYXlTdHlsZScsICgpID0+IHRoaXMuX292ZXJsYXlTdHlsZV0sXG4gICAgICAuLi50aGlzLmdldFByb3h5UHJvcGVydHlNYXAoKVxuICAgIH07XG5cbiAgICAoa2V5cyB8fCBPYmplY3Qua2V5cyhtYXBwaW5nUHJvcGVydGllcykuZmlsdGVyKGtleSA9PiAha2V5LnN0YXJ0c1dpdGgoJ2RpcmVjdGl2ZScpKSkuZm9yRWFjaCgocHJvcGVydHk6IE56U2FmZUFueSkgPT4ge1xuICAgICAgaWYgKG1hcHBpbmdQcm9wZXJ0aWVzW3Byb3BlcnR5XSkge1xuICAgICAgICBjb25zdCBbbmFtZSwgdmFsdWVGbl0gPSBtYXBwaW5nUHJvcGVydGllc1twcm9wZXJ0eV07XG4gICAgICAgIHRoaXMudXBkYXRlQ29tcG9uZW50VmFsdWUobmFtZSwgdmFsdWVGbigpKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMuY29tcG9uZW50Py51cGRhdGVCeURpcmVjdGl2ZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBpbml0UHJvcGVydGllcygpOiB2b2lkIHtcbiAgICB0aGlzLnVwZGF0ZVByb3BlcnRpZXNCeUtleXMoKTtcbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlQ29tcG9uZW50VmFsdWUoa2V5OiBzdHJpbmcsIHZhbHVlOiBOelNhZmVBbnkpOiB2b2lkIHtcbiAgICBpZiAodHlwZW9mIHZhbHVlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgdGhpcy5jb21wb25lbnRba2V5XSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZGVsYXlFbnRlckxlYXZlKGlzT3JpZ2luOiBib29sZWFuLCBpc0VudGVyOiBib29sZWFuLCBkZWxheTogbnVtYmVyID0gLTEpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5kZWxheVRpbWVyKSB7XG4gICAgICB0aGlzLmNsZWFyVG9nZ2xpbmdUaW1lcigpO1xuICAgIH0gZWxzZSBpZiAoZGVsYXkgPiAwKSB7XG4gICAgICB0aGlzLmRlbGF5VGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5kZWxheVRpbWVyID0gdW5kZWZpbmVkO1xuICAgICAgICBpc0VudGVyID8gdGhpcy5zaG93KCkgOiB0aGlzLmhpZGUoKTtcbiAgICAgIH0sIGRlbGF5ICogMTAwMCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGBpc09yaWdpbmAgaXMgdXNlZCBkdWUgdG8gdGhlIHRvb2x0aXAgd2lsbCBub3QgaGlkZSBpbW1lZGlhdGVseVxuICAgICAgLy8gKG1heSBjYXVzZWQgYnkgdGhlIGZhZGUtb3V0IGFuaW1hdGlvbikuXG4gICAgICBpc0VudGVyICYmIGlzT3JpZ2luID8gdGhpcy5zaG93KCkgOiB0aGlzLmhpZGUoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHJlbW92ZVRyaWdnZXJMaXN0ZW5lcnMoKTogdm9pZCB7XG4gICAgdGhpcy50cmlnZ2VyRGlzcG9zYWJsZXMuZm9yRWFjaChkaXNwb3NlID0+IGRpc3Bvc2UoKSk7XG4gICAgdGhpcy50cmlnZ2VyRGlzcG9zYWJsZXMubGVuZ3RoID0gMDtcbiAgfVxuXG4gIHByaXZhdGUgY2xlYXJUb2dnbGluZ1RpbWVyKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmRlbGF5VGltZXIpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLmRlbGF5VGltZXIpO1xuICAgICAgdGhpcy5kZWxheVRpbWVyID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgfVxufVxuXG5ARGlyZWN0aXZlKClcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpkaXJlY3RpdmUtY2xhc3Mtc3VmZml4XG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgTnpUb29sdGlwQmFzZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSwgT25Jbml0IHtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX256VmlzaWJsZTogQm9vbGVhbklucHV0O1xuXG4gIEBWaWV3Q2hpbGQoJ292ZXJsYXknLCB7IHN0YXRpYzogZmFsc2UgfSkgb3ZlcmxheSE6IENka0Nvbm5lY3RlZE92ZXJsYXk7XG5cbiAgbnpUaXRsZTogTnpUU1R5cGUgfCBudWxsID0gbnVsbDtcbiAgbnpDb250ZW50OiBOelRTVHlwZSB8IG51bGwgPSBudWxsO1xuICBuek92ZXJsYXlDbGFzc05hbWUhOiBzdHJpbmc7XG4gIG56T3ZlcmxheVN0eWxlOiBOZ1N0eWxlSW50ZXJmYWNlID0ge307XG4gIG56QmFja2Ryb3AgPSBmYWxzZTtcbiAgbnpNb3VzZUVudGVyRGVsYXk/OiBudW1iZXI7XG4gIG56TW91c2VMZWF2ZURlbGF5PzogbnVtYmVyO1xuXG4gIG56VmlzaWJsZUNoYW5nZSA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XG5cbiAgc2V0IG56VmlzaWJsZSh2YWx1ZTogYm9vbGVhbikge1xuICAgIGNvbnN0IHZpc2libGUgPSB0b0Jvb2xlYW4odmFsdWUpO1xuICAgIGlmICh0aGlzLl92aXNpYmxlICE9PSB2aXNpYmxlKSB7XG4gICAgICB0aGlzLl92aXNpYmxlID0gdmlzaWJsZTtcbiAgICAgIHRoaXMubnpWaXNpYmxlQ2hhbmdlLm5leHQodmlzaWJsZSk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IG56VmlzaWJsZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fdmlzaWJsZTtcbiAgfVxuXG4gIF92aXNpYmxlID0gZmFsc2U7XG5cbiAgc2V0IG56VHJpZ2dlcih2YWx1ZTogTnpUb29sdGlwVHJpZ2dlcikge1xuICAgIHRoaXMuX3RyaWdnZXIgPSB2YWx1ZTtcbiAgfVxuXG4gIGdldCBuelRyaWdnZXIoKTogTnpUb29sdGlwVHJpZ2dlciB7XG4gICAgcmV0dXJuIHRoaXMuX3RyaWdnZXI7XG4gIH1cblxuICBwcm90ZWN0ZWQgX3RyaWdnZXI6IE56VG9vbHRpcFRyaWdnZXIgPSAnaG92ZXInO1xuXG4gIHNldCBuelBsYWNlbWVudCh2YWx1ZTogc3RyaW5nW10pIHtcbiAgICBjb25zdCBwcmVmZXJyZWRQb3NpdGlvbiA9IHZhbHVlLm1hcChwbGFjZW1lbnQgPT4gUE9TSVRJT05fTUFQW3BsYWNlbWVudF0pO1xuICAgIHRoaXMuX3Bvc2l0aW9ucyA9IFsuLi5wcmVmZXJyZWRQb3NpdGlvbiwgLi4uREVGQVVMVF9UT09MVElQX1BPU0lUSU9OU107XG4gIH1cblxuICBwcmVmZXJyZWRQbGFjZW1lbnQ6IHN0cmluZyA9ICd0b3AnO1xuXG4gIG9yaWdpbiE6IENka092ZXJsYXlPcmlnaW47XG5cbiAgcHVibGljIGRpcjogRGlyZWN0aW9uID0gJ2x0cic7XG5cbiAgX2NsYXNzTWFwOiBOZ0NsYXNzSW50ZXJmYWNlID0ge307XG5cbiAgX3ByZWZpeCA9ICdhbnQtdG9vbHRpcCc7XG5cbiAgX3Bvc2l0aW9uczogQ29ubmVjdGlvblBvc2l0aW9uUGFpcltdID0gWy4uLkRFRkFVTFRfVE9PTFRJUF9QT1NJVElPTlNdO1xuXG4gIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgZGlyZWN0aW9uYWxpdHk6IERpcmVjdGlvbmFsaXR5LFxuICAgIHB1YmxpYyBub0FuaW1hdGlvbj86IE56Tm9BbmltYXRpb25EaXJlY3RpdmVcbiAgKSB7fVxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmRpcmVjdGlvbmFsaXR5LmNoYW5nZT8ucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZSgoZGlyZWN0aW9uOiBEaXJlY3Rpb24pID0+IHtcbiAgICAgIHRoaXMuZGlyID0gZGlyZWN0aW9uO1xuICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5kaXIgPSB0aGlzLmRpcmVjdGlvbmFsaXR5LnZhbHVlO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5uelZpc2libGVDaGFuZ2UuY29tcGxldGUoKTtcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XG4gIH1cblxuICBzaG93KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm56VmlzaWJsZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5pc0VtcHR5KCkpIHtcbiAgICAgIHRoaXMubnpWaXNpYmxlID0gdHJ1ZTtcbiAgICAgIHRoaXMubnpWaXNpYmxlQ2hhbmdlLm5leHQodHJ1ZSk7XG4gICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfVxuXG4gICAgLy8gZm9yIGx0ciBmb3Igb3ZlcmxheSB0byBkaXNwbGF5IHRvb2x0aXAgaW4gY29ycmVjdCBwbGFjZW1lbnQgaW4gcnRsIGRpcmVjdGlvbi5cbiAgICBpZiAodGhpcy5vcmlnaW4gJiYgdGhpcy5vdmVybGF5ICYmIHRoaXMub3ZlcmxheS5vdmVybGF5UmVmICYmIHRoaXMub3ZlcmxheS5vdmVybGF5UmVmLmdldERpcmVjdGlvbigpID09PSAncnRsJykge1xuICAgICAgdGhpcy5vdmVybGF5Lm92ZXJsYXlSZWYuc2V0RGlyZWN0aW9uKCdsdHInKTtcbiAgICB9XG4gIH1cblxuICBoaWRlKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5uelZpc2libGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLm56VmlzaWJsZSA9IGZhbHNlO1xuICAgIHRoaXMubnpWaXNpYmxlQ2hhbmdlLm5leHQoZmFsc2UpO1xuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuXG4gIHVwZGF0ZUJ5RGlyZWN0aXZlKCk6IHZvaWQge1xuICAgIHRoaXMudXBkYXRlU3R5bGVzKCk7XG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuXG4gICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB7XG4gICAgICB0aGlzLnVwZGF0ZVBvc2l0aW9uKCk7XG4gICAgICB0aGlzLnVwZGF0ZVZpc2liaWxpdHlCeVRpdGxlKCk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogRm9yY2UgdGhlIGNvbXBvbmVudCB0byB1cGRhdGUgaXRzIHBvc2l0aW9uLlxuICAgKi9cbiAgdXBkYXRlUG9zaXRpb24oKTogdm9pZCB7XG4gICAgaWYgKHRoaXMub3JpZ2luICYmIHRoaXMub3ZlcmxheSAmJiB0aGlzLm92ZXJsYXkub3ZlcmxheVJlZikge1xuICAgICAgdGhpcy5vdmVybGF5Lm92ZXJsYXlSZWYudXBkYXRlUG9zaXRpb24oKTtcbiAgICB9XG4gIH1cblxuICBvblBvc2l0aW9uQ2hhbmdlKHBvc2l0aW9uOiBDb25uZWN0ZWRPdmVybGF5UG9zaXRpb25DaGFuZ2UpOiB2b2lkIHtcbiAgICB0aGlzLnByZWZlcnJlZFBsYWNlbWVudCA9IGdldFBsYWNlbWVudE5hbWUocG9zaXRpb24pITtcbiAgICB0aGlzLnVwZGF0ZVN0eWxlcygpO1xuXG4gICAgLy8gV2UgaGF2ZSB0byB0cmlnZ2VyIGltbWVkaWF0ZSBjaGFuZ2UgZGV0ZWN0aW9uIG9yIHRoZSBlbGVtZW50IHdvdWxkIGJsaW5rLlxuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuXG4gIHVwZGF0ZVN0eWxlcygpOiB2b2lkIHtcbiAgICB0aGlzLl9jbGFzc01hcCA9IHtcbiAgICAgIFt0aGlzLm56T3ZlcmxheUNsYXNzTmFtZV06IHRydWUsXG4gICAgICBbYCR7dGhpcy5fcHJlZml4fS1wbGFjZW1lbnQtJHt0aGlzLnByZWZlcnJlZFBsYWNlbWVudH1gXTogdHJ1ZVxuICAgIH07XG4gIH1cblxuICBzZXRPdmVybGF5T3JpZ2luKG9yaWdpbjogQ2RrT3ZlcmxheU9yaWdpbik6IHZvaWQge1xuICAgIHRoaXMub3JpZ2luID0gb3JpZ2luO1xuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgb25DbGlja091dHNpZGUoZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMub3JpZ2luLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jb250YWlucyhldmVudC50YXJnZXQpICYmIHRoaXMubnpUcmlnZ2VyICE9PSBudWxsKSB7XG4gICAgICB0aGlzLmhpZGUoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogSGlkZSB0aGUgY29tcG9uZW50IHdoaWxlIHRoZSBjb250ZW50IGlzIGVtcHR5LlxuICAgKi9cbiAgcHJpdmF0ZSB1cGRhdGVWaXNpYmlsaXR5QnlUaXRsZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pc0VtcHR5KCkpIHtcbiAgICAgIHRoaXMuaGlkZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBFbXB0eSBjb21wb25lbnQgY2Fubm90IGJlIG9wZW5lZC5cbiAgICovXG4gIHByb3RlY3RlZCBhYnN0cmFjdCBpc0VtcHR5KCk6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1Rvb2x0aXBFbXB0eSh2YWx1ZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4gfCBudWxsKTogYm9vbGVhbiB7XG4gIHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmID8gZmFsc2UgOiB2YWx1ZSA9PT0gJycgfHwgIWlzTm90TmlsKHZhbHVlKTtcbn1cbiJdfQ==