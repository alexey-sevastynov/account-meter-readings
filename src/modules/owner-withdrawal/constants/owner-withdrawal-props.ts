import { nameOf } from "@/shared/utils/name-of";
import { OwnerWithdrawal } from "@/modules/owner-withdrawal/types/owner-withdrawal";

export const ownerWithdrawalProps: Record<keyof OwnerWithdrawal, string> = {
    _id: nameOf<OwnerWithdrawal>("_id"),
    withdrawalDate: nameOf<OwnerWithdrawal>("withdrawalDate"),
    amount: nameOf<OwnerWithdrawal>("amount"),
    description: nameOf<OwnerWithdrawal>("description"),
    createdAt: nameOf<OwnerWithdrawal>("createdAt"),
    updatedAt: nameOf<OwnerWithdrawal>("updatedAt"),
} as const;
