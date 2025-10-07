import { cn } from "@/lib/cn";

interface MrFloatingLabelProps {
    label: string;
    isFocused: boolean;
    hasValue: boolean;
}

const baseStyles =
    "absolute left-4 bg-white px-1 text-gray-400 text-base transition-all duration-200 pointer-events-none";
const labelPositionDefault = "top-1/2 -translate-y-1/2 text-gray-400 text-base";
const labelPositionFocused = "top-0 -translate-y-1/2 text-sm text-blue-500";

export function MrFloatingLabel({ label, isFocused, hasValue }: MrFloatingLabelProps) {
    const isFloating = isFocused || hasValue;

    return (
        <span className={cn(baseStyles, isFloating ? labelPositionFocused : labelPositionDefault)}>
            {label}
        </span>
    );
}
