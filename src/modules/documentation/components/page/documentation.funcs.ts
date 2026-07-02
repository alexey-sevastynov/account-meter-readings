import { ComponentDocumentation } from "@/shared/types/ui/documentation";

export function getInitialDocumentationComponentId(components: readonly ComponentDocumentation[]) {
    if (!components.length) {
        return "";
    }

    return components[0].id;
}

export function getActiveDocumentationComponent(
    components: readonly ComponentDocumentation[],
    activeId: string,
) {
    return components.find((component) => component.id === activeId);
}
