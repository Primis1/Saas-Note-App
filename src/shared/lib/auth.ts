// import { PrismaAdapter } from "@auth/prisma-adapter";
import  { type NextAuthOptions } from 'next-auth'
import { dbClient } from './_db'
import { compact } from 'lodash'
import GitHubProvider from "next-auth/providers/github";
import { env } from '../config';

export const authOptions: NextAuthOptions = {
    //   adapter: PrismaAdapter(dbClient) as AuthOptions["adapter"],

    session: {
        strategy: 'jwt'
    },
    providers: compact([
        env.GITHUB_ID &&
        env.GITHUB_SECRET &&
        GitHubProvider({
          clientId: env.GITHUB_ID,
          clientSecret: env.GITHUB_SECRET,
        }),
        env.GOOGLE_ID &&
        env.GOOGLE_SECRET &&
        GitHubProvider({
          clientId: env.GOOGLE_ID,
          clientSecret: env.GOOGLE_SECRET,
        }),
    ]),
    callbacks: {
        session: ({session, token}) => {
            console.log("Session is here", session)
            return session
        },
        jwt: ({token, user}) => {
            console.log("Session is here", token)
            return token
        } 
    }
}