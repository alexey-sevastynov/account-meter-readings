import { ResourceFieldType, resourceFieldTypes } from "@/enums/ui/resource-field-type";

export function isNumberFieldType(type: ResourceFieldType) {
    return type === resourceFieldTypes.number;
}
