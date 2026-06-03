import { ResetPassword } from "@/modules/auth/components/reset-password/ResetPassword";
import { routeKeys } from "@/shared/constants/route-keys";
import { createMetadata } from "@/shared/utils/seo/create-metadata";

export const metadata = createMetadata({
    title: "Встановлення нового паролю",
    description: "Встановіть новий пароль для входу у ваш обліковий запис.",
    noIndex: true,
    canonicalPath: routeKeys.home,
});

export default async function ResetPasswordPage({ searchParams }: { searchParams: { token: string } }) {
    // TODO: remove "await" once Next.js stops requiring it (currently needed to avoid runtime error)
    // eslint-disable-next-line @typescript-eslint/await-thenable
    const { token } = await searchParams;

    return <ResetPassword token={token} />;
}
