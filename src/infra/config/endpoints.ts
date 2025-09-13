import { getStringEnv } from "@/infra/env/env-functions";
import { envKeys } from "@/infra/env/env-keys";

export const endpoints = {
    localhost: "http://localhost:3000",
    remoteApi: getStringEnv(envKeys.nextPublicApiUrl),
};
