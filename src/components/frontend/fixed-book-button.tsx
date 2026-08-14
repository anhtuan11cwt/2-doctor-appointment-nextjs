"use client";

import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FixedBookButtonProps {
	price: number;
}

export function FixedBookButton({ price }: FixedBookButtonProps) {
	return (
		<div className="fixed right-0 bottom-0 left-0 z-50 border-border border-t bg-card shadow-lg">
			<div className="mx-auto flex max-w-4xl items-center justify-between px-4 py-4">
				<div className="flex items-center gap-2">
					<Calendar className="h-5 w-5 text-muted-foreground" />
					<div>
						<p className="text-muted-foreground text-sm">Giá khám</p>
						<p className="font-bold text-foreground text-xl">
							{new Intl.NumberFormat("vi-VN").format(price)}₫
						</p>
					</div>
				</div>
				<Button
					className="px-8 py-3 font-bold text-sm uppercase tracking-wider"
					type="button"
				>
					Đặt lịch
				</Button>
			</div>
		</div>
	);
}
