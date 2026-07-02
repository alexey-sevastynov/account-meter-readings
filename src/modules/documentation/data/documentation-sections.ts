import { buttonDocumentation } from "@/shared/ui/button/button.documentation";
import { avatarDocumentation } from "@/shared/ui/avatar/avatar.documentation";
import { textDocumentation } from "@/shared/ui/typography/text/text.documentation";
import { titleDocumentation } from "@/shared/ui/typography/title/title.documentation";
import { ComponentDocumentation } from "@/shared/types/ui/documentation";

export function getDocumentationComponents(): readonly ComponentDocumentation[] {
    const components: ComponentDocumentation[] = [
        buttonDocumentation,
        avatarDocumentation,
        textDocumentation,
        titleDocumentation,
    ];

    return sortByName(components);
}

function sortByName(components: readonly ComponentDocumentation[]): ComponentDocumentation[] {
    return [...components].sort((a, b) => a.name.localeCompare(b.name));
}
