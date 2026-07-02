import { nameOf } from "@/shared/utils/name-of";
import { TitleProps } from "@/shared/ui/typography/title/Title";
import { textPositions } from "@/shared/ui/typography/text-position";
import { textSizes } from "@/shared/ui/typography/text-size";
import { textWeights } from "@/shared/ui/typography/text-weight";
import { createUiMetadata } from "@/shared/utils/create-ui-metadata";

export const titlePropNames = {
    children: nameOf<TitleProps>("children"),
    textPosition: nameOf<TitleProps>("textPosition"),
    textSize: nameOf<TitleProps>("textSize"),
    textWeight: nameOf<TitleProps>("textWeight"),
    uppercase: nameOf<TitleProps>("uppercase"),
    className: nameOf<TitleProps>("className"),
} as const;

export const titleMetadata = createUiMetadata({
    id: "title",
    name: "Title (Заголовок)",
    componentPath: "src/shared/ui/typography/title/Title",
    props: {
        [titlePropNames.children]: {
            type: "ReactNode",
            defaultValue: "undefined",
            required: true,
        },
        [titlePropNames.textPosition]: {
            type: Object.values(textPositions)
                .map((v) => `"${v}"`)
                .join(" | "),
            defaultValue: `"${textPositions.center}"`,
            required: false,
        },
        [titlePropNames.textSize]: {
            type: Object.values(textSizes)
                .map((v) => `"${v}"`)
                .join(" | "),
            defaultValue: `"${textSizes.xxl}"`,
            required: false,
        },
        [titlePropNames.textWeight]: {
            type: Object.values(textWeights)
                .map((v) => `"${v}"`)
                .join(" | "),
            defaultValue: `"${textWeights.bold}"`,
            required: false,
        },
        [titlePropNames.uppercase]: {
            type: "boolean",
            defaultValue: "false",
            required: false,
        },
        [titlePropNames.className]: {
            type: "string",
            defaultValue: "undefined",
            required: false,
        },
    },
});
