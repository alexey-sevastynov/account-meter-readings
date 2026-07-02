import {
    ComponentDocumentation,
    DocumentationSection,
    DocumentationExample,
} from "@/shared/types/ui/documentation";

function isExampleMatchingQuery(
    example: DocumentationExample,
    componentName: string,
    sectionTitle: string,
    sectionDescription: string,
    searchQuery: string,
) {
    const normalizedQuery = searchQuery.trim().toLowerCase();

    if (!normalizedQuery) return true;

    const searchableFields = [
        componentName,
        sectionTitle,
        sectionDescription,
        example.title,
        example.description,
        example.tags.join(" "),
        example.code,
    ];

    return searchableFields.some((field) => field?.toLowerCase().includes(normalizedQuery));
}

function filterSectionExamples(
    section: DocumentationSection,
    componentName: string,
    searchQuery: string,
): DocumentationSection {
    const filteredExamples = section.examples.filter((example) =>
        isExampleMatchingQuery(example, componentName, section.title, section.description, searchQuery),
    );

    return {
        ...section,
        examples: filteredExamples,
    };
}

export function getFilteredDocumentationSections(
    componentDocumentation: ComponentDocumentation,
    searchQuery: string,
) {
    if (!searchQuery.trim()) {
        return componentDocumentation.sections;
    }

    return componentDocumentation.sections
        .map((section) => filterSectionExamples(section, componentDocumentation.name, searchQuery))
        .filter((section) => section.examples.length > 0);
}
