import { useReactTable, getCoreRowModel } from "@tanstack/react-table";
import { ComponentProp } from "@/shared/types/ui/documentation";
import { Icon } from "@/shared/ui/icon/Icon";
import { iconNames } from "@/shared/ui/icon/icon-name";
import { Table } from "@/shared/ui/table/Table";
import { createTableConfig } from "@/shared/lib/react-table/table-config";
import { documentationPropsColumns } from "@/modules/documentation/configs/documentation-props-columns";
import { textSizes } from "@/shared/ui/typography/text-size";
import { Text } from "@/shared/ui/typography/text/Text";

interface DocumentationPropsTableProps {
    componentProps: readonly ComponentProp[];
}

export function DocumentationPropsTable({ componentProps }: DocumentationPropsTableProps) {
    const reactTable = useReactTable({
        data: componentProps as ComponentProp[],
        columns: documentationPropsColumns,
        getCoreRowModel: getCoreRowModel(),
    });

    return (
        <div className="border-border/60 space-y-3 border-t pt-4">
            <div className="flex items-center gap-2">
                <Icon name={iconNames.info} />
                <Text textSize={textSizes.lg}>Пропси компонента</Text>
            </div>

            <Table
                config={createTableConfig({
                    reactTable,
                    isLoading: false,
                    enableSorting: false,
                    enableResizing: false,
                    enableTableFooter: false,
                    stickyHeader: false,
                    noDataMessage: "Немає пропсів для відображення",
                })}
            />
        </div>
    );
}
