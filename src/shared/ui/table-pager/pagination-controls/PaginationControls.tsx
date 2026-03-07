import { buttonVariantKeys } from "@/shared/ui/button/button-variant-keys";
import { Button } from "@/shared/ui/button/Button";
import { iconColors } from "@/shared/ui/icon/icon-color";
import { iconNames } from "@/shared/ui/icon/icon-name";
import { VoidFunc } from "@/shared/types/getter-setter-functions";

interface PaginationControlsProps {
    currentPage: number;
    pageCount: number;
    canNext: boolean;
    canPrevious: boolean;
    onPageChange: VoidFunc<number>;
}

export function PaginationControls({
    currentPage,
    pageCount,
    canNext,
    canPrevious,
    onPageChange,
}: PaginationControlsProps) {
    return (
        <div className="flex items-center gap-2">
            <Button
                variant={buttonVariantKeys.icon}
                iconColor={iconColors.primary}
                onClick={() => onPageChange(1)}
                disabled={!canPrevious}
                title="Перша сторінка"
                iconName={iconNames.chevronsLeft}
            />
            <Button
                variant={buttonVariantKeys.icon}
                iconColor={iconColors.primary}
                onClick={() => onPageChange(currentPage - 1)}
                disabled={!canPrevious}
                title="Попередня сторінка"
                iconName={iconNames.chevronsLeft}
            />

            <span className="text-foreground text-sm">
                Сторінка <span className="font-medium">{currentPage}</span> з{" "}
                <span className="font-medium">{pageCount}</span>
            </span>

            <div className="ml-2 flex items-center gap-2">
                <label htmlFor="gotoPage" className="text-foreground text-sm">
                    Перейти:
                </label>
                <input
                    id="gotoPage"
                    type="number"
                    min={1}
                    max={pageCount}
                    value={currentPage}
                    onChange={(e) => {
                        const page = e.target.value ? Number(e.target.value) : 1;

                        if (page >= 1 && page <= pageCount) onPageChange(page);
                    }}
                    className="border-border bg-background text-foreground focus:border-primary focus:ring-primary block w-16 rounded-md border px-2 py-1.5 text-sm focus:ring-1 focus:outline-none"
                />
            </div>

            <Button
                variant={buttonVariantKeys.icon}
                iconColor={iconColors.primary}
                onClick={() => onPageChange(currentPage + 1)}
                disabled={!canNext}
                title="Наступна сторінка"
                iconName={iconNames.chevronsRight}
            />
            <Button
                variant={buttonVariantKeys.icon}
                iconColor={iconColors.primary}
                onClick={() => onPageChange(pageCount)}
                disabled={!canNext}
                title="Остання сторінка"
                iconName={iconNames.chevronsRight}
            />
        </div>
    );
}
