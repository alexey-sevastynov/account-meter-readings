import { Control, FieldErrors, FieldValues } from "react-hook-form";

import { isNumberFieldType } from "@/components/shared/resource-form-modal/resource-form/resource-input-field/resourceInputField.funcs";
import { ResourceField } from "@/types/resource-field";
import { MrValidatedInput } from "@/components/shared/validated-input/ValidatedInput";

interface MrResourceInputFieldProps<T extends FieldValues> {
    field: ResourceField<T>;
    control: Control<T>;
    errors: FieldErrors<T>;
}

export function MrResourceInputField<T extends FieldValues>({
    field,
    control,
    errors,
}: MrResourceInputFieldProps<T>) {
    return (
        <MrValidatedInput<T>
            name={field.name}
            control={control}
            errors={errors}
            label={field.label}
            type={isNumberFieldType(field.type) ? "number" : "text"}
            rules={{
                required: field.required ? `${field.label} обов'язкове поле` : false,
            }}
            placeholder={field.placeholder}
        />
    );
}
