"use client";

import { useEffect } from "react";
import { MrTaskTable } from "@/components/coffee-shop/task-table/TaskTable";
import { useAppDispatch } from "@/hooks/use-app-dispatch";
import { useAppSelector } from "@/hooks/use-app-selector";
import { getAllTasks } from "@/features/task/thunks";
import { MrEmployeeTable } from "@/components/coffee-shop/employee-table/EmployeeTable";
import { getAllEmployees } from "@/features/coffee-shop/employee/employee-thunks";

export function CoffeeShop() {
    const dispatch = useAppDispatch();
    const tasks = useAppSelector((state) => state.task.data);
    const employees = useAppSelector((state) => state.employee.data);
    const isLoadingEmployees = useAppSelector((state) => state.employee.loading);
    const isLoadingTasks = useAppSelector((state) => state.task.loading);

    useEffect(() => {
        dispatch(getAllTasks());
        dispatch(getAllEmployees());
    }, [dispatch]);

    return (
        <div className="mx-auto max-w-7xl p-8">
            <MrEmployeeTable data={employees} isLoading={isLoadingEmployees} />
            <MrTaskTable data={tasks ?? []} isLoading={isLoadingTasks} />
        </div>
    );
}
