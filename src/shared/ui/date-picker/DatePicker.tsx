"use client";

import * as Popover from "@radix-ui/react-popover";
// eslint-disable-next-line import/no-unresolved
import "react-day-picker/dist/style.css";
import { Calendar as CalendarIcon } from "lucide-react";
import { DayPicker } from "react-day-picker";
import { useState } from "react";
import { formatSingleDate } from "@/shared/ui/date-picker/datePicker.funcs";
import { uk } from "date-fns/locale";
import { cn } from "@/shared/lib/cn";
import { FloatingLabel } from "@/shared/ui/input/FloatingLabel";
import { VoidFunc } from "@/shared/types/getter-setter-functions";

interface DatePickerProps {
    label?: string;
    value?: Date;
    onChange?: VoidFunc<Date | undefined>;
    className?: string;
    fromYear?: number;
    toYear?: number;
    highlightDates?: Date[];
}

export function DatePicker({
    label,
    value,
    onChange,
    className,
    fromYear = 2025,
    toYear = new Date().getFullYear(),
    highlightDates = [],
}: DatePickerProps) {
    const [open, setOpen] = useState(false);
    const [isFocused, setIsFocused] = useState(false);

    return (
        <div className={cn("relative h-12 w-full", className)}>
            <Popover.Root open={open} onOpenChange={setOpen}>
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
                        <span>{formatSingleDate(value)}</span>
                        <CalendarIcon className="h-4 w-4 shrink-0 text-[color:var(--color-foreground)]" />
                    </button>
                </Popover.Trigger>

                <Popover.Portal>
                    <Popover.Content
                        align="start"
                        className="border-border bg-background text-foreground z-50 rounded-xl border p-3 shadow-lg"
                    >
                        <DayPicker
                            mode="single"
                            selected={value}
                            onSelect={(date) => {
                                onChange?.(date);
                                setOpen(false);
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
                            className="bg-background text-foreground [&_button]:text-foreground [&_button:hover]:bg-primary/10 [&_button:focus-visible]:ring-ring [&_.rdp-day_selected]:bg-primary [&_.rdp-day_selected]:text-primary-foreground [&_.rdp-day_disabled]:text-muted-foreground [&_button:focus-visible]:ring-2"
                        />
                    </Popover.Content>
                </Popover.Portal>
            </Popover.Root>

            {label && <FloatingLabel label={label} isFocused={isFocused || open} hasValue={Boolean(value)} />}
        </div>
    );
}
