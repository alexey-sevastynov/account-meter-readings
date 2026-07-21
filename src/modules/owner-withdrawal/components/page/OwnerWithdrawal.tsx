"use client";

import { useEffect } from "react";
import { useAppSelector } from "@/shared/lib/redux/hooks/use-app-selector";
import { useAppDispatch } from "@/shared/lib/redux/hooks/use-app-dispatch";
import { OwnerWithdrawalTable } from "@/modules/owner-withdrawal/components/owner-withdrawal-table/OwnerWithdrawalTable";
import { getAllOwnerWithdrawals } from "@/modules/owner-withdrawal/model/owner-withdrawal-thunks";

export function OwnerWithdrawal() {
    const dispatch = useAppDispatch();

    const withdrawals = useAppSelector((state) => state.ownerWithdrawal.data);
    const isLoadingWithdrawals = useAppSelector((state) => state.ownerWithdrawal.loading);

    useEffect(() => {
        dispatch(getAllOwnerWithdrawals());
    }, [dispatch]);

    return (
        <div className="p-0">
            <OwnerWithdrawalTable data={withdrawals} isLoading={isLoadingWithdrawals} />
        </div>
    );
}
