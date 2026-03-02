import { useState } from "react";
import { FieldValues, DefaultValues } from "react-hook-form";
import { MrResourceForm } from "@/shared/ui/form/resource-form-modal/resource-form/ResourceForm";
import { MrModalWindow } from "@/shared/ui/modal-window/ModalWindow";
import { MrButton } from "@/shared/ui/button/Button";
import { ResourceField } from "@/shared/types/resource-field";
import { VoidFuncNoParam } from "@/shared/types/getter-setter-functions";
import { FormMode, formModes } from "@/shared/ui/form/form-mode";
import {
    executeFormSubmit,
    executeModalClose,
    isEditMode,
} from "@/shared/ui/form/resource-form-modal/resourceFormModal.funcs";

interface ResourceFormModalProps<T extends FieldValues> {
    fields: ResourceField<T>[];
    onSubmit: (data: T, mode: FormMode) => Promise<void>;
    formMode: FormMode;
    defaultValues?: DefaultValues<T>;
    onClose?: VoidFuncNoParam;
    createTitle?: string;
    editTitle?: string;
    addButtonLabel?: string;
    loading?: boolean;
}

export function MrResourceFormModal<T extends FieldValues>({
    fields,
    onSubmit,
    formMode = formModes.create,
    defaultValues,
    onClose,
    createTitle = "Створити",
    editTitle = "Редагування",
    addButtonLabel = "Додати",
    loading,
}: ResourceFormModalProps<T>) {
    const [internalOpen, setInternalOpen] = useState(false);
    const isOpen = isEditMode(formMode) || internalOpen;
    const closeModal = () => executeModalClose(formMode, setInternalOpen, onClose);

    return (
        <>
            {!isEditMode(formMode) && (
                <MrButton text={addButtonLabel} onClick={() => setInternalOpen(true)} />
            )}

            <MrModalWindow
                open={isOpen}
                onOpenChange={(value) => {
                    if (!value) {
                        closeModal();
                    } else if (!isEditMode(formMode)) {
                        setInternalOpen(true);
                    }
                }}
                title={isEditMode(formMode) ? editTitle : createTitle}
                size="md"
            >
                <MrResourceForm<T>
                    fields={fields}
                    defaultValues={defaultValues}
                    onSubmit={(data) =>
                        executeFormSubmit(data, formMode, onSubmit, closeModal, defaultValues)
                    }
                    loading={loading}
                />
            </MrModalWindow>
        </>
    );
}
