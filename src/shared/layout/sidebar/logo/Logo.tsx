import { MrIcon } from "@/shared/ui/icon/Icon";
import { iconColors } from "@/shared/ui/icon/icon-color";
import { IconName, iconNames } from "@/shared/ui/icon/icon-name";
import { iconSizes } from "@/shared/ui/icon/icon-size";
import { iconStrokeWidths } from "@/shared/ui/icon/icon-stroke-width";

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
