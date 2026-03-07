import { TableBody } from "@/shared/ui/table/table-body/TableBody";
import { TableHeader } from "@/shared/ui/table/table-header/TableHeader";
import { TableFooter } from "@/shared/ui/table/table-footer/TableFooter";
import { TableConfig } from "@/shared/ui/table/table-config";

export interface TableProps<TData> {
    config: TableConfig<TData>;
}

export function Table<TData>({ config }: TableProps<TData>) {
    return (
        <div className="w-full">
            <div className="overflow-auto">
                <div className="inline-block min-w-full align-middle">
                    <div className="bg-background overflow-hidden rounded-lg border shadow-sm">
                        <table
                            className="border-border min-w-full divide-y"
                            style={{ width: config.reactTable.getCenterTotalSize() }}
                        >
                            <TableHeader
                                reactTable={config.reactTable}
                                enableSorting={config.enableSorting}
                                enableColumnResizing={config.enableResizing}
                            />
                            <TableBody
                                reactTable={config.reactTable}
                                noDataMessage={config.noDataMessage}
                                isLoading={config.isLoading}
                                onRowClick={config.onRowClick}
                            />
                            {config.enableTableFooter && <TableFooter reactTable={config.reactTable} />}
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
