"use client";

import { useEffect } from "react";
import { MrTaskTable } from "@/components/coffee-shop/task-table/TaskTable";
import { useAppDispatch } from "@/hooks/use-app-dispatch";
import { useAppSelector } from "@/hooks/use-app-selector";
import { getAllTasks } from "@/features/task/thunks";
import { getAllEmployees } from "@/features/coffee-shop/employee/employee-thunks";

export function CoffeeShop() {
    const dispatch = useAppDispatch();
    const tasks = useAppSelector((state) => state.task.data);
    const isLoadingTasks = useAppSelector((state) => state.task.loading);

    useEffect(() => {
        dispatch(getAllTasks());
        dispatch(getAllEmployees());
    }, [dispatch]);

    return (
        <div className="p-0">
            <MrTaskTable data={tasks ?? []} isLoading={isLoadingTasks} />
        </div>
    );
}
