import { cn } from "@/lib/cn";
import { MrIcon } from "@/components/ui/icon/Icon";
import { iconNames } from "@/enums/ui/icon-name";
import { flexRender, Header } from "@tanstack/react-table";

interface MrTableHeaderContentProps<TableData> {
    tableHeader: Header<TableData, unknown>;
    enableSorting?: boolean;
}

export function MrTableHeaderContent<TableData>({
    tableHeader,
    enableSorting,
}: MrTableHeaderContentProps<TableData>) {
    const canSort = tableHeader.column.getCanSort();
    const toggleSortHandler = tableHeader.column.getToggleSortingHandler();

    return (
        <div className="flex items-center gap-2">
            <div
                className={cn(
                    "text-foreground flex items-center gap-2 select-none",
                    canSort && "cursor-pointer",
                )}
                onClick={canSort ? toggleSortHandler : undefined}
            >
                {flexRender(tableHeader.column.columnDef.header, tableHeader.getContext())}

                {enableSorting && canSort && <SortIcon tableHeader={tableHeader} />}
            </div>
        </div>
    );
}

function SortIcon<TableData>({ tableHeader }: { tableHeader: Header<TableData, unknown> }) {
    const sort = tableHeader.column.getIsSorted();

    if (sort === "asc") return <MrIcon name={iconNames.chevronUp} />;

    if (sort === "desc") return <MrIcon name={iconNames.chevronDown} />;

    return <MrIcon name={iconNames.chevronsUpDown} />;
}
