import { ComponentDocumentation } from "@/shared/types/ui/documentation";
import { Icon } from "@/shared/ui/icon/Icon";
import { iconNames } from "@/shared/ui/icon/icon-name";
import { textSizes } from "@/shared/ui/typography/text-size";
import { Title } from "@/shared/ui/typography/title/Title";
import { Text } from "@/shared/ui/typography/text/Text";
import { DocumentationExampleCard } from "@/modules/documentation/components/documentation-content/documentation-example-section/documentation-example-card/DocumentationExampleCard";
import { textPositions } from "@/shared/ui/typography/text-position";

interface DocumentationExamplesSectionProps {
    sections: ComponentDocumentation["sections"];
    totalCount: number;
    foundCount: number;
    copiedId?: string;
    onCopy: (text: string, id: string) => void;
}

export function DocumentationExamplesSection({
    sections,
    totalCount,
    foundCount,
    copiedId,
    onCopy,
}: DocumentationExamplesSectionProps) {
    return (
        <section className="space-y-6">
            <div className="border-border/60 flex items-center gap-2 border-b pb-3">
                <Icon name={iconNames.layers} />
                <Text uppercase>Приклади використання</Text>
                <span className="bg-muted text-muted-foreground rounded-full px-2 py-0.5 text-xs font-bold">
                    {foundCount} з {totalCount}
                </span>
            </div>

            {sections.length === 0 ? (
                <div className="border-border bg-card/20 flex flex-col items-center justify-center rounded-3xl border border-dashed p-12">
                    <Title textSize={textSizes.lg}>Прикладів не знайдено</Title>
                    <Text>Спробуйте змінити фільтр або очистити пошукове поле.</Text>
                </div>
            ) : (
                sections.map((section) => (
                    <div key={section.id} className="space-y-4">
                        <div className="space-y-1">
                            <Title textSize={textSizes.lg} textPosition={textPositions.left}>
                                {section.title}
                            </Title>
                            <Text>{section.description}</Text>
                        </div>

                        <div className="grid gap-6 xl:grid-cols-2">
                            {section.examples.map((example) => (
                                <DocumentationExampleCard
                                    key={example.id}
                                    example={example}
                                    copiedId={copiedId}
                                    onCopy={onCopy}
                                />
                            ))}
                        </div>
                    </div>
                ))
            )}
        </section>
    );
}
