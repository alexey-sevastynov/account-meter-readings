import axios from "axios";
import { getStringEnv } from "@/shared/infra/env/env-functions";
import { envKeys } from "@/shared/infra/env/env-keys";
import { endpoints } from "@/shared/infra/config/endpoints";

const apiModeKeys = {
    local: "local",
    remote: "remote",
} as const;

export const apiClient = axios.create({
    baseURL: getApiBaseUrl(),
    withCredentials: true,
});

function getApiBaseUrl() {
    const apiMode = getStringEnv(envKeys.nextPublicApiMode);

    if (apiMode === apiModeKeys.local) {
        return endpoints.localhost;
    }

    return endpoints.remoteApi;
}
