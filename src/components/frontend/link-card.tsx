import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

interface LinkCardProps {
	className?: string;
	href: string;
	title: string;
}

export function LinkCard({
	title,
	href,
	className = "bg-slate-800 text-slate-50",
}: LinkCardProps) {
	return (
		<Link
			className={`flex items-center justify-between rounded-md px-6 py-3 transition-all duration-300 hover:opacity-90 ${className}`}
			href={href}
		>
			<span className="font-medium">{title}</span>
			<FiArrowRight className="h-4 w-4" />
		</Link>
	);
}
