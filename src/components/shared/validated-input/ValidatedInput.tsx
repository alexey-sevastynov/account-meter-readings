"use client";

import { Controller, Control, FieldErrors, FieldValues, Path } from "react-hook-form";
import { MRInput } from "@/components/ui/input/Input";
import { inputVariantKeys } from "@/enums/ui/input-variant-key";

export interface ValidatedInputProps<TFormValues extends FieldValues> {
    name: Path<TFormValues>;
    control: Control<TFormValues>;
    errors: FieldErrors<TFormValues>;
    label: string;
    type?: string;
    rules?: object;
    inputClassName?: string;
}

export function MrValidatedInput<TFormValues extends FieldValues>({
    name,
    control,
    errors,
    label,
    type = "text",
    rules = {},
    inputClassName,
}: ValidatedInputProps<TFormValues>) {
    const errorMessage = errors[name]?.message as string;

    return (
        <div className="mb-3">
            <Controller
                name={name}
                control={control}
                rules={rules}
                render={({ field }) => (
                    <MRInput
                        {...field}
                        className={inputClassName}
                        type={type}
                        label={label}
                        variant={errorMessage ? inputVariantKeys.error : inputVariantKeys.primary}
                    />
                )}
            />
            {errorMessage && <p className="text-sm text-red-500 mt-1">{errorMessage}</p>}
        </div>
    );
}
