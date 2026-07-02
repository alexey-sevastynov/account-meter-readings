import { nameOf } from "@/shared/utils/name-of";
import { TextProps } from "@/shared/ui/typography/text/Text";
import { textPositions } from "@/shared/ui/typography/text-position";
import { textSizes } from "@/shared/ui/typography/text-size";
import { textWeights } from "@/shared/ui/typography/text-weight";
import { createUiMetadata } from "@/shared/utils/create-ui-metadata";

export const textPropNames = {
    children: nameOf<TextProps>("children"),
    textPosition: nameOf<TextProps>("textPosition"),
    textSize: nameOf<TextProps>("textSize"),
    textWeight: nameOf<TextProps>("textWeight"),
    uppercase: nameOf<TextProps>("uppercase"),
    className: nameOf<TextProps>("className"),
} as const;

export const textMetadata = createUiMetadata({
    id: "text",
    name: "Text (Основний Текст)",
    componentPath: "src/shared/ui/typography/text/Text",
    props: {
        [textPropNames.children]: {
            type: "ReactNode",
            defaultValue: "undefined",
            required: true,
        },
        [textPropNames.textPosition]: {
            type: Object.values(textPositions)
                .map((v) => `"${v}"`)
                .join(" | "),
            defaultValue: `"${textPositions.left}"`,
            required: false,
        },
        [textPropNames.textSize]: {
            type: Object.values(textSizes)
                .map((v) => `"${v}"`)
                .join(" | "),
            defaultValue: `"${textSizes.md}"`,
            required: false,
        },
        [textPropNames.textWeight]: {
            type: Object.values(textWeights)
                .map((v) => `"${v}"`)
                .join(" | "),
            defaultValue: `"${textWeights.normal}"`,
            required: false,
        },
        [textPropNames.uppercase]: {
            type: "boolean",
            defaultValue: "false",
            required: false,
        },
        [textPropNames.className]: {
            type: "string",
            defaultValue: "undefined",
            required: false,
        },
    },
});
