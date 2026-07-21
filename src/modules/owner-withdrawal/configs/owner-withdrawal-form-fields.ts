import { ResourceField } from "@/shared/types/resource-field";
import { resourceFieldTypes } from "@/shared/enums/resource-field-type";
import { OwnerWithdrawal } from "@/modules/owner-withdrawal/types/owner-withdrawal";
import { ownerWithdrawalLabels } from "@/modules/owner-withdrawal/constants/owner-withdrawal-labels";
import { ownerWithdrawalProps } from "@/modules/owner-withdrawal/constants/owner-withdrawal-props";

export const ownerWithdrawalFormFields: ResourceField<OwnerWithdrawal>[] = [
    {
        name: ownerWithdrawalProps.withdrawalDate as keyof OwnerWithdrawal,
        required: true,
        label: ownerWithdrawalLabels.withdrawalDate,
        type: resourceFieldTypes.date,
    },
    {
        name: ownerWithdrawalProps.amount as keyof OwnerWithdrawal,
        required: true,
        label: ownerWithdrawalLabels.amount,
        type: resourceFieldTypes.number,
    },
    {
        name: ownerWithdrawalProps.description as keyof OwnerWithdrawal,
        label: ownerWithdrawalLabels.description,
        type: resourceFieldTypes.text,
    },
];
