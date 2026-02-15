"use client";

import { useEffect } from "react";
import { useAppDispatch } from "@/hooks/use-app-dispatch";
import { useAppSelector } from "@/hooks/use-app-selector";
import { MrEmployeeTable } from "@/components/coffee-shop/employee-table/EmployeeTable";
import { getAllEmployees } from "@/features/coffee-shop/employee/employee-thunks";

export function MrEmployees() {
    const dispatch = useAppDispatch();
    const employees = useAppSelector((state) => state.employee.data);
    const isLoadingEmployees = useAppSelector((state) => state.employee.loading);

    useEffect(() => {
        dispatch(getAllEmployees());
    }, [dispatch]);

    return (
        <div className="p-0">
            <MrEmployeeTable data={employees} isLoading={isLoadingEmployees} />
        </div>
    );
}
