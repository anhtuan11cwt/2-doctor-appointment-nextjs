import {
	Check,
	LogIn,
	LogOut,
	type LucideIcon,
	Menu,
	Moon,
	Search,
	Settings,
	Sun,
	User,
	X,
} from "lucide-react";
import Image from "next/image";

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
			<Image
				alt="Đặt Lịch Khám"
				className="h-8 w-8"
				height={32}
				src="/logo.svg"
				width={32}
			/>
			{showText && <span className={className}>Đặt Lịch Khám</span>}
		</span>
	);
}
