import type { ReactNode } from "react";
import { Footer } from "@/components/frontend/footer";
import { SiteHeader } from "@/components/site-header";

interface FrontLayoutProps {
	children: ReactNode;
}

export default function FrontLayout({ children }: FrontLayoutProps) {
	return (
		<div className="min-h-screen bg-background">
			<SiteHeader />
			<main>{children}</main>
			<Footer />
		</div>
	);
}
