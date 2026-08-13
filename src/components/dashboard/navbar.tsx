"use client";

import { LogOut, Menu, Settings, User } from "lucide-react";
import { useRouter } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import { useState } from "react";
import toast from "react-hot-toast";
import { Sidebar } from "@/components/dashboard/sidebar";
import { ModeToggle } from "@/components/mode-toggle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function Navbar() {
	const { data: session } = useSession();
	const [isSheetOpen, setIsSheetOpen] = useState(false);
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
		<header className="flex h-14 items-center justify-between border-b bg-background px-4 lg:px-6">
			{/* Mobile menu */}
			<div className="flex items-center gap-4">
				<Sheet onOpenChange={setIsSheetOpen} open={isSheetOpen}>
					<SheetTrigger className="inline-flex h-9 w-9 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground lg:hidden">
						<Menu className="h-5 w-5" />
						<span className="sr-only">Mở menu</span>
					</SheetTrigger>
					<SheetContent className="w-[280px] p-0" side="left">
						<Sidebar className="w-full" />
					</SheetContent>
				</Sheet>
				<h1 className="font-semibold text-lg lg:hidden">Đặt Lịch Khám</h1>
			</div>

			{/* Right side */}
			<div className="flex items-center gap-2">
				<ModeToggle />
				<DropdownMenu>
					<DropdownMenuTrigger className="relative inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground">
						<Avatar className="h-9 w-9">
							<AvatarImage
								alt={session?.user?.name || "User"}
								src={session?.user?.image || undefined}
							/>
							<AvatarFallback>{userInitials}</AvatarFallback>
						</Avatar>
					</DropdownMenuTrigger>
					<DropdownMenuContent align="end" className="w-56">
						<div className="flex items-center gap-2 p-2">
							<div className="flex flex-col space-y-1">
								<p className="font-medium text-sm">
									{session?.user?.name || "Người dùng"}
								</p>
								<p className="text-muted-foreground text-xs">
									{session?.user?.email || ""}
								</p>
							</div>
						</div>
						<DropdownMenuSeparator />
						<DropdownMenuItem onClick={() => router.push("/dashboard/profile")}>
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
			</div>
		</header>
	);
}
