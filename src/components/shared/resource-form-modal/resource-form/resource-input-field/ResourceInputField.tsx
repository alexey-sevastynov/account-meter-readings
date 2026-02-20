import { Control, Controller, FieldErrors, FieldValues } from "react-hook-form";
import { isNumberFieldType } from "@/components/shared/resource-form-modal/resource-form/resource-input-field/resourceInputField.funcs";
import { ResourceField } from "@/types/resource-field";
import { MRInput } from "@/components/ui/input/Input";

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
    const errorMessage = errors[field.name]?.message as string;

    return (
        <Controller
            name={field.name}
            control={control}
            rules={{
                required: field.required ? `${field.label} обов'язкове поле` : undefined,
            }}
            render={(controllerFieldState) => (
                <div>
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
                    {errorMessage && <p className="text-destructive mt-1 text-sm">{errorMessage}</p>}
                </div>
            )}
        />
    );
}
