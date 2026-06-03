import { ForgotPassword } from "@/modules/auth/components/forgot-password/AuthForgotPassword";
import { routeKeys } from "@/shared/constants/route-keys";
import { createMetadata } from "@/shared/utils/seo/create-metadata";

export const metadata = createMetadata({
    title: "Відновлення паролю",
    description: "Сторінка відновлення паролю до вашого облікового запису.",
    noIndex: true,
    canonicalPath: routeKeys.forgotPassword,
});

export default async function ForgotPasswordPage() {
    return <ForgotPassword />;
}
