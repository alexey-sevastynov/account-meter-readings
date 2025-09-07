import { cn } from "@/lib/cn";

interface MrFloatingLabelProps {
    label: string;
    isFocused: boolean;
    hasValue: boolean;
}

const baseStyles = "absolute left-4 bg-white px-1 text-gray-400 text-base transition-all pointer-events-none";
const labelPositionFocused = "top-0 -translate-y-1/2 text-sm peer-focus:text-blue-500";
const labelPositionDefault = "top-1/2 -translate-y-1/2 text-gray-400 text-base";
const labelColorFocused = "text-blue-500";

export function MrFloatingLabel({ label, isFocused, hasValue }: MrFloatingLabelProps) {
    const labelPositionClass = hasValue ? labelPositionFocused : labelPositionDefault;
    const labelColorClass = isFocused ? labelColorFocused : "";

    return <span className={cn(baseStyles, labelPositionClass, labelColorClass)}>{label}</span>;
}
