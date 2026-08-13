import type { ReactNode } from "react";
import { AuthLoader } from "@/components/auth-loader";
import { Footer } from "@/components/frontend/footer";
import { Navbar } from "@/components/frontend/navbar";

interface FrontLayoutProps {
	children: ReactNode;
}

export default function FrontLayout({ children }: FrontLayoutProps) {
	return (
		<AuthLoader>
			<div className="min-h-screen bg-background">
				<Navbar />
				<main className="pt-16">{children}</main>
				<Footer />
			</div>
		</AuthLoader>
	);
}
