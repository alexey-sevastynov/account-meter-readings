export const authModeKeys = {
  signIn: "signin",
  signUp: "signup",
} as const;

export type AuthModeKey = (typeof authModeKeys)[keyof typeof authModeKeys];
