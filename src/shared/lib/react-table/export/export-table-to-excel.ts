import ExcelJS from "exceljs";
import { saveAs } from "file-saver";
import { Column, Table } from "@tanstack/react-table";
import { formatDateToShortDate } from "@/shared/utils/date";
import { stringifyJSON } from "@/shared/utils/json";
import { isBoolean, isDate, isObject, isString } from "@/shared/utils/guards";

interface ExportTableToExcelOptions<TData> {
    table: Table<TData>;
    fileName: string;
    sheetName?: string;
    excludedColumns?: string[];
}

export async function exportTableToExcel<TData>({
    table,
    fileName,
    sheetName = "Sheet1",
    excludedColumns = [],
}: ExportTableToExcelOptions<TData>) {
    const workbook = createWorkbook();
    const worksheet = workbook.addWorksheet(sheetName);
    const columns = getExportColumns(table, excludedColumns);

    configureWorksheetColumns(worksheet, columns);
    addWorksheetRows(worksheet, table, columns);
    styleWorksheet(worksheet, columns.length);
    autoFitColumns(worksheet);

    await downloadWorkbook(workbook, fileName);
}

function createWorkbook() {
    return new ExcelJS.Workbook();
}

function getExportColumns<TData>(table: Table<TData>, excludedColumns: string[]) {
    return table
        .getVisibleLeafColumns()
        .filter((column) => column.getIsVisible() && !excludedColumns.includes(column.id));
}

function configureWorksheetColumns<TData>(worksheet: ExcelJS.Worksheet, columns: Column<TData>[]) {
    worksheet.columns = columns.map((column) => ({
        header: column.columnDef.meta?.label ?? column.id,
        key: column.id,
    }));
}

function addWorksheetRows<TData>(
    worksheet: ExcelJS.Worksheet,
    table: Table<TData>,
    columns: Column<TData>[],
) {
    table.getSortedRowModel().rows.forEach((row) => {
        const values: Record<string, unknown> = {};

        columns.forEach((column) => {
            const rawValue = row.getValue(column.id);
            const exportFormatter = column.columnDef.meta?.exportFormatter;
            values[column.id] =
                exportFormatter !== undefined ? exportFormatter(rawValue) : formatCellValue(rawValue);
        });

        worksheet.addRow(values);
    });
}

function formatCellValue(value: unknown) {
    if (value === null) {
        return "";
    }

    if (isDate(value)) {
        return formatDateToShortDate(value);
    }

    if (isString(value)) {
        const date = new Date(value);

        if (!Number.isNaN(date.getTime())) {
            return formatDateToShortDate(date);
        }

        return value;
    }

    if (isBoolean(value)) {
        return value ? "Так" : "Ні";
    }

    if (isObject(value)) {
        return stringifyJSON(value);
    }

    return value;
}

function styleWorksheet(worksheet: ExcelJS.Worksheet, columnCount: number) {
    worksheet.views = [
        {
            state: "frozen",
            ySplit: 1,
        },
    ];

    worksheet.autoFilter = {
        from: {
            row: 1,
            column: 1,
        },
        to: {
            row: 1,
            column: columnCount,
        },
    };

    worksheet.eachRow((row, rowNumber) => {
        row.eachCell((cell) => {
            cell.font = {
                bold: rowNumber === 1,
                size: 12,
            };

            cell.alignment = {
                vertical: "top",
                horizontal: rowNumber === 1 ? "center" : "left",
                wrapText: false,
            };
        });
    });
}

function autoFitColumns(worksheet: ExcelJS.Worksheet) {
    for (const column of worksheet.columns) {
        if (!column?.eachCell) continue;

        let maxLength = column.header?.toString().length ?? 10;

        column.eachCell({ includeEmpty: true }, (cell) => {
            maxLength = Math.max(maxLength, cell.text.length);
        });

        column.width = Math.min(maxLength + 4, 60);
    }
}

async function downloadWorkbook(workbook: ExcelJS.Workbook, fileName: string) {
    const buffer = await workbook.xlsx.writeBuffer();

    saveAs(
        new Blob([buffer], {
            type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        }),
        `${fileName}.xlsx`,
    );
}
