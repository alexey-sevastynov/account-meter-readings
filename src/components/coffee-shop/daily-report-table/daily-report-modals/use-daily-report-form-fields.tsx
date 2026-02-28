import { dailyReportFormFields } from "@/features/coffee-shop/daily-report/config/daily-report-form-fields";
import { getAllEmployees } from "@/features/coffee-shop/employee/employee-thunks";
import { useAppDispatch } from "@/hooks/use-app-dispatch";
import { useAppSelector } from "@/hooks/use-app-selector";
import { DailyReport } from "@/models/daily-report";
import { ResourceField } from "@/types/resource-field";
import { useEffect, useMemo } from "react";

export function useDailyReportFormFields() {
    const dispatch = useAppDispatch();
    const employees = useAppSelector((state) => state.employee.data);

    useEffect(() => {
        dispatch(getAllEmployees());
    }, [dispatch]);

    const employeeOptions = useMemo(() => {
        return employees.map((e) => ({ value: e._id, label: e.name }));
    }, [employees]);

    const fieldsWithDynamicOptions: ResourceField<DailyReport>[] = useMemo(() => {
        return dailyReportFormFields.map((field) => {
            if (field.name === "employee") {
                return { ...field, options: employeeOptions };
            }

            return field;
        });
    }, [employeeOptions]);

    return fieldsWithDynamicOptions;
}
