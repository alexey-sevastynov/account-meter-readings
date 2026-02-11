import { cn } from "@/lib/cn";
import { MrPageInfo } from "@/components/ui/table-pager/page-info/PageInfo";
import { MrPaginationControls } from "@/components/ui/table-pager/pagination-controls/PaginationControls";
import { MrPageSizeSelector } from "@/components/ui/table-pager/page-size-selector/PageSizeSelector";

interface MrTablePagerProps {
    currentPage: number;
    pageSize: number;
    totalRows: number;
    pageSizeOptions: number[];
    pageCount: number;
    canNext: boolean;
    canPrevious: boolean;
    onPageChange: (page: number) => void;
    onPageSizeChange: (size: number) => void;
    className?: string;
}

export function MrTablePager(props: MrTablePagerProps) {
    const {
        className,
        currentPage,
        pageSize,
        totalRows,
        pageSizeOptions,
        pageCount,
        canNext,
        canPrevious,
        onPageChange,
        onPageSizeChange,
    } = props;

    return (
        <div
            className={cn(
                "mt-4 flex flex-col gap-3 rounded-lg px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-6",
                className,
            )}
        >
            <div className="flex items-center gap-4">
                <MrPageInfo currentPage={currentPage} pageSize={pageSize} totalRows={totalRows} />
                <MrPageSizeSelector
                    pageSize={pageSize}
                    pageSizeOptions={pageSizeOptions}
                    onPageSizeChange={onPageSizeChange}
                />
            </div>
            <MrPaginationControls
                currentPage={currentPage}
                pageCount={pageCount}
                canNext={canNext}
                canPrevious={canPrevious}
                onPageChange={onPageChange}
            />
        </div>
    );
}
