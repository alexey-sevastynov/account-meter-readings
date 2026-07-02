import { Icon } from "@/shared/ui/icon/Icon";
import { iconNames } from "@/shared/ui/icon/icon-name";
import { textPositions } from "@/shared/ui/typography/text-position";
import { Title } from "@/shared/ui/typography/title/Title";
import { Text } from "@/shared/ui/typography/text/Text";
import { MRInput } from "@/shared/ui/input/Input";
import { getDocumentationComponents } from "@/modules/documentation/data/documentation-sections";
import { VoidFunc } from "@/shared/types/getter-setter-functions";
import { getTotalDocumentationExamplesCount } from "@/modules/documentation/components/documentation-header/documentationHeader.funcs";

interface DocumentationHeaderProps {
    searchQuery: string;
    setSearchQuery: VoidFunc<string>;
}

export function DocumentationHeader({ searchQuery, setSearchQuery }: DocumentationHeaderProps) {
    const documentationComponents = getDocumentationComponents();

    return (
        <header className="border-border from-card via-card to-muted/20 relative overflow-hidden rounded-3xl border bg-gradient-to-r p-6 shadow-sm md:p-8">
            <div className="relative z-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div className="space-y-2">
                    <div className="flex items-center gap-2">
                        <span className="bg-primary/10 text-primary border-primary/20 rounded-xl border p-2">
                            <Icon name={iconNames.bookOpen} />
                        </span>
                        <span className="text-muted-foreground text-xs font-bold tracking-wider uppercase">
                            Документація UI
                        </span>
                    </div>
                    <Title textPosition={textPositions.left}>Бібліотека компонентів</Title>
                    <Text>
                        Специфікації пропсів, готові інтерактивні приклади та копійований вихідний код для
                        швидкої розробки.
                    </Text>
                </div>
                <div className="bg-background/50 border-border/80 flex h-fit flex-wrap items-center gap-3 rounded-2xl border p-3 text-xs backdrop-blur-sm">
                    <div className="border-border/60 flex flex-col border-r px-3">
                        <span className="text-muted-foreground font-medium">Компоненти</span>
                        <span className="text-foreground mt-0.5 text-base font-bold">
                            {documentationComponents.length}
                        </span>
                    </div>
                    <div className="flex flex-col px-3">
                        <span className="text-muted-foreground font-medium">Всього прикладів</span>
                        <span className="text-foreground mt-0.5 text-base font-bold">
                            {getTotalDocumentationExamplesCount(documentationComponents)}
                        </span>
                    </div>
                </div>
            </div>

            <div className="mt-6 flex flex-col gap-4 pt-6 lg:flex-row lg:items-center">
                <MRInput
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    label="Пошук по коду, пропсах, назві чи тегах..."
                />
            </div>
        </header>
    );
}
