import { ComponentDocumentation } from "@/shared/types/ui/documentation";

export function getTotalDocumentationExamplesCount(
    componentDocumentation: readonly ComponentDocumentation[],
) {
    return componentDocumentation
        .flatMap((component) => component.sections)
        .flatMap((section) => section.examples).length;
}
