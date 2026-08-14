import type { LucideIcon } from "lucide-react";

export type NavItem = {
	title: string;
	href?: string;
	disabled?: boolean;
	external?: boolean;
	icon?: LucideIcon;
	label?: string;
	description?: string;
};

export type NavItemWithChildren = NavItem & {
	items: NavItemWithChildren[];
};

export type MainNavItem = NavItem & {
	items?: NavItemWithChildren[];
};

export type SidebarNavItem = NavItemWithChildren;

export type DocsConfig = {
	mainNav: MainNavItem[];
	sidebarNav: SidebarNavItem[];
};
