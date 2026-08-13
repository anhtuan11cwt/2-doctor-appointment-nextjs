import type { ReactNode } from "react";
import { Navbar } from "@/components/frontend/navbar";

interface FrontLayoutProps {
	children: ReactNode;
}

export default function FrontLayout({ children }: FrontLayoutProps) {
	return (
		<div className="min-h-screen bg-background">
			<Navbar />
			<main className="pt-16">{children}</main>
		</div>
	);
}
