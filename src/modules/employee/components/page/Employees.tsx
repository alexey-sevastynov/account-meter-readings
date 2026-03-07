"use client";

import { useEffect } from "react";
import { useAppDispatch } from "@/shared/lib/redux/hooks/use-app-dispatch";
import { useAppSelector } from "@/shared/lib/redux/hooks/use-app-selector";
import { EmployeeTable } from "@/modules/employee/components/employee-table/EmployeeTable";
import { getAllEmployees } from "@/modules/employee/model/employee-thunks";

export function Employees() {
    const dispatch = useAppDispatch();
    const employees = useAppSelector((state) => state.employee.data);
    const isLoadingEmployees = useAppSelector((state) => state.employee.loading);

    useEffect(() => {
        dispatch(getAllEmployees());
    }, [dispatch]);

    return (
        <div className="p-0">
            <EmployeeTable data={employees} isLoading={isLoadingEmployees} />
        </div>
    );
}
