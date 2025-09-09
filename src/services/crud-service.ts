import { apiClient } from "@/lib/axios";
import { ApiEndpointName } from "@/enums/services/api-endpoint-name";

export async function getAll<T>(endpoint: ApiEndpointName) {
    const { data } = await apiClient.get<T[]>(endpoint);

    return data;
}

export async function createOne<T>(endpoint: ApiEndpointName, body: T) {
    const { data } = await apiClient.post<T>(endpoint, body);

    return data;
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
    const { data } = await apiClient.patch<T[]>(`${endpoint}/${id}`, body);

    return data;
}
