import { useState } from "react";
import { FieldValues, DefaultValues } from "react-hook-form";
import { MrResourceForm } from "@/components/shared/resource-form-modal/resource-form/ResourceForm";
import { MrModalWindow } from "@/components/ui/modal-window/ModalWindow";
import { MrButton } from "@/components/ui/button/Button";
import { ResourceField } from "@/types/resource-field";
import { VoidFuncNoParam } from "@/types/getter-setter-functions";
import { FormMode, formModes } from "@/enums/ui/form-mode";
import {
    executeFormSubmit,
    executeModalClose,
    isEditMode,
} from "@/components/shared/resource-form-modal/resourceFormModal.funcs";

interface ResourceFormModalProps<T extends FieldValues> {
    fields: ResourceField<T>[];
    onSubmit: (data: T, mode: FormMode) => void;
    formMode: FormMode;
    defaultValues?: DefaultValues<T>;
    onClose?: VoidFuncNoParam;
    createTitle?: string;
    editTitle?: string;
    addButtonLabel?: string;
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
                />
            </MrModalWindow>
        </>
    );
}
