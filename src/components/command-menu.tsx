"use client";

import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import * as React from "react";

import { Button } from "@/components/ui/button";
import {
	Command,
	CommandDialog,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
	CommandSeparator,
	CommandShortcut,
} from "@/components/ui/command";
import { docsConfig } from "@/config/docs";
import { cn } from "@/lib/utils";

interface CommandMenuProps {
	className?: string;
	enableShortcut?: boolean;
	placeholder?: string;
	variant?: "header" | "hero";
}

export function CommandMenu({
	className,
	placeholder = "Tìm bác sĩ, chuyên khoa, triệu chứng...",
	enableShortcut = false,
	variant = "header",
}: CommandMenuProps) {
	const [open, setOpen] = React.useState(false);
	const router = useRouter();

	React.useEffect(() => {
		if (!enableShortcut) return;

		const down = (e: KeyboardEvent) => {
			if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
				e.preventDefault();
				setOpen((open) => !open);
			}
		};
		document.addEventListener("keydown", down);
		return () => document.removeEventListener("keydown", down);
	}, [enableShortcut]);

	const runCommand = React.useCallback(
		(href: string) => {
			setOpen(false);
			router.push(href);
		},
		[router],
	);

	const navItems = docsConfig.mainNav ?? [];
	const accountItems = [
		{ href: "/login", title: "Đăng nhập" },
		{ href: "/register", title: "Đăng ký" },
		{ href: "/dashboard", title: "Bảng điều khiển" },
	];

	return (
		<>
			{variant === "hero" ? (
				<button
					className={cn(
						"group flex h-14 w-full max-w-2xl items-center justify-start rounded-full bg-white px-4 py-4 text-left text-gray-400 shadow-lg ring-1 ring-gray-200 transition-all hover:bg-white hover:shadow-xl hover:ring-primary/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary",
						className,
					)}
					onClick={() => setOpen(true)}
					type="button"
				>
					<span className="flex-1 truncate">{placeholder}</span>
					<span className="rounded-full bg-primary p-3 text-primary-foreground transition-colors group-hover:bg-primary/90">
						<Search className="size-5 fill-0" />
					</span>
				</button>
			) : (
				<Button
					className={cn(
						"relative hidden w-full justify-start rounded-lg px-3 text-muted-foreground shadow-none sm:flex sm:w-44 sm:pr-12 md:w-56 lg:w-64",
						className,
					)}
					onClick={() => setOpen(true)}
					variant="ghost"
				>
					<Search className="size-4 fill-0" />
					<span className="ml-2 truncate">Tìm kiếm...</span>
					<CommandShortcut className="absolute right-2 hidden h-6 items-center gap-1 rounded border bg-transparent px-1.5 font-medium font-mono text-[10px] sm:flex">
						<span>Ctrl</span>K
					</CommandShortcut>
				</Button>
			)}
			<CommandDialog onOpenChange={setOpen} open={open}>
				<Command>
					<CommandInput placeholder={placeholder} />
					<CommandList>
						<CommandEmpty>Không tìm thấy kết quả.</CommandEmpty>
						<CommandGroup heading="Điều hướng">
							{navItems.map((item) => (
								<CommandItem
									key={item.href}
									onSelect={() => item.href && runCommand(item.href)}
								>
									{item.title}
								</CommandItem>
							))}
						</CommandGroup>
						<CommandSeparator />
						<CommandGroup heading="Tài khoản">
							{accountItems.map((item) => (
								<CommandItem
									key={item.href}
									onSelect={() => runCommand(item.href)}
								>
									{item.title}
								</CommandItem>
							))}
						</CommandGroup>
					</CommandList>
				</Command>
			</CommandDialog>
		</>
	);
}
