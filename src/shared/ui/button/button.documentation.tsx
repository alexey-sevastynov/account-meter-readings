import { ButtonProps } from "@/shared/ui/button/Button";
import {
    ComponentDocumentation,
    DocumentationSection,
    ComponentPropsDocs,
} from "@/shared/types/ui/documentation";
import { getPropRows } from "@/shared/utils/ui-documentation";
import {
    buttonVariantExamples,
    buttonContentExamples,
    buttonIconColorExamples,
    buttonLoadingExamples,
    buttonDisabledExamples,
    buttonCustomizationExamples,
    buttonAttributesExamples,
} from "@/shared/ui/button/button-examples";
import { buttonMetadata, buttonPropNames } from "@/shared/ui/button/button.metadata";
import { buttonVariantKeys } from "@/shared/ui/button/button-variant-keys";

type ButtonPropsToDoc = Pick<
    ButtonProps,
    "text" | "iconName" | "iconColor" | "variant" | "loading" | "disabled" | "className" | "title"
>;

export const buttonDocumentationSections: DocumentationSection[] = [
    {
        id: "button-variants",
        title: "Варіанти кнопки",
        description: `Тут показано всі значення 
        \`${Object.keys(buttonVariantKeys).join(" | ")}\` і як кожен ключ виглядає у реальному UI.`,
        componentPath: buttonMetadata.componentPath,
        examples: buttonVariantExamples,
    },
    {
        id: "button-content",
        title: "Вміст кнопки",
        description: `Ця секція показує, як поводиться кнопка з 
        \`${buttonPropNames.text}\`, з іконкою та у форматі тільки з іконкою.`,
        componentPath: buttonMetadata.componentPath,
        examples: buttonContentExamples,
    },
    {
        id: "button-icon-colors",
        title: "Колір іконки",
        description: "Тут видно всі значення `iconColors` і як вони впливають на візуальну подачу кнопки.",
        componentPath: buttonMetadata.componentPath,
        examples: buttonIconColorExamples,
    },
    {
        id: "button-loading",
        title: `Стан ${buttonPropNames.loading}`,
        description: "Показує, як кнопка виглядає під час завантаження з текстом, з іконкою та без неї.",
        componentPath: buttonMetadata.componentPath,
        examples: buttonLoadingExamples,
    },
    {
        id: "button-disabled",
        title: `Стан ${buttonPropNames.disabled}`,
        description: `Відображає неактивну кнопку, 
        щоб було видно поведінку \`${buttonPropNames.disabled}\` у різних комбінаціях.`,
        componentPath: buttonMetadata.componentPath,
        examples: buttonDisabledExamples,
    },
    {
        id: "button-customization",
        title: `Кастомізація стилю (${buttonPropNames.className})`,
        description: "Використання додаткових CSS-класів для зміни геометрії та оформлення кнопки.",
        componentPath: buttonMetadata.componentPath,
        examples: buttonCustomizationExamples,
    },
    {
        id: "button-attributes",
        title: "Допоміжні атрибути",
        description: `Використання стандартних атрибутів, таких як \`${buttonPropNames.title}\` для тултипів.`,
        componentPath: buttonMetadata.componentPath,
        examples: buttonAttributesExamples,
    },
];

const buttonPropsDocsConfig: ComponentPropsDocs<Required<ButtonPropsToDoc>> = {
    text: {
        type: buttonMetadata.props[buttonPropNames.text].type,
        defaultValue: buttonMetadata.props[buttonPropNames.text].defaultValue,
        description: `Текстовий напис на кнопці. Необов'язковий, якщо передано \`${buttonPropNames.iconName}\`.`,
        required: buttonMetadata.props[buttonPropNames.text].required,
    },
    iconName: {
        type: buttonMetadata.props[buttonPropNames.iconName].type,
        defaultValue: buttonMetadata.props[buttonPropNames.iconName].defaultValue,
        description: `Ім'я іконки для відображення. Необов'язкове, якщо передано \`${buttonPropNames.text}\`.`,
        required: buttonMetadata.props[buttonPropNames.iconName].required,
    },
    iconColor: {
        type: buttonMetadata.props[buttonPropNames.iconColor].type,
        defaultValue: buttonMetadata.props[buttonPropNames.iconColor].defaultValue,
        description: "Службовий колір для іконки (напр., primary, destructive).",
        required: buttonMetadata.props[buttonPropNames.iconColor].required,
    },
    variant: {
        type: buttonMetadata.props[buttonPropNames.variant].type,
        defaultValue: buttonMetadata.props[buttonPropNames.variant].defaultValue,
        description: "Тема оформлення та стиль кнопки.",
        required: buttonMetadata.props[buttonPropNames.variant].required,
    },
    loading: {
        type: buttonMetadata.props[buttonPropNames.loading].type,
        defaultValue: buttonMetadata.props[buttonPropNames.loading].defaultValue,
        description: `Управління станом завантаження. Коли true, показується ClipLoader і кнопка блокується.`,
        required: buttonMetadata.props[buttonPropNames.loading].required,
    },
    disabled: {
        type: buttonMetadata.props[buttonPropNames.disabled].type,
        defaultValue: buttonMetadata.props[buttonPropNames.disabled].defaultValue,
        description: "Чи є кнопка заблокованою для взаємодії.",
        required: buttonMetadata.props[buttonPropNames.disabled].required,
    },
    className: {
        type: buttonMetadata.props[buttonPropNames.className].type,
        defaultValue: buttonMetadata.props[buttonPropNames.className].defaultValue,
        description: "Кастомні CSS-класи Tailwind для перевизначення стилів кнопки.",
        required: buttonMetadata.props[buttonPropNames.className].required,
    },
    title: {
        type: buttonMetadata.props[buttonPropNames.title].type,
        defaultValue: buttonMetadata.props[buttonPropNames.title].defaultValue,
        description: "Стандартний HTML-атрибут спливаючої підказки (tooltip) при наведенні курсору.",
        required: buttonMetadata.props[buttonPropNames.title].required,
    },
};

export const buttonDocumentation: ComponentDocumentation = {
    id: buttonMetadata.id,
    name: buttonMetadata.name,
    description:
        "Універсальний компонент кнопки для виконання дій в інтерфейсі. Підтримує завантаження, " +
        "блокування взаємодії, іконки зліва чи справа та різні стилістичні варіанти.",
    componentPath: buttonMetadata.componentPath,
    prop: getPropRows(buttonPropsDocsConfig),
    sections: buttonDocumentationSections,
};
