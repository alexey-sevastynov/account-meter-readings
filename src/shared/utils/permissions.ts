import { userRoleKeys } from "@/shared/enums/user-role-key";

export function isAdmin(role?: string) {
    return role === userRoleKeys.admin;
}
