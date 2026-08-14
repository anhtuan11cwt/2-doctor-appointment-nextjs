import Image from "next/image";
import Link from "next/link";
import type { ServiceProps } from "./types";

interface ServiceCardProps {
	service: ServiceProps;
}

export function ServiceCard({ service }: ServiceCardProps) {
	return (
		<Link
			className="group block overflow-hidden rounded-md bg-muted transition-all duration-300 hover:bg-muted/80"
			href={`/services/${service.slug}`}
		>
			<div className="relative aspect-[4/3] overflow-hidden">
				<Image
					alt={service.title}
					className="object-cover transition-transform duration-300 group-hover:scale-105"
					fill
					sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
					src={service.image}
				/>
			</div>
			<div className="p-4">
				<h3 className="font-medium text-foreground text-sm">{service.title}</h3>
				<p className="mt-1 text-muted-foreground text-xs">936 lịch trống</p>
			</div>
		</Link>
	);
}
