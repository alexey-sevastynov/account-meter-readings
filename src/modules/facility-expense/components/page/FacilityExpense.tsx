"use client";

import { useEffect } from "react";
import { useAppSelector } from "@/shared/lib/redux/hooks/use-app-selector";
import { useAppDispatch } from "@/shared/lib/redux/hooks/use-app-dispatch";
import { FacilityExpenseTable } from "@/modules/facility-expense/components/facility-expense-table/FacilityExpenseTable";
import { getAllFacilityExpenses } from "@/modules/facility-expense/model/facility-expense-thunks";

export function FacilityExpense() {
    const dispatch = useAppDispatch();

    const expenses = useAppSelector((state) => state.facilityExpense.data);
    const isLoadingExpenses = useAppSelector((state) => state.facilityExpense.loading);

    useEffect(() => {
        dispatch(getAllFacilityExpenses());
    }, [dispatch]);

    console.log(expenses);

    return (
        <div className="p-0">
            <FacilityExpenseTable data={expenses} isLoading={isLoadingExpenses} />
        </div>
    );
}
