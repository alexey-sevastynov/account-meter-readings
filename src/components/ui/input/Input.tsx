import React, { InputHTMLAttributes, useState } from "react";
import { cn } from "@/lib/cn";
import { InputVariantKey, inputVariantKeys } from "@/enums/ui/input-variant-key";
import { MrFloatingLabel } from "@/components/ui/input/FloatingLabel";

interface MRInputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    className?: string;
    variant?: InputVariantKey;
}

const baseStyles = `
peer w-full h-full rounded-xl border px-4 text-foreground
focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed
flex items-center transition-colors duration-200 placeholder:text-muted-foreground
bg-[color:var(--color-input)]
`;

const variants: Record<InputVariantKey, string> = {
    primary: "border-b border-border focus:border-primary ",
    secondary: "border-b border-border focus:border-secondary",
    error: "border-b border-destructive focus:border-destructive",
};

export function MRInput({
    label,
    className,
    variant = inputVariantKeys.primary,
    value: externalValue,
    onChange,
    placeholder,
    ...props
}: MRInputProps) {
    const [internalValue, setInternalValue] = useState("");
    const [isFocused, setIsFocused] = useState(false);

    const value = externalValue ?? internalValue;
    const hasValue = Boolean(value);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (onChange) {
            onChange(e);
        } else {
            setInternalValue(e.target.value);
        }
    };

    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
        setIsFocused(true);
        props.onFocus?.(e);
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        setIsFocused(false);
        props.onBlur?.(e);
    };

    return (
        <div className="relative h-12 w-full">
            <input
                {...props}
                value={value}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                placeholder={isFocused ? placeholder : ""}
                className={cn(baseStyles, variants[variant], className)}
            />
            {label && <MrFloatingLabel label={label} isFocused={isFocused} hasValue={hasValue} />}
        </div>
    );
}
