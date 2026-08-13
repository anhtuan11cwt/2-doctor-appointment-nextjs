"use client";

import { Check, Moon, Sun, SunMoon } from "lucide-react";
import { useTheme } from "next-themes";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ModeToggle() {
	const { setTheme, theme } = useTheme();

	return (
		<DropdownMenu>
			<DropdownMenuTrigger className="inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground">
				<Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
				<Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
				<span className="sr-only">Đổi giao diện</span>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end" className="w-40">
				<DropdownMenuItem onClick={() => setTheme("light")}>
					<Sun className="mr-2 h-4 w-4" />
					Sáng
					{theme === "light" && <Check className="ml-auto h-4 w-4" />}
				</DropdownMenuItem>
				<DropdownMenuItem onClick={() => setTheme("dark")}>
					<Moon className="mr-2 h-4 w-4" />
					Tối
					{theme === "dark" && <Check className="ml-auto h-4 w-4" />}
				</DropdownMenuItem>
				<DropdownMenuItem onClick={() => setTheme("system")}>
					<SunMoon className="mr-2 h-4 w-4" />
					Hệ thống
					{theme === "system" && <Check className="ml-auto h-4 w-4" />}
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
