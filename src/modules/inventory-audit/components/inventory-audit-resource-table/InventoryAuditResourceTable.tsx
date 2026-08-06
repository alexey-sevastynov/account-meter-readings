"use client";

import { InventoryAudit } from "@/modules/inventory-audit/types/inventory-audit";
import { createInventoryAuditActionsColumn } from "@/modules/inventory-audit/configs/inventory-audit-actions";
import { inventoryAuditColumns } from "@/modules/inventory-audit/configs/inventory-audit-columns";
import { useAppDispatch } from "@/shared/lib/redux/hooks/use-app-dispatch";
import { inventoryAuditFormFields } from "@/modules/inventory-audit/configs/inventory-audit-form-fields";
import { ResourceTable } from "@/shared/ui/resource-table/ResourceTable";
import {
    createInventoryAudit,
    deleteInventoryAudit,
    getAllInventoryAudits,
    updateInventoryAudit,
} from "@/modules/inventory-audit/model/inventory-audit-thunks";
import { useEffect } from "react";
import { useAppSelector } from "@/shared/lib/redux/hooks/use-app-selector";

export function InventoryAuditResourceTable() {
    const dispatch = useAppDispatch();

    const audits = useAppSelector((state) => state.inventoryAudit.data);
    const isLoadingAudits = useAppSelector((state) => state.inventoryAudit.loading);

    useEffect(() => {
        dispatch(getAllInventoryAudits());
    }, [dispatch]);

    return (
        <ResourceTable<InventoryAudit>
            title="Аудит інвентаризації"
            data={audits}
            isLoading={isLoadingAudits}
            columns={inventoryAuditColumns}
            formFields={inventoryAuditFormFields}
            createActionsColumn={createInventoryAuditActionsColumn}
            addButtonLabel="Додати аудит"
            createTitle="Створити аудит інвентаризації"
            editTitle="Редагувати аудит інвентаризації"
            deleteConfirmDescription="Ви дійсно хочете видалити цей аудит інвентаризації?"
            stickyHeader={true}
            onCreate={async (audit) => {
                await dispatch(createInventoryAudit(audit)).unwrap();
                await dispatch(getAllInventoryAudits());
            }}
            onUpdate={async (audit) => {
                await dispatch(updateInventoryAudit(audit)).unwrap();
                await dispatch(getAllInventoryAudits());
            }}
            onDelete={async (id) => {
                await dispatch(deleteInventoryAudit(id)).unwrap();
            }}
            exportConfig={{
                fileName: "inventory-audits",
                sheetName: "Аудити інвентаризації",
            }}
        />
    );
}
