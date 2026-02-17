import { cn } from "@/lib/cn";

interface MrFloatingLabelProps {
    label: string;
    isFocused: boolean;
    hasValue: boolean;
}

const baseStyles = "absolute left-4 px-1 pointer-events-none transition-all duration-200 text-base";
const labelPositionDefault = "top-1/2 -translate-y-1/2 text-muted-foreground";
const labelPositionFocused = "top-0 -translate-y-1/2 text-primary text-sm";

export function MrFloatingLabel({ label, isFocused, hasValue }: MrFloatingLabelProps) {
    const isFloating = isFocused || hasValue;

    return (
        <span className={cn(baseStyles, isFloating ? labelPositionFocused : labelPositionDefault)}>
            {isFloating && (
                <span className="absolute inset-0 -z-10 rounded bg-[linear-gradient(to_top,var(--color-input)_50%,var(--color-background)_50%)]" />
            )}
            {label}
        </span>
    );
}
