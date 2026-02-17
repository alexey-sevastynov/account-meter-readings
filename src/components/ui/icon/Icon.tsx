import { ComponentType } from "react";
import { cn } from "@/lib/cn";
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
    Coffee,
    ChevronRight,
    ChevronLeft,
    Users,
    LayoutDashboard,
    Receipt,
    CircleGauge,
} from "lucide-react";
import { IconColor, iconColors } from "@/enums/ui/icon-color";
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
    chevronLeft: ChevronLeft,
    chevronsRight: ChevronsRight,
    chevronRight: ChevronRight,
    download: Download,
    close: X,
    filter: Filter,
    settings: Settings,
    coffee: Coffee,
    users: Users,
    dashboard: LayoutDashboard,
    receipt: Receipt,
    circleGauge: CircleGauge,
} as const;

interface MrIconProps {
    name: IconName;
    id?: string;
    alt?: string;
    size?: IconSize;
    color?: IconColor;
    className?: string;
    strokeWidth?: IconStrokeWidth;
}

export function MrIcon({
    name,
    id,
    alt = iconNames[name],
    size = iconSizes.medium,
    color = iconColors.primary,
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
            className={cn(color, className)}
            strokeWidth={strokeWidth}
        />
    );
}
