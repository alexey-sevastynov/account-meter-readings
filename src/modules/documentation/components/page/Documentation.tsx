"use client";

import { useDeferredValue, useState } from "react";
import { getDocumentationComponents } from "@/modules/documentation/data/documentation-sections";
import { DocumentationHeader } from "@/modules/documentation/components/documentation-header/DocumentationHeader";
import { DocumentationSidebar } from "@/modules/documentation/components/documentation-sidebar/DocumentationSidebar";
import { DocumentationContent } from "@/modules/documentation/components/documentation-content/DocumentationContent";
import {
    getActiveDocumentationComponent,
    getInitialDocumentationComponentId,
} from "@/modules/documentation/components/page/documentation.funcs";

export function Documentation() {
    const documentationComponents = getDocumentationComponents();
    const [searchQuery, setSearchQuery] = useState("");
    const [activeDocumentationComponentId, setActiveDocumentationComponentIdId] = useState(() =>
        getInitialDocumentationComponentId(documentationComponents),
    );

    const deferredSearchQuery = useDeferredValue(searchQuery.trim().toLowerCase());
    const activeDocumentationComponent = getActiveDocumentationComponent(
        documentationComponents,
        activeDocumentationComponentId,
    );

    return (
        <div className="animate-in fade-in mx-auto max-w-full space-y-6 pb-12 duration-500">
            <DocumentationHeader searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

            {activeDocumentationComponent && (
                <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-4">
                    <DocumentationSidebar
                        searchQuery={deferredSearchQuery}
                        activeDocumentationComponent={activeDocumentationComponent}
                        setActiveDocumentationComponentId={setActiveDocumentationComponentIdId}
                    />
                    <DocumentationContent
                        searchQuery={deferredSearchQuery}
                        activeDocumentationComponent={activeDocumentationComponent}
                    />
                </div>
            )}
        </div>
    );
}
