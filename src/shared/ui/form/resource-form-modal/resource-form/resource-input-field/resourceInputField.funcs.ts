import { ResourceFieldType, resourceFieldTypes } from "@/shared/ui/form/resource-field-type";

export function isNumberFieldType(type: ResourceFieldType) {
    return type === resourceFieldTypes.number;
}
