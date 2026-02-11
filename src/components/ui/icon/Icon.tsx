import { ComponentType } from "react";
import {
    Eye,
    EyeOff,
    ChevronDown,
    ChevronsUpDown,
    ChevronUp,
    GripVertical,
    ChevronsLeft,
    ChevronsRight,
    Download,
    X,
    Filter,
    Settings,
} from "lucide-react";
import { ColorName, colorNames } from "@/enums/ui/color-name";
import { IconName, iconNames } from "@/enums/ui/icon-name";
import { IconSize, iconSizes } from "@/enums/ui/icon-size";
import { IconStrokeWidth, iconStrokeWidths } from "@/enums/ui/icon-stroke-width";

interface IconComponentProps {
    size?: number;
    className?: string;
    id?: string;
    alt?: string;
    strokeWidth?: IconStrokeWidth;
}

const iconMap: Record<IconName, ComponentType<IconComponentProps>> = {
    eye: Eye,
    eyeOff: EyeOff,
    chevronDown: ChevronDown,
    chevronsUpDown: ChevronsUpDown,
    chevronUp: ChevronUp,
    gripVertical: GripVertical,
    chevronsLeft: ChevronsLeft,
    chevronsRight: ChevronsRight,
    download: Download,
    close: X,
    filter: Filter,
    settings: Settings,
} as const;

interface MrIconProps {
    name: IconName;
    id?: string;
    alt?: string;
    size?: IconSize;
    color?: ColorName;
    className?: string;
    strokeWidth?: IconStrokeWidth;
}

export function MrIcon({
    name,
    id,
    alt = iconNames[name],
    size = iconSizes.medium,
    color = colorNames.gray,
    className,
    strokeWidth = iconStrokeWidths.thin,
}: MrIconProps) {
    const IconComponent = iconMap[name];

    if (!IconComponent) return null;

    return (
        <IconComponent
            id={id}
            alt={alt}
            size={size}
            className={`${color} ${className ?? ""}`}
            strokeWidth={strokeWidth}
        />
    );
}
