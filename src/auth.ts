import { NextAuthConfig } from "next-auth";
import SpotifyProvider from "next-auth/providers/spotify";

const SPOTIFY_CLIENT_ID = process.env.AUTH_SPOTIFY_ID;
const SPOTIFY_CLIENT_SECRET = process.env.AUTH_SPOTIFY_SECRET;
const SECRET = process.env.AUTH_SECRET;

if (!SPOTIFY_CLIENT_ID || !SPOTIFY_CLIENT_SECRET) {
  throw new Error("Auth setup is incomplete");
}

export const authOptions: NextAuthConfig = {
  providers: [
    SpotifyProvider({
      authorization:
        "https://accounts.spotify.com/authorize?scope=user-read-email,playlist-read-private,playlist-modify-private,playlist-modify-public",
      clientId: SPOTIFY_CLIENT_ID,
      clientSecret: SPOTIFY_CLIENT_SECRET,
    }),
  ],
  secret: SECRET,
  callbacks: {
    async jwt({ token, account, user, ...props }) {
      if (account) {
        token.access_token = account.access_token;
      }
      console.log("before returing");
      // console.log({ token, account, user, props });
      return token;
    },
    async session({ session, token }: any) {
      console.log("inside session", token);
      return {
        ...session,
        token,
      };
    },
  },
};
