"use client";

import { Loader2 } from "lucide-react";
import { useSession } from "next-auth/react";

export function AuthLoader({ children }: { children: React.ReactNode }) {
	const { status } = useSession();

	if (status === "loading") {
		return (
			<div className="flex min-h-screen items-center justify-center bg-white">
				<Loader2 className="h-8 w-8 animate-spin text-blue-600" />
			</div>
		);
	}

	return <>{children}</>;
}
