"use client";

import { isBrowser } from "@/shared/lib/environments";

export function getDarkSchemeMedia() {
    if (!isBrowser()) return null;

    return window.matchMedia("(prefers-color-scheme: dark)");
}

export function getLightSchemeMedia() {
    if (!isBrowser()) return null;

    return window.matchMedia("(prefers-color-scheme: light)");
}
