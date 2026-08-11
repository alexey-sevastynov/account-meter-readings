import { EmployeeStat } from "@/modules/statistics/types/employee-stats";
import { iconNames } from "@/shared/ui/icon/icon-name";
import { TeamStatisticsSortMetric } from "@/modules/statistics/components/page/statistics-dashboard/sections/team-statistics-section/types";
import { employeeStatProps } from "@/modules/statistics/components/page/statistics-dashboard/sections/team-statistics-section/cosntants";
import { typeNames } from "@/shared/enums/type-name";

type NumericKey<T> = {
    [K in keyof T]: T[K] extends number ? K : never;
}[keyof T];

function isNumericKey<T>(object: T, key: PropertyKey): key is NumericKey<T> {
    return typeof object[key as keyof T] === typeNames.number;
}

export function getSortedEmployees(employees: EmployeeStat[], activeSortMetric: TeamStatisticsSortMetric) {
    if (activeSortMetric === "default") return [...employees];

    return [...employees].sort((firstEmployee, secondEmployee) => {
        const firstValue = isNumericKey(firstEmployee, activeSortMetric)
            ? firstEmployee[activeSortMetric]
            : 0;

        const secondValue = isNumericKey(secondEmployee, activeSortMetric)
            ? secondEmployee[activeSortMetric]
            : 0;

        switch (activeSortMetric) {
            case employeeStatProps.averageRevenuePerShift:
            case employeeStatProps.averageNetProfit:
                return secondValue - firstValue;
            case employeeStatProps.averageCostPercent:
            case employeeStatProps.averageWriteOffPercent:
            case employeeStatProps.averageSalaryPercent:
                return firstValue - secondValue;
            default:
                return 0;
        }
    });
}

export function checkIsTopPerformer(cardIndex: number, activeSortMetric: TeamStatisticsSortMetric) {
    const isFirstCard = cardIndex === 0;
    const isSortingActive = activeSortMetric !== "default";

    return isFirstCard && isSortingActive;
}

export function getCardHighlightStyles(isTopPerformer: boolean) {
    if (!isTopPerformer) {
        return "bg-card";
    }

    return [
        "border-amber-400 dark:border-amber-500/30",
        "bg-amber-50/40 dark:bg-amber-950/20",
        "shadow-md shadow-amber-100/40 dark:shadow-none",
    ].join(" ");
}

export function getCardIconName(isTopPerformer: boolean) {
    return isTopPerformer ? iconNames.crown : iconNames.users;
}

export function hasMultipleEmployees(employees: EmployeeStat[]) {
    return employees.length > 1;
}
