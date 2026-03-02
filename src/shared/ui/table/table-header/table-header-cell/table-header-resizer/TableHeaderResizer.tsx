import { Header } from "@tanstack/react-table";

interface MrTableHeaderResizerProps<TableData> {
    tableHeader: Header<TableData, unknown>;
}

export function MrTableHeaderResizer<TableData>({ tableHeader }: MrTableHeaderResizerProps<TableData>) {
    const isResizing = tableHeader.column.getIsResizing();

    return (
        <div
            onMouseDown={tableHeader.getResizeHandler()}
            onTouchStart={tableHeader.getResizeHandler()}
            className={`absolute top-0 right-0 h-full w-1 cursor-col-resize touch-none select-none hover:bg-blue-500 ${
                isResizing ? "bg-blue-500" : "bg-gray-300"
            }`}
            style={{ userSelect: "none" }}
        />
    );
}
