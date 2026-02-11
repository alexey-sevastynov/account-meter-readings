import { cn } from "@/lib/cn";
import { flexRender, Table } from "@tanstack/react-table";

interface MrTableFooterProps<TableData> {
    reactTable: Table<TableData>;
    className?: string;
}

export function MrTableFooter<TableData>({ reactTable, className }: MrTableFooterProps<TableData>) {
    return (
        <tfoot className={cn("border-t-2 border-gray-300 bg-gray-50", className)}>
            {reactTable.getFooterGroups().map((footerGroup) => (
                <tr key={footerGroup.id}>
                    {footerGroup.headers.map((header) => (
                        <th
                            key={header.id}
                            className="px-3 py-3 text-left text-sm font-semibold text-gray-900"
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
