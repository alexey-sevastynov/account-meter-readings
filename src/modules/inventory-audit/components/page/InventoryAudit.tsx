"use client";

import { useEffect } from "react";
import { useAppSelector } from "@/shared/lib/redux/hooks/use-app-selector";
import { useAppDispatch } from "@/shared/lib/redux/hooks/use-app-dispatch";
import { InventoryAuditTable } from "@/modules/inventory-audit/components/inventory-audit-table/InventoryAuditTable";
import { getAllInventoryAudits } from "@/modules/inventory-audit/model/inventory-audit-thunks";

export function InventoryAudit() {
    const dispatch = useAppDispatch();

    const audits = useAppSelector((state) => state.inventoryAudit.data);
    const isLoadingAudits = useAppSelector((state) => state.inventoryAudit.loading);

    useEffect(() => {
        dispatch(getAllInventoryAudits());
    }, [dispatch]);

    return (
        <div className="p-0">
            <InventoryAuditTable data={audits} isLoading={isLoadingAudits} />
        </div>
    );
}
