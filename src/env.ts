// eslint-disable-next-line import/no-unresolved
import { createEnv } from "@t3-oss/env-nextjs";
import { clientEnvSchema, runtimeEnvSchema } from "@/infra/env/env-schema";

export const env = createEnv({
    client: clientEnvSchema.shape,
    experimental__runtimeEnv: runtimeEnvSchema,
});
