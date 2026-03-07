interface TableEmptyRowProps {
    colSpan: number;
    noDataMessage?: string;
    className?: string;
}

export function TableEmptyRow({ colSpan, noDataMessage, className }: TableEmptyRowProps) {
    return (
        <tr className={className}>
            <td colSpan={colSpan} className="text-muted-foreground px-3 py-4 text-center text-sm">
                {noDataMessage ?? "No data to display"}
            </td>
        </tr>
    );
}
