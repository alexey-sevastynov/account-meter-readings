import { format } from "date-fns";

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

export function formatDate(value: unknown, dateFormatString: DateFormatString = dateFormatStrings.short) {
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
