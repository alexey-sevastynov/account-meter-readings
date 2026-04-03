import { TableConfig } from "@/shared/lib/react-table/table-config";
import { TableHeader } from "@/shared/ui/table/table-header/TableHeader";

interface StickyHeaderProps<TData> {
    config: TableConfig<TData>;
    headScrollRef: React.RefObject<HTMLDivElement | null>;
    headTableRef: React.RefObject<HTMLTableElement | null>;
}

export function StickyHeader<TData>({ config, headScrollRef, headTableRef }: StickyHeaderProps<TData>) {
    return (
        <div
            ref={headScrollRef}
            className="bg-background border-border sticky top-0 z-20 w-full overflow-hidden rounded-t-lg border border-b-0 shadow-sm"
        >
            <div className="inline-block min-w-full align-middle">
                <table
                    ref={headTableRef}
                    className="border-border min-w-full table-fixed divide-y"
                    style={{ minWidth: config.reactTable.getCenterTotalSize() }}
                >
                    <TableHeader
                        reactTable={config.reactTable}
                        enableSorting={config.enableSorting}
                        enableColumnResizing={config.enableResizing}
                        isSticky={false}
                    />
                </table>
            </div>
        </div>
    );
}
