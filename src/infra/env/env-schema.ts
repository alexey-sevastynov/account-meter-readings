import { z } from "zod";

export const runtimeEnvSchema = {
    NEXT_PUBLIC_API_URL: process.env["NEXT_PUBLIC_API_URL"],
};

export const clientEnvSchema = z.object({
    NEXT_PUBLIC_API_URL: z.string().url(),
});
