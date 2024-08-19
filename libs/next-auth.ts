import NextAuth from "next-auth";
import type { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import EmailProvider from "next-auth/providers/email";
import config from "@/config";
import { Resend } from "resend";
import { PrismaClient } from "@prisma/client";
import { PrismaAdapter } from "@next-auth/prisma-adapter";

const prisma = new PrismaClient();

interface NextAuthOptionsExtended extends NextAuthOptions {
  adapter: any;
}

async function sendVerificationRequest(params: any) {
  const { identifier, url, provider, theme } = params;
  const { host } = new URL(url);
  // NOTE: You are not required to use `nodemailer`, use whatever you want.
  const resend = new Resend(process.env.RESEND_API_KEY);

  console.log("sending email");

  const sendEmail = await resend.emails.send({
    from: process.env.SEND_EMAIL_FROM,
    subject: "Login To MicroSassFast",
    to: identifier,
    html: `<h1>hello, ${url}, ${identifier}, ${provider}, ${theme}, ${host} </h1>`,
  });
  console.log("sendEmail", sendEmail);
}
export const authOptions: NextAuthOptionsExtended = {
  // Set any random key in .env.local
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    GoogleProvider({
      // Follow the "Login with Google" tutorial to get your credentials
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      async profile(profile) {
        return {
          id: profile.sub,
          name: profile.given_name ? profile.given_name : profile.name,
          email: profile.email,
          image: profile.picture,
          createdAt: new Date(),
        };
      },
    }),
    // Follow the "Login with Email" tutorial to set up your email server
    // Requires a Postgresql database. Set MONOGODB_URI env variable.
    // ?
    //  [
    EmailProvider({
      server: process.env.EMAIL_SERVER,
      from: process.env.NODEMAILER_SEND_EMAIL_FROM,
      sendVerificationRequest,
    }),
    // ]
    // : []),
  ],
  // New users will be saved in Database (Postgresql Atlas). Each user (model) has some fields like name, email, image, etc..
  // Requires a Postgresql database. Set MONOGODB_URI env variable.
  // Learn more about the model type: https://next-auth.js.org/v3/adapters/models
  adapter: PrismaAdapter(prisma),
  callbacks: {
    session: async ({ session, token }) => {
      if (session?.user) {
        session.user.id = token.sub;
      }
      return session;
    },
  },
  session: {
    strategy: "jwt",
  },
  theme: {
    brandColor: config.colors.main,
    // Add you own logo below. Recommended size is rectangle (i.e. 200x50px) and show your logo + name.
    // It will be used in the login flow to display your logo. If you don't add it, it will look faded.
    logo: `https://${config.domainName}/logoAndName.png`,
  },
};

export default NextAuth(authOptions);
