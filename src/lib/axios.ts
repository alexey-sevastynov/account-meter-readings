import axios from "axios";
import { getStringEnv } from "@/infra/env/env-functions";
import { envKeys } from "@/infra/env/env-keys";

export const apiClient = axios.create({
    baseURL: getApiBaseUrl(),
});

function getApiBaseUrl() {
    const apiUrl = getStringEnv(envKeys.nextPublicApiUrl);

    return apiUrl;
}
