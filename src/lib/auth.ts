import { PrismaAdapter } from "@auth/prisma-adapter";
import bcrypt from "bcrypt";
import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { prisma } from "@/lib/db";

export const authOptions: NextAuthOptions = {
	adapter: PrismaAdapter(prisma) as NextAuthOptions["adapter"],
	callbacks: {
		async jwt({ token, user }) {
			if (user) {
				token.id = user.id;
				token.role = (user as { role?: string }).role ?? "USER";
			}
			return token;
		},
		async session({ session, token }) {
			if (session.user) {
				(session.user as { id: string }).id = token.id as string;
				(session.user as { role: string }).role = token.role as string;
			}
			return session;
		},
	},
	pages: {
		signIn: "/login",
	},
	providers: [
		CredentialsProvider({
			async authorize(credentials) {
				if (!credentials?.email || !credentials?.password) {
					throw new Error("Vui lòng nhập email và mật khẩu");
				}

				const user = await prisma.user.findUnique({
					where: { email: credentials.email },
				});

				if (!user) {
					throw new Error("Email không tồn tại");
				}

				if (!user.isVerified) {
					throw new Error("Tài khoản chưa được xác minh");
				}

				const isPasswordValid = await bcrypt.compare(
					credentials.password,
					user.password,
				);

				if (!isPasswordValid) {
					throw new Error("Mật khẩu không chính xác");
				}

				return {
					email: user.email,
					id: user.id,
					name: user.name,
					role: user.role,
				};
			},
			credentials: {
				email: { label: "Email", type: "email" },
				password: { label: "Mật khẩu", type: "password" },
			},
			name: "credentials",
		}),
	],
	secret: process.env.NEXTAUTH_SECRET,
	session: {
		maxAge: 30 * 24 * 60 * 60, // 30 days
		strategy: "jwt",
	},
};
