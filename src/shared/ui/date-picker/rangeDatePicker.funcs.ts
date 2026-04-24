import { DateRange } from "@/shared/types/date-range/date-range-type";
import { format } from "date-fns";
import { uk } from "date-fns/locale";

export const formatDateRange = (value?: DateRange): string => {
    if (!value?.from) return "";

    const fromStr = format(value.from, "dd.MM.yyyy", { locale: uk });

    if (!value.to) return fromStr;

    const toStr = format(value.to, "dd.MM.yyyy", { locale: uk });

    return `${fromStr} — ${toStr}`;
};
