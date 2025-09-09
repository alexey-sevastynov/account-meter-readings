import { errorMessage } from "@/constants/error-message";
import { env } from "@/env";
import { EnvKey } from "@/infra/env/env-keys";

export function getStringEnv(key: EnvKey) {
    const value = env[key];

    if (!value) throw new Error(errorMessage.missingEnvVar.replace("{0}", key));

    return value;
}
