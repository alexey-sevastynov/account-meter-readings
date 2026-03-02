import { useEffect, useMemo } from "react";
import { dailyReportFormFields } from "@/modules/daily-report/configs/daily-report-form-fields";
import { DailyReport } from "@/modules/daily-report/types/daily-report";
import { getAllEmployees } from "@/modules/employee/model/employee-thunks";
import { useAppDispatch } from "@/shared/lib/redux/hooks/use-app-dispatch";
import { useAppSelector } from "@/shared/lib/redux/hooks/use-app-selector";
import { ResourceField } from "@/shared/types/resource-field";

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
