/* eslint-disable max-lines */
import { Button, ButtonProps } from "@/shared/ui/button/Button";
import { buttonVariantKeys } from "@/shared/ui/button/button-variant-keys";
import { iconNames } from "@/shared/ui/icon/icon-name";
import { iconColors } from "@/shared/ui/icon/icon-color";
import { createExample, stringifyValue } from "@/shared/utils/ui-documentation";

type ButtonPropsToDoc = Pick<
    ButtonProps,
    "text" | "iconName" | "iconColor" | "variant" | "loading" | "disabled" | "className" | "title"
>;

function createButtonUsageCode(props: ButtonPropsToDoc) {
    const imports = ['import { Button } from "@/shared/ui/button/Button";'];

    const importMap = {
        variant: 'import { buttonVariantKeys } from "@/shared/ui/button/button-variant-keys";',
        iconName: 'import { iconNames } from "@/shared/ui/icon/icon-name";',
        iconColor: 'import { iconColors } from "@/shared/ui/icon/icon-color";',
    } as const;

    (Object.keys(importMap) as (keyof typeof importMap)[]).forEach((key) => {
        if (props[key] !== undefined) {
            imports.push(importMap[key]);
        }
    });

    const propEntries: string[] = [];

    const propRules: {
        [K in keyof ButtonPropsToDoc]?: (value: NonNullable<ButtonPropsToDoc[K]>) => string;
    } = {
        text: (value) => `text=${stringifyValue(value)}`,
        title: (value) => `title=${stringifyValue(value)}`,
        variant: (value) => `variant={buttonVariantKeys.${value}}`,
        iconName: (value) => `iconName={iconNames.${value}}`,
        iconColor: (value) => `iconColor={iconColors.${value}}`,
        loading: (value) => `loading={${value}}`,
        disabled: (value) => `disabled={${value}}`,
    };

    (Object.keys(props) as (keyof ButtonPropsToDoc)[]).forEach((key) => {
        const value = props[key];

        if (value === undefined) {
            return;
        }

        const rule = propRules[key];

        if (rule) {
            propEntries.push((rule as (val: unknown) => string)(value));
        }
    });

    const propsStr = propEntries.length ? ` ${propEntries.join(" ")}` : "";

    return `${imports.join("\n")}\n\n<Button${propsStr} />`;
}

export const buttonVariantExamples = [
    createExample({
        id: `${buttonVariantKeys.primary}-text`,
        title: "Основна дія",
        description:
            "Головна кнопка для ключових сценаріїв: збереження, підтвердження або запуску основної дії.",
        tags: [buttonVariantKeys.primary, "text"],
        preview: <Button text="Зберегти" />,
        code: createButtonUsageCode({
            text: "Зберегти",
            variant: buttonVariantKeys.primary,
        }),
    }),
    createExample({
        id: `${buttonVariantKeys.secondary}-text`,
        title: "Вторинна дія",
        description: "Добре підходить для другорядних дій поруч з основною кнопкою.",
        tags: [buttonVariantKeys.secondary, "text"],
        preview: <Button text="Продовжити" variant={buttonVariantKeys.secondary} />,
        code: createButtonUsageCode({
            text: "Продовжити",
            variant: buttonVariantKeys.secondary,
        }),
    }),
    createExample({
        id: `${buttonVariantKeys.outline}-text`,
        title: "Контурна кнопка",
        description: "Підкреслює дію без надмірного візуального акценту.",
        tags: [buttonVariantKeys.outline, "text"],
        preview: <Button text="Експортувати" variant={buttonVariantKeys.outline} />,
        code: createButtonUsageCode({
            text: "Експортувати",
            variant: buttonVariantKeys.outline,
        }),
    }),
    createExample({
        id: `${buttonVariantKeys.danger}-text`,
        title: "Небезпечна дія",
        description: "Використовується для незворотних дій, наприклад видалення або очищення даних.",
        tags: [buttonVariantKeys.danger, "text"],
        preview: <Button text="Видалити" variant={buttonVariantKeys.danger} />,
        code: createButtonUsageCode({
            text: "Видалити",
            variant: buttonVariantKeys.danger,
        }),
    }),
    createExample({
        id: `${buttonVariantKeys.link}-text`,
        title: "Кнопка-посилання",
        description: "Добре працює для навігації або допоміжних дій без сильного акценту.",
        tags: [buttonVariantKeys.link, "text"],
        preview: <Button text="Докладніше" variant={buttonVariantKeys.link} />,
        code: createButtonUsageCode({
            text: "Докладніше",
            variant: buttonVariantKeys.link,
        }),
    }),
    createExample({
        id: `${buttonVariantKeys.icon}-only`,
        title: "Іконка без тексту",
        description: "Компактний формат для швидких дій або навігації, коли текст не потрібен.",
        tags: [buttonVariantKeys.icon, "icon-only"],
        preview: (
            <Button
                variant={buttonVariantKeys.icon}
                iconColor={iconColors.primary}
                title="Наступна сторінка"
                iconName={iconNames.chevronsRight}
            />
        ),
        code: createButtonUsageCode({
            variant: buttonVariantKeys.icon,
            iconColor: iconColors.primary,
            title: "Наступна сторінка",
            iconName: iconNames.chevronsRight,
        }),
    }),
];

export const buttonContentExamples = [
    createExample({
        id: "text-only",
        title: "Тільки текст",
        description: "Базовий варіант без іконки. Підходить для більшості сценаріїв.",
        tags: ["text"],
        preview: <Button text="Зберегти" />,
        code: createButtonUsageCode({
            text: "Зберегти",
        }),
    }),
    createExample({
        id: "text-with-icon",
        title: "Текст з іконкою",
        description: "Іконка зліва підсилює зміст кнопки та робить дію впізнаванішою.",
        tags: ["text", "icon"],
        preview: <Button text="Далі" iconName={iconNames.chevronRight} title="Далі" />,
        code: createButtonUsageCode({
            text: "Далі",
            iconName: iconNames.chevronRight,
            title: "Далі",
        }),
    }),
    createExample({
        id: "icon-only",
        title: "Лише іконка",
        description: "Мініатюрний формат для тулбарів, дій у таблицях або щільних інтерфейсів.",
        tags: ["icon-only"],
        preview: (
            <Button variant={buttonVariantKeys.icon} iconName={iconNames.settings} title="Налаштування" />
        ),
        code: createButtonUsageCode({
            variant: buttonVariantKeys.icon,
            iconName: iconNames.settings,
            title: "Налаштування",
        }),
    }),
];

export const buttonIconColorExamples = [
    createExample({
        id: iconColors.primary,
        title: "Primary",
        description: "Колір для акцентної іконки у світлому інтерфейсі.",
        tags: [iconColors.primary, "iconColor"],
        preview: (
            <Button
                variant={buttonVariantKeys.icon}
                iconName={iconNames.settings}
                iconColor={iconColors.primary}
                title="Primary"
            />
        ),
        code: createButtonUsageCode({
            variant: buttonVariantKeys.icon,
            iconName: iconNames.settings,
            iconColor: iconColors.primary,
            title: "Primary",
        }),
        previewBackground: "bg-background",
    }),

    createExample({
        id: iconColors.secondary,
        title: "Secondary",
        description: "М'якший акцент для менш важливих дій.",
        tags: [iconColors.secondary, "iconColor"],
        preview: (
            <Button
                variant={buttonVariantKeys.icon}
                iconName={iconNames.settings}
                iconColor={iconColors.secondary}
                title="Secondary"
            />
        ),
        code: createButtonUsageCode({
            variant: buttonVariantKeys.icon,
            iconName: iconNames.settings,
            iconColor: iconColors.secondary,
            title: "Secondary",
        }),
        previewBackground: "bg-background",
    }),

    createExample({
        id: iconColors.muted,
        title: "Muted",
        description: "Спокійний варіант для другорядного інтерфейсу або допоміжних кнопок.",
        tags: [iconColors.muted, "iconColor"],
        preview: (
            <Button
                variant={buttonVariantKeys.icon}
                iconName={iconNames.settings}
                iconColor={iconColors.muted}
                title="Muted"
            />
        ),
        code: createButtonUsageCode({
            variant: buttonVariantKeys.icon,
            iconName: iconNames.settings,
            iconColor: iconColors.muted,
            title: "Muted",
        }),
        previewBackground: "bg-background",
    }),

    createExample({
        id: iconColors.destructive,
        title: "Destructive",
        description: "Підходить для деструктивних сценаріїв або попереджувальних дій.",
        tags: [iconColors.destructive, "iconColor"],
        preview: (
            <Button
                variant={buttonVariantKeys.icon}
                iconName={iconNames.settings}
                iconColor={iconColors.destructive}
                title="Destructive"
            />
        ),
        code: createButtonUsageCode({
            variant: buttonVariantKeys.icon,
            iconName: iconNames.settings,
            iconColor: iconColors.destructive,
            title: "Destructive",
        }),
        previewBackground: "bg-background",
    }),

    createExample({
        id: iconColors.accent,
        title: "Accent",
        description: "Яскравіший службовий акцент для помітної іконки.",
        tags: [iconColors.accent, "iconColor"],
        preview: (
            <Button
                variant={buttonVariantKeys.icon}
                iconName={iconNames.settings}
                iconColor={iconColors.accent}
                title="Accent"
            />
        ),
        code: createButtonUsageCode({
            variant: buttonVariantKeys.icon,
            iconName: iconNames.settings,
            iconColor: iconColors.accent,
            title: "Accent",
        }),
        previewBackground: "bg-background",
    }),

    createExample({
        id: iconColors.sidebar,
        title: "Sidebar",
        description: "Колір для іконок, які працюють у sidebar-інтерфейсі.",
        tags: [iconColors.sidebar, "iconColor"],
        preview: (
            <Button
                variant={buttonVariantKeys.icon}
                iconName={iconNames.settings}
                iconColor={iconColors.sidebar}
                title="Sidebar"
            />
        ),
        code: createButtonUsageCode({
            variant: buttonVariantKeys.icon,
            iconName: iconNames.settings,
            iconColor: iconColors.sidebar,
            title: "Sidebar",
        }),
        previewBackground: "bg-background",
    }),

    createExample({
        id: iconColors.primaryForeground,
        title: "Primary foreground",
        description: "Світлий варіант для іконок на кольоровому фоні кнопки.",
        tags: [iconColors.primaryForeground, "iconColor"],
        preview: (
            <Button
                variant={buttonVariantKeys.icon}
                iconName={iconNames.settings}
                iconColor={iconColors.primaryForeground}
                title="Primary foreground"
            />
        ),
        code: createButtonUsageCode({
            variant: buttonVariantKeys.icon,
            iconName: iconNames.settings,
            iconColor: iconColors.primaryForeground,
            title: "Primary foreground",
        }),
        previewBackground: "bg-primary",
    }),
];

export const buttonLoadingExamples = [
    createExample({
        id: "loading-text",
        title: "Loading з текстом",
        description: "Показує спінер замість контенту кнопки та блокує натискання.",
        tags: ["loading", "text"],
        preview: <Button text="Збереження" loading />,
        code: createButtonUsageCode({
            text: "Збереження",
            loading: true,
        }),
    }),
    createExample({
        id: "loading-text-icon",
        title: "Loading з іконкою",
        description: "Коли кнопка містить і текст, і іконку, loader замінює обидва елементи.",
        tags: ["loading", "text", "icon"],
        preview: <Button text="Далі" iconName={iconNames.chevronRight} title="Далі" loading />,
        code: createButtonUsageCode({
            text: "Далі",
            iconName: iconNames.chevronRight,
            title: "Далі",
            loading: true,
        }),
    }),
    createExample({
        id: "loading-icon-only",
        title: "Loading без тексту",
        description: "Для іконкових кнопок spinner займає місце замість самої іконки.",
        tags: ["loading", "icon-only"],
        preview: (
            <Button
                variant={buttonVariantKeys.icon}
                iconName={iconNames.settings}
                title="Завантаження"
                loading
            />
        ),
        code: createButtonUsageCode({
            variant: buttonVariantKeys.icon,
            iconName: iconNames.settings,
            title: "Завантаження",
            loading: true,
        }),
    }),
];

export const buttonDisabledExamples = [
    createExample({
        id: "disabled-text",
        title: "Disabled з текстом",
        description: "Вимикає кнопку і робить її неактивною для взаємодії.",
        tags: ["disabled", "text"],
        preview: <Button text="Недоступно" disabled />,
        code: createButtonUsageCode({
            text: "Недоступно",
            disabled: true,
        }),
    }),
    createExample({
        id: "disabled-text-icon",
        title: "Disabled з іконкою",
        description: "Показує неактивний стан для комбінованої кнопки.",
        tags: ["disabled", "text", "icon"],
        preview: <Button text="Архів" iconName={iconNames.trash} title="Архів" disabled />,
        code: createButtonUsageCode({
            text: "Архів",
            iconName: iconNames.trash,
            title: "Архів",
            disabled: true,
        }),
    }),
];

export const buttonCustomizationExamples = [
    createExample({
        id: "button-custom-style",
        title: "Кастомне стилізування (className)",
        description: "Зміна геометрії, тіней чи градієнтів за допомогою Tailwind-класів.",
        tags: ["className", "custom"],
        preview: (
            <Button
                text="Кнопка з тінню та рамкою"
                className="border-primary/20 bg-background text-foreground rounded-full border shadow-lg hover:shadow-xl"
            />
        ),
        code: createButtonUsageCode({
            text: "Кнопка з тінню та рамкою",
            className:
                "shadow-lg hover:shadow-xl rounded-full border border-primary/20 bg-background text-foreground",
        }),
    }),
];

export const buttonAttributesExamples = [
    createExample({
        id: "button-title-tooltip",
        title: "Спливаюча підказка (title)",
        description: "Відображає текст підказки при наведенні курсору на кнопку.",
        tags: ["title", "tooltip"],
        preview: <Button text="Наведи курсор" title="Це спливаюча підказка (HTML title)" />,
        code: createButtonUsageCode({
            text: "Наведи курсор",
            title: "Це спливаюча підказка (HTML title)",
        }),
    }),
];
