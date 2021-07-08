/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { formatDate } from '@angular/common';
import { Inject, Injectable, Injector, Optional } from '@angular/core';
import { format as fnsFormat, getISOWeek as fnsGetISOWeek, parse as fnsParse } from 'date-fns';
import { ɵNgTimeParser } from 'ng-zorro-antd/core/time';
import { mergeDateConfig, NZ_DATE_CONFIG } from './date-config';
import { NzI18nService } from './nz-i18n.service';
import * as i0 from "@angular/core";
import * as i1 from "./date-config";
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from './nz-i18n.service';
export function DATE_HELPER_SERVICE_FACTORY(injector, config) {
    const i18n = injector.get(NzI18nService);
    return i18n.getDateLocale() ? new DateHelperByDateFns(i18n, config) : new DateHelperByDatePipe(i18n, config);
}
/**
 * Abstract DateHelperService(Token via Class)
 * Compatibility: compact for original usage by default which using DatePipe
 */
export class DateHelperService {
    constructor(i18n, config) {
        this.i18n = i18n;
        this.config = config;
        this.config = mergeDateConfig(this.config);
    }
}
DateHelperService.ɵfac = function DateHelperService_Factory(t) { return new (t || DateHelperService)(ɵngcc0.ɵɵinject(ɵngcc1.NzI18nService), ɵngcc0.ɵɵinject(NZ_DATE_CONFIG, 8)); };
DateHelperService.ɵprov = i0.ɵɵdefineInjectable({ factory: function DateHelperService_Factory() { return DATE_HELPER_SERVICE_FACTORY(i0.ɵɵinject(i0.INJECTOR), i0.ɵɵinject(i1.NZ_DATE_CONFIG, 8)); }, token: DateHelperService, providedIn: "root" });
DateHelperService.ctorParameters = () => [
    { type: NzI18nService },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [NZ_DATE_CONFIG,] }] }
];
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(DateHelperService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
                useFactory: DATE_HELPER_SERVICE_FACTORY,
                deps: [Injector, [new Optional(), NZ_DATE_CONFIG]]
            }]
    }], function () { return [{ type: ɵngcc1.NzI18nService }, { type: undefined, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [NZ_DATE_CONFIG]
            }] }]; }, null); })();
/**
 * DateHelper that handles date formats with date-fns
 */
export class DateHelperByDateFns extends DateHelperService {
    getISOWeek(date) {
        return fnsGetISOWeek(date);
    }
    // Use date-fns's "weekStartsOn" to support different locale when "config.firstDayOfWeek" is null
    // https://github.com/date-fns/date-fns/blob/v2.0.0-alpha.27/src/locale/en-US/index.js#L23
    getFirstDayOfWeek() {
        let defaultWeekStartsOn;
        try {
            defaultWeekStartsOn = this.i18n.getDateLocale().options.weekStartsOn;
        }
        catch (e) {
            defaultWeekStartsOn = 1;
        }
        return this.config.firstDayOfWeek == null ? defaultWeekStartsOn : this.config.firstDayOfWeek;
    }
    /**
     * Format a date
     * @see https://date-fns.org/docs/format#description
     * @param date Date
     * @param formatStr format string
     */
    format(date, formatStr) {
        return date ? fnsFormat(date, formatStr, { locale: this.i18n.getDateLocale() }) : '';
    }
    parseDate(text, formatStr) {
        return fnsParse(text, formatStr, new Date(), {
            locale: this.i18n.getDateLocale(),
            weekStartsOn: this.getFirstDayOfWeek()
        });
    }
    parseTime(text, formatStr) {
        return this.parseDate(text, formatStr);
    }
}
DateHelperByDateFns.ɵprov = i0.ɵɵdefineInjectable({ factory: function DateHelperByDateFns_Factory() { return DATE_HELPER_SERVICE_FACTORY(i0.ɵɵinject(i0.INJECTOR), i0.ɵɵinject(i1.NZ_DATE_CONFIG, 8)); }, token: DateHelperByDateFns, providedIn: "root" });
/**
 * DateHelper that handles date formats with angular's date-pipe
 *
 * @see https://github.com/NG-ZORRO/ng-zorro-antd/issues/2406 - DatePipe may cause non-standard week bug, see:
 *
 */
export class DateHelperByDatePipe extends DateHelperService {
    getISOWeek(date) {
        return +this.format(date, 'w');
    }
    getFirstDayOfWeek() {
        if (this.config.firstDayOfWeek === undefined) {
            const locale = this.i18n.getLocaleId();
            return locale && ['zh-cn', 'zh-tw'].indexOf(locale.toLowerCase()) > -1 ? 1 : 0;
        }
        return this.config.firstDayOfWeek;
    }
    format(date, formatStr) {
        return date ? formatDate(date, formatStr, this.i18n.getLocaleId()) : '';
    }
    parseDate(text) {
        return new Date(text);
    }
    parseTime(text, formatStr) {
        const parser = new ɵNgTimeParser(formatStr, this.i18n.getLocaleId());
        return parser.toDate(text);
    }
}
DateHelperByDatePipe.ɵprov = i0.ɵɵdefineInjectable({ factory: function DateHelperByDatePipe_Factory() { return DATE_HELPER_SERVICE_FACTORY(i0.ɵɵinject(i0.INJECTOR), i0.ɵɵinject(i1.NZ_DATE_CONFIG, 8)); }, token: DateHelperByDatePipe, providedIn: "root" });

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1oZWxwZXIuc2VydmljZS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vY29tcG9uZW50cy9pMThuL2RhdGUtaGVscGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUVILE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxNQUFNLElBQUksU0FBUyxFQUFFLFVBQVUsSUFBSSxhQUFhLEVBQUUsS0FBSyxJQUFJLFFBQVEsRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUUvRixPQUFPLEVBQWdCLGFBQWEsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3RFLE9BQU8sRUFBRSxlQUFlLEVBQWdCLGNBQWMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDbEQ7QUFDb0M7OztBQUFwQyxNQUFNLFVBQVUsMkJBQTJCLENBQUMsUUFBa0IsRUFBRSxNQUFvQjtBQUFJLElBQ3RGLE1BQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7QUFDM0MsSUFBRSxPQUFPLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxtQkFBbUIsQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksb0JBQW9CLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQy9HLENBQUM7QUFFRDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBTUgsTUFBTSxPQUFnQixpQkFBaUI7QUFDdkMsSUFBRSxZQUFzQixJQUFtQixFQUFnRCxNQUFvQjtBQUMvRyxRQUR3QixTQUFJLEdBQUosSUFBSSxDQUFlO0FBQUMsUUFBK0Ms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SSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3JGLFNBQUs7QUFDTCxRQUFJLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUM7QUFDdEMsSUFBRSxDQUFDO0FBQ0gsSUFDRSxNQUFNLENBQUMsSUFBaUIsRUFBRSxTQUFpQjtBQUFJLFFBQzdDLE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztBQUM3RSxJQUFFLENBQUM7QUFDSCxJQUNFLFNBQVMsQ0FBQyxJQUFZO0FBQUksUUFDeEIsT0FBTyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUMxQixJQUFFLENBQUM7QUFDSCxJQUNFLFNBQVMsQ0FBQyxJQUFZLEVBQUUsU0FBaUI7QUFBSSxRQUMzQyxNQUFNLE1BQU0sR0FBRyxJQUFJLGFBQWEsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO0FBQ3pFLFFBQUksT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQy9CLElBQUUsQ0FBQztBQUNIO0FBQ0E7QUFBZ1EiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBmb3JtYXREYXRlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgSW5qZWN0b3IsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBmb3JtYXQgYXMgZm5zRm9ybWF0LCBnZXRJU09XZWVrIGFzIGZuc0dldElTT1dlZWssIHBhcnNlIGFzIGZuc1BhcnNlIH0gZnJvbSAnZGF0ZS1mbnMnO1xuXG5pbXBvcnQgeyBXZWVrRGF5SW5kZXgsIMm1TmdUaW1lUGFyc2VyIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3RpbWUnO1xuaW1wb3J0IHsgbWVyZ2VEYXRlQ29uZmlnLCBOekRhdGVDb25maWcsIE5aX0RBVEVfQ09ORklHIH0gZnJvbSAnLi9kYXRlLWNvbmZpZyc7XG5pbXBvcnQgeyBOekkxOG5TZXJ2aWNlIH0gZnJvbSAnLi9uei1pMThuLnNlcnZpY2UnO1xuXG5leHBvcnQgZnVuY3Rpb24gREFURV9IRUxQRVJfU0VSVklDRV9GQUNUT1JZKGluamVjdG9yOiBJbmplY3RvciwgY29uZmlnOiBOekRhdGVDb25maWcpOiBEYXRlSGVscGVyU2VydmljZSB7XG4gIGNvbnN0IGkxOG4gPSBpbmplY3Rvci5nZXQoTnpJMThuU2VydmljZSk7XG4gIHJldHVybiBpMThuLmdldERhdGVMb2NhbGUoKSA/IG5ldyBEYXRlSGVscGVyQnlEYXRlRm5zKGkxOG4sIGNvbmZpZykgOiBuZXcgRGF0ZUhlbHBlckJ5RGF0ZVBpcGUoaTE4biwgY29uZmlnKTtcbn1cblxuLyoqXG4gKiBBYnN0cmFjdCBEYXRlSGVscGVyU2VydmljZShUb2tlbiB2aWEgQ2xhc3MpXG4gKiBDb21wYXRpYmlsaXR5OiBjb21wYWN0IGZvciBvcmlnaW5hbCB1c2FnZSBieSBkZWZhdWx0IHdoaWNoIHVzaW5nIERhdGVQaXBlXG4gKi9cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxuICB1c2VGYWN0b3J5OiBEQVRFX0hFTFBFUl9TRVJWSUNFX0ZBQ1RPUlksXG4gIGRlcHM6IFtJbmplY3RvciwgW25ldyBPcHRpb25hbCgpLCBOWl9EQVRFX0NPTkZJR11dXG59KVxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIERhdGVIZWxwZXJTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIGkxOG46IE56STE4blNlcnZpY2UsIEBPcHRpb25hbCgpIEBJbmplY3QoTlpfREFURV9DT05GSUcpIHByb3RlY3RlZCBjb25maWc6IE56RGF0ZUNvbmZpZykge1xuICAgIHRoaXMuY29uZmlnID0gbWVyZ2VEYXRlQ29uZmlnKHRoaXMuY29uZmlnKTtcbiAgfVxuXG4gIGFic3RyYWN0IGdldElTT1dlZWsoZGF0ZTogRGF0ZSk6IG51bWJlcjtcbiAgYWJzdHJhY3QgZ2V0Rmlyc3REYXlPZldlZWsoKTogV2Vla0RheUluZGV4O1xuICBhYnN0cmFjdCBmb3JtYXQoZGF0ZTogRGF0ZSB8IG51bGwsIGZvcm1hdFN0cjogc3RyaW5nKTogc3RyaW5nO1xuICBhYnN0cmFjdCBwYXJzZURhdGUodGV4dDogc3RyaW5nLCBmb3JtYXRTdHI/OiBzdHJpbmcpOiBEYXRlO1xuICBhYnN0cmFjdCBwYXJzZVRpbWUodGV4dDogc3RyaW5nLCBmb3JtYXRTdHI/OiBzdHJpbmcpOiBEYXRlIHwgdW5kZWZpbmVkO1xufVxuXG4vKipcbiAqIERhdGVIZWxwZXIgdGhhdCBoYW5kbGVzIGRhdGUgZm9ybWF0cyB3aXRoIGRhdGUtZm5zXG4gKi9cbmV4cG9ydCBjbGFzcyBEYXRlSGVscGVyQnlEYXRlRm5zIGV4dGVuZHMgRGF0ZUhlbHBlclNlcnZpY2Uge1xuICBnZXRJU09XZWVrKGRhdGU6IERhdGUpOiBudW1iZXIge1xuICAgIHJldHVybiBmbnNHZXRJU09XZWVrKGRhdGUpO1xuICB9XG5cbiAgLy8gVXNlIGRhdGUtZm5zJ3MgXCJ3ZWVrU3RhcnRzT25cIiB0byBzdXBwb3J0IGRpZmZlcmVudCBsb2NhbGUgd2hlbiBcImNvbmZpZy5maXJzdERheU9mV2Vla1wiIGlzIG51bGxcbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvdjIuMC4wLWFscGhhLjI3L3NyYy9sb2NhbGUvZW4tVVMvaW5kZXguanMjTDIzXG4gIGdldEZpcnN0RGF5T2ZXZWVrKCk6IFdlZWtEYXlJbmRleCB7XG4gICAgbGV0IGRlZmF1bHRXZWVrU3RhcnRzT246IFdlZWtEYXlJbmRleDtcbiAgICB0cnkge1xuICAgICAgZGVmYXVsdFdlZWtTdGFydHNPbiA9IHRoaXMuaTE4bi5nZXREYXRlTG9jYWxlKCkub3B0aW9ucyEud2Vla1N0YXJ0c09uITtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBkZWZhdWx0V2Vla1N0YXJ0c09uID0gMTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuY29uZmlnLmZpcnN0RGF5T2ZXZWVrID09IG51bGwgPyBkZWZhdWx0V2Vla1N0YXJ0c09uIDogdGhpcy5jb25maWcuZmlyc3REYXlPZldlZWs7XG4gIH1cblxuICAvKipcbiAgICogRm9ybWF0IGEgZGF0ZVxuICAgKiBAc2VlIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvZm9ybWF0I2Rlc2NyaXB0aW9uXG4gICAqIEBwYXJhbSBkYXRlIERhdGVcbiAgICogQHBhcmFtIGZvcm1hdFN0ciBmb3JtYXQgc3RyaW5nXG4gICAqL1xuICBmb3JtYXQoZGF0ZTogRGF0ZSwgZm9ybWF0U3RyOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiBkYXRlID8gZm5zRm9ybWF0KGRhdGUsIGZvcm1hdFN0ciwgeyBsb2NhbGU6IHRoaXMuaTE4bi5nZXREYXRlTG9jYWxlKCkgfSkgOiAnJztcbiAgfVxuXG4gIHBhcnNlRGF0ZSh0ZXh0OiBzdHJpbmcsIGZvcm1hdFN0cjogc3RyaW5nKTogRGF0ZSB7XG4gICAgcmV0dXJuIGZuc1BhcnNlKHRleHQsIGZvcm1hdFN0ciwgbmV3IERhdGUoKSwge1xuICAgICAgbG9jYWxlOiB0aGlzLmkxOG4uZ2V0RGF0ZUxvY2FsZSgpLFxuICAgICAgd2Vla1N0YXJ0c09uOiB0aGlzLmdldEZpcnN0RGF5T2ZXZWVrKClcbiAgICB9KTtcbiAgfVxuXG4gIHBhcnNlVGltZSh0ZXh0OiBzdHJpbmcsIGZvcm1hdFN0cjogc3RyaW5nKTogRGF0ZSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMucGFyc2VEYXRlKHRleHQsIGZvcm1hdFN0cik7XG4gIH1cbn1cblxuLyoqXG4gKiBEYXRlSGVscGVyIHRoYXQgaGFuZGxlcyBkYXRlIGZvcm1hdHMgd2l0aCBhbmd1bGFyJ3MgZGF0ZS1waXBlXG4gKlxuICogQHNlZSBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9pc3N1ZXMvMjQwNiAtIERhdGVQaXBlIG1heSBjYXVzZSBub24tc3RhbmRhcmQgd2VlayBidWcsIHNlZTpcbiAqXG4gKi9cbmV4cG9ydCBjbGFzcyBEYXRlSGVscGVyQnlEYXRlUGlwZSBleHRlbmRzIERhdGVIZWxwZXJTZXJ2aWNlIHtcbiAgZ2V0SVNPV2VlayhkYXRlOiBEYXRlKTogbnVtYmVyIHtcbiAgICByZXR1cm4gK3RoaXMuZm9ybWF0KGRhdGUsICd3Jyk7XG4gIH1cblxuICBnZXRGaXJzdERheU9mV2VlaygpOiBXZWVrRGF5SW5kZXgge1xuICAgIGlmICh0aGlzLmNvbmZpZy5maXJzdERheU9mV2VlayA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb25zdCBsb2NhbGUgPSB0aGlzLmkxOG4uZ2V0TG9jYWxlSWQoKTtcbiAgICAgIHJldHVybiBsb2NhbGUgJiYgWyd6aC1jbicsICd6aC10dyddLmluZGV4T2YobG9jYWxlLnRvTG93ZXJDYXNlKCkpID4gLTEgPyAxIDogMDtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuY29uZmlnLmZpcnN0RGF5T2ZXZWVrO1xuICB9XG5cbiAgZm9ybWF0KGRhdGU6IERhdGUgfCBudWxsLCBmb3JtYXRTdHI6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGRhdGUgPyBmb3JtYXREYXRlKGRhdGUsIGZvcm1hdFN0ciwgdGhpcy5pMThuLmdldExvY2FsZUlkKCkpISA6ICcnO1xuICB9XG5cbiAgcGFyc2VEYXRlKHRleHQ6IHN0cmluZyk6IERhdGUge1xuICAgIHJldHVybiBuZXcgRGF0ZSh0ZXh0KTtcbiAgfVxuXG4gIHBhcnNlVGltZSh0ZXh0OiBzdHJpbmcsIGZvcm1hdFN0cjogc3RyaW5nKTogRGF0ZSB7XG4gICAgY29uc3QgcGFyc2VyID0gbmV3IMm1TmdUaW1lUGFyc2VyKGZvcm1hdFN0ciwgdGhpcy5pMThuLmdldExvY2FsZUlkKCkpO1xuICAgIHJldHVybiBwYXJzZXIudG9EYXRlKHRleHQpO1xuICB9XG59XG4iXX0=