"use client";

import type { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "@/components/theme-provider";

export function Providers({
	children,
	session,
}: {
	children: React.ReactNode;
	session?: Session | null;
}) {
	return (
		<SessionProvider session={session}>
			<ThemeProvider
				attribute="class"
				defaultTheme="system"
				disableTransitionOnChange
				enableSystem
			>
				{children}
			</ThemeProvider>
		</SessionProvider>
	);
}
