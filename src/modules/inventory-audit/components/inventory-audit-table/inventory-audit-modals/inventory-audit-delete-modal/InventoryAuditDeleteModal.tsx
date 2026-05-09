import { VoidFunc, VoidFuncNoParam } from "@/shared/types/getter-setter-functions";
import { Button } from "@/shared/ui/button/Button";
import { ModalWindow } from "@/shared/ui/modal-window/ModalWindow";
import { Text } from "@/shared/ui/typography/text/Text";

interface InventoryAuditDeleteModalProps {
    open: boolean;
    onOpenChange: VoidFunc<boolean>;
    onConfirm: VoidFuncNoParam;
    isDeleting: boolean;
}

export function InventoryAuditDeleteModal({
    open,
    onOpenChange,
    onConfirm,
    isDeleting,
}: InventoryAuditDeleteModalProps) {
    return (
        <ModalWindow
            open={open}
            onOpenChange={onOpenChange}
            title="Підтвердження видалення"
            description="Ви дійсно хочете видалити цей аудит інвентаризації?"
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
                Натискаючи кнопку &quot;Так&quot;, ви видаляєте цей аудит інвентаризації з системи. Його не
                можна буде відновити.
            </Text>
        </ModalWindow>
    );
}
