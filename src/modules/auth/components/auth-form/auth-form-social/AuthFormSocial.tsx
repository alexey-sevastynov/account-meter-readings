import { Button } from "@/shared/ui/button/Button";
import { buttonVariantKeys } from "@/shared/ui/button/button-variant-keys";

export function AuthFormSocial() {
    const socialButtons = [
        { text: "Facebook", variant: buttonVariantKeys.outline },
        { text: "Microsoft", variant: buttonVariantKeys.outline },
    ];

    return (
        <div className="mt-6">
            <p className="mb-3 text-center text-sm text-gray-500">Or continue with</p>
            <div className="flex gap-3">
                {socialButtons.map((button) => (
                    <Button key={button.text} {...button} className="w-1/2" />
                ))}
            </div>
        </div>
    );
}
