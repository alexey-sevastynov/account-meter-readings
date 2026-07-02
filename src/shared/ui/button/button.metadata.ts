import { nameOf } from "@/shared/utils/name-of";
import { ButtonProps } from "@/shared/ui/button/Button";
import { buttonVariantKeys } from "@/shared/ui/button/button-variant-keys";
import { createUiMetadata } from "@/shared/utils/create-ui-metadata";

type ButtonPropsToDoc = Pick<
    ButtonProps,
    "text" | "iconName" | "iconColor" | "variant" | "loading" | "disabled" | "className" | "title"
>;

export const buttonPropNames = {
    text: nameOf<ButtonPropsToDoc>("text"),
    iconName: nameOf<ButtonPropsToDoc>("iconName"),
    iconColor: nameOf<ButtonPropsToDoc>("iconColor"),
    variant: nameOf<ButtonPropsToDoc>("variant"),
    loading: nameOf<ButtonPropsToDoc>("loading"),
    disabled: nameOf<ButtonPropsToDoc>("disabled"),
    className: nameOf<ButtonPropsToDoc>("className"),
    title: nameOf<ButtonPropsToDoc>("title"),
} as const;

export const buttonMetadata = createUiMetadata({
    id: "button",
    name: "Button (Кнопка)",
    componentPath: "src/shared/ui/button/Button.tsx",
    props: {
        [buttonPropNames.text]: {
            type: "string",
            defaultValue: "undefined",
            required: false,
        },
        [buttonPropNames.iconName]: {
            type: "IconName",
            defaultValue: "undefined",
            required: false,
        },
        [buttonPropNames.iconColor]: {
            type: "IconColor",
            defaultValue: "undefined",
            required: false,
        },
        [buttonPropNames.variant]: {
            type: Object.keys(buttonVariantKeys)
                .map((k) => `"${k}"`)
                .join(" | "),
            defaultValue: `"${buttonVariantKeys.primary}"`,
            required: false,
        },
        [buttonPropNames.loading]: {
            type: "boolean",
            defaultValue: "false",
            required: false,
        },
        [buttonPropNames.disabled]: {
            type: "boolean",
            defaultValue: "false",
            required: false,
        },
        [buttonPropNames.className]: {
            type: "string",
            defaultValue: "undefined",
            required: false,
        },
        [buttonPropNames.title]: {
            type: "string",
            defaultValue: "undefined",
            required: false,
        },
    },
});
