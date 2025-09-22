import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { RouteKey, routeKeys } from "@/enums/url/route-key";

export function redirectToHome(router: AppRouterInstance) {
    const homePath = buildRoutePath(routeKeys.home);
    router.replace(homePath);
}

export function redirectToSignIn(router: AppRouterInstance) {
    const signInPath = buildRoutePath(routeKeys.signIn);
    router.replace(signInPath);
}

export function buildRoutePath(first: RouteKey, ...rest: RouteKey[]) {
    if (first === routeKeys.home) {
        return "/";
    }

    const allSegments = [first, ...rest];
    const cleanedSegments = allSegments.map((s) => s.replace(/^\/|\/$/g, ""));
    const joinedPath = cleanedSegments.join("/");
    const finalPath = "/" + joinedPath;

    return finalPath;
}
