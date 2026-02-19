import { MrButton } from "@/components/ui/button/Button";
import { MrModalWindow } from "@/components/ui/modal-window/ModalWindow";
import { MrText } from "@/components/ui/text/Text";
import { VoidFunc, VoidFuncNoParam } from "@/types/getter-setter-functions";

interface MrEmployeeDeleteModalProps {
    open: boolean;
    onOpenChange: VoidFunc<boolean>;
    onConfirm: VoidFuncNoParam;
}

export function MrEmployeeDeleteModal({ open, onOpenChange, onConfirm }: MrEmployeeDeleteModalProps) {
    return (
        <MrModalWindow
            open={open}
            onOpenChange={onOpenChange}
            title="Підтвердження видалення"
            description="Ви дійсно хочете видалити цього співробітника?"
            size="sm"
            footer={
                <>
                    <MrButton
                        type="button"
                        variant="secondary"
                        text="Ні"
                        className="btn btn-secondary"
                        onClick={() => onOpenChange(false)}
                    />
                    <MrButton type="button" variant="danger" text="Так" onClick={onConfirm} />
                </>
            }
        >
            <MrText>
                Натискаючи кнопку &quot;Так&quot;, ви видаляєте цього співробітника з системи. Та ви не
                зможете його відновити.
            </MrText>
        </MrModalWindow>
    );
}
