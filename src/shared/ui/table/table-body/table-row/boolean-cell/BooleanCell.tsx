import { CellContext } from "@tanstack/react-table";
import { MrIcon } from "@/shared/ui/icon/Icon";
import { iconNames } from "@/shared/ui/icon/icon-name";

import { iconStrokeWidths } from "@/shared/ui/icon/icon-stroke-width";
import { iconColors } from "@/shared/ui/icon/icon-color";

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
