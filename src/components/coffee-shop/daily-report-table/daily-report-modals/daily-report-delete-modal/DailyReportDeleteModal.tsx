import { MrButton } from "@/components/ui/button/Button";
import { MrModalWindow } from "@/components/ui/modal-window/ModalWindow";
import { MrText } from "@/components/ui/text/Text";
import { VoidFunc, VoidFuncNoParam } from "@/types/getter-setter-functions";

interface MrDailyReportDeleteModalProps {
    open: boolean;
    onOpenChange: VoidFunc<boolean>;
    onConfirm: VoidFuncNoParam;
    isDeleting: boolean;
}

export function MrDailyReportDeleteModal({
    open,
    onOpenChange,
    onConfirm,
    isDeleting,
}: MrDailyReportDeleteModalProps) {
    return (
        <MrModalWindow
            open={open}
            onOpenChange={onOpenChange}
            title="Підтвердження видалення"
            description="Ви дійсно хочете видалити цей щоденний звіт?"
            size="sm"
            footer={
                <>
                    <MrButton
                        type="button"
                        variant="secondary"
                        text="Ні"
                        onClick={() => onOpenChange(false)}
                    />
                    <MrButton
                        type="button"
                        variant="danger"
                        text="Так"
                        onClick={onConfirm}
                        loading={isDeleting}
                    />
                </>
            }
        >
            <MrText>
                Натискаючи кнопку &quot;Так&quot;, ви видаляєте цей щоденний звіт з системи. Його не можна
                буде відновити.
            </MrText>
        </MrModalWindow>
    );
}
