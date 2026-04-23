import { endOfDay, format, startOfDay } from "date-fns";
import { DateRange } from "@/shared/types/date-range/date-range-type";

const dateFormatStrings = {
    short: "dd.MM.yyyy",
    long: "dd MMMM yyyy",
    dateTime: "dd.MM.yyyy HH:mm",
    iso: "yyyy-MM-dd",
    isoDateTime: "yyyy-MM-dd'T'HH:mm:ss",
} as const;

type DateFormatString = (typeof dateFormatStrings)[keyof typeof dateFormatStrings];

export function getTodayDate() {
    return format(new Date(), "yyyy-MM-dd");
}

export function isDateInRange(date: Date | null, dateRange: DateRange) {
    if (!dateRange.from && !dateRange.to) return true;

    if (!(date instanceof Date) || Number.isNaN(date.getTime())) return false;

    return (
        (!dateRange.from || date >= startOfDay(dateRange.from)) &&
        (!dateRange.to || date <= endOfDay(dateRange.to))
    );
}

export function formatDateToIsoDate(date: unknown) {
    return formatDate(date, dateFormatStrings.iso);
}

export function formatDateToShortDate(date: unknown) {
    return formatDate(date, dateFormatStrings.short);
}

function formatDate(value: unknown, dateFormatString: DateFormatString) {
    if (!value) return "";

    let date: Date;

    if (value instanceof Date) {
        date = value;
    } else if (typeof value === "string") {
        date = new Date(value);
    } else {
        throw new Error(`formatDate received invalid type: ${typeof value}`);
    }

    if (isNaN(date.getTime())) {
        throw new Error(`formatDate received invalid date value: ${value}`);
    }

    return format(date, dateFormatString);
}
