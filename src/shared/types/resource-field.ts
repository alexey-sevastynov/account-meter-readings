import { FieldValues, Path } from "react-hook-form";
import { ResourceFieldType } from "@/shared/ui/form/resource-field-type";
import { MrOption } from "@/shared/types/ui/option";

export interface ResourceField<T extends FieldValues> {
    name: Path<T>;
    label: string;
    type: ResourceFieldType;
    required?: boolean;
    disabled?: boolean;
    readonly?: boolean;
    placeholder?: string;
    options?: MrOption[];
}
