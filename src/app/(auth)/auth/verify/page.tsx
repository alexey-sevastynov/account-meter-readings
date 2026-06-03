import AuthVerify from "@/modules/auth/components/auth-verify/AuthVerify";
import { routeKeys } from "@/shared/constants/route-keys";
import { createMetadata } from "@/shared/utils/seo/create-metadata";

export const metadata = createMetadata({
    title: "Підтвердження реєстрації",
    description: "Сторінка підтвердження електронної пошти та активації облікового запису.",
    noIndex: true,
    canonicalPath: routeKeys.home,
});

export default async function VerifyPage({ searchParams }: { searchParams: { token?: string } }) {
    // TODO: remove "await" once Next.js stops requiring it (currently needed to avoid runtime error)
    // eslint-disable-next-line @typescript-eslint/await-thenable
    const { token } = await searchParams;

    return <AuthVerify token={token} />;
}
