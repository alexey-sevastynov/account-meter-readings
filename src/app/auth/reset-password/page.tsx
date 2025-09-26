"use server";

import { MrResetPassword } from "@/components/auth/reset-password/ResetPassword";

export default async function ResetPasswordPage({ searchParams }: { searchParams: { token: string } }) {
    // TODO: remove "await" once Next.js stops requiring it (currently needed to avoid runtime error)
    // eslint-disable-next-line @typescript-eslint/await-thenable
    const { token } = await searchParams;

    return <MrResetPassword token={token} />;
}
