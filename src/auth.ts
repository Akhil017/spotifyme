import NextAuth from "next-auth";
import SpotifyProvider from "next-auth/providers/spotify";

const SPOTIFY_CLIENT_ID = process.env.AUTH_SPOTIFY_ID;
const SPOTIFY_CLIENT_SECRET = process.env.AUTH_SPOTIFY_SECRET;
const SECRET = process.env.AUTH_SECRET;

// if (!SPOTIFY_CLIENT_ID || !SPOTIFY_CLIENT_SECRET) {
//   throw new Error("Auth setup is incomplete");
// }

export const {
  auth,
  signIn,
  signOut,
  handlers: { GET, POST },
} = NextAuth({
  providers: [
    SpotifyProvider({
      authorization:
        "https://accounts.spotify.com/authorize?scope=user-read-private,user-read-email,user-read-recently-played,user-top-read,user-follow-read,user-follow-modify,playlist-read-private,playlist-read-collaborative,playlist-modify-public,user-read-currently-playing",
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
      // console.log("before returing");
      // console.log({ token, account, user, props });
      return token;
    },
    async session({ session, token }: any) {
      // console.log({ session, token });
      // console.log("inside session", token);
      if (token?.access_token) {
        session.accessToken = token.access_token;
      }
      return session;
    },
  },
});
