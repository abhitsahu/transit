import { createAuthClient } from "better-auth/react";
import { phoneNumberClient } from "better-auth/client/plugins"

export const authClient = createAuthClient({
    baseURL: process.env.BACKEND_APP_URL || 'https://api.transitco.in',
    fetchOptions: {
        credentials: 'include'
    },
    plugins: [
        phoneNumberClient()
    ],
});

export const { signIn, signOut, signUp, useSession, forgetPassword, changePassword, verifyEmail, sendVerificationEmail, resetPassword, phoneNumber } = authClient;
