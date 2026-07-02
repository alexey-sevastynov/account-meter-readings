import { CellContext } from "@tanstack/react-table";
import { ComponentProp } from "@/shared/types/ui/documentation";
import { TextCell } from "@/shared/ui/table/table-body/table-row/text-cell/TextCell";

interface PropNameCellProps {
    cellInfo: CellContext<ComponentProp, unknown>;
}

export function PropNameCell({ cellInfo }: PropNameCellProps) {
    const required = cellInfo.row.original.required;

    return (
        <div className="flex">
            <TextCell cellInfo={cellInfo} />
            {required && (
                <span className="text-destructive ml-0.5 font-semibold" title="Обов'язковий проп">
                    *
                </span>
            )}
        </div>
    );
}
