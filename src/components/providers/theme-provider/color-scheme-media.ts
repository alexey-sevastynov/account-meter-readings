"use client";

import { isBrowser } from "@/lib/environments";

export function getDarkSchemeMedia() {
    if (!isBrowser()) return null;

    return window.matchMedia("(prefers-color-scheme: dark)");
}

export function getLightSchemeMedia() {
    if (!isBrowser()) return null;

    return window.matchMedia("(prefers-color-scheme: light)");
}
