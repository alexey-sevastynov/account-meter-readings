"use client";

import * as Popover from "@radix-ui/react-popover";
// eslint-disable-next-line import/no-unresolved
import "react-day-picker/dist/style.css";
import { Calendar as CalendarIcon } from "lucide-react";
import { DayPicker } from "react-day-picker";
import { useState } from "react";
import { format } from "date-fns";
import { uk } from "date-fns/locale";
import { cn } from "@/lib/cn";
import { MrFloatingLabel } from "@/components/ui/input/FloatingLabel";
import { VoidFunc } from "@/types/getter-setter-functions";

interface MrDatePickerProps {
    label?: string;
    value?: Date;
    onChange?: VoidFunc<Date | undefined>;
    className?: string;
    fromYear?: number;
    toYear?: number;
}

export function MrDatePicker({
    label,
    value,
    onChange,
    className,
    fromYear = 1900,
    toYear = new Date().getFullYear(),
}: MrDatePickerProps) {
    const [open, setOpen] = useState(false);
    const [isFocused, setIsFocused] = useState(false);

    const hasValue = Boolean(value);

    return (
        <div className="relative h-12 w-full">
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
                            className,
                        )}
                    >
                        {value ? (
                            <span>{format(value, "dd.MM.yyyy", { locale: uk })}</span>
                        ) : (
                            <span className="invisible">&nbsp;</span>
                        )}
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
                            fromYear={fromYear}
                            toYear={toYear}
                            className="bg-background text-foreground [&_button]:text-foreground [&_button:hover]:bg-primary/10 [&_button:focus-visible]:ring-ring [&_day]:hover:bg-primary/10 [&_day_selected]:bg-primary [&_day_selected]:text-primary-foreground [&_day_disabled]:text-muted-foreground [&_button:focus-visible]:ring-2"
                        />
                    </Popover.Content>
                </Popover.Portal>
            </Popover.Root>

            {label && <MrFloatingLabel label={label} isFocused={isFocused || open} hasValue={hasValue} />}
        </div>
    );
}
