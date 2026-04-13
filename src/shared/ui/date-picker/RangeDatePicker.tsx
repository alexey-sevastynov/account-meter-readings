"use client";

import { DatePicker } from "@/shared/ui/date-picker/DatePicker";
import { DateRange } from "@/shared/types/date-range/date-range-type";
import { cn } from "@/shared/lib/cn";
import { appToast } from "@/shared/lib/toast";
import { VoidFunc } from "@/shared/types/getter-setter-functions";
import { isFromDateAfterTo, isToDateBeforeFrom } from "@/shared/ui/date-picker/rangeDatePicker.funcs";

interface RangeDatePickerProps {
    value?: DateRange;
    onChange?: VoidFunc<DateRange>;
    fromLabel?: string;
    toLabel?: string;
    className?: string;
}

export function RangeDatePicker({
    value,
    onChange,
    fromLabel = "Від",
    toLabel = "До",
    className,
}: RangeDatePickerProps) {
    return (
        <div className={cn("flex flex-col gap-2", className)}>
            <div className="flex items-center gap-2">
                <DatePicker
                    label={fromLabel}
                    value={value?.from}
                    onChange={(date?: Date) => {
                        if (isFromDateAfterTo(date, value)) {
                            appToast.error("Дата «Від» не може бути пізніше дати «До»");

                            return;
                        }

                        onChange?.({ ...value, from: date });
                    }}
                />
                <DatePicker
                    label={toLabel}
                    value={value?.to}
                    onChange={(date?: Date) => {
                        if (isToDateBeforeFrom(date, value)) {
                            appToast.error("Дата «До» не може бути раніше дати «Від»");

                            return;
                        }

                        onChange?.({ ...value, to: date });
                    }}
                />
            </div>
        </div>
    );
}
