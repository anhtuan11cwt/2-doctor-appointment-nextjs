"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";

import { Logo } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
	Sheet,
	SheetContent,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { docsConfig } from "@/config/docs";
import { cn } from "@/lib/utils";

export function MobileNav() {
	const [open, setOpen] = React.useState(false);
	const pathname = usePathname();

	return (
		<Sheet onOpenChange={setOpen} open={open}>
			<SheetTrigger
				render={
					<Button className="px-2 text-foreground md:hidden" variant="ghost" />
				}
			>
				<Menu className="size-5" />
				<span className="sr-only">Mở menu</span>
			</SheetTrigger>
			<SheetContent
				className="h-auto max-h-[80vh] gap-0 border-b py-4 md:hidden"
				side="top"
			>
				<SheetTitle className="sr-only">Menu điều hướng</SheetTitle>
				<div className="px-4 pb-3">
					<Link
						className="flex items-center space-x-2"
						href="/"
						onClick={() => setOpen(false)}
					>
						<Logo className="font-bold text-lg" />
					</Link>
				</div>
				<ScrollArea className="h-full max-h-[60vh]">
					<nav className="flex flex-col gap-1 px-4">
						{docsConfig.mainNav?.map((item) => (
							<Link
								className={cn(
									"rounded-md px-3 py-2 font-medium text-muted-foreground text-sm transition-colors hover:bg-muted hover:text-foreground",
									item.href === pathname && "bg-muted text-foreground",
								)}
								href={item.href || "/"}
								key={item.href}
								onClick={() => setOpen(false)}
							>
								{item.title}
							</Link>
						))}
					</nav>
				</ScrollArea>
			</SheetContent>
		</Sheet>
	);
}
