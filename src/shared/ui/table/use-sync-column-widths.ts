import { RefObject, useLayoutEffect } from "react";

interface UseSyncColumnWidthsProps {
    enabled: boolean;
    headTableRef: RefObject<HTMLTableElement | null>;
    bodyTableRef: RefObject<HTMLTableElement | null>;
    data: unknown;
}

export function useSyncColumnWidths({ enabled, headTableRef, bodyTableRef, data }: UseSyncColumnWidthsProps) {
    useLayoutEffect(() => {
        if (!enabled) return;

        const syncWidths = () => {
            const headTable = headTableRef.current;
            const bodyTable = bodyTableRef.current;

            if (!headTable || !bodyTable) return;

            const bodyRow = bodyTable.querySelector("tbody tr");

            if (!bodyRow) return;

            const bodyCells = bodyRow.children;
            const headCells = headTable.querySelectorAll("th");

            if (bodyCells.length !== headCells.length) return;

            for (let i = 0; i < bodyCells.length; i++) {
                const width = (bodyCells[i] as HTMLElement).getBoundingClientRect().width;

                const headCell = headCells[i] as HTMLElement;
                headCell.style.width = width + "px";
                headCell.style.minWidth = width + "px";
            }
        };

        syncWidths();

        const observer = new ResizeObserver(syncWidths);

        if (bodyTableRef.current) {
            observer.observe(bodyTableRef.current);
        }

        return () => observer.disconnect();
    }, [enabled, data, headTableRef, bodyTableRef]);
}
