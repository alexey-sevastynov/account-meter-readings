import { z } from "zod";

export const runtimeEnvSchema = {
    NEXT_PUBLIC_API_URL: process.env["NEXT_PUBLIC_API_URL"],
    NEXT_PUBLIC_API_MODE: process.env["NEXT_PUBLIC_API_MODE"],
};

export const clientEnvSchema = z.object({
    NEXT_PUBLIC_API_URL: z.string().url(),
    NEXT_PUBLIC_API_MODE: z.enum(["local", "remote"]),
});
