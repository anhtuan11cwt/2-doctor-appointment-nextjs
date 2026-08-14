"use client";

import { LayoutDashboard, LogIn, LogOut, Settings, User } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import toast from "react-hot-toast";
import { CommandMenu } from "@/components/command-menu";
import { Logo } from "@/components/icons";
import { MainNav } from "@/components/main-nav";
import { MobileNav } from "@/components/mobile-nav";
import { ModeToggle } from "@/components/mode-toggle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function SiteHeader() {
	const { data: session } = useSession();
	const router = useRouter();

	const handleLogout = async () => {
		await signOut({ callbackUrl: "/login" });
		toast.success("Đăng xuất thành công!");
	};

	const userInitials = session?.user?.name
		? session.user.name
				.split(" ")
				.map((n) => n[0])
				.join("")
				.slice(0, 2)
				.toUpperCase()
		: "U";

	return (
		<header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
			<div className="mx-auto flex h-16 max-w-7xl items-center gap-4 px-4 sm:px-8">
				<MainNav />
				<Link className="flex items-center space-x-2 md:hidden" href="/">
					<Logo showText={false} />
				</Link>
				<div className="flex flex-1 items-center justify-end gap-4">
					<CommandMenu enableShortcut />
					<ModeToggle />
					{session ? (
						<DropdownMenu>
							<DropdownMenuTrigger className="relative inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground">
								<Avatar className="h-9 w-9">
									<AvatarImage
										alt={session.user?.name || "User"}
										src={session.user?.image || undefined}
									/>
									<AvatarFallback>{userInitials}</AvatarFallback>
								</Avatar>
							</DropdownMenuTrigger>
							<DropdownMenuContent align="end" className="w-56">
								<div className="flex items-center gap-2 p-2">
									<div className="flex flex-col space-y-1">
										<p className="font-medium text-sm">
											{session.user?.name || "Người dùng"}
										</p>
										<p className="text-muted-foreground text-xs">
											{session.user?.email || ""}
										</p>
									</div>
								</div>
								<DropdownMenuSeparator />
								<DropdownMenuItem onClick={() => router.push("/dashboard")}>
									<LayoutDashboard className="mr-2 h-4 w-4" />
									Dashboard
								</DropdownMenuItem>
								<DropdownMenuItem
									onClick={() => router.push("/dashboard/profile")}
								>
									<User className="mr-2 h-4 w-4" />
									Hồ sơ
								</DropdownMenuItem>
								<DropdownMenuItem
									onClick={() => router.push("/dashboard/settings")}
								>
									<Settings className="mr-2 h-4 w-4" />
									Cài đặt
								</DropdownMenuItem>
								<DropdownMenuSeparator />
								<DropdownMenuItem onClick={handleLogout}>
									<LogOut className="mr-2 h-4 w-4" />
									Đăng xuất
								</DropdownMenuItem>
							</DropdownMenuContent>
						</DropdownMenu>
					) : (
						<Link href="/login">
							<Button className="gap-2" size="sm">
								<LogIn className="size-4" />
								Đăng nhập
							</Button>
						</Link>
					)}
				</div>
				<MobileNav />
			</div>
		</header>
	);
}
