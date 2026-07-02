import { ReactNode } from "react";

export interface DocumentationExample {
    id: string;
    title: string;
    description: string;
    tags: readonly string[];
    code: string;
    preview: ReactNode;
    previewBackground?: string;
}

export interface DocumentationSection {
    id: string;
    title: string;
    description: string;
    componentPath: string;
    examples: readonly DocumentationExample[];
}

export interface ComponentProp {
    name: string;
    type: string;
    description: string;
    defaultValue?: string;
    required?: boolean;
}

export interface ComponentDocumentation {
    id: string;
    name: string;
    description: string;
    componentPath: string;
    prop: readonly ComponentProp[];
    sections: readonly DocumentationSection[];
}

export type ComponentPropsDocs<Props> = Record<keyof Props, Omit<ComponentProp, "name">>;
