"use client";

import { useState } from "react";
import { Control, FieldErrors, FieldValues, Path } from "react-hook-form";
import { ValidatedInput } from "@/shared/ui/validated-input/ValidatedInput";
import { iconNames } from "@/shared/ui/icon/icon-name";
import { Icon } from "@/shared/ui/icon/Icon";

interface PasswordInputProps<TFormValues extends FieldValues> {
    name: Path<TFormValues>;
    control: Control<TFormValues>;
    errors: FieldErrors<TFormValues>;
    label?: string;
    rules?: object;
    placeholder?: string;
}

const defaultRules = {
    required: "Пароль є обов'язковим",
    minLength: { value: 8, message: "Мінімальна довжина 8 символів" },
};

export function PasswordInput<TFormValues extends FieldValues>({
    name,
    control,
    errors,
    label = "Пароль",
    rules = defaultRules,
    placeholder = "••••••••",
}: PasswordInputProps<TFormValues>) {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    return (
        <div className="relative">
            <ValidatedInput
                name={name}
                control={control}
                errors={errors}
                label={label}
                type={isPasswordVisible ? "text" : "password"}
                rules={rules}
                inputClassName="pr-10 relative"
                placeholder={placeholder}
            />
            <button
                type="button"
                onClick={() => setIsPasswordVisible((prev) => !prev)}
                className="absolute top-6 right-3 -translate-y-1/2"
            >
                <Icon
                    name={isPasswordVisible ? iconNames.eyeOff : iconNames.eye}
                    className="cursor-pointer"
                />
            </button>
        </div>
    );
}
