import { Employee } from "@/models/employee";

export const employeeLabels: Record<keyof Employee, string> = {
    _id: "Id",
    name: "Імʼя",
    position: "Посада",
    fixedSalary: "Фіксована зарплата",
    isActive: "Активний",
    phone: "Телефон",
    birthDate: "Дата народження",
    employmentStartDate: "Дата початку роботи",
    employmentEndDate: "Дата завершення роботи",
    createdAt: "Створено",
    updatedAt: "Оновлено",
} as const;
