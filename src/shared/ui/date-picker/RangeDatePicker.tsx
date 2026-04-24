"use client";

import * as Popover from "@radix-ui/react-popover";
// eslint-disable-next-line import/no-unresolved
import "react-day-picker/dist/style.css";
import { Calendar as CalendarIcon } from "lucide-react";
import { DayPicker } from "react-day-picker";
import { useState } from "react";
import { formatDateRange } from "@/shared/ui/date-picker/rangeDatePicker.funcs";
import { uk } from "date-fns/locale";
import { cn } from "@/shared/lib/cn";
import { FloatingLabel } from "@/shared/ui/input/FloatingLabel";
import { DateRange } from "@/shared/types/date-range/date-range-type";
import { VoidFunc } from "@/shared/types/getter-setter-functions";

interface RangeDatePickerProps {
    value?: DateRange;
    onChange?: VoidFunc<DateRange>;
    label?: string;
    className?: string;
    fromYear?: number;
    toYear?: number;
    highlightDates?: Date[];
}

interface RangeDatePickerTriggerProps {
    setIsFocused: VoidFunc<boolean>;
    value?: DateRange;
}

interface RangeDatePickerPortalProps {
    value?: DateRange;
    onChange?: VoidFunc<DateRange>;
    fromYear?: number;
    toYear?: number;
    highlightDates?: Date[];
}

export function RangeDatePicker({
    value,
    onChange,
    label = "Період",
    className,
    fromYear,
    toYear,
    highlightDates,
}: RangeDatePickerProps) {
    const [open, setOpen] = useState(false);
    const [isFocused, setIsFocused] = useState(false);

    return (
        <div className={cn("relative h-12 w-full", className)}>
            <Popover.Root open={open} onOpenChange={setOpen}>
                <RangeDatePickerTrigger setIsFocused={setIsFocused} value={value} />
                <RangeDatePickerPortal
                    value={value}
                    onChange={onChange}
                    fromYear={fromYear}
                    toYear={toYear}
                    highlightDates={highlightDates}
                />
            </Popover.Root>

            {label && (
                <FloatingLabel
                    label={label}
                    isFocused={isFocused || open}
                    hasValue={Boolean(value?.from || value?.to)}
                />
            )}
        </div>
    );
}

function RangeDatePickerTrigger({ setIsFocused, value }: RangeDatePickerTriggerProps) {
    return (
        <Popover.Trigger asChild>
            <button
                type="button"
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                className={cn(
                    "peer flex h-full w-full items-center justify-between rounded-xl border px-4",
                    "border-border bg-[color:var(--color-input)] text-[color:var(--color-foreground)]",
                    "focus:ring-ring focus:ring-2 focus:ring-offset-2 focus:outline-none",
                    "transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-50",
                )}
            >
                <span>{formatDateRange(value)}</span>
                <CalendarIcon className="h-4 w-4 shrink-0 text-[color:var(--color-foreground)]" />
            </button>
        </Popover.Trigger>
    );
}

function RangeDatePickerPortal({
    value,
    onChange,
    fromYear = 2025,
    toYear = new Date().getFullYear(),
    highlightDates = [],
}: RangeDatePickerPortalProps) {
    return (
        <Popover.Portal>
            <Popover.Content
                align="start"
                className="border-border bg-background text-foreground z-50 rounded-xl border p-3 shadow-lg"
            >
                <DayPicker
                    mode="range"
                    selected={value?.from ? { from: value.from, to: value.to } : undefined}
                    onSelect={(range) => {
                        onChange?.(range || {});
                    }}
                    locale={uk}
                    captionLayout="dropdown"
                    startMonth={new Date(fromYear, 0)}
                    endMonth={new Date(toYear, 11)}
                    modifiers={{ highlighted: highlightDates }}
                    modifiersClassNames={{
                        highlighted: cn(
                            `relative font-bold 
                                    after:absolute 
                                    after:bottom-1 
                                    after:left-1/2 
                                    after:-translate-x-1/2 
                                    after:h-1 after:w-1 
                                    after:rounded-full 
                                    after:bg-primary`,
                        ),
                    }}
                    className="bg-background text-foreground [&_button]:text-foreground [&_button:hover]:bg-primary/10 [&_button:focus-visible]:ring-ring [&_.rdp-day_selected]:bg-primary [&_.rdp-day_selected]:text-primary-foreground [&_.rdp-day_disabled]:text-muted-foreground [&_.rdp-day_range_middle]:bg-primary/20 [&_.rdp-day_range_middle]:text-foreground [&_button:focus-visible]:ring-2"
                />
            </Popover.Content>
        </Popover.Portal>
    );
}
