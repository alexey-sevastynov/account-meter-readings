import { ComponentDocumentation } from "@/shared/types/ui/documentation";
import { IconName, iconNames } from "@/shared/ui/icon/icon-name";

export function getComponentSearchResultCount(
    componentId: string,
    searchQuery: string,
    componentsDocumentation: readonly ComponentDocumentation[],
) {
    if (!searchQuery) return 0;

    const componentDocumentation = componentsDocumentation.find((component) => component.id === componentId);

    if (!componentDocumentation) return 0;

    let matchCount = 0;

    for (const section of componentDocumentation.sections) {
        for (const example of section.examples) {
            const text = [
                componentDocumentation.name,
                section.title,
                section.description,
                example.title,
                example.description,
                example.tags.join(" "),
                example.code,
            ]
                .join(" ")
                .toLowerCase();

            if (text.includes(searchQuery)) matchCount++;
        }
    }

    return matchCount;
}

export function getComponentIcon(id: string): IconName {
    switch (id) {
        case "button":
            return iconNames.layers;
        case "avatar":
            return iconNames.users;
        case "text":
            return iconNames.bookOpen;
        case "title":
            return iconNames.receiptText;
        default:
            return iconNames.hexagon;
    }
}
