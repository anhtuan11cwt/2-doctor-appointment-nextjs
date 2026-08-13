import type { ReactNode } from "react";

interface DashboardLayoutProps {
	children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
	return (
		<div className="min-h-screen bg-gray-100">
			<div className="bg-white shadow">
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<div className="flex h-16 justify-between">
						<div className="flex items-center">
							<h1 className="font-bold text-xl">Bảng điều khiển</h1>
						</div>
					</div>
				</div>
			</div>
			<main className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">{children}</main>
		</div>
	);
}
