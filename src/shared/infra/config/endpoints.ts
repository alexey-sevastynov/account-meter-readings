import { getStringEnv } from "@/shared/infra/env/env-functions";
import { envKeys } from "@/shared/infra/env/env-keys";

export const endpoints = {
    localhost: "http://localhost:3000",
    remoteApi: getStringEnv(envKeys.nextPublicApiUrl),
};
