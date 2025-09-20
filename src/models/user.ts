import { UserRoleKey } from "@/enums/models/user-role-key";
import { UserStatusKey } from "@/enums/models/user-status-key";
import { BaseResource } from "@/types/base-resource";
import { Address } from "@/models/address";

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
