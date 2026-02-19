export function createEnumOptions<T extends Record<string, string>, L extends Record<T[keyof T], string>>(
    enumObject: T,
    labels: L,
) {
    const enumOptions = Object.values(enumObject).map((value) => ({
        value: value as T[keyof T],
        label: labels[value as T[keyof T]],
    }));

    return enumOptions;
}
