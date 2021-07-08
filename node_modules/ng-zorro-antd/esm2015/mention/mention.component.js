/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { __decorate, __metadata } from "tslib";
import { DOWN_ARROW, ENTER, ESCAPE, LEFT_ARROW, RIGHT_ARROW, TAB, UP_ARROW } from '@angular/cdk/keycodes';
import { ConnectionPositionPair, Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChild, ElementRef, EventEmitter, Inject, Input, Optional, Output, QueryList, TemplateRef, ViewChild, ViewChildren, ViewContainerRef } from '@angular/core';
import { DEFAULT_MENTION_BOTTOM_POSITIONS, DEFAULT_MENTION_TOP_POSITIONS } from 'ng-zorro-antd/core/overlay';
import { getCaretCoordinates, getMentions, InputBoolean } from 'ng-zorro-antd/core/util';
import { fromEvent, merge } from 'rxjs';
import { NZ_MENTION_CONFIG } from './config';
import { NzMentionSuggestionDirective } from './mention-suggestions';
import { NzMentionService } from './mention.service';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/cdk/overlay';
import * as ɵngcc2 from './mention.service';
import * as ɵngcc3 from '@angular/common';
import * as ɵngcc4 from 'ng-zorro-antd/icon';

const _c0 = ["items"];
function NzMentionComponent_ng_template_1_li_1_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
const _c1 = function (a0) { return { $implicit: a0 }; };
function NzMentionComponent_ng_template_1_li_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, NzMentionComponent_ng_template_1_li_1_ng_container_2_ng_container_1_Template, 1, 0, "ng-container", 8);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const suggestion_r4 = ɵngcc0.ɵɵnextContext().$implicit;
    const ctx_r7 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r7.suggestionTemplate)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction1(2, _c1, suggestion_r4));
} }
function NzMentionComponent_ng_template_1_li_1_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtext(0);
} if (rf & 2) {
    const suggestion_r4 = ɵngcc0.ɵɵnextContext().$implicit;
    const ctx_r9 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵtextInterpolate(ctx_r9.nzValueWith(suggestion_r4));
} }
function NzMentionComponent_ng_template_1_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r15 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "li", 4, 5);
    ɵngcc0.ɵɵlistener("mousedown", function NzMentionComponent_ng_template_1_li_1_Template_li_mousedown_0_listener($event) { return $event.preventDefault(); })("click", function NzMentionComponent_ng_template_1_li_1_Template_li_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r15); const suggestion_r4 = ctx.$implicit; const ctx_r14 = ɵngcc0.ɵɵnextContext(2); return ctx_r14.selectSuggestion(suggestion_r4); });
    ɵngcc0.ɵɵtemplate(2, NzMentionComponent_ng_template_1_li_1_ng_container_2_Template, 2, 4, "ng-container", 6);
    ɵngcc0.ɵɵtemplate(3, NzMentionComponent_ng_template_1_li_1_ng_template_3_Template, 1, 1, "ng-template", null, 7, ɵngcc0.ɵɵtemplateRefExtractor);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const i_r5 = ctx.index;
    const _r8 = ɵngcc0.ɵɵreference(4);
    const ctx_r2 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵclassProp("focus", i_r5 === ctx_r2.activeIndex);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r2.suggestionTemplate)("ngIfElse", _r8);
} }
function NzMentionComponent_ng_template_1_li_2_span_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span");
    ɵngcc0.ɵɵelement(1, "i", 11);
    ɵngcc0.ɵɵelementEnd();
} }
function NzMentionComponent_ng_template_1_li_2_span_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span");
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r17 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r17.nzNotFoundContent);
} }
function NzMentionComponent_ng_template_1_li_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "li", 9);
    ɵngcc0.ɵɵtemplate(1, NzMentionComponent_ng_template_1_li_2_span_1_Template, 2, 0, "span", 10);
    ɵngcc0.ɵɵtemplate(2, NzMentionComponent_ng_template_1_li_2_span_2_Template, 2, 1, "span", 10);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r3.nzLoading);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r3.nzLoading);
} }
function NzMentionComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "ul", 1);
    ɵngcc0.ɵɵtemplate(1, NzMentionComponent_ng_template_1_li_1_Template, 5, 4, "li", 2);
    ɵngcc0.ɵɵtemplate(2, NzMentionComponent_ng_template_1_li_2_Template, 3, 2, "li", 3);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r1.filteredSuggestions);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r1.filteredSuggestions.length === 0);
} }
const _c2 = ["*"];
export class NzMentionComponent {
    constructor(ngDocument, cdr, overlay, viewContainerRef, nzMentionService) {
        this.ngDocument = ngDocument;
        this.cdr = cdr;
        this.overlay = overlay;
        this.viewContainerRef = viewContainerRef;
        this.nzMentionService = nzMentionService;
        this.nzValueWith = value => value;
        this.nzPrefix = '@';
        this.nzLoading = false;
        this.nzNotFoundContent = '无匹配结果，轻敲空格完成输入';
        this.nzPlacement = 'bottom';
        this.nzSuggestions = [];
        this.nzOnSelect = new EventEmitter();
        this.nzOnSearchChange = new EventEmitter();
        this.isOpen = false;
        this.filteredSuggestions = [];
        this.suggestionTemplate = null;
        this.activeIndex = -1;
        this.previousValue = null;
        this.cursorMention = null;
        this.overlayRef = null;
    }
    set suggestionChild(value) {
        if (value) {
            this.suggestionTemplate = value;
        }
    }
    get triggerNativeElement() {
        return this.trigger.el.nativeElement;
    }
    get focusItemElement() {
        var _a;
        const itemArr = (_a = this.items) === null || _a === void 0 ? void 0 : _a.toArray();
        if (itemArr && itemArr[this.activeIndex]) {
            return itemArr[this.activeIndex].nativeElement;
        }
        return null;
    }
    ngOnInit() {
        this.nzMentionService.triggerChanged().subscribe(trigger => {
            this.trigger = trigger;
            this.bindTriggerEvents();
            this.closeDropdown();
            this.overlayRef = null;
        });
    }
    ngOnChanges(changes) {
        if (changes.hasOwnProperty('nzSuggestions')) {
            if (this.isOpen) {
                this.previousValue = null;
                this.activeIndex = -1;
                this.resetDropdown(false);
            }
        }
    }
    ngOnDestroy() {
        this.closeDropdown();
    }
    closeDropdown() {
        if (this.overlayRef && this.overlayRef.hasAttached()) {
            this.overlayRef.detach();
            this.overlayOutsideClickSubscription.unsubscribe();
            this.isOpen = false;
            this.cdr.markForCheck();
        }
    }
    openDropdown() {
        this.attachOverlay();
        this.isOpen = true;
        this.cdr.markForCheck();
    }
    getMentions() {
        return this.trigger ? getMentions(this.trigger.value, this.nzPrefix) : [];
    }
    selectSuggestion(suggestion) {
        const value = this.nzValueWith(suggestion);
        this.trigger.insertMention({
            mention: value,
            startPos: this.cursorMentionStart,
            endPos: this.cursorMentionEnd
        });
        this.nzOnSelect.emit(suggestion);
        this.closeDropdown();
        this.activeIndex = -1;
    }
    handleInput(event) {
        const target = event.target;
        this.trigger.onChange(target.value);
        this.trigger.value = target.value;
        this.resetDropdown();
    }
    handleKeydown(event) {
        const keyCode = event.keyCode;
        if (this.isOpen && keyCode === ENTER && this.activeIndex !== -1 && this.filteredSuggestions.length) {
            this.selectSuggestion(this.filteredSuggestions[this.activeIndex]);
            event.preventDefault();
        }
        else if (keyCode === LEFT_ARROW || keyCode === RIGHT_ARROW) {
            this.resetDropdown();
            event.stopPropagation();
        }
        else {
            if (this.isOpen && (keyCode === TAB || keyCode === ESCAPE)) {
                this.closeDropdown();
                return;
            }
            if (this.isOpen && keyCode === UP_ARROW) {
                this.setPreviousItemActive();
                event.preventDefault();
                event.stopPropagation();
            }
            if (this.isOpen && keyCode === DOWN_ARROW) {
                this.setNextItemActive();
                event.preventDefault();
                event.stopPropagation();
            }
        }
    }
    handleClick() {
        this.resetDropdown();
    }
    bindTriggerEvents() {
        this.trigger.onInput.subscribe((e) => this.handleInput(e));
        this.trigger.onKeydown.subscribe((e) => this.handleKeydown(e));
        this.trigger.onClick.subscribe(() => this.handleClick());
    }
    suggestionsFilter(value, emit) {
        const suggestions = value.substring(1);
        /**
         * Should always emit (nzOnSearchChange) when value empty
         *
         * @[something]... @[empty]... @[empty]
         *     ^             ^           ^
         * preValue        preValue  (should emit)
         */
        if (this.previousValue === value && value !== this.cursorMention[0]) {
            return;
        }
        this.previousValue = value;
        if (emit) {
            this.nzOnSearchChange.emit({
                value: this.cursorMention.substring(1),
                prefix: this.cursorMention[0]
            });
        }
        const searchValue = suggestions.toLowerCase();
        this.filteredSuggestions = this.nzSuggestions.filter(suggestion => this.nzValueWith(suggestion).toLowerCase().includes(searchValue));
    }
    resetDropdown(emit = true) {
        this.resetCursorMention();
        if (typeof this.cursorMention !== 'string' || !this.canOpen()) {
            this.closeDropdown();
            return;
        }
        this.suggestionsFilter(this.cursorMention, emit);
        const activeIndex = this.filteredSuggestions.indexOf(this.cursorMention.substring(1));
        this.activeIndex = activeIndex >= 0 ? activeIndex : 0;
        this.openDropdown();
    }
    setNextItemActive() {
        this.activeIndex = this.activeIndex + 1 <= this.filteredSuggestions.length - 1 ? this.activeIndex + 1 : 0;
        this.cdr.markForCheck();
        this.scrollToFocusItem();
    }
    setPreviousItemActive() {
        this.activeIndex = this.activeIndex - 1 < 0 ? this.filteredSuggestions.length - 1 : this.activeIndex - 1;
        this.cdr.markForCheck();
        this.scrollToFocusItem();
    }
    scrollToFocusItem() {
        if (this.focusItemElement) {
            this.focusItemElement.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'nearest' });
        }
    }
    canOpen() {
        const element = this.triggerNativeElement;
        return !element.readOnly && !element.disabled;
    }
    resetCursorMention() {
        const value = this.triggerNativeElement.value.replace(/[\r\n]/g, NZ_MENTION_CONFIG.split) || '';
        const selectionStart = this.triggerNativeElement.selectionStart;
        const prefix = typeof this.nzPrefix === 'string' ? [this.nzPrefix] : this.nzPrefix;
        let i = prefix.length;
        while (i >= 0) {
            const startPos = value.lastIndexOf(prefix[i], selectionStart);
            const endPos = value.indexOf(NZ_MENTION_CONFIG.split, selectionStart) > -1 ? value.indexOf(NZ_MENTION_CONFIG.split, selectionStart) : value.length;
            const mention = value.substring(startPos, endPos);
            if ((startPos > 0 && value[startPos - 1] !== NZ_MENTION_CONFIG.split) ||
                startPos < 0 ||
                mention.includes(prefix[i], 1) ||
                mention.includes(NZ_MENTION_CONFIG.split)) {
                this.cursorMention = null;
                this.cursorMentionStart = -1;
                this.cursorMentionEnd = -1;
            }
            else {
                this.cursorMention = mention;
                this.cursorMentionStart = startPos;
                this.cursorMentionEnd = endPos;
                return;
            }
            i--;
        }
    }
    updatePositions() {
        const coordinates = getCaretCoordinates(this.triggerNativeElement, this.cursorMentionStart);
        const top = coordinates.top -
            this.triggerNativeElement.getBoundingClientRect().height -
            this.triggerNativeElement.scrollTop +
            (this.nzPlacement === 'bottom' ? coordinates.height - 6 : -6);
        const left = coordinates.left - this.triggerNativeElement.scrollLeft;
        this.positionStrategy.withDefaultOffsetX(left).withDefaultOffsetY(top);
        if (this.nzPlacement === 'bottom') {
            this.positionStrategy.withPositions([...DEFAULT_MENTION_BOTTOM_POSITIONS]);
        }
        if (this.nzPlacement === 'top') {
            this.positionStrategy.withPositions([...DEFAULT_MENTION_TOP_POSITIONS]);
        }
        this.positionStrategy.apply();
    }
    subscribeOverlayOutsideClick() {
        return merge(this.overlayRef.outsidePointerEvents(), fromEvent(this.ngDocument, 'touchend')).subscribe((event) => {
            var _a;
            const clickTarget = event.target;
            if (this.isOpen && clickTarget !== this.trigger.el.nativeElement && !((_a = this.overlayRef) === null || _a === void 0 ? void 0 : _a.overlayElement.contains(clickTarget))) {
                this.closeDropdown();
            }
        });
    }
    attachOverlay() {
        if (!this.overlayRef) {
            this.portal = new TemplatePortal(this.suggestionsTemp, this.viewContainerRef);
            this.overlayRef = this.overlay.create(this.getOverlayConfig());
        }
        if (this.overlayRef && !this.overlayRef.hasAttached()) {
            this.overlayRef.attach(this.portal);
            this.overlayOutsideClickSubscription = this.subscribeOverlayOutsideClick();
        }
        this.updatePositions();
    }
    getOverlayConfig() {
        return new OverlayConfig({
            positionStrategy: this.getOverlayPosition(),
            scrollStrategy: this.overlay.scrollStrategies.reposition(),
            disposeOnNavigation: true
        });
    }
    getOverlayPosition() {
        const positions = [
            new ConnectionPositionPair({ originX: 'start', originY: 'bottom' }, { overlayX: 'start', overlayY: 'top' }),
            new ConnectionPositionPair({ originX: 'start', originY: 'top' }, { overlayX: 'start', overlayY: 'bottom' })
        ];
        this.positionStrategy = this.overlay
            .position()
            .flexibleConnectedTo(this.trigger.el)
            .withPositions(positions)
            .withFlexibleDimensions(false)
            .withPush(false);
        return this.positionStrategy;
    }
}
NzMentionComponent.ɵfac = function NzMentionComponent_Factory(t) { return new (t || NzMentionComponent)(ɵngcc0.ɵɵdirectiveInject(DOCUMENT, 8), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.Overlay), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ViewContainerRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.NzMentionService)); };
NzMentionComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzMentionComponent, selectors: [["nz-mention"]], contentQueries: function NzMentionComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, NzMentionSuggestionDirective, true, TemplateRef);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.suggestionChild = _t.first);
    } }, viewQuery: function NzMentionComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(TemplateRef, true);
        ɵngcc0.ɵɵviewQuery(_c0, true, ElementRef);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.suggestionsTemp = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.items = _t);
    } }, inputs: { nzValueWith: "nzValueWith", nzPrefix: "nzPrefix", nzLoading: "nzLoading", nzNotFoundContent: "nzNotFoundContent", nzPlacement: "nzPlacement", nzSuggestions: "nzSuggestions" }, outputs: { nzOnSelect: "nzOnSelect", nzOnSearchChange: "nzOnSearchChange" }, exportAs: ["nzMention"], features: [ɵngcc0.ɵɵProvidersFeature([NzMentionService]), ɵngcc0.ɵɵNgOnChangesFeature], ngContentSelectors: _c2, decls: 3, vars: 0, consts: [["suggestions", ""], [1, "ant-mention-dropdown"], ["class", "ant-mention-dropdown-item", 3, "focus", "mousedown", "click", 4, "ngFor", "ngForOf"], ["class", "ant-mention-dropdown-notfound ant-mention-dropdown-item", 4, "ngIf"], [1, "ant-mention-dropdown-item", 3, "mousedown", "click"], ["items", ""], [4, "ngIf", "ngIfElse"], ["defaultSuggestion", ""], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "ant-mention-dropdown-notfound", "ant-mention-dropdown-item"], [4, "ngIf"], ["nz-icon", "", "nzType", "loading"]], template: function NzMentionComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵprojection(0);
        ɵngcc0.ɵɵtemplate(1, NzMentionComponent_ng_template_1_Template, 3, 2, "ng-template", null, 0, ɵngcc0.ɵɵtemplateRefExtractor);
    } }, directives: [ɵngcc3.NgForOf, ɵngcc3.NgIf, ɵngcc3.NgTemplateOutlet, ɵngcc4.NzIconDirective], encapsulation: 2, changeDetection: 0 });
NzMentionComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [DOCUMENT,] }] },
    { type: ChangeDetectorRef },
    { type: Overlay },
    { type: ViewContainerRef },
    { type: NzMentionService }
];
NzMentionComponent.propDecorators = {
    nzValueWith: [{ type: Input }],
    nzPrefix: [{ type: Input }],
    nzLoading: [{ type: Input }],
    nzNotFoundContent: [{ type: Input }],
    nzPlacement: [{ type: Input }],
    nzSuggestions: [{ type: Input }],
    nzOnSelect: [{ type: Output }],
    nzOnSearchChange: [{ type: Output }],
    suggestionsTemp: [{ type: ViewChild, args: [TemplateRef, { static: false },] }],
    items: [{ type: ViewChildren, args: ['items', { read: ElementRef },] }],
    suggestionChild: [{ type: ContentChild, args: [NzMentionSuggestionDirective, { static: false, read: TemplateRef },] }]
};
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzMentionComponent.prototype, "nzLoading", void 0);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzMentionComponent, [{
        type: Component,
        args: [{
                selector: 'nz-mention',
                exportAs: 'nzMention',
                template: `
    <ng-content></ng-content>
    <ng-template #suggestions>
      <ul class="ant-mention-dropdown">
        <li
          #items
          class="ant-mention-dropdown-item"
          *ngFor="let suggestion of filteredSuggestions; let i = index"
          [class.focus]="i === activeIndex"
          (mousedown)="$event.preventDefault()"
          (click)="selectSuggestion(suggestion)"
        >
          <ng-container *ngIf="suggestionTemplate; else defaultSuggestion">
            <ng-container *ngTemplateOutlet="suggestionTemplate; context: { $implicit: suggestion }"></ng-container>
          </ng-container>
          <ng-template #defaultSuggestion>{{ nzValueWith(suggestion) }}</ng-template>
        </li>
        <li class="ant-mention-dropdown-notfound ant-mention-dropdown-item" *ngIf="filteredSuggestions.length === 0">
          <span *ngIf="nzLoading"><i nz-icon nzType="loading"></i></span>
          <span *ngIf="!nzLoading">{{ nzNotFoundContent }}</span>
        </li>
      </ul>
    </ng-template>
  `,
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [NzMentionService]
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [DOCUMENT]
            }] }, { type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc1.Overlay }, { type: ɵngcc0.ViewContainerRef }, { type: ɵngcc2.NzMentionService }]; }, { nzValueWith: [{
            type: Input
        }], nzPrefix: [{
            type: Input
        }], nzLoading: [{
            type: Input
        }], nzNotFoundContent: [{
            type: Input
        }], nzPlacement: [{
            type: Input
        }], nzSuggestions: [{
            type: Input
        }], nzOnSelect: [{
            type: Output
        }], nzOnSearchChange: [{
            type: Output
        }], suggestionChild: [{
            type: ContentChild,
            args: [NzMentionSuggestionDirective, { static: false, read: TemplateRef }]
        }], suggestionsTemp: [{
            type: ViewChild,
            args: [TemplateRef, { static: false }]
        }], items: [{
            type: ViewChildren,
            args: ['items', { read: ElementRef }]
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NvbXBvbmVudHMvbWVudGlvbi9tZW50aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxPQUFPLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDMUcsT0FBTyxFQUNMLHNCQUFzQixFQUV0QixPQUFPLEVBQ1AsYUFBYSxFQUdkLE1BQU0sc0JBQXNCLENBQUM7QUFDOUIsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUzQyxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsWUFBWSxFQUNaLFVBQVUsRUFDVixZQUFZLEVBQ1osTUFBTSxFQUNOLEtBQUssRUFJTCxRQUFRLEVBQ1IsTUFBTSxFQUNOLFNBQVMsRUFFVCxXQUFXLEVBQ1gsU0FBUyxFQUNULFlBQVksRUFDWixnQkFBZ0IsRUFDakIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFFN0csT0FBTyxFQUFFLG1CQUFtQixFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN6RixPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBZ0IsTUFBTSxNQUFNLENBQUM7QUFFdEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sVUFBVSxDQUFDO0FBQzdDLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRXJFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1C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ZW50IjpbIi8qKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7IERPV05fQVJST1csIEVOVEVSLCBFU0NBUEUsIExFRlRfQVJST1csIFJJR0hUX0FSUk9XLCBUQUIsIFVQX0FSUk9XIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2tleWNvZGVzJztcbmltcG9ydCB7XG4gIENvbm5lY3Rpb25Qb3NpdGlvblBhaXIsXG4gIEZsZXhpYmxlQ29ubmVjdGVkUG9zaXRpb25TdHJhdGVneSxcbiAgT3ZlcmxheSxcbiAgT3ZlcmxheUNvbmZpZyxcbiAgT3ZlcmxheVJlZixcbiAgUG9zaXRpb25TdHJhdGVneVxufSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XG5pbXBvcnQgeyBUZW1wbGF0ZVBvcnRhbCB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgQ29udGVudENoaWxkLFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIEluamVjdCxcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE9wdGlvbmFsLFxuICBPdXRwdXQsXG4gIFF1ZXJ5TGlzdCxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0NoaWxkcmVuLFxuICBWaWV3Q29udGFpbmVyUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgREVGQVVMVF9NRU5USU9OX0JPVFRPTV9QT1NJVElPTlMsIERFRkFVTFRfTUVOVElPTl9UT1BfUE9TSVRJT05TIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL292ZXJsYXknO1xuaW1wb3J0IHsgQm9vbGVhbklucHV0LCBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuaW1wb3J0IHsgZ2V0Q2FyZXRDb29yZGluYXRlcywgZ2V0TWVudGlvbnMsIElucHV0Qm9vbGVhbiB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS91dGlsJztcbmltcG9ydCB7IGZyb21FdmVudCwgbWVyZ2UsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBOWl9NRU5USU9OX0NPTkZJRyB9IGZyb20gJy4vY29uZmlnJztcbmltcG9ydCB7IE56TWVudGlvblN1Z2dlc3Rpb25EaXJlY3RpdmUgfSBmcm9tICcuL21lbnRpb24tc3VnZ2VzdGlvbnMnO1xuaW1wb3J0IHsgTnpNZW50aW9uVHJpZ2dlckRpcmVjdGl2ZSB9IGZyb20gJy4vbWVudGlvbi10cmlnZ2VyJztcbmltcG9ydCB7IE56TWVudGlvblNlcnZpY2UgfSBmcm9tICcuL21lbnRpb24uc2VydmljZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTWVudGlvbk9uU2VhcmNoVHlwZXMge1xuICB2YWx1ZTogc3RyaW5nO1xuICBwcmVmaXg6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBNZW50aW9uIHtcbiAgc3RhcnRQb3M6IG51bWJlcjtcbiAgZW5kUG9zOiBudW1iZXI7XG4gIG1lbnRpb246IHN0cmluZztcbn1cblxuZXhwb3J0IHR5cGUgTWVudGlvblBsYWNlbWVudCA9ICd0b3AnIHwgJ2JvdHRvbSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ256LW1lbnRpb24nLFxuICBleHBvcnRBczogJ256TWVudGlvbicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgIDxuZy10ZW1wbGF0ZSAjc3VnZ2VzdGlvbnM+XG4gICAgICA8dWwgY2xhc3M9XCJhbnQtbWVudGlvbi1kcm9wZG93blwiPlxuICAgICAgICA8bGlcbiAgICAgICAgICAjaXRlbXNcbiAgICAgICAgICBjbGFzcz1cImFudC1tZW50aW9uLWRyb3Bkb3duLWl0ZW1cIlxuICAgICAgICAgICpuZ0Zvcj1cImxldCBzdWdnZXN0aW9uIG9mIGZpbHRlcmVkU3VnZ2VzdGlvbnM7IGxldCBpID0gaW5kZXhcIlxuICAgICAgICAgIFtjbGFzcy5mb2N1c109XCJpID09PSBhY3RpdmVJbmRleFwiXG4gICAgICAgICAgKG1vdXNlZG93bik9XCIkZXZlbnQucHJldmVudERlZmF1bHQoKVwiXG4gICAgICAgICAgKGNsaWNrKT1cInNlbGVjdFN1Z2dlc3Rpb24oc3VnZ2VzdGlvbilcIlxuICAgICAgICA+XG4gICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInN1Z2dlc3Rpb25UZW1wbGF0ZTsgZWxzZSBkZWZhdWx0U3VnZ2VzdGlvblwiPlxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cInN1Z2dlc3Rpb25UZW1wbGF0ZTsgY29udGV4dDogeyAkaW1wbGljaXQ6IHN1Z2dlc3Rpb24gfVwiPjwvbmctY29udGFpbmVyPlxuICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgIDxuZy10ZW1wbGF0ZSAjZGVmYXVsdFN1Z2dlc3Rpb24+e3sgbnpWYWx1ZVdpdGgoc3VnZ2VzdGlvbikgfX08L25nLXRlbXBsYXRlPlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGkgY2xhc3M9XCJhbnQtbWVudGlvbi1kcm9wZG93bi1ub3Rmb3VuZCBhbnQtbWVudGlvbi1kcm9wZG93bi1pdGVtXCIgKm5nSWY9XCJmaWx0ZXJlZFN1Z2dlc3Rpb25zLmxlbmd0aCA9PT0gMFwiPlxuICAgICAgICAgIDxzcGFuICpuZ0lmPVwibnpMb2FkaW5nXCI+PGkgbnotaWNvbiBuelR5cGU9XCJsb2FkaW5nXCI+PC9pPjwvc3Bhbj5cbiAgICAgICAgICA8c3BhbiAqbmdJZj1cIiFuekxvYWRpbmdcIj57eyBuek5vdEZvdW5kQ29udGVudCB9fTwvc3Bhbj5cbiAgICAgICAgPC9saT5cbiAgICAgIDwvdWw+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgYCxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBwcm92aWRlcnM6IFtOek1lbnRpb25TZXJ2aWNlXVxufSlcbmV4cG9ydCBjbGFzcyBOek1lbnRpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3ksIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX256TG9hZGluZzogQm9vbGVhbklucHV0O1xuXG4gIEBJbnB1dCgpIG56VmFsdWVXaXRoOiAodmFsdWU6IE56U2FmZUFueSkgPT4gc3RyaW5nID0gdmFsdWUgPT4gdmFsdWU7XG4gIEBJbnB1dCgpIG56UHJlZml4OiBzdHJpbmcgfCBzdHJpbmdbXSA9ICdAJztcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56TG9hZGluZyA9IGZhbHNlO1xuICBASW5wdXQoKSBuek5vdEZvdW5kQ29udGVudDogc3RyaW5nID0gJ+aXoOWMuemFjee7k+aenO+8jOi9u+aVsuepuuagvOWujOaIkOi+k+WFpSc7XG4gIEBJbnB1dCgpIG56UGxhY2VtZW50OiBNZW50aW9uUGxhY2VtZW50ID0gJ2JvdHRvbSc7XG4gIEBJbnB1dCgpIG56U3VnZ2VzdGlvbnM6IE56U2FmZUFueVtdID0gW107XG4gIEBPdXRwdXQoKSByZWFkb25seSBuek9uU2VsZWN0OiBFdmVudEVtaXR0ZXI8TnpTYWZlQW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56T25TZWFyY2hDaGFuZ2U6IEV2ZW50RW1pdHRlcjxNZW50aW9uT25TZWFyY2hUeXBlcz4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgdHJpZ2dlciE6IE56TWVudGlvblRyaWdnZXJEaXJlY3RpdmU7XG4gIEBWaWV3Q2hpbGQoVGVtcGxhdGVSZWYsIHsgc3RhdGljOiBmYWxzZSB9KSBzdWdnZXN0aW9uc1RlbXA/OiBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgQFZpZXdDaGlsZHJlbignaXRlbXMnLCB7IHJlYWQ6IEVsZW1lbnRSZWYgfSlcbiAgaXRlbXMhOiBRdWVyeUxpc3Q8RWxlbWVudFJlZj47XG5cbiAgQENvbnRlbnRDaGlsZChOek1lbnRpb25TdWdnZXN0aW9uRGlyZWN0aXZlLCB7IHN0YXRpYzogZmFsc2UsIHJlYWQ6IFRlbXBsYXRlUmVmIH0pXG4gIHNldCBzdWdnZXN0aW9uQ2hpbGQodmFsdWU6IFRlbXBsYXRlUmVmPHsgJGltcGxpY2l0OiBOelNhZmVBbnkgfT4pIHtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHRoaXMuc3VnZ2VzdGlvblRlbXBsYXRlID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgaXNPcGVuID0gZmFsc2U7XG4gIGZpbHRlcmVkU3VnZ2VzdGlvbnM6IHN0cmluZ1tdID0gW107XG4gIHN1Z2dlc3Rpb25UZW1wbGF0ZTogVGVtcGxhdGVSZWY8eyAkaW1wbGljaXQ6IE56U2FmZUFueSB9PiB8IG51bGwgPSBudWxsO1xuICBhY3RpdmVJbmRleCA9IC0xO1xuXG4gIHByaXZhdGUgcHJldmlvdXNWYWx1ZTogc3RyaW5nIHwgbnVsbCA9IG51bGw7XG4gIHByaXZhdGUgY3Vyc29yTWVudGlvbjogc3RyaW5nIHwgbnVsbCA9IG51bGw7XG4gIHByaXZhdGUgY3Vyc29yTWVudGlvblN0YXJ0PzogbnVtYmVyO1xuICBwcml2YXRlIGN1cnNvck1lbnRpb25FbmQ/OiBudW1iZXI7XG4gIHByaXZhdGUgb3ZlcmxheVJlZjogT3ZlcmxheVJlZiB8IG51bGwgPSBudWxsO1xuICBwcml2YXRlIHBvcnRhbD86IFRlbXBsYXRlUG9ydGFsPHZvaWQ+O1xuICBwcml2YXRlIHBvc2l0aW9uU3RyYXRlZ3khOiBGbGV4aWJsZUNvbm5lY3RlZFBvc2l0aW9uU3RyYXRlZ3k7XG4gIHByaXZhdGUgb3ZlcmxheU91dHNpZGVDbGlja1N1YnNjcmlwdGlvbiE6IFN1YnNjcmlwdGlvbjtcblxuICBwcml2YXRlIGdldCB0cmlnZ2VyTmF0aXZlRWxlbWVudCgpOiBIVE1MVGV4dEFyZWFFbGVtZW50IHwgSFRNTElucHV0RWxlbWVudCB7XG4gICAgcmV0dXJuIHRoaXMudHJpZ2dlci5lbC5uYXRpdmVFbGVtZW50O1xuICB9XG5cbiAgcHJpdmF0ZSBnZXQgZm9jdXNJdGVtRWxlbWVudCgpOiBIVE1MRWxlbWVudCB8IG51bGwge1xuICAgIGNvbnN0IGl0ZW1BcnIgPSB0aGlzLml0ZW1zPy50b0FycmF5KCk7XG4gICAgaWYgKGl0ZW1BcnIgJiYgaXRlbUFyclt0aGlzLmFjdGl2ZUluZGV4XSkge1xuICAgICAgcmV0dXJuIGl0ZW1BcnJbdGhpcy5hY3RpdmVJbmRleF0ubmF0aXZlRWxlbWVudDtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIG5nRG9jdW1lbnQ6IE56U2FmZUFueSxcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSBvdmVybGF5OiBPdmVybGF5LFxuICAgIHByaXZhdGUgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZixcbiAgICBwcml2YXRlIG56TWVudGlvblNlcnZpY2U6IE56TWVudGlvblNlcnZpY2VcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMubnpNZW50aW9uU2VydmljZS50cmlnZ2VyQ2hhbmdlZCgpLnN1YnNjcmliZSh0cmlnZ2VyID0+IHtcbiAgICAgIHRoaXMudHJpZ2dlciA9IHRyaWdnZXI7XG4gICAgICB0aGlzLmJpbmRUcmlnZ2VyRXZlbnRzKCk7XG4gICAgICB0aGlzLmNsb3NlRHJvcGRvd24oKTtcbiAgICAgIHRoaXMub3ZlcmxheVJlZiA9IG51bGw7XG4gICAgfSk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgaWYgKGNoYW5nZXMuaGFzT3duUHJvcGVydHkoJ256U3VnZ2VzdGlvbnMnKSkge1xuICAgICAgaWYgKHRoaXMuaXNPcGVuKSB7XG4gICAgICAgIHRoaXMucHJldmlvdXNWYWx1ZSA9IG51bGw7XG4gICAgICAgIHRoaXMuYWN0aXZlSW5kZXggPSAtMTtcbiAgICAgICAgdGhpcy5yZXNldERyb3Bkb3duKGZhbHNlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmNsb3NlRHJvcGRvd24oKTtcbiAgfVxuXG4gIGNsb3NlRHJvcGRvd24oKTogdm9pZCB7XG4gICAgaWYgKHRoaXMub3ZlcmxheVJlZiAmJiB0aGlzLm92ZXJsYXlSZWYuaGFzQXR0YWNoZWQoKSkge1xuICAgICAgdGhpcy5vdmVybGF5UmVmLmRldGFjaCgpO1xuICAgICAgdGhpcy5vdmVybGF5T3V0c2lkZUNsaWNrU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICB0aGlzLmlzT3BlbiA9IGZhbHNlO1xuICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuICB9XG5cbiAgb3BlbkRyb3Bkb3duKCk6IHZvaWQge1xuICAgIHRoaXMuYXR0YWNoT3ZlcmxheSgpO1xuICAgIHRoaXMuaXNPcGVuID0gdHJ1ZTtcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIGdldE1lbnRpb25zKCk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gdGhpcy50cmlnZ2VyID8gZ2V0TWVudGlvbnModGhpcy50cmlnZ2VyLnZhbHVlISwgdGhpcy5uelByZWZpeCkgOiBbXTtcbiAgfVxuXG4gIHNlbGVjdFN1Z2dlc3Rpb24oc3VnZ2VzdGlvbjogc3RyaW5nIHwge30pOiB2b2lkIHtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMubnpWYWx1ZVdpdGgoc3VnZ2VzdGlvbik7XG4gICAgdGhpcy50cmlnZ2VyLmluc2VydE1lbnRpb24oe1xuICAgICAgbWVudGlvbjogdmFsdWUsXG4gICAgICBzdGFydFBvczogdGhpcy5jdXJzb3JNZW50aW9uU3RhcnQhLFxuICAgICAgZW5kUG9zOiB0aGlzLmN1cnNvck1lbnRpb25FbmQhXG4gICAgfSk7XG4gICAgdGhpcy5uek9uU2VsZWN0LmVtaXQoc3VnZ2VzdGlvbik7XG4gICAgdGhpcy5jbG9zZURyb3Bkb3duKCk7XG4gICAgdGhpcy5hY3RpdmVJbmRleCA9IC0xO1xuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVJbnB1dChldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xuICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50IHwgSFRNTFRleHRBcmVhRWxlbWVudDtcbiAgICB0aGlzLnRyaWdnZXIub25DaGFuZ2UodGFyZ2V0LnZhbHVlKTtcbiAgICB0aGlzLnRyaWdnZXIudmFsdWUgPSB0YXJnZXQudmFsdWU7XG4gICAgdGhpcy5yZXNldERyb3Bkb3duKCk7XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUtleWRvd24oZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcbiAgICBjb25zdCBrZXlDb2RlID0gZXZlbnQua2V5Q29kZTtcbiAgICBpZiAodGhpcy5pc09wZW4gJiYga2V5Q29kZSA9PT0gRU5URVIgJiYgdGhpcy5hY3RpdmVJbmRleCAhPT0gLTEgJiYgdGhpcy5maWx0ZXJlZFN1Z2dlc3Rpb25zLmxlbmd0aCkge1xuICAgICAgdGhpcy5zZWxlY3RTdWdnZXN0aW9uKHRoaXMuZmlsdGVyZWRTdWdnZXN0aW9uc1t0aGlzLmFjdGl2ZUluZGV4XSk7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH0gZWxzZSBpZiAoa2V5Q29kZSA9PT0gTEVGVF9BUlJPVyB8fCBrZXlDb2RlID09PSBSSUdIVF9BUlJPVykge1xuICAgICAgdGhpcy5yZXNldERyb3Bkb3duKCk7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMuaXNPcGVuICYmIChrZXlDb2RlID09PSBUQUIgfHwga2V5Q29kZSA9PT0gRVNDQVBFKSkge1xuICAgICAgICB0aGlzLmNsb3NlRHJvcGRvd24oKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5pc09wZW4gJiYga2V5Q29kZSA9PT0gVVBfQVJST1cpIHtcbiAgICAgICAgdGhpcy5zZXRQcmV2aW91c0l0ZW1BY3RpdmUoKTtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmlzT3BlbiAmJiBrZXlDb2RlID09PSBET1dOX0FSUk9XKSB7XG4gICAgICAgIHRoaXMuc2V0TmV4dEl0ZW1BY3RpdmUoKTtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVDbGljaygpOiB2b2lkIHtcbiAgICB0aGlzLnJlc2V0RHJvcGRvd24oKTtcbiAgfVxuXG4gIHByaXZhdGUgYmluZFRyaWdnZXJFdmVudHMoKTogdm9pZCB7XG4gICAgdGhpcy50cmlnZ2VyLm9uSW5wdXQuc3Vic2NyaWJlKChlOiBLZXlib2FyZEV2ZW50KSA9PiB0aGlzLmhhbmRsZUlucHV0KGUpKTtcbiAgICB0aGlzLnRyaWdnZXIub25LZXlkb3duLnN1YnNjcmliZSgoZTogS2V5Ym9hcmRFdmVudCkgPT4gdGhpcy5oYW5kbGVLZXlkb3duKGUpKTtcbiAgICB0aGlzLnRyaWdnZXIub25DbGljay5zdWJzY3JpYmUoKCkgPT4gdGhpcy5oYW5kbGVDbGljaygpKTtcbiAgfVxuXG4gIHByaXZhdGUgc3VnZ2VzdGlvbnNGaWx0ZXIodmFsdWU6IHN0cmluZywgZW1pdDogYm9vbGVhbik6IHZvaWQge1xuICAgIGNvbnN0IHN1Z2dlc3Rpb25zID0gdmFsdWUuc3Vic3RyaW5nKDEpO1xuICAgIC8qKlxuICAgICAqIFNob3VsZCBhbHdheXMgZW1pdCAobnpPblNlYXJjaENoYW5nZSkgd2hlbiB2YWx1ZSBlbXB0eVxuICAgICAqXG4gICAgICogQFtzb21ldGhpbmddLi4uIEBbZW1wdHldLi4uIEBbZW1wdHldXG4gICAgICogICAgIF4gICAgICAgICAgICAgXiAgICAgICAgICAgXlxuICAgICAqIHByZVZhbHVlICAgICAgICBwcmVWYWx1ZSAgKHNob3VsZCBlbWl0KVxuICAgICAqL1xuICAgIGlmICh0aGlzLnByZXZpb3VzVmFsdWUgPT09IHZhbHVlICYmIHZhbHVlICE9PSB0aGlzLmN1cnNvck1lbnRpb24hWzBdKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMucHJldmlvdXNWYWx1ZSA9IHZhbHVlO1xuICAgIGlmIChlbWl0KSB7XG4gICAgICB0aGlzLm56T25TZWFyY2hDaGFuZ2UuZW1pdCh7XG4gICAgICAgIHZhbHVlOiB0aGlzLmN1cnNvck1lbnRpb24hLnN1YnN0cmluZygxKSxcbiAgICAgICAgcHJlZml4OiB0aGlzLmN1cnNvck1lbnRpb24hWzBdXG4gICAgICB9KTtcbiAgICB9XG4gICAgY29uc3Qgc2VhcmNoVmFsdWUgPSBzdWdnZXN0aW9ucy50b0xvd2VyQ2FzZSgpO1xuICAgIHRoaXMuZmlsdGVyZWRTdWdnZXN0aW9ucyA9IHRoaXMubnpTdWdnZXN0aW9ucy5maWx0ZXIoc3VnZ2VzdGlvbiA9PiB0aGlzLm56VmFsdWVXaXRoKHN1Z2dlc3Rpb24pLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoVmFsdWUpKTtcbiAgfVxuXG4gIHByaXZhdGUgcmVzZXREcm9wZG93bihlbWl0OiBib29sZWFuID0gdHJ1ZSk6IHZvaWQge1xuICAgIHRoaXMucmVzZXRDdXJzb3JNZW50aW9uKCk7XG4gICAgaWYgKHR5cGVvZiB0aGlzLmN1cnNvck1lbnRpb24gIT09ICdzdHJpbmcnIHx8ICF0aGlzLmNhbk9wZW4oKSkge1xuICAgICAgdGhpcy5jbG9zZURyb3Bkb3duKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuc3VnZ2VzdGlvbnNGaWx0ZXIodGhpcy5jdXJzb3JNZW50aW9uLCBlbWl0KTtcbiAgICBjb25zdCBhY3RpdmVJbmRleCA9IHRoaXMuZmlsdGVyZWRTdWdnZXN0aW9ucy5pbmRleE9mKHRoaXMuY3Vyc29yTWVudGlvbi5zdWJzdHJpbmcoMSkpO1xuICAgIHRoaXMuYWN0aXZlSW5kZXggPSBhY3RpdmVJbmRleCA+PSAwID8gYWN0aXZlSW5kZXggOiAwO1xuICAgIHRoaXMub3BlbkRyb3Bkb3duKCk7XG4gIH1cblxuICBwcml2YXRlIHNldE5leHRJdGVtQWN0aXZlKCk6IHZvaWQge1xuICAgIHRoaXMuYWN0aXZlSW5kZXggPSB0aGlzLmFjdGl2ZUluZGV4ICsgMSA8PSB0aGlzLmZpbHRlcmVkU3VnZ2VzdGlvbnMubGVuZ3RoIC0gMSA/IHRoaXMuYWN0aXZlSW5kZXggKyAxIDogMDtcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgICB0aGlzLnNjcm9sbFRvRm9jdXNJdGVtKCk7XG4gIH1cblxuICBwcml2YXRlIHNldFByZXZpb3VzSXRlbUFjdGl2ZSgpOiB2b2lkIHtcbiAgICB0aGlzLmFjdGl2ZUluZGV4ID0gdGhpcy5hY3RpdmVJbmRleCAtIDEgPCAwID8gdGhpcy5maWx0ZXJlZFN1Z2dlc3Rpb25zLmxlbmd0aCAtIDEgOiB0aGlzLmFjdGl2ZUluZGV4IC0gMTtcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgICB0aGlzLnNjcm9sbFRvRm9jdXNJdGVtKCk7XG4gIH1cblxuICBwcml2YXRlIHNjcm9sbFRvRm9jdXNJdGVtKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmZvY3VzSXRlbUVsZW1lbnQpIHtcbiAgICAgIHRoaXMuZm9jdXNJdGVtRWxlbWVudC5zY3JvbGxJbnRvVmlldyh7IGJlaGF2aW9yOiAnc21vb3RoJywgYmxvY2s6ICdjZW50ZXInLCBpbmxpbmU6ICduZWFyZXN0JyB9KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGNhbk9wZW4oKTogYm9vbGVhbiB7XG4gICAgY29uc3QgZWxlbWVudDogSFRNTElucHV0RWxlbWVudCB8IEhUTUxUZXh0QXJlYUVsZW1lbnQgPSB0aGlzLnRyaWdnZXJOYXRpdmVFbGVtZW50O1xuICAgIHJldHVybiAhZWxlbWVudC5yZWFkT25seSAmJiAhZWxlbWVudC5kaXNhYmxlZDtcbiAgfVxuXG4gIHByaXZhdGUgcmVzZXRDdXJzb3JNZW50aW9uKCk6IHZvaWQge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy50cmlnZ2VyTmF0aXZlRWxlbWVudC52YWx1ZS5yZXBsYWNlKC9bXFxyXFxuXS9nLCBOWl9NRU5USU9OX0NPTkZJRy5zcGxpdCkgfHwgJyc7XG4gICAgY29uc3Qgc2VsZWN0aW9uU3RhcnQgPSB0aGlzLnRyaWdnZXJOYXRpdmVFbGVtZW50LnNlbGVjdGlvblN0YXJ0ITtcbiAgICBjb25zdCBwcmVmaXggPSB0eXBlb2YgdGhpcy5uelByZWZpeCA9PT0gJ3N0cmluZycgPyBbdGhpcy5uelByZWZpeF0gOiB0aGlzLm56UHJlZml4O1xuICAgIGxldCBpID0gcHJlZml4Lmxlbmd0aDtcbiAgICB3aGlsZSAoaSA+PSAwKSB7XG4gICAgICBjb25zdCBzdGFydFBvcyA9IHZhbHVlLmxhc3RJbmRleE9mKHByZWZpeFtpXSwgc2VsZWN0aW9uU3RhcnQpO1xuICAgICAgY29uc3QgZW5kUG9zID1cbiAgICAgICAgdmFsdWUuaW5kZXhPZihOWl9NRU5USU9OX0NPTkZJRy5zcGxpdCwgc2VsZWN0aW9uU3RhcnQpID4gLTEgPyB2YWx1ZS5pbmRleE9mKE5aX01FTlRJT05fQ09ORklHLnNwbGl0LCBzZWxlY3Rpb25TdGFydCkgOiB2YWx1ZS5sZW5ndGg7XG4gICAgICBjb25zdCBtZW50aW9uID0gdmFsdWUuc3Vic3RyaW5nKHN0YXJ0UG9zLCBlbmRQb3MpO1xuICAgICAgaWYgKFxuICAgICAgICAoc3RhcnRQb3MgPiAwICYmIHZhbHVlW3N0YXJ0UG9zIC0gMV0gIT09IE5aX01FTlRJT05fQ09ORklHLnNwbGl0KSB8fFxuICAgICAgICBzdGFydFBvcyA8IDAgfHxcbiAgICAgICAgbWVudGlvbi5pbmNsdWRlcyhwcmVmaXhbaV0sIDEpIHx8XG4gICAgICAgIG1lbnRpb24uaW5jbHVkZXMoTlpfTUVOVElPTl9DT05GSUcuc3BsaXQpXG4gICAgICApIHtcbiAgICAgICAgdGhpcy5jdXJzb3JNZW50aW9uID0gbnVsbDtcbiAgICAgICAgdGhpcy5jdXJzb3JNZW50aW9uU3RhcnQgPSAtMTtcbiAgICAgICAgdGhpcy5jdXJzb3JNZW50aW9uRW5kID0gLTE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmN1cnNvck1lbnRpb24gPSBtZW50aW9uO1xuICAgICAgICB0aGlzLmN1cnNvck1lbnRpb25TdGFydCA9IHN0YXJ0UG9zO1xuICAgICAgICB0aGlzLmN1cnNvck1lbnRpb25FbmQgPSBlbmRQb3M7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGktLTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZVBvc2l0aW9ucygpOiB2b2lkIHtcbiAgICBjb25zdCBjb29yZGluYXRlcyA9IGdldENhcmV0Q29vcmRpbmF0ZXModGhpcy50cmlnZ2VyTmF0aXZlRWxlbWVudCwgdGhpcy5jdXJzb3JNZW50aW9uU3RhcnQhKTtcbiAgICBjb25zdCB0b3AgPVxuICAgICAgY29vcmRpbmF0ZXMudG9wIC1cbiAgICAgIHRoaXMudHJpZ2dlck5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0IC1cbiAgICAgIHRoaXMudHJpZ2dlck5hdGl2ZUVsZW1lbnQuc2Nyb2xsVG9wICtcbiAgICAgICh0aGlzLm56UGxhY2VtZW50ID09PSAnYm90dG9tJyA/IGNvb3JkaW5hdGVzLmhlaWdodCAtIDYgOiAtNik7XG4gICAgY29uc3QgbGVmdCA9IGNvb3JkaW5hdGVzLmxlZnQgLSB0aGlzLnRyaWdnZXJOYXRpdmVFbGVtZW50LnNjcm9sbExlZnQ7XG4gICAgdGhpcy5wb3NpdGlvblN0cmF0ZWd5LndpdGhEZWZhdWx0T2Zmc2V0WChsZWZ0KS53aXRoRGVmYXVsdE9mZnNldFkodG9wKTtcbiAgICBpZiAodGhpcy5uelBsYWNlbWVudCA9PT0gJ2JvdHRvbScpIHtcbiAgICAgIHRoaXMucG9zaXRpb25TdHJhdGVneS53aXRoUG9zaXRpb25zKFsuLi5ERUZBVUxUX01FTlRJT05fQk9UVE9NX1BPU0lUSU9OU10pO1xuICAgIH1cbiAgICBpZiAodGhpcy5uelBsYWNlbWVudCA9PT0gJ3RvcCcpIHtcbiAgICAgIHRoaXMucG9zaXRpb25TdHJhdGVneS53aXRoUG9zaXRpb25zKFsuLi5ERUZBVUxUX01FTlRJT05fVE9QX1BPU0lUSU9OU10pO1xuICAgIH1cbiAgICB0aGlzLnBvc2l0aW9uU3RyYXRlZ3kuYXBwbHkoKTtcbiAgfVxuXG4gIHByaXZhdGUgc3Vic2NyaWJlT3ZlcmxheU91dHNpZGVDbGljaygpOiBTdWJzY3JpcHRpb24ge1xuICAgIHJldHVybiBtZXJnZTxNb3VzZUV2ZW50IHwgVG91Y2hFdmVudD4oXG4gICAgICB0aGlzLm92ZXJsYXlSZWYhLm91dHNpZGVQb2ludGVyRXZlbnRzKCksXG4gICAgICBmcm9tRXZlbnQ8VG91Y2hFdmVudD4odGhpcy5uZ0RvY3VtZW50LCAndG91Y2hlbmQnKVxuICAgICkuc3Vic2NyaWJlKChldmVudDogTW91c2VFdmVudCB8IFRvdWNoRXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IGNsaWNrVGFyZ2V0ID0gZXZlbnQudGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xuICAgICAgaWYgKHRoaXMuaXNPcGVuICYmIGNsaWNrVGFyZ2V0ICE9PSB0aGlzLnRyaWdnZXIuZWwubmF0aXZlRWxlbWVudCAmJiAhdGhpcy5vdmVybGF5UmVmPy5vdmVybGF5RWxlbWVudC5jb250YWlucyhjbGlja1RhcmdldCkpIHtcbiAgICAgICAgdGhpcy5jbG9zZURyb3Bkb3duKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGF0dGFjaE92ZXJsYXkoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLm92ZXJsYXlSZWYpIHtcbiAgICAgIHRoaXMucG9ydGFsID0gbmV3IFRlbXBsYXRlUG9ydGFsKHRoaXMuc3VnZ2VzdGlvbnNUZW1wISwgdGhpcy52aWV3Q29udGFpbmVyUmVmKTtcbiAgICAgIHRoaXMub3ZlcmxheVJlZiA9IHRoaXMub3ZlcmxheS5jcmVhdGUodGhpcy5nZXRPdmVybGF5Q29uZmlnKCkpO1xuICAgIH1cbiAgICBpZiAodGhpcy5vdmVybGF5UmVmICYmICF0aGlzLm92ZXJsYXlSZWYuaGFzQXR0YWNoZWQoKSkge1xuICAgICAgdGhpcy5vdmVybGF5UmVmLmF0dGFjaCh0aGlzLnBvcnRhbCk7XG4gICAgICB0aGlzLm92ZXJsYXlPdXRzaWRlQ2xpY2tTdWJzY3JpcHRpb24gPSB0aGlzLnN1YnNjcmliZU92ZXJsYXlPdXRzaWRlQ2xpY2soKTtcbiAgICB9XG4gICAgdGhpcy51cGRhdGVQb3NpdGlvbnMoKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0T3ZlcmxheUNvbmZpZygpOiBPdmVybGF5Q29uZmlnIHtcbiAgICByZXR1cm4gbmV3IE92ZXJsYXlDb25maWcoe1xuICAgICAgcG9zaXRpb25TdHJhdGVneTogdGhpcy5nZXRPdmVybGF5UG9zaXRpb24oKSxcbiAgICAgIHNjcm9sbFN0cmF0ZWd5OiB0aGlzLm92ZXJsYXkuc2Nyb2xsU3RyYXRlZ2llcy5yZXBvc2l0aW9uKCksXG4gICAgICBkaXNwb3NlT25OYXZpZ2F0aW9uOiB0cnVlXG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGdldE92ZXJsYXlQb3NpdGlvbigpOiBQb3NpdGlvblN0cmF0ZWd5IHtcbiAgICBjb25zdCBwb3NpdGlvbnMgPSBbXG4gICAgICBuZXcgQ29ubmVjdGlvblBvc2l0aW9uUGFpcih7IG9yaWdpblg6ICdzdGFydCcsIG9yaWdpblk6ICdib3R0b20nIH0sIHsgb3ZlcmxheVg6ICdzdGFydCcsIG92ZXJsYXlZOiAndG9wJyB9KSxcbiAgICAgIG5ldyBDb25uZWN0aW9uUG9zaXRpb25QYWlyKHsgb3JpZ2luWDogJ3N0YXJ0Jywgb3JpZ2luWTogJ3RvcCcgfSwgeyBvdmVybGF5WDogJ3N0YXJ0Jywgb3ZlcmxheVk6ICdib3R0b20nIH0pXG4gICAgXTtcbiAgICB0aGlzLnBvc2l0aW9uU3RyYXRlZ3kgPSB0aGlzLm92ZXJsYXlcbiAgICAgIC5wb3NpdGlvbigpXG4gICAgICAuZmxleGlibGVDb25uZWN0ZWRUbyh0aGlzLnRyaWdnZXIuZWwpXG4gICAgICAud2l0aFBvc2l0aW9ucyhwb3NpdGlvbnMpXG4gICAgICAud2l0aEZsZXhpYmxlRGltZW5zaW9ucyhmYWxzZSlcbiAgICAgIC53aXRoUHVzaChmYWxzZSk7XG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb25TdHJhdGVneTtcbiAgfVxufVxuIl19