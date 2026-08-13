import type { Metadata } from "next";
import "./globals.css";

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
		<html lang="vi">
			<body>{children}</body>
		</html>
	);
}
