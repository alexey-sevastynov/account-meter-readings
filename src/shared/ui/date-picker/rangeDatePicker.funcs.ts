import { DateRange } from "@/shared/types/date-range/date-range-type";

export function isFromDateAfterTo(date?: Date, value?: DateRange) {
    return !!(date && value?.to && date > value.to);
}

export function isToDateBeforeFrom(date?: Date, value?: DateRange) {
    return !!(date && value?.from && date < value.from);
}
