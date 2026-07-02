import { Icon } from "@/shared/ui/icon/Icon";
import { getDocumentationComponents } from "@/modules/documentation/data/documentation-sections";
import {
    getComponentIcon,
    getComponentSearchResultCount,
} from "@/modules/documentation/components/documentation-sidebar/documentationSidebar.funcs";
import { cn } from "@/shared/lib/cn";
import { ComponentDocumentation } from "@/shared/types/ui/documentation";
import { VoidFunc } from "@/shared/types/getter-setter-functions";
import { iconColors } from "@/shared/ui/icon/icon-color";
import { Title } from "@/shared/ui/typography/title/Title";
import { textSizes } from "@/shared/ui/typography/text-size";

interface DocumentationSidebarProps {
    searchQuery: string;
    activeDocumentationComponent: ComponentDocumentation;
    setActiveDocumentationComponentId: VoidFunc<string>;
}

export function DocumentationSidebar({
    searchQuery,
    activeDocumentationComponent,
    setActiveDocumentationComponentId,
}: DocumentationSidebarProps) {
    const documentationComponents = getDocumentationComponents();

    const activeClassName = "bg-primary border-primary text-primary-foreground shadow-primary/10 shadow-md";
    const inactiveClassName =
        "bg-background/80 border-border text-muted-foreground " +
        "hover:text-foreground hover:border-primary/40 hover:bg-background";

    return (
        <aside className="space-y-4 lg:sticky lg:top-4 lg:col-span-1">
            <div className="bg-card/50 border-border space-y-3 rounded-2xl border p-4 backdrop-blur-sm">
                <Title textSize={textSizes.lg}>Каталог компонентів</Title>

                <nav className="scrollbar-none -mx-2 flex gap-2 overflow-x-auto px-2 pb-2 [-ms-overflow-style:none] [scrollbar-width:none] lg:mx-0 lg:flex-col lg:px-0 lg:pb-0 [&::-webkit-scrollbar]:hidden">
                    {documentationComponents.map((component) => {
                        const isActive = component.id === activeDocumentationComponent.id;
                        const componentSearchResultCount = getComponentSearchResultCount(
                            component.id,
                            searchQuery,
                            documentationComponents,
                        );

                        return (
                            <button
                                key={component.id}
                                onClick={() => setActiveDocumentationComponentId(component.id)}
                                className={cn(
                                    "group flex min-w-36 shrink-0 cursor-pointer items-center justify-between gap-3",
                                    "rounded-xl border px-4 py-3 text-left transition-all duration-200 lg:w-full",
                                    isActive ? activeClassName : inactiveClassName,
                                )}
                            >
                                <div className="flex min-w-0 items-center gap-3">
                                    <Icon
                                        name={getComponentIcon(component.id)}
                                        color={isActive ? iconColors.primaryForeground : iconColors.muted}
                                    />

                                    <span className="truncate text-sm font-semibold">{component.name}</span>
                                </div>
                                <div className="flex shrink-0 items-center gap-1.5">
                                    {componentSearchResultCount > 0 && (
                                        <span
                                            className={cn(
                                                "animate-pulse rounded px-1.5 py-0.5 text-[9px] font-bold",
                                                isActive
                                                    ? "bg-primary-foreground/30 text-primary-foreground"
                                                    : "border border-green-500/20 bg-green-500/10 text-green-500",
                                            )}
                                        >
                                            +{componentSearchResultCount}
                                        </span>
                                    )}
                                    <span
                                        className={cn(
                                            "rounded-full px-2 py-0.5 text-[10px] font-bold",
                                            isActive
                                                ? "bg-primary-foreground/20 text-primary-foreground"
                                                : "bg-muted text-muted-foreground border-border border",
                                        )}
                                    >
                                        {component.sections.length}
                                    </span>
                                </div>
                            </button>
                        );
                    })}
                </nav>
            </div>
        </aside>
    );
}
