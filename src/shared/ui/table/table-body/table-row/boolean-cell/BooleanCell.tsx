import { CellContext } from "@tanstack/react-table";
import { Icon } from "@/shared/ui/icon/Icon";
import { iconNames } from "@/shared/ui/icon/icon-name";

import { iconStrokeWidths } from "@/shared/ui/icon/icon-stroke-width";
import { iconColors } from "@/shared/ui/icon/icon-color";

interface BooleanCellProps<TData> {
    cellInfo: CellContext<TData, unknown>;
}

export function BooleanCell<TData>({ cellInfo }: BooleanCellProps<TData>) {
    if (cellInfo.getValue() === true)
        return (
            <div className="flex items-center justify-center">
                <Icon
                    name={iconNames.check}
                    color={iconColors.primary}
                    strokeWidth={iconStrokeWidths.thick}
                />
            </div>
        );

    return null;
}
