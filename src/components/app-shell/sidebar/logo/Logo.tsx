import { MrIcon } from "@/components/ui/icon/Icon";
import { colorNames } from "@/enums/ui/color-name";
import { IconName, iconNames } from "@/enums/ui/icon-name";
import { iconSizes } from "@/enums/ui/icon-size";
import { iconStrokeWidths } from "@/enums/ui/icon-stroke-width";

interface MrLogoProps {
    logoIconName?: IconName;
}

export function MrLogo({ logoIconName = iconNames.circleGauge }: MrLogoProps) {
    return (
        <div className="flex size-9 items-center justify-center rounded-md bg-stone-200">
            <MrIcon
                name={logoIconName}
                color={colorNames.stone}
                size={iconSizes.large}
                strokeWidth={iconStrokeWidths.thick}
            />
        </div>
    );
}
