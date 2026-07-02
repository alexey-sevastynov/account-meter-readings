import { nameOf } from "@/shared/utils/name-of";
import { ComponentProp } from "@/shared/types/ui/documentation";

export const componentPropProps: Record<keyof ComponentProp, string> = {
    name: nameOf<ComponentProp>("name"),
    type: nameOf<ComponentProp>("type"),
    description: nameOf<ComponentProp>("description"),
    defaultValue: nameOf<ComponentProp>("defaultValue"),
    required: nameOf<ComponentProp>("required"),
} as const;
