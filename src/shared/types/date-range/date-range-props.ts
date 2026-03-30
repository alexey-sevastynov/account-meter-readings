import { nameOf } from "@/shared/utils/name-of";
import { DateRange } from "@/shared/types/date-range/date-range-type";

export const dateRangeProps: Record<keyof DateRange, string> = {
    from: nameOf<DateRange>("from"),
    to: nameOf<DateRange>("to"),
} as const;
