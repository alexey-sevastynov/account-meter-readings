import { cn } from "@/lib/cn";
import { flexRender, Table } from "@tanstack/react-table";

interface MrTableFooterProps<TableData> {
    reactTable: Table<TableData>;
    className?: string;
}

export function MrTableFooter<TableData>({ reactTable, className }: MrTableFooterProps<TableData>) {
    return (
        <tfoot className={cn("border-border bg-background border-t-2", className)}>
            {reactTable.getFooterGroups().map((footerGroup) => (
                <tr key={footerGroup.id}>
                    {footerGroup.headers.map((header) => (
                        <th
                            key={header.id}
                            className="text-foreground px-3 py-3 text-left text-sm font-semibold"
                            style={{ width: header.getSize() }}
                        >
                            {header.isPlaceholder
                                ? null
                                : flexRender(header.column.columnDef.footer, header.getContext())}
                        </th>
                    ))}
                </tr>
            ))}
        </tfoot>
    );
}
