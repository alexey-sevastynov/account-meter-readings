import { MrIcon } from "@/components/ui/icon/Icon";
import { iconColors } from "@/enums/ui/icon-color";
import { IconName, iconNames } from "@/enums/ui/icon-name";
import { iconSizes } from "@/enums/ui/icon-size";
import { iconStrokeWidths } from "@/enums/ui/icon-stroke-width";

interface MrLogoProps {
    logoIconName?: IconName;
}

export function MrLogo({ logoIconName = iconNames.circleGauge }: MrLogoProps) {
    return (
        <div className="flex size-9 items-center justify-center rounded-md">
            <MrIcon
                name={logoIconName}
                color={iconColors.muted}
                size={iconSizes.large}
                strokeWidth={iconStrokeWidths.thick}
            />
        </div>
    );
}
