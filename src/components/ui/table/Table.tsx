import { MrTableBody } from "@/components/ui/table/table-body/TableBody";
import { MrTableHeader } from "@/components/ui/table/table-header/TableHeader";
import { MrTableFooter } from "@/components/ui/table/table-footer/TableFooter";
import { TableConfig } from "@/components/ui/table/table-config";

export interface MrTableProps<TData> {
    config: TableConfig<TData>;
}

export function MrTable<TData>({ config }: MrTableProps<TData>) {
    return (
        <div className="w-full">
            <div className="overflow-auto">
                <div className="inline-block min-w-full align-middle">
                    <div className="bg-background overflow-hidden rounded-lg border shadow-sm">
                        <table
                            className="border-border min-w-full divide-y"
                            style={{ width: config.reactTable.getCenterTotalSize() }}
                        >
                            <MrTableHeader
                                reactTable={config.reactTable}
                                enableSorting={config.enableSorting}
                                enableColumnResizing={config.enableResizing}
                            />
                            <MrTableBody
                                reactTable={config.reactTable}
                                noDataMessage={config.noDataMessage}
                                isLoading={config.isLoading}
                                onRowClick={config.onRowClick}
                            />
                            {config.enableTableFooter && <MrTableFooter reactTable={config.reactTable} />}
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
