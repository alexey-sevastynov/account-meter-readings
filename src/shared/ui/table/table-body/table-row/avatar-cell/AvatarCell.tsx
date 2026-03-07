import { Avatar } from "@/shared/ui/avatar/Avatar";
import { CellContext } from "@tanstack/react-table";

interface AvatarCellProps<TData> {
    cellInfo: CellContext<TData, unknown>;
}

export function AvatarCell<TData>({ cellInfo }: AvatarCellProps<TData>) {
    return (
        <div className="flex items-center gap-2">
            <Avatar name={cellInfo.getValue() as string} size="md" />
            <span>{cellInfo.getValue() as string}</span>
        </div>
    );
}
