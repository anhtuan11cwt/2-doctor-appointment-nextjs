"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Logo } from "@/components/icons";
import { docsConfig } from "@/config/docs";
import { cn } from "@/lib/utils";

export function MainNav() {
	const pathname = usePathname();

	return (
		<div className="hidden items-center gap-6 md:flex">
			<Link className="hidden items-center space-x-2 md:flex" href="/">
				<Logo className="font-bold text-lg" />
			</Link>
			<nav className="hidden items-center gap-5 font-medium text-sm md:flex">
				{docsConfig.mainNav?.map((item) => (
					<Link
						className={cn(
							"text-muted-foreground transition-colors hover:text-foreground",
							item.href === pathname && "text-foreground",
						)}
						href={item.href || "/"}
						key={item.href}
					>
						{item.title}
					</Link>
				))}
			</nav>
		</div>
	);
}
