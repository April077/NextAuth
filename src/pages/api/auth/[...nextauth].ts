import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
  
export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.NEXT_GOOGLE_CLIENT_ID,
      clientSecret: process.env.NEXT_GOOGLE_CLIENT_SECRET,
    }),
    // ...add more providers here
  ],
  secret: process.env.NEXT_SECRET,
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
  },
  jwt: {
    encryption: true, // Fixed the typo here, changed "encrption" to "encryption"
  },
};

export default NextAuth(authOptions);
