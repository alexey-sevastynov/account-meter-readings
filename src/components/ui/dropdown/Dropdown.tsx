import { createContext, useContext, useState, useRef, useEffect, ReactNode, RefObject } from "react";
import { cn } from "@/lib/cn";

interface DropdownContextProps {
    isOpen: boolean;
    toggleDropdown: () => void;
    closeDropdown: () => void;
    triggerRef: RefObject<HTMLDivElement | null>;
    contentRef: RefObject<HTMLDivElement | null>;
}

const DropdownContext = createContext<DropdownContextProps | null>(null);

export function MrDropdown({ children, className }: { children: ReactNode; className?: string }) {
    const [isOpen, setIsOpen] = useState(false);
    const triggerRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    const toggleDropdown = () => setIsOpen((prev) => !prev);
    const closeDropdown = () => setIsOpen(false);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as Node;

            if (
                triggerRef.current &&
                contentRef.current &&
                !triggerRef.current.contains(target) &&
                !contentRef.current.contains(target)
            ) {
                closeDropdown();
            }
        };

        if (isOpen) document.addEventListener("mousedown", handleClickOutside);

        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [isOpen]);

    return (
        <DropdownContext.Provider value={{ isOpen, toggleDropdown, closeDropdown, triggerRef, contentRef }}>
            <div className={cn("relative inline-block", className)}>{children}</div>
        </DropdownContext.Provider>
    );
}

export function MrDropdownTrigger({ children, className }: { children: ReactNode; className?: string }) {
    const ctx = useContext(DropdownContext);

    if (!ctx) throw new Error("TdDropdownTrigger must be inside TdDropdown");

    return (
        // TODO: Remove eslint-disable-next-line

        // eslint-disable-next-line react-hooks/refs
        <div ref={ctx.triggerRef} onClick={ctx.toggleDropdown} className={cn("cursor-pointer", className)}>
            {children}
        </div>
    );
}

export function MrDropdownContent({ children, className }: { children: ReactNode; className?: string }) {
    const ctx = useContext(DropdownContext);

    if (!ctx) throw new Error("TdDropdownContent must be inside TdDropdown");

    // TODO: Remove eslint-disable-next-line

    // eslint-disable-next-line react-hooks/refs
    if (!ctx.isOpen) return null;

    return (
        <div
            // TODO: Remove eslint-disable-next-line

            // eslint-disable-next-line react-hooks/refs
            ref={ctx.contentRef}
            className={cn(
                "border-border absolute z-20 mt-2 min-w-[180px] rounded-lg border",
                "bg-popover text-popover-foreground shadow-md",
                "animate-in fade-in-0 zoom-in-95",
                className,
            )}
        >
            {children}
        </div>
    );
}

export function MrDropdownItem({
    children,
    onSelect,
    className,
    disabled = false,
}: {
    children: ReactNode;
    onSelect?: () => void;
    className?: string;
    disabled?: boolean;
}) {
    const ctx = useContext(DropdownContext);

    if (!ctx) throw new Error("TdDropdownItem must be inside TdDropdown");

    const handleClick = () => {
        if (disabled) return;

        onSelect?.();
        ctx.closeDropdown();
    };

    return (
        <div
            onClick={handleClick}
            className={cn(
                "cursor-pointer px-4 py-2 text-sm transition-colors",
                "hover:bg-accent hover:text-accent-foreground",
                "focus:bg-accent focus:text-accent-foreground",
                disabled && "pointer-events-none cursor-not-allowed opacity-50",
                className,
            )}
        >
            {children}
        </div>
    );
}
