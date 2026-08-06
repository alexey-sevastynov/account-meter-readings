import { VoidFunc, VoidFuncNoParam } from "@/shared/types/getter-setter-functions";
import { ColumnDef } from "@tanstack/react-table";

type CreateHandler<T> = (values: T) => Promise<void>;
type UpdateHandler<T> = (values: T) => Promise<void>;
type DeleteHandler = (id: string) => Promise<void>;

interface GetResourceTableColumnsParams<T> {
    baseColumns: ColumnDef<T>[];
    createActionsColumn?: (onDelete: (id: string) => void, onEdit: (item: T) => void) => ColumnDef<T>;
    onDelete: (id: string) => void;
    onEdit: (item: T) => void;
}

export function getResourceTableColumns<T>({
    baseColumns,
    createActionsColumn,
    onDelete,
    onEdit,
}: GetResourceTableColumnsParams<T>) {
    if (!createActionsColumn) return baseColumns;

    const actionsColumn = createActionsColumn(onDelete, onEdit);

    return [actionsColumn, ...baseColumns];
}

export async function executeCreate<T>(
    values: T,
    setIsCreating: VoidFunc<boolean>,
    onCreate?: CreateHandler<T>,
) {
    if (!onCreate) return;

    setIsCreating(true);

    try {
        await onCreate(values);
    } finally {
        setIsCreating(false);
    }
}

export async function executeUpdate<T>(
    values: T,
    setIsUpdating: VoidFunc<boolean>,
    clearEditingItem: VoidFuncNoParam,
    onUpdate?: UpdateHandler<T>,
) {
    if (!onUpdate) return;

    setIsUpdating(true);

    try {
        await onUpdate(values);
        clearEditingItem();
    } finally {
        setIsUpdating(false);
    }
}

export async function executeDelete(
    id: string | null,
    setIsDeleting: VoidFunc<boolean>,
    closeDeleteModal: VoidFuncNoParam,
    clearDeletingItemId: VoidFuncNoParam,
    onDelete?: DeleteHandler,
) {
    if (!onDelete || !id) return;

    setIsDeleting(true);

    try {
        await onDelete(id);
        closeDeleteModal();
        clearDeletingItemId();
    } finally {
        setIsDeleting(false);
    }
}
