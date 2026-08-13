import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CustomButtonProps {
	className?: string;
	href?: string;
	icon?: React.ReactNode;
	title: string;
	variant?: "default" | "outline" | "ghost";
}

export function CustomButton({
	className,
	href,
	icon,
	title,
	variant = "default",
}: CustomButtonProps) {
	const content = (
		<Button className={cn("gap-2", className)} variant={variant}>
			{title}
			{icon || <ArrowRight className="h-4 w-4" />}
		</Button>
	);

	if (href) {
		return <Link href={href}>{content}</Link>;
	}

	return content;
}
