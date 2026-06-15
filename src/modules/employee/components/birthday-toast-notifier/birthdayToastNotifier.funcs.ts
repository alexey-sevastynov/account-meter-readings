import { Employee } from "@/modules/employee/types/employee";

export function isBirthdayOnDate(employee: Employee, date: Date) {
    if (!employee.birthDate) return false;

    const birthDate = parseBirthDate(employee.birthDate);

    if (Number.isNaN(birthDate.getTime())) return false;

    return birthDate.getDate() === date.getDate() && birthDate.getMonth() === date.getMonth();
}

export function getBirthdayDescription(employee: Employee, today: Date) {
    const age = getEmployeeAge(employee, today);

    if (!age) return employee.name;

    return `${employee.name} (${age})`;
}

function getEmployeeAge(employee: Employee, today: Date) {
    if (!employee.birthDate) return null;

    const birthDate = parseBirthDate(employee.birthDate);

    if (Number.isNaN(birthDate.getTime())) return null;

    return today.getFullYear() - birthDate.getFullYear();
}

function parseBirthDate(birthDate: string) {
    const birthDateMatch = birthDate.match(/^(\d{4})-(\d{2})-(\d{2})/);

    if (!birthDateMatch) return new Date(birthDate);

    const [, year, month, day] = birthDateMatch;

    return new Date(Number(year), Number(month) - 1, Number(day));
}
