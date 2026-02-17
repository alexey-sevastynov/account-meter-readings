import { VoidFunc } from "@/types/getter-setter-functions";

interface PageSizeSelectorProps {
    pageSize: number;
    pageSizeOptions: number[];
    onPageSizeChange: VoidFunc<number>;
}

export function MrPageSizeSelector({ pageSize, pageSizeOptions, onPageSizeChange }: PageSizeSelectorProps) {
    return (
        <div className="flex items-center gap-2">
            <label htmlFor="pageSize" className="text-foreground text-sm">
                Показувати по:
            </label>
            <select
                id="pageSize"
                value={pageSize}
                onChange={(e) => onPageSizeChange(Number(e.target.value))}
                className="border-border bg-background text-foreground focus:border-primary focus:ring-primary block rounded-md border py-1.5 pr-8 pl-3 text-sm focus:ring-1 focus:outline-none"
            >
                {pageSizeOptions.map((size) => (
                    <option key={size} value={size}>
                        {size}
                    </option>
                ))}
            </select>
        </div>
    );
}
