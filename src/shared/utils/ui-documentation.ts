import { ReactNode } from "react";
import { ComponentProp, ComponentPropsDocs, DocumentationExample } from "@/shared/types/ui/documentation";
import { stringifyJSON } from "@/shared/utils/json";

export function stringifyValue(value: unknown) {
    const hasValue = value !== undefined && value !== "" && value !== null;

    if (!hasValue) return "";

    return stringifyJSON(value);
}

export function createExample({
    id,
    title,
    description,
    tags,
    preview,
    code,
    previewBackground = "bg-background/50",
}: {
    id: string;
    title: string;
    description: string;
    tags: readonly string[];
    preview: ReactNode;
    code: string;
    previewBackground?: string;
}): DocumentationExample {
    return {
        id,
        title,
        description,
        tags,
        preview,
        code,
        previewBackground,
    };
}

export function getPropRows<Props>(config: ComponentPropsDocs<Required<Props>>): readonly ComponentProp[] {
    return Object.entries(config).map(([name, rest]) => ({
        name,
        ...(rest as Omit<ComponentProp, "name">),
    }));
}
