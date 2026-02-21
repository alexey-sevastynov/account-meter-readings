import { CellContext } from "@tanstack/react-table";
import { MrIcon } from "@/components/ui/icon/Icon";
import { iconNames } from "@/enums/ui/icon-name";

import { iconStrokeWidths } from "@/enums/ui/icon-stroke-width";
import { iconColors } from "@/enums/ui/icon-color";

interface MrBooleanCellProps<TData> {
    cellInfo: CellContext<TData, unknown>;
}

export function MrBooleanCell<TData>({ cellInfo }: MrBooleanCellProps<TData>) {
    if (cellInfo.getValue() === true)
        return (
            <div className="flex items-center justify-center">
                <MrIcon
                    name={iconNames.check}
                    color={iconColors.primary}
                    strokeWidth={iconStrokeWidths.thick}
                />
            </div>
        );

    return null;
}
