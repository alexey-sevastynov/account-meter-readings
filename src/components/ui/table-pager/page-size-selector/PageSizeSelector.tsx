import { VoidFunc } from "@/types/getter-setter-functions";

interface PageSizeSelectorProps {
    pageSize: number;
    pageSizeOptions: number[];
    onPageSizeChange: VoidFunc<number>;
}

export function MrPageSizeSelector({ pageSize, pageSizeOptions, onPageSizeChange }: PageSizeSelectorProps) {
    return (
        <div className="flex items-center gap-2">
            <label htmlFor="pageSize" className="text-sm text-gray-700">
                Показувати по:
            </label>
            <select
                id="pageSize"
                value={pageSize}
                onChange={(e) => onPageSizeChange(Number(e.target.value))}
                className="block rounded-md border-gray-300 py-1.5 pr-8 pl-3 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
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
