import Image from "next/image";
import Link from "next/link";

interface SingleImageProps {
	alt: string;
	href: string;
	imageSrc: string;
}

function BrandSingleImage({ href, imageSrc, alt }: SingleImageProps) {
	return (
		<Link
			className="flex shrink-0 items-center justify-center grayscale transition-all duration-300 hover:grayscale-0"
			href={href}
			rel="noopener noreferrer"
			target="_blank"
		>
			<Image
				alt={alt}
				className="object-contain"
				height={48}
				src={imageSrc}
				style={{ height: "3rem", width: "auto" }}
				width={120}
			/>
		</Link>
	);
}

const brands = [
	{ alt: "Vercel", href: "https://vercel.com", imageSrc: "/vercel.svg" },
	{ alt: "Next.js", href: "https://nextjs.org", imageSrc: "/next.svg" },
	{ alt: "Stripe", href: "https://stripe.com", imageSrc: "/stripe_logo.png" },
	{
		alt: "Razorpay",
		href: "https://razorpay.com",
		imageSrc: "/razorpay_logo.png",
	},
	{ alt: "Globe", href: "#", imageSrc: "/globe.svg" },
];

export function Brands() {
	return (
		<section className="bg-gray-50 py-12">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<h2 className="mb-8 text-center font-medium text-gray-500 text-sm uppercase tracking-wider">
					Được tin tưởng bởi
				</h2>
				<div className="flex items-center gap-8 overflow-x-auto pb-2 md:grid md:grid-cols-3 md:justify-items-center md:overflow-visible md:pb-0 lg:grid-cols-5">
					{brands.map((brand) => (
						<BrandSingleImage
							alt={brand.alt}
							href={brand.href}
							imageSrc={brand.imageSrc}
							key={brand.alt}
						/>
					))}
				</div>
			</div>
		</section>
	);
}
