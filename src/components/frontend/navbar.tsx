"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const navigation = [
	{ href: "/", name: "Trang chủ" },
	{ href: "/doctors", name: "Bác sĩ" },
	{ href: "/specialties", name: "Chuyên khoa" },
	{ href: "/about", name: "Về chúng tôi" },
	{ href: "/contact", name: "Liên hệ" },
];

export function Navbar() {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 10);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
	};

	const closeMobileMenu = () => {
		setIsMobileMenuOpen(false);
	};

	return (
		<header
			className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
				isScrolled ? "bg-white/95 shadow-sm backdrop-blur-md" : "bg-white"
			}`}
		>
			<nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="flex h-16 items-center justify-between">
					{/* Logo */}
					<div className="flex-shrink-0">
						<Link
							className="flex items-center"
							href="/"
							onClick={closeMobileMenu}
						>
							<Image
								alt="Đặt Lịch Khám Bệnh"
								className="h-10 w-10"
								height={40}
								src="/logo.svg"
								width={40}
							/>
							<span className="ml-2 hidden font-bold text-primary text-xl sm:block">
								Đặt Lịch Khám
							</span>
						</Link>
					</div>

					{/* Desktop Navigation */}
					<div className="hidden items-center space-x-8 md:flex">
						{navigation.map((item) => (
							<Link
								className="group relative font-medium text-gray-700 transition-colors duration-200 hover:text-primary"
								href={item.href}
								key={item.name}
							>
								{item.name}
								<span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-primary transition-all duration-200 group-hover:w-full" />
							</Link>
						))}
					</div>

					{/* Desktop CTA */}
					<div className="hidden items-center space-x-4 md:flex">
						<Link
							className="font-medium text-gray-700 transition-colors duration-200 hover:text-primary"
							href="/login"
						>
							Đăng nhập
						</Link>
						<Link
							className="rounded-md bg-primary px-4 py-2 font-medium text-white transition-colors duration-200 hover:bg-primary/90"
							href="/register"
						>
							Đăng ký
						</Link>
					</div>

					{/* Mobile menu button */}
					<div className="flex items-center md:hidden">
						<button
							aria-expanded={isMobileMenuOpen}
							aria-label={isMobileMenuOpen ? "Đóng menu" : "Mở menu"}
							className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-inset"
							onClick={toggleMobileMenu}
							type="button"
						>
							{isMobileMenuOpen ? (
								<X aria-hidden="true" className="block h-6 w-6" />
							) : (
								<Menu aria-hidden="true" className="block h-6 w-6" />
							)}
						</button>
					</div>
				</div>
			</nav>

			{/* Mobile menu overlay */}
			{isMobileMenuOpen && (
				<div
					aria-hidden="true"
					className="fixed inset-0 z-40 bg-black/20 md:hidden"
					onClick={closeMobileMenu}
				/>
			)}

			{/* Mobile menu */}
			<div
				className={`absolute top-full right-0 left-0 z-50 transition-all duration-300 ease-in-out md:hidden ${
					isMobileMenuOpen
						? "pointer-events-auto translate-y-0 opacity-100"
						: "pointer-events-none -translate-y-2 opacity-0"
				}`}
			>
				<div className="border-t bg-white shadow-lg">
					<div className="space-y-1 px-4 pt-2 pb-3">
						{navigation.map((item) => (
							<Link
								className="block rounded-md px-3 py-3 font-medium text-base text-gray-700 transition-colors duration-200 hover:bg-gray-50 hover:text-primary"
								href={item.href}
								key={item.name}
								onClick={closeMobileMenu}
							>
								{item.name}
							</Link>
						))}
					</div>
					<div className="border-gray-200 border-t pt-4 pb-3">
						<div className="space-y-3 px-4">
							<Link
								className="block w-full rounded-md border border-primary px-4 py-2 text-center font-medium text-primary transition-colors duration-200 hover:bg-primary/5"
								href="/login"
								onClick={closeMobileMenu}
							>
								Đăng nhập
							</Link>
							<Link
								className="block w-full rounded-md bg-primary px-4 py-2 text-center font-medium text-white transition-colors duration-200 hover:bg-primary/90"
								href="/register"
								onClick={closeMobileMenu}
							>
								Đăng ký
							</Link>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
}
