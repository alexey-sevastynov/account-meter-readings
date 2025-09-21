"use client";

import { useState } from "react";
import { Control, FieldErrors, FieldValues, Path } from "react-hook-form";
import { MrValidatedInput } from "@/components/shared/validated-input/ValidatedInput";
import { iconNames } from "@/enums/ui/icon-name";
import { MrIcon } from "@/components/ui/icon/Icon";

interface MrPasswordInputProps<TFormValues extends FieldValues> {
    name: Path<TFormValues>;
    control: Control<TFormValues>;
    errors: FieldErrors<TFormValues>;
    label?: string;
    rules?: object;
}

const defaultRules = {
    required: "Password is required",
    minLength: { value: 8, message: "Min length 8" },
};

export function MrPasswordInput<TFormValues extends FieldValues>({
    name,
    control,
    errors,
    label = "Password",
    rules = defaultRules,
}: MrPasswordInputProps<TFormValues>) {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    return (
        <div className="relative">
            <MrValidatedInput
                name={name}
                control={control}
                errors={errors}
                label={label}
                type={isPasswordVisible ? "text" : "password"}
                rules={rules}
                inputClassName="pr-10 relative"
            />
            <button
                type="button"
                onClick={() => setIsPasswordVisible((prev) => !prev)}
                className="absolute right-3 top-6 -translate-y-1/2"
            >
                <MrIcon
                    name={isPasswordVisible ? iconNames.eyeOff : iconNames.eye}
                    className="cursor-pointer"
                />
            </button>
        </div>
    );
}
