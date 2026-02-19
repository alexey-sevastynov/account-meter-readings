import { Control, Controller, FieldValues } from "react-hook-form";
import { MRInput } from "@/components/ui/input/Input";
import { isNumberFieldType } from "@/components/shared/resource-form-modal/resource-form/resource-input-field/resourceInputField.funcs";
import { ResourceField } from "@/types/resource-field";

interface MrResourceInputFieldProps<T extends FieldValues> {
    field: ResourceField<T>;
    control: Control<T>;
}

export function MrResourceInputField<T extends FieldValues>({
    field,
    control,
}: MrResourceInputFieldProps<T>) {
    return (
        <Controller
            name={field.name}
            control={control}
            render={(controllerFieldState) => (
                <MRInput
                    label={field.label}
                    type={field.type}
                    placeholder={field.placeholder}
                    value={controllerFieldState.field.value ?? ""}
                    onChange={(e) =>
                        controllerFieldState.field.onChange(
                            isNumberFieldType(field.type) ? Number(e.target.value) : e.target.value,
                        )
                    }
                />
            )}
        />
    );
}
