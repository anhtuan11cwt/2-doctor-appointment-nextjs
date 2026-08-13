import type { ReactNode } from "react";
import { AuthLoader } from "@/components/auth-loader";
import { DashboardNav } from "@/components/dashboard/dashboard-nav";
import { Sidebar } from "@/components/dashboard/sidebar";

interface DashboardLayoutProps {
	children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
	return (
		<AuthLoader>
			<div className="min-h-screen bg-gray-100">
				<DashboardNav />
				<div className="flex pt-16">
					<Sidebar />
					<main className="ml-64 flex-1 p-8">{children}</main>
				</div>
			</div>
		</AuthLoader>
	);
}
