import { Column } from "@tanstack/react-table";
import { MrCheckbox } from "@/components/ui/checkbox/Checkbox";
import { MrButton } from "@/components/ui/button/Button";
import { buttonVariantKeys } from "@/enums/ui/button-variant-key";
import { iconNames } from "@/enums/ui/icon-name";
import { MrText } from "@/components/ui/text/Text";
import { MrDropdown, MrDropdownTrigger, MrDropdownContent } from "@/components/ui/dropdown/Dropdown";

interface MrTableColumnVisibilityDropdownProps<TData> {
    columns: Column<TData>[];
    className?: string;
}

export function MrTableColumnVisibilityDropdown<TData>({
    columns,
    className = "",
}: MrTableColumnVisibilityDropdownProps<TData>) {
    const toggleableColumns = columns.filter((col) => col.getCanHide());
    const visibleCount = columns.filter((col) => col.getIsVisible()).length;

    return (
        <MrDropdown className={`relative ${className}`}>
            <MrDropdownTrigger>
                <MrButton
                    text={`Колонки (${visibleCount}/${toggleableColumns.length})`}
                    iconName={iconNames.settings}
                    className="w-full"
                />
            </MrDropdownTrigger>

            <MrDropdownContent className="w-80">
                <div className="border-b border-gray-200 p-4">
                    <MrText>Виберіть колонки для відображення</MrText>
                </div>

                <div className="max-h-96 overflow-y-auto p-2">
                    {toggleableColumns.map((column) => {
                        const isVisible = column.getIsVisible();

                        return (
                            <div key={column.id} className="flex items-center gap-4 px-3 py-2">
                                <MrCheckbox
                                    checked={isVisible}
                                    onCheckedChange={(checked) => {
                                        column.toggleVisibility(!!checked);
                                    }}
                                />
                                <MrText className="contents">{column.columnDef.meta?.label}</MrText>
                            </div>
                        );
                    })}
                </div>

                <div className="flex gap-2 border-t border-gray-200 p-3">
                    <MrButton
                        text="Показати всі"
                        onClick={() => toggleableColumns.forEach((col) => col.toggleVisibility(true))}
                    />
                    <MrButton
                        text="Скрити всі"
                        variant={buttonVariantKeys.secondary}
                        onClick={() => toggleableColumns.forEach((col) => col.toggleVisibility(false))}
                    />
                </div>
            </MrDropdownContent>
        </MrDropdown>
    );
}
