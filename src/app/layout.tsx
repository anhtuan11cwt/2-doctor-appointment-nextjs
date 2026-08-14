import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";
import "./globals.css";
import { Inter } from "next/font/google";
import { getServerSession } from "next-auth";
import { Providers } from "@/components/providers";
import { siteConfig } from "@/config/site";
import { authOptions } from "@/lib/auth";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
	alternates: {
		canonical: "/",
	},
	authors: [{ name: siteConfig.name }],
	creator: siteConfig.name,
	description: siteConfig.description,
	icons: {
		icon: "/favicon.ico",
	},
	keywords: [
		"đặt lịch khám bệnh",
		"bác sĩ",
		"chuyên khoa",
		"khám bệnh trực tuyến",
		"đặt lịch hẹn khám",
		"bác sĩ trực tuyến",
	],
	metadataBase: new URL(siteConfig.url),
	openGraph: {
		description: siteConfig.description,
		images: [
			{
				alt: siteConfig.name,
				height: 630,
				url: siteConfig.ogImage,
				width: 1200,
			},
		],
		locale: "vi_VN",
		siteName: siteConfig.name,
		title: siteConfig.name,
		type: "website",
		url: siteConfig.url,
	},
	title: {
		default: siteConfig.name,
		template: `%s - ${siteConfig.name}`,
	},
	twitter: {
		card: "summary_large_image",
		description: siteConfig.description,
		images: [siteConfig.ogImage],
		title: siteConfig.name,
	},
};

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const session = await getServerSession(authOptions);

	return (
		<html
			className={cn("font-sans", inter.variable)}
			lang="vi"
			suppressHydrationWarning
		>
			<body>
				<Providers session={session}>
					<Toaster position="top-center" toastOptions={{ duration: 2000 }} />
					{children}
				</Providers>
			</body>
		</html>
	);
}
