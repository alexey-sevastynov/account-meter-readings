export function getFirstItemIndex(currentPage: number, pageSize: number) {
    return (currentPage - 1) * pageSize + 1;
}

export function getLastItemIndex(currentPage: number, pageSize: number, totalRows: number) {
    return Math.min(currentPage * pageSize, totalRows);
}
