import { typeNames } from "@/shared/enums/type-name";
import { DateRange } from "@/shared/types/date-range/date-range-type";
import { dateRangeProps } from "@/shared/types/date-range/date-range-props";

export function isObject(value: unknown): value is object {
    return typeof value === typeNames.object && value !== null;
}

export function isString(value: unknown): value is string {
    return typeof value === typeNames.string;
}

export function isNumber(value: unknown): value is number {
    return typeof value === typeNames.number;
}

export function isArray(value: unknown): value is unknown[] {
    return Array.isArray(value);
}

export function isBoolean(value: unknown): value is boolean {
    return typeof value === typeNames.boolean;
}

export function isDate(value: unknown): value is Date {
    return value instanceof Date;
}

export function isEmptyObject(obj: unknown) {
    return isObject(obj) && !Array.isArray(obj) && Object.keys(obj).length === 0;
}

export function isDateRange(value: unknown): value is DateRange {
    return isObject(value) && (dateRangeProps.from in value || dateRangeProps.to in value);
}
