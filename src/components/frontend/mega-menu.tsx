"use client";

import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const megaMenuData = [
	{
		items: [
			{
				description: "Kiểm tra sức khỏe định kỳ",
				href: "/specialties/general",
				name: "Khám tổng quát",
			},
			{
				description: "Chăm sóc và điều trị da",
				href: "/specialties/dermatology",
				name: "Khám da liễu",
			},
			{
				description: "Chăm sóc sức khỏe trẻ em",
				href: "/specialties/pediatrics",
				name: "Khám nhi",
			},
			{
				description: "Kiểm tra tim và mạch máu",
				href: "/specialties/cardiology",
				name: "Khám tim mạch",
			},
		],
		slug: "top-booked",
		title: "Đặt lịch phổ biến",
	},
	{
		items: [
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
		slug: "doctors",
		title: "Bác sĩ",
	},
	{
		items: [
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
		],
		slug: "specialists",
		title: "Chuyên khoa",
	},
	{
		items: [
			{
				description: "Tìm bác sĩ trị đau đầu",
				href: "/symptoms/headache",
				name: "Đau đầu",
			},
			{
				description: "Khám khi bị sốt",
				href: "/symptoms/fever",
				name: "Sốt",
			},
			{
				description: "Kiểm tra đau bụng",
				href: "/symptoms/stomach-ache",
				name: "Đau bụng",
			},
			{
				description: "Khám sức khỏe tổng quát",
				href: "/symptoms/fatigue",
				name: "Mệt mỏi",
			},
		],
		slug: "symptoms",
		title: "Triệu chứng",
	},
];

export function MegaMenu() {
	const [isOpen, setIsOpen] = useState(false);
	const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	const handleDropdownEnter = (slug: string) => {
		setActiveDropdown(slug);
	};

	const handleDropdownLeave = () => {
		setActiveDropdown(null);
	};

	return (
		<div className="relative">
			{/* Desktop Mega Menu */}
			<div className="hidden lg:block">
				<div className="bg-primary/95 backdrop-blur-md">
					<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
						<div className="flex items-center justify-between py-3">
							<div className="flex items-center space-x-8">
								{megaMenuData.map((category) => (
									<button
										className="relative"
										key={category.slug}
										onMouseEnter={() => handleDropdownEnter(category.slug)}
										onMouseLeave={handleDropdownLeave}
										type="button"
									>
										<span className="flex items-center space-x-1 font-medium text-gray-50 transition-colors hover:text-white">
											<span>{category.title}</span>
											<ChevronDown className="h-4 w-4" />
										</span>

										{/* Dropdown */}
										{activeDropdown === category.slug && (
											<div className="absolute top-full left-0 z-50 mt-2 w-80 rounded-lg bg-white p-4 shadow-xl">
												<div className="grid grid-cols-1 gap-2">
													{category.items.map((item) => (
														<Link
															className="block rounded-md p-3 transition-colors hover:bg-gray-50"
															href={item.href}
															key={item.href}
														>
															<div className="font-medium text-gray-900">
																{item.name}
															</div>
															<div className="text-gray-500 text-sm">
																{item.description}
															</div>
														</Link>
													))}
												</div>
											</div>
										)}
									</button>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Mobile Menu Button */}
			<div className="lg:hidden">
				<button
					aria-expanded={isOpen}
					aria-label={isOpen ? "Đóng menu" : "Mở menu"}
					className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary"
					onClick={toggleMenu}
					type="button"
				>
					{isOpen ? (
						<X aria-hidden="true" className="block h-6 w-6" />
					) : (
						<Menu aria-hidden="true" className="block h-6 w-6" />
					)}
				</button>
			</div>

			{/* Mobile Menu */}
			{isOpen && (
				<div className="absolute top-full right-0 left-0 z-50 lg:hidden">
					<div className="border-t bg-white shadow-lg">
						<div className="space-y-1 px-4 pt-2 pb-3">
							{megaMenuData.map((category) => (
								<div key={category.slug}>
									<div className="px-3 py-2 font-medium text-gray-900">
										{category.title}
									</div>
									{category.items.map((item) => (
										<Link
											className="block rounded-md px-3 py-2 text-gray-600 text-sm hover:bg-gray-50 hover:text-primary"
											href={item.href}
											key={item.href}
											onClick={() => setIsOpen(false)}
										>
											{item.name}
										</Link>
									))}
								</div>
							))}
						</div>
					</div>
				</div>
			)}
		</div>
	);
}
