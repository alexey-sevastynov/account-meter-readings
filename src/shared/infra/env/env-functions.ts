import { errorMessages } from "@/shared/constants/error-message";
import { env } from "@/env";
import { EnvKey } from "@/shared/infra/env/env-keys";

export function getStringEnv(key: EnvKey) {
    const value = env[key];

    if (!value) throw new Error(errorMessages.missingEnvVar.replace("{0}", key));

    return value;
}
