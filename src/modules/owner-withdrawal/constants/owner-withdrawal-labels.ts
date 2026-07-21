import { OwnerWithdrawal } from "@/modules/owner-withdrawal/types/owner-withdrawal";

export const ownerWithdrawalLabels: Record<keyof OwnerWithdrawal, string> = {
    _id: "Id",
    withdrawalDate: "Дата виведення",
    amount: "Сума",
    description: "Опис",
    createdAt: "Створено",
    updatedAt: "Оновлено",
} as const;
