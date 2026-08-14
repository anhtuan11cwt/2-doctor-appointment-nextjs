"use client";

import {
	Calendar,
	Globe,
	LayoutDashboard,
	LineChart,
	Microscope,
	Settings,
	Stethoscope,
	Users,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const sidebarLinks = [
	{
		href: "/dashboard",
		icon: LayoutDashboard,
		label: "Tổng quan",
	},
	{
		badgeCount: 6,
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
		href: "/dashboard/doctors",
		icon: Stethoscope,
		label: "Bác sĩ",
	},
	{
		href: "/dashboard/analytics",
		icon: LineChart,
		label: "Thống kê",
	},
	{
		href: "/dashboard/settings",
		icon: Settings,
		label: "Cài đặt",
	},
	{
		href: "/",
		icon: Globe,
		label: "Về trang chủ",
	},
];

interface SidebarProps {
	className?: string;
}

export function Sidebar({ className }: SidebarProps) {
	const pathname = usePathname();

	return (
		<aside className={cn("flex h-full flex-col", className)}>
			<div className="flex h-14 items-center border-b px-6">
				<Link
					className="flex items-center gap-2 font-bold text-lg"
					href="/dashboard"
				>
					<Microscope className="size-6 text-primary" />
					<span className="text-primary">Đặt Lịch Khám</span>
				</Link>
			</div>
			<nav className="flex-1 space-y-1 overflow-y-auto p-4">
				{sidebarLinks.map((link) => {
					const Icon = link.icon;
					const isActive = pathname === link.href;

					return (
						<Link
							className={cn(
								"flex items-center gap-3 rounded-lg px-3 py-2 font-medium text-sm transition-colors",
								isActive
									? "bg-primary/10 text-primary"
									: "text-muted-foreground hover:bg-muted hover:text-foreground",
							)}
							href={link.href}
							key={link.href}
						>
							<Icon className="h-5 w-5" />
							<span className="flex-1">{link.label}</span>
							{link.badgeCount && (
								<Badge className="ml-auto" variant="secondary">
									{link.badgeCount}
								</Badge>
							)}
						</Link>
					);
				})}
			</nav>
		</aside>
	);
}
