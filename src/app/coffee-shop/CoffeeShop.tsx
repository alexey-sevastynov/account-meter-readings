"use client";

import { useEffect } from "react";
import { TaskTable } from "@/modules/task/components/task-table/TaskTable";
import { useAppDispatch } from "@/shared/lib/redux/hooks/use-app-dispatch";
import { useAppSelector } from "@/shared/lib/redux/hooks/use-app-selector";
import { getAllTasks } from "@/modules/task/model/thunks";
import { getAllEmployees } from "@/modules/employee/model/employee-thunks";

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
            <TaskTable data={tasks ?? []} isLoading={isLoadingTasks} />
        </div>
    );
}
