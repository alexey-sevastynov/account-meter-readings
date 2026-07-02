import { DocumentationExample } from "@/shared/types/ui/documentation";
import { VoidFunc } from "@/shared/types/getter-setter-functions";
import { Badge } from "@/shared/ui/badge/Badge";
import { getSequentialBadgeColor } from "@/shared/ui/badge/badge.funcs";
import { Icon } from "@/shared/ui/icon/Icon";
import { iconNames } from "@/shared/ui/icon/icon-name";
import { Text } from "@/shared/ui/typography/text/Text";
import { Title } from "@/shared/ui/typography/title/Title";
import { textSizes } from "@/shared/ui/typography/text-size";
import { textPositions } from "@/shared/ui/typography/text-position";
import { cn } from "@/shared/lib/cn";

interface DocumentationExampleCardProps {
    example: DocumentationExample;
    onCopy: VoidFunc<string, string>;
    copiedId?: string;
}

export function DocumentationExampleCard({ example, onCopy, copiedId }: DocumentationExampleCardProps) {
    return (
        <article className="group border-border bg-card/30 hover:border-primary/20 flex flex-col justify-between rounded-2xl border p-5 shadow-sm transition-all duration-300 hover:shadow-md">
            <div className="flex-1 space-y-4">
                <div className="flex items-start justify-between gap-4">
                    <div className="space-y-1">
                        <Title textSize={textSizes.md} textPosition={textPositions.left}>
                            {example.title}
                        </Title>
                        <Text>{example.description}</Text>
                    </div>
                    <div className="flex shrink-0 flex-wrap justify-end gap-1">
                        {example.tags.map((tag, index) => {
                            const badgeColor = getSequentialBadgeColor(index);

                            return (
                                <Badge key={tag} color={badgeColor.bg} textColor={badgeColor.text}>
                                    {tag}
                                </Badge>
                            );
                        })}
                    </div>
                </div>

                <div
                    className={cn(
                        "relative flex min-h-24 w-full overflow-hidden p-6 shadow-inner",
                        "border-border/80 rounded-xl border",
                        example.previewBackground,
                    )}
                >
                    <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:14px_24px] opacity-[0.03]" />

                    <div className="relative z-10 w-full">{example.preview}</div>
                </div>
            </div>

            <div className="relative mt-4">
                <details className="group border-border/80 bg-background/60 overflow-hidden rounded-xl border">
                    <summary className="text-foreground hover:bg-muted/15 flex cursor-pointer list-none items-center justify-between gap-3 px-4 py-2.5 text-xs font-semibold transition-colors select-none">
                        <span className="text-muted-foreground group-hover:text-foreground flex items-center gap-1.5">
                            <Icon name={iconNames.code} />
                            Показати код
                        </span>
                        <Icon name={iconNames.chevronDown} />
                    </summary>
                    <div className="border-border relative border-t">
                        <button
                            onClick={() => onCopy(example.code, example.id)}
                            className="border-border bg-card hover:bg-muted text-muted-foreground hover:text-foreground absolute top-2.5 right-2.5 rounded-lg border p-1.5 transition-all duration-200"
                            title="Копіювати код"
                        >
                            <Icon name={copiedId === example.id ? iconNames.check : iconNames.copy} />
                        </button>
                        <pre className="overflow-x-auto bg-[#0d0e15] p-4 pr-12 font-mono text-[11px] leading-relaxed text-slate-300">
                            <code>{example.code}</code>
                        </pre>
                    </div>
                </details>
            </div>
        </article>
    );
}
