"use client";

import { useEffect } from "react";
import { MrTaskTable } from "@/components/coffee-shop/task-table/TaskTable";
import { useAppDispatch } from "@/hooks/use-app-dispatch";
import { useAppSelector } from "@/hooks/use-app-selector";
import { getAllTasks } from "@/features/task/thunks";

export function CoffeeShop() {
    const dispatch = useAppDispatch();
    const tasks = useAppSelector((state) => state.task.data);
    const isLoading = useAppSelector((state) => state.task.loading);

    useEffect(() => {
        dispatch(getAllTasks());
    }, []);

    return (
        <div className="mx-auto max-w-7xl p-8">
            <MrTaskTable data={tasks ?? []} isLoading={isLoading} />
        </div>
    );
}
