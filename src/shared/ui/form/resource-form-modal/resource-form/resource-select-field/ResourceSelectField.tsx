import { Control, Controller, FieldValues, FieldErrors } from "react-hook-form";
import { Select } from "@/shared/ui/select/Select";
import { ResourceField } from "@/shared/types/resource-field";

interface ResourceSelectFieldProps<T extends FieldValues> {
    field: ResourceField<T>;
    control: Control<T>;
    errors: FieldErrors<T>;
}

export function ResourceSelectField<T extends FieldValues>({
    field,
    control,
    errors,
}: ResourceSelectFieldProps<T>) {
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
                    <Select
                        options={field.options || []}
                        value={controllerFieldState.field.value}
                        onValueChange={controllerFieldState.field.onChange}
                        className={errorMessage ? "border-destructive" : undefined}
                    />
                    {errorMessage && <p className="text-destructive mt-1 text-sm">{errorMessage}</p>}
                </div>
            )}
        />
    );
}
