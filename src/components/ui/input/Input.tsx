import React, { InputHTMLAttributes } from "react";
import { cn } from "@/lib/cn";
import { InputVariantKey, inputVariantKeys } from "@/enums/ui/input-variant-key";

interface MRInputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    className?: string;
    variant?: InputVariantKey;
}

const variants: Record<InputVariantKey, string> = {
    primary: "border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500",
    secondary: "border-gray-400 focus:border-gray-600 focus:ring-1 focus:ring-gray-400",
    error: "border-red-600 focus:border-red-700 focus:ring-1 focus:ring-red-600",
};

export function MRInput({ label, className, variant = inputVariantKeys.primary, ...props }: MRInputProps) {
    return (
        <div className="relative w-full h-12">
            <input
                {...props}
                className={cn(
                    "peer w-full h-full rounded-xl border px-4 text-gray-900 bg-white placeholder-transparent focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed flex items-center",
                    variants[variant],
                    className
                )}
            />
            {label && (
                <span
                    className="
                        absolute left-4 bg-white px-1 text-gray-400 text-base transition-all
                        top-1/2 -translate-y-1/2
                        peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base
                        peer-focus:top-0 peer-focus:text-sm peer-focus:text-blue-500
                        pointer-events-none
                    "
                >
                    {label}
                </span>
            )}
        </div>
    );
}
