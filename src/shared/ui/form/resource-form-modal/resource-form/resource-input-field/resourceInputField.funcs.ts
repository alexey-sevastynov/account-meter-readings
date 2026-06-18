import { ResourceFieldType, resourceFieldTypes } from "@/shared/enums/resource-field-type";

export function parseInputFieldValue(type: ResourceFieldType, value: string) {
    if (!isNumberFieldType(type)) return value;

    return value === "" ? undefined : Number(value);
}

function isNumberFieldType(type: ResourceFieldType) {
    return type === resourceFieldTypes.number;
}
