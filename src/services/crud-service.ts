import { apiClient } from "@/lib/axios";
import { ApiEndpointName } from "@/enums/services/api-endpoint-name";

export async function getAll<T>(endpoint: ApiEndpointName) {
    const { data } = await apiClient.get<T[]>(endpoint);

    return data;
}

export async function createOne<TRequest, TResponse = TRequest>(endpoint: ApiEndpointName, body: TRequest) {
    const response = await apiClient.post(endpoint, body);

    return response.data as TResponse;
}

export async function getOne<T>(endpoint: ApiEndpointName, id: string) {
    const { data } = await apiClient.get<T>(`${endpoint}/${id}`);

    return data;
}

export async function deleteOne<T>(endpoint: ApiEndpointName, id: string) {
    const { data } = await apiClient.delete<T>(`${endpoint}/${id}`);

    return data;
}

export async function updateOne<T>(endpoint: ApiEndpointName, id: string, body: Partial<T>) {
    const { data } = await apiClient.patch<T>(`${endpoint}/${id}`, body);

    return data;
}
