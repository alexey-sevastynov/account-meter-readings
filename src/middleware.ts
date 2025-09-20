import { NextRequest, NextResponse } from "next/server";
import { cookieKeys } from "@/utils/cookie/cookie-key";
import { buildRoutePath } from "@/utils/build-route-path";
import { routeKeys } from "@/enums/url/route-key";

const redirectToSignInPath = buildRoutePath(routeKeys.signIn);
const redirectToHomePath = buildRoutePath(routeKeys.home);

export function middleware(request: NextRequest) {
    const token = request.cookies.get(cookieKeys.token)?.value;
    const isVerifiedMail = request.cookies.get(cookieKeys.isVerified)?.value === "true";
    const pathname = request.nextUrl.pathname;

    if (shouldRedirectToSignIn(pathname, isVerifiedMail, token)) {
        return performRedirect(redirectToSignInPath, request);
    }

    if (shouldRedirectToHome(pathname, isVerifiedMail, token)) {
        return performRedirect(redirectToHomePath, request);
    }

    return NextResponse.next();
}

// ⚠️ Important: Do NOT use variables or constants here.
// Next.js requires static string literals in the `matcher` array for middleware.
// Dynamic values or imported constants cannot be parsed at build time and will cause errors.
// Always write the paths directly as string literals.
export const config = {
    matcher: ["/", "/sign-in"],
};

function performRedirect(url: string, request: NextRequest) {
    return NextResponse.redirect(new URL(url, request.url));
}

function isPublicPath(pathname: string) {
    const publicPaths = [redirectToSignInPath];

    return publicPaths.includes(pathname);
}

function shouldRedirectToSignIn(pathname: string, isVerifiedMail: boolean, token?: string) {
    return (!token || !isVerifiedMail) && !isPublicPath(pathname);
}

function shouldRedirectToHome(pathname: string, isVerifiedMail: boolean, token?: string) {
    return token && isVerifiedMail && isPublicPath(pathname);
}
