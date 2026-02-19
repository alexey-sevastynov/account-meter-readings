import { Control, Controller, FieldValues } from "react-hook-form";
import { ResourceField } from "@/types/resource-field";
import { MrDatePicker } from "@/components/ui/date-picker/DatePicker";

interface MrResourceDateFieldProps<T extends FieldValues> {
    field: ResourceField<T>;
    control: Control<T>;
}

export function MrResourceDateField<T extends FieldValues>({ field, control }: MrResourceDateFieldProps<T>) {
    return (
        <Controller
            name={field.name}
            control={control}
            render={(controllerFieldState) => (
                <MrDatePicker
                    label={field.label}
                    value={controllerFieldState.field.value}
                    onChange={controllerFieldState.field.onChange}
                />
            )}
        />
    );
}
