import { AuthOptions, NextAuthOptions } from "next-auth";

import { PrismaAdapter } from "@auth/prisma-adapter";

import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import type { Adapter } from "next-auth/adapters";
import { db } from "@/prisma/db";
// more providers at https://next-auth.js.org/providers
export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(db) as Adapter,
  debug: true,
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/auth",
  },
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID || "",
      clientSecret: process.env.GITHUB_SECRET || "",
      profile(profile) {
        const nameParts = (profile.name || profile.login || "").split(" ");
        return {
          id: profile.id.toString(),
          name: profile.name || profile.login,
          firstName: nameParts[0] || "GitHub", // Fallback
          lastName: nameParts[1] || "User", // Fallback
          phone: `github_${profile.id}`, // Generate unique identifier
          image: profile.avatar_url,
          email: profile.email,
          role: "USER",
        };
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
      profile(profile) {
        return {
          id: profile.sub,
          name: profile.name || `${profile.given_name} ${profile.family_name}`,
          firstName: profile.given_name || "Google",
          lastName: profile.family_name || "User",
          phone: `google_${profile.sub}`, // Generate unique identifier
          role: "USER",
          image: profile.picture,
          email: profile.email,
        };
      },
    }),
    // CredentialsProvider({
    //   name: "Credentials",
    //   credentials: {
    //     email: { label: "Email", type: "text", placeholder: "jb@gmail.com" },
    //     password: { label: "Password", type: "password" },
    //   },
    //   async authorize(credentials) {
    //     try {
    //       // console.log(
    //       //   "Authorize function called with credentials:",
    //       //   credentials
    //       // );
    //       // Check if user credentials are Correct
    //       if (!credentials?.email || !credentials?.password) {
    //         throw { error: "No Inputs Found", status: 401 };
    //       }
    //       // console.log("Pass 1 checked ");
    //       //Check if user exists
    //       const existingUser = await db.user.findUnique({
    //         where: { email: credentials.email },
    //       });

    //       if (!existingUser) {
    //         console.log("No user found");
    //         throw { error: "No user found", status: 401 };
    //       }

    //       // console.log("Pass 2 Checked");
    //       // console.log(existingUser);
    //       let passwordMatch: boolean = false;
    //       //Check if Password is correct
    //       if (existingUser && existingUser.password) {
    //         // if user exists and password exists
    //         passwordMatch = await compare(
    //           credentials.password,
    //           existingUser.password
    //         );
    //       }
    //       if (!passwordMatch) {
    //         // console.log("Password incorrect");
    //         throw { error: "Password Incorrect", status: 401 };
    //       }
    //       // console.log("Pass 3 Checked");
    //       const user = {
    //         id: existingUser.id,
    //         name: existingUser.name,
    //         firstName: existingUser.firstName,
    //         lastName: existingUser.lastName,
    //         phone: existingUser.phone,
    //         image: existingUser.image,
    //         email: existingUser.email,
    //         role: existingUser.role,
    //       };
    //       //
    //       // console.log("User Compiled");
    //       // console.log(user);
    //       return user;
    //     } catch (error) {
    //       // console.log("aLL Failed");
    //       // console.log(error);
    //       throw { error: "Something went wrong", status: 401 };
    //     }
    //   },
    // }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      // Allow credential logins to pass through
      if (account?.provider === "credentials") {
        return true;
      }

      // For OAuth providers (Google, GitHub)
      if (
        account &&
        (account.provider === "google" || account.provider === "github")
      ) {
        try {
          // Check if user exists with this email
          const existingUser = await db.user.findUnique({
            where: { email: user.email! },
            include: { accounts: true },
          });

          // If user exists but no account for this provider
          if (
            existingUser &&
            !existingUser.accounts.some(
              (acc) => acc.provider === account.provider
            )
          ) {
            // Link this account to the existing user
            await db.account.create({
              data: {
                userId: existingUser.id,
                type: account.type,
                provider: account.provider,
                providerAccountId: account.providerAccountId,
                refresh_token: account.refresh_token,
                access_token: account.access_token,
                expires_at: account.expires_at,
                token_type: account.token_type,
                scope: account.scope,
                id_token: account.id_token,
                session_state: account.session_state,
              },
            });

            return true;
          }

          // User exists and already has this provider account
          return true;
        } catch (error) {
          console.error("Error in signIn callback:", error);
          return false;
        }
      }

      return true;
    },
    async jwt({ token, user, account, profile }) {
      console.log("JWT callback - initial token:", token);
      console.log("JWT callback - user:", user);
      if (user) {
        // Fetch the complete user data from the database
        const dbUser = await db.user.findUnique({
          where: { email: user.email as string },
        });
        console.log("JWT callback - dbUser:", dbUser);
        if (dbUser) {
          token.id = dbUser.id;
          token.name = dbUser.name;
          token.email = dbUser.email;
          token.picture = dbUser.image;
          token.role = dbUser.role;
          token.firstName = dbUser.firstName;
          token.lastName = dbUser.lastName;
          token.phone = dbUser.phone;
        } else {
          console.error("User not found in database:", user.email);
        }
      }
      console.log("JWT callback - final token:", token);
      return token;
    },
    async session({ session, token }) {
      if (session.user && token) {
        session.user.id = token.id as string;
        session.user.name = token.name as string;
        session.user.email = token.email as string;
        session.user.image = token.picture as string;
        session.user.role = token.role as string;
        session.user.firstName = token.firstName as string;
        session.user.lastName = token.lastName as string;
        session.user.phone = token.phone as string;
      }
      return session;
    },
  },
};
