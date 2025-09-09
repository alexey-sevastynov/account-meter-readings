export const envKeys = {
    nextPublicApiUrl: "NEXT_PUBLIC_API_URL",
} as const;

export type EnvKey = (typeof envKeys)[keyof typeof envKeys];
