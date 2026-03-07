import { Column } from "@tanstack/react-table";
import { Checkbox } from "@/shared/ui/checkbox/Checkbox";
import { Button } from "@/shared/ui/button/Button";
import { buttonVariantKeys } from "@/shared/ui/button/button-variant-keys";
import { iconNames } from "@/shared/ui/icon/icon-name";
import { Text } from "@/shared/ui/typography/text/Text";
import { Dropdown, DropdownTrigger, DropdownContent } from "@/shared/ui/dropdown/Dropdown";

interface TableColumnVisibilityDropdownProps<TData> {
    columns: Column<TData>[];
    className?: string;
}

export function TableColumnVisibilityDropdown<TData>({
    columns,
    className = "",
}: TableColumnVisibilityDropdownProps<TData>) {
    const toggleableColumns = columns.filter((col) => col.getCanHide());
    const visibleCount = columns.filter((col) => col.getIsVisible()).length;

    return (
        <Dropdown className={`relative ${className}`}>
            <DropdownTrigger>
                <Button
                    text={`Колонки (${visibleCount}/${toggleableColumns.length})`}
                    iconName={iconNames.settings}
                    className="w-full"
                />
            </DropdownTrigger>

            <DropdownContent className="w-80">
                <div className="border-b border-gray-200 p-4">
                    <Text>Виберіть колонки для відображення</Text>
                </div>

                <div className="max-h-96 overflow-y-auto p-2">
                    {toggleableColumns.map((column) => {
                        const isVisible = column.getIsVisible();

                        return (
                            <div key={column.id} className="flex items-center gap-4 px-3 py-2">
                                <Checkbox
                                    checked={isVisible}
                                    onCheckedChange={(checked) => {
                                        column.toggleVisibility(!!checked);
                                    }}
                                />
                                <Text className="contents">{column.columnDef.meta?.label}</Text>
                            </div>
                        );
                    })}
                </div>

                <div className="flex gap-2 border-t border-gray-200 p-3">
                    <Button
                        text="Показати всі"
                        onClick={() => toggleableColumns.forEach((col) => col.toggleVisibility(true))}
                    />
                    <Button
                        text="Скрити всі"
                        variant={buttonVariantKeys.secondary}
                        onClick={() => toggleableColumns.forEach((col) => col.toggleVisibility(false))}
                    />
                </div>
            </DropdownContent>
        </Dropdown>
    );
}
