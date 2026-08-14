import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import type { ReactNode } from "react";
import { Navbar } from "@/components/dashboard/navbar";
import { Sidebar } from "@/components/dashboard/sidebar";
import { authOptions } from "@/lib/auth";

interface DashboardLayoutProps {
	children: ReactNode;
}

export default async function DashboardLayout({
	children,
}: DashboardLayoutProps) {
	const session = await getServerSession(authOptions);

	if (!session) {
		redirect("/login");
	}

	return (
		<div className="flex h-screen overflow-hidden">
			<Sidebar className="hidden w-[280px] border-r lg:flex" />
			<div className="flex flex-1 flex-col overflow-hidden">
				<Navbar user={session.user} />
				<main className="flex-1 overflow-y-auto p-4 lg:p-6">{children}</main>
			</div>
		</div>
	);
}
