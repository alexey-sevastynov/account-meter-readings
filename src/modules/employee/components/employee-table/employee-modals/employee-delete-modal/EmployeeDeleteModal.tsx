import { Button } from "@/shared/ui/button/Button";
import { ModalWindow } from "@/shared/ui/modal-window/ModalWindow";
import { Text } from "@/shared/ui/typography/text/Text";
import { VoidFunc, VoidFuncNoParam } from "@/shared/types/getter-setter-functions";

interface EmployeeDeleteModalProps {
    open: boolean;
    onOpenChange: VoidFunc<boolean>;
    onConfirm: VoidFuncNoParam;
    loading?: boolean;
}

export function EmployeeDeleteModal({
    open,
    onOpenChange,
    onConfirm,
    loading,
}: EmployeeDeleteModalProps) {
    return (
        <ModalWindow
            open={open}
            onOpenChange={onOpenChange}
            title="Підтвердження видалення"
            description="Ви дійсно хочете видалити цього співробітника?"
            size="sm"
            footer={
                <>
                    <Button
                        type="button"
                        variant="secondary"
                        text="Ні"
                        className="btn btn-secondary"
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
                Натискаючи кнопку &quot;Так&quot;, ви видаляєте цього співробітника з системи. Та ви не
                зможете його відновити.
            </Text>
        </ModalWindow>
    );
}
