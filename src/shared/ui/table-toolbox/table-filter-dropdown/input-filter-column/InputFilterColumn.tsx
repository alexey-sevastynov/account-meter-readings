import { Button } from "@/shared/ui/button/Button";
import { buttonVariantKeys } from "@/shared/ui/button/button-variant-keys";
import { iconColors } from "@/shared/ui/icon/icon-color";
import { iconNames } from "@/shared/ui/icon/icon-name";
import { MRInput } from "@/shared/ui/input/Input";
import { Column } from "@tanstack/react-table";

interface InputFilterColumnProps<TData> {
    column: Column<TData>;
}

export function InputFilterColumn<TData>({ column }: InputFilterColumnProps<TData>) {
    const columnName = column.columnDef.meta?.label ?? "Пошук";

    return (
        <div className="relative">
            <MRInput
                label={columnName}
                value={(column.getFilterValue() as string) ?? ""}
                onChange={(e) => column.setFilterValue(e.target.value)}
                placeholder={`Пошук по ${columnName.toLowerCase()}...`}
            />
            {!!column.getFilterValue() && (
                <Button
                    variant={buttonVariantKeys.icon}
                    iconName={iconNames.close}
                    iconColor={iconColors.primary}
                    onClick={() => column.setFilterValue("")}
                    className="absolute top-1/2 right-2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                />
            )}
        </div>
    );
}
