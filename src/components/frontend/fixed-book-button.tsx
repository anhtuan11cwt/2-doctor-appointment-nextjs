"use client";

import { Calendar } from "lucide-react";

interface FixedBookButtonProps {
	price: number;
}

export function FixedBookButton({ price }: FixedBookButtonProps) {
	return (
		<div className="fixed right-0 bottom-0 left-0 z-50 border-t bg-white shadow-lg">
			<div className="mx-auto flex max-w-4xl items-center justify-between px-4 py-4">
				<div className="flex items-center gap-2">
					<Calendar className="h-5 w-5 text-gray-600" />
					<div>
						<p className="text-gray-600 text-sm">Giá khám</p>
						<p className="font-bold text-gray-900 text-xl">
							{new Intl.NumberFormat("vi-VN").format(price)}₫
						</p>
					</div>
				</div>
				<button
					className="rounded-lg bg-blue-600 px-8 py-3 font-bold text-sm text-white uppercase tracking-wider transition-all hover:bg-blue-700"
					type="button"
				>
					Đặt lịch
				</button>
			</div>
		</div>
	);
}
