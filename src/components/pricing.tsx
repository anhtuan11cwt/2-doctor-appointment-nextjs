"use client";

import { Check, HelpCircle } from "lucide-react";
import { CustomButton } from "@/components/custom-button";
import { Badge } from "@/components/ui/badge";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";

const plans = [
	{
		description: "Hoàn hảo để bắt đầu",
		features: [
			"1 bác sĩ",
			"Lịch hẹn cơ bản",
			"Quản lý bệnh nhân",
			"Hỗ trợ email",
			"Phí giao dịch 5%",
		],
		fee: "5%",
		href: "/register?role=doctor&plan=free",
		isPopular: false,
		name: "Cơ bản",
		plan: "free",
		price: "Miễn phí",
		priceSuffix: "",
	},
	{
		description: "Dành cho phòng khám đang phát triển",
		features: [
			"5 bác sĩ",
			"Lịch hẹn nâng cao",
			"Quản lý bệnh nhân",
			"Hỗ trợ ưu tiên 24/7",
			"Phí giao dịch 2.5%",
			"Báo cáo doanh thu",
		],
		fee: "2.5%",
		href: "/register?role=doctor&plan=professional",
		isPopular: true,
		name: "Chuyên nghiệp",
		plan: "professional",
		price: "1.499.000đ",
		priceSuffix: "/tháng",
	},
	{
		description: "Dành cho bệnh viện lớn",
		features: [
			"Không giới hạn bác sĩ",
			"Lịch hẹn nâng cao",
			"Quản lý bệnh nhân",
			"Hỗ trợ ưu tiên 24/7",
			"Phí giao dịch 1%",
			"Báo cáo doanh thu",
			"Truy cập API",
			"Đào tạo riêng",
		],
		fee: "1%",
		href: "/register?role=doctor&plan=enterprise",
		isPopular: false,
		name: "Doanh nghiệp",
		plan: "enterprise",
		price: "2.499.000đ",
		priceSuffix: "/tháng",
	},
];

export function Pricing() {
	return (
		<TooltipProvider>
			<div className="grid gap-8 md:grid-cols-3">
				{plans.map((plan) => (
					<div
						className={`relative rounded-xl border bg-card p-8 shadow-sm transition-shadow hover:shadow-md ${
							plan.isPopular
								? "border-primary ring-2 ring-primary/20"
								: "border-border"
						}`}
						key={plan.name}
					>
						{plan.isPopular && (
							<Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary">
								Phổ biến nhất
							</Badge>
						)}
						<div className="mb-6">
							<h3 className="font-bold text-foreground text-lg uppercase tracking-wider">
								{plan.name}
							</h3>
							<p className="mt-1 text-muted-foreground text-sm">
								{plan.description}
							</p>
						</div>
						<div className="mb-6">
							<span className="font-bold text-4xl text-foreground">
								{plan.price}
							</span>
							<span className="text-muted-foreground text-sm">
								{plan.priceSuffix}
							</span>
						</div>
						<div className="mb-6 flex items-center gap-1.5 text-muted-foreground text-sm">
							<span>Phí giao dịch: {plan.fee}</span>
							<Tooltip>
								<TooltipTrigger>
									<HelpCircle className="h-4 w-4 cursor-help text-muted-foreground" />
								</TooltipTrigger>
								<TooltipContent>
									<p>Phí áp dụng cho mỗi giao dịch qua Stripe</p>
								</TooltipContent>
							</Tooltip>
						</div>
						<ul className="mb-8 space-y-3">
							{plan.features.map((feature) => (
								<li className="flex items-start gap-2" key={feature}>
									<Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
									<span className="text-muted-foreground text-sm">
										{feature}
									</span>
								</li>
							))}
						</ul>
						<CustomButton
							className={`w-full ${
								plan.isPopular ? "bg-primary hover:bg-primary/90" : ""
							}`}
							href={plan.href}
							title="Bắt đầu ngay"
						/>
					</div>
				))}
			</div>
		</TooltipProvider>
	);
}
