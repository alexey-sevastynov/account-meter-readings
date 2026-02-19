import { Control, Controller, FieldValues, FieldErrors } from "react-hook-form";
import { MrCheckbox } from "@/components/ui/checkbox/Checkbox";
import { ResourceField } from "@/types/resource-field";

interface MrResourceCheckboxFieldProps<T extends FieldValues> {
    field: ResourceField<T>;
    control: Control<T>;
    errors: FieldErrors<T>;
}

export function MrResourceCheckboxField<T extends FieldValues>({
    field,
    control,
    errors,
}: MrResourceCheckboxFieldProps<T>) {
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
                    <MrCheckbox
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
