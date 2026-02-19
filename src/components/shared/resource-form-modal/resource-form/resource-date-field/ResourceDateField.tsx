import { Control, Controller, FieldValues, FieldErrors } from "react-hook-form";
import { ResourceField } from "@/types/resource-field";
import { MrDatePicker } from "@/components/ui/date-picker/DatePicker";

interface MrResourceDateFieldProps<T extends FieldValues> {
    field: ResourceField<T>;
    control: Control<T>;
    errors: FieldErrors<T>;
}

export function MrResourceDateField<T extends FieldValues>({
    field,
    control,
    errors,
}: MrResourceDateFieldProps<T>) {
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
                    <MrDatePicker
                        label={field.label}
                        value={controllerFieldState.field.value}
                        onChange={controllerFieldState.field.onChange}
                        className={errorMessage ? "border-destructive" : undefined}
                    />
                    {errorMessage && <p className="text-destructive mt-1 text-sm">{errorMessage}</p>}
                </div>
            )}
        />
    );
}
