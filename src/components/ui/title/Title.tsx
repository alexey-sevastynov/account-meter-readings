import { ReactNode } from "react";

interface MrTitleProps {
    children: ReactNode;
}

export function MrTitle({ children }: MrTitleProps) {
    return (
        <h2 className="text-2xl mb-6 font-bold text-center text-gray-800 tracking-tight leading-snug">
            {children}
        </h2>
    );
}
