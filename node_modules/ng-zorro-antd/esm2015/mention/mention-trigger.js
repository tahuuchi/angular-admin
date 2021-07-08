/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Directive, ElementRef, EventEmitter, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { NZ_MENTION_CONFIG } from './config';
import { NzMentionService } from './mention.service';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from './mention.service';
export const NZ_MENTION_TRIGGER_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => NzMentionTriggerDirective),
    multi: true
};
export class NzMentionTriggerDirective {
    constructor(el, nzMentionService) {
        this.el = el;
        this.nzMentionService = nzMentionService;
        this.onChange = () => { };
        this.onTouched = () => { };
        this.onFocusin = new EventEmitter();
        this.onBlur = new EventEmitter();
        this.onInput = new EventEmitter();
        this.onKeydown = new EventEmitter();
        this.onClick = new EventEmitter();
    }
    completeEvents() {
        this.onFocusin.complete();
        this.onBlur.complete();
        this.onInput.complete();
        this.onKeydown.complete();
        this.onClick.complete();
    }
    focus(caretPos) {
        this.el.nativeElement.focus();
        this.el.nativeElement.setSelectionRange(caretPos, caretPos);
    }
    insertMention(mention) {
        const value = this.el.nativeElement.value;
        const insertValue = `${mention.mention}${NZ_MENTION_CONFIG.split}`;
        const newValue = [value.slice(0, mention.startPos + 1), insertValue, value.slice(mention.endPos, value.length)].join('');
        this.el.nativeElement.value = newValue;
        this.focus(mention.startPos + insertValue.length + 1);
        this.onChange(newValue);
        this.value = newValue;
    }
    writeValue(value) {
        this.value = value;
        if (typeof value === 'string') {
            this.el.nativeElement.value = value;
        }
        else {
            this.el.nativeElement.value = '';
        }
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    ngAfterViewInit() {
        this.nzMentionService.registerTrigger(this);
    }
    ngOnDestroy() {
        this.completeEvents();
    }
}
NzMentionTriggerDirective.ɵfac = function NzMentionTriggerDirective_Factory(t) { return new (t || NzMentionTriggerDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.NzMentionService)); };
NzMentionTriggerDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: NzMentionTriggerDirective, selectors: [["input", "nzMentionTrigger", ""], ["textarea", "nzMentionTrigger", ""]], hostAttrs: ["autocomplete", "off"], hostBindings: function NzMentionTriggerDirective_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("focusin", function NzMentionTriggerDirective_focusin_HostBindingHandler() { return ctx.onFocusin.emit(); })("blur", function NzMentionTriggerDirective_blur_HostBindingHandler() { return ctx.onBlur.emit(); })("input", function NzMentionTriggerDirective_input_HostBindingHandler($event) { return ctx.onInput.emit($event); })("keydown", function NzMentionTriggerDirective_keydown_HostBindingHandler($event) { return ctx.onKeydown.emit($event); })("click", function NzMentionTriggerDirective_click_HostBindingHandler($event) { return ctx.onClick.emit($event); });
    } }, exportAs: ["nzMentionTrigger"], features: [ɵngcc0.ɵɵProvidersFeature([NZ_MENTION_TRIGGER_ACCESSOR])] });
NzMentionTriggerDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: NzMentionService }
];
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzMentionTriggerDirective, [{
        type: Directive,
        args: [{
                selector: 'input[nzMentionTrigger], textarea[nzMentionTrigger]',
                exportAs: 'nzMentionTrigger',
                providers: [NZ_MENTION_TRIGGER_ACCESSOR],
                host: {
                    autocomplete: 'off',
                    '(focusin)': 'onFocusin.emit()',
                    '(blur)': 'onBlur.emit()',
                    '(input)': 'onInput.emit($event)',
                    '(keydown)': 'onKeydown.emit($event)',
                    '(click)': 'onClick.emit($event)'
                }
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc1.NzMentionService }]; }, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudGlvbi10cmlnZ2VyLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9jb21wb25lbnRzL21lbnRpb24vbWVudGlvbi10cmlnZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFFSCxPQUFPLEVBQWlCLFNBQVMsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFvQixVQUFVLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFDNUgsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXpFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUc3QyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7O0FBRXJELE1BQU0sQ0FBQyxNQUFNLDJCQUEyQixHQUFxQjtBQUM3RCxJQUFFLE9BQU8sRUFBRSxpQkFBaUI7QUFDNUIsSUFBRSxXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLHlCQUF5QixDQUFDO0FBQzFELElBQUUsS0FBSyxFQUFFLElBQUk7QUFDYixDQUFDLENBQUM7QUFlRixNQUFNLE9BQU8seUJBQXlCO0FBQUcsSUFXdkMsWUFBbUIsRUFBYyxFQUFVLGdCQUFrQztBQUFJLFFBQTlELE9BQUUsR0FBRixFQUFFLENBQVk7QUFBQyxRQUFTLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7QUFBQyxRQVY5RSxhQUFRLEdBQWlCLEdBQUcsRUFBRSxHQUFFLENBQUMsQ0FBQztBQUNwQyxRQUFFLGNBQVMsR0FBa0IsR0FBRyxFQUFFLEdBQUUsQ0FBQyxDQUFDO0FBQ3RDLFFBQ1csY0FBUyxHQUF1QixJQUFJLFlBQVksRUFBRSxDQUFDO0FBQzlELFFBQVcsV0FBTSxHQUF1QixJQUFJLFlBQVksRUFBRSxDQUFDO0FBQzNELFFBQVcsWUFBTyxHQUFnQyxJQUFJLFlBQVksRUFBRSxDQUFDO0FBQ3JFLFFBQVcsY0FBUyxHQUFnQyxJQUFJLFlBQVksRUFBRSxDQUFDO0FBQ3ZFLFFBQVcsWUFBTyxHQUE2QixJQUFJLFlBQVksRUFBRSxDQUFDO0FBQ2xFLElBRWtGLENBQUM7QUFDbkYsSUFDRSxjQUFjO0FBQUssUUFDakIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztBQUM5QixRQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUM7QUFDM0IsUUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDO0FBQzVCLFFBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztBQUM5QixRQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUM7QUFDNUIsSUFBRSxDQUFDO0FBQ0gsSUFDRSxLQUFLLENBQUMsUUFBaUI7QUFBSSxRQUN6QixJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUNsQyxRQUFJLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQztBQUNoRSxJQUFFLENBQUM7QUFDSCxJQUNFLGFBQWEsQ0FBQyxPQUFnQjtBQUFJLFFBQ2hDLE1BQU0sS0FBSyxHQUFXLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQztBQUN0RCxRQUFJLE1BQU0sV0FBVyxHQUFHLEdBQUcsT0FBTyxDQUFDLE9BQU8sR0FBRyxpQkFBaUIsQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUN2RSxRQUFJLE1BQU0sUUFBUSxHQUFHLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsT0FBTyxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsRUFBRSxXQUFXLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUM3SCxRQUFJLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUM7QUFDM0MsUUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxRQUFRLEdBQUcsV0FBVyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztBQUMxRCxRQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDNUIsUUFBSSxJQUFJLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQztBQUMxQixJQUFFLENBQUM7QUFDSCxJQUNFLFVBQVUsQ0FBQyxLQUFhO0FBQUksUUFDMUIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7QUFDdkIsUUFBSSxJQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVEsRUFBRTtBQUNuQyxZQUFNLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7QUFDMUMsU0FBSztBQUFDLGFBQUs7QUFDWCxZQUFNLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7QUFDdkMsU0FBSztBQUNMLElBQUUsQ0FBQztBQUNILElBQ0UsZ0JBQWdCLENBQUMsRUFBMkI7QUFBSSxRQUM5QyxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztBQUN2QixJQUFFLENBQUM7QUFDSCxJQUNFLGlCQUFpQixDQUFDLEVBQWM7QUFBSSxRQUNsQyxJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztBQUN4QixJQUFFLENBQUM7QUFDSCxJQUNFLGVBQWU7QUFBSyxRQUNsQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ2hELElBQUUsQ0FBQztBQUNILElBQ0UsV0FBVztBQUFLLFFBQ2QsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0FBQzFCLElBQUUsQ0FBQztBQUNIO3FEQXpFQyxTQUFTLFNBQUMsa0JBQ1QsUUFBUSxFQUFFLHFEQUFxRCxrQkFDL0QsUUFBUSxFQUFFLGtCQUFrQixrQkFDNUI7QUFBUyxFQUFFLENBQUMsMkJBQTJCLENBQUMsa0JBQ3hDLElBQUksRUFBRSxzQkFDSixZQUFZLEVBQUUsS0FBSyxzQkFDbkIsV0FBVyxFQUFFLGtCQUFrQixzQkFDL0IsUUFBUSxFQUFFLGVBQWUsc0JBQ3pCLFNBQVMsRUFBRSxzQkFBc0Isc0JBQ2pDLFdBQVcsRUFBRTtRQUF3QixzQkFDckMsU0FBUyxFQUFFLHNCQUFzQixrQkFDbEMsY0FDRjtpSEFDSTtBQUFDO0FBQW1ELFlBM0J0QixVQUFVO0FBQUksWUFNeEMsZ0JBQWdCO0FBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7OEdBQUU7QUFBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7IEFmdGVyVmlld0luaXQsIERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBFeGlzdGluZ1Byb3ZpZGVyLCBmb3J3YXJkUmVmLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE9uQ2hhbmdlVHlwZSwgT25Ub3VjaGVkVHlwZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5pbXBvcnQgeyBOWl9NRU5USU9OX0NPTkZJRyB9IGZyb20gJy4vY29uZmlnJztcblxuaW1wb3J0IHsgTWVudGlvbiB9IGZyb20gJy4vbWVudGlvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgTnpNZW50aW9uU2VydmljZSB9IGZyb20gJy4vbWVudGlvbi5zZXJ2aWNlJztcblxuZXhwb3J0IGNvbnN0IE5aX01FTlRJT05fVFJJR0dFUl9BQ0NFU1NPUjogRXhpc3RpbmdQcm92aWRlciA9IHtcbiAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IE56TWVudGlvblRyaWdnZXJEaXJlY3RpdmUpLFxuICBtdWx0aTogdHJ1ZVxufTtcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnaW5wdXRbbnpNZW50aW9uVHJpZ2dlcl0sIHRleHRhcmVhW256TWVudGlvblRyaWdnZXJdJyxcbiAgZXhwb3J0QXM6ICduek1lbnRpb25UcmlnZ2VyJyxcbiAgcHJvdmlkZXJzOiBbTlpfTUVOVElPTl9UUklHR0VSX0FDQ0VTU09SXSxcbiAgaG9zdDoge1xuICAgIGF1dG9jb21wbGV0ZTogJ29mZicsXG4gICAgJyhmb2N1c2luKSc6ICdvbkZvY3VzaW4uZW1pdCgpJyxcbiAgICAnKGJsdXIpJzogJ29uQmx1ci5lbWl0KCknLFxuICAgICcoaW5wdXQpJzogJ29uSW5wdXQuZW1pdCgkZXZlbnQpJyxcbiAgICAnKGtleWRvd24pJzogJ29uS2V5ZG93bi5lbWl0KCRldmVudCknLFxuICAgICcoY2xpY2spJzogJ29uQ2xpY2suZW1pdCgkZXZlbnQpJ1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIE56TWVudGlvblRyaWdnZXJEaXJlY3RpdmUgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgT25EZXN0cm95LCBBZnRlclZpZXdJbml0IHtcbiAgb25DaGFuZ2U6IE9uQ2hhbmdlVHlwZSA9ICgpID0+IHt9O1xuICBvblRvdWNoZWQ6IE9uVG91Y2hlZFR5cGUgPSAoKSA9PiB7fTtcblxuICByZWFkb25seSBvbkZvY3VzaW46IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgcmVhZG9ubHkgb25CbHVyOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIHJlYWRvbmx5IG9uSW5wdXQ6IEV2ZW50RW1pdHRlcjxLZXlib2FyZEV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgcmVhZG9ubHkgb25LZXlkb3duOiBFdmVudEVtaXR0ZXI8S2V5Ym9hcmRFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIHJlYWRvbmx5IG9uQ2xpY2s6IEV2ZW50RW1pdHRlcjxNb3VzZUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgdmFsdWU/OiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IocHVibGljIGVsOiBFbGVtZW50UmVmLCBwcml2YXRlIG56TWVudGlvblNlcnZpY2U6IE56TWVudGlvblNlcnZpY2UpIHt9XG5cbiAgY29tcGxldGVFdmVudHMoKTogdm9pZCB7XG4gICAgdGhpcy5vbkZvY3VzaW4uY29tcGxldGUoKTtcbiAgICB0aGlzLm9uQmx1ci5jb21wbGV0ZSgpO1xuICAgIHRoaXMub25JbnB1dC5jb21wbGV0ZSgpO1xuICAgIHRoaXMub25LZXlkb3duLmNvbXBsZXRlKCk7XG4gICAgdGhpcy5vbkNsaWNrLmNvbXBsZXRlKCk7XG4gIH1cblxuICBmb2N1cyhjYXJldFBvcz86IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5zZXRTZWxlY3Rpb25SYW5nZShjYXJldFBvcywgY2FyZXRQb3MpO1xuICB9XG5cbiAgaW5zZXJ0TWVudGlvbihtZW50aW9uOiBNZW50aW9uKTogdm9pZCB7XG4gICAgY29uc3QgdmFsdWU6IHN0cmluZyA9IHRoaXMuZWwubmF0aXZlRWxlbWVudC52YWx1ZTtcbiAgICBjb25zdCBpbnNlcnRWYWx1ZSA9IGAke21lbnRpb24ubWVudGlvbn0ke05aX01FTlRJT05fQ09ORklHLnNwbGl0fWA7XG4gICAgY29uc3QgbmV3VmFsdWUgPSBbdmFsdWUuc2xpY2UoMCwgbWVudGlvbi5zdGFydFBvcyArIDEpLCBpbnNlcnRWYWx1ZSwgdmFsdWUuc2xpY2UobWVudGlvbi5lbmRQb3MsIHZhbHVlLmxlbmd0aCldLmpvaW4oJycpO1xuICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC52YWx1ZSA9IG5ld1ZhbHVlO1xuICAgIHRoaXMuZm9jdXMobWVudGlvbi5zdGFydFBvcyArIGluc2VydFZhbHVlLmxlbmd0aCArIDEpO1xuICAgIHRoaXMub25DaGFuZ2UobmV3VmFsdWUpO1xuICAgIHRoaXMudmFsdWUgPSBuZXdWYWx1ZTtcbiAgfVxuXG4gIHdyaXRlVmFsdWUodmFsdWU6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LnZhbHVlID0gdmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC52YWx1ZSA9ICcnO1xuICAgIH1cbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46ICh2YWx1ZTogc3RyaW5nKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IHZvaWQpOiB2b2lkIHtcbiAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMubnpNZW50aW9uU2VydmljZS5yZWdpc3RlclRyaWdnZXIodGhpcyk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmNvbXBsZXRlRXZlbnRzKCk7XG4gIH1cbn1cbiJdfQ==