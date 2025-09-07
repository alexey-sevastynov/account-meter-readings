import React, { InputHTMLAttributes, useState } from "react";
import { cn } from "@/lib/cn";
import { InputVariantKey, inputVariantKeys } from "@/enums/ui/input-variant-key";
import { MrFloatingLabel } from "@/components/ui/input/FloatingLabel";

interface MRInputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    className?: string;
    variant?: InputVariantKey;
}

const baseStyles =
    "peer w-full h-full rounded-xl border px-4 text-gray-900 bg-white placeholder-transparent focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed flex items-center autofill:bg-white autofill:shadow-[inset_0_0_0px_1000px_white] autofill:[-webkit-text-fill-color:theme(colors.gray.900)]";

const variants: Record<InputVariantKey, string> = {
    primary: "border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500",
    secondary: "border-gray-400 focus:border-gray-600 focus:ring-1 focus:ring-gray-400",
    error: "border-red-600 focus:border-red-700 focus:ring-1 focus:ring-red-600",
};

export function MRInput({
    label,
    className,
    variant = inputVariantKeys.primary,
    value: externalValue,
    onChange,
    ...props
}: MRInputProps) {
    const [internalValue, setInternalValue] = useState("");
    const [isFocused, setIsFocused] = useState(false);

    const value = externalValue ? externalValue : internalValue;
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
        <div className="relative w-full h-12">
            <input
                {...props}
                value={value}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                className={cn(baseStyles, variants[variant], className)}
            />
            {label && <MrFloatingLabel label={label} isFocused={isFocused} hasValue={hasValue} />}
        </div>
    );
}
