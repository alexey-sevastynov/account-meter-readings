import { MrButton } from "@/components/ui/button/Button";
import { buttonVariantKeys } from "@/enums/ui/button-variant-key";

export function MrAuthFormSocial() {
    const socialButtons = [
        { text: "Facebook", variant: buttonVariantKeys.outline },
        { text: "Microsoft", variant: buttonVariantKeys.outline },
    ];

    return (
        <div className="mt-6">
            <p className="text-sm text-gray-500 text-center mb-3">Or continue with</p>
            <div className="flex gap-3">
                {socialButtons.map((button) => (
                    <MrButton key={button.text} {...button} className="w-1/2" />
                ))}
            </div>
        </div>
    );
}
