"use client";

import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

const footerLinks = {
	company: [
		{ href: "/about", label: "Về chúng tôi" },
		{ href: "/careers", label: "Tuyển dụng" },
		{ href: "/join/doctors", label: "Dành cho bác sĩ" },
		{ href: "/contact", label: "Liên hệ" },
	],
	legal: [
		{ href: "/privacy", label: "Chính sách bảo mật" },
		{ href: "/terms", label: "Điều khoản dịch vụ" },
		{ href: "/cookies", label: "Chính sách Cookie" },
	],
	services: [
		{ href: "/booking", label: "Đặt lịch khám" },
		{ href: "/doctors", label: "Tìm bác sĩ" },
		{ href: "/specialties", label: "Chuyên khoa" },
		{ href: "/symptoms", label: "Triệu chứng" },
	],
	support: [
		{ href: "/help", label: "Trợ giúp" },
		{ href: "/faq", label: "Câu hỏi thường gặp" },
		{ href: "/contact", label: "Liên hệ hỗ trợ" },
		{ href: "/feedback", label: "Phản hồi" },
	],
};

const socialLinks = [
	{
		color: "hover:text-blue-700",
		href: "#",
		icon: FaLinkedin,
		label: "LinkedIn",
	},
	{ color: "hover:text-red-600", href: "#", icon: FaYoutube, label: "YouTube" },
	{
		color: "hover:text-blue-600",
		href: "#",
		icon: FaFacebook,
		label: "Facebook",
	},
	{
		color: "hover:text-pink-600",
		href: "#",
		icon: FaInstagram,
		label: "Instagram",
	},
];

export function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="border-border border-t bg-background">
			<div className="mx-auto max-w-7xl px-8 py-12">
				<div className="grid grid-cols-2 gap-8 md:grid-cols-4">
					{/* Company */}
					<div>
						<h3 className="mb-4 font-semibold text-foreground text-sm uppercase tracking-wider">
							Công ty
						</h3>
						<ul className="space-y-3">
							{footerLinks.company.map((link) => (
								<li key={link.href}>
									<Link
										className="text-muted-foreground text-sm transition-colors hover:text-primary"
										href={link.href}
									>
										{link.label}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Services */}
					<div>
						<h3 className="mb-4 font-semibold text-foreground text-sm uppercase tracking-wider">
							Dịch vụ
						</h3>
						<ul className="space-y-3">
							{footerLinks.services.map((link) => (
								<li key={link.href}>
									<Link
										className="text-muted-foreground text-sm transition-colors hover:text-primary"
										href={link.href}
									>
										{link.label}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Support */}
					<div>
						<h3 className="mb-4 font-semibold text-foreground text-sm uppercase tracking-wider">
							Hỗ trợ
						</h3>
						<ul className="space-y-3">
							{footerLinks.support.map((link) => (
								<li key={link.href}>
									<Link
										className="text-muted-foreground text-sm transition-colors hover:text-primary"
										href={link.href}
									>
										{link.label}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Legal */}
					<div>
						<h3 className="mb-4 font-semibold text-foreground text-sm uppercase tracking-wider">
							Pháp lý
						</h3>
						<ul className="space-y-3">
							{footerLinks.legal.map((link) => (
								<li key={link.href}>
									<Link
										className="text-muted-foreground text-sm transition-colors hover:text-primary"
										href={link.href}
									>
										{link.label}
									</Link>
								</li>
							))}
						</ul>
					</div>
				</div>

				{/* Bottom section */}
				<div className="mt-12 flex flex-col items-center justify-between gap-4 border-border border-t pt-8 md:flex-row">
					<p className="text-muted-foreground text-sm">
						© {currentYear} Đặt Lịch Khám Bệnh. Bảo lưu mọi quyền.
					</p>
					<div className="flex items-center gap-4">
						{socialLinks.map((social) => {
							const Icon = social.icon;
							return (
								<Link
									aria-label={social.label}
									className={`text-gray-400 transition-colors ${social.color}`}
									href={social.href}
									key={social.label}
								>
									<Icon className="h-5 w-5" />
								</Link>
							);
						})}
					</div>
				</div>
			</div>
		</footer>
	);
}
