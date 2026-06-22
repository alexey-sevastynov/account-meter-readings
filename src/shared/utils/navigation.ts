import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { routeKeys } from "@/shared/constants/route-keys";

type RouteKey = (typeof routeKeys)[keyof typeof routeKeys];

export function redirectTo(router: AppRouterInstance, path: string) {
    const targetPath = path === routeKeys.home ? buildRoutePath(routeKeys.home) : path;

    router.replace(targetPath);
}

export function buildRoutePath(first: RouteKey, ...rest: RouteKey[]) {
    if (first === routeKeys.home) return "/";

    const allSegments = [first, ...rest];
    const cleanedSegments = allSegments.map((s) => s.replace(/^\/|\/$/g, ""));
    const joinedPath = cleanedSegments.join("/");
    const finalPath = "/" + joinedPath;

    return finalPath;
}
