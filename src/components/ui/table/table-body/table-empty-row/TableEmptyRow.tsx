interface MrTableEmptyRowProps {
    colSpan: number;
    noDataMessage?: string;
    className?: string;
}

export function MrTableEmptyRow({ colSpan, noDataMessage, className }: MrTableEmptyRowProps) {
    return (
        <tr className={className}>
            <td colSpan={colSpan} className="px-3 py-4 text-center text-sm text-gray-500">
                {noDataMessage ?? "No data to display"}
            </td>
        </tr>
    );
}
