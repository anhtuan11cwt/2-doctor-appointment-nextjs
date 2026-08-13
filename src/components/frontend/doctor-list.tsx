import { SectionHeading } from "./section-heading";

interface DoctorListProps {
	children: React.ReactNode;
	className?: string;
	href?: string;
	title?: string;
}

export function DoctorList({
	title = "Bác sĩ",
	className = "",
	children,
	href,
}: DoctorListProps) {
	return (
		<section className={`py-12 ${className}`}>
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<SectionHeading className="mb-8" href={href} title={title} />
				{children}
			</div>
		</section>
	);
}
