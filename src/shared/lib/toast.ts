import { ReactNode } from "react";
import { ExternalToast, toast } from "sonner";

export const appToast = {
    success: (message: ReactNode, options?: ExternalToast) => toast.success(message, options),
    error: (message: ReactNode, options?: ExternalToast) => toast.error(message, options),
    info: (message: ReactNode, options?: ExternalToast) => toast(message, options),
};
