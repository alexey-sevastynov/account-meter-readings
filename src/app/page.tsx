"use client";

import { useRouter } from "next/navigation";
import { useAppSelector } from "@/hooks/use-app-selector";
import { useAppDispatch } from "@/hooks/use-app-dispatch";
import { MrButton } from "@/components/ui/button/Button";
import { signOut } from "@/features/auth/slice";
import { buildRoutePath } from "@/utils/build-route-path";
import { routeKeys } from "@/enums/url/route-key";

export default function HomePage() {
    const router = useRouter();
    const dispatch = useAppDispatch();
    const userName = useAppSelector((state) => state.auth.userName);
    const redirectToSignInPath = buildRoutePath(routeKeys.signIn);

    const onLogout = () => {
        dispatch(signOut());
        router.replace(redirectToSignInPath);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-xl flex flex-col items-center">
                <h1 className="text-2xl font-bold mb-4">Welcome to Home, {userName}!</h1>
                <p className="mb-6 text-gray-600">You are successfully logged in.</p>
                <MrButton
                    text="Logout"
                    onClick={onLogout}
                    className="bg-red-500 hover:bg-red-600 text-white w-full"
                />
            </div>
        </div>
    );
}
