"use client";

import { LayoutDashboard, LogIn } from "lucide-react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { CommandMenu } from "@/components/command-menu";
import { Logo } from "@/components/icons";
import { MainNav } from "@/components/main-nav";
import { MobileNav } from "@/components/mobile-nav";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";

export function SiteHeader() {
	const { data: session } = useSession();

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
						<Link href="/dashboard">
							<Button className="gap-2" size="sm" variant="outline">
								<LayoutDashboard className="size-4" />
								Dashboard
							</Button>
						</Link>
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
