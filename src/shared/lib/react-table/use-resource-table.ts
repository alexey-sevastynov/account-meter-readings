import { useState } from "react";
import { SortingState, ColumnFiltersState, PaginationState, VisibilityState } from "@tanstack/react-table";
import { defaultTablePageSize } from "@/shared/lib/react-table/constants";

interface UseResourceTableProps {
    initialPageSize?: number;
}

export function useResourceTable<T>({ initialPageSize = defaultTablePageSize }: UseResourceTableProps = {}) {
    const [sorting, setSorting] = useState<SortingState>([]);
    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
    const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
    const [pagination, setPagination] = useState<PaginationState>({
        pageIndex: 0,
        pageSize: initialPageSize,
    });
    const [editingItem, setEditingItem] = useState<T | null>(null);
    const [deletingItemId, setDeletingItemId] = useState<string | null>(null);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [isCreating, setIsCreating] = useState(false);
    const [isUpdating, setIsUpdating] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);

    return {
        tableState: { sorting, columnFilters, columnVisibility, pagination },
        setSorting,
        setColumnFilters,
        setColumnVisibility,
        setPagination,
        crud: {
            editingItem,
            setEditingItem,
            deletingItemId,
            setDeletingItemId,
            isDeleteModalOpen,
            setIsDeleteModalOpen,
            isCreating,
            setIsCreating,
            isUpdating,
            setIsUpdating,
            isDeleting,
            setIsDeleting,
        },
    };
}
