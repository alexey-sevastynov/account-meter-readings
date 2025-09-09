export const apiEndpointNames = {
    tasks: "/tasks",
} as const;

export type ApiEndpointName = (typeof apiEndpointNames)[keyof typeof apiEndpointNames];
