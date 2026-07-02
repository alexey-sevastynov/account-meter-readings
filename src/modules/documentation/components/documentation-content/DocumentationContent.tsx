import { useState, useMemo } from "react";
import { ComponentDocumentation } from "@/shared/types/ui/documentation";
import { getFilteredDocumentationSections } from "@/modules/documentation/components/documentation-content/documentationContent.funcs";
import { DocumentationOverviewSection } from "@/modules/documentation/components/documentation-content/documentation-overview-section/DocumentationOverviewSection";
import { DocumentationExamplesSection } from "@/modules/documentation/components/documentation-content/documentation-example-section/DocumentationExamplesSection";

interface DocumentationContentProps {
    searchQuery: string;
    activeDocumentationComponent: ComponentDocumentation;
}

export function DocumentationContent({
    searchQuery,
    activeDocumentationComponent,
}: DocumentationContentProps) {
    const [copiedId, setCopiedId] = useState<string>();

    const handleCopy = (text: string, id: string) => {
        navigator.clipboard.writeText(text);
        setCopiedId(id);
        setTimeout(() => setCopiedId(undefined), 2000);
    };

    const filteredSections = useMemo(() => {
        return getFilteredDocumentationSections(activeDocumentationComponent, searchQuery);
    }, [activeDocumentationComponent, searchQuery]);

    const totalExamplesCount = useMemo(() => {
        return activeDocumentationComponent.sections.reduce(
            (count, section) => count + section.examples.length,
            0,
        );
    }, [activeDocumentationComponent]);

    const foundExamplesCount = useMemo(() => {
        return filteredSections.reduce((sum, section) => sum + section.examples.length, 0);
    }, [filteredSections]);

    return (
        <main className="space-y-6 lg:col-span-3">
            <DocumentationOverviewSection
                activeDocumentationComponent={activeDocumentationComponent}
                onCopy={handleCopy}
                copiedId={copiedId}
            />

            <DocumentationExamplesSection
                sections={filteredSections}
                totalCount={totalExamplesCount}
                foundCount={foundExamplesCount}
                copiedId={copiedId}
                onCopy={handleCopy}
            />
        </main>
    );
}
