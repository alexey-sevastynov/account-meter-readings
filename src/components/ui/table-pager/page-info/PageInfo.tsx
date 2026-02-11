import { getFirstItemIndex, getLastItemIndex } from "@/components/ui/table-pager/page-info/page-info.funcs";

interface PageInfoProps {
    currentPage: number;
    pageSize: number;
    totalRows: number;
}

export function MrPageInfo({ currentPage, pageSize, totalRows }: PageInfoProps) {
    return (
        <div className="text-sm text-gray-700">
            Показано <span className="font-medium">{getFirstItemIndex(currentPage, pageSize)}</span> -{" "}
            <span className="font-medium">{getLastItemIndex(currentPage, pageSize, totalRows)}</span> з{" "}
            <span className="font-medium">{totalRows}</span> записів
        </div>
    );
}
