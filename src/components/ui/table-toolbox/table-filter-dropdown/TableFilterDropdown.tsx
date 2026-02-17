import { cn } from "@/lib/cn";
import { Column } from "@tanstack/react-table";
import { MRInput } from "@/components/ui/input/Input";
import { MrButton } from "@/components/ui/button/Button";
import { iconNames } from "@/enums/ui/icon-name";
import { iconColors } from "@/enums/ui/icon-color";
import { buttonVariantKeys } from "@/enums/ui/button-variant-key";
import { MrDropdown, MrDropdownContent, MrDropdownTrigger } from "@/components/ui/dropdown/Dropdown";
import { MrText } from "@/components/ui/text/Text";

interface MrTableFilterDropdownProps<TData> {
    columns: Column<TData>[];
    className?: string;
}

export function MrTableFilterDropdown<TData>({ columns, className }: MrTableFilterDropdownProps<TData>) {
    const filterableColumns = columns.filter((col) => col.getCanFilter());
    const activeFiltersCount = filterableColumns.filter((col) => col.getFilterValue()).length;

    return (
        <MrDropdown className={cn("relative", className)}>
            <MrDropdownTrigger>
                <div className="relative inline-flex items-center">
                    <MrButton text="Фільтри" iconName={iconNames.filter} />
                    {activeFiltersCount > 0 && (
                        <span className="absolute -top-1 -right-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-xs font-medium text-white">
                            {activeFiltersCount}
                        </span>
                    )}
                </div>
            </MrDropdownTrigger>

            <MrDropdownContent className="w-80">
                <div className="border-b border-gray-200 p-4">
                    <div className="flex items-center justify-between">
                        <MrText>Фільтри</MrText>
                    </div>
                </div>

                <div className="space-y-4 p-4">
                    {filterableColumns.map((column) => {
                        const columnName =
                            typeof column.columnDef.header === "string" ? column.columnDef.header : column.id;

                        return (
                            <div key={column.id} className="relative">
                                <MRInput
                                    label={columnName}
                                    value={(column.getFilterValue() as string) ?? ""}
                                    onChange={(e) => column.setFilterValue(e.target.value)}
                                    placeholder={`Пошук по ${columnName.toLowerCase()}...`}
                                />
                                {!!column.getFilterValue() && (
                                    <MrButton
                                        variant={buttonVariantKeys.icon}
                                        iconName={iconNames.close}
                                        iconColor={iconColors.primary}
                                        onClick={() => column.setFilterValue("")}
                                        className="absolute top-1/2 right-2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                    />
                                )}
                            </div>
                        );
                    })}
                </div>

                <div className="border-t border-gray-200 p-3">
                    <MrButton
                        className="w-full"
                        text="Скинути всі фільтри"
                        onClick={() => filterableColumns.forEach((col) => col.setFilterValue(""))}
                    />
                </div>
            </MrDropdownContent>
        </MrDropdown>
    );
}
