import { BaseResource } from "@/shared/types/base-resource";

export interface Address extends BaseResource {
    userId: string;
    country: string;
    region: string;
    city: string;
    street: string;
    houseNumber: string;
    apartment?: string;
    postalCode?: string;
}
