import { PrismaClient } from "@rakhal/db";
import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import sendEmail from "./sendEmail";
const prisma = new PrismaClient();
export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
  advanced: {
    database: {
      generateId: false,
    },
  },
  user: {
    additionalFields: {
      role: {
        type: "string",
        required: true,
        default: "user",
        input: false,
      },
      lang: {
        type: "string",
        required: false,
        defaultValue: "en",
      },
    },
  },
  emailVerification: {
    sendOnSignUp: true,
    autoSignInAfterVerification: true,

    sendVerificationEmail: async ({ user, url, token }, request) => {
      await sendEmail({
        to: user.email,
        subject: "Verify your email address",
        text: `Click the link to verify your email: ${url}`,
      });
    },
  },
  emailAndPassword:{
    enabled:true,  requireEmailVerification: true,
    sendResetPassword: async ({ user, url, token }, request) => {
        await sendEmail({
            to: user.email,
            subject: 'Reset your password',
            text: `Click the link to reset your password: ${url}`
        })
    }
  }
});

export type Session = typeof auth.$Infer.Session;
