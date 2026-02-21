import { MrAvatar } from "@/components/ui/avatar/Avatar";
import { CellContext } from "@tanstack/react-table";

interface MrAvatarCellProps<TData> {
    cellInfo: CellContext<TData, unknown>;
}

export function MrAvatarCell<TData>({ cellInfo }: MrAvatarCellProps<TData>) {
    return (
        <div className="flex items-center gap-2">
            <MrAvatar name={cellInfo.getValue() as string} size="md" />
            <span>{cellInfo.getValue() as string}</span>
        </div>
    );
}
