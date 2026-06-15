"use client";

import { Icon } from "@/shared/ui/icon/Icon";
import { IconName, iconNames } from "@/shared/ui/icon/icon-name";
import { appToast } from "@/shared/lib/toast";
import { iconColors } from "@/shared/ui/icon/icon-color";
import { iconStrokeWidths } from "@/shared/ui/icon/icon-stroke-width";

interface InformationToastProps {
    iconName?: IconName;
    title: string;
    description?: string;
    id?: string;
    duration?: number;
}

export function InformationToast({
    iconName = iconNames.info,
    title,
    description,
    id,
    duration,
}: InformationToastProps) {
    return appToast.info(title, {
        id,
        duration,
        description,
        icon: <Icon name={iconName} color={iconColors.destructive} strokeWidth={iconStrokeWidths.normal} />,
    });
}
