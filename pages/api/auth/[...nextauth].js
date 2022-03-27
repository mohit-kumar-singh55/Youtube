import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { } from "../../../lib/youtube";

// async function refreshAccessToken(token) {
//     try {
//         spotifyApi.setAccessToken(token.accessToken);
//         spotifyApi.setRefreshToken(token.accessToken);

//         const { body: refreshedToken } = await spotifyApi.refreshAccessToken();

//         return {
//             ...token,
//             accessToken: refreshedToken.access_token,
//             accessTokenExpires: Date.now() + refreshedToken.expires_in * 1000,
//             refreshToken: refreshedToken.refresh_token ?? token.refreshToken
//         }
//     }
//     catch (e) {
//         return {
//             ...token,
//             error: 'RefreshAccessTokenError'
//         }
//     }
// }


export default NextAuth({
    // Configure one or more authentication providers
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            // authorization: "https://www.googleapis.com/auth/youtube.readonly",
        }),
        // ...add more providers here
    ],
    secret: process.env.JWT_SECRET,
    pages: {
        signIn: "/login"
    },
    callbacks: {
        async jwt({ token, account, user }) {
            // Initial SignIn
            if (account && user) {
                return {
                    ...token,
                    accessToken: account.access_token,
                    refreshToken: account.refresh_token,
                    accessTokenExpires: account.expires_at * 1000,
                }
            }

            // Return the token if it is not expired yet
            if (Date.now() < token.accessTokenExpires) return token;

            // Access Token has expired, so we need to refresh it...
            // return await refreshAccessToken(token);
            return token
        },
        async session({ session, token }) {
            session.user.accessToken = token.accessToken
            session.user.refreshToken = token.refreshToken
            session.user.uid = token.sub

            return session;
        }
    }
})