import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
  
export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.NEXT_GOOGLE_CLIENT_ID,
      clientSecret: process.env.NEXT_GOOGLE_CLIENT_SECRET,
    }),
  ],
  secret: process.env.NEXT_SECRET,
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
  },
  jwt: {
    encryption: true,
  },
};

export default NextAuth(authOptions);
