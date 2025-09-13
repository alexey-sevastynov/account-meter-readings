export const apiEndpointNames = {
    tasks: "/tasks",
    signIn: "/auth/signin",
    signUp: "/auth/signup",
} as const;

export type ApiEndpointName = (typeof apiEndpointNames)[keyof typeof apiEndpointNames];
