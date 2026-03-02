import { BaseResource } from "@/shared/types/base-resource";
import { UserRoleKey } from "@/modules/auth/enums/user-role-key";
import { UserStatusKey } from "@/modules/auth/enums/user-status-key";
import { Address } from "@/modules/auth/types/address";

export interface User extends BaseResource {
    userId: string;
    userName: string;
    email: string;
    password: string;
    userRole: UserRoleKey;
    userStatus: UserStatusKey;
    isVerified: boolean;
    addresses?: Address[];
    blockReason?: string;
    firstName?: string;
    lastName?: string;
    phoneNumber?: string;
}
