import {
	Check,
	LogIn,
	LogOut,
	type LucideIcon,
	Menu,
	Microscope,
	Moon,
	Search,
	Settings,
	Sun,
	User,
	X,
} from "lucide-react";

export type Icon = LucideIcon;

export const Icons = {
	check: Check,
	logIn: LogIn,
	logOut: LogOut,
	menu: Menu,
	moon: Moon,
	search: Search,
	settings: Settings,
	sun: Sun,
	user: User,
	x: X,
};

export function Logo({
	className,
	showText = true,
}: {
	className?: string;
	showText?: boolean;
}) {
	return (
		<span className="flex items-center gap-2">
			<Microscope className="size-8 text-primary" />
			{showText && <span className={className}>Đặt Lịch Khám</span>}
		</span>
	);
}
