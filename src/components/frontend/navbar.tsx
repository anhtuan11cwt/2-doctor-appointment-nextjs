"use client";

import { ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const navigation = [
	{ href: "/", name: "Trang chủ" },
	{ hasMegaMenu: true, href: "/doctors", name: "Bác sĩ" },
	{ hasMegaMenu: true, href: "/specialties", name: "Chuyên khoa" },
	{ href: "/about", name: "Về chúng tôi" },
	{ href: "/contact", name: "Liên hệ" },
];

const megaMenuData = {
	doctors: [
		{
			description: "Top bác sĩ được đánh giá cao",
			href: "/doctors/featured",
			name: "Bác sĩ nổi bật",
		},
		{
			description: "Bác sĩ có lịch trống sớm nhất",
			href: "/doctors/available",
			name: "Bác sĩ gần đây",
		},
		{
			description: "Tìm bác sĩ theo lĩnh vực",
			href: "/doctors/by-specialty",
			name: "Bác sĩ theo chuyên khoa",
		},
		{
			description: "Xem phản hồi từ bệnh nhân",
			href: "/doctors/reviews",
			name: "Đánh giá bệnh nhân",
		},
	],
	specialties: [
		{
			description: "Khám bệnh tổng quát",
			href: "/specialties/general-physician",
			name: "Tổng quát",
		},
		{
			description: "Da liễu và thẩm mỹ",
			href: "/specialties/dermatologist",
			name: "Da liễu",
		},
		{
			description: "Chăm sóc trẻ em",
			href: "/specialties/pediatricians",
			name: "Nhi khoa",
		},
		{
			description: "Hệ thần kinh",
			href: "/specialties/neurologist",
			name: "Thần kinh",
		},
		{
			description: "Kiểm tra tim và mạch máu",
			href: "/specialties/cardiology",
			name: "Tim mạch",
		},
		{
			description: "Tiêu hóa và gan mật",
			href: "/specialties/gastroenterology",
			name: "Tiêu hóa",
		},
	],
};

const mobileMenuData = [
	{
		items: [
			{ href: "/specialties/general", name: "Khám tổng quát" },
			{ href: "/specialties/dermatology", name: "Khám da liễu" },
			{ href: "/specialties/pediatrics", name: "Khám nhi" },
			{ href: "/specialties/cardiology", name: "Khám tim mạch" },
		],
		slug: "top-booked",
		title: "Đặt lịch phổ biến",
	},
	{
		items: [
			{ href: "/doctors/featured", name: "Bác sĩ nổi bật" },
			{ href: "/doctors/available", name: "Bác sĩ gần đây" },
			{ href: "/doctors/by-specialty", name: "Bác sĩ theo chuyên khoa" },
		],
		slug: "doctors",
		title: "Bác sĩ",
	},
	{
		items: [
			{ href: "/specialties/general-physician", name: "Tổng quát" },
			{ href: "/specialties/dermatologist", name: "Da liễu" },
			{ href: "/specialties/pediatricians", name: "Nhi khoa" },
			{ href: "/specialties/neurologist", name: "Thần kinh" },
		],
		slug: "specialists",
		title: "Chuyên khoa",
	},
	{
		items: [
			{ href: "/symptoms/headache", name: "Đau đầu" },
			{ href: "/symptoms/fever", name: "Sốt" },
			{ href: "/symptoms/stomach-ache", name: "Đau bụng" },
			{ href: "/symptoms/fatigue", name: "Mệt mỏi" },
		],
		slug: "symptoms",
		title: "Triệu chứng",
	},
];

export function Navbar() {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);
	const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
	const [expandedMobileCategory, setExpandedMobileCategory] = useState<
		string | null
	>(null);
	const timeoutRef = useRef<NodeJS.Timeout | null>(null);

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
		setExpandedMobileCategory(null);
	};

	const toggleMobileCategory = (slug: string) => {
		setExpandedMobileCategory(expandedMobileCategory === slug ? null : slug);
	};

	const handleMouseEnter = (slug: string) => {
		if (timeoutRef.current) {
			clearTimeout(timeoutRef.current);
		}
		setActiveDropdown(slug);
	};

	const handleMouseLeave = () => {
		timeoutRef.current = setTimeout(() => {
			setActiveDropdown(null);
		}, 100);
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
							<div
								className="relative"
								key={item.name}
								onMouseEnter={() =>
									item.hasMegaMenu && handleMouseEnter(item.name)
								}
								onMouseLeave={() => item.hasMegaMenu && handleMouseLeave()}
								role="menuitem"
								tabIndex={0}
							>
								<Link
									className="group flex items-center gap-1 font-medium text-gray-700 transition-colors duration-200 hover:text-primary"
									href={item.hasMegaMenu ? "#" : item.href}
									onClick={(e) => {
										if (item.hasMegaMenu) {
											e.preventDefault();
										}
									}}
								>
									{item.name}
									{item.hasMegaMenu && (
										<ChevronDown
											className={`h-4 w-4 transition-transform duration-200 ${
												activeDropdown === item.name ? "rotate-180" : ""
											}`}
										/>
									)}
									<span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-primary transition-all duration-200 group-hover:w-full" />
								</Link>

								{/* Desktop Mega Menu Dropdown */}
								{item.hasMegaMenu && activeDropdown === item.name && (
									<div
										className="absolute top-full left-1/2 z-50 mt-2 w-80 -translate-x-1/2 rounded-lg bg-white p-4 shadow-xl"
										onMouseEnter={() => handleMouseEnter(item.name)}
										onMouseLeave={handleMouseLeave}
										role="menu"
									>
										<div className="grid grid-cols-1 gap-1">
											{megaMenuData[
												item.name === "Bác sĩ" ? "doctors" : "specialties"
											]?.map((menuItem) => (
												<Link
													className="block rounded-md p-3 transition-colors hover:bg-gray-50"
													href={menuItem.href}
													key={menuItem.href}
												>
													<div className="font-medium text-gray-900">
														{menuItem.name}
													</div>
													<div className="text-gray-500 text-sm">
														{menuItem.description}
													</div>
												</Link>
											))}
										</div>
									</div>
								)}
							</div>
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
				className={`absolute top-full right-0 left-0 z-50 max-h-[80vh] overflow-y-auto transition-all duration-300 ease-in-out md:hidden ${
					isMobileMenuOpen
						? "pointer-events-auto translate-y-0 opacity-100"
						: "pointer-events-none -translate-y-2 opacity-0"
				}`}
			>
				<div className="border-t bg-white shadow-lg">
					{/* Simple navigation links */}
					<div className="space-y-1 px-4 pt-4 pb-2">
						{navigation.map((item) => (
							<div key={item.name}>
								{item.hasMegaMenu ? (
									<button
										className="flex w-full items-center justify-between rounded-md px-3 py-2 font-medium text-gray-900 hover:bg-gray-50"
										onClick={() =>
											toggleMobileCategory(
												item.name === "Bác sĩ" ? "doctors" : "specialties",
											)
										}
										type="button"
									>
										<span>{item.name}</span>
										<ChevronDown
											className={`h-4 w-4 transition-transform duration-200 ${
												expandedMobileCategory ===
												(item.name === "Bác sĩ" ? "doctors" : "specialties")
													? "rotate-180"
													: ""
											}`}
										/>
									</button>
								) : (
									<Link
										className="block rounded-md px-3 py-2 font-medium text-gray-900 hover:bg-gray-50"
										href={item.href}
										onClick={closeMobileMenu}
									>
										{item.name}
									</Link>
								)}

								{/* Collapsible mega menu items */}
								{item.hasMegaMenu &&
									expandedMobileCategory ===
										(item.name === "Bác sĩ" ? "doctors" : "specialties") && (
										<div className="ml-4 space-y-1 border-gray-100 border-l-2 pl-4">
											{megaMenuData[
												item.name === "Bác sĩ" ? "doctors" : "specialties"
											]?.map((menuItem) => (
												<Link
													className="block rounded-md py-2 text-gray-600 text-sm hover:text-primary"
													href={menuItem.href}
													key={menuItem.href}
													onClick={closeMobileMenu}
												>
													{menuItem.name}
												</Link>
											))}
										</div>
									)}
							</div>
						))}
					</div>

					{/* More categories - collapsible */}
					<div className="border-gray-100 border-t px-4 py-2">
						<button
							className="flex w-full items-center justify-between rounded-md px-3 py-2 font-medium text-gray-900 hover:bg-gray-50"
							onClick={() => toggleMobileCategory("more")}
							type="button"
						>
							<span>Thêm danh mục</span>
							<ChevronDown
								className={`h-4 w-4 transition-transform duration-200 ${
									expandedMobileCategory === "more" ? "rotate-180" : ""
								}`}
							/>
						</button>

						{expandedMobileCategory === "more" && (
							<div className="ml-4 space-y-1 border-gray-100 border-l-2 pl-4">
								{mobileMenuData.slice(2).map((category) => (
									<div key={category.slug}>
										<div className="py-2 font-medium text-gray-900 text-sm">
											{category.title}
										</div>
										{category.items.map((item) => (
											<Link
												className="block py-1 text-gray-600 text-sm hover:text-primary"
												href={item.href}
												key={item.href}
												onClick={closeMobileMenu}
											>
												{item.name}
											</Link>
										))}
									</div>
								))}
							</div>
						)}
					</div>

					{/* CTA buttons */}
					<div className="border-gray-100 border-t px-4 py-4">
						<div className="space-y-2">
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
