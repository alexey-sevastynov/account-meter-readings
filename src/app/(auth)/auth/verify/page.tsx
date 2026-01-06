"use server";

import MrAuthVerify from "@/components/auth/auth-verify/AuthVerify";

export default async function VerifyPage({ searchParams }: { searchParams: { token: string } }) {
    // TODO: remove "await" once Next.js stops requiring it (currently needed to avoid runtime error)
    // eslint-disable-next-line @typescript-eslint/await-thenable
    const { token } = await searchParams;

    return <MrAuthVerify token={token} />;
}
