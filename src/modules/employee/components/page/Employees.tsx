"use client";

import { useEffect } from "react";
import { useAppDispatch } from "@/shared/lib/redux/hooks/use-app-dispatch";
import { useAppSelector } from "@/shared/lib/redux/hooks/use-app-selector";
import { MrEmployeeTable } from "@/modules/employee/components/employee-table/EmployeeTable";
import { getAllEmployees } from "@/modules/employee/model/employee-thunks";

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
