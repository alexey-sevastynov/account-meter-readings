import { Control, Controller, FieldValues } from "react-hook-form";
import { MrCheckbox } from "@/components/ui/checkbox/Checkbox";
import { ResourceField } from "@/types/resource-field";

interface MrResourceCheckboxFieldProps<T extends FieldValues> {
    field: ResourceField<T>;
    control: Control<T>;
}

export function MrResourceCheckboxField<T extends FieldValues>({
    field,
    control,
}: MrResourceCheckboxFieldProps<T>) {
    return (
        <Controller
            name={field.name}
            control={control}
            render={(controllerFieldState) => (
                <MrCheckbox
                    label={field.label}
                    checked={!!controllerFieldState.field.value}
                    onCheckedChange={controllerFieldState.field.onChange}
                />
            )}
        />
    );
}
