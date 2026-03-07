import { Control, Controller, FieldValues, FieldErrors } from "react-hook-form";
import { Checkbox } from "@/shared/ui/checkbox/Checkbox";
import { ResourceField } from "@/shared/types/resource-field";

interface ResourceCheckboxFieldProps<T extends FieldValues> {
    field: ResourceField<T>;
    control: Control<T>;
    errors: FieldErrors<T>;
}

export function ResourceCheckboxField<T extends FieldValues>({
    field,
    control,
    errors,
}: ResourceCheckboxFieldProps<T>) {
    const errorMessage = errors[field.name]?.message as string;

    return (
        <div>
            <Controller
                name={field.name}
                control={control}
                rules={{
                    required: field.required ? `${field.label} обов'язкове поле` : undefined,
                }}
                render={({ field: controllerFieldState }) => (
                    <Checkbox
                        label={field.label}
                        checked={!!controllerFieldState.value}
                        onCheckedChange={controllerFieldState.onChange}
                        className={errorMessage ? "border-destructive" : undefined}
                    />
                )}
            />
            {errorMessage && <p className="text-destructive mt-1 text-sm">{errorMessage}</p>}
        </div>
    );
}
