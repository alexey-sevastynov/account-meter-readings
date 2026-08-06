"use client";

import { Employee } from "@/modules/employee/types/employee";
import { createEmployeeActionsColumn } from "@/modules/employee/configs/employee-actions";
import { employeeColumns } from "@/modules/employee/configs/employee-columns";
import { useAppDispatch } from "@/shared/lib/redux/hooks/use-app-dispatch";
import { employeeFormFields } from "@/modules/employee/configs/employee-form-fields";
import { getTodayDate } from "@/shared/utils/date";
import { ResourceTable } from "@/shared/ui/resource-table/ResourceTable";
import {
    createEmployee,
    deleteEmployee,
    getAllEmployees,
    updateEmployee,
} from "@/modules/employee/model/employee-thunks";
import { useEffect } from "react";
import { useAppSelector } from "@/shared/lib/redux/hooks/use-app-selector";

export function EmployeeResourceTable() {
    const dispatch = useAppDispatch();
    const employees = useAppSelector((state) => state.employee.data);
    const isLoadingEmployees = useAppSelector((state) => state.employee.loading);

    useEffect(() => {
        dispatch(getAllEmployees());
    }, [dispatch]);

    return (
        <ResourceTable<Employee>
            title="Список працівників"
            data={employees}
            isLoading={isLoadingEmployees}
            columns={employeeColumns}
            formFields={employeeFormFields}
            createActionsColumn={createEmployeeActionsColumn}
            defaultValues={{ employmentStartDate: getTodayDate() }}
            addButtonLabel="Додати працівника"
            createTitle="Створити працівника"
            editTitle="Редагувати працівника"
            deleteConfirmDescription="Ви дійсно хочете видалити цього співробітника?"
            onCreate={async (employee) => {
                await dispatch(createEmployee(employee)).unwrap();
                await dispatch(getAllEmployees());
            }}
            onUpdate={async (employee) => {
                await dispatch(updateEmployee(employee)).unwrap();
                await dispatch(getAllEmployees());
            }}
            onDelete={async (id) => {
                await dispatch(deleteEmployee(id)).unwrap();
            }}
            exportConfig={{
                fileName: "employees",
                sheetName: "Працівники",
            }}
            stickyHeader={false}
        />
    );
}
