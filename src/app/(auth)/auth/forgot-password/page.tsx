"use server";

import { ForgotPassword } from "@/modules/auth/components/forgot-password/AuthForgotPassword";

export default async function ForgotPasswordPage() {
    return <ForgotPassword />;
}
