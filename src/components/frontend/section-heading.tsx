import Link from "next/link";

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
			<h2 className="font-bold text-2xl text-gray-900 md:text-3xl">{title}</h2>
			{href && (
				<Link
					className="font-medium text-primary text-sm transition-colors hover:text-primary/80"
					href={href}
				>
					{linkText}
				</Link>
			)}
		</div>
	);
}
