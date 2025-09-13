import { RouteKey, routeKeys } from "@/enums/url/route-key";

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
