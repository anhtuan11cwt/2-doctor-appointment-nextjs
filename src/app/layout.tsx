import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Đặt Lịch Khám Bệnh",
  description: "Hệ thống đặt lịch khám bệnh trực tuyến",
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
