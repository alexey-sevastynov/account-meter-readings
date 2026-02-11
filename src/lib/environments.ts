export function isBrowser() {
    return typeof window !== "undefined";
}

export function isDev() {
    return process.env.NODE_ENV === "development";
}
