"use client";

import * as DialogPrimitive from "@radix-ui/react-dialog";
import { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { VoidFunc } from "@/types/getter-setter-functions";
import { ModalWindowSize, modalWindowSizes } from "@/enums/ui/modal-window-size";
import { MrIcon } from "@/components/ui/icon/Icon";
import { iconNames } from "@/enums/ui/icon-name";

interface ModalWindowProps {
    open: boolean;
    onOpenChange: VoidFunc<boolean>;
    title?: string;
    description?: string;
    children: ReactNode;
    footer?: ReactNode;
    size?: ModalWindowSize;
}

export function MrModalWindow({
    open,
    onOpenChange,
    title,
    description,
    children,
    footer,
    size = modalWindowSizes.md,
}: ModalWindowProps) {
    const sizeClasses = {
        sm: "max-w-md",
        md: "max-w-lg",
        lg: "max-w-2xl",
    };

    return (
        <DialogPrimitive.Root open={open} onOpenChange={onOpenChange}>
            <DialogPrimitive.Portal>
                <DialogPrimitive.Overlay className="data-[state=open]:animate-in data-[state=closed]:animate-out fixed inset-0 z-50 bg-black/80" />

                <DialogPrimitive.Content
                    className={cn(
                        "fixed top-1/2 left-1/2 z-50 w-full -translate-x-1/2 -translate-y-1/2",
                        "bg-background border p-6 shadow-lg sm:rounded-lg",
                        "data-[state=open]:animate-in data-[state=closed]:animate-out",
                        sizeClasses[size],
                    )}
                >
                    {(title || description) && (
                        <div className="mb-4 space-y-1">
                            {title && (
                                <DialogPrimitive.Title className="text-foreground text-md font-semibold">
                                    {title}
                                </DialogPrimitive.Title>
                            )}
                            {description && (
                                <DialogPrimitive.Description className="text-muted-foreground text-sm">
                                    {description}
                                </DialogPrimitive.Description>
                            )}
                        </div>
                    )}
                    <div className="py-2">{children}</div>
                    {footer && <div className="mt-6 flex justify-end gap-2">{footer}</div>}
                    <DialogPrimitive.Close className="absolute top-4 right-4 cursor-pointer opacity-70 hover:opacity-100">
                        <MrIcon name={iconNames.close} />
                    </DialogPrimitive.Close>
                </DialogPrimitive.Content>
            </DialogPrimitive.Portal>
        </DialogPrimitive.Root>
    );
}
