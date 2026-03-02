"use server";

import { MrForgotPassword } from "@/modules/auth/components/forgot-password/AuthForgotPassword";

export default async function ForgotPasswordPage() {
    return <MrForgotPassword />;
}
