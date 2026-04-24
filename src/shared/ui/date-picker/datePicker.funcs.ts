import { format } from "date-fns";
import { uk } from "date-fns/locale";

export function formatSingleDate(value?: Date) {
    if (!value) return "";

    return format(value, "dd.MM.yyyy", { locale: uk });
}
