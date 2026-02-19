import { FieldValues, Path } from "react-hook-form";
import { ResourceFieldType } from "@/enums/ui/resource-field-type";
import { MrOption } from "@/types/ui/option";

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
