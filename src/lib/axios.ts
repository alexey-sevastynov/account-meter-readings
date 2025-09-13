import axios from "axios";
import { getStringEnv } from "@/infra/env/env-functions";
import { envKeys } from "@/infra/env/env-keys";
import { endpoints } from "@/infra/config/endpoints";

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
