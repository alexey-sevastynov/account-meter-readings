import { SignInClient } from "@/app/(auth)/sign-in/SignInClient";
import { routeKeys } from "@/shared/constants/route-keys";
import { createMetadata } from "@/shared/utils/seo/create-metadata";

export const metadata = createMetadata({
    title: "Вхід в систему",
    noIndex: true,
    canonicalPath: routeKeys.signIn,
});

export default async function SignInPage() {
    return <SignInClient />;
}
