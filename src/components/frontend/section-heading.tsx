import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface SectionHeadingProps {
	className?: string;
	href?: string;
	linkText?: string;
	title: string;
}

export function SectionHeading({
	title,
	className = "",
	href,
	linkText = "Xem tất cả",
}: SectionHeadingProps) {
	return (
		<div className={`flex items-center justify-between ${className}`}>
			<h2 className="font-bold text-2xl text-foreground md:text-3xl">
				{title}
			</h2>
			{href && (
				<Button
					className="gap-1 px-2 font-medium text-primary"
					nativeButton={false}
					render={<Link href={href} />}
					variant="ghost"
				>
					{linkText}
					<ArrowUpRight className="size-4" />
				</Button>
			)}
		</div>
	);
}
