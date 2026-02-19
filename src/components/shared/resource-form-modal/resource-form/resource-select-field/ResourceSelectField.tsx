import { Control, Controller, FieldValues } from "react-hook-form";
import { MrSelect } from "@/components/ui/select/Select";
import { ResourceField } from "@/types/resource-field";

interface MrResourceSelectFieldProps<T extends FieldValues> {
    field: ResourceField<T>;
    control: Control<T>;
}

export function MrResourceSelectField<T extends FieldValues>({
    field,
    control,
}: MrResourceSelectFieldProps<T>) {
    return (
        <Controller
            name={field.name}
            control={control}
            render={(controllerFieldState) => (
                <MrSelect
                    options={field.options || []}
                    value={controllerFieldState.field.value}
                    onValueChange={controllerFieldState.field.onChange}
                />
            )}
        />
    );
}
