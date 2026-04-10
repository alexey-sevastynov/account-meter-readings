import { VoidFunc, VoidFuncNoParam } from "@/shared/types/getter-setter-functions";
import { Button } from "@/shared/ui/button/Button";
import { ModalWindow } from "@/shared/ui/modal-window/ModalWindow";
import { Text } from "@/shared/ui/typography/text/Text";

interface ExpenseReportDeleteModalProps {
    open: boolean;
    onOpenChange: VoidFunc<boolean>;
    onConfirm: VoidFuncNoParam;
    isDeleting: boolean;
}

export function ExpenseReportDeleteModal({
    open,
    onOpenChange,
    onConfirm,
    isDeleting,
}: ExpenseReportDeleteModalProps) {
    return (
        <ModalWindow
            open={open}
            onOpenChange={onOpenChange}
            title="Підтвердження видалення"
            description="Ви дійсно хочете видалити цей звіт про витрати?"
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
                        loading={isDeleting}
                    />
                </>
            }
        >
            <Text>
                Натискаючи кнопку &quot;Так&quot;, ви видаляєте цей звіт про витрати з системи. Його не можна
                буде відновити.
            </Text>
        </ModalWindow>
    );
}
