import * as SwitchPrimitives from "@radix-ui/react-switch";
import { cn } from "@/shared/lib/cn";
import { IconName } from "@/shared/ui/icon/icon-name";
import { Icon } from "@/shared/ui/icon/Icon";
import { iconSizes } from "@/shared/ui/icon/icon-size";
import { iconColors } from "@/shared/ui/icon/icon-color";

type SwitchProps = React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root> & {
    iconOn?: IconName;
    iconOff?: IconName;
};

export function Switch({ className, iconOn, iconOff, ...props }: SwitchProps) {
    return (
        <SwitchPrimitives.Root
            className={cn(
                "relative inline-flex h-6 w-11 cursor-pointer items-center rounded-full",
                "data-[state=checked]:bg-primary bg-gray-300 transition-colors",
                className,
            )}
            {...props}
        >
            <SwitchPrimitives.Thumb
                className={cn(
                    "flex h-5 w-5 items-center justify-center rounded-full bg-white shadow",
                    "translate-x-0 transition-transform data-[state=checked]:translate-x-5",
                )}
            >
                {iconOn && iconOff && props.checked !== undefined && (
                    <Icon
                        color={iconColors.muted}
                        name={props.checked ? iconOn : iconOff}
                        size={iconSizes.small}
                    />
                )}
            </SwitchPrimitives.Thumb>
        </SwitchPrimitives.Root>
    );
}
