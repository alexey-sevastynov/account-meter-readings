export const envKeys = {
    nextPublicApiUrl: "NEXT_PUBLIC_API_URL",
    nextPublicApiMode: "NEXT_PUBLIC_API_MODE",
} as const;

export type EnvKey = (typeof envKeys)[keyof typeof envKeys];
