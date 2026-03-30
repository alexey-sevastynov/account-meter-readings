import { ResourceFieldType, resourceFieldTypes } from "@/shared/enums/resource-field-type";

export function isNumberFieldType(type: ResourceFieldType) {
    return type === resourceFieldTypes.number;
}
