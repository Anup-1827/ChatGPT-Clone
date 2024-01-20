import NextAuth from "next-auth"
import Google from "next-auth/providers/google"

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    Google({
      clientId: process.env.Google_Client_Id,
      clientSecret: process.env.Google_Secret_Key,
    }),
    // ...add more providers here
  ],
}

export default NextAuth(authOptions)