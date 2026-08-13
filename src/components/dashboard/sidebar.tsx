"use client";

import {
	Calendar,
	LayoutDashboard,
	LogOut,
	Settings,
	Users,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const sidebarLinks = [
	{
		href: "/dashboard",
		icon: LayoutDashboard,
		label: "Tổng quan",
	},
	{
		href: "/dashboard/appointments",
		icon: Calendar,
		label: "Lịch hẹn",
	},
	{
		href: "/dashboard/patients",
		icon: Users,
		label: "Bệnh nhân",
	},
	{
		href: "/dashboard/settings",
		icon: Settings,
		label: "Cài đặt",
	},
];

export function Sidebar() {
	const pathname = usePathname();

	return (
		<aside className="fixed top-16 left-0 h-[calc(100vh-4rem)] w-64 border-gray-200 border-r bg-white">
			<div className="flex h-full flex-col">
				{/* Navigation links */}
				<nav className="flex-1 space-y-1 p-4">
					{sidebarLinks.map((link) => {
						const Icon = link.icon;
						const isActive = pathname === link.href;

						return (
							<Link
								className={`flex items-center gap-3 rounded-lg px-4 py-3 font-medium text-sm transition-all ${
									isActive
										? "bg-blue-50 text-blue-600"
										: "text-gray-700 hover:bg-gray-100"
								}`}
								href={link.href}
								key={link.href}
							>
								<Icon className="h-5 w-5" />
								{link.label}
							</Link>
						);
					})}
				</nav>

				{/* Logout button */}
				<div className="border-gray-200 border-t p-4">
					<button
						className="flex w-full items-center gap-3 rounded-lg px-4 py-3 font-medium text-gray-700 text-sm transition-all hover:bg-gray-100"
						type="button"
					>
						<LogOut className="h-5 w-5" />
						Đăng xuất
					</button>
				</div>
			</div>
		</aside>
	);
}
