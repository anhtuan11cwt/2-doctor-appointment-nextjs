import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";
import "./globals.css";
import { Inter } from "next/font/google";
import { Providers } from "@/components/providers";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
	description: "Hệ thống đặt lịch khám bệnh trực tuyến",
	title: "Đặt Lịch Khám Bệnh",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html
			className={cn("font-sans", inter.variable)}
			lang="vi"
			suppressHydrationWarning
		>
			<body>
				<Providers>
					<Toaster position="top-center" toastOptions={{ duration: 2000 }} />
					{children}
				</Providers>
			</body>
		</html>
	);
}
