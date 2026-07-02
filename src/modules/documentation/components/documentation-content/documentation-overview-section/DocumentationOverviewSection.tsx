import { ComponentDocumentation } from "@/shared/types/ui/documentation";
import { Icon } from "@/shared/ui/icon/Icon";
import { iconNames } from "@/shared/ui/icon/icon-name";
import { textSizes } from "@/shared/ui/typography/text-size";
import { Title } from "@/shared/ui/typography/title/Title";
import { Text } from "@/shared/ui/typography/text/Text";
import { Button } from "@/shared/ui/button/Button";
import { textPositions } from "@/shared/ui/typography/text-position";
import { DocumentationPropsTable } from "@/modules/documentation/components/documentation-content/documentation-overview-section/documentation-props-table/DocumentationPropsTable";

interface DocumentationOverviewSectionProps {
    activeDocumentationComponent: ComponentDocumentation;
    onCopy: (text: string, id: string) => void;
    copiedId?: string;
}

export function DocumentationOverviewSection({
    activeDocumentationComponent,
    onCopy,
    copiedId,
}: DocumentationOverviewSectionProps) {
    return (
        <section className="border-border bg-card/45 space-y-6 rounded-3xl border p-6 shadow-sm backdrop-blur-sm md:p-8">
            <div className="space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="space-y-1">
                        <div className="flex items-center gap-1.5">
                            <Icon name={iconNames.fileCode2} />
                            <Text textSize={textSizes.lg}>Компонент</Text>
                        </div>
                        <Title
                            textPosition={textPositions.left}
                            textSize={textSizes.xl}
                            className="mb-0! font-bold"
                        >
                            {activeDocumentationComponent.name}
                        </Title>
                    </div>

                    <div className="bg-background/60 border-border/80 text-muted-foreground flex w-fit max-w-full items-center gap-2 overflow-hidden rounded-xl border px-3 py-2 font-mono text-xs">
                        <span className="truncate">{activeDocumentationComponent.componentPath}</span>
                        <Button
                            onClick={() => onCopy(activeDocumentationComponent.componentPath, "path")}
                            iconName={copiedId === "path" ? iconNames.check : iconNames.copy}
                            title="Копіювати шлях"
                        />
                    </div>
                </div>

                <Text>{activeDocumentationComponent.description}</Text>
            </div>

            <DocumentationPropsTable componentProps={activeDocumentationComponent.prop} />
        </section>
    );
}
