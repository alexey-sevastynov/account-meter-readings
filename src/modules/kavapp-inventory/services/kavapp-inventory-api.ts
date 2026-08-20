import { apiClient } from "@/shared/lib/axios";
import { apiEndpointNames } from "@/shared/constants/api-endpoint-name";
import {
    KavappInventoryResponse,
    KavappInventorySnapshot,
} from "@/modules/kavapp-inventory/types/kavapp-inventory-response";
import { KavappCatalogItem } from "@/modules/kavapp-inventory/types/kavapp-catalog-item";

export async function fetchKavappCatalog() {
    const { data } = await apiClient.get<KavappCatalogItem[]>(apiEndpointNames.kavappCatalog);

    return data;
}

export async function fetchKavappInventory(pointId?: string) {
    const params = pointId ? { params: { pointId } } : undefined;
    const { data } = await apiClient.get<KavappInventoryResponse>(apiEndpointNames.kavappInventory, params);

    return data;
}

export async function syncKavappInventory(pointId?: string, testAlert?: boolean) {
    const params: Record<string, string> = {};

    if (pointId) params.pointId = pointId;

    if (testAlert) params.testAlert = "true";

    const { data } = await apiClient.post<unknown>(apiEndpointNames.kavappSync, null, { params });

    return data;
}

export async function fetchLatestKavappSnapshot() {
    const { data } = await apiClient.get<KavappInventorySnapshot>(apiEndpointNames.kavappSnapshotsLatest);

    return data;
}
