import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
export const { auth, handlers } = NextAuth({ providers: [Google], })