import { FormMode, formModes } from "@/enums/ui/form-mode";
import { VoidFuncNoParam } from "@/types/getter-setter-functions";
import { DefaultValues } from "react-hook-form";

export function executeFormSubmit<T>(
    data: T,
    formMode: FormMode,
    onSubmit: (data: T, mode: FormMode) => void,
    closeModal: VoidFuncNoParam,
    defaultValues?: DefaultValues<T>,
) {
    const submitData = getSubmitData(formMode, data, defaultValues);
    onSubmit(submitData, formMode);

    closeModal();
}

export function executeModalClose(
    mode: FormMode,
    setInternalOpen: (value: boolean) => void,
    onClose?: VoidFuncNoParam,
) {
    if (!isEditMode(mode)) {
        setInternalOpen(false);
    }

    onClose?.();
}

export function isEditMode(mode: FormMode) {
    return mode === formModes.edit;
}

function getSubmitData<T>(mode: FormMode, data: T, defaultValues?: DefaultValues<T>) {
    if (isEditMode(mode) && defaultValues) {
        return { ...defaultValues, ...data };
    }

    return data;
}
