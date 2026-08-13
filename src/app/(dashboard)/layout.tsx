import type { ReactNode } from "react";
import { AuthLoader } from "@/components/auth-loader";
import { Navbar } from "@/components/dashboard/navbar";
import { Sidebar } from "@/components/dashboard/sidebar";

interface DashboardLayoutProps {
	children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
	return (
		<AuthLoader>
			<div className="flex h-screen overflow-hidden">
				<Sidebar className="hidden w-[280px] border-r lg:flex" />
				<div className="flex flex-1 flex-col overflow-hidden">
					<Navbar />
					<main className="flex-1 overflow-y-auto p-4 lg:p-6">{children}</main>
				</div>
			</div>
		</AuthLoader>
	);
}
