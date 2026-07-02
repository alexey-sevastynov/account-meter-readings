import { ComponentProp } from "@/shared/types/ui/documentation";

export const componentPropLabels: Record<keyof ComponentProp, string> = {
    name: "Назва",
    type: "Тип",
    description: "Опис",
    defaultValue: "За замовчуванням",
    required: "Обов'язковий",
} as const;
