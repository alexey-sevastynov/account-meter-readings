import { Avatar, AvatarProps } from "@/shared/ui/avatar/Avatar";
import {
    ComponentDocumentation,
    DocumentationSection,
    ComponentPropsDocs,
} from "@/shared/types/ui/documentation";
import { createExample, stringifyValue, getPropRows } from "@/shared/utils/ui-documentation";
import {
    avatarMetadata,
    avatarPropNames,
    avatarSizes,
    avatarPixelSizes,
} from "@/shared/ui/avatar/avatar.metadata";

const sizeExamples = [
    createExample({
        id: `avatar-size-${avatarSizes.sm}`,
        title: `Малий розмір (${avatarSizes.sm})`,
        description: `Використовується в компактних інтерфейсах, списках коментарів або щільних таблицях. 
        Розмір ${avatarPixelSizes[avatarSizes.sm]} * ${avatarPixelSizes[avatarSizes.sm]} пікселів.`,
        tags: [`size: ${avatarSizes.sm}`, avatarPixelSizes[avatarSizes.sm]],
        preview: <Avatar name="Олена Петренко" size="sm" />,
        code: createAvatarUsageCode({ name: "Олена Петренко", size: avatarSizes.sm }),
    }),
    createExample({
        id: `avatar-size-${avatarSizes.md}`,
        title: `Середній розмір (${avatarSizes.md})`,
        description: `Стандартний розмір для профілів користувачів у верхній панелі або більшості форм. 
        Розмір ${avatarPixelSizes[avatarSizes.md]} * ${avatarPixelSizes[avatarSizes.md]} пікселів.`,
        tags: [`size: ${avatarSizes.md}`, avatarPixelSizes[avatarSizes.md], "default"],
        preview: <Avatar name="Олена Петренко" size="md" />,
        code: createAvatarUsageCode({ name: "Олена Петренко", size: avatarSizes.md }),
    }),
    createExample({
        id: `avatar-size-${avatarSizes.lg}`,
        title: `Великий розмір (${avatarSizes.lg})`,
        description: `Для сторінок налаштувань профілю або детальної інформації про користувача. 
        Розмір ${avatarPixelSizes[avatarSizes.lg]} * ${avatarPixelSizes[avatarSizes.lg]} пікселів.`,
        tags: [`size: ${avatarSizes.lg}`, avatarPixelSizes[avatarSizes.lg]],
        preview: <Avatar name="Олена Петренко" size="lg" />,
        code: createAvatarUsageCode({ name: "Олена Петренко", size: avatarSizes.lg }),
    }),
];

const fallbackExamples = [
    createExample({
        id: "avatar-fallback-initials",
        title: "Ініціали з повного імені",
        description: `Автоматично витягує перші літери імені та прізвища (до 2 символів), якщо зображення відсутнє. 
        Залежить від пропса \`${avatarPropNames.name}\`.`,
        tags: ["fallback", avatarPropNames.name],
        preview: <Avatar name="Олександр Сидоренко" />,
        code: createAvatarUsageCode({ name: "Олександр Сидоренко" }),
    }),
    createExample({
        id: "avatar-fallback-single",
        title: "Одно слово",
        description: "Якщо ім'я складається з одного слова, відображається одна велика літера.",
        tags: ["fallback", "single-word"],
        preview: <Avatar name="Марія" />,
        code: createAvatarUsageCode({ name: "Марія" }),
    }),
    createExample({
        id: "avatar-fallback-unknown",
        title: "Анонімний користувач",
        description: `Показує знак питання, якщо ім'я \`${avatarPropNames.name}\` 
        та зображення \`${avatarPropNames.src}\` не передані взагалі.`,
        tags: ["fallback", "anonymous"],
        preview: <Avatar />,
        code: createAvatarUsageCode({}),
    }),
];

const imageExamples = [
    createExample({
        id: "avatar-image-valid",
        title: "Зображення профілю",
        description: `Відображає фото користувача за посиланням, переданим у \`${avatarPropNames.src}\`, 
        зберігаючи правильні пропорції (aspect-square object-cover).`,
        tags: ["image", avatarPropNames.src],
        preview: (
            <Avatar
                name="Катерина Ковальчук"
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150"
            />
        ),
        code: createAvatarUsageCode({
            name: "Катерина Ковальчук",
            src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150",
        }),
    }),
    createExample({
        id: "avatar-image-invalid",
        title: "Помилка завантаження зображення",
        description: `Якщо посилання на фото недійсне, компонент плавно перемикається 
        на текстовий fallback на основі \`${avatarPropNames.name}\`.`,
        tags: ["image-error", "fallback"],
        preview: <Avatar name="Дмитро Шевченко" src="https://invalid-url-example.com/photo.jpg" />,
        code: createAvatarUsageCode({
            name: "Дмитро Шевченко",
            src: "https://invalid-url-example.com/photo.jpg",
        }),
    }),
];

const customExamples = [
    createExample({
        id: "avatar-custom-styling",
        title: `Кастомна стилізація (${avatarPropNames.className})`,
        description: `Використання \`${avatarPropNames.className}\` для додавання рамки (ring) 
        або зміщення навколо аватара.`,
        tags: [avatarPropNames.className, "ring"],
        preview: <Avatar name="Олена Петренко" className="ring-primary ring-2 ring-offset-2" />,
        code: createAvatarUsageCode({
            name: "Олена Петренко",
            className: "ring-2 ring-primary ring-offset-2",
        }),
    }),
];

const avatarSections: DocumentationSection[] = [
    {
        id: "avatar-sizes",
        title: "Розміри аватарок",
        description: `Опис доступних розмірів для компонента \`Avatar\` 
        за допомогою пропса \`${avatarPropNames.size}\`.`,
        componentPath: avatarMetadata.componentPath,
        examples: sizeExamples,
    },
    {
        id: "avatar-fallbacks",
        title: "Резервні текстові стани (Fallback)",
        description: `Коли зображення завантажується або недоступне, 
        показуються ініціали з імені \`${avatarPropNames.name}\`.`,
        componentPath: avatarMetadata.componentPath,
        examples: fallbackExamples,
    },
    {
        id: "avatar-images",
        title: "Завантаження реальних зображень",
        description: `Використання пропса \`${avatarPropNames.src}\` для рендерингу реального фото профілю.`,
        componentPath: avatarMetadata.componentPath,
        examples: imageExamples,
    },
    {
        id: "avatar-customizing",
        title: "Кастомізація зовнішнього вигляду",
        description: `Можливість додавати кастомні Tailwind класи для оформлення рамки, 
        граней чи тіней через \`${avatarPropNames.className}\`.`,
        componentPath: avatarMetadata.componentPath,
        examples: customExamples,
    },
];

const avatarPropsDocsConfig: ComponentPropsDocs<Required<AvatarProps>> = {
    name: {
        type: avatarMetadata.props[avatarPropNames.name].type,
        defaultValue: avatarMetadata.props[avatarPropNames.name].defaultValue,
        description: `Повне ім'я користувача для створення текстового fallback (ініціалів). 
        Наприклад, 'Іван Франко' -> 'ІФ'.`,
        required: avatarMetadata.props[avatarPropNames.name].required,
    },
    src: {
        type: avatarMetadata.props[avatarPropNames.src].type,
        defaultValue: avatarMetadata.props[avatarPropNames.src].defaultValue,
        description: `Посилання на зображення профілю користувача. 
        Якщо зображення не вдалося завантажити, показуються ініціали.`,
        required: avatarMetadata.props[avatarPropNames.src].required,
    },
    size: {
        type: avatarMetadata.props[avatarPropNames.size].type,
        defaultValue: avatarMetadata.props[avatarPropNames.size].defaultValue,
        description: `Фізичний розмір аватара: ${Object.keys(avatarSizes)
            .map((k) => `${k} (${avatarPixelSizes[k as keyof typeof avatarSizes]})`)
            .join(", ")}.`,
        required: avatarMetadata.props[avatarPropNames.size].required,
    },
    className: {
        type: avatarMetadata.props[avatarPropNames.className].type,
        defaultValue: avatarMetadata.props[avatarPropNames.className].defaultValue,
        description: "Додаткові CSS-класи Tailwind для кастомізації зовнішнього вигляду.",
        required: avatarMetadata.props[avatarPropNames.className].required,
    },
};

export const avatarDocumentation: ComponentDocumentation = {
    id: avatarMetadata.id,
    name: avatarMetadata.name,
    description: `Компонент для відображення профілю користувача. 
    Підтримує завантаження фотографій та автоматичну генерацію ініціалів у разі відсутності зображення 
    (на основі Radix UI Avatar).`,
    componentPath: avatarMetadata.componentPath,
    prop: getPropRows(avatarPropsDocsConfig),
    sections: avatarSections,
};

function createAvatarUsageCode(props: AvatarProps) {
    const imports = [`import { Avatar } from "${avatarMetadata.componentAliasPath}";`];
    const propEntries = [
        props.name ? `${avatarPropNames.name}=${stringifyValue(props.name)}` : null,
        props.src ? `${avatarPropNames.src}=${stringifyValue(props.src)}` : null,
        props.size && props.size !== avatarSizes.md ? `${avatarPropNames.size}="${props.size}"` : null,
        props.className ? `${avatarPropNames.className}="${props.className}"` : null,
    ].filter(Boolean);

    return `${imports.join("\n")}\n\n<Avatar ${propEntries.join(" ")} />`;
}
