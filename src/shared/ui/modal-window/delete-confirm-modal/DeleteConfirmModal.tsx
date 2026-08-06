import { Button } from "@/shared/ui/button/Button";
import { ModalWindow } from "@/shared/ui/modal-window/ModalWindow";
import { Text } from "@/shared/ui/typography/text/Text";
import { VoidFunc, VoidFuncNoParam } from "@/shared/types/getter-setter-functions";

interface DeleteConfirmModalProps {
    open: boolean;
    onOpenChange: VoidFunc<boolean>;
    onConfirm: VoidFuncNoParam;
    description: string;
    bodyText?: string;
    loading?: boolean;
}

export function DeleteConfirmModal({
    open,
    onOpenChange,
    onConfirm,
    description,
    bodyText = "Натискаючи кнопку \"Так\", ви видаляєте цей запис з системи. Його не можна буде відновити.",
    loading,
}: DeleteConfirmModalProps) {
    return (
        <ModalWindow
            open={open}
            onOpenChange={onOpenChange}
            title="Підтвердження видалення"
            description={description}
            size="sm"
            footer={
                <>
                    <Button
                        type="button"
                        variant="secondary"
                        text="Ні"
                        onClick={() => onOpenChange(false)}
                    />
                    <Button
                        type="button"
                        variant="danger"
                        text="Так"
                        onClick={onConfirm}
                        loading={loading}
                    />
                </>
            }
        >
            <Text>
                {bodyText}
            </Text>
        </ModalWindow>
    );
}
