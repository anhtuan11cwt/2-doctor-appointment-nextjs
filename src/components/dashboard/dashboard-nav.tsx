"use client";

import { LogOut, Settings, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { useState } from "react";
import toast from "react-hot-toast";

export function DashboardNav() {
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);
	const { data: session } = useSession();

	const handleLogout = async () => {
		setIsDropdownOpen(false);
		await signOut({ callbackUrl: "/login" });
		toast.success("Đăng xuất thành công!");
	};

	return (
		<nav className="fixed top-0 right-0 left-0 z-50 border-gray-200 border-b bg-white">
			<div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
				{/* Logo */}
				<Link className="flex items-center" href="/dashboard">
					<h2 className="font-bold text-blue-600 text-xl">Đặt Lịch Khám</h2>
				</Link>

				{/* Right side */}
				<div className="flex items-center gap-4">
					{/* User dropdown */}
					<div className="relative">
						<button
							className="flex items-center gap-3 rounded-lg p-2 transition-colors hover:bg-gray-100"
							onClick={() => setIsDropdownOpen(!isDropdownOpen)}
							type="button"
						>
							<Image
								alt="Avatar"
								className="h-8 w-8 rounded-full object-cover"
								height={32}
								src={session?.user?.image || "/profile_pic.png"}
								width={32}
							/>
							<div className="hidden text-left md:block">
								<p className="font-medium text-gray-900 text-sm">
									{session?.user?.name || "Người dùng"}
								</p>
								<p className="text-gray-500 text-xs">
									{session?.user?.email || ""}
								</p>
							</div>
						</button>

						{/* Dropdown menu */}
						{isDropdownOpen && (
							<div className="absolute right-0 mt-2 w-48 rounded-lg border border-gray-200 bg-white py-1 shadow-lg">
								<Link
									className="flex items-center gap-2 px-4 py-2 text-gray-700 text-sm hover:bg-gray-100"
									href="/dashboard/profile"
									onClick={() => setIsDropdownOpen(false)}
								>
									<User className="h-4 w-4" />
									Hồ sơ
								</Link>
								<Link
									className="flex items-center gap-2 px-4 py-2 text-gray-700 text-sm hover:bg-gray-100"
									href="/dashboard/settings"
									onClick={() => setIsDropdownOpen(false)}
								>
									<Settings className="h-4 w-4" />
									Cài đặt
								</Link>
								<hr className="my-1" />
								<button
									className="flex w-full items-center gap-2 px-4 py-2 text-red-600 text-sm hover:bg-gray-100"
									onClick={handleLogout}
									type="button"
								>
									<LogOut className="h-4 w-4" />
									Đăng xuất
								</button>
							</div>
						)}
					</div>
				</div>
			</div>
		</nav>
	);
}
