"use client";

import { useForm, DefaultValues, FieldValues } from "react-hook-form";
import { MrButton } from "@/shared/ui/button/Button";
import { VoidFunc } from "@/shared/types/getter-setter-functions";
import {
    isCheckboxFieldType,
    isDateFieldType,
    isEnumFieldType,
    isInputFieldType,
} from "@/shared/utils/resource-field-type-guards";
import { MrResourceInputField } from "@/shared/ui/form/resource-form-modal/resource-form/resource-input-field/ResourceInputField";
import { MrResourceCheckboxField } from "@/shared/ui/form/resource-form-modal/resource-form/resource-checkbox-field/ResourceCheckboxField";
import { MrResourceSelectField } from "@/shared/ui/form/resource-form-modal/resource-form/resource-select-field/ResourceSelectField";
import { ResourceField } from "@/shared/types/resource-field";
import { MrResourceDateField } from "@/shared/ui/form/resource-form-modal/resource-form/resource-date-field/ResourceDateField";

interface ResourceFormProps<T extends FieldValues> {
    fields: ResourceField<T>[];
    defaultValues?: DefaultValues<T>;
    onSubmit: VoidFunc<T>;
    submitLabel?: string;
    loading?: boolean;
}

export function MrResourceForm<T extends FieldValues>({
    fields,
    defaultValues,
    onSubmit,
    submitLabel = "Зберегти",
    loading,
}: ResourceFormProps<T>) {
    const {
        handleSubmit,
        control,
        formState: { errors },
    } = useForm<T>({ defaultValues });

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {fields.map((field) => {
                if (isInputFieldType(field.type)) {
                    return (
                        <MrResourceInputField
                            key={field.name}
                            field={field}
                            control={control}
                            errors={errors}
                        />
                    );
                }

                if (isCheckboxFieldType(field.type)) {
                    return (
                        <MrResourceCheckboxField
                            key={field.name}
                            field={field}
                            control={control}
                            errors={errors}
                        />
                    );
                }

                if (isEnumFieldType(field.type)) {
                    return (
                        <MrResourceSelectField
                            key={field.name}
                            field={field}
                            control={control}
                            errors={errors}
                        />
                    );
                }

                if (isDateFieldType(field.type)) {
                    return (
                        <MrResourceDateField
                            key={field.name}
                            field={field}
                            control={control}
                            errors={errors}
                        />
                    );
                }
            })}

            <MrButton text={submitLabel} type="submit" loading={loading} />
        </form>
    );
}
