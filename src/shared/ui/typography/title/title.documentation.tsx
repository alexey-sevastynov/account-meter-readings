import { Title, TitleProps } from "@/shared/ui/typography/title/Title";
import { textPositions } from "@/shared/ui/typography/text-position";
import { textSizes } from "@/shared/ui/typography/text-size";
import { textWeights } from "@/shared/ui/typography/text-weight";
import {
    ComponentDocumentation,
    DocumentationSection,
    ComponentPropsDocs,
} from "@/shared/types/ui/documentation";
import { createExample, getPropRows } from "@/shared/utils/ui-documentation";
import { titleMetadata, titlePropNames } from "@/shared/ui/typography/title/title.metadata";

const getSizeKey = (val: string) =>
    Object.keys(textSizes).find((k) => textSizes[k as keyof typeof textSizes] === val) || "";
const getWeightKey = (val: string) =>
    Object.keys(textWeights).find((k) => textWeights[k as keyof typeof textWeights] === val) || "";
const getPositionKey = (val: string) =>
    Object.keys(textPositions).find((k) => textPositions[k as keyof typeof textPositions] === val) || "";

function createTitleUsageCode(props: Omit<TitleProps, "children">) {
    const imports = ['import { Title } from "@/shared/ui/typography/title/Title";'];

    const importMap = {
        textPosition: 'import { textPositions } from "@/shared/ui/typography/text-position";',
        textSize: 'import { textSizes } from "@/shared/ui/typography/text-size";',
        textWeight: 'import { textWeights } from "@/shared/ui/typography/text-weight";',
    } as const;

    (Object.keys(importMap) as (keyof typeof importMap)[]).forEach((key) => {
        if (props[key] !== undefined) {
            imports.push(importMap[key]);
        }
    });

    const propEntries: string[] = [];

    const propRules: {
        [K in keyof Omit<TitleProps, "children">]?: (
            value: NonNullable<Omit<TitleProps, "children">[K]>,
        ) => string;
    } = {
        textPosition: (value) => {
            const key = getPositionKey(value as string);
            return `textPosition={textPositions.${key}}`;
        },
        textSize: (value) => {
            const key = getSizeKey(value as string);
            return `textSize={textSizes.${key}}`;
        },
        textWeight: (value) => {
            const key = getWeightKey(value as string);
            return `textWeight={textWeights.${key}}`;
        },
        uppercase: (value) => (value ? "uppercase" : ""),
        className: (value) => `className="${value}"`,
    };

    (Object.keys(props) as (keyof Omit<TitleProps, "children">)[]).forEach((key) => {
        const value = props[key];

        if (value === undefined) {
            return;
        }

        const rule = propRules[key];

        if (rule) {
            propEntries.push((rule as (val: unknown) => string)(value));
        }
    });

    const propEntriesFiltered = propEntries.filter(Boolean);
    const propsString = propEntriesFiltered.length > 0 ? ` ${propEntriesFiltered.join(" ")}` : "";

    return `${imports.join("\n")}\n\n<Title${propsString}>\n    Приклад тексту для відображення\n</Title>`;
}

const titleSizeExamples = [
    createExample({
        id: `title-size-${getSizeKey(textSizes.sm)}`,
        title: `Малий заголовок (${getSizeKey(textSizes.sm)})`,
        description: "Використовується в картках або для дрібних розділів (14px).",
        tags: [`size: ${getSizeKey(textSizes.sm)}`, "14px"],
        preview: (
            <Title textSize={textSizes.sm} textPosition={textPositions.left}>
                Малий заголовок
            </Title>
        ),
        code: createTitleUsageCode({ textSize: textSizes.sm }),
    }),
    createExample({
        id: `title-size-${getSizeKey(textSizes.md)}`,
        title: `Середній заголовок (${getSizeKey(textSizes.md)})`,
        description: "Для внутрішніх блоків або невеликих форм (16px).",
        tags: [`size: ${getSizeKey(textSizes.md)}`, "16px"],
        preview: (
            <Title textSize={textSizes.md} textPosition={textPositions.left}>
                Середній заголовок
            </Title>
        ),
        code: createTitleUsageCode({ textSize: textSizes.md }),
    }),
    createExample({
        id: `title-size-${getSizeKey(textSizes.lg)}`,
        title: `Великий заголовок (${getSizeKey(textSizes.lg)})`,
        description: "Для підрозділів на сторінках (18px).",
        tags: [`size: ${getSizeKey(textSizes.lg)}`, "18px"],
        preview: (
            <Title textSize={textSizes.lg} textPosition={textPositions.left}>
                Великий заголовок
            </Title>
        ),
        code: createTitleUsageCode({ textSize: textSizes.lg }),
    }),
    createExample({
        id: `title-size-${getSizeKey(textSizes.xl)}`,
        title: `Дуже великий заголовок (${getSizeKey(textSizes.xl)})`,
        description: "Для заголовків віджетів, бічних панелей або карток (20px).",
        tags: [`size: ${getSizeKey(textSizes.xl)}`, "20px"],
        preview: (
            <Title textSize={textSizes.xl} textPosition={textPositions.left}>
                Заголовок XL
            </Title>
        ),
        code: createTitleUsageCode({ textSize: textSizes.xl }),
    }),
    createExample({
        id: `title-size-${getSizeKey(textSizes.xxl)}`,
        title: `Максимальний заголовок (${getSizeKey(textSizes.xxl)})`,
        description: "Стандартний розмір для великих головних заголовків сторінок (24px).",
        tags: [`size: ${getSizeKey(textSizes.xxl)}`, "24px", "default"],
        preview: (
            <Title textSize={textSizes.xxl} textPosition={textPositions.left}>
                Заголовок XXL
            </Title>
        ),
        code: createTitleUsageCode({ textSize: textSizes.xxl }),
    }),
];

const titleWeightExamples = [
    createExample({
        id: `title-weight-${getWeightKey(textWeights.normal)}`,
        title: `Звичайне накреслення (${getWeightKey(textWeights.normal)})`,
        description: "Мінімальна товщина шрифту для більш витонченого вигляду.",
        tags: [`weight: ${getWeightKey(textWeights.normal)}`],
        preview: (
            <Title textWeight={textWeights.normal} textPosition={textPositions.left}>
                Заголовок Normal
            </Title>
        ),
        code: createTitleUsageCode({ textWeight: textWeights.normal }),
    }),
    createExample({
        id: `title-weight-${getWeightKey(textWeights.medium)}`,
        title: `Середня товщина (${getWeightKey(textWeights.medium)})`,
        description: "Помірний акцент для підзаголовків середньої важливості.",
        tags: [`weight: ${getWeightKey(textWeights.medium)}`],
        preview: (
            <Title textWeight={textWeights.medium} textPosition={textPositions.left}>
                Заголовок Medium
            </Title>
        ),
        code: createTitleUsageCode({ textWeight: textWeights.medium }),
    }),
    createExample({
        id: `title-weight-${getWeightKey(textWeights.bold)}`,
        title: `Жирне накреслення (${getWeightKey(textWeights.bold)})`,
        description: "Стандартний акцентний вигляд для всіх заголовків системи.",
        tags: [`weight: ${getWeightKey(textWeights.bold)}`, "default"],
        preview: (
            <Title textWeight={textWeights.bold} textPosition={textPositions.left}>
                Заголовок Bold
            </Title>
        ),
        code: createTitleUsageCode({ textWeight: textWeights.bold }),
    }),
];

const titlePositionExamples = [
    createExample({
        id: `title-align-${getPositionKey(textPositions.left)}`,
        title: `Вирівнювання по краю ${getPositionKey(textPositions.left)}`,
        description: "Для заголовків секцій з лівобічною сіткою.",
        tags: [`align: ${getPositionKey(textPositions.left)}`],
        preview: (
            <div className="w-full">
                <Title textPosition={textPositions.left}>Заголовок зліва</Title>
            </div>
        ),
        code: createTitleUsageCode({ textPosition: textPositions.left }),
    }),
    createExample({
        id: `title-align-${getPositionKey(textPositions.center)}`,
        title: `Вирівнювання по краю ${getPositionKey(textPositions.center)}`,
        description: "Стандартне вирівнювання для карток або головних екранів розділів.",
        tags: [`align: ${getPositionKey(textPositions.center)}`, "default"],
        preview: (
            <div className="w-full">
                <Title textPosition={textPositions.center}>Заголовок по центру</Title>
            </div>
        ),
        code: createTitleUsageCode({ textPosition: textPositions.center }),
    }),
    createExample({
        id: `title-align-${getPositionKey(textPositions.right)}`,
        title: `Вирівнювання по краю ${getPositionKey(textPositions.right)}`,
        description: "Для заголовків в асиметричних або правосторонніх інтерфейсних блоках.",
        tags: [`align: ${getPositionKey(textPositions.right)}`],
        preview: (
            <div className="w-full">
                <Title textPosition={textPositions.right}>Заголовок справа</Title>
            </div>
        ),
        code: createTitleUsageCode({ textPosition: textPositions.right }),
    }),
];

const titleUppercaseExamples = [
    createExample({
        id: "title-uppercase-false",
        title: "Звичайний регістр",
        description: "Заголовки відображаються так, як записані в коді.",
        tags: [`${titlePropNames.uppercase}: false`, "default"],
        preview: (
            <Title textPosition={textPositions.left} uppercase={false}>
                Звичайний Заголовок
            </Title>
        ),
        code: createTitleUsageCode({ uppercase: false }),
    }),
    createExample({
        id: "title-uppercase-true",
        title: "Верхній регістр (Uppercase)",
        description: `Автоматично робить весь текст великими літерами, 
        підходить для підкресленого стилю міток або акцентів за допомогою пропса \`${titlePropNames.uppercase}\`.`,
        tags: [`${titlePropNames.uppercase}: true`],
        preview: (
            <Title textPosition={textPositions.left} uppercase>
                Акцентний заголовок
            </Title>
        ),
        code: createTitleUsageCode({ uppercase: true }),
    }),
];

const titleSections: DocumentationSection[] = [
    {
        id: "title-sizes",
        title: "Розміри заголовків",
        description: `Доступні варіанти розмірів для відображення 
        важливих акцентів через \`${titlePropNames.textSize}\`.`,
        componentPath: titleMetadata.componentPath,
        examples: titleSizeExamples,
    },
    {
        id: "title-weights",
        title: "Товщина шрифту заголовка",
        description: `Керування товщиною шрифту заголовка через проп \`${titlePropNames.textWeight}\`.`,
        componentPath: titleMetadata.componentPath,
        examples: titleWeightExamples,
    },
    {
        id: "title-positions",
        title: "Позиціонування заголовка",
        description: `Керування вирівнюванням тексту заголовка 
        по горизонталі через проп \`${titlePropNames.textPosition}\`.`,
        componentPath: titleMetadata.componentPath,
        examples: titlePositionExamples,
    },
    {
        id: "title-transforms",
        title: "Регістр символів",
        description: `Керування регістром тексту за допомогою пропса \`${titlePropNames.uppercase}\`.`,
        componentPath: titleMetadata.componentPath,
        examples: titleUppercaseExamples,
    },
];

const titlePropsDocsConfig: ComponentPropsDocs<Required<TitleProps>> = {
    children: {
        type: titleMetadata.props[titlePropNames.children].type,
        defaultValue: titleMetadata.props[titlePropNames.children].defaultValue,
        description: "Текстовий контент або дочірні елементи заголовку.",
        required: titleMetadata.props[titlePropNames.children].required,
    },
    textPosition: {
        type: titleMetadata.props[titlePropNames.textPosition].type,
        defaultValue: titleMetadata.props[titlePropNames.textPosition].defaultValue,
        description: "Вирівнювання тексту по горизонталі.",
        required: titleMetadata.props[titlePropNames.textPosition].required,
    },
    textSize: {
        type: titleMetadata.props[titlePropNames.textSize].type,
        defaultValue: titleMetadata.props[titlePropNames.textSize].defaultValue,
        description: "Розмір шрифту.",
        required: titleMetadata.props[titlePropNames.textSize].required,
    },
    textWeight: {
        type: titleMetadata.props[titlePropNames.textWeight].type,
        defaultValue: titleMetadata.props[titlePropNames.textWeight].defaultValue,
        description: "Вага шрифту.",
        required: titleMetadata.props[titlePropNames.textWeight].required,
    },
    uppercase: {
        type: titleMetadata.props[titlePropNames.uppercase].type,
        defaultValue: titleMetadata.props[titlePropNames.uppercase].defaultValue,
        description: "Примусове переведення символів у верхній регістр.",
        required: titleMetadata.props[titlePropNames.uppercase].required,
    },
    className: {
        type: titleMetadata.props[titlePropNames.className].type,
        defaultValue: titleMetadata.props[titlePropNames.className].defaultValue,
        description: "Додаткові стилі Tailwind CSS.",
        required: titleMetadata.props[titlePropNames.className].required,
    },
};

export const titleDocumentation: ComponentDocumentation = {
    id: titleMetadata.id,
    name: titleMetadata.name,
    description:
        "Компонент для виведення заголовка сторінки чи секції (рендерить тег h2). " +
        "Має центровану позицію за замовчуванням та підвищену вагу шрифту.",
    componentPath: titleMetadata.componentPath,
    prop: getPropRows(titlePropsDocsConfig),
    sections: titleSections,
};
