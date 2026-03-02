import { isString } from "@/shared/utils/guards";
import { parseJSON, stringifyJSON } from "@/shared/utils/json";

export function getLocalStorageItem<T = string>(key: string) {
    const item = localStorage.getItem(key);

    if (isString(item)) return item as T;

    return item ? parseJSON<T>(item) : null;
}

export function setLocalStorageItem<T = string>(key: string, value: T) {
    const item = isString(value) ? value : stringifyJSON(value);

    localStorage.setItem(key, item);
}
