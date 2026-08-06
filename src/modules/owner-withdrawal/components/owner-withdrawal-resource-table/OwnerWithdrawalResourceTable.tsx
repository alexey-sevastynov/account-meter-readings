"use client";

import { OwnerWithdrawal } from "@/modules/owner-withdrawal/types/owner-withdrawal";
import { createOwnerWithdrawalActionsColumn } from "@/modules/owner-withdrawal/configs/owner-withdrawal-actions";
import { ownerWithdrawalColumns } from "@/modules/owner-withdrawal/configs/owner-withdrawal-columns";
import { useAppDispatch } from "@/shared/lib/redux/hooks/use-app-dispatch";
import { ownerWithdrawalFormFields } from "@/modules/owner-withdrawal/configs/owner-withdrawal-form-fields";
import { ResourceTable } from "@/shared/ui/resource-table/ResourceTable";
import {
    createOwnerWithdrawal,
    deleteOwnerWithdrawal,
    getAllOwnerWithdrawals,
    updateOwnerWithdrawal,
} from "@/modules/owner-withdrawal/model/owner-withdrawal-thunks";
import { getTodayDate } from "@/shared/utils/date";
import { useEffect } from "react";
import { useAppSelector } from "@/shared/lib/redux/hooks/use-app-selector";

const defaultOwnerWithdrawalValues: Partial<OwnerWithdrawal> = {
    withdrawalDate: getTodayDate(),
} as const;

export function OwnerWithdrawalResourceTable() {
    const dispatch = useAppDispatch();
    const withdrawals = useAppSelector((state) => state.ownerWithdrawal.data);
    const isLoadingWithdrawals = useAppSelector((state) => state.ownerWithdrawal.loading);

    useEffect(() => {
        dispatch(getAllOwnerWithdrawals());
    }, [dispatch]);

    return (
        <ResourceTable<OwnerWithdrawal>
            title="Виведення коштів власником"
            data={withdrawals}
            isLoading={isLoadingWithdrawals}
            columns={ownerWithdrawalColumns}
            formFields={ownerWithdrawalFormFields}
            createActionsColumn={createOwnerWithdrawalActionsColumn}
            addButtonLabel="Додати виведення"
            createTitle="Створити виведення коштів"
            editTitle="Редагувати виведення коштів"
            deleteConfirmDescription="Ви дійсно хочете видалити це виведення коштів?"
            defaultValues={defaultOwnerWithdrawalValues}
            onCreate={async (withdrawal) => {
                await dispatch(createOwnerWithdrawal(withdrawal)).unwrap();
                await dispatch(getAllOwnerWithdrawals());
            }}
            onUpdate={async (withdrawal) => {
                await dispatch(updateOwnerWithdrawal(withdrawal)).unwrap();
                await dispatch(getAllOwnerWithdrawals());
            }}
            onDelete={async (id) => {
                await dispatch(deleteOwnerWithdrawal(id)).unwrap();
            }}
            exportConfig={{
                fileName: "owner-withdrawals",
                sheetName: "Виведення коштів власником",
            }}
        />
    );
}
