import { Column } from "@tanstack/react-table";
import { Eye, EyeOff } from "lucide-react";
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
                    <div className="flex items-center justify-between">
                        <MrText>Керування колонками</MrText>
                        <MrButton
                            variant={buttonVariantKeys.icon}
                            iconName={iconNames.close}
                            onClick={() => {}} // Закрытие handled через контекст dropdown
                        />
                    </div>
                    <MrText className="mt-1 text-xs text-gray-500">Виберіть колонки для відображення</MrText>
                </div>

                <div className="max-h-96 overflow-y-auto p-2">
                    {toggleableColumns.map((column) => {
                        const isVisible = column.getIsVisible();
                        const columnName =
                            typeof column.columnDef.header === "string" ? column.columnDef.header : column.id;

                        return (
                            <label
                                key={column.id}
                                className="flex cursor-pointer items-center gap-3 rounded-md px-3 py-2 transition-colors hover:bg-gray-50"
                            >
                                <input
                                    type="checkbox"
                                    checked={isVisible}
                                    onChange={column.getToggleVisibilityHandler()}
                                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                                />
                                <div className="flex flex-1 items-center gap-2">
                                    {isVisible ? (
                                        <Eye className="h-4 w-4 text-blue-600" />
                                    ) : (
                                        <EyeOff className="h-4 w-4 text-gray-400" />
                                    )}
                                    <span className="text-sm text-gray-700">{columnName}</span>
                                </div>
                            </label>
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
