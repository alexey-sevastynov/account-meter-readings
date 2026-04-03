import { UIEvent, RefObject } from "react";

export function useSyncScroll(headRef: RefObject<HTMLDivElement | null>) {
    return (uiEvent: UIEvent<HTMLDivElement>) => {
        if (headRef.current) {
            headRef.current.scrollLeft = uiEvent.currentTarget.scrollLeft;
        }
    };
}
